import { lazy, Suspense, useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';

const HeroCanvas = lazy(() => import('./HeroCanvas'));

const heroStats = [
    { value: '2+', label: 'Years building products' },
    { value: '5+', label: 'Production-grade projects' },
    { value: 'Full Stack', label: 'Frontend to backend delivery' },
];

const roleTitles = ['DEVELOPER', 'ENGINEER', 'CREATOR'];

const Hero = () => {
    const [activeRoleIndex, setActiveRoleIndex] = useState(0);

    useEffect(() => {
        const roleInterval = window.setInterval(() => {
            setActiveRoleIndex((currentIndex) => (currentIndex + 1) % roleTitles.length);
        }, 2200);

        return () => window.clearInterval(roleInterval);
    }, []);

    return (
        <section className="hero-three-scene min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            <Suspense fallback={<div className="hero-canvas-fallback" aria-hidden="true"></div>}>
                <HeroCanvas />
            </Suspense>
            <div className="hero-three-grid" aria-hidden="true"></div>
            <div className="hero-three-glow" aria-hidden="true"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10">
                <div className="md:w-1/2 text-center md:text-left">
                    <Motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
                    >
                        <span className="text-accent font-medium">Available for work</span>
                    </Motion.div>

                    <Motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                        Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyan-200 to-purple-500">Digital</span>
                        <br />
                        Systems That Feel Alive
                    </Motion.h1>

                    <Motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed"
                    >
                        I’m Nirmal Patel, a full stack developer focused on performant web apps, polished interfaces, and product experiences that balance clean engineering with strong visual direction.
                    </Motion.p>

                    <Motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.22 }}
                        className="hero-role-wrap"
                    >
                        <span className="hero-role-prefix">A Full Stack</span>
                        <div className="hero-role-frame">
                            <Motion.div
                                key={roleTitles[activeRoleIndex]}
                                initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.32 }}
                                className="hero-role-text"
                                data-text={roleTitles[activeRoleIndex]}
                            >
                                {roleTitles[activeRoleIndex]}
                            </Motion.div>
                        </div>
                    </Motion.div>

                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="hero-stat-grid"
                    >
                        {heroStats.map((stat) => (
                            <div key={stat.label} className="hero-stat-card">
                                <span className="hero-stat-value">{stat.value}</span>
                                <span className="hero-stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </Motion.div>

                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
                    >
                        <Link
                            to="/projects"
                            className="px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-accent/25 flex items-center"
                        >
                            View Projects <ArrowRight size={20} className="ml-2" />
                        </Link>
                        <a
                            href="/Nirmal_Patel_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-bold transition-all backdrop-blur-sm flex items-center"
                        >
                            Download Resume <Download size={20} className="ml-2" />
                        </a>
                    </Motion.div>

                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="hero-caption-row"
                    >
                        <span className="hero-caption-pill">React</span>
                        <span className="hero-caption-pill">Node.js</span>
                        <span className="hero-caption-pill">Mainframe</span>
                        <span className="hero-caption-pill">UI Engineering</span>
                        <span className="hero-caption-pill">Automation</span>
                    </Motion.div>
                </div>

                <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center relative">
                    <Motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="three-portrait-stage relative w-72 h-72 md:w-[500px] md:h-[500px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent to-cyan-200 rounded-full blur-[100px] opacity-50 animate-pulse"></div>
                        <div className="three-orbit-ring three-orbit-ring-one" aria-hidden="true"></div>
                        <div className="three-orbit-ring three-orbit-ring-two" aria-hidden="true"></div>
                        <div className="three-float-node three-float-node-one" aria-hidden="true"></div>
                        <div className="three-float-node three-float-node-two" aria-hidden="true"></div>
                        <div className="three-card-shell relative w-full h-full rounded-full overflow-hidden border border-white/10 backdrop-blur-sm bg-white/5 p-4 transform rotate-3 hover:rotate-0 transition-all duration-500">
                            <img
                                src="/images/my-portfolio.jpeg"
                                alt="Nirmal Patel"
                                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <div className="three-status-chip" aria-hidden="true">
                            <span className="three-status-dot"></span>
                            Nirmal Patel
                        </div>
                    </Motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
