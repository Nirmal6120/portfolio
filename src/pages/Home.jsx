import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
    const featuredProjects = projects.slice(0, 2);

    return (
        <div className="pt-16">
            <Hero />
            <About />
            <Skills />

            {/* Projects Preview Section */}
            <section className="py-20 bg-secondary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                        <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Here are a few of my recent projects. Want to see more?
                            <Link to="/projects" className="text-accent hover:text-accent-hover ml-2 inline-flex items-center">
                                View all projects <ArrowRight size={16} className="ml-1" />
                            </Link>
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {featuredProjects.map((project) => (
                            <ProjectCard key={project.title} project={project} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
