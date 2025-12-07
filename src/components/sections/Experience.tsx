import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <section className="section-padding bg-background relative">
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
            My professional journey building intelligent systems
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
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
                className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  experience.current
                    ? "bg-primary border-primary"
                    : "bg-card border-border"
                }`}
              >
                {experience.current && (
                  <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                )}
              </div>

              {/* Content */}
              <div className="glow-card p-6">
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
                    <Briefcase className="w-4 h-4" />
                    {experience.company}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {experience.period}
                  </span>
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
          ))}
        </div>
      </div>
    </section>
  );
}
