import { Github, ExternalLink } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const hasGithub = project.github && project.github !== '#';
    const hasLive = project.live && project.live !== '#';

    return (
        <Motion.div
            initial={{ opacity: 0, y: 26, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
            <Link
                to={`/projects/${project.slug}`}
                className="block bg-white/10 rounded-[1.75rem] overflow-hidden border border-white/15 hover:border-accent/60 transition-all duration-300 group hover:shadow-[0_0_40px_rgba(56,189,248,0.22)] backdrop-blur-sm"
            >
                <div className="relative overflow-hidden bg-black/10 aspect-video">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain block transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.05),rgba(2,6,23,0.72))] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        {hasGithub && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/10 rounded-full text-white hover:bg-accent transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Github size={20} />
                            </a>
                        )}
                        {hasLive && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/10 rounded-full text-white hover:bg-accent transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ExternalLink size={20} />
                            </a>
                        )}
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
                    <div className="mt-5 flex items-center justify-between text-sm text-gray-400">
                        <span>Case study</span>
                        <span>{hasLive || hasGithub ? 'Demo available' : 'Details available on request'}</span>
                    </div>
                </div>
            </Link>
        </Motion.div>
    );
};

export default ProjectCard;
