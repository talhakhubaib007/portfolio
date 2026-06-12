"use client";

import { motion } from "framer-motion";

const coreSkills = [
  "Product Animation",
  "CGI & VFX",
  "Lighting & Rendering",
  "Video Editing",
  "Logo & Text Animation",
  "Motion Design",
  "Video Tracking",
];

const tools = [
  { name: "Blender", level: "Expert" },
  { name: "Adobe After Effects", level: "Advanced" },
  { name: "Adobe Premiere Pro", level: "Advanced" },
  { name: "Adobe Photoshop", level: "Advanced" },
  { name: "Adobe Illustrator", level: "Intermediate" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-8 md:px-24 bg-transparent relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Core Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-zinc-500 font-medium uppercase tracking-[0.3em] mb-4 text-sm">Expertise</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-12">
              Core Skills
            </h2>
            <div className="flex flex-wrap gap-4">
              {coreSkills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(217, 70, 239, 0.1)", borderColor: "var(--accent)" }}
                  className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-zinc-300 font-medium transition-all"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Tools & Software */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-zinc-500 font-medium uppercase tracking-[0.3em] mb-4 text-sm">Toolkit</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-12">
              3D & Tools
            </h2>
            <div className="space-y-6">
              {tools.map((tool, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xl text-white font-medium group-hover:text-[var(--accent)] transition-colors">{tool.name}</span>
                    <span className="text-[var(--accent)] font-semibold tracking-wide text-sm uppercase">{tool.level}</span>
                  </div>
                  <div className="h-[1px] w-full bg-white/10 group-hover:bg-[var(--accent)]/50 transition-colors" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent)]/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
