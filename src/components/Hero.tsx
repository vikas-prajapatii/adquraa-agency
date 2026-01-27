'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center justify-center">
            {/* Background Video Layer */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505] z-10" />

                {/* Placeholder for Video - Replace src with actual high-end tech video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-50"
                >
                    {/* Using a generic tech abstract background if available, else standard color */}
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-blue-circuit-board-sweep-31835-large.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium mb-6 backdrop-blur-md">
                        The Future of Influencer Marketing
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        <span className="block text-white mb-2">Secure Deals.</span>
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 font-display">
                            Creative Freedom.
                        </span>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 mb-10">
                        Adquoraa is the premier escrow-based marketplace connecting elite brands with verified creators.
                        Zero risk, guaranteed payments.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/signup?role=brand"
                            className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Hire Creators <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>

                        <Link
                            href="/signup?role=influencer"
                            className="px-8 py-4 glass text-white rounded-full font-bold text-lg border border-white/10 hover:bg-white/10 transition-all hover:scale-105"
                        >
                            Join as Creator
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </div>
            </motion.div>
        </section>
    );
}
