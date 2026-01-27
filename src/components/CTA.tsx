'use client';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-950/20 pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
                    Ready to Elevate Your Brand?
                </h2>
                <p className="text-xl text-gray-400 mb-10">
                    Join the exclusive network of top-tier creators and visionary brands.
                </p>

                <Link
                    href="/signup"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full text-white font-bold text-lg shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:scale-105 transition-all duration-300 border border-white/10"
                >
                    <Sparkles className="w-5 h-5" />
                    Get Started Now
                </Link>
            </div>
        </section>
    );
}
