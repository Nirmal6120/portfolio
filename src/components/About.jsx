import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

const About = () => {
    const education = [
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "University Name",
            year: "2020 - 2024",
            description: "Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems."
        },
        // Add more education if needed
    ];

    return (
        <section className="py-20 bg-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                            <BookOpen className="mr-2 text-accent" /> My Journey
                        </h3>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                            I am a passionate developer with a strong foundation in computer science principles.
                            I love solving complex problems and building applications that make a difference.
                            My journey started with... (User can fill this in)
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            When I'm not coding, you can find me...
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                            <GraduationCap className="mr-2 text-accent" /> Education
                        </h3>
                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <div key={index} className="border-l-2 border-accent/30 pl-6 relative">
                                    <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-2"></div>
                                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                                    <p className="text-accent mb-2">{edu.institution} | {edu.year}</p>
                                    <p className="text-gray-400">{edu.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
