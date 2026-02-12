"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    const view = { once: false, amount: 0.2 };
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
                        We are <br /> Humgence<br />
                    </h2>
                    <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.9] uppercase tracking-tighter">
                        We build <br /> Brands<br />
                    </h2>
                </motion.div>

                <motion.div initial="off" whileInView="on" viewport={view} variants={fRight} className="space-y-10">
                    <div>
                        <h3 className="font-white font-bold text-4xl uppercase mb-4">Who We Are?</h3>
                        <p className="font-bold text-white leading-tight">
                            We’re more than a digital company, we’re your growth partners. From digital marketing and branding to websites, apps, SEO and software solutions, we help brands stand out and scale with performance-driven strategies. Backed by 10+ years of experience and 50+ successful projects.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <p className="text-lg text-white/80 leading-relaxed">
                            With over <span className="text-white font-black">10 years of experience</span> and <span className="text-white font-black">50+ clients</span>, we focus on measurable growth.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}