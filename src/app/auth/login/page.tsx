"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Lock, Mail, Loader2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { login } = useAuth(); // Assuming useAuth exposes login

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Mock login for now or integrate with context
        // In a real app, call login(email, password)
        setTimeout(() => {
            setIsLoading(false);
            // determine role mock logic or just push to dashboard
            router.push("/dashboard/brand");
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#050505] relative overflow-hidden px-4">
            {/* Background Decor */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-adquora-purple/10 rounded-full blur-[128px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-adquora-cyan/10 rounded-full blur-[128px]" />

            <GlassCard className="w-full max-w-md p-8 md:p-10 border-white/10" hoverEffect={false}>
                <div className="text-center mb-8">
                    <Link href="/" className="inline-block mb-6">
                        <span className="text-2xl font-bold font-display text-white">
                            adquora<span className="text-adquora-cyan">.</span>
                        </span>
                    </Link>
                    <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
                    <p className="text-gray-400 text-sm">
                        Sign in to access your secure dashboard.
                    </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 ml-1">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-adquora-purple/50 focus:ring-1 focus:ring-adquora-purple/50 transition-all"
                                placeholder="name@company.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 ml-1">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-adquora-purple/50 focus:ring-1 focus:ring-adquora-purple/50 transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <Button type="submit" className="w-full" isLoading={isLoading} icon={<ArrowRight size={18} />}>
                        Sign In
                    </Button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        Don't have an account?{" "}
                        <Link href="/auth/signup" className="text-adquora-cyan hover:text-white transition-colors font-medium">
                            Create one
                        </Link>
                    </p>
                </div>
            </GlassCard>
        </div>
    );
}
