const fs = require('fs');
const path = require('path');
require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// Check credentials
const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;
const cloudinaryUrl = process.env.CLOUDINARY_URL;

if (!cloudinaryUrl && (!cloudName || !apiKey || !apiSecret)) {
  console.error("Error: Missing Cloudinary credentials in .env file.");
  console.error("Please provide either CLOUDINARY_URL or CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET.");
  process.exit(1);
}

// Configure Cloudinary
if (cloudinaryUrl) {
  cloudinary.config({
    cloudinary_url: cloudinaryUrl
  });
} else {
  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret
  });
}

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const CACHE_FILE = path.join(__dirname, '..', 'cloudinary-cache.json');
const PROJECT_DATA_FILE = path.join(__dirname, '..', 'src', 'lib', 'projectData.ts');

// Load Cache
let cache = {};
if (fs.existsSync(CACHE_FILE)) {
  try {
    cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
    console.log(`Loaded ${Object.keys(cache).length} cached uploads.`);
  } catch (err) {
    console.warn("Failed to parse cache file, starting fresh:", err.message);
  }
}

// Function to recursively scan directories
function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getFiles(filePath, files);
    } else {
      files.push(filePath);
    }
  }
  return files;
}

async function run() {
  if (!fs.existsSync(PUBLIC_DIR)) {
    console.error(`Error: public directory not found at ${PUBLIC_DIR}`);
    process.exit(1);
  }

  const allFiles = getFiles(PUBLIC_DIR);
  console.log(`Found ${allFiles.length} files in public folder.`);

  // Upload files
  let uploadedCount = 0;
  let cachedCount = 0;

  for (const file of allFiles) {
    // Relative path from public directory
    const relativePathWin = path.relative(PUBLIC_DIR, file);
    // Convert Windows backslashes to forward slashes
    const relativePath = '/' + relativePathWin.replace(/\\/g, '/');

    // Skip if cached
    if (cache[relativePath]) {
      cachedCount++;
      continue;
    }

    const ext = path.extname(file).toLowerCase();
    const isVideo = ['.mp4', '.mov', '.webm', '.mkv'].includes(ext);
    const resourceType = isVideo ? 'video' : 'image';

    const relativeDir = path.dirname(relativePathWin);
    // Use URL friendly folders and names (replace spaces and other invalid chars with underscores)
    const folder = ('portfolio/' + relativeDir).replace(/\\/g, '/').replace(/[^a-zA-Z0-9_\-\/]/g, '_');
    const baseName = path.basename(file, ext).replace(/[^a-zA-Z0-9_\-]/g, '_');

    console.log(`Uploading ${relativePath} to ${folder}/${baseName} (${resourceType})...`);

    try {
      let result;
      if (resourceType === 'video') {
        console.log(`  Using chunked upload (upload_large) for video...`);
        result = await new Promise((resolve, reject) => {
          cloudinary.uploader.upload_large(file, {
            folder: folder,
            public_id: baseName,
            resource_type: 'video',
            chunk_size: 6000000 // 6MB chunks
          }, (error, uploadResult) => {
            if (error) return reject(error);
            resolve(uploadResult);
          });
        });
      } else {
        result = await cloudinary.uploader.upload(file, {
          folder: folder,
          public_id: baseName,
          resource_type: 'image'
        });
      }

      // Save to cache
      cache[relativePath] = result.secure_url;
      fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf8');
      uploadedCount++;
      console.log(`  Success! URL: ${result.secure_url}`);
    } catch (err) {
      console.error(`  Failed to upload ${relativePath}:`, err.message);
      if (!global.failedFiles) global.failedFiles = [];
      global.failedFiles.push({ path: relativePath, error: err.message });
    }
  }

  const failedList = global.failedFiles || [];
  console.log(`Upload phase completed. New: ${uploadedCount}, Cached: ${cachedCount}, Total: ${allFiles.length}`);
  if (failedList.length > 0) {
    console.warn(`\n⚠️ Warning: ${failedList.length} files failed to upload:`);
    failedList.forEach(f => console.warn(`  - ${f.path}: ${f.error}`));
  }

  // Now, update src/lib/projectData.ts
  if (fs.existsSync(PROJECT_DATA_FILE)) {
    console.log(`Updating paths in ${PROJECT_DATA_FILE}...`);
    let projectDataContent = fs.readFileSync(PROJECT_DATA_FILE, 'utf8');
    let replacedCount = 0;

    for (const [localPath, cloudUrl] of Object.entries(cache)) {
      // Find exact matches like "/projects/Atlas_Valve.png"
      // Escape localPath for regex
      const escapedLocalPath = localPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`['"]${escapedLocalPath}['"]`, 'g');
      
      if (regex.test(projectDataContent)) {
        projectDataContent = projectDataContent.replace(regex, `"${cloudUrl}"`);
        replacedCount++;
      }
    }

    fs.writeFileSync(PROJECT_DATA_FILE, projectDataContent, 'utf8');
    console.log(`Successfully updated ${replacedCount} references in projectData.ts.`);
  } else {
    console.warn(`Warning: projectData.ts not found at ${PROJECT_DATA_FILE}. Code replacement skipped.`);
  }

  console.log("All tasks completed successfully!");
}

run();
