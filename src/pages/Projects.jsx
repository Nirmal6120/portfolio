import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

const Projects = () => {
    return (
        <div className="pt-24 pb-20 bg-primary min-h-screen relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">My Projects</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        A collection of projects I've worked on. From web applications to mobile apps,
                        here's what I've been building.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
