import { Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    return (
        <Link
            to={`/projects/${project.slug}`}
            className="block bg-white/10 rounded-xl overflow-hidden border border-white/20 hover:border-accent/60 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] backdrop-blur-sm"
        >
            <div className="relative overflow-hidden bg-black/10 aspect-video">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain block transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 rounded-full text-white hover:bg-accent transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 rounded-full text-white hover:bg-accent transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ExternalLink size={20} />
                    </a>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                        <span
                            key={idx}
                            className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
