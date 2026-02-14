"use client";
import React from "react";
import { motion } from "framer-motion";
const partners = [
    {
        name: "Google",
        logo: "https://www.vectorlogo.zone/logos/google/google-ar21.svg",
        desc: "Strategic Partner for Cloud Infrastructure & AI Integration.",
        color: "#4285F4"
    },
    {
        name: "Meta",
        logo: "https://www.vectorlogo.zone/logos/facebook/facebook-ar21.svg",
        desc: "Expertise in Social Integration & Advanced Ad-Tech Solutions.",
        color: "#0668E1"
    },
    {
        name: "AWS",
        logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg",
        desc: "Certified Consulting for Scalable Serverless Architectures.",
        color: "#FF9900"
    },
    {
        name: "Adobe",
        logo: "https://www.vectorlogo.zone/logos/adobe/adobe-ar21.svg",
        desc: "Solution Partner for Digital Experience & Creative Workflows.",
        color: "#FF0000"
    }
];
export default function Partnerships() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* --- Header --- */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <span className="text-[#56c0db] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
                            Global Ecosystem
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase">
                            Our <span className="text-[#56c0db] italic">Partnerships.</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        className="text-slate-400 text-sm font-medium max-w-xs md:text-right"
                    >
                        Collaborating with the world's leading technology providers to deliver excellence.
                    </motion.p>
                </div>

                {/* --- Partners Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.2,
                                type: "spring",
                                bounce: 0.4
                            }}
                            whileHover={{ y: -15 }}
                            className="relative group shadow-2xl shadow-slate-200/50 rounded-[3rem]"
                        >
                            <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-12 h-full flex flex-col items-center text-center transition-all duration-500 group-hover:bg-white group-hover:border-[#56c0db]/20">

                                {/* Logo Wrapper */}
                                <div className="h-20 w-full flex items-center justify-center mb-8">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-h-full max-w-[180px] object-contain"
                                    />
                                </div>

                                {/* Content */}
                                <h4 className="text-xl font-black text-slate-800 mb-3 uppercase tracking-tight">
                                    {partner.name}
                                </h4>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                    {partner.desc}
                                </p>

                                {/* Aesthetic Tag */}
                                <div
                                    className="mt-auto px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border transition-all duration-500"
                                    style={{
                                        borderColor: 'transparent',
                                        backgroundColor: '#f1f5f9',
                                        color: '#64748b'
                                    }}
                                >
                                    Official Partner
                                </div>
                            </div>

                            {/* Decorative Background Glow on Hover */}
                            <div
                                className="absolute -z-10 inset-0 blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                                style={{ backgroundColor: partner.color }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}