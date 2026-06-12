export interface ProjectData {
  slug: string;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  details: string;
  software: string[];
  year: string;
  video?: string;
  images: string[];
}

export const projects: ProjectData[] = [
  {
    slug: "atlas-valve",
    title: "Atlas Valve",
    category: "Industrial 3D Animation",
    thumbnail: "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281881/portfolio/projects/Atlas_Valve.png",
    description:
      "A precision-engineered industrial valve brought to life through cinematic 3D animation — showcasing every component, mechanism, and detail.",
    details:
      "This project involved creating a photorealistic 3D visualization of the Atlas Valve, an industrial-grade flow control mechanism. Every thread, seal, and surface finish was meticulously modeled and textured in Blender. The animation reveals the internal assembly and mechanical operation, giving engineers and stakeholders an unprecedented look at the product's craftsmanship.",
    software: ["Blender", "Substance Painter", "After Effects"],
    year: "2024",
    video: "https://res.cloudinary.com/dpp6pjdbo/video/upload/v1781281144/portfolio/Atlas_Valve/Animation.mp4",
    images: [
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281125/portfolio/Atlas_Valve/1.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281126/portfolio/Atlas_Valve/2.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281128/portfolio/Atlas_Valve/3.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281130/portfolio/Atlas_Valve/4.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281132/portfolio/Atlas_Valve/5.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281133/portfolio/Atlas_Valve/6.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281135/portfolio/Atlas_Valve/7.png",
    ],
  },
  {
    slug: "evolve-boots",
    title: "Evolve Boots",
    category: "Footwear Design & Motion",
    thumbnail: "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281884/portfolio/projects/Evolve_Boots.png",
    description:
      "High-performance tactical boots visualized with hyper-realistic rendering and dynamic product animation.",
    details:
      "The Evolve Boots project captures the rugged elegance of next-generation tactical footwear. Each render highlights the intricate texturing of reinforced leather, carbon-fiber accents, and adaptive sole technology. The animation sequence demonstrates the boot's flexibility and structural integrity through dramatic camera movements and studio-grade lighting.",
    software: ["Blender", "Substance Painter", "DaVinci Resolve"],
    year: "2024",
    video: "https://res.cloudinary.com/dpp6pjdbo/video/upload/v1781281198/portfolio/Evolve_Boots/Boot_final.mp4",
    images: [
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281147/portfolio/Evolve_Boots/7.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281151/portfolio/Evolve_Boots/B10.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281154/portfolio/Evolve_Boots/B11.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281156/portfolio/Evolve_Boots/B12.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281160/portfolio/Evolve_Boots/B13.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281163/portfolio/Evolve_Boots/B14.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281167/portfolio/Evolve_Boots/B15.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281170/portfolio/Evolve_Boots/B16.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281173/portfolio/Evolve_Boots/B17.png",
    ],
  },
  {
    slug: "glass-cleaning-robot",
    title: "Glass Cleaning Robot",
    category: "Product Visualization",
    thumbnail: "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281887/portfolio/projects/Glass_Cleaning_Robot.png",
    description:
      "A futuristic glass-cleaning robot rendered in stunning detail — blending sleek industrial design with cutting-edge automation.",
    details:
      "This product visualization project showcases an automated glass-cleaning robot designed for high-rise buildings. The 3D renders emphasize the device's compact form factor, suction mechanism, and ergonomic controls. Underwater-inspired lighting and macro-level detail shots elevate the product's perceived value for marketing materials and crowdfunding campaigns.",
    software: ["Blender", "Photoshop", "After Effects"],
    year: "2024",
    video: "https://res.cloudinary.com/dpp6pjdbo/video/upload/v1781281229/portfolio/Glass_Cleaning_Robot/Anim.mp4",
    images: [
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281202/portfolio/Glass_Cleaning_Robot/1.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281205/portfolio/Glass_Cleaning_Robot/2.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281208/portfolio/Glass_Cleaning_Robot/3.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281211/portfolio/Glass_Cleaning_Robot/4.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281212/portfolio/Glass_Cleaning_Robot/5.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281215/portfolio/Glass_Cleaning_Robot/6.png",
    ],
  },
  {
    slug: "jewellery-renders",
    title: "Jewellery Renders",
    category: "Luxury Rendering",
    thumbnail: "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281891/portfolio/projects/Jewellery_Renders.png",
    description:
      "Exquisite jewellery pieces captured in photorealistic 3D — where every facet, chain link, and gemstone radiates luxury.",
    details:
      "A comprehensive collection of high-end jewellery renders featuring intricate dragon pendants, leaf bracelets, and floral necklaces. Each piece was modeled with sub-millimeter precision, utilizing advanced shader networks for realistic gold, silver, and gemstone materials. The studio lighting setup creates the characteristic jewellery-photography look with soft reflections and subtle caustics.",
    software: ["Blender", "Substance Painter", "Photoshop"],
    year: "2024",
    images: [
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281232/portfolio/Jewellery_Renders/1.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281256/portfolio/Jewellery_Renders/4.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281260/portfolio/Jewellery_Renders/6.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281234/portfolio/Jewellery_Renders/10.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281236/portfolio/Jewellery_Renders/13.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281238/portfolio/Jewellery_Renders/16.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281240/portfolio/Jewellery_Renders/20.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281243/portfolio/Jewellery_Renders/22.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281245/portfolio/Jewellery_Renders/23.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281247/portfolio/Jewellery_Renders/29.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281250/portfolio/Jewellery_Renders/32.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281252/portfolio/Jewellery_Renders/37.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281254/portfolio/Jewellery_Renders/39.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281258/portfolio/Jewellery_Renders/43.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281298/portfolio/Jewellery_Renders/Dragon___Flower-1.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281300/portfolio/Jewellery_Renders/Dragon_Neclace-4.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281302/portfolio/Jewellery_Renders/Leaf_bracelet-4.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281304/portfolio/Jewellery_Renders/Leaf_bracelet-5.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281306/portfolio/Jewellery_Renders/Leaf_chain_bracelet-2.png",
    ],
  },
  {
    slug: "led-face-mask",
    title: "LED Face Mask",
    category: "Tech Product Animation",
    thumbnail: "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281896/portfolio/projects/LED_Face_Mask.png",
    description:
      "A cutting-edge LED therapy face mask rendered with dramatic lighting — where technology meets skincare innovation.",
    details:
      "This project brings a next-generation LED skincare device to life through cinematic product visualization. The 360° animation reveals the mask's ergonomic contours, LED array patterns, and premium build quality. Each render explores different lighting scenarios — from moody studio setups to clinical white environments — demonstrating the product's versatility for various marketing contexts.",
    software: ["Blender", "After Effects", "Photoshop"],
    year: "2024",
    video: "https://res.cloudinary.com/dpp6pjdbo/video/upload/v1781281343/portfolio/LED_Face_Mask/Mask_360.mp4",
    images: [
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281310/portfolio/LED_Face_Mask/M1.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281317/portfolio/LED_Face_Mask/M2.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281320/portfolio/LED_Face_Mask/M3.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281324/portfolio/LED_Face_Mask/M4.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281325/portfolio/LED_Face_Mask/M5.jpg",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281327/portfolio/LED_Face_Mask/M6.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281330/portfolio/LED_Face_Mask/M7.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281334/portfolio/LED_Face_Mask/M8.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281337/portfolio/LED_Face_Mask/M9.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281314/portfolio/LED_Face_Mask/M10.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281345/portfolio/LED_Face_Mask/R11.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281346/portfolio/LED_Face_Mask/R12.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281349/portfolio/LED_Face_Mask/R20.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281351/portfolio/LED_Face_Mask/R21.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281353/portfolio/LED_Face_Mask/R22.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281356/portfolio/LED_Face_Mask/R23.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281361/portfolio/LED_Face_Mask/R24.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281366/portfolio/LED_Face_Mask/R26.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281371/portfolio/LED_Face_Mask/R27.png",
    ],
  },
  {
    slug: "mobile-animation",
    title: "Mobile Animation",
    category: "Device Visualization",
    thumbnail: "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281898/portfolio/projects/Mobile_Animation.png",
    description:
      "A rugged two-way radio device showcased through cinematic 3D animation — highlighting durability, display clarity, and professional design.",
    details:
      "This device visualization project captures a professional-grade mobile communication device through multiple angles and lighting setups. The animation sequence walks viewers through the device's key features — from the high-contrast display to the tactile button layout and antenna design. Each frame is composed to feel like a premium product commercial.",
    software: ["Blender", "After Effects"],
    year: "2024",
    video: "https://res.cloudinary.com/dpp6pjdbo/video/upload/v1781289629/portfolio/Mobile_Animation/Final_Animation.mp4",
    images: [
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281373/portfolio/Mobile_Animation/0001.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281375/portfolio/Mobile_Animation/0002.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281376/portfolio/Mobile_Animation/0003.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281378/portfolio/Mobile_Animation/0004.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281385/portfolio/Mobile_Animation/0550.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281388/portfolio/Mobile_Animation/0680.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281389/portfolio/Mobile_Animation/0700.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281391/portfolio/Mobile_Animation/0750.png",
    ],
  },
  {
    slug: "perfume",
    title: "Perfume",
    category: "Scent Branding",
    thumbnail: "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281901/portfolio/projects/Perfume.png",
    description:
      "Luxury perfume bottle rendered with exquisite attention to glass refraction, liquid dynamics, and premium packaging design.",
    details:
      "A study in luxury product rendering — this perfume visualization explores the interplay of light through glass, the subtle color of the fragrance liquid, and the tactile quality of the bottle's cap and label. Each render is designed to evoke the sophistication and exclusivity of a high-end fragrance brand, ready for print and digital campaigns.",
    software: ["Blender", "Photoshop"],
    year: "2024",
    images: [
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281497/portfolio/Perfume/0001.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281499/portfolio/Perfume/1.jpg",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281505/portfolio/Perfume/2.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781289632/portfolio/Perfume/3.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281831/portfolio/Perfume/4.jpg",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281832/portfolio/Perfume/5.jpg",
    ],
  },
  {
    slug: "perfume-renders-anim",
    title: "Perfume Renders & Anim",
    category: "Product Commercial",
    thumbnail: "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281903/portfolio/projects/Perfume_Renders___Anim.png",
    description:
      "A cinematic perfume commercial created entirely in 3D — combining photorealistic renders with fluid animation.",
    details:
      "Taking luxury fragrance visualization further, this project combines static beauty shots with a full product animation. The camera orbits the bottle while dynamic lighting reveals the glass texture, metallic accents, and brand embossing. The animation is crafted to function as a standalone commercial spot, complete with dramatic pacing and premium atmospherics.",
    software: ["Blender", "After Effects", "DaVinci Resolve"],
    year: "2024",
    video: "https://res.cloudinary.com/dpp6pjdbo/video/upload/v1781281878/portfolio/Perfume_Renders___Anim/Animation.mp4",
    images: [
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781289634/portfolio/Perfume_Renders___Anim/1.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281845/portfolio/Perfume_Renders___Anim/3.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781289636/portfolio/Perfume_Renders___Anim/4.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781289638/portfolio/Perfume_Renders___Anim/6.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281872/portfolio/Perfume_Renders___Anim/8.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281834/portfolio/Perfume_Renders___Anim/0100.png",
    ],
  },
  {
    slug: "serum",
    title: "Serum",
    category: "Beauty Product Rendering",
    thumbnail: "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281905/portfolio/projects/Serum.jpg",
    description:
      "A beauty serum bottle rendered with soft, editorial-grade lighting — designed to feel aspirational and premium.",
    details:
      "This beauty product render showcases a skincare serum with the kind of visual quality you'd expect in a luxury magazine spread. The project focuses on material accuracy — translucent liquid, frosted glass, and the subtle metallic sheen of the dropper cap. Soft gradient backgrounds and carefully placed highlights give each render a refined, editorial quality.",
    software: ["Blender", "Photoshop"],
    year: "2024",
    images: [
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781282159/portfolio/Serum/1.jpg",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781282162/portfolio/Serum/2.jpg",
    ],
  },
  {
    slug: "shirt-knitting",
    title: "Shirt Knitting",
    category: "Cloth Simulation",
    thumbnail: "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281906/portfolio/projects/Shirt_Knitting.png",
    description:
      "Advanced cloth simulation showcasing the intricate process of fabric knitting — thread by thread, stitch by stitch.",
    details:
      "This project pushes the boundaries of Blender's cloth simulation engine to visualize the process of shirt knitting at a macro level. Individual threads interweave in real-time, building up the fabric structure from nothing. The result is a mesmerizing animation that reveals the hidden complexity behind everyday textiles, perfect for fashion-tech presentations.",
    software: ["Blender", "After Effects"],
    year: "2024",
    video: "https://res.cloudinary.com/dpp6pjdbo/video/upload/v1781282167/portfolio/Shirt_Knitting/Animation.mp4",
    images: [
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781282169/portfolio/Shirt_Knitting/R1.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781282170/portfolio/Shirt_Knitting/R2.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781282172/portfolio/Shirt_Knitting/R3.png",
    ],
  },
  {
    slug: "shoe-knitting",
    title: "Shoe Knitting",
    category: "Advanced Textiles",
    thumbnail: "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281906/portfolio/projects/Shoe_Knitting.jpg",
    description:
      "Next-level textile simulation — watching a shoe knit itself into existence through advanced 3D simulation.",
    details:
      "Building on the cloth simulation expertise, this project visualizes an entire shoe being constructed through automated knitting. The simulation captures the tension, elasticity, and structural integrity of performance footwear fabric as it forms around a last. Each frame reveals the mesmerizing dance of yarn and needle, creating a hypnotic visual that bridges fashion and technology.",
    software: ["Blender", "Marvelous Designer", "After Effects"],
    year: "2024",
    video: "https://res.cloudinary.com/dpp6pjdbo/video/upload/v1781282202/portfolio/Shoe_Knitting/Shoes.mp4",
    images: [
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781282173/portfolio/Shoe_Knitting/65.jpg",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781282174/portfolio/Shoe_Knitting/69.jpg",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781282175/portfolio/Shoe_Knitting/73.jpg",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781282176/portfolio/Shoe_Knitting/74.jpg",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781282176/portfolio/Shoe_Knitting/76.jpg",
    ],
  },
  {
    slug: "wallet-animation",
    title: "Wallet Animation",
    category: "Accessories Animation",
    thumbnail: "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781281909/portfolio/projects/Wallet_Animation.png",
    description:
      "A premium leather wallet animated with cinematic flair — revealing every fold, stitch, and compartment in stunning detail.",
    details:
      "This accessories animation project transforms a simple wallet into a visual spectacle. The camera explores the wallet's premium leather texture, precision stitching, and multi-compartment design through a choreographed animation sequence. Dramatic lighting emphasizes the material quality, making it ideal for e-commerce product pages and social media marketing.",
    software: ["Blender", "After Effects", "Photoshop"],
    year: "2024",
    video: "https://res.cloudinary.com/dpp6pjdbo/video/upload/v1781282253/portfolio/Wallet_Animation/Animation.mp4",
    images: [
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781282260/portfolio/Wallet_Animation/R1.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781282263/portfolio/Wallet_Animation/R3.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781282266/portfolio/Wallet_Animation/R4.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781282267/portfolio/Wallet_Animation/R7.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781282270/portfolio/Wallet_Animation/R9.png",
      "https://res.cloudinary.com/dpp6pjdbo/image/upload/v1781282261/portfolio/Wallet_Animation/R13.png",
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
