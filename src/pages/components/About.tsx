"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 },
        },
    };

    const fadeInLeft = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const fadeInRight = {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const fadeInUp = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 },
        },
    };

    // Reusable viewport config to trigger every time
    const scrollConfig = { once: false, amount: 0.2 };

    const clients = [
        { name: "KPMG" }, { name: "PwC" }, { name: "SAP" },
        { name: "SAP Labs" }, { name: "Trident Group" }
    ];

    return (
        <div className="bg-[#56c0db] text-white overflow-hidden font-sans">

            {/* SECTION 1: THE DIGITAL AUTHORITY */}
            <section className="py-24 lg:py-40 px-6 lg:px-24">
                <motion.div
                    className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={scrollConfig} // Triggers every time
                >
                    <motion.div variants={fadeInLeft} className="order-2 lg:order-1">
                        <span className="bg-white/20 px-4 py-1 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase inline-block mb-6">
                            Who We Are
                        </span>
                        <h2 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase">
                            The Digital <br /> <span className="text-black">Authority.</span>
                        </h2>
                    </motion.div>

                    <motion.div variants={fadeInRight} className="space-y-8 order-1 lg:order-2">
                        <p className="text-2xl md:text-3xl font-light leading-snug opacity-95">
                            We are a full-service digital company delivering
                            <span className="font-bold"> marketing, consulting, and custom software </span>
                            under one roof.
                        </p>
                        <div className="h-px w-full bg-white/30" />
                        <p className="text-lg opacity-80 max-w-xl font-medium leading-relaxed">
                            With 10+ years of experience and 100+ clients, we focus on high-impact growth.
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            {/* SECTION 2: LEADERSHIP */}
            <section className="py-24 text-black bg-white backdrop-blur-sm relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                        {/* Image from Left */}
                        <motion.div
                            className="lg:col-span-5 relative group"
                            initial={{ opacity: 0, x: -150 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={scrollConfig}
                            transition={{ duration: 1, ease: "backOut" }}
                        >
                            <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl bg-slate-800">
                                <img
                                    src="/mohit_chaudhary.jpg"
                                    alt="Mohit Chaudhary"
                                    className="w-full aspect-[4/5] object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Content from Right */}
                        <motion.div
                            className="lg:col-span-7"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={scrollConfig}
                        >
                            <motion.div variants={fadeInRight}>
                                <span className="text-black font-bold tracking-widest text-xs uppercase bg-white/30 px-3 py-1 rounded">Founding Vision</span>
                                <h3 className="text-4xl md:text-6xl font-black mt-6 mb-8 tracking-tight">Mohit Chaudhary</h3>
                            </motion.div>

                            <motion.div variants={fadeInRight} className="space-y-6 text-xl font-light opacity-90 leading-relaxed">
                                <p>A former <span className="bg-white text-[#56c0db] px-2 py-0.5 font-bold italic rounded">Accenture Professional</span> bringing global strategy to you.</p>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="mt-12 flex flex-wrap gap-x-8 gap-y-4 opacity-70">
                                {clients.map((c) => (
                                    <span key={c.name} className="font-black text-sm tracking-widest border-b-2 border-white/20 pb-1">
                                        {c.name}
                                    </span>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: PARTNER CARD */}
            {/* <section className="py-24 px-6 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={scrollConfig}
                    transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
                    className="max-w-5xl mx-auto bg-black p-12 md:p-24 rounded-[4rem] text-center space-y-10 shadow-2xl relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <h4 className="text-[#56c0db] font-bold tracking-[0.4em] uppercase text-xs mb-4">Our Approach</h4>
                        <h3 className="text-4xl md:text-7xl font-black leading-[1.1] mb-8">
                            NOT JUST A VENDOR. <br />
                            <span className="text-[#56c0db]">YOUR STRATEGIC PARTNER.</span>
                        </h3>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="px-12 py-5 bg-[#56c0db] text-black font-black uppercase tracking-widest text-sm rounded-full"
                        >
                            Let's Talk Growth
                        </motion.button>
                    </div>
                </motion.div>
            </section> */}
        </div>
    );
}