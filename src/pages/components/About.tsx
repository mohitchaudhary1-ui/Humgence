"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    const view = { once: true, amount: 0.2 };
    const fLeft = {
        off: { opacity: 0, x: -50 },
        on: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };
    const fRight = {
        off: { opacity: 0, x: 50 },
        on: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };
    return (
        <section className="bg-[#56c0db] py-32 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <motion.div initial="off" whileInView="on" viewport={view} variants={fLeft}>
                    <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.9] uppercase tracking-tighter">
                        Our Brand <br /> Vision. <br />
                        <span className="text-black/10 italic text-4xl md:text-6xl">Authentic Growth.</span>
                    </h2>
                    <p className="mt-8 text-lg md:text-xl font-medium text-white/90 max-w-md leading-relaxed">
                        To lead digital transformation by empowering brands to build authentic connections and sustainable growth.
                    </p>
                </motion.div>

                <motion.div initial="off" whileInView="on" viewport={view} variants={fRight} className="space-y-10">
                    <div>
                        <h3 className="text-xs font-black uppercase tracking-[0.4em] text-black/40 mb-4">Who We Are?</h3>
                        <p className="text-xl md:text-3xl font-bold text-white leading-tight">
                            We are a full-service digital company delivering high-impact marketing and custom tech solutions.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <p className="text-lg text-white/80 leading-relaxed">
                            With over <span className="text-white font-black">10 years of experience</span> and <span className="text-white font-black">100+ clients</span>, we focus on measurable growth.
                        </p>
                        <button className="group flex items-center gap-4 border-2 border-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-[#56c0db] transition-all">
                            Our Story <span className="group-hover:translate-x-2 transition-transform">→</span>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}