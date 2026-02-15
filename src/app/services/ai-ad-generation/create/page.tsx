"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Send, Sparkles, DollarSign, FileText, Target, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { GlassCard } from "@/components/ui/GlassCard";

export default function CreateAdPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        brandName: "",
        productUrl: "",
        adObjective: "conversions", // conversions, awareness, traffic
        targetAudience: "",
        budget: "",
        adRequirements: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // For now, just redirect to dashboard or show success
        // Ideally this would create a 'campaign request' in the backend
        setIsLoading(false);
        alert("Ad Request Submitted! Our AI is analyzing your requirements.");
        router.push("/dashboard/brand");
    };

    return (
        <main className="min-h-screen pt-24 pb-12 bg-[#050505] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-adquora-cyan/10 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-adquora-purple/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-3xl mx-auto px-4 relative z-10">
                <Link href="/services/ai-ad-generation" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={16} className="mr-2" /> Back to Pricing
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-10 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-adquora-cyan/10 border border-adquora-cyan/20 text-adquora-cyan text-sm font-medium mb-4">
                            <Sparkles size={14} /> AI Creative Studio
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
                            Create Your High-Converting Ad
                        </h1>
                        <p className="text-gray-400">
                            Tell us about your product and budget. Our AI will generate optimized creatives.
                        </p>
                    </div>

                    <GlassCard className="p-8 md:p-10 border-white/10" hoverEffect={false}>
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    label="Brand Name"
                                    placeholder="e.g. Adquora"
                                    required
                                    value={formData.brandName}
                                    onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                                />
                                <Input
                                    label="Product / Landing Page URL"
                                    placeholder="https://"
                                    type="url"
                                    required
                                    value={formData.productUrl}
                                    onChange={(e) => setFormData({ ...formData, productUrl: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-sm font-medium text-gray-400 ml-1 block mb-2">Ad Objective</label>
                                    <div className="grid grid-cols-3 gap-2">
                                        {['conversions', 'awareness', 'traffic'].map((obj) => (
                                            <button
                                                key={obj}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, adObjective: obj })}
                                                className={`px-3 py-2 rounded-xl text-sm font-medium border transition-all capitalize ${formData.adObjective === obj
                                                        ? 'bg-adquora-cyan/20 border-adquora-cyan text-white'
                                                        : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                                                    }`}
                                            >
                                                {obj}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <Input
                                    label="Budget (USD)"
                                    placeholder="2000"
                                    type="number"
                                    min="2000"
                                    step="100"
                                    required
                                    icon={<DollarSign size={16} />}
                                    value={formData.budget}
                                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                />
                            </div>

                            <Input
                                label="Target Audience"
                                placeholder="e.g. Gen Z gamers interested in esports..."
                                icon={<Target size={16} />}
                                required
                                value={formData.targetAudience}
                                onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                            />

                            <div>
                                <label className="text-sm font-medium text-gray-400 ml-1 block mb-2">
                                    Ad Requirements & Key Selling Points
                                </label>
                                <textarea
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-adquora-cyan transition-all resize-none min-h-[120px]"
                                    placeholder="Describe your ad requirements, key features to highlight, and any specific hooks you want to test..."
                                    required
                                    value={formData.adRequirements}
                                    onChange={(e) => setFormData({ ...formData, adRequirements: e.target.value })}
                                />
                            </div>

                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    width="full"
                                    size="lg"
                                    isLoading={isLoading}
                                    icon={<Send size={18} />}
                                    className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:shadow-cyan-500/20"
                                >
                                    Submit Request
                                </Button>
                                <p className="text-center text-xs text-gray-500 mt-4">
                                    By submitting, you agree to the $2,000 creation fee per ad.
                                </p>
                            </div>

                        </form>
                    </GlassCard>
                </motion.div>
            </div>
        </main>
    );
}
