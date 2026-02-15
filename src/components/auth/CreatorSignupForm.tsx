"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Mail, Lock, User, Instagram, Youtube, Twitter } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CreatorSignupForm() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Mock API call
        setTimeout(() => {
            setIsLoading(false);
            router.push("/dashboard/creator");
        }, 1500);
    };

    const niches = [
        { label: "Lifestyle & Vlogging", value: "lifestyle" },
        { label: "Beauty & Fashion", value: "beauty" },
        { label: "Tech & Gaming", value: "tech" },
        { label: "Health & Fitness", value: "fitness" },
        { label: "Business & Finance", value: "business" },
        { label: "Travel", value: "travel" },
        { label: "Other", value: "other" },
    ];

    const audiences = [
        { label: "1k - 10k", value: "nano" },
        { label: "10k - 50k", value: "micro" },
        { label: "50k - 200k", value: "mid" },
        { label: "200k - 1M", value: "macro" },
        { label: "1M+", value: "mega" },
    ];

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <Input
                    label="First Name"
                    placeholder="Jane"
                    icon={<User size={18} />}
                    required
                />
                <Input
                    label="Last Name"
                    placeholder="Doe"
                    icon={<User size={18} />}
                    required
                />
            </div>

            <Input
                label="Email Address"
                type="email"
                placeholder="you@example.com"
                icon={<Mail size={18} />}
                required
            />

            <div className="space-y-4 pt-2">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Social Presence</p>
                <div className="grid grid-cols-2 gap-4">
                    <Select
                        label="Primary Niche"
                        options={niches}
                        placeholder="Select Niche"
                        required
                    />
                    <Select
                        label="Total Audience"
                        options={audiences}
                        placeholder="Select Audience Size"
                        required
                    />
                </div>

                <div className="space-y-3">
                    <Input
                        placeholder="@username"
                        icon={<Instagram size={18} />}
                    />
                    <Input
                        placeholder="Channel URL"
                        icon={<Youtube size={18} />}
                    />
                </div>
            </div>

            <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                icon={<Lock size={18} />}
                required
            />

            <div className="pt-4">
                <Button className="w-full bg-gradient-to-r from-adquora-cyan to-blue-500" size="lg" isLoading={isLoading}>
                    Apply as Creator
                </Button>
                <p className="text-xs text-gray-500 mt-4 text-center">
                    By joining, you agree to our Terms of Service.
                </p>
            </div>
        </form>
    );
}
