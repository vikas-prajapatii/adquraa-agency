"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Briefcase, Globe, Mail, Lock, User, Building } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BrandSignupForm() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Mock API call
        setTimeout(() => {
            setIsLoading(false);
            router.push("/dashboard/brand");
        }, 1500);
    };

    const industries = [
        { label: "Technology & SaaS", value: "tech" },
        { label: "E-Commerce & Retail", value: "ecommerce" },
        { label: "Health & Wellness", value: "health" },
        { label: "Fashion & Beauty", value: "fashion" },
        { label: "Finance & Fintech", value: "finance" },
        { label: "Gaming & Entertainment", value: "gaming" },
        { label: "Other", value: "other" },
    ];

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <Input
                    label="Contact First Name"
                    placeholder="John"
                    icon={<User size={18} />}
                    required
                />
                <Input
                    label="Contact Last Name"
                    placeholder="Doe"
                    icon={<User size={18} />}
                    required
                />
            </div>

            <Input
                label="Work Email"
                type="email"
                placeholder="name@company.com"
                icon={<Mail size={18} />}
                required
            />

            <Input
                label="Company Name"
                placeholder="Acme Inc."
                icon={<Building size={18} />}
                required
            />

            <div className="grid grid-cols-2 gap-4">
                <Input
                    label="Website URL"
                    placeholder="https://acme.com"
                    icon={<Globe size={18} />}
                    required
                />
                <Select
                    label="Industry"
                    options={industries}
                    placeholder="Select Industry"
                    required
                />
            </div>

            <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                icon={<Lock size={18} />}
                required
            />

            <div className="pt-4">
                <Button className="w-full bg-gradient-to-r from-adquora-purple to-adquora-blue" size="lg" isLoading={isLoading}>
                    Create Brand Account
                </Button>
                <p className="text-xs text-gray-500 mt-4 text-center">
                    By joining, you agree to our Terms of Service and Escrow Policy.
                </p>
            </div>
        </form>
    );
}
