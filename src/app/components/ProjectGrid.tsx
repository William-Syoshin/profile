import Image from "next/image";
import Link from "next/link";
import { Project } from "../data/projects";

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={project.link}
          className="group relative overflow-hidden rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
        >
          <div className="relative h-48 w-full">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectGrid;
