"use client";

import { motion } from "framer-motion";
import { UserPlus, Search, Shield, DollarSign } from "lucide-react";
import { SectionWrapper } from "./ui/SectionWrapper";

const steps = [
    {
        icon: UserPlus,
        title: "Create Your Profile",
        description: "Sign up as a Brand or Creator. Brands verify funding, Creators verify stats."
    },
    {
        icon: Search,
        title: "Find & Match",
        description: "Brands post campaigns. Our AI matches them with the perfect vetted creators."
    },
    {
        icon: Shield,
        title: "Secure Contract",
        description: "Terms are set. Funds are deposited into Escrow. Work begins securely."
    },
    {
        icon: DollarSign,
        title: "Delivery & Payout",
        description: "Creator submits work. Brand approves. Funds are released instantly."
    }
];

export default function HowItWorks() {
    return (
        <SectionWrapper id="how-it-works" background="glass">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
                    How Adquora Works
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    A streamlined, secure process designed to eliminate friction and build trust.
                </p>
            </div>

            <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-[60px] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-adquora-purple/50 to-transparent dashed-line" />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group text-center">
                            <div className="relative z-10 w-24 h-24 mx-auto bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-black/50 group-hover:border-adquora-cyan/50 group-hover:shadow-adquora-cyan/20 transition-all duration-500">
                                <step.icon className="w-10 h-10 text-gray-400 group-hover:text-adquora-cyan transition-colors" />

                                {/* Step Number Badge */}
                                <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-sm font-bold text-white border border-white/20">
                                    {index + 1}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed px-2">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
