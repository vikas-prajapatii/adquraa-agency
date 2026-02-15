"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/Button";

export default function Contact() {
    return (
        <section id="contact" className="relative py-24 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-adquora-purple/10 rounded-full blur-[128px] -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-adquora-cyan/10 rounded-full blur-[128px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                            <span className="text-white">Get in </span>
                            <span className="text-gradient">Touch</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            Have questions about our escrow system or need help getting started?
                            Our team is available 24/7 to assist you.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-adquora-purple/30 transition-colors">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-xl bg-adquora-purple/20 flex items-center justify-center shrink-0">
                                    <Mail className="text-adquora-purple" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                                    <p className="text-gray-400 mb-4">
                                        For general inquiries and support.
                                    </p>
                                    <a href="mailto:support@adquoraa.com" className="text-white hover:text-adquora-cyan font-medium text-lg transition-colors">
                                        support@adquoraa.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-adquora-cyan/30 transition-colors">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-xl bg-adquora-cyan/20 flex items-center justify-center shrink-0">
                                    <Phone className="text-adquora-cyan" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                                    <p className="text-gray-400 mb-4">
                                        Speak directly with our support team.
                                    </p>
                                    <a href="tel:+15550000000" className="text-white hover:text-adquora-cyan font-medium text-lg transition-colors">
                                        +1 (555) 000-0000
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-adquora-blue/30 transition-colors">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-xl bg-adquora-blue/20 flex items-center justify-center shrink-0">
                                    <MapPin className="text-adquora-blue" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                                    <p className="text-gray-400 mb-4">
                                        Main Headquarters
                                    </p>
                                    <p className="text-white font-medium text-lg">
                                        123 Innovation Dr, Tech City, TC 90210
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10"
                    >
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-adquora-purple transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-adquora-purple transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-adquora-purple transition-all resize-none"
                                    placeholder="How can we help you?"
                                />
                            </div>
                            <Button size="lg" icon={<Send size={18} />} className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
