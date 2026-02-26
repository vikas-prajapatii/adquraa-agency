import { motion } from "framer-motion";
import { Check, Wand2, Video, Sparkles, Plus, PlayCircle } from "lucide-react";
import { SectionWrapper } from "./ui/SectionWrapper";
import { GlassCard } from "./ui/GlassCard";
import { Button } from "./ui/Button";

const creations = [
    {
        type: "TVC (Commercials)",
        badge: "01 - PREMIUM",
        desc: "Professional-grade commercials for TV and streaming. Cinematic quality without the million-dollar price tag.",
        image: "/avatars/3.jpg", // Placeholder - replace with actual image from screenshot 2
        features: [
            "15, 30, or 60-second commercials",
            "Multiple aspect ratios (16:9, 9:16, 1:1, 4:5)",
            "Broadcast-ready quality",
            "Script development included",
            "Voiceover options (AI or professional)",
            "Background music and sound design",
            "Agile Revision Cycles (Within Scope)",
        ],
        turnaround: "24-72 Hours (Initial Drafts)",
        color: "adquora-cyan"
    },
    {
        type: "UGC (User Generated)",
        badge: "02 - AUTHENTIC",
        desc: "Authentic, relatable content that builds trust. Looks like real customer reviews because authenticity drives conversions.",
        image: "/avatars/2.jpg", // Placeholder - replace with actual image from screenshot 2
        features: [
            "Multiple UGC-style videos (3-5 variations)",
            "Authentic \"customer testimonial\" feel",
            "Platform-optimized (TikTok, Reels, Shorts)",
            "Hook variations for A/B testing",
            "Captions and hashtag recommendations",
            "Modular Assets (Raw footage + text outs)",
        ],
        turnaround: "24-72 Hours (Initial Drafts)",
        color: "blue-500"
    },
    {
        type: "The Blend (Hybrid)",
        badge: "03 - SIGNATURE",
        desc: "The best of both worlds. Cinematic production quality meets UGC authenticity. The perfect middle ground for modern brands.",
        image: "/avatars/1.jpg", // Placeholder - replace with actual image from screenshot 2
        features: [
            "Cinematic opening sequence + UGC showcase",
            "Professional-grade production with authentic delivery",
            "Multiple variations for testing",
            "Strategic hooks that stop scrolling",
            "Omnichannel Optimization (Meta, TikTok, Broadcast)",
            "All formats and aspect ratios",
        ],
        turnaround: "24-72 Hours (Initial Drafts)",
        color: "adquora-purple"
    }
];

const workflowSteps = [
    { number: 1, title: "Briefing", color: "bg-red-500/20 text-red-500" },
    { number: 2, title: "Concept", color: "bg-blue-500/20 text-blue-500" },
    { number: 3, title: "AI Production", color: "bg-adquora-purple/20 text-adquora-purple" },
    { number: 4, title: "Review", color: "bg-pink-500/20 text-pink-500" },
    { number: 5, title: "Delivery", color: "bg-green-500/20 text-green-500" },
];


export default function AiCreativeProduction() {
    return (
        <div className="w-full py-24 relative overflow-hidden bg-[#0A0D14]">
            {/* Deep blue/black background from screenshot */}

            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

            <SectionWrapper>
                {/* Header Section (Screenshot 1 & 2 overlap) */}
                <div className="text-center max-w-4xl mx-auto mb-20 relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-adquora-cyan mb-8">
                        <Video size={16} /> BROADCAST QUALITY • AI SPEED
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-6 leading-tight">
                        Scale Your Global Creative <br /> Without <br />
                        <span className="text-blue-400">Traditional Agency Overhead</span>
                    </h2>

                    <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We leverage cutting-edge <span className="text-white font-medium">AI video production</span> to deliver broadcast-quality TVCs and authentic <span className="text-white font-medium">UGC video ads</span>. Get scroll-stopping creative that doesn't just look human—it drives measurable ROI.
                    </p>
                </div>

                {/* What We Create Section (Screenshot 2 & 3) */}
                <div className="mb-24 relative z-10">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-white inline-block relative">
                            What We Create
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-adquora-cyan" />
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {creations.map((item, i) => (
                            <GlassCard key={i} className="flex flex-col h-full bg-[#0D111A] border-white/5 hover:border-white/10 overflow-hidden group">
                                {/* Image Header with Badge */}
                                <div className="relative h-64 w-full bg-[#1A1F2E] overflow-hidden">
                                    {/* Placeholder pattern since we don't have the exact image assets yet */}
                                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-700">
                                        [Image Placeholder: {item.type}]
                                    </div>

                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold tracking-wider text-white border border-white/10">
                                            {item.badge}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Body */}
                                <div className="p-8 flex flex-col flex-grow text-center items-center">
                                    <h4 className="text-xl font-bold text-white mb-4">{item.type}</h4>
                                    <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                                        {item.desc}
                                    </p>

                                    <div className="w-full flex-grow flex flex-col items-center">
                                        <p className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-6">What You Get:</p>
                                        <ul className="space-y-4 w-full text-left mb-8">
                                            {item.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-300">
                                                    <div className={`mt-0.5 rounded-full p-0.5 bg-${item.color}/20 text-${item.color}`}>
                                                        <Check size={12} strokeWidth={3} />
                                                    </div>
                                                    <span className="leading-tight">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Turnaround Time Footer */}
                                    <div className="mt-auto w-full pt-6 border-t border-white/5">
                                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-${item.color}/20 bg-${item.color}/5 text-xs text-${item.color}`}>
                                            <div className={`w-2 h-2 rounded-full bg-${item.color}`} />
                                            Turnaround: {item.turnaround}
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>

                {/* Workflow Section (Screenshot 4) */}
                <div className="text-center relative z-10 pt-10 border-t border-white/5">
                    <h3 className="text-3xl font-bold text-white mb-2">
                        Our Production Workflow
                    </h3>
                    <p className="text-sm text-gray-400 mb-16">
                        Hover over the steps to see how we bring your vision to life.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-4 max-w-5xl mx-auto w-full">
                        {workflowSteps.map((step, i) => (
                            <div key={i} className="flex items-center flex-col md:flex-row group cursor-pointer flex-1 md:flex-none">
                                <div className="flex flex-col items-center gap-3">
                                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300 group-hover:scale-110 shadow-lg ${step.color} border border-white/5`}>
                                        {step.number}
                                    </div>
                                    <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors text-center whitespace-nowrap">{step.title}</span>
                                </div>

                                {/* Connecting Line (except for the last item) */}
                                {i < workflowSteps.length - 1 && (
                                    <div className="hidden md:block w-8 lg:w-16 h-0.5 bg-gradient-to-r from-white/10 to-transparent mx-2 lg:mx-4 mt-[-24px]" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </SectionWrapper>
        </div>
    );
}
