import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, CheckCircle, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";
import { Helmet } from "react-helmet-async";

const categoryColors: Record<string, string> = {
  "AI/ML": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "GenAI": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Data": "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const allImages = project.images && project.images.length > 0 ? project.images : [project.image];

  const prev = () => setActiveImg((i) => (i === 0 ? allImages.length - 1 : i - 1));
  const next = () => setActiveImg((i) => (i === allImages.length - 1 ? 0 : i + 1));

  const prevLb = () => setLightbox((i) => (i === null ? null : i === 0 ? allImages.length - 1 : i - 1));
  const nextLb = () => setLightbox((i) => (i === null ? null : i === allImages.length - 1 ? 0 : i + 1));

  return (
    <Layout>
      <Helmet>
        <title>{project.title} | Bereket Tadesse</title>
        <meta name="description" content={project.description} />
      </Helmet>

      {/* ── Hero banner ──────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{ background: "hsl(0 0% 5%)" }}
      >
        {/* faint blurred bg image */}
        <div className="absolute inset-0">
          <img
            src={allImages[0]}
            alt=""
            className="w-full h-full object-cover opacity-[0.06] blur-sm scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(0_0%_5%/0.6)] via-[hsl(0_0%_5%/0.85)] to-[hsl(0_0%_5%)]" />
        </div>

        {/* grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(0 0% 100% / 0.03) 1px, transparent 1px),
                             linear-gradient(to bottom, hsl(0 0% 100% / 0.03) 1px, transparent 1px)`,
            backgroundSize: "55px 55px",
          }}
        />

        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[project.category]}`}>
                {project.category}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl leading-tight">
              {project.title}
            </h1>
            <p className="text-base text-white/60 max-w-2xl mb-8 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.demoUrl && (
                <Button variant="hero" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button asChild className="rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 transition-all duration-300">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Image Gallery ──────────────────────────────────────── */}
      <section className="bg-[hsl(0_0%_5%)] pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Main image viewer */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 group">
              <div className="relative w-full" style={{ maxHeight: "520px" }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImg}
                    src={allImages[activeImg]}
                    alt={`${project.title} - ${activeImg + 1}`}
                    className="w-full object-contain cursor-zoom-in"
                    style={{ maxHeight: "520px", background: "hsl(0 0% 8%)" }}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setLightbox(activeImg)}
                  />
                </AnimatePresence>

                {/* Click to enlarge hint */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/60 text-white/60 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to enlarge
                </div>
              </div>

              {/* Prev / Next arrows */}
              {allImages.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail strip */}
            {allImages.length > 1 && (
              <div className="flex gap-3 mt-4 overflow-x-auto pb-1">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${i === activeImg
                      ? "border-primary scale-105 shadow-lg shadow-primary/30"
                      : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/30"
                      }`}
                  >
                    <img src={img} alt={`thumb ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── Details ──────────────────────────────────────── */}
      <section className="bg-[hsl(0_0%_5%)] section-padding !pt-4">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Key Highlights */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {/* About This Project — now at the top */}
                <div className="mb-8 p-5 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                  <h3 className="font-display text-sm font-semibold text-white/50 uppercase tracking-widest mb-3">About This Project</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{project.longDescription}</p>
                </div>

                <h2 className="font-display text-xl font-bold text-white mb-5 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-primary inline-block" />
                  Key Highlights
                </h2>
                <div className="space-y-3">
                  {project.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-primary/30 hover:bg-white/[0.06] transition-all duration-300"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm leading-relaxed">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar — Tech stack */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="sticky top-24 p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08]"
              >
                <h3 className="font-display text-sm font-semibold text-white/50 uppercase tracking-widest mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTAs repeated */}
                <div className="mt-6 flex flex-col gap-3">
                  {project.demoUrl && (
                    <Button variant="hero" asChild className="w-full">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button asChild className="w-full rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 transition-all duration-300">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Lightbox ──────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X className="w-5 h-5" />
            </button>

            {allImages.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-colors"
                  onClick={(e) => { e.stopPropagation(); prevLb(); }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-colors"
                  onClick={(e) => { e.stopPropagation(); nextLb(); }}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            <motion.img
              key={lightbox}
              src={allImages[lightbox]}
              alt={project.title}
              className="max-w-full max-h-[90vh] rounded-xl object-contain shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />

            {allImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {allImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                    className={`w-2 h-2 rounded-full transition-all ${i === lightbox ? "bg-primary w-5" : "bg-white/30 hover:bg-white/60"}`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default ProjectDetail;
