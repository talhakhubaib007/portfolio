"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior 3D Artist",
    company: "BlenSpark",
    duration: "1 Year",
    description: "Led product animation projects, created high-end visuals, and delivered optimized 3D content for commercial use.",
  },
  {
    role: "Senior 3D Artist",
    company: "Broad Wave Creations",
    duration: "1 Year",
    description: "Worked on product commercials, CGI visuals, and motion design, ensuring high-quality output aligned with client branding.",
  },
  {
    role: "Freelance 3D Artist",
    company: "International Clients",
    duration: "2 Years",
    description: "Collaborated with international clients to create product animations, 360° videos, and marketing visuals for eCommerce and social media.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-8 md:px-24 bg-transparent relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-[var(--accent)] font-medium uppercase tracking-[0.3em] mb-4 text-sm">Career Journey</p>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative grid grid-cols-1 md:grid-cols-4 gap-8 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all duration-300"
            >
              <div className="md:col-span-1">
                <p className="text-zinc-500 font-medium">{exp.duration}</p>
                <p className="text-[var(--accent)] font-semibold mt-1">{exp.company}</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--accent)] transition-colors">
                  {exp.role}
                </h3>
                <p className="text-zinc-400 leading-relaxed max-w-2xl text-lg">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
