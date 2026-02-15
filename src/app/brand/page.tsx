"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Users, Zap, Search } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function BrandPage() {
    return (
        <main className="min-h-screen bg-[#050505]">
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-adquora-purple/5 blur-[100px] pointer-events-none" />
                <SectionWrapper>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-6">
                            Hire Top Creators. <br />
                            <span className="text-gradient">Zero Risk.</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-8">
                            The only platform where funds are held in escrow until work is approved.
                            Stop chasing influencers. Start scaling your brand.
                        </p>
                        <Link href="/auth/signup?role=brand">
                            <Button size="lg">Start Hiring Now</Button>
                        </Link>
                    </div>

                    {/* Workflow/Value Props */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        {[
                            {
                                icon: ShieldCheck,
                                title: "Escrow Protection",
                                desc: "Your budget is safe. Release funds only when the content meets your standards."
                            },
                            {
                                icon: Zap,
                                title: "AI-Powered Matching",
                                desc: "Our algorithms analyze audience demographics to find creators with high ROI potential."
                            },
                            {
                                icon: Users,
                                title: "Managed Workflow",
                                desc: "From brief to payout, manage everything in one dashboard. No more messy email threads."
                            }
                        ].map((feature, i) => (
                            <GlassCard key={i} className="p-8">
                                <feature.icon className="w-10 h-10 text-adquora-purple mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400">{feature.desc}</p>
                            </GlassCard>
                        ))}
                    </div>

                    {/* Dashboard Preview Mock */}
                    <div className="relative rounded-2xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl overflow-hidden shadow-2xl">
                        <div className="absolute top-0 w-full h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="p-8 pt-12">
                            <div className="grid grid-cols-12 gap-6">
                                {/* Sidebar Mock */}
                                <div className="col-span-2 space-y-4">
                                    <div className="h-4 w-24 bg-white/10 rounded" />
                                    <div className="h-4 w-20 bg-white/10 rounded" />
                                    <div className="h-4 w-16 bg-white/10 rounded" />
                                </div>
                                {/* Main Content Mock */}
                                <div className="col-span-10 space-y-6">
                                    <div className="flex justify-between items-center">
                                        <div className="h-8 w-48 bg-white/10 rounded" />
                                        <div className="h-8 w-32 bg-adquora-purple/20 rounded" />
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-32 bg-white/5 rounded-xl border border-white/5" />
                                        <div className="h-32 bg-white/5 rounded-xl border border-white/5" />
                                        <div className="h-32 bg-white/5 rounded-xl border border-white/5" />
                                    </div>
                                    <div className="h-64 bg-white/5 rounded-xl border border-white/5" />
                                </div>
                            </div>
                        </div>

                        {/* Overlay Text */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                            <h3 className="text-2xl font-bold text-white glass px-6 py-3 rounded-full">
                                Brand Dashboard Preview
                            </h3>
                        </div>
                    </div>

                </SectionWrapper>
            </section>
            <Footer />
        </main>
    );
}
