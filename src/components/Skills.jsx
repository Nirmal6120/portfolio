import { motion as Motion } from 'framer-motion';

const sectionIntro = {
    hidden: { opacity: 0, y: 24, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
    }
};

const skillCardReveal = {
    hidden: { opacity: 0, y: 26, scale: 0.97 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }
    })
};

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages & Frameworks',
            accent: 'from-cyan-400/30 to-sky-500/5',
            skills: ['JavaScript (ES6+)', 'React', 'Node.js', 'Python', 'HTML5', 'CSS3', 'Tailwind CSS']
        },
        {
            title: 'Tools & DevOps',
            accent: 'from-blue-400/30 to-cyan-500/5',
            skills: ['Git', 'Docker', 'AWS', 'Webpack', 'Vite', 'Linux']
        },
        {
            title: 'Databases',
            accent: 'from-teal-400/30 to-cyan-500/5',
            skills: ['MongoDB', 'PostgreSQL', 'MySQL']
        },
        {
            title: 'Testing & Quality',
            accent: 'from-cyan-200/20 to-blue-500/5',
            skills: ['Jest', 'Selenium', 'Mocha']
        },
        {
            title: 'Soft Skills',
            accent: 'from-sky-300/20 to-cyan-500/5',
            skills: ['Communication', 'Teamwork', 'Problem Solving', 'Agile Methodology']
        }
    ];

    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_34%)]"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Motion.div
                    variants={sectionIntro}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </Motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {skillCategories.map((category, index) => (
                        <Motion.div
                            key={index}
                            custom={index * 0.08}
                            variants={skillCardReveal}
                            initial="hidden"
                            whileInView="visible"
                            whileHover={{ y: -8, scale: 1.015 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden bg-secondary/80 p-6 rounded-3xl border border-white/8 hover:border-accent/40 transition-all duration-300 shadow-[0_20px_60px_rgba(2,6,23,0.2)]"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${category.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            <div className="relative z-10 flex items-start justify-between gap-4 mb-4">
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                                <span className="text-[0.7rem] uppercase tracking-[0.24em] text-accent/80">Stack</span>
                            </div>
                            <div className="flex flex-wrap gap-2 relative z-10">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-primary/70 text-gray-300 text-sm rounded-full border border-white/10 backdrop-blur-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
