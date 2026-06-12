"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useCallback } from "react";
import { projects } from "@/lib/projectData";
import type { ProjectData } from "@/lib/projectData";

/* ─── Individual Project Card ─── */
function ProjectCard({ project, index }: { project: ProjectData; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (videoRef.current && project.video) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [project.video]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setVideoReady(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  const hasVideo = !!project.video;

  return (
    <Link href={`/projects/${project.slug}`} className="project-card__link">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, margin: "-60px" }}
        whileHover={{ y: -8 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="project-card group"
      >
        {/* ── Thumbnail Image ── */}
        <div
          className="project-card__media"
          style={{
            opacity: isHovered && videoReady && hasVideo ? 0 : 1,
          }}
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`project-card__image ${
              isHovered && !hasVideo ? "project-card__image--zoomed" : ""
            }`}
          />
        </div>

        {/* ── Video (only if available) ── */}
        {hasVideo && (
          <div
            className="project-card__media project-card__video-wrap"
            style={{
              opacity: isHovered && videoReady ? 1 : 0,
            }}
          >
            <video
              ref={videoRef}
              src={project.video}
              muted
              playsInline
              loop
              preload="metadata"
              onCanPlay={() => {
                if (isHovered) setVideoReady(true);
              }}
              className="project-card__video"
            />
          </div>
        )}

        {/* ── Gradient overlay ── */}
        <div className="project-card__gradient" />

        {/* ── Play indicator for video projects ── */}
        {hasVideo && (
          <div
            className="project-card__play-indicator"
            style={{
              opacity: isHovered ? 0 : 0.9,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
        )}

        {/* ── Hover border glow ── */}
        <div
          className="project-card__glow"
          style={{
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* ── Text Content ── */}
        <div className="project-card__content">
          <p className="project-card__category">
            {project.category}
          </p>
          <h3 className="project-card__title">
            {project.title}
          </h3>
        </div>
      </motion.div>
    </Link>
  );
}

/* ─── Projects Section ─── */
export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="projects-container"
      >
        <div className="projects-header">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="projects-label"
          >
            Portfolio
          </motion.p>
          <h2 className="projects-title">
            Selected Works
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="projects-divider"
          />
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
