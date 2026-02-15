"use client";

import { motion } from "framer-motion";
import { DollarSign, Briefcase, Star, Clock, CheckCircle } from "lucide-react";
import Sidebar from "@/components/dashboard/Sidebar";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

const stats = [
    {
        title: "Total Earnings",
        value: "$12,450",
        subtext: "+15% vs last month",
        icon: DollarSign,
        color: "text-green-400"
    },
    {
        title: "Active Jobs",
        value: "3",
        subtext: "2 awaiting submission",
        icon: Briefcase,
        color: "text-adquora-cyan"
    },
    {
        title: "Rating",
        value: "4.9",
        subtext: "Top Rated Talent",
        icon: Star,
        color: "text-yellow-400"
    }
];

const jobs = [
    {
        id: 1,
        title: "Nike Summer Campaign",
        brand: "Nike",
        amount: "$4,500",
        status: "Action Required",
        deadline: "Today"
    },
    {
        id: 2,
        title: "Tech Unboxing",
        brand: "Samsung",
        amount: "$2,200",
        status: "In Progress",
        deadline: "3 Days left"
    },
    {
        id: 3,
        title: "Skincare Reel",
        brand: "Cetaphil",
        amount: "$800",
        status: "Completed",
        deadline: "Paid"
    }
];

export default function CreatorDashboard() {
    return (
        <div className="min-h-screen bg-[#050505] flex">
            <Sidebar role="creator" />

            <main className="flex-1 md:ml-64 p-8 pt-24 md:pt-8 min-h-screen relative overflow-hidden">
                {/* Background Haze */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-adquora-cyan/10 rounded-full blur-[128px] pointer-events-none" />

                <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 relative z-10">
                    <div>
                        <h1 className="text-3xl font-bold font-display text-white">Creator Hub</h1>
                        <p className="text-gray-400">Track your earnings and deliverables.</p>
                    </div>
                    <GlassCard className="px-4 py-2 flex items-center gap-2 bg-white/5 border border-white/10" hoverEffect={false}>
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm text-gray-300">Available for work</span>
                    </GlassCard>
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

                {/* Active Jobs */}
                <h2 className="text-xl font-bold font-display text-white mb-6">Active Jobs</h2>
                <div className="space-y-4 relative z-10">
                    {jobs.map((job, i) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <GlassCard className="p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-white/5 transition-colors">
                                <div className="flex items-center gap-4 w-full md:w-auto">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-lg">
                                        {job.brand[0]}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">{job.title}</h3>
                                        <p className="text-sm text-gray-400">{job.brand} • {job.amount}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                                    {job.status === "Action Required" && (
                                        <div className="flex items-center gap-2 text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-full text-sm">
                                            <Clock size={14} /> Submit Now
                                        </div>
                                    )}
                                    {job.status === "Completed" && (
                                        <div className="flex items-center gap-2 text-green-500 bg-green-500/10 px-3 py-1 rounded-full text-sm">
                                            <CheckCircle size={14} /> Paid
                                        </div>
                                    )}

                                    <Button variant="secondary" size="sm">
                                        Manage
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
