import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
}

const categoryColors: Record<string, string> = {
  "AI/ML": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "GenAI": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Full-Stack": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Data": "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group glow-card flex flex-col h-full overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        <div className="absolute top-4 left-4">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${
              categoryColors[project.category] || "bg-secondary text-secondary-foreground"
            }`}
          >
            {project.category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <div className="w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Highlight */}
        <div className="pt-3 border-t border-border">
          <p className="text-xs text-primary font-medium line-clamp-1">
            {project.highlights[0]}
          </p>
        </div>
      </div>
    </Link>
  );
}
