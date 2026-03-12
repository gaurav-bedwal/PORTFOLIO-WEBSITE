import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Replace with your actual Web3Forms Access Key
            // Get one at https://web3forms.com/
            const accessKey = "YOUR_ACCESS_KEY_HERE"; 
            
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            const result = await response.json();
            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setErrorMessage(result.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage("Failed to send message. Please check your connection.");
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div id="contact" className="w-full py-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-20"
            >
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight font-display drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">Get In <span className="text-gradient">Touch</span></h1>
                <div className="w-24 h-1.5 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto rounded-full shadow-[0_0_15px_rgba(0,240,255,0.5)] mb-8"></div>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                    Currently open for internship opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:col-span-2 space-y-8"
                >
                    <div className="glass-card rounded-[2rem] p-10 border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Sparkles size={100} />
                        </div>

                        <h3 className="text-3xl font-display font-bold text-white mb-10 relative z-10">Contact Info</h3>

                        <div className="space-y-8 relative z-10">
                            <a href="mailto:gauravbedwal1105@gmail.com" className="flex items-center space-x-5 group/link">
                                <div className="p-4 rounded-2xl bg-white/5 group-hover/link:bg-brand-500/20 group-hover/link:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300">
                                    <Mail size={24} className="text-brand-400" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email</span>
                                    <span className="font-medium text-gray-300 group-hover/link:text-white transition-colors break-all">gauravbedwal1105@gmail.com</span>
                                </div>
                            </a>

                            <a href="tel:+919996265706" className="flex items-center space-x-5 group/link">
                                <div className="p-4 rounded-2xl bg-white/5 group-hover/link:bg-accent-500/20 group-hover/link:shadow-[0_0_15px_rgba(192,38,211,0.3)] transition-all duration-300">
                                    <Phone size={24} className="text-accent-400" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Phone</span>
                                    <span className="font-medium text-gray-300 group-hover/link:text-white transition-colors">+91-9996265706</span>
                                </div>
                            </a>

                            <div className="flex items-center space-x-5">
                                <div className="p-4 rounded-2xl bg-white/5">
                                    <MapPin size={24} className="text-brand-400" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Location</span>
                                    <span className="font-medium text-gray-300">Lovely Professional University</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-10 border-t border-white/5 relative z-10">
                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Social Profiles</h4>
                            <div className="flex space-x-4">
                                <a href="https://github.com/gaurav-bedwal" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 text-gray-300 rounded-xl hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300 border border-white/5">
                                    <Github size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/gaurav-bedwal" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 text-gray-300 rounded-xl hover:bg-[#0A66C2] hover:text-white hover:shadow-[0_0_20px_rgba(10,102,194,0.5)] hover:-translate-y-1 transition-all duration-300 border border-white/5">
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="lg:col-span-3"
                >
                    <div className="glass-card rounded-[2rem] p-10 md:p-12 border border-white/5 relative overflow-hidden h-full group">
                        <div className="absolute -inset-20 bg-gradient-to-tr from-brand-500/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

                        <h3 className="text-3xl font-display font-bold text-white mb-10 relative z-10">Send A Message</h3>

                        {status === 'success' ? (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 relative z-10"
                            >
                                <div className="p-4 rounded-full bg-green-500/10 text-green-500 mb-2">
                                    <CheckCircle2 size={64} />
                                </div>
                                <h4 className="text-2xl font-bold text-white">Message Sent!</h4>
                                <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
                                <button 
                                    onClick={() => setStatus('idle')}
                                    className="mt-6 px-6 py-2 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                {status === 'error' && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center"
                                    >
                                        <AlertCircle size={18} className="mr-3 flex-shrink-0" />
                                        {errorMessage}
                                    </motion.div>
                                )}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold tracking-wider text-gray-400 uppercase mb-3 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        disabled={status === 'loading'}
                                        className="w-full px-6 py-4 rounded-xl bg-black/40 border border-white/10 focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 text-white transition-all hover:bg-white/5 outline-none backdrop-blur-sm shadow-inner disabled:opacity-50"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold tracking-wider text-gray-400 uppercase mb-3 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        disabled={status === 'loading'}
                                        className="w-full px-6 py-4 rounded-xl bg-black/40 border border-white/10 focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 text-white transition-all hover:bg-white/5 outline-none backdrop-blur-sm shadow-inner disabled:opacity-50"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold tracking-wider text-gray-400 uppercase mb-3 ml-1">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        disabled={status === 'loading'}
                                        rows="5"
                                        className="w-full px-6 py-4 rounded-xl bg-black/40 border border-white/10 focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 text-white transition-all hover:bg-white/5 outline-none backdrop-blur-sm shadow-inner resize-none disabled:opacity-50"
                                        placeholder="Hello Gaurav, I'd like to discuss..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full inline-flex items-center justify-center px-8 py-5 text-lg font-bold rounded-xl text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] mt-6 group/btn disabled:opacity-50"
                                >
                                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                                    <Send className={`ml-3 ${status === 'loading' ? 'animate-pulse' : 'group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1'} transition-transform`} size={20} />
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
