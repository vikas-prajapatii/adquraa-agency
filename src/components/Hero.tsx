"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Button } from "./ui/Button";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center pt-20">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#050505]" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-adquora-purple/20 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-adquora-cyan/10 rounded-full blur-[128px] animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-adquora-purple/30">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-adquora-cyan opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-adquora-cyan"></span>
                        </span>
                        <span className="text-sm font-medium text-gray-300">
                            The Future of Controlled Marketing
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
                        <span className="block text-white">Where Brands Meet</span>
                        <span className="text-gradient">Creators — Securely.</span>
                    </h1>

                    <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-400 mb-10 leading-relaxed">
                        Adquora connects brands and creators through an escrow-based workflow.
                        No scams, no ghosting—just high-impact campaigns and guaranteed payments.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <Link href="/auth/signup?role=brand">
                            <Button size="lg" icon={<Zap size={20} />} className="w-full sm:w-auto">
                                I'm a Brand
                            </Button>
                        </Link>
                        <Link href="/auth/signup?role=creator">
                            <Button variant="secondary" size="lg" icon={<ArrowRight size={20} />} className="w-full sm:w-auto">
                                I'm a Creator
                            </Button>
                        </Link>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex justify-center items-center gap-8 text-gray-500 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="text-adquora-cyan" size={18} /> Verified Creators
                        </div>
                        <div className="w-1 h-1 bg-gray-700 rounded-full" />
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="text-adquora-purple" size={18} /> Escrow Protection
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-1 bg-white rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
