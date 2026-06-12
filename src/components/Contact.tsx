"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-8 md:px-24 bg-transparent relative z-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="p-16 md:p-24 rounded-[4rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-3xl"
        >
          <p className="text-[var(--accent)] font-medium uppercase tracking-[0.3em] mb-6">Available for Freelance</p>
          <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-8">
            Let’s Work <br /> Together
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light">
            I’m available for freelance projects and collaborations. Let’s create something amazing.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <motion.a
              href="mailto:placeholder@email.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-[var(--accent)] text-white font-bold rounded-full text-lg shadow-[0_0_30px_rgba(217,70,239,0.3)]"
            >
              Contact Me
            </motion.a>
            <div className="flex gap-8 text-zinc-400 font-medium">
              <a href="https://www.linkedin.com/in/talhakhubaib007/" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Upwork</a>
              <a href="#" className="hover:text-white transition-colors">Medium</a>
            </div>
          </div>
        </motion.div>
        
        <footer className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-sm">
          <p>© {new Date().getFullYear()} Talha Khubaib. All rights reserved.</p>
          <p className="mt-4 md:mt-0 tracking-widest uppercase">3D Product Animation Artist</p>
        </footer>
      </div>
    </section>
  );
}
