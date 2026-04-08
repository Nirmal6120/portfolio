import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary border-t border-white/10 py-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_32%)]"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-4">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Nirmal Patel. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-sm mt-1">Built with React, motion, and a Three.js hero scene.</p>
                    </div>
                    <div className="flex space-x-6">
                        <a
                            href="https://github.com/Nirmal6120?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-accent transition-colors"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nirmal-patel-/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-accent transition-colors"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:patelnirmal26003@gmail.com"
                            className="text-gray-400 hover:text-accent transition-colors"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
