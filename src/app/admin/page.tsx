"use client";

import { motion } from "framer-motion";
import { Users, DollarSign, Shield, Activity, Search, AlertCircle, CheckCircle } from "lucide-react";
import Sidebar from "@/components/dashboard/Sidebar";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

const stats = [
    {
        title: "Total Volume",
        value: "$1.2M",
        subtext: "+8% this week",
        icon: DollarSign,
        color: "text-green-400"
    },
    {
        title: "Active Users",
        value: "2,450",
        subtext: "1,800 Creators / 650 Brands",
        icon: Users,
        color: "text-blue-400"
    },
    {
        title: "Escrow Locked",
        value: "$340K",
        subtext: "Across 85 active deals",
        icon: Shield,
        color: "text-adquora-purple"
    },
    {
        title: "Disputes",
        value: "3",
        subtext: "Action required",
        icon: AlertCircle,
        color: "text-red-400"
    }
];

const recentActivity = [
    {
        id: 1,
        type: "Escrow Release",
        user: "Nike Inc.",
        amount: "$3,500",
        to: "@tech_enthusiast",
        status: "Completed",
        time: "2 mins ago"
    },
    {
        id: 2,
        type: "New Dispute",
        user: "@fashion_sarah",
        amount: "$1,200",
        to: "Zara",
        status: "Pending Review",
        time: "15 mins ago"
    },
    {
        id: 3,
        type: "New User Verification",
        user: "@crypto_king",
        amount: "-",
        to: "-",
        status: "Pending",
        time: "1 hour ago"
    }
];

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-[#050505] flex">
            <Sidebar role="admin" />

            <main className="flex-1 md:ml-64 p-8 pt-24 md:pt-8 min-h-screen relative overflow-hidden">
                {/* Background Haze */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[128px] pointer-events-none" />

                <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 relative z-10">
                    <div>
                        <h1 className="text-3xl font-bold font-display text-white">Admin Console</h1>
                        <p className="text-gray-400">Platform overview and risk management.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search users or tx..."
                                className="bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-white/20"
                            />
                        </div>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 relative z-10">
                    {stats.map((stat, i) => (
                        <GlassCard key={i} className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                                    <stat.icon size={20} />
                                </div>
                                {stat.title === "Disputes" && (
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                )}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                                <p className="text-sm text-gray-400">{stat.title}</p>
                                <p className="text-xs text-gray-500 mt-1">{stat.subtext}</p>
                            </div>
                        </GlassCard>
                    ))}
                </div>

                {/* Recent Activity / Risk Feed */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                    <div className="lg:col-span-2">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold font-display text-white">Platform Activity</h2>
                            <Button variant="ghost" size="sm">View All</Button>
                        </div>
                        <div className="space-y-4">
                            {recentActivity.map((activity, i) => (
                                <motion.div
                                    key={activity.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <GlassCard className="p-4 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors" hoverEffect={false}>
                                        <div className="flex items-center gap-4">
                                            <div className={`p-2 rounded-lg ${activity.status === "Pending Review" ? "bg-red-500/10 text-red-500" : "bg-green-500/10 text-green-500"}`}>
                                                <Activity size={18} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-sm">{activity.type}</h4>
                                                <p className="text-xs text-gray-400">{activity.user} {activity.to !== "-" && `→ ${activity.to}`}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-white text-sm">{activity.amount}</p>
                                            <p className="text-xs text-gray-500">{activity.time}</p>
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold font-display text-white mb-6">System Health</h2>
                        <GlassCard className="p-6 space-y-6">
                            {[
                                { label: "API Latency", value: "24ms", status: "Good" },
                                { label: "Escrow Contract", value: "Operational", status: "Good" },
                                { label: "Database", value: "Operational", status: "Good" },
                                { label: "AI Models", value: "98% Uptime", status: "Good" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between border-b border-white/5 last:border-0 pb-4 last:pb-0">
                                    <span className="text-sm text-gray-400">{item.label}</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-bold text-white">{item.value}</span>
                                        <CheckCircle size={14} className="text-green-500" />
                                    </div>
                                </div>
                            ))}
                        </GlassCard>
                    </div>
                </div>

            </main>
        </div>
    );
}
