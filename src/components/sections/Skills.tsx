import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { 
  Brain, 
  Sparkles, 
  Monitor, 
  Server, 
  Database, 
  BarChart3, 
  Cloud 
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "AI/ML/NLP": <Brain className="w-5 h-5" />,
  "GenAI": <Sparkles className="w-5 h-5" />,
  "Frontend": <Monitor className="w-5 h-5" />,
  "Backend": <Server className="w-5 h-5" />,
  "Data": <BarChart3 className="w-5 h-5" />,
  "Databases": <Database className="w-5 h-5" />,
  "DevOps": <Cloud className="w-5 h-5" />,
};

export function Skills() {
  return (
    <section className="section-padding bg-card/30 relative">
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
            Expertise
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning the full ML and development lifecycle
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glow-card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {iconMap[skill.name]}
                </div>
                <h3 className="font-display font-semibold text-foreground">
                  {skill.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
