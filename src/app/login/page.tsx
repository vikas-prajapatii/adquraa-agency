'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function LoginPage() {
    return (
        <div className="min-h-screen pt-28 pb-12 flex items-center justify-center relative overflow-hidden bg-[#050505]">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[128px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md px-4 relative z-10"
            >
                <Link
                    href="/"
                    className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>

                <div className="glass p-8 rounded-3xl border border-white/10 shadow-2xl">
                    <h1 className="text-3xl font-bold text-white mb-2 font-display text-center">Welcome Back</h1>
                    <p className="text-gray-400 mb-8 text-center">
                        Access your dashboard to manage campaigns.
                    </p>

                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                            <input
                                type="email"
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                placeholder="you@company.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
                            <input
                                type="password"
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                placeholder="••••••••"
                            />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center text-gray-400 cursor-pointer">
                                <input type="checkbox" className="mr-2 rounded bg-white/10 border-white/10" />
                                Remember me
                            </label>
                            <a href="#" className="text-cyan-400 hover:text-cyan-300">Forgot password?</a>
                        </div>

                        <button className="w-full py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl text-white font-bold text-lg shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-[1.02] transition-all duration-300">
                            Log In
                        </button>

                        <p className="text-center text-gray-500 text-sm mt-6">
                            Don't have an account? <Link href="/signup" className="text-cyan-400 hover:underline">Sign up</Link>
                        </p>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}
