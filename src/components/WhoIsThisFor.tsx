"use client";

import { motion } from "framer-motion";
import { Briefcase, Video } from "lucide-react";
import { SectionWrapper } from "./ui/SectionWrapper";
import { GlassCard } from "./ui/GlassCard";
import { Button } from "./ui/Button";
import Link from "next/link";

export default function WhoIsThisFor() {
    return (
        <SectionWrapper id="who-is-this-for" className="relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
                    Who is Adquora for?
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    A unified platform designed to protect and empower both sides of the creator economy.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* For Brands */}
                <GlassCard className="p-8 md:p-12 hover:shadow-adquora-purple/10 border-adquora-purple/20">
                    <div className="w-16 h-16 rounded-2xl bg-adquora-purple/10 flex items-center justify-center mb-8">
                        <Briefcase className="w-8 h-8 text-adquora-purple" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">For Brands & Agencies</h3>
                    <ul className="space-y-4 text-gray-400 mb-8">
                        {[
                            "Escrow-secured payments (no risk)",
                            "Verified creator metrics & history",
                            "Automated workflow management",
                            "Access to AI ad creation services"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-adquora-purple" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <Link href="/brand">
                        <Button variant="secondary" className="w-full">Explore Brand Solutions</Button>
                    </Link>
                </GlassCard>

                {/* For Creators */}
                <GlassCard className="p-8 md:p-12 hover:shadow-adquora-cyan/10 border-adquora-cyan/20">
                    <div className="w-16 h-16 rounded-2xl bg-adquora-cyan/10 flex items-center justify-center mb-8">
                        <Video className="w-8 h-8 text-adquora-cyan" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">For Creators & Influencers</h3>
                    <ul className="space-y-4 text-gray-400 mb-8">
                        {[
                            "Guaranteed payouts upon approval",
                            "No chasing brands for payments",
                            "Build your professional portfolio",
                            "Access high-ticket campaigns"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-adquora-cyan" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <Link href="/creator">
                        <Button variant="secondary" className="w-full">Start Creating</Button>
                    </Link>
                </GlassCard>
            </div>
        </SectionWrapper>
    );
}
