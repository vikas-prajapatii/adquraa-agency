"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, LayoutDashboard, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { Button } from "./ui/Button";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { user, isAuthenticated, logout } = useAuth();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Hide Navbar on dashboard and admin pages
    // We also check for !pathname to prevent hydration mismatches if the path isn't ready
    if (!pathname || pathname.startsWith("/dashboard") || pathname.startsWith("/admin")) {
        return null;
    }

    const navLinks = [
        { name: "Services", href: "/services" },
        { name: "For Brands", href: "/brand" },
        { name: "For Creators", href: "/creator" },
        { name: "Contact", href: "/contact" },
    ];

    const dashboardLink =
        user?.role === "BRAND" ? "/dashboard/brand" : "/dashboard/creator";

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? "glass-panel border-b border-white/5 py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-10 h-10 flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-tr from-adquora-purple to-adquora-cyan rounded-lg opacity-80 blur group-hover:opacity-100 transition-opacity" />
                            <div className="relative bg-black w-[38px] h-[38px] rounded-lg flex items-center justify-center border border-white/10">
                                <span className="text-xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-tr from-white to-gray-400">
                                    A
                                </span>
                            </div>
                        </div>
                        <span className="text-xl font-bold font-display tracking-tight text-white group-hover:text-shadow-glow transition-all">
                            adquora
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors hover:text-white ${pathname === link.href ? "text-white" : "text-gray-400"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="pl-6 border-l border-white/10 flex items-center gap-4">
                            {isAuthenticated ? (
                                <>
                                    <Link href={dashboardLink}>
                                        <Button variant="ghost" size="sm" icon={<LayoutDashboard size={16} />}>
                                            Dashboard
                                        </Button>
                                    </Link>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                                        onClick={() => logout()}
                                        icon={<LogOut size={16} />}
                                    >
                                        Logout
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Link href="/auth/login">
                                        <Button variant="ghost" size="sm">
                                            Login
                                        </Button>
                                    </Link>
                                    <Link href="/auth/signup">
                                        <Button variant="primary" size="sm">
                                            Get Started
                                        </Button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-panel border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="block px-4 py-3 rounded-xl text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <div className="my-4 h-px bg-white/10" />

                            {isAuthenticated ? (
                                <>
                                    <Link href={dashboardLink} onClick={() => setIsOpen(false)}>
                                        <Button variant="secondary" className="w-full justify-start mb-2" icon={<LayoutDashboard size={18} />}>
                                            Dashboard
                                        </Button>
                                    </Link>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start text-red-400 hover:bg-red-500/10"
                                        onClick={() => {
                                            logout();
                                            setIsOpen(false);
                                        }}
                                        icon={<LogOut size={18} />}
                                    >
                                        Logout
                                    </Button>
                                </>
                            ) : (
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                                        <Button variant="secondary" className="w-full">Login</Button>
                                    </Link>
                                    <Link href="/auth/signup" onClick={() => setIsOpen(false)}>
                                        <Button variant="primary" className="w-full">Sign Up</Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
