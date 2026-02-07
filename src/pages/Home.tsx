"use client";

import { motion } from "framer-motion";
import Header from "./components/Header";

// --- Reusable Animation Variants ---
const fUp = {
    off: { opacity: 0, y: 50 },
    on: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fLeft = {
    off: { opacity: 0, x: -80 },
    on: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fRight = {
    off: { opacity: 0, x: 80 },
    on: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const view = { once: false, amount: 0.2 };

/* ==========================================================
    HEADER & LOADER 
   ========================================================== */


/* ==========================================================
    MAIN PAGE
   ========================================================== */
export default function HumgenceHome() {
    return (
        <main className="bg-black text-white overflow-x-hidden">
            <Header />

            {/* --- 1. BANNER SECTION --- */}
            <section className="relative h-screen w-full flex items-center overflow-hidden">
                <img src="./banner.jpg" className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105 animate-slow-zoom" alt="Hero" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
                <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
                    <motion.div initial="off" animate="on" variants={fUp}>
                        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
                            Beyond <br /> <span className="text-[#56c0db]">Boundaries.</span>
                        </h1>
                        <p className="text-lg md:text-xl max-w-xl font-light text-white/70 uppercase tracking-[0.2em]">
                            Global Creative Agency Driving Digital Revolution.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- 2. ABOUT SECTION --- */}
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

            {/* --- 3. WORK SECTION --- */}
            <section className="bg-black py-32 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
                    <motion.div initial="off" whileInView="on" viewport={view} variants={fLeft} className="lg:w-32">
                        <h2 className="text-7xl md:text-9xl font-black text-[#56c0db] lg:[writing-mode:vertical-lr] lg:rotate-180 uppercase tracking-tighter leading-none">
                            Work
                        </h2>
                    </motion.div>

                    <div className="flex-1">
                        <motion.div initial="off" whileInView="on" viewport={view} variants={fUp} className="mb-20 max-w-3xl">
                            <h3 className="text-[#56c0db] font-bold tracking-[0.3em] uppercase text-sm mb-6">Strategic Leadership</h3>
                            <p className="text-2xl md:text-4xl font-black uppercase leading-tight mb-8">
                                Founded by <span className="text-white">Mohit Chaudhary</span>, driving global innovation with a team that has collaborated with <span className="text-[#56c0db]">KPMG, PwC, and SAP.</span>
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div initial="off" whileInView="on" viewport={view} variants={fUp} className="md:col-span-2 group relative h-[500px] overflow-hidden rounded-2xl">
                                <img src="./banner.jpg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt="Work" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 p-10 flex flex-col justify-end">
                                    <h3 className="text-4xl font-black uppercase">Enterprise Solutions</h3>
                                </div>
                            </motion.div>
                            <motion.div initial="off" whileInView="on" viewport={view} variants={fUp} className="h-[350px] overflow-hidden rounded-2xl relative group">
                                <img src="./banner.jpg" className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700" alt="Work" />
                                <div className="absolute inset-0 p-6 flex items-end">
                                    <h4 className="text-xl font-black uppercase text-white">Govt Initiatives</h4>
                                </div>
                            </motion.div>
                            <motion.div initial="off" whileInView="on" viewport={view} variants={fUp} className="h-[350px] overflow-hidden rounded-2xl relative group">
                                <img src="./banner.jpg" className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700" alt="Work" />
                                <div className="absolute inset-0 p-6 flex items-end">
                                    <h4 className="text-xl font-black uppercase text-white">Tech Transformation</h4>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 4. SERVICES SECTION --- */}
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

            {/* --- 5. FOOTER --- */}
            <footer className="bg-black py-20 px-6 text-center border-t border-white/5">
                <motion.div initial="off" whileInView="on" viewport={view} variants={fUp}>
                    <img src="./logo.png" className="w-12 mx-auto mb-8 grayscale opacity-40" alt="Footer" />
                    <h2 className="text-3xl md:text-5xl font-black uppercase mb-10 tracking-tighter">Ready to <span className="text-[#56c0db]">Elevate?</span></h2>
                    <p className="text-white/20 text-[10px] font-bold tracking-[0.5em] uppercase">© 2026 Humgence. Boundless Creativity.</p>
                </motion.div>
            </footer>

            <style jsx global>{`
        @keyframes slow-zoom { 0% { transform: scale(1); } 100% { transform: scale(1.15); } }
        .animate-slow-zoom { animation: slow-zoom 30s infinite alternate ease-in-out; }
      `}</style>
        </main>
    );
}   