import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ui/ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: "Event Dashboard",
            description: "An Event & Task Management System offering comprehensive task tracking and backend logic, enhancing efficiency by 35%.",
            features: [
                "15+ backend features including task prioritization & deadlines",
                "State-transition logic handling 100+ test task entries",
                "Input validation & session authentication reducing vulnerabilities by 40%",
                "Secured database queries using prepared statements"
            ],
            techStack: ["HTML", "Tailwind CSS", "JavaScript", "Nodejs", "Reactjs", "MongoDB"],
            githubLink: "https://github.com/gaurav-bedwal/Event-Planing-Website"
        },
        {
            title: "Car Rental Website",
            description: "An online platform simplifying car bookings with dynamic UI mapping and real-time database filtering for pricing and availability.",
            features: [
                "Full responsive frontend managing 20+ vehicle records",
                "Dynamic pricing and availability database integration",
                "JS-based fast filtering and booking algorithms",
                "Optimized search logic reducing selection time by 40%"
            ],
            techStack: ["HTML", "CSS", "JavaScript", "MongoDB", "React", "Nodejs", "Tailwind CSS"],
            githubLink: "https://github.com/gaurav-bedwal/CAR-RENTAL-",
            liveLink: "https://car-rental-jade-omega.vercel.app"
        },
        {
            title: "AI-Driven Code Reviewer",
            description: "An automated code analysis tool leveraging Large Language Models to provide context-aware feedback, detect bugs, and suggest intelligent optimizations.",
            features: [
                "Automated PR reviews and comprehensive code quality analysis",
                "Detects security vulnerabilities and performance bottlenecks",
                "Provides actionable, context-aware refactoring suggestions",
                "Seamless integration with version control workflows"
            ],
            techStack: ["React", "Node.js", "OpenAI API", "Tailwind CSS"],
            githubLink: "https://github.com/gaurav-bedwal"
        },
        {
            title: "Fair Trade Agri Portal",
            description: "A web-based agricultural marketplace designed to connect farmers directly with buyers, eliminating middlemen to ensure fair pricing.",
            features: [
                "Direct farmer-to-buyer product uploading and marketplace cataloging",
                "Streamlined customer order processing and portal-based purchasing",
                "Dedicated farmer dashboards for order management and delivery status tracking",
                "Transparent pricing models securing better margins for agricultural producers"
            ],
            techStack: ["React", "Nodejs", "MongoDB", "Tailwind CSS"],
            githubLink: "https://github.com/gaurav-bedwal/Fair-Crop-Trade-web-Application/"
        },
        {
            title: "Instagram Clone",
            description: "A fully responsive Full Stack Social Media Application inspired by Instagram, focused on performance, scalability, and real-time user interaction.",
            features: [
                "Secure authentication system supporting 100% encrypted user login & registration",
                "Post creation with image upload, captions, likes, and comments",
                "Achieved < 2s average page load time using optimized API calls and efficient state management",
                "Real-time features for dynamic user engagement with a scalable backend architecture"
            ],
            techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
            githubLink: "https://github.com/gaurav-bedwal/Mini-Instagram",
            liveLink: "https://mini-instagramgauravbedwal.vercel.app"
        }
    ];

    return (
        <div id="projects" className="w-full py-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-20"
            >
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight font-display drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">Featured <span className="text-gradient">Projects</span></h1>
                <div className="w-24 h-1.5 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto rounded-full shadow-[0_0_15px_rgba(0,240,255,0.5)] mb-8"></div>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                    A selection of my recent engineering work showcasing backend architecture, frontend integration, and structured database design.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        {...project}
                        delay={index * 0.2}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
