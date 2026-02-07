"use client";

import { motion } from "framer-motion";

export default function Services() {
    const scrollConfig = { once: false, amount: 0.2 };

    const services = [
        {
            title: "Social Media Management",
            description: "We turn your social media into a powerful growth engine—building engagement and cultivating loyal communities.",
            tags: ["Strategy", "Content", "Community"],
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        },
        {
            title: "Core Digital Marketing",
            description: "Driving sustainable organic growth through advanced SEO and high-performance PPC campaigns across Google & Meta.",
            tags: ["SEO", "PPC", "B2B Leads"],
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
        },
        {
            title: "Brand Consulting",
            description: "Turning vision into meaningful market presence with distinctive visual identity and clear messaging strategy.",
            tags: ["Positioning", "Identity", "Messaging"],
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
        },
        {
            title: "Web & Mobile Dev",
            description: "High-performance digital platforms that are secure, scalable, and designed to convert across all devices.",
            tags: ["Custom Web", "Native Apps", "E-Comm"],
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        },
        {
            title: "Software Solutions",
            description: "Custom ERP, CRM, and WhatsApp API integrations that streamline operations and solve business challenges.",
            tags: ["Enterprise", "API", "Reliability"],
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
        }
    ];

    return (
        <section className="bg-gradient-to-b from-[#111] to-[#000] py-32 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">

                {/* --- SECTION HEADER --- */}
                <div className="overflow-hidden mb-24">
                    <motion.p
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        viewport={scrollConfig}
                        transition={{ duration: 0.6 }}
                        className="text-[#56c0db] font-bold tracking-[0.3em] uppercase text-xs mb-4"
                    >
                        Digital Architecture
                    </motion.p>
                    <motion.h2
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        viewport={scrollConfig}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black text-white tracking-tight leading-none uppercase"
                    >
                        Powering <span className="text-slate-500">Growth.</span>
                    </motion.h2>
                </div>

                {/* --- SERVICES LIST --- */}
                <div className="flex flex-col">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={scrollConfig}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group relative border-t border-white/10 py-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8 hover:bg-white/[0.02] transition-colors"
                        >
                            <div className="flex items-center gap-8 lg:w-1/2">
                                <span className="text-white/20 font-mono text-2xl">0{index + 1}</span>
                                <div className="text-[#56c0db] opacity-50 group-hover:opacity-100 transition-opacity">
                                    {service.icon}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white uppercase group-hover:translate-x-4 transition-transform duration-500">
                                    {service.title}
                                </h3>
                            </div>

                            <div className="lg:w-1/3">
                                <p className="text-slate-400 text-lg font-light leading-relaxed mb-4">
                                    {service.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map(tag => (
                                        <span key={tag} className="text-[10px] text-white/40 border border-white/10 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Hover Image Reveal (Optional concept) */}
                            <div className="hidden lg:block absolute right-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-10 group-hover:translate-x-0">
                                <svg className="w-12 h-12 text-[#56c0db]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </div>
                        </motion.div>
                    ))}

                    {/* Bottom Border for the last item */}
                    <div className="border-t border-white/10 w-full" />
                </div>

                {/* --- BIG CTA BLOCK --- */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={scrollConfig}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="mt-32 p-1 bg-[#56c0db] rounded-3xl overflow-hidden"
                >
                    <div className="bg-black p-12 md:p-20 rounded-[calc(1.5rem-1px)] flex flex-col md:flex-row items-center justify-between">
                        <h4 className="text-4xl md:text-6xl font-black text-white uppercase mb-8 md:mb-0">
                            Let's build <br /> <span className="text-[#56c0db]">Something Big.</span>
                        </h4>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-white text-black px-12 py-6 rounded-full font-black uppercase tracking-widest text-sm"
                        >
                            Start Project
                        </motion.button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}