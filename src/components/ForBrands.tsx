'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';

export default function ForBrands() {
    return (
        <section id="brands" className="py-24 relative overflow-hidden bg-[#050505]">
            {/* Abstract Background */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white font-display mb-6">
                            For Brands: <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Scale with Confidence</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Stop wasting budget on influencers who don't deliver. Adquoraa protects your marketing spend with smart escrow technology and automated contracts.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {['Zero Upfront Risk', 'Verified ROI Analytics', 'Automated Legal Contracts'].map((item, i) => (
                                <li key={i} className="flex items-center text-gray-300">
                                    <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3">
                                        <Check className="w-3 h-3 text-indigo-400" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/signup?role=brand"
                            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-indigo-50 transition-colors inline-block"
                        >
                            Hire Top Creators
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="glass p-8 rounded-3xl border border-white/10 relative"
                    >
                        {/* Mock UI for Brand Stats */}
                        <div className="space-y-6">
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-white font-bold text-xl">Campaign Performance</h3>
                                <span className="text-emerald-400 text-sm font-bold">+245% ROI</span>
                            </div>
                            <div className="h-32 bg-white/5 rounded-xl w-full flex items-end gap-2 p-4">
                                <div className="w-1/4 h-[60%] bg-indigo-500/50 rounded-t-lg" />
                                <div className="w-1/4 h-[80%] bg-indigo-500/70 rounded-t-lg" />
                                <div className="w-1/4 h-[40%] bg-indigo-500/40 rounded-t-lg" />
                                <div className="w-1/4 h-full bg-cyan-400 rounded-t-lg relative">
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold py-1 px-2 rounded-lg">
                                        Booming!
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 font-mono">
                                <span>WK 1</span><span>WK 2</span><span>WK 3</span><span>NOW</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
