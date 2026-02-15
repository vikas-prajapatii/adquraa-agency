"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Briefcase,
    Wallet,
    Settings,
    LogOut,
    Users,
    BarChart,
    Shield,
    Menu,
    X
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
    role: "brand" | "creator" | "admin";
}

export default function Sidebar({ role }: SidebarProps) {
    const pathname = usePathname();
    const { logout } = useAuth();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const menus = {
        brand: [
            { name: "Overview", href: "/dashboard/brand", icon: LayoutDashboard },
            { name: "Campaigns", href: "/dashboard/brand/campaigns", icon: Briefcase },
            { name: "Escrow", href: "/dashboard/brand/escrow", icon: Wallet },
            { name: "Settings", href: "/dashboard/brand/settings", icon: Settings },
        ],
        creator: [
            { name: "Overview", href: "/dashboard/creator", icon: LayoutDashboard },
            { name: "Opportunities", href: "/dashboard/creator/jobs", icon: Briefcase },
            { name: "Earnings", href: "/dashboard/creator/earnings", icon: Wallet },
            { name: "Settings", href: "/dashboard/creator/settings", icon: Settings },
        ],
        admin: [
            { name: "Overview", href: "/admin", icon: LayoutDashboard },
            { name: "Users", href: "/admin/users", icon: Users },
            { name: "Escrow", href: "/admin/escrow", icon: Shield },
            { name: "Analytics", href: "/admin/analytics", icon: BarChart },
        ]
    };

    const currentMenu = menus[role] || menus.brand;

    const NavContent = () => (
        <>
            <div className="p-8">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileOpen(false)}>
                    <span className="text-xl font-bold font-display tracking-tight text-white">
                        adquora<span className="text-adquora-cyan">.</span>
                    </span>
                </Link>
                <div className="mt-2 text-xs font-medium text-gray-500 uppercase tracking-widest pl-1">
                    {role} Console
                </div>
            </div>

            <nav className="flex-1 px-4 space-y-2">
                {currentMenu.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link key={item.name} href={item.href} onClick={() => setIsMobileOpen(false)}>
                            <Button
                                variant={isActive ? "secondary" : "ghost"}
                                className={`w-full justify-start ${isActive ? "bg-white/10 text-white" : "text-gray-400"}`}
                                icon={<item.icon size={20} />}
                            >
                                {item.name}
                            </Button>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-white/10">
                <Button
                    variant="ghost"
                    className="w-full justify-start text-red-400 hover:bg-red-500/10 hover:text-red-300"
                    onClick={() => { logout(); setIsMobileOpen(false); }}
                    icon={<LogOut size={20} />}
                >
                    Sign Out
                </Button>
            </div>
        </>
    );

    return (
        <>
            {/* Mobile Trigger */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-50 p-4 flex items-center justify-between bg-[#050505]/80 backdrop-blur-xl border-b border-white/10">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold font-display text-white">adquora.</span>
                </Link>
                <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-white p-2">
                    {isMobileOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Desktop Sidebar */}
            <aside className="hidden md:flex fixed left-0 top-0 h-full w-64 glass-panel border-r border-white/10 flex-col z-40 bg-[#050505]/95 backdrop-blur-xl">
                <NavContent />
            </aside>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.aside
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 left-0 w-64 bg-[#0a0a0a] z-50 border-r border-white/10 flex flex-col md:hidden"
                    >
                        <NavContent />
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* Mobile Backdrop */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}
        </>
    );
}
