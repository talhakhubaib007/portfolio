"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import type { ProjectData } from "@/lib/projectData";

interface MediaItem {
  type: "image" | "video";
  url: string;
}

/* ─── Lightbox ─── */
function Lightbox({
  media,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: {
  media: MediaItem[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, onNext, onPrev]);

  const activeItem = media[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="lightbox-overlay"
      onClick={onClose}
    >
      {/* Close Button */}
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Counter */}
      <div className="lightbox-counter">
        {currentIndex + 1} / {media.length}
      </div>

      {/* Prev */}
      <button
        className="lightbox-nav lightbox-nav--prev"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Content Wrapper */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="lightbox-media-wrap"
        onClick={(e) => e.stopPropagation()}
      >
        {activeItem.type === "video" ? (
          <video
            src={activeItem.url}
            controls
            autoPlay
            playsInline
            className="lightbox-video"
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <img
            src={activeItem.url}
            alt={`Project media ${currentIndex + 1}`}
            className="lightbox-image"
          />
        )}
      </motion.div>

      {/* Next */}
      <button
        className="lightbox-nav lightbox-nav--next"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </motion.div>
  );
}

/* ─── Project Detail Component ─── */
export default function ProjectDetail({ project }: { project: ProjectData }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Combine video and images into a single vertical media list
  const mediaList: MediaItem[] = [];
  if (project.video) {
    mediaList.push({ type: "video", url: project.video });
  }
  project.images.forEach((img) => {
    mediaList.push({ type: "image", url: img });
  });

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextMedia = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % mediaList.length : null
    );
  }, [mediaList.length]);
  const prevMedia = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + mediaList.length) % mediaList.length
        : null
    );
  }, [mediaList.length]);

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="detail-hero">
        <div className="detail-hero__bg">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="detail-hero__bg-image"
          />
          <div className="detail-hero__bg-overlay" />
        </div>

        <div className="detail-hero__content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Link href="/#projects" className="detail-back-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Back to Projects
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="detail-hero__category"
          >
            {project.category}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="detail-hero__title"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="detail-hero__description"
          >
            {project.description}
          </motion.p>
        </div>
      </section>

      {/* ── Case Study Header (Behance-style Information Layout) ── */}
      <section className="detail-info-section">
        <div className="detail-info-section__inner">
          <div className="detail-info-grid">
            {/* About / Description column */}
            <div className="detail-about-col">
              <span className="detail-section-label">Overview</span>
              <p className="detail-about-text">{project.details}</p>
            </div>

            {/* Metadata column */}
            <div className="detail-meta-col">
              <span className="detail-section-label">Project Details</span>
              <div className="detail-meta-list">
                <div className="detail-meta-item">
                  <span className="detail-meta-item__label">Category</span>
                  <span className="detail-meta-item__value">{project.category}</span>
                </div>
                <div className="detail-meta-item">
                  <span className="detail-meta-item__label">Software</span>
                  <span className="detail-meta-item__value">{project.software.join(" · ")}</span>
                </div>
                <div className="detail-meta-item">
                  <span className="detail-meta-item__label">Year</span>
                  <span className="detail-meta-item__value">{project.year}</span>
                </div>
                <div className="detail-meta-item">
                  <span className="detail-meta-item__label">Role</span>
                  <span className="detail-meta-item__value">3D Artist / Animator</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Behance-Style Vertical Media Stack ── */}
      <section className="detail-media-stack">
        <div className="detail-media-stack__inner">
          {mediaList.map((item, idx) => (
            <motion.div
              key={`${item.url}-${idx}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="detail-media-card"
              onClick={() => openLightbox(idx)}
            >
              {item.type === "video" ? (
                <div className="detail-media-card__video-wrap">
                  <video
                    src={item.url}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="detail-media-card__video"
                  />
                  <div className="detail-media-card__overlay">
                    <div className="detail-media-card__action">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                      <span>Play Animation</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="detail-media-card__image-wrap">
                  <img
                    src={item.url}
                    alt={`${project.title} Render ${idx + (project.video ? 0 : 1)}`}
                    className="detail-media-card__image"
                    loading="lazy"
                  />
                  <div className="detail-media-card__overlay">
                    <div className="detail-media-card__action">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                      <span>Expand View</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Footer Navigation ── */}
      <section className="detail-footer-nav">
        <Link href="/#projects" className="detail-footer-nav__link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to All Projects
        </Link>
      </section>

      {/* ── Unified Media Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            media={mediaList}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onNext={nextMedia}
            onPrev={prevMedia}
          />
        )}
      </AnimatePresence>
    </>
  );
}

