'use client';

import { ArrowRight, Download, Mic } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-black text-white py-24 sm:py-32">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto max-w-4xl"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-emerald-400 mb-8 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Live Negotiation Assistant
                    </div>

                    <h1 className="text-5xl font-bold tracking-tight sm:text-7xl mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                        Don't Leave Money <br />
                        <span className="text-emerald-500">On The Table.</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                        The secret edge tool for negotiators. Listens to your calls, detects leverage,
                        and suggests winning responses in real-time.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => alert("Simulated Download: Windows Installer would start here.\n(Requires local build due to network restrictions)")}
                            className="group relative inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-black transition-all hover:bg-emerald-400 hover:scale-105 active:scale-95"
                        >
                            <Download className="w-5 h-5" />
                            Download for Windows
                            <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all" />
                        </button>
                        <button
                            onClick={() => alert("Simulated Download: Mac Installer would start here.\n(Requires local build due to network restrictions)")}
                            className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/20 hover:scale-105 active:scale-95 border border-white/10 backdrop-blur-sm"
                        >
                            <Download className="w-5 h-5" />
                            Download for Mac
                        </button>
                    </div>

                    <p className="mt-4 text-sm text-gray-500">
                        Try it free. No credit card required.
                    </p>
                </motion.div>

                {/* Visual representation of the app */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mt-20 relative mx-auto max-w-5xl rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl p-2 shadow-2xl"
                >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-emerald-500/10 to-transparent pointer-events-none" />
                    <div className="rounded-xl border border-white/5 bg-[#0A0A0A] overflow-hidden aspect-video relative flex items-center justify-center text-gray-800">
                        {/* Simple mockup for now */}
                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none opacity-50">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20" />
                            </div>
                        </div>
                        <div className="text-center space-y-4">
                            <Mic className="w-16 h-16 text-emerald-500/20 mx-auto animate-pulse" />
                            <p className="text-gray-600 font-mono">Listening to Zoom Audio...</p>
                            <div className="flex gap-1 justify-center items-end h-8">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-2 bg-emerald-500/20 rounded-full animate-bounce" style={{ height: 16 + i * 4, animationDelay: `${i * 0.1}s` }} />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
