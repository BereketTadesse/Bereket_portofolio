import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experiences } from "@/data/portfolio";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [dotY, setDotY] = useState<number>(18);
  const [lineHeight, setLineHeight] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const updateTimeline = () => {
      if (!containerRef.current || itemRefs.current.length === 0) return;

      const validElements = itemRefs.current.filter((el): el is HTMLDivElement => el !== null);
      if (validElements.length === 0) return;

      const dotPositions = validElements.map((el) => el.offsetTop + 18);
      const screenPositions = validElements.map((el) => el.getBoundingClientRect().top + 18);

      const firstY = dotPositions[0];
      const lastY = dotPositions[dotPositions.length - 1];
      setLineHeight(Math.max(0, lastY - firstY));

      const focalY = window.innerHeight * 0.42;

      if (focalY <= screenPositions[0]) {
        setDotY(firstY);
        setActiveIndex(0);
      } else if (focalY >= screenPositions[screenPositions.length - 1]) {
        setDotY(lastY);
        setActiveIndex(screenPositions.length - 1);
      } else {
        for (let i = 0; i < screenPositions.length - 1; i++) {
          const topScreen = screenPositions[i];
          const bottomScreen = screenPositions[i + 1];

          if (focalY >= topScreen && focalY <= bottomScreen) {
            const ratio = (focalY - topScreen) / (bottomScreen - topScreen);
            const currentY = dotPositions[i] + ratio * (dotPositions[i + 1] - dotPositions[i]);
            setDotY(currentY);
            setActiveIndex(ratio >= 0.5 ? i + 1 : i);
            break;
          }
        }
      }
    };

    updateTimeline();
    window.addEventListener("scroll", updateTimeline, { passive: true });
    window.addEventListener("resize", updateTimeline);
    return () => {
      window.removeEventListener("scroll", updateTimeline);
      window.removeEventListener("resize", updateTimeline);
    };
  }, []);

  return (
    <section id="experience" className="section-padding bg-background relative scroll-mt-24 overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2 block">
            Career
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey building scalable APIs and resilient backend systems
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="max-w-3xl mx-auto relative">
          {/* Background continuous track line */}
          <div
            className="absolute left-[11px] w-0.5 bg-white/10 pointer-events-none"
            style={{
              top: 18,
              height: lineHeight,
            }}
          />

          {/* Active filled progress line */}
          <div
            className="absolute left-[11px] w-0.5 bg-gradient-to-b from-primary via-amber-400 to-primary shadow-[0_0_10px_hsl(var(--primary)/0.6)] pointer-events-none transition-all duration-75"
            style={{
              top: 18,
              height: Math.max(0, dotY - 18),
            }}
          />

          {/* Traveling glowing yellow dot that moves with scroll */}
          <motion.div
            animate={{ top: dotY }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="absolute left-[11px] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
          >
            <div className="relative flex items-center justify-center">
              <div className="w-7 h-7 rounded-full bg-primary/30 animate-ping absolute" />
              <div className="w-5 h-5 rounded-full bg-primary border-2 border-background flex items-center justify-center shadow-[0_0_18px_5px_hsl(var(--primary))]">
                <div className="w-1.5 h-1.5 bg-background rounded-full" />
              </div>
            </div>
          </motion.div>

          {experiences.map((experience, index) => {
            const isPassed = index <= activeIndex;
            const isCurrent = index === activeIndex;

            return (
              <motion.div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-10 pb-14 last:pb-0"
              >
                {/* Timeline milestone dot */}
                <div
                  className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center z-10 transition-all duration-300 ${
                    isPassed
                      ? "bg-primary border-primary shadow-[0_0_12px_hsl(var(--primary)/0.7)]"
                      : "bg-card border-border"
                  }`}
                >
                  {isPassed && (
                    <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`glow-card p-6 transition-all duration-500 ${
                    isCurrent
                      ? "border-primary/50 shadow-[0_0_30px_-8px_hsl(var(--primary)/0.25)] ring-1 ring-primary/20"
                      : "border-border/60 opacity-90 hover:opacity-100"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {experience.title}
                    </h3>
                    {experience.current && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium w-fit">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-4 text-muted-foreground text-sm">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-primary" />
                      {experience.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-primary" />
                      {experience.period}
                    </span>
                    {experience.location && (
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-primary" />
                        {experience.location}
                      </span>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {experience.description}
                  </p>

                  <ul className="space-y-2">
                    {experience.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
