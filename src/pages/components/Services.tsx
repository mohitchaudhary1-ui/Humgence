"use client";

import { motion } from "framer-motion";

export default function HomeServices() {
    const featuredServices = [
        {
            title: "Social Media Marketing",
            desc: "Maximum engagement through Instagram, Facebook, and LinkedIn strategy.",
            details: ["Reel & Post Concepts", "Community Handling", "Performance Insights"],
            path: "/services/social-media"
        },
        {
            title: "Brand Consulting",
            desc: "Architecting your identity, market fit, and long-term growth roadmap.",
            details: ["Identity & Positioning", "Audience Research", "Visual Direction"],
            path: "/services/branding"
        },
        {
            title: "Website Development",
            desc: "Responsive, high-speed, and SEO-ready digital platforms.",
            details: ["UI/UX Focused", "Easy Backend", "Custom Landing Pages"],
            path: "/services/web-dev"
        },
        {
            title: "AI Automations",
            desc: "Smart workflow and chatbot systems to reduce manual work.",
            details: ["Workflow Automation", "Lead Handling", "Custom AI Solutions"],
            path: "/services/ai"
        }
    ];

    return (
        <section className="bg-[#020617] py-24 px-6 sm:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">

                {/* --- HEADER --- */}
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-10 font-bold">
                    <div className="max-w-2xl">
                        <h2 className="text-[#56c0db] text-[10px] font-black uppercase tracking-[0.5em] mb-4">Featured Expertise</h2>
                        <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
                            Our Core <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20 text-slate-500">Services.</span>
                        </h3>
                    </div>
                </div>

                {/* --- SERVICES GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
                    {featuredServices.map((service, i) => (
                        <a
                            key={i}
                            href={service.path}
                            className="group relative h-[400px] rounded-[2.5rem] bg-slate-900/40 border border-white/5 overflow-hidden flex flex-col p-8 transition-all duration-500 hover:border-[#56c0db]/40"
                        >
                            {/* Static View - Will hide on hover */}
                            <div className="relative z-10 h-full flex flex-col transition-opacity duration-300 group-hover:opacity-0">
                                <div className="mb-8">
                                    <div className="w-10 h-[2px] bg-[#56c0db] group-hover:w-full transition-all duration-700" />
                                </div>
                                <h4 className="text-2xl font-bold text-white uppercase tracking-tight mb-4 leading-tight">
                                    {service.title}
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed font-bold">
                                    {service.desc}
                                </p>
                            </div>

                            {/* Hover "Detail" Panel - Slides up */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#56c0db] to-[#3a8da1] translate-y-full group-hover:translate-y-0 transition-transform duration-600 ease-[0.16,1,0.3,1] p-8 flex flex-col justify-center">
                                <h4 className="text-[#020617] text-xs font-black uppercase tracking-[0.2em] mb-6 border-b border-black/10 pb-2">What we do:</h4>
                                <ul className="space-y-4">
                                    {service.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-[#020617] font-bold text-[14px]">
                                            <div className="mt-1.5 w-1.5 h-1.5 bg-[#020617] rounded-full shrink-0" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </a>
                    ))}
                </div>

                {/* --- SHOW MORE BUTTON --- */}
                <div className="flex justify-center">
                    <motion.a
                        href="/services"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-12 py-5 rounded-full overflow-hidden bg-white/5 border border-white/10 flex items-center gap-4 transition-all hover:bg-white/10"
                    >
                        <span className="text-white text-xs font-black uppercase tracking-[0.3em]">Explore All Services</span>
                        <div className="w-8 h-8 rounded-full bg-[#56c0db] flex items-center justify-center group-hover:translate-x-2 transition-transform">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3">
                                <path d="M5 12h14m-7-7l7 7-7 7" />
                            </svg>
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}