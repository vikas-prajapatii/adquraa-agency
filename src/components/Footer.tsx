import Link from "next/link";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-[#050505] border-t border-white/10 pt-16 pb-8 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-adquora-purple/5 blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-xl font-bold font-display tracking-tight text-white">
                                adquora<span className="text-adquora-cyan">.</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The controlled ecosystem where brands and creators collaborate securely.
                            Escrow-backed payments and AI-driven growth.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all hover:scale-110"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {[
                        {
                            title: "Platform",
                            links: [
                                { label: "For Brands", href: "/brand" },
                                { label: "For Creators", href: "/creator" },
                                { label: "Services", href: "/services" },
                                { label: "Pricing", href: "#" },
                            ],
                        },
                        {
                            title: "Company",
                            links: [
                                { label: "About Us", href: "#" },
                                { label: "Careers", href: "#" },
                                { label: "Blog", href: "#" },
                                { label: "Contact", href: "#" },
                            ],
                        },
                        {
                            title: "Legal",
                            links: [
                                { label: "Privacy Policy", href: "#" },
                                { label: "Terms of Service", href: "#" },
                                { label: "Escrow Rules", href: "#" },
                                { label: "Cookie Policy", href: "#" },
                            ],
                        },
                    ].map((column) => (
                        <div key={column.title}>
                            <h4 className="font-semibold text-white mb-6">{column.title}</h4>
                            <ul className="space-y-4">
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-adquora-cyan transition-colors text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Adquora Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <span>Made with 💜 for Creators</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
