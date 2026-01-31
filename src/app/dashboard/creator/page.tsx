'use client';

import { motion } from 'framer-motion';
import { DollarSign, Briefcase, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const stats = [
    {
        title: "Total Campaigns",
        value: "12",
        subtext: "Deals Completed",
        icon: Briefcase,
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Total Earnings",
        value: "$18,450",
        subtext: "Net Income (Post-Commission)",
        icon: DollarSign,
        color: "from-emerald-500 to-green-500"
    },
    {
        title: "Pending Escrow",
        value: "$2,150",
        subtext: "Securely Held Funds",
        icon: Clock,
        color: "from-orange-500 to-amber-500"
    }
];

const activeDeals = [
    {
        id: 1,
        campaign: "Summer Tech Launch",
        brand: "Tech Giant A (Hidden)",
        value: "$2,150",
        status: "In-Progress",
        deadline: "2 Days Left"
    },
    {
        id: 2,
        campaign: "Fitness App Promo",
        brand: "HealthCorp (Hidden)",
        value: "$4,500",
        status: "Reviewing",
        deadline: "Submitted"
    },
    {
        id: 3,
        campaign: "Gaming Monitor Review",
        brand: "ScreenMasters (Hidden)",
        value: "$1,200",
        status: "Completed",
        deadline: "Paid"
    }
];

export default function CreatorDashboard() {
    return (
        <div className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-[#050505] text-white">
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <header className="mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold font-display mb-2">
                        Creator Hub
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Welcome back, <span className="text-cyan-400 font-medium">Alex</span>
                    </p>
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
                            {/* Hover Glow */}
                            <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
                        </motion.div>
                    ))}
                </div>

                {/* Active Deals Table */}
                <div className="glass rounded-3xl border border-white/5 overflow-hidden">
                    <div className="p-8 border-b border-white/5 flex items-center justify-between">
                        <h2 className="text-xl font-bold font-display">Active Deals</h2>
                        <button className="text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                            View All History
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-white/5 text-gray-400 text-xs uppercase tracking-wider">
                                <tr>
                                    <th className="px-8 py-4 font-medium">Campaign Name</th>
                                    <th className="px-8 py-4 font-medium">Brand Identity</th>
                                    <th className="px-8 py-4 font-medium">Deal Value</th>
                                    <th className="px-8 py-4 font-medium">Status</th>
                                    <th className="px-8 py-4 font-medium text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {activeDeals.map((deal) => (
                                    <tr key={deal.id} className="group hover:bg-white/5 transition-colors">
                                        <td className="px-8 py-5 font-medium text-white">{deal.campaign}</td>
                                        <td className="px-8 py-5 flex items-center text-gray-400">
                                            <AlertCircle className="w-4 h-4 mr-2 text-indigo-400" />
                                            {deal.brand}
                                        </td>
                                        <td className="px-8 py-5 text-emerald-400 font-mono font-bold">{deal.value}</td>
                                        <td className="px-8 py-5">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                        ${deal.status === 'In-Progress' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                                                    deal.status === 'Reviewing' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                                                        'bg-green-500/10 text-green-400 border border-green-500/20'}`}>
                                                {deal.status === 'Completed' && <CheckCircle className="w-3 h-3 mr-1" />}
                                                {deal.status}
                                            </span>
                                        </td>
                                        <td className="px-8 py-5 text-right">
                                            {deal.status === 'In-Progress' ? (
                                                <button className="text-xs bg-white text-black px-3 py-1.5 rounded-lg font-bold hover:bg-gray-200 transition-colors">
                                                    Submit Work
                                                </button>
                                            ) : (
                                                <span className="text-xs text-gray-500">{deal.deadline}</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}
