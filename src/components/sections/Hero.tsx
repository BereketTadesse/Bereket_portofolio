import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "hsl(0 0% 5%)" }}
    >
      {/* Warm amber radial glow — center-bottom, matching the reference */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 65% at 50% 85%, hsl(35 90% 22% / 0.85) 0%, hsl(28 80% 12% / 0.55) 38%, transparent 72%)",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(0 0% 100% / 0.045) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(0 0% 100% / 0.045) 1px, transparent 1px)`,
          backgroundSize: "55px 55px",
        }}
      />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            AVAILABLE FOR NEW PROJECTS
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <h1 className="font-display font-bold leading-[1.05]">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white">
              I build
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary">
              Solutions
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/projects">
              View My Work
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            asChild
            className="rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 transition-all duration-300"
          >
            <Link to="/contact">
              Contact Me
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
