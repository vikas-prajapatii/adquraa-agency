"use client";

import { motion } from "framer-motion";
import { Code, Layout, Smartphone, Globe, ArrowRight, Zap, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function WebDevelopmentPage() {
    return (
        <main className="min-h-screen pt-20 bg-[#050505] overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-20 px-4">
                <div className="absolute top-0 right-1/2 translate-x-1/2 w-full max-w-4xl h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none" />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-blue-500/30">
                            <Code size={16} className="text-blue-400" />
                            <span className="text-sm font-medium text-blue-100">Agency-Grade Development</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-6">
                            Landing Pages That <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Convert Like Crazy.</span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                            Stop sending traffic to generic homepages. Our agency team builds
                            high-performance custom landing pages tailored for your influencer campaigns.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-12 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Smartphone,
                            title: "Mobile-First Design",
                            description: "Optimized for social traffic where 90% of your audience lives.",
                            color: "bg-purple-500/20 text-purple-400"
                        },
                        {
                            icon: Zap,
                            title: "Lightning Fast",
                            description: "Sub-second load times to ensure you never lose a click to bounce rate.",
                            color: "bg-yellow-500/20 text-yellow-400"
                        },
                        {
                            icon: Globe,
                            title: "SEO Optimized",
                            description: "Built with Next.js for perfect SEO scoring and organic reach.",
                            color: "bg-green-500/20 text-green-400"
                        }
                    ].map((feature, i) => (
                        <div key={i} className="glass-card p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-colors">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feature.color}`}>
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pricing / Packages */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-white text-center mb-16">
                        Development Packages
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                        {/* Landing Page Package */}
                        <div className="glass-panel p-8 md:p-10 rounded-[2rem] border border-white/10 relative overflow-hidden group hover:border-blue-500/30 transition-all">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]" />

                            <h3 className="text-2xl font-bold text-white mb-2">Campaign Landing Page</h3>
                            <p className="text-gray-400 mb-6">Perfect for single product launches or creator collabs.</p>

                            <div className="text-4xl font-bold text-white mb-8">$1,500 <span className="text-lg text-gray-500 font-normal">/ page</span></div>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "Custom Design (Figma + Dev)",
                                    "Next.js + Tailwind Implementation",
                                    "Analytics Integration",
                                    "Copywriting Assistance",
                                    "5-Day Turnaround"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle size={18} className="text-blue-400 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <Link href="/contact" className="block mt-auto">
                                <Button className="bg-blue-600 hover:bg-blue-500 text-white w-full">
                                    Start Project
                                </Button>
                            </Link>
                        </div>

                        {/* Full Site Package */}
                        <div className="glass-panel p-8 md:p-10 rounded-[2rem] border border-adquora-purple/30 relative overflow-hidden group hover:border-adquora-purple/50 transition-all">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-adquora-purple/10 rounded-full blur-[80px]" />
                            <div className="absolute top-6 right-6 px-3 py-1 bg-adquora-purple/20 text-adquora-purple text-xs font-bold rounded-full border border-adquora-purple/30">
                                MOST POPULAR
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">Brand Website</h3>
                            <p className="text-gray-400 mb-6">Complete multi-page website with blog and CMS.</p>

                            <div className="text-4xl font-bold text-white mb-8">$4,500 <span className="text-lg text-gray-500 font-normal">/ site</span></div>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "Home, About, Services, Contact Pages",
                                    "CMS for Blog/Case Studies",
                                    "Advanced Animations",
                                    "Technical SEO Setup",
                                    "14-Day Turnaround"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle size={18} className="text-adquora-purple shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <Link href="/contact" className="block mt-auto">
                                <Button variant="primary" icon={<ArrowRight size={18} />} className="w-full">
                                    Get Started
                                </Button>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
