"use client";

import { motion } from "framer-motion";

export default function Work() {
    // Reusable config: once: false ensures it triggers EVERY time you scroll.
    // amount: 0.1 means it starts the "big" animation as soon as the section peaks in.
    const scrollConfig = { once: false, amount: 0.1 };

    const bigFadeInUp = {
        hidden: { opacity: 0, y: 150, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } // Custom "expo" ease for smooth landing
        }
    };

    const clients = [
        { name: "KPMG", logo: "/kpmg.svg" },
        { name: "PwC", logo: "/kpmg.svg" },
        { name: "SAP", logo: "/kpmg.svg" },
        { name: "SAP Labs", logo: "/kpmg.svg" },
        { name: "Trident Group", logo: "/kpmg.svg" },
    ];

    return (
        <section className="bg-slate-50 py-24 lg:py-40 px-6 md:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* --- HEADER SECTION --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32">
                    <motion.div
                        className="lg:col-span-7"
                        initial={{ opacity: 0, x: -200, scale: 0.5 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={scrollConfig}
                        transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
                    >
                        <span className="text-[#56c0db] font-bold tracking-[0.5em] uppercase text-sm block mb-4">Our Impact</span>
                        <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                            GLOBAL REACH. <br />
                            <span className="text-slate-300">PROVEN RESULTS.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        className="lg:col-span-5 flex items-end"
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={scrollConfig}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <p className="text-slate-500 text-2xl leading-relaxed border-l-[12px] border-[#56c0db] pl-8 font-light italic">
                            "We don't just build software; we engineer digital legacies for the world's most iconic brands."
                        </p>
                    </motion.div>
                </div>

                {/* --- CLIENT LOGO GRID --- */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={scrollConfig}
                    variants={{
                        hidden: { opacity: 0, rotateX: 20, y: 100 },
                        visible: {
                            opacity: 1,
                            rotateX: 0,
                            y: 0,
                            transition: {
                                staggerChildren: 0.15,
                                duration: 0.8,
                                when: "beforeChildren"
                            }
                        }
                    }}
                    style={{ perspective: 1000 }} // Gives the 3D tilt effect
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-slate-200 border border-slate-200 overflow-hidden rounded-[2rem] shadow-2xl"
                >
                    {clients.map((client) => (
                        <motion.div
                            key={client.name}
                            variants={{
                                hidden: { opacity: 0, y: 50, scale: 0.7 },
                                visible: { opacity: 1, y: 0, scale: 1 }
                            }}
                            className="bg-white p-12 flex items-center justify-center group"
                        >
                            <motion.img
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                src={client.logo}
                                alt={`${client.name} logo`}
                                className="max-h-14 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                            />
                        </motion.div>
                    ))}

                    {/* High-Impact Stat Box */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, scale: 0.5 },
                            visible: { opacity: 1, scale: 1 }
                        }}
                        className="bg-slate-900 p-12 flex flex-col items-center justify-center text-center"
                    >
                        <motion.p
                            className="text-5xl font-black text-[#56c0db]"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                        >
                            100+
                        </motion.p>
                        <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/50 mt-2">Global Partners</p>
                    </motion.div>
                </motion.div>

                {/* --- STRATEGIC HIGHLIGHT --- */}
                <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-16">
                    <motion.div
                        variants={bigFadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={scrollConfig}
                        className="p-16 bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-[3rem] border-b-8 border-[#56c0db]"
                    >
                        <h4 className="font-black text-3xl mb-6 text-slate-900 tracking-tight">Government Initiatives</h4>
                        <p className="text-slate-600 text-xl font-light leading-relaxed">
                            Deploying enterprise-grade infrastructure for national systems.
                            Where security meets massive scalability.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={bigFadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={scrollConfig}
                        transition={{ delay: 0.3 }}
                        className="p-16 bg-slate-900 text-white shadow-2xl rounded-[3rem] border-b-8 border-white"
                    >
                        <h4 className="font-black text-3xl mb-6 tracking-tight">Corporate Strategy</h4>
                        <p className="text-white/70 text-xl font-light leading-relaxed">
                            Elite consulting for the Fortune 500. We translate complex data into
                            aggressive market growth.
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}