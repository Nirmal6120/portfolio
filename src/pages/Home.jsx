import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const sectionIntro = {
    hidden: { opacity: 0, y: 24, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
    }
};

const Home = () => {
    const featuredProjects = projects.slice(0, 2);

    return (
        <div className="pt-16">
            <Hero />
            <About />
            <Skills />

            {/* Projects Preview Section */}
            <section className="py-24 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_32%)]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Motion.div
                        variants={sectionIntro}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-16 relative z-10"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                        <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            A selection of projects across product engineering, testing, and full stack delivery. Want the full picture?
                            <Link to="/projects" className="text-accent hover:text-accent-hover ml-2 inline-flex items-center">
                                View all projects <ArrowRight size={16} className="ml-1" />
                            </Link>
                        </p>
                    </Motion.div>

                    <Motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="relative z-10 mb-10 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300"
                    >
                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">Case studies</span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">Product builds</span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">Automation work</span>
                    </Motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
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
