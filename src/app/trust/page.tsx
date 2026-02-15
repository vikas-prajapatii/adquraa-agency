"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, FileCheck, Banknote, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function TrustPage() {
    return (
        <main className="min-h-screen pt-20 bg-[#050505] overflow-hidden">
            {/* Hero */}
            <section className="relative py-20 px-4 text-center">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <ShieldCheck size={64} className="mx-auto text-adquora-purple mb-6" />
                        <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
                            Trust & Safety Center
                        </h1>
                        <p className="text-xl text-gray-400 mb-8">
                            How Adquora protects your money and your work with our
                            proprietary Escrow system.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Steps */}
            <section className="py-16 px-4">
                <div className="max-w-5xl mx-auto relative">
                    {/* Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-adquora-purple to-transparent hidden md:block" />

                    {[
                        {
                            icon: Lock,
                            title: "1. Client Deposits Funds",
                            desc: "The client pays the full project amount into our secure Escrow vault. The money is locked and safe.",
                            side: "left"
                        },
                        {
                            icon: FileCheck,
                            title: "2. Creator Submits Work",
                            desc: "The creator works confidently knowing the money is there. They submit the deliverables for review.",
                            side: "right"
                        },
                        {
                            icon: Banknote,
                            title: "3. Approval & Release",
                            desc: "Once the client approves the work, funds are instantly released to the creator. No chasing invoices.",
                            side: "left"
                        }
                    ].map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: step.side === "left" ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`flex flex-col md:flex-row items-center gap-8 mb-20 ${step.side === "right" ? "md:flex-row-reverse" : ""}`}
                        >
                            <div className="flex-1 text-center md:text-left">
                                <div className={`glass-card p-8 rounded-3xl border border-white/10 hover:border-adquora-purple/50 transition-all ${step.side === "right" ? "md:text-right" : ""}`}>
                                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                                    <p className="text-gray-400 text-lg leading-relaxed">{step.desc}</p>
                                </div>
                            </div>

                            <div className="relative z-10 w-16 h-16 rounded-full bg-[#050505] border-4 border-adquora-purple flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                                <step.icon size={24} className="text-white" />
                            </div>

                            <div className="flex-1" />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-8">Ready to work securely?</h2>
                    <div className="flex justify-center gap-4">
                        <Link href="/auth/signup">
                            <Button width="full" size="lg" icon={<ArrowRight size={20} />}>
                                Join Adquora Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
