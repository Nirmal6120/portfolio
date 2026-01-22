import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import projects from '../data/projects';

const ProjectDetail = () => {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="pt-24 pb-20 bg-primary min-h-screen text-center text-white flex items-center justify-center">
                <div>
                    <h1 className="text-3xl font-bold mb-4">Project not found</h1>
                    <Link to="/projects" className="text-accent hover:text-accent-hover underline">
                        Back to projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 bg-primary min-h-screen relative z-10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8 flex items-center gap-3 text-white">
                    <Link to="/projects" className="inline-flex items-center text-accent hover:text-accent-hover">
                        <ArrowLeft size={18} className="mr-2" /> Back to projects
                    </Link>
                </div>

                <div className="bg-white/10 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm shadow-xl">
                    <div className="relative bg-black/10 aspect-video">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className="p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                            <h1 className="text-3xl font-bold text-white">{project.title}</h1>
                            <div className="flex gap-3">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 rounded-lg bg-white/10 text-white border border-white/10 hover:border-accent/60 transition-colors"
                                >
                                    <Github size={18} className="mr-2" /> Code
                                </a>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors"
                                >
                                    <ExternalLink size={18} className="mr-2" /> Live
                                </a>
                            </div>
                        </div>

                        <p className="text-gray-200 mb-6 leading-relaxed">{project.longDescription ?? project.description}</p>

                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;