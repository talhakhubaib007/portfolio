const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const CACHE_FILE = path.join(__dirname, '..', 'cloudinary-cache.json');

if (!fs.existsSync(CACHE_FILE)) {
  console.error('cloudinary-cache.json not found!');
  process.exit(1);
}

const cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
const uploadedPaths = Object.keys(cache); // e.g. ["/Atlas Valve/1.png", ...]

let deleted = 0;
let notFound = 0;
const removedDirs = new Set();

for (const relativePath of uploadedPaths) {
  // relativePath starts with "/" e.g. "/Atlas Valve/1.png"
  const localFile = path.join(PUBLIC_DIR, relativePath.replace(/\//g, path.sep));
  
  if (fs.existsSync(localFile)) {
    fs.unlinkSync(localFile);
    console.log(`Deleted: ${relativePath}`);
    deleted++;
    // Track parent directory for potential cleanup
    removedDirs.add(path.dirname(localFile));
  } else {
    notFound++;
  }
}

// Remove empty directories
for (const dir of removedDirs) {
  try {
    if (fs.existsSync(dir) && fs.readdirSync(dir).length === 0) {
      fs.rmdirSync(dir);
      console.log(`Removed empty dir: ${dir}`);
    }
  } catch (e) {
    // Ignore errors
  }
}

console.log(`\nDone! Deleted ${deleted} files. ${notFound} were already gone.`);
