"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import Footer from "@/components/Footer";

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-[#050505]">
            {/* Hero Section */}
            <section className="pt-32 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-500/10 rounded-full blur-[128px] pointer-events-none" />

                <SectionWrapper className="pb-0 md:pb-0">
                    <div className="text-center max-w-4xl mx-auto relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-white/10">
                            <span className="text-xs font-bold tracking-wider text-blue-400 uppercase">FLEXIBLE & SCALABLE</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6 leading-tight">
                            Pricing That Scales <br />
                            <span className="text-blue-400">With Your Ambition</span>
                        </h1>

                        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
                            From a single $10 test video to enterprise-grade volume. Choose the path that fits your budget today.
                        </p>

                        {/* Info Banner */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 border-y border-white/5 py-8 mt-8">
                            <div className="text-center md:text-left">
                                <p className="text-white font-bold mb-1">Custom Volume?</p>
                                <p className="text-sm text-gray-400">We scale from <span className="text-white font-medium">2 to 2,000+ videos</span> per month.</p>
                            </div>
                            <div className="hidden md:block w-px h-12 bg-white/10" />
                            <div className="text-center md:text-left max-w-sm">
                                <p className="text-sm text-gray-500 italic">"Adquora's infrastructure allows us to test 50+ hooks simultaneously."</p>
                                <p className="text-xs text-gray-600 mt-2">- Global E-com Partner</p>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* AI Ad Generation Pricing */}
            <section className="relative z-10">
                <SectionWrapper className="pt-8 md:pt-12">
                    {/* On-Demand Testing Box */}
                    <div className="max-w-4xl mx-auto mb-16 relative">
                        <div className="absolute -top-3 right-8 z-20">
                            <span className="px-3 py-1 rounded-full bg-adquora-cyan/20 text-adquora-cyan text-xs font-bold border border-adquora-cyan/30">
                                ON-DEMAND TESTING
                            </span>
                        </div>
                        <GlassCard className="p-8 md:p-12 border-adquora-cyan/20 bg-adquora-cyan/5 w-full flex flex-col md:flex-row items-center justify-between gap-8 group">
                            <div className="max-w-xl text-center md:text-left">
                                <h3 className="text-2xl font-bold text-white mb-3">Need Just One Video?</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Not ready for a monthly package? Test our quality with a single Pay-As-You-Go asset. Use it on social, ads, or your website—royalty free.
                                </p>
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                                    <div className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-center">
                                        <p className="text-xs text-gray-500 mb-1 leading-none">Sample UGC</p>
                                        <p className="text-xl font-bold text-white leading-none">$10<span className="text-xs text-gray-500 font-normal"> /vid</span></p>
                                    </div>
                                    <div className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-center">
                                        <p className="text-xs text-gray-500 mb-1 leading-none">Sample TVC</p>
                                        <p className="text-xl font-bold text-white leading-none">$15<span className="text-xs text-gray-500 font-normal"> /vid</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-auto flex-shrink-0">
                                <Button variant="secondary" className="w-full md:w-auto bg-white text-black hover:bg-gray-200" icon={<ArrowRight size={16} />} iconPosition="right">
                                    Order Sample
                                </Button>
                            </div>
                        </GlassCard>
                    </div>

                    {/* Scaling Packages */}
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-white">Popular Scaling Packages</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-24">
                        {/* Starter Package */}
                        <GlassCard className="p-8 flex flex-col h-full bg-[#0D111A]">
                            <div className="mb-6">
                                <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4 text-center">STARTER PACKAGE</p>
                                <div className="flex items-end justify-center gap-2 mb-4">
                                    <span className="text-xl text-gray-500 line-through">$150</span>
                                    <span className="text-5xl font-bold text-white">$98</span>
                                </div>
                                <p className="text-sm text-gray-400 text-center">Best for testing AI creative for the first time.</p>
                            </div>
                            <Button variant="ghost" className="w-full mb-8 bg-white/5 hover:bg-white/10">Get Started</Button>

                            <div className="mt-auto space-y-4 pt-6 border-t border-white/5 border-dashed">
                                <p className="text-xs font-bold text-center text-gray-300">✓ 5 VIDEOS TOTAL</p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-sm text-gray-400">
                                        <Check size={14} className="text-blue-400" /> 3 UGC-style videos
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-gray-400">
                                        <Check size={14} className="text-blue-400" /> 2 TVC Commercials
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-gray-400">
                                        <Check size={14} className="text-blue-400" /> All Voiceover Included
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-gray-400">
                                        <Check size={14} className="text-yellow-500" /> 24-72h Turnaround
                                    </li>
                                </ul>
                            </div>
                        </GlassCard>

                        {/* Growth Package (Highlighted) */}
                        <div className="relative">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-max">
                                <span className="px-4 py-1 rounded-full bg-blue-500 text-white text-xs font-bold shadow-lg shadow-blue-500/20">
                                    MOST POPULAR
                                </span>
                            </div>
                            <GlassCard className="p-8 flex flex-col h-full border-blue-500/50 bg-blue-900/10 shadow-[0_0_30px_rgba(59,130,246,0.1)] relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors" />
                                <div className="mb-6 relative z-10">
                                    <p className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-4 text-center">GROWTH PACKAGE</p>
                                    <div className="flex items-end justify-center gap-2 mb-4">
                                        <span className="text-xl text-gray-500 line-through">$400</span>
                                        <span className="text-5xl font-bold text-white">$250</span>
                                    </div>
                                    <p className="text-sm text-gray-300 text-center">For brands scaling content production.</p>
                                </div>
                                <Button variant="primary" className="w-full mb-8 relative z-10 shadow-lg shadow-blue-500/25">Choose Growth</Button>

                                <div className="mt-auto space-y-4 pt-6 border-t border-blue-500/20 border-dashed relative z-10">
                                    <p className="text-xs font-bold text-center text-white">✓ 15 VIDEOS TOTAL</p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 font-medium text-sm text-gray-200">
                                            <Check size={14} className="text-blue-400" /> 10 UGC-style videos
                                        </li>
                                        <li className="flex items-center gap-3 font-medium text-sm text-gray-200">
                                            <Check size={14} className="text-blue-400" /> 5 TVC Commercials
                                        </li>
                                        <li className="flex items-center gap-3 font-medium text-sm text-gray-200">
                                            <Check size={14} className="text-blue-400" /> 1 UGCxTVC Blend
                                        </li>
                                        <li className="flex items-center gap-3 text-sm text-gray-300">
                                            <Check size={14} className="text-blue-400" /> All Aspect Ratios
                                        </li>
                                        <li className="flex items-center gap-3 text-sm text-gray-300">
                                            <Check size={14} className="text-yellow-500" /> 24-72h Turnaround
                                        </li>
                                    </ul>
                                </div>
                            </GlassCard>
                        </div>

                        {/* Scale Package */}
                        <GlassCard className="p-8 flex flex-col h-full bg-[#0D111A]">
                            <div className="mb-6">
                                <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4 text-center">SCALE PACKAGE</p>
                                <div className="flex items-end justify-center gap-2 mb-4">
                                    <span className="text-xl text-gray-500 line-through">$2,000</span>
                                    <span className="text-5xl font-bold text-white">$1,200<span className="text-lg text-gray-500 font-normal">/mo</span></span>
                                </div>
                                <p className="text-sm text-gray-400 text-center">Consistent monthly content flow.</p>
                            </div>
                            <Button variant="ghost" className="w-full mb-8 bg-white/5 hover:bg-white/10">Scale Your Content</Button>

                            <div className="mt-auto space-y-4 pt-6 border-t border-white/5 border-dashed">
                                <p className="text-xs font-bold text-center text-gray-300">✓ 50 VIDEOS TOTAL</p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-sm text-gray-400">
                                        <Check size={14} className="text-blue-400" /> Mix of TVC, UGC & Blend
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-gray-400">
                                        <Check size={14} className="text-blue-400" /> Dedicated Account Manager
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-gray-400">
                                        <Check size={14} className="text-adquora-purple" /> Priority Next-Day Delivery
                                    </li>
                                </ul>
                            </div>
                        </GlassCard>
                    </div>


                    {/* Influencer Campaign Pricing section separator */}
                    <div className="text-center mb-16 pt-16 border-t border-white/5">
                        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6 text-xs font-bold tracking-wider text-gray-400 uppercase">
                            FLEXIBLE MODEL
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">Influencer Campaign Pricing</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            We use a Budget-Based Approach. Unlike creative production, influencer campaigns are custom. You set the investment, and we optimize the creator mix.
                        </p>
                    </div>

                    {/* Influencer Investment Card */}
                    <div className="max-w-3xl mx-auto mb-16">
                        <GlassCard className="p-10 border-adquora-purple/20 bg-[#0A0D14] text-center">
                            <h4 className="text-lg font-bold text-gray-300 mb-2">Your Investment Range</h4>
                            <p className="text-5xl md:text-6xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-adquora-cyan via-blue-400 to-adquora-purple mb-6">
                                $2,000 - $50,000+
                            </p>
                            <p className="text-sm text-gray-500 max-w-lg mx-auto mb-8">
                                This all-inclusive budget covers strategy + management + creator payments.
                            </p>

                            <div className="flex items-center justify-center w-full max-w-md mx-auto">
                                <div className="w-1/3 h-1 bg-adquora-cyan/50 rounded-l-full relative">
                                    <div className="absolute top-3 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 whitespace-nowrap">Micro Creators</div>
                                </div>
                                <div className="w-1/3 h-1 bg-blue-500/50 relative">
                                    <div className="absolute top-3 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 whitespace-nowrap">Macro Creators</div>
                                </div>
                                <div className="w-1/3 h-1 bg-adquora-purple/50 rounded-r-full relative">
                                    <div className="absolute top-3 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 whitespace-nowrap">Top Creators</div>
                                </div>
                            </div>
                        </GlassCard>
                    </div>

                    {/* Influencer Tiers */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center">
                            <p className="text-xs font-bold text-gray-500 mb-2">Starter Tier</p>
                            <p className="text-lg font-bold text-white mb-3">$2k - $5k</p>
                            <p className="text-[10px] text-gray-400">• 2-5 Micro Influencers<br />• Best for local targeting</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-blue-600/10 border border-blue-500/30 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-12 h-12 bg-blue-500/20 rounded-bl-full" />
                            <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-blue-500 text-[8px] font-bold text-white">POPULAR</div>
                            <p className="text-xs font-bold text-blue-400 mb-2">Growth Tier</p>
                            <p className="text-lg font-bold text-white mb-3">$5k - $15k</p>
                            <p className="text-[10px] text-gray-300">• 5-15 Mixed Tier Creators<br />• Best for Brand Awareness</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center">
                            <p className="text-xs font-bold text-gray-500 mb-2">Scale Tier</p>
                            <p className="text-lg font-bold text-white mb-3">$15k - $30k</p>
                            <p className="text-[10px] text-gray-400">• 10-25 Creators (Inc. Macro)<br />• Best for Market Expansion</p>
                        </div>
                        <div className="p-6 rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent text-center">
                            <p className="text-xs font-bold text-gray-400 mb-2">Enterprise</p>
                            <p className="text-lg font-bold text-white mb-3">$30k - $50k+</p>
                            <p className="text-[10px] text-gray-500">• 20+ Influencers<br />• Best for National Reach</p>
                        </div>
                    </div>

                    <div className="text-center mb-24">
                        <Button variant="secondary" className="px-8 bg-white text-black hover:bg-gray-200">Book Strategy Call</Button>
                    </div>

                    {/* Upgrades */}
                    <div className="text-center">
                        <h5 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Campaign Upgrades</h5>
                        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
                            <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                                Same-Day Express <span className="text-white opacity-50 ml-1">+$50/vid</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                Usage Licensing <span className="text-white opacity-50 ml-1">Custom</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-adquora-cyan" />
                                Extra Hook Variation <span className="text-white opacity-50 ml-1">+$15/vid</span>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            <Footer />
        </main>
    );
}
