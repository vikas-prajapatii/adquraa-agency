"use client";

import { motion } from "framer-motion";
import { Star, TrendingUp, CheckCircle, Instagram, Youtube, Twitch } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import { SectionWrapper } from "./ui/SectionWrapper";

const creators = [
    {
        name: "Alex Rivera",
        niche: "Tech & Gadgets",
        platform: "YouTube",
        followers: "1.2M",
        engagement: "8.5%",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        icon: Youtube,
        color: "text-red-500"
    },
    {
        name: "Sarah Chen",
        niche: "Lifestyle & Travel",
        platform: "Instagram",
        followers: "850K",
        engagement: "12%",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        icon: Instagram,
        color: "text-pink-500"
    },
    {
        name: "Marcus J",
        niche: "Gaming & Esports",
        platform: "Twitch",
        followers: "2.5M",
        engagement: "15%",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        icon: Twitch,
        color: "text-purple-500"
    },
    {
        name: "Priya Patel",
        niche: "Fashion & Beauty",
        platform: "Instagram",
        followers: "500K",
        engagement: "9.2%",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        icon: Instagram,
        color: "text-pink-500"
    }
];

export default function FeaturedCreators() {
    return (
        <SectionWrapper id="creators">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm font-medium mb-4">
                    <Star size={14} className="fill-current" /> Top Talent
                </div>
                <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
                    Featured Creators
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Hand-picked influencers with proven ROI history. ready to amplify your brand.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {creators.map((creator, index) => (
                    <GlassCard key={index} className="p-0 overflow-hidden group cursor-pointer" hoverEffect={true}>
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src={creator.image}
                                alt={creator.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                            <div className="absolute bottom-4 left-4 right-4">
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="text-lg font-bold text-white">{creator.name}</h3>
                                    <CheckCircle size={16} className="text-blue-400 fill-blue-400/20" />
                                </div>
                                <p className="text-sm text-gray-300">{creator.niche}</p>
                            </div>

                            <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                                <creator.icon size={18} className={creator.color} />
                            </div>
                        </div>

                        <div className="p-5">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">Followers</p>
                                    <p className="text-white font-bold">{creator.followers}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">Engagement</p>
                                    <p className="text-green-400 font-bold flex items-center gap-1 justify-end">
                                        <TrendingUp size={14} /> {creator.engagement}
                                    </p>
                                </div>
                            </div>

                            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-adquora-purple to-adquora-cyan w-[85%]" />
                            </div>
                            <p className="text-[10px] text-gray-500 mt-2 text-right">Reputation Score: 98/100</p>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </SectionWrapper>
    );
}
