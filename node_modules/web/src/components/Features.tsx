'use client';

import { motion } from 'framer-motion';
import { Activity, ShieldAlert, TrendingUp, Zap } from 'lucide-react';

const features = [
    {
        name: 'Real-time Leverage Detection',
        description: 'The AI listens to tone, pauses, and sentiment to detect when the other party is losing confidence.',
        icon: Activity,
        color: 'text-blue-400',
        bgColor: 'bg-blue-400/10',
        borderColor: 'border-blue-400/20',
    },
    {
        name: 'Live Power Score',
        description: 'A dynamic gauge usually visible only to you. Know exactly who has the upper hand at every second.',
        icon: TrendingUp,
        color: 'text-emerald-400',
        bgColor: 'bg-emerald-400/10',
        borderColor: 'border-emerald-400/20',
    },
    {
        name: 'Weakness Flagging',
        description: 'Get instant alerts when you use weak language like "I think" or "maybe". Correct course immediately.',
        icon: ShieldAlert,
        color: 'text-red-400',
        bgColor: 'bg-red-400/10',
        borderColor: 'border-red-400/20',
    },
    {
        name: 'Instant Rebuttals',
        description: 'Stuck? The AI suggests the exact phrase to say to counter their objection and regain control.',
        icon: Zap,
        color: 'text-yellow-400',
        bgColor: 'bg-yellow-400/10',
        borderColor: 'border-yellow-400/20',
    },
];

export function Features() {
    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Superhuman Negotiation Skills
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        It looks like magic, but it's just advanced audio analysis. The person on the other side won't know hit them.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`relative overflow-hidden rounded-2xl border ${feature.borderColor} bg-white/5 p-8 hover:bg-white/10 transition-colors`}
                        >
                            <div className={`absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full ${feature.bgColor} blur-2xl opacity-50`} />

                            <div className={`mb-4 inline-flex items-center justify-center rounded-lg ${feature.bgColor} p-3`}>
                                <feature.icon className={`h-6 w-6 ${feature.color}`} aria-hidden="true" />
                            </div>

                            <h3 className="mb-2 text-xl font-semibold text-white">
                                {feature.name}
                            </h3>
                            <p className="text-sm leading-6 text-gray-400">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
