import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { experiences } from "@/data/portfolio";
import { Helmet } from "react-helmet-async";

const ExperiencePage = () => {
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

            // Dot centers relative to the container (offsetTop + 18px)
            const dotPositions = validElements.map((el) => el.offsetTop + 18);
            const screenPositions = validElements.map((el) => el.getBoundingClientRect().top + 18);

            const firstY = dotPositions[0];
            const lastY = dotPositions[dotPositions.length - 1];
            setLineHeight(Math.max(0, lastY - firstY));

            // Focal line in the viewport (where reader's eye rests ~ 42% down the screen)
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
        <Layout>
            <Helmet>
                <title>Experience | Bereket Tadesse</title>
                <meta
                    name="description"
                    content="My professional journey building scalable APIs, resilient backend services, and web applications — Career and Work Experience of Bereket Tadesse."
                />
            </Helmet>

            {/* Hero */}
            <section className="section-padding hero-gradient min-h-[40vh] flex items-center">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2 block">
                            Career
                        </span>
                        <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
                            Work Experience
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            My professional journey building scalable APIs, resilient backend architectures, and database-driven web applications.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Experience Timeline */}
            <section className="section-padding bg-background relative overflow-hidden">
                <div className="container-custom">
                    <div ref={containerRef} className="max-w-4xl mx-auto relative">
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
                                    className="relative pl-10 md:pl-12 pb-16 last:pb-0"
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

                                    {/* Content Card */}
                                    <div
                                        className={`glow-card p-8 transition-all duration-500 ${
                                            isCurrent
                                                ? "border-primary/50 shadow-[0_0_35px_-8px_hsl(var(--primary)/0.25)] ring-1 ring-primary/20"
                                                : "border-border/60 opacity-90 hover:opacity-100"
                                        }`}
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                            <h3 className="font-display text-2xl font-semibold text-foreground">
                                                {experience.title}
                                            </h3>
                                            {experience.current && (
                                                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium w-fit border border-primary/20">
                                                    Current
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap items-center gap-6 mb-6 text-muted-foreground">
                                            <span className="flex items-center gap-2">
                                                <Briefcase className="w-4 h-4 text-primary" />
                                                <span className="font-medium text-foreground/80">{experience.company}</span>
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-primary" />
                                                {experience.period}
                                            </span>
                                            {experience.location && (
                                                <span className="flex items-center gap-2">
                                                    <MapPin className="w-4 h-4 text-primary" />
                                                    {experience.location}
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                            {experience.description}
                                        </p>

                                        <div className="space-y-4">
                                            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Key Highlights</h4>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {experience.highlights.map((highlight, hIndex) => (
                                                    <li
                                                        key={hIndex}
                                                        className="flex items-start gap-3 text-muted-foreground"
                                                    >
                                                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                                        <span className="text-sm leading-relaxed">{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ExperiencePage;
