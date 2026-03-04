import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { experiences } from "@/data/portfolio";
import { Helmet } from "react-helmet-async";

const ExperiencePage = () => {
    return (
        <Layout>
            <Helmet>
                <title>Experience | Bereket Tadesse</title>
                <meta
                    name="description"
                    content="My professional journey building intelligent systems — Career and Work Experience of Bereket Tadesse."
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
                            My professional journey building intelligent systems and solving complex problems with AI and ML.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Experience Timeline */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        {experiences.map((experience, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="relative pl-8 pb-12 last:pb-0"
                            >
                                {/* Timeline line */}
                                {index !== experiences.length - 1 && (
                                    <div className="absolute left-[11px] top-10 bottom-0 w-px bg-border" />
                                )}

                                {/* Timeline dot */}
                                <div
                                    className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center ${experience.current
                                        ? "bg-primary border-primary"
                                        : "bg-card border-border"
                                        }`}
                                >
                                    {experience.current && (
                                        <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="glow-card p-8">
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
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ExperiencePage;
