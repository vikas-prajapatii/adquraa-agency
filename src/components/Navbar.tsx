'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled
                ? 'glass border-white/10 bg-[#050505]/60 supports-[backdrop-filter]:bg-[#050505]/40 shadow-lg backdrop-blur-md'
                : 'bg-transparent border-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-500 font-display tracking-tight"
                        >
                            Adquoraa Agency
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="/#features" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Features
                            </Link>
                            <Link href="/#how-it-works" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                How it Works
                            </Link>
                            <Link href="/#brands" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                For Brands
                            </Link>
                            <Link href="/#creators" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                For Creators
                            </Link>
                            <span className="text-gray-700">|</span>
                            <Link href="/dashboard/brand" className="text-gray-400 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Brand Console
                            </Link>
                            <Link href="/dashboard/creator" className="text-gray-400 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Creator Hub
                            </Link>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4">
                            <Link
                                href="/login"
                                className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
                            >
                                Login
                            </Link>
                            <Link
                                href="/signup"
                                className="glass glass-hover text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full glass border-b border-white/10 bg-[#050505]/95 backdrop-blur-xl animate-in slide-in-from-top-5 duration-200" id="mobile-menu">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        <Link href="/#features" className="text-gray-300 hover:text-white hover:bg-white/5 block px-4 py-3 rounded-xl text-lg font-medium transition-colors" onClick={() => setIsOpen(false)}>Features</Link>
                        <Link href="/#how-it-works" className="text-gray-300 hover:text-white hover:bg-white/5 block px-4 py-3 rounded-xl text-lg font-medium transition-colors" onClick={() => setIsOpen(false)}>How it Works</Link>
                        <Link href="/#brands" className="text-gray-300 hover:text-white hover:bg-white/5 block px-4 py-3 rounded-xl text-lg font-medium transition-colors" onClick={() => setIsOpen(false)}>For Brands</Link>
                        <Link href="/#creators" className="text-gray-300 hover:text-white hover:bg-white/5 block px-4 py-3 rounded-xl text-lg font-medium transition-colors" onClick={() => setIsOpen(false)}>For Creators</Link>

                        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-4" />

                        <Link href="/dashboard/brand" className="text-cyan-400 hover:text-white hover:bg-cyan-500/10 block px-4 py-3 rounded-xl text-lg font-medium transition-colors" onClick={() => setIsOpen(false)}>Brand Console</Link>
                        <Link href="/dashboard/creator" className="text-emerald-400 hover:text-white hover:bg-emerald-500/10 block px-4 py-3 rounded-xl text-lg font-medium transition-colors" onClick={() => setIsOpen(false)}>Creator Hub</Link>

                        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-4" />

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <Link
                                href="/login"
                                className="text-center text-gray-300 hover:text-white border border-white/10 block px-4 py-3 rounded-xl text-base font-medium transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Login
                            </Link>
                            <Link
                                href="/signup"
                                className="text-center text-white bg-gradient-to-r from-indigo-600 to-cyan-600 block px-4 py-3 rounded-xl text-base font-medium shadow-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
