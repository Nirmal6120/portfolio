import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages & Frameworks",
            skills: ["JavaScript (ES6+)", "React", "Node.js", "Python", "HTML5", "CSS3", "Tailwind CSS"]
        },
        {
            title: "Tools & DevOps",
            skills: ["Git", "Docker", "AWS", "Webpack", "Vite", "Linux"]
        },
        {
            title: "Databases",
            skills: ["MongoDB", "PostgreSQL", "MySQL"]
        },
        {
            title: "Testing & Quality",
            skills: ["Jest", "Selenium", "Mocha"]
        },
        {
            title: "Soft Skills",
            skills: ["Communication", "Teamwork", "Problem Solving", "Agile Methodology"]
        }
    ];

    return (
        <section className="py-20 bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-secondary p-6 rounded-xl border border-white/5 hover:border-accent/50 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-primary text-gray-300 text-sm rounded-full border border-white/10"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
