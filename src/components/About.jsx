import { motion as Motion } from 'framer-motion';
import { GraduationCap, BookOpen, Layers3, Rocket } from 'lucide-react';

const sectionIntro = {
    hidden: { opacity: 0, y: 24, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
    }
};

const panelReveal = {
    hidden: { opacity: 0, y: 36, scale: 0.97 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }
    })
};

const About = () => {
    const education = [
        {
            degree: 'Computer Programming Analyst',
            institution: 'Durham College',
            year: '2023 - 2025',
            description: 'Built a strong base in software design, application development, testing, cloud workflows, and modern web engineering.'
        },
    ];

    const focusAreas = [
        {
            icon: Layers3,
            title: 'Thoughtful interfaces',
            description: 'I build interfaces that feel intentional, responsive, and easy to trust from the first interaction.'
        },
        {
            icon: Rocket,
            title: 'Practical engineering',
            description: 'I care about architecture, maintainability, and shipping products that are fast enough to feel effortless.'
        }
    ];

    return (
        <section className="py-24 bg-secondary/80 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.08),transparent_30%)]"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Motion.div
                    variants={sectionIntro}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </Motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                    <Motion.div
                        custom={0.08}
                        variants={panelReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                            <BookOpen className="mr-2 text-accent" /> My Journey
                        </h3>
                        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_20px_60px_rgba(2,6,23,0.25)] transition-transform duration-500 hover:-translate-y-1">
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                I enjoy turning complex requirements into clear, reliable digital products. My work usually sits at the intersection of frontend polish, backend logic, and the small implementation details that shape how a product feels.
                            </p>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                I’ve worked across React, Node.js, Python, Firebase, automation tooling, and database-backed systems, with a bias toward building solutions that are useful in production rather than only impressive in demos.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {focusAreas.map((area) => {
                                    const Icon = area.icon;

                                    return (
                                        <Motion.div
                                            key={area.title}
                                            initial={{ opacity: 0, y: 18 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            whileHover={{ y: -6, scale: 1.01 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                            className="rounded-2xl border border-white/8 bg-black/20 p-5"
                                        >
                                            <Icon className="text-accent mb-3" size={22} />
                                            <h4 className="text-white font-semibold mb-2">{area.title}</h4>
                                            <p className="text-sm text-gray-400 leading-relaxed">{area.description}</p>
                                        </Motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </Motion.div>

                    <Motion.div
                        custom={0.18}
                        variants={panelReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                            <GraduationCap className="mr-2 text-accent" /> Education
                        </h3>
                        <div className="space-y-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_20px_60px_rgba(2,6,23,0.25)] transition-transform duration-500 hover:-translate-y-1">
                            {education.map((edu, index) => (
                                <Motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 18 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: 0.08 * index, ease: [0.22, 1, 0.36, 1] }}
                                    className="border-l-2 border-accent/30 pl-6 relative"
                                >
                                    <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-2"></div>
                                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                                    <p className="text-accent mb-2">{edu.institution} | {edu.year}</p>
                                    <p className="text-gray-400">{edu.description}</p>
                                </Motion.div>
                            ))}
                        </div>
                    </Motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
