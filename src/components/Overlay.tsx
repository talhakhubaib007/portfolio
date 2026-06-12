"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Section 1: Hero
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  // Section 2: Intro
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.9, 1.0], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.4, 1.0], [30, 0, -30]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center px-8 md:px-24">
      {/* Section 1: Hero */}
      <motion.div
        style={{ opacity: opacity1, scale: scale1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}



          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 drop-shadow-2xl leading-[0.9]">
            I Create <br />
            <span className="accent-glow">Scroll-Stopping</span> <br />
            3D Product Animations
          </h1>
          <p className="text-xl md:text-3xl text-white font-medium max-w-3xl mx-auto mb-10 tracking-tight drop-shadow-lg">
            Blender-based product visuals that elevate brands and drive engagement.
          </p>
          <div className="flex gap-6 justify-center pointer-events-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-[var(--accent)] text-white font-semibold rounded-full shadow-[0_0_20px_rgba(217,70,239,0.3)] transition-all"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Hire Me
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center text-left px-8 md:px-24 z-20"
      >
        <div className="max-w-2xl">
          <p className="text-zinc-500 font-medium uppercase tracking-[0.3em] mb-4 text-sm">Introduction</p>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-none">
            I am <span className="accent-glow">Talha Khubaib</span>
          </h2>
          <p className="text-xl md:text-3xl text-zinc-400 font-light mb-10 tracking-tight">
            A 3D artist specializing in:
          </p>
          <ul className="space-y-6">
            {[
              "High-Quality Product Animation",
              "Lighting",
              "Realistic Rendering"
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                viewport={{ once: true }}
                className="flex items-center gap-4 text-white/90 text-lg md:text-2xl font-medium tracking-tight"
              >
                <span className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-[var(--accent)] shadow-[0_0_15px_rgba(217,70,239,0.6)]" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

