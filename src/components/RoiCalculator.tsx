"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Users, Eye } from "lucide-react";
import { SectionWrapper } from "./ui/SectionWrapper";
import { GlassCard } from "./ui/GlassCard";
import { Input } from "./ui/Input";

export default function RoiCalculator() {
    const [budget, setBudget] = useState(5000);
    const [niche, setNiche] = useState("Tech");

    // Simple logic for demo purposes
    const cpm = niche === "Tech" ? 25 : niche === "Fashion" ? 15 : 10;
    const estimatedViews = Math.floor((budget / cpm) * 1000);
    const estimatedEngagement = Math.floor(estimatedViews * 0.05); // 5% engagement

    return (
        <SectionWrapper id="calculator">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
                        Calculate Your <span className="text-gradient">Potential Reach</span>
                    </h2>
                    <p className="text-gray-400">
                        See what your budget can achieve with Adquora's optimized creator network.
                    </p>
                </div>

                <GlassCard className="p-8 md:p-12 border-white/10 relative overflow-hidden" hoverEffect={false}>
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-adquora-cyan/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                        {/* Inputs */}
                        <div className="space-y-8">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-4">
                                    Campaign Budget: <span className="text-white font-bold">${budget.toLocaleString()}</span>
                                </label>
                                <input
                                    type="range"
                                    min="500"
                                    max="50000"
                                    step="500"
                                    value={budget}
                                    onChange={(e) => setBudget(parseInt(e.target.value))}
                                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-adquora-cyan"
                                />
                                <div className="flex justify-between text-xs text-gray-500 mt-2">
                                    <span>$500</span>
                                    <span>$50k+</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-4">Target Niche</label>
                                <div className="grid grid-cols-3 gap-3">
                                    {["Tech", "Fashion", "Gaming", "Lifestyle", "Business", "Crypto"].map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => setNiche(opt)}
                                            className={`px-3 py-2 rounded-lg text-sm border transition-all ${niche === opt
                                                    ? "bg-adquora-cyan/20 border-adquora-cyan text-white"
                                                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                                                }`}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Outcomes */}
                        <div className="space-y-6">
                            <div className="p-6 rounded-2xl bg-black/40 border border-white/10">
                                <div className="flex items-center gap-3 mb-2 text-gray-400">
                                    <Eye size={18} className="text-adquora-cyan" />
                                    Estimated Views
                                </div>
                                <div className="text-3xl font-bold text-white">
                                    {estimatedViews.toLocaleString()} <span className="text-sm font-normal text-gray-500">+</span>
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-black/40 border border-white/10">
                                <div className="flex items-center gap-3 mb-2 text-gray-400">
                                    <Users size={18} className="text-adquora-purple" />
                                    Est. Engagement (Likes/Comments)
                                </div>
                                <div className="text-3xl font-bold text-white">
                                    {estimatedEngagement.toLocaleString()} <span className="text-sm font-normal text-gray-500">+</span>
                                </div>
                            </div>

                            <p className="text-xs text-center text-gray-500 mt-4">
                                *Estimates based on average CPM across our creator network for {niche} niche.
                            </p>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </SectionWrapper>
    );
}
