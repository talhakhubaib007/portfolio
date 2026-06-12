"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Overlay from "./Overlay";

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dpp6pjdbo';
const frameCount = 192;
const currentFrame = (index: number) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/portfolio/sequence/Hero_image${(index + 1).toString().padStart(4, '0')}.webp`;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return;

    const context = canvasRef.current.getContext("2d");
    if (!context) return;

    // Draw first frame
    const render = (img: HTMLImageElement) => {
      if (!canvasRef.current) return;
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    // Draw initially if first image is loaded
    if (images[0].complete) {
      render(images[0]);
    } else {
      images[0].onload = () => render(images[0]);
    }

    // Handle scroll
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(latest * frameCount)
      );
      
      const img = images[frameIndex];
      if (img && img.complete) {
        requestAnimationFrame(() => render(img));
      }
    });

    // Handle resize
    const handleResize = () => {
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollYProgress.get() * frameCount)
      );
      const img = images[frameIndex];
      if (img && img.complete) {
        render(img);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  }, [images, scrollYProgress]);

  const canvasX = useTransform(scrollYProgress, [0.2, 0.35], ["0%", "35%"]);
  const canvasScale = useTransform(scrollYProgress, [0.2, 0.35], [1, 0.85]);
  const canvasRotate = useTransform(scrollYProgress, [0.2, 0.35], [0, -2]);

  return (
    <div ref={containerRef} className="relative w-full h-[500vh] bg-transparent">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.canvas 
          ref={canvasRef} 
          style={{ x: canvasX, scale: canvasScale, rotate: canvasRotate }}
          className="absolute inset-0 w-full h-full object-cover will-change-transform shadow-[0_0_100px_rgba(217,70,239,0.1)]" 
        />
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
