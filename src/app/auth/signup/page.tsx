"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import BrandSignupForm from "@/components/auth/BrandSignupForm";
import CreatorSignupForm from "@/components/auth/CreatorSignupForm";
import { Briefcase, Video, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SignupPage() {
    const searchParams = useSearchParams();
    const initialRole = searchParams.get("role") === "creator" ? "creator" : "brand";
    const [role, setRole] = useState<"brand" | "creator">(initialRole as "brand" | "creator");

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#050505] relative overflow-hidden px-4 py-20">
            {/* Background Decor */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 ${role === 'brand' ? 'bg-adquora-purple/10' : 'bg-adquora-cyan/10'} rounded-full blur-[128px] transition-colors duration-500`} />

            <GlassCard className="w-full max-w-5xl overflow-hidden border-white/10 p-0" hoverEffect={false}>
                <div className="flex flex-col md:flex-row w-full h-full min-h-[600px]">
                    {/* Left Side: Role Selection & Info */}
                    <div className={`md:w-2/5 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden transition-colors duration-500 ${role === 'brand' ? 'bg-adquora-purple/5' : 'bg-adquora-cyan/5'}`}>
                        <div className="relative z-10">
                            <Link href="/" className="inline-block mb-12">
                                <span className="text-2xl font-bold font-display text-white">
                                    adquora<span className={role === 'brand' ? 'text-adquora-purple' : 'text-adquora-cyan'}>.</span>
                                </span>
                            </Link>

                            <h2 className="text-3xl font-bold text-white mb-6">
                                Join the ecosystem.
                            </h2>

                            <div className="space-y-4 mb-8">
                                <button
                                    onClick={() => setRole("brand")}
                                    className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all ${role === "brand"
                                        ? "bg-adquora-purple/20 border-adquora-purple text-white"
                                        : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                                        } cursor-pointer`}
                                >
                                    <div className={`p-2 rounded-lg ${role === 'brand' ? 'bg-adquora-purple' : 'bg-gray-800'}`}>
                                        <Briefcase size={20} className="text-white" />
                                    </div>
                                    <div className="text-left">
                                        <div className="font-bold">I'm a Brand</div>
                                        <div className="text-xs opacity-80">Hiring creators</div>
                                    </div>
                                    {role === "brand" && <CheckCircle size={18} className="ml-auto text-adquora-purple" />}
                                </button>

                                <button
                                    onClick={() => setRole("creator")}
                                    className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all ${role === "creator"
                                        ? "bg-adquora-cyan/20 border-adquora-cyan text-white"
                                        : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                                        } cursor-pointer`}
                                >
                                    <div className={`p-2 rounded-lg ${role === 'creator' ? 'bg-adquora-cyan' : 'bg-gray-800'}`}>
                                        <Video size={20} className="text-white" />
                                    </div>
                                    <div className="text-left">
                                        <div className="font-bold">I'm a Creator</div>
                                        <div className="text-xs opacity-80">Looking for work</div>
                                    </div>
                                    {role === "creator" && <CheckCircle size={18} className="ml-auto text-adquora-cyan" />}
                                </button>
                            </div>
                        </div>

                        <div className="relative z-10 text-sm text-gray-400">
                            <p>Already have an account?</p>
                            <Link href="/auth/login" className="text-white hover:underline">Log in here</Link>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="md:w-3/5 p-8 md:p-12 bg-black/20 backdrop-blur-sm">
                        <div className="max-w-md mx-auto h-full flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-white mb-2">
                                Create your {role === 'brand' ? 'Brand' : 'Creator'} Account
                            </h3>
                            <p className="text-gray-400 mb-8 text-sm">
                                {role === 'brand'
                                    ? "Access verified creators and secure escrow payments."
                                    : "Get guaranteed payouts and work with top brands."}
                            </p>

                            <div className="overflow-y-auto max-h-[500px] pr-2 custom-scrollbar">
                                {role === 'brand' ? <BrandSignupForm /> : <CreatorSignupForm />}
                            </div>

                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-500">
                                    Already have an account? <Link href="/auth/login" className="text-white hover:underline font-medium">Log in</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </GlassCard>
        </div>
    );
}
