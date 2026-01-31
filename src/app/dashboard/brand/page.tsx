'use client';

import { motion } from 'framer-motion';
import { DollarSign, Layers, Database, User, PlayCircle, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const stats = [
    {
        title: "Active Campaigns",
        value: "4",
        subtext: "Influencers Hired",
        icon: Layers,
        color: "from-purple-500 to-indigo-500"
    },
    {
        title: "Total Spend",
        value: "$42,000",
        subtext: "Lifetime Investment",
        icon: Database,
        color: "from-pink-500 to-rose-500"
    },
    {
        title: "Escrow Balance",
        value: "$8,450",
        subtext: "Funds Locked for Deals",
        icon: DollarSign,
        color: "from-cyan-500 to-blue-500"
    }
];

const campaigns = [
    {
        id: 1,
        title: "Product Launch Video",
        creator: "@tech_enthusiast",
        amount: "$3,500",
        status: "Submission Ready",
        videoUrl: "#"
    },
    {
        id: 2,
        title: "Instagram Story Series",
        creator: "@lifestyle_amy",
        amount: "$1,200",
        status: "In-Progress",
        videoUrl: null
    },
    {
        id: 3,
        title: "Detailed Blog Review",
        creator: "@gadget_reviews",
        amount: "$2,800",
        status: "Submission Ready",
        videoUrl: "#"
    }
];

export default function BrandDashboard() {
    const [releasedIds, setReleasedIds] = useState<number[]>([]);

    const handleRelease = (id: number) => {
        // In a real app, this would trigger an API call to smart contract/backend
        setReleasedIds([...releasedIds, id]);
    };

    return (
        <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-[#050505] text-white">
            {/* Background accents */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <header className="mb-12 flex items-end justify-between">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold font-display mb-2">
                            Brand Console
                        </h1>
                        <p className="text-gray-400 text-lg">
                            Manage your campaigns and escrow funds.
                        </p>
                    </div>
                    <button className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform shadow-lg">
                        + New Campaign
                    </button>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-6 rounded-2xl border border-white/5 relative overflow-hidden group"
                        >
                            <div className="relative z-10 flex items-start justify-between">
                                <div>
                                    <p className="text-gray-400 text-sm font-medium mb-1">{stat.title}</p>
                                    <h3 className="text-3xl font-bold font-display mb-1">{stat.value}</h3>
                                    <p className="text-xs text-gray-500">{stat.subtext}</p>
                                </div>
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                                    <stat.icon className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
                        </motion.div>
                    ))}
                </div>

                {/* Campaign Manager */}
                <div className="grid gap-6">
                    <h2 className="text-xl font-bold font-display px-1">Active Campaigns & Submissions</h2>

                    {campaigns.map((campaign, index) => {
                        const isReleased = releasedIds.includes(campaign.id);

                        return (
                            <motion.div
                                key={campaign.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.15 }}
                                className="glass rounded-2xl p-6 border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-white/10 transition-colors"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                        <User className="w-8 h-8 text-gray-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">{campaign.title}</h3>
                                        <p className="text-cyan-400 text-sm flex items-center gap-2">
                                            {campaign.creator}
                                            <span className="w-1 h-1 rounded-full bg-gray-500" />
                                            <span className="text-gray-400">{campaign.amount} Escrowed</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 flex-wrap md:flex-nowrap">
                                    {campaign.status === "Submission Ready" ? (
                                        <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/10 text-yellow-500 rounded-lg border border-yellow-500/20">
                                            <PlayCircle className="w-4 h-4" />
                                            <span className="text-sm font-bold">Review Submission</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-500 rounded-lg border border-blue-500/20">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                                            <span className="text-sm font-bold">In Progress</span>
                                        </div>
                                    )}

                                    {isReleased ? (
                                        <button disabled className="px-6 py-3 bg-green-500/20 text-green-400 rounded-xl font-bold flex items-center gap-2 cursor-default border border-green-500/20">
                                            <CheckCircle className="w-5 h-5" /> Funds Released
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleRelease(campaign.id)}
                                            disabled={campaign.status !== "Submission Ready"}
                                            className={`px-6 py-3 rounded-xl font-bold transition-all ${campaign.status === "Submission Ready"
                                                    ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:scale-105 shadow-lg'
                                                    : 'bg-white/5 text-gray-500 cursor-not-allowed'
                                                }`}
                                        >
                                            Release {campaign.amount}
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
