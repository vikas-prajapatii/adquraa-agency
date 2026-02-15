"use client";

import { motion } from "framer-motion";
import { Megaphone, Layout, Cpu } from "lucide-react";
import Link from "next/link";
import { SectionWrapper } from "./ui/SectionWrapper";
import { GlassCard } from "./ui/GlassCard";

const services = [
    {
        icon: Megaphone,
        title: "Influencer Marketing",
        description: "End-to-end campaign management with verified creators. Performance tracking and automated payouts included.",
        color: "text-adquora-purple"
    },
    {
        icon: Cpu,
        title: "AI Ad Generation",
        description: "Generate high-converting ad creatives at scale using our proprietary AI models trained on top-performing content.",
        color: "text-adquora-cyan"
    },
    {
        icon: Layout,
        title: "Web & Landing Pages",
        description: "Custom, high-performance landing pages developed by our agency team to maximize your campaign conversions.",
        color: "text-blue-400"
    }
];

export default function ServicesOverview() {
    return (
        <SectionWrapper id="services">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
                    Our Ecosystem Services
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Beyond matching. We provide the tools and services you need to scale.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => {
                    // Check if the service title matches "AI Ad Generation"
                    const isAiLink = service.title === "AI Ad Generation";
                    const CardContent = (
                        <GlassCard className={`p-8 group h-full ${isAiLink ? 'cursor-pointer hover:border-adquora-cyan/50' : ''}`} hoverEffect={true} gradient={true}>
                            <div className={`w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform`}>
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                {service.title}
                                {isAiLink && <span className="text-xs px-2 py-0.5 rounded-full bg-adquora-cyan/20 text-adquora-cyan border border-adquora-cyan/30">NEW</span>}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </GlassCard>
                    );

                    if (isAiLink) {
                        return (
                            <Link href="/services/ai-ad-generation" key={index} className="block h-full">
                                {CardContent}
                            </Link>
                        );
                    }

                    if (service.title === "Web & Landing Pages") {
                        return (
                            <Link href="/services/web-development" key={index} className="block h-full cursor-pointer hover:border-blue-400/50">
                                {CardContent}
                            </Link>
                        );
                    }

                    return <div key={index} className="h-full">{CardContent}</div>;
                })}
            </div>
        </SectionWrapper>
    );
}

