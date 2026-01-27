'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';

export default function ForCreators() {
    return (
        <section id="creators" className="py-24 relative overflow-hidden bg-[#050505]">
            {/* Abstract Background */}
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side Visual - Mobile First Ordering means visual second on mobile usually, but keeping standard grid */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1 glass p-8 rounded-3xl border border-white/10"
                    >
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold">$</div>
                                <div>
                                    <p className="text-gray-400 text-sm">Payment Received</p>
                                    <p className="text-white font-bold text-lg">$4,500.00</p>
                                </div>
                                <span className="ml-auto text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Instant</span>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 opacity-60">
                                <div className="w-12 h-12 rounded-full bg-gray-500/20 flex items-center justify-center text-gray-400 font-bold">$</div>
                                <div>
                                    <p className="text-gray-400 text-sm">Escrow Secure</p>
                                    <p className="text-white font-bold text-lg">$2,150.00</p>
                                </div>
                                <span className="ml-auto text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">Locked</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white font-display mb-6">
                            For Creators: <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">Paid, Not Played.</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            No more chasing invoices or net-60 payment terms. With Adquoraa, funds are secured in escrow before you even start creating.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {['Guaranteed Payments', 'Instant Release on Approval', 'Global Brand Access'].map((item, i) => (
                                <li key={i} className="flex items-center text-gray-300">
                                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center mr-3">
                                        <Check className="w-3 h-3 text-cyan-400" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/signup?role=influencer"
                            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold rounded-full hover:scale-105 transition-transform inline-block shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                        >
                            Start Earning
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
