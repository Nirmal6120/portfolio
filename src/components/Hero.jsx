import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10">
                <div className="md:w-1/2 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
                    >
                        <span className="text-accent font-medium">Available for work</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                        Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Digital</span>
                        <br />
                        Experiences
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed"
                    >
                        I'm Nirmal Patel, a Full Stack Developer specializing in building exceptional digital experiences that are fast, accessible, and visually stunning.
                    </motion.p>

                    <motion.div
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
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-bold transition-all backdrop-blur-sm flex items-center"
                        >
                            Download Resume <Download size={20} className="ml-2" />
                        </a>
                    </motion.div>
                </div>

                <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative w-72 h-72 md:w-[500px] md:h-[500px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent to-purple-500 rounded-full blur-[100px] opacity-50 animate-pulse"></div>
                        <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 backdrop-blur-sm bg-white/5 p-4 transform rotate-3 hover:rotate-0 transition-all duration-500">
                            <img
                                src="/images/image Nirmal.jpeg"
                                alt="Nirmal Patel"
                                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
