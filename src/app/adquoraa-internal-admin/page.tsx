'use client';
import { motion } from 'framer-motion';
import { DollarSign, Activity, PieChart, TrendingUp, Users } from 'lucide-react';

const stats = [
    {
        title: "Total Revenue",
        value: "$1,245,000",
        change: "+12.5%",
        icon: DollarSign,
        color: "from-green-500 to-emerald-500"
    },
    {
        title: "Active Escrow Deals",
        value: "84",
        change: "+4",
        icon: Activity,
        color: "from-blue-500 to-indigo-500"
    },
    {
        title: "Platform Commission (20%)",
        value: "$249,000",
        change: "+12.5%",
        icon: PieChart,
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Active Users",
        value: "1,203",
        change: "+18%",
        icon: Users,
        color: "from-orange-500 to-red-500"
    }
];

const resentDeals = [
    { id: 1, brand: "TechVision", influencer: "@tech_guru", value: "$15,000", status: "In Escrow" },
    { id: 2, brand: "FashionNova", influencer: "@style_icon", value: "$45,000", status: "Released" },
    { id: 3, brand: "GameFuel", influencer: "@gamer_x", value: "$8,500", status: "Dispute" },
    { id: 4, brand: "SoundCore", influencer: "@audio_phile", value: "$12,000", status: "In Escrow" },
];

export default function AdminDashboard() {
    return (
        <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 bg-[#050505] text-white">
            <div className="max-w-7xl mx-auto">
                <header className="mb-10 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold font-display">Manager Dashboard</h1>
                        <p className="text-gray-400 mt-1">Platform Overview & Financials</p>
                    </div>
                    <div className="text-right">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                            System Operational
                        </span>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-6 rounded-2xl border border-white/5 relative overflow-hidden group"
                        >
                            <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity`}>
                                <stat.icon className="w-24 h-24" />
                            </div>

                            <div className="relative z-10">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                                    <stat.icon className="w-6 h-6 text-white" />
                                </div>
                                <p className="text-gray-400 text-sm font-medium">{stat.title}</p>
                                <div className="flex items-end gap-2 mt-1">
                                    <h3 className="text-2xl font-bold font-display">{stat.value}</h3>
                                    <span className="text-green-400 text-xs font-medium mb-1 flex items-center">
                                        <TrendingUp className="w-3 h-3 mr-0.5" /> {stat.change}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Recent Deals */}
                    <div className="lg:col-span-2 glass rounded-2xl border border-white/5 p-6">
                        <h3 className="text-lg font-bold mb-6 font-display">Recent Deals</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-white/10 text-gray-400 text-sm">
                                        <th className="pb-4 font-medium">Brand</th>
                                        <th className="pb-4 font-medium">Influencer</th>
                                        <th className="pb-4 font-medium">Value</th>
                                        <th className="pb-4 font-medium">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {resentDeals.map((deal) => (
                                        <tr key={deal.id} className="group hover:bg-white/5 transition-colors">
                                            <td className="py-4 text-white font-medium">{deal.brand}</td>
                                            <td className="py-4 text-cyan-400">{deal.influencer}</td>
                                            <td className="py-4 text-gray-300">{deal.value}</td>
                                            <td className="py-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                           ${deal.status === 'In Escrow' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                                                        deal.status === 'Released' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                                                            'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                                                    {deal.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Platform Health / Notifications */}
                    <div className="glass rounded-2xl border border-white/5 p-6">
                        <h3 className="text-lg font-bold mb-6 font-display">System Status</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                                <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5" />
                                <div>
                                    <h4 className="text-sm font-medium text-white">Payment Gateway</h4>
                                    <p className="text-xs text-gray-400 mt-1">Stripe & PayPal operational.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                                <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5" />
                                <div>
                                    <h4 className="text-sm font-medium text-white">Database Cluster</h4>
                                    <p className="text-xs text-gray-400 mt-1">Latency: 24ms. No incidents.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                                <div className="w-2 h-2 rounded-full bg-yellow-500 mt-1.5" />
                                <div>
                                    <h4 className="text-sm font-medium text-white">Email Service</h4>
                                    <p className="text-xs text-gray-400 mt-1">High load. Slight delays expected.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
