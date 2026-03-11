import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Brain, Target, ExternalLink } from 'lucide-react';

const Certifications = () => {
    const certs = [
        {
            title: "ChatGPT-4 Prompt Engineering",
            provider: "Generative AI & LLM",
            date: "Aug 2025",
            icon: Brain,
            color: "brand",
            link: "https://drive.google.com/file/d/17fUkisv2WNZPYFo4ViAQpXwXXMcNoQfk/view?usp=drive_link",
            imageSrc: ""
        },
        {
            title: "Master Generative AI",
            provider: "Generative AI Tools",
            date: "Aug 2025",
            icon: Target,
            color: "accent",
            link: "https://drive.google.com/file/d/1kRrEiLW5BBlIjwHfg7c9QOj5zsJAcvGS/view?usp=drive_link",
            imageSrc: ""
        },
        {
            title: "Software Engineering Virtual Job Simulation",
            provider: "JPMORGAN CHASE & CO.",
            date: "Sep 2024",
            icon: Code,
            color: "brand",
            link: "https://drive.google.com/file/d/1KE-bM2TolwOjECzyxrS1JXiiBjVQs2DM/view?usp=drive_link",
            imageSrc: "" // Placeholder, place your downloaded image file here!
        },
        {
            title: "Python For Data Science & Development",
            provider: "IBM",
            date: "Feb 2024",
            icon: Award,
            color: "accent",
            link: "https://drive.google.com/file/d/1WrWo1C4csWHhzlEOSp0rLwK9qwNt54oc/view?usp=drive_link",
            imageSrc: ""
        },
        {
            title: "Hack With Verto’s Hackathon – ECHO",
            provider: "Lovely Professional University",
            date: "Feb 2024",
            icon: Code,
            color: "brand",
            link: "https://drive.google.com/file/d/1sTYHGn0jSI8xPX_ZNZz158HGCaSF_MFS/view?usp=drive_link",
            imageSrc: ""
        },
        {
            title: "Additional Certification",
            provider: "Training & Development",
            date: "2024",
            icon: Award,
            color: "accent",
            link: "https://drive.google.com/file/d/1XCljdn9jwYMfi7LwHKE9u8BPPzDKbBKN/view?usp=drive_link",
            imageSrc: ""
        }
    ];

    return (
        <div className="w-full py-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-20"
            >
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight font-display drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">My <span className="text-gradient">Certifications</span></h1>
                <div className="w-24 h-1.5 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto rounded-full shadow-[0_0_15px_rgba(0,240,255,0.5)] mb-8"></div>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                    Continuous learning is key to staying ahead. Here are some of the professional certifications and training programs I've completed to sharpen my engineering skills.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {certs.map((cert, index) => (
                    <motion.a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass-card rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 block"
                    >
                        <div className={`absolute -inset-20 bg-gradient-to-br ${cert.color === 'brand' ? 'from-brand-500/10' : 'from-accent-500/10'} to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>

                        <div className="flex justify-between items-start mb-6 relative z-10">
                            {cert.imageSrc ? (
                                <div className="w-full h-40 mb-4 rounded-xl overflow-hidden border border-white/10 relative group-hover:border-brand-500/50 transition-colors">
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                        <ExternalLink className="text-white" size={24} />
                                    </div>
                                    <img src={cert.imageSrc} alt={cert.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                </div>
                            ) : (
                                <div className={`p-4 rounded-2xl ${cert.color === 'brand' ? 'bg-brand-500/10 text-brand-400 shadow-[0_0_15px_rgba(0,240,255,0.2)]' : 'bg-accent-500/10 text-accent-400 shadow-[0_0_15px_rgba(192,38,211,0.2)]'}`}>
                                    <cert.icon size={32} />
                                </div>
                            )}

                            {!cert.imageSrc && (
                                <span className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full ${cert.color === 'brand' ? 'bg-brand-500/10 text-brand-400 border border-brand-500/20' : 'bg-accent-500/10 text-accent-400 border border-accent-500/20'}`}>
                                    {cert.date}
                                </span>
                            )}
                        </div>

                        {cert.imageSrc && (
                            <div className="mb-4">
                                <span className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full ${cert.color === 'brand' ? 'bg-brand-500/10 text-brand-400 border border-brand-500/20' : 'bg-accent-500/10 text-accent-400 border border-accent-500/20'}`}>
                                    {cert.date}
                                </span>
                            </div>
                        )}

                        <h3 className={`text-2xl font-bold text-white mb-2 font-display group-hover:text-${cert.color}-400 transition-colors duration-300 relative z-10 pr-8`}>
                            {cert.title}
                        </h3>
                        <p className="text-gray-400 font-medium tracking-wide relative z-10 mb-8">
                            {cert.provider}
                        </p>

                        <div className={`mt-auto relative z-10 pt-6 border-t border-white/5 flex items-center justify-between`}>
                            <div className={`flex items-center text-sm font-bold text-${cert.color}-400 bg-${cert.color}-500/10 px-4 py-2 rounded-xl group-hover:bg-${cert.color}-500 group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(${cert.color === 'brand' ? '0,240,255' : '192,38,211'},0.3)] group-hover:shadow-[0_0_25px_rgba(${cert.color === 'brand' ? '0,240,255' : '192,38,211'},0.6)]`}>
                                <ExternalLink size={16} className="mr-2" />
                                Click to view Certificate
                            </div>

                            <span className="relative flex h-3 w-3">
                                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-${cert.color}-400 opacity-75`}></span>
                                <span className={`relative inline-flex rounded-full h-3 w-3 bg-${cert.color}-500`}></span>
                            </span>
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
