'use client';
import { motion } from 'framer-motion';
import { UserPlus, Handshake, CreditCard } from 'lucide-react';

const steps = [
    {
        icon: UserPlus,
        title: "1. Connect",
        description: "Brands post campaigns. Verified creators apply. Connect instantly on our vetted marketplace."
    },
    {
        icon: Handshake,
        title: "2. Escrow",
        description: "Brand funds the milestone. Money is held securely in escrow. Work begins with zero risk."
    },
    {
        icon: CreditCard,
        title: "3. Release",
        description: "Work submitted and approved. Funds released instantly to the creator. No chasing invoices."
    }
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 relative bg-[#050505]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">
                        How Adquoraa Works
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A simple, secure process designed for modern collaborations.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-indigo-500/20 via-cyan-500/40 to-indigo-500/20 z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="relative z-10 text-center group"
                        >
                            <div className="w-24 h-24 mx-auto glass rounded-full flex items-center justify-center mb-8 border border-white/10 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 bg-[#050505]">
                                <step.icon className="w-10 h-10 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                            <p className="text-gray-400 leading-relaxed px-4">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
