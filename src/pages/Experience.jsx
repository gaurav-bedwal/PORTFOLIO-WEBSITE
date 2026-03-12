import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Calendar, ChevronRight, ExternalLink } from 'lucide-react';

const Experience = () => {
    return (
        <div id="experience" className="w-full py-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-20"
            >
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight font-display drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">Experience & <span className="text-gradient">Training</span></h1>
                <div className="w-24 h-1.5 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto rounded-full shadow-[0_0_15px_rgba(0,240,255,0.5)] mb-8"></div>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                    A timeline of my professional development, virtual internships, and specialized technical training programs that have shaped my engineering skills.
                </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-12">

                {/* JP Morgan Internship */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass-card rounded-[2rem] p-8 md:p-10 border border-white/5 relative overflow-hidden group"
                >
                    <div className="absolute -inset-20 bg-gradient-to-br from-brand-500/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
                        <div className="flex-shrink-0">
                            <div className="p-4 rounded-2xl bg-brand-500/10 text-brand-400 shadow-[0_0_15px_rgba(0,240,255,0.2)] inline-flex items-center justify-center">
                                <Briefcase size={32} />
                            </div>
                        </div>

                        <div className="flex-grow">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h2 className="text-3xl font-bold text-white font-display mb-2 group-hover:text-brand-400 transition-colors">
                                        Software Engineering Virtual Job Simulation
                                    </h2>
                                    <a href="https://drive.google.com/file/d/1KE-bM2TolwOjECzyxrS1JXiiBjVQs2DM/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xl font-medium text-gray-300 hover:text-white transition-colors cursor-pointer group/link">
                                        JPMorgan Chase & Co. <ExternalLink size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                                <div className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-400 text-sm font-bold tracking-widest uppercase">
                                    <Calendar size={14} className="mr-2" />
                                    Sep 2024
                                </div>
                            </div>

                            <p className="text-gray-400 font-light leading-relaxed mb-6 p-4 rounded-xl bg-black/20 border border-white/5">
                                Completed a comprehensive virtual job simulation on Forage simulating the responsibilities of a Software Engineer at JPMorgan Chase.
                            </p>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start text-gray-300 font-light leading-relaxed">
                                    <ChevronRight className="flex-shrink-0 text-brand-500 mt-1 mr-3" size={18} />
                                    <span>Programmatically interfaced with a stock price data feed, setting up system environments.</span>
                                </li>
                                <li className="flex items-start text-gray-300 font-light leading-relaxed">
                                    <ChevronRight className="flex-shrink-0 text-brand-500 mt-1 mr-3" size={18} />
                                    <span>Utilized JPMorgan Chase & Co. specific frameworks and tools (Perspective) to engineer real-world solutions.</span>
                                </li>
                                <li className="flex items-start text-gray-300 font-light leading-relaxed">
                                    <ChevronRight className="flex-shrink-0 text-brand-500 mt-1 mr-3" size={18} />
                                    <span>Built and displayed trade data visually for traders, ensuring intuitive user interfaces.</span>
                                </li>
                                <li className="flex items-start text-gray-300 font-light leading-relaxed">
                                    <ChevronRight className="flex-shrink-0 text-brand-500 mt-1 mr-3" size={18} />
                                    <span>Completed open source contribution bonus tasks to further enhance the system's capabilities.</span>
                                </li>
                            </ul>

                            <div className="flex flex-wrap gap-3">
                                {["Python", "React", "TypeScript", "Git", "Data Visualization"].map((tech, idx) => (
                                    <span key={idx} className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-white/5 border border-white/10 rounded-full hover:bg-brand-500/20 hover:border-brand-500/50 hover:text-brand-400 transition-colors cursor-default">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Java Training */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="glass-card rounded-[2rem] p-8 md:p-10 border border-white/5 relative overflow-hidden group"
                >
                    <div className="absolute -inset-20 bg-gradient-to-bl from-accent-500/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
                        <div className="flex-shrink-0">
                            <div className="p-4 rounded-2xl bg-accent-500/10 text-accent-400 shadow-[0_0_15px_rgba(192,38,211,0.2)] inline-flex items-center justify-center">
                                <BookOpen size={32} />
                            </div>
                        </div>

                        <div className="flex-grow">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h2 className="text-3xl font-bold text-white font-display mb-2 group-hover:text-accent-400 transition-colors">
                                        Mastering Java Application Development
                                    </h2>
                                    <a href="https://drive.google.com/file/d/1Ag35TyQAuJA_P9zR_LA40tYmfU4815wg/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xl font-medium text-gray-300 hover:text-white transition-colors cursor-pointer group/link">
                                        Specialized Training Program <ExternalLink size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                                <div className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent-400 text-sm font-bold tracking-widest uppercase">
                                    <Calendar size={14} className="mr-2" />
                                    Jun — Jul 2025
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8 mt-6">
                                <li className="flex items-start text-gray-300 font-light leading-relaxed">
                                    <ChevronRight className="flex-shrink-0 text-accent-500 mt-1 mr-3" size={18} />
                                    <span>Completed 50+ hour Core Java training to strengthen OOP fundamentals; applied concepts in weekly assessments; improved problem-solving accuracy by ~30%.</span>
                                </li>
                                <li className="flex items-start text-gray-300 font-light leading-relaxed">
                                    <ChevronRight className="flex-shrink-0 text-accent-500 mt-1 mr-3" size={18} />
                                    <span>Faced issues in code structure during practice; implemented modular OOP design in labs and mini projects; improved readability by ~35% and reduced runtime errors by ~30%.</span>
                                </li>
                                <li className="flex items-start text-gray-300 font-light leading-relaxed">
                                    <ChevronRight className="flex-shrink-0 text-accent-500 mt-1 mr-3" size={18} />
                                    <span>Identified duplication and debugging inefficiencies in early code; adopted structured coding practices; reduced duplication by ~25% and improved maintainability by ~40%.</span>
                                </li>
                            </ul>

                            <div className="flex flex-wrap gap-3">
                                {["Core Java", "OOP Concepts", "Exception Handling", "File Handling"].map((tech, idx) => (
                                    <span key={idx} className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-white/5 border border-white/10 rounded-full hover:bg-accent-500/20 hover:border-accent-500/50 hover:text-accent-400 transition-colors cursor-default">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Experience;
