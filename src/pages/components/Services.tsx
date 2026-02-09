"use client";

import { motion } from "framer-motion";

export default function Services() {
    const fUp = {
        off: { opacity: 0, y: 50 },
        on: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const fRight = {
        off: { opacity: 0, x: 80 },
        on: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const view = { once: false, amount: 0.2 };
    return (
        <section className="bg-[#56c0db] py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-16 lg:gap-24">

                {/* Sidebar Title */}
                <motion.div
                    initial="off" whileInView="on" viewport={view} variants={fRight}
                    className="lg:w-48 flex justify-center lg:justify-end"
                >
                    <h2 className="text-8xl md:text-[10rem] font-black text-white lg:[writing-mode:vertical-lr] tracking-tighter uppercase leading-none sticky top-32 select-none pointer-events-none">
                        Services
                    </h2>
                </motion.div>

                {/* Content Area */}
                <div className="flex-1 space-y-24">

                    {/* Section 01: Digital Strategy */}
                    <motion.div initial="off" whileInView="on" viewport={view} variants={fUp}>
                        <div className="flex items-center gap-4 mb-12">
                            <span className="h-px w-12 bg-black/20"></span>
                            <h3 className="text-sm font-bold tracking-[0.3em] text-black/60 uppercase">Digital Strategy</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { title: "Growth Engine", desc: "Social Media & Reputation Management built for engagement.", img: "./banner.jpg" },
                                { title: "Core Marketing", desc: "High-ROI PPC and SEO designed for measurable lead generation.", img: "./banner.jpg" }
                            ].map((item, i) => (
                                <div key={i} className="group relative bg-white/10 backdrop-blur-sm p-2 rounded-[2rem] border border-white/20 hover:bg-white/20 transition-all duration-500">
                                    <div className="aspect-[16/10] rounded-[1.6rem] mb-6 overflow-hidden shadow-2xl">
                                        <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={item.title} />
                                    </div>
                                    <div className="px-6 pb-8">
                                        <h4 className="text-2xl font-bold text-white uppercase tracking-tight">{item.title}</h4>
                                        <p className="text-white/70 mt-3 leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Section 02: Identity & Dev */}
                    <motion.div initial="off" whileInView="on" viewport={view} variants={fUp} className="pt-20 border-t border-white/20 grid grid-cols-1 md:grid-cols-2 gap-16">

                        {/* Brand Identity Card */}
                        <div className="flex flex-col justify-between p-8 rounded-3xl bg-black/5 hover:bg-black/10 transition-colors">
                            <div>
                                <h4 className="text-3xl font-black uppercase text-white mb-4">Brand Identity</h4>
                                <p className="text-lg text-white/70 leading-relaxed">Turning vision into market presence through positioning and activation.</p>
                            </div>
                            <div className="mt-8">
                                <button className="text-white font-bold text-xs uppercase tracking-widest border-b-2 border-white/40 pb-1 hover:border-white transition-all">Learn More</button>
                            </div>
                        </div>

                        {/* Development Card */}
                        <div className="flex flex-col justify-between p-8 rounded-3xl bg-black/5 hover:bg-black/10 transition-colors">
                            <div>
                                <h4 className="text-3xl font-black uppercase text-white mb-4">Development</h4>
                                <p className="text-lg text-white/70 mb-8 leading-relaxed">Scalable, secure, and high-performance digital platforms.</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["Custom Web", "Mobile Apps", "E-Commerce"].map(s => (
                                    <span key={s} className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-[10px] text-white font-bold uppercase tracking-widest border border-white/10">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}