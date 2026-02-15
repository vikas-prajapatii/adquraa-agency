"use client";

import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import { SectionWrapper } from "./ui/SectionWrapper";
import { Button } from "./ui/Button";
import Link from "next/link";

const testimonials = [
    {
        quote: "Adquora's escrow system gave us the confidence to work with new creators. We've scaled our UGC output by 300% in two months.",
        author: "Sarah Jenkins",
        role: "CMO, TechFlow",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
        stats: "300% ROI"
    },
    {
        quote: "Finally, a platform where I don't have to chase payments. The milestone system is fair and keeps everyone accountable.",
        author: "David Chen",
        role: "Tech Creator (1.2M Subs)",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60",
        stats: "Paid Instantly"
    },
    {
        quote: "The quality of creators here is unmatched. We found our brand ambassador in less than 24 hours.",
        author: "Emily Ross",
        role: "Founder, GlowUp",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60",
        stats: "24h Hire Time"
    }
];

export default function SuccessStories() {
    return (
        <SectionWrapper id="stories">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left: Content */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6 leading-tight">
                        Real Results. <br />
                        <span className="text-gradient">No Guesswork.</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Join 500+ brands and 2,000+ creators who trust Adquora for secure, high-performance collaborations.
                    </p>

                    <div className="flex gap-4">
                        <Link href="/auth/signup?role=brand">
                            <Button size="lg" icon={<ArrowRight size={20} />}>
                                Start Hiring
                            </Button>
                        </Link>
                        <div className="flex -space-x-4 items-center">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050505] overflow-hidden bg-gray-800">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                </div>
                            ))}
                            <div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-gray-800 flex items-center justify-center text-xs text-white font-bold">
                                +2k
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Cards */}
                <div className="space-y-6">
                    {testimonials.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <GlassCard className="p-6 relative group" hoverEffect={true}>
                                <Quote className="absolute top-6 right-6 text-white/10 group-hover:text-adquora-purple/20 transition-colors" size={40} />

                                <p className="text-gray-300 mb-6 relative z-10 italic">"{item.quote}"</p>

                                <div className="flex items-center gap-4">
                                    <img src={item.image} alt={item.author} className="w-10 h-10 rounded-full object-cover ring-2 ring-white/10" />
                                    <div>
                                        <h4 className="text-white font-bold text-sm">{item.author}</h4>
                                        <p className="text-xs text-gray-500">{item.role}</p>
                                    </div>
                                    <div className="ml-auto px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20">
                                        {item.stats}
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>

            </div>
        </SectionWrapper>
    );
}
