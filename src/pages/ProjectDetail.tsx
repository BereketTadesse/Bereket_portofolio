import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { projects } from "@/data/portfolio";
import { Helmet } from "react-helmet-async";

const categoryColors: Record<string, string> = {
  "AI/ML": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "GenAI": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Full-Stack": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Data": "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <Layout>
      <Helmet>
        <title>{project.title} | Bereket Tadesse</title>
        <meta name="description" content={project.description} />
      </Helmet>

      {/* Hero */}
      <section className="section-padding hero-gradient relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={project.images && project.images.length > 0 ? project.images[0] : project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>

            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border mb-4 ${
                categoryColors[project.category]
              }`}
            >
              {project.category}
            </span>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              {project.title}
            </h1>

            <p className="text-lg text-muted-foreground max-w-3xl mb-8">
              {project.longDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              {project.demoUrl && (
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="hero" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-[600px] p-0" side="bottom" align="start">
                    <div className="relative w-full h-[400px] bg-card rounded-lg overflow-hidden border border-border">
                      <iframe
                        src={project.demoUrl}
                        className="w-full h-full border-0"
                        title={`${project.title} Preview`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/20 to-transparent" />
                    </div>
                    <div className="p-3 bg-card border-t border-border">
                      <p className="text-xs text-muted-foreground text-center">
                        Hover to preview • Click to visit
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              )}
              {project.githubUrl && (
                <Button variant="heroOutline" asChild>
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

      {/* Project Images */}
      <section className="section-padding !pt-0 bg-background">
        <div className="container-custom">
          {project.images && project.images.length > 0 ? (
            <div className="space-y-6 -mt-8">
              {project.images.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="relative"
                >
                  <div className="glow-card overflow-hidden">
                    <img
                      src={img}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative -mt-8"
            >
              <div className="glow-card overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background !pt-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Key Highlights
                </h2>
                <div className="space-y-4">
                  {project.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glow-card p-6 sticky top-24"
              >
                <h3 className="font-display font-semibold text-foreground mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
