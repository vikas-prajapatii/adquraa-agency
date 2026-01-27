'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Briefcase, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';

function SignupContent() {
    const searchParams = useSearchParams();
    const [role, setRole] = useState<'brand' | 'influencer' | null>(null);

    useEffect(() => {
        const roleParam = searchParams.get('role');
        if (roleParam === 'brand' || roleParam === 'influencer') {
            setRole(roleParam);
        }
    }, [searchParams]);

    return (
        <div className="w-full max-w-5xl mx-auto px-4 relative z-10">
            <AnimatePresence mode='wait'>
                {!role ? (
                    <RoleSelection key="selection" onSelect={setRole} />
                ) : (
                    <SignupForm key="form" role={role} onBack={() => setRole(null)} />
                )}
            </AnimatePresence>
        </div>
    );
}

export default function SignupPage() {
    return (
        <div className="min-h-screen pt-28 pb-12 flex items-center justify-center relative overflow-hidden bg-[#050505]">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[128px] pointer-events-none" />

            <Suspense fallback={<div className="text-white">Loading...</div>}>
                <SignupContent />
            </Suspense>
        </div>
    );
}

function RoleSelection({ onSelect }: { onSelect: (r: 'brand' | 'influencer') => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-4xl mx-auto text-center"
        >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
                Choose Your Path
            </h1>
            <p className="text-gray-400 mb-12 text-lg">
                Join the network that defines the future of digital influence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <button
                    onClick={() => onSelect('brand')}
                    className="group relative glass p-10 rounded-3xl border border-white/5 hover:border-cyan-500/50 transition-all duration-300 hover:bg-white/5 text-left"
                >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Briefcase className="w-8 h-8 text-indigo-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 font-display">I am a Brand</h3>
                    <p className="text-gray-400">
                        Looking to hire verified creators for secure, high-impact campaigns.
                    </p>
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/30 rounded-3xl transition-colors pointer-events-none" />
                </button>

                <button
                    onClick={() => onSelect('influencer')}
                    className="group relative glass p-10 rounded-3xl border border-white/5 hover:border-emerald-500/50 transition-all duration-300 hover:bg-white/5 text-left"
                >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <User className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 font-display">I am a Creator</h3>
                    <p className="text-gray-400">
                        Ready to monetize my influence with guaranteed payments and zero risk.
                    </p>
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-500/30 rounded-3xl transition-colors pointer-events-none" />
                </button>
            </div>
        </motion.div>
    );
}

function SignupForm({ role, onBack }: { role: 'brand' | 'influencer', onBack: () => void }) {
    const isBrand = role === 'brand';

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-md mx-auto"
        >
            <button
                onClick={onBack}
                className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
            >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to selection
            </button>

            <div className="glass p-8 rounded-3xl border border-white/10 shadow-2xl">
                <h2 className="text-3xl font-bold text-white mb-2 font-display">
                    {isBrand ? 'Brand Registration' : 'Creator Access'}
                </h2>
                <p className="text-gray-400 mb-8">
                    {isBrand ? 'Create your business account' : 'Apply for the creator network'}
                </p>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">First Name</label>
                            <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Jane" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Last Name</label>
                            <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Doe" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                        <input type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="you@company.com" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
                        <input type="password" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="••••••••" />
                    </div>

                    {isBrand ? (
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Company Name</label>
                            <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Acme Inc." />
                        </div>
                    ) : (
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Social Handle</label>
                            <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="@username" />
                        </div>
                    )}

                    <button className="w-full py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl text-white font-bold text-lg mt-4 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-[1.02] transition-all duration-300">
                        create account
                    </button>

                    <p className="text-center text-gray-500 text-sm mt-4">
                        Already have an account? <Link href="/login" className="text-cyan-400 hover:underline">Log in</Link>
                    </p>
                </form>
            </div>
        </motion.div>
    );
}
