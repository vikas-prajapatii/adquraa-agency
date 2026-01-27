'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, DollarSign } from 'lucide-react';

const features = [
    {
        icon: ShieldCheck,
        title: "Verified Identity",
        description: "Every brand and creator is manually vetted to ensure premium quality connections."
    },
    {
        icon: Lock,
        title: "Secure Escrow",
        description: "Funds are held safely in escrow until deliverables are approved. ensuring trust for both parties."
    },
    {
        icon: DollarSign,
        title: "Guaranteed Payouts",
        description: "Creators get paid instantly upon approval. No net-30 or chasing invoices."
    }
];

export default function Features() {
    return (
        <section id="features" className="py-24 relative bg-[#050505]">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 font-display mb-4">
                        Why Adquoraa?
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        We've redesigned the influencer marketing workflow with trust at the core.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-2"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:from-indigo-500/40 group-hover:to-cyan-500/40 transition-colors">
                                <feature.icon className="w-7 h-7 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-display">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
