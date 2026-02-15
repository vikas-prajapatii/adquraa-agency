"use client";

import { motion } from "framer-motion";
import { Users, DollarSign, Briefcase, Plus, PlayCircle, CheckCircle } from "lucide-react";
import Sidebar from "@/components/dashboard/Sidebar";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

const stats = [
    {
        title: "Active Campaigns",
        value: "4",
        subtext: "Influencers Hired",
        icon: Briefcase,
        color: "text-adquora-purple"
    },
    {
        title: "Total Spend",
        value: "$42,000",
        subtext: "Lifetime Investment",
        icon: DollarSign,
        color: "text-green-400"
    },
    {
        title: "Escrow Balance",
        value: "$8,450",
        subtext: "Funds Locked",
        icon: Users, // Using Users as a placeholder/icon
        color: "text-adquora-cyan"
    }
];

const campaigns = [
    {
        id: 1,
        title: "Product Launch Video",
        creator: "@tech_enthusiast",
        amount: "$3,500",
        status: "Submission Ready",
        image: "/avatars/1.jpg" // Placeholder
    },
    {
        id: 2,
        title: "Instagram Story Series",
        creator: "@lifestyle_amy",
        amount: "$1,200",
        status: "In-Progress",
        image: "/avatars/2.jpg"
    },
    {
        id: 3,
        title: "Detailed Blog Review",
        creator: "@gadget_reviews",
        amount: "$2,800",
        status: "Submission Ready",
        image: "/avatars/3.jpg"
    }
];

export default function BrandDashboard() {
    return (
        <div className="min-h-screen bg-[#050505] flex">
            <Sidebar role="brand" />

            <main className="flex-1 md:ml-64 p-8 pt-24 md:pt-8 min-h-screen relative overflow-hidden">
                {/* Background Haze */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-adquora-purple/10 rounded-full blur-[128px] pointer-events-none" />

                <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 relative z-10">
                    <div>
                        <h1 className="text-3xl font-bold font-display text-white">Brand Overview</h1>
                        <p className="text-gray-400">Welcome back, Nike Inc.</p>
                    </div>
                    <Button icon={<Plus size={18} />}>New Campaign</Button>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 relative z-10">
                    {stats.map((stat, i) => (
                        <GlassCard key={i} className="p-6 flex items-center gap-4">
                            <div className={`p-4 rounded-xl bg-white/5 ${stat.color}`}>
                                <stat.icon size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">{stat.title}</p>
                                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                                <p className="text-xs text-gray-500">{stat.subtext}</p>
                            </div>
                        </GlassCard>
                    ))}
                </div>

                {/* Active Campaigns */}
                <h2 className="text-xl font-bold font-display text-white mb-6">Active Campaigns</h2>
                <div className="space-y-4 relative z-10">
                    {campaigns.map((campaign, i) => (
                        <motion.div
                            key={campaign.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <GlassCard className="p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-white/5 transition-colors">
                                <div className="flex items-center gap-4 w-full md:w-auto">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl">
                                        {campaign.creator[1]}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">{campaign.title}</h3>
                                        <p className="text-sm text-gray-400">{campaign.creator} • {campaign.amount}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 w-full md:w-auto">
                                    {campaign.status === "Submission Ready" ? (
                                        <div className="flex items-center gap-2 text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-full text-sm">
                                            <PlayCircle size={14} /> Ready for Review
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2 text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full text-sm">
                                            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" /> In Progress
                                        </div>
                                    )}

                                    <Button variant="secondary" size="sm" disabled={campaign.status !== "Submission Ready"}>
                                        {campaign.status === "Submission Ready" ? "Review & Release" : "View Details"}
                                    </Button>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>

            </main>
        </div>
    );
}

