import { motion } from "framer-motion";

const fUp = {
    off: { opacity: 0, y: 50 },
    on: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function About() {
    return (
        <section className="bg-[#0a0f1a] text-white py-24 lg:py-40 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* --- Hero Intro Section --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
                    <motion.div
                        initial="off" whileInView="on" viewport={{ once: true }} variants={fUp}
                        className="lg:col-span-8"
                    >
                        <h4 className="text-[#56c0db] font-black uppercase tracking-[0.4em] text-xs mb-8">Who We Are</h4>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] uppercase">
                            Your Strategic Partner in the <span className="text-white/20 outline-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}>Digital Realm</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}
                        className="lg:col-span-4 flex items-end"
                    >
                        <p className="text-white/60 text-lg leading-relaxed border-l border-[#56c0db] pl-6">
                            Full-service digital company specializing in marketing, branding, and custom technology solutions.
                        </p>
                    </motion.div>
                </div>

                {/* --- Stats / Impact Section --- */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-40 py-16 border-y border-white/10">
                    {[
                        { label: "Years Journey", val: "10+" },
                        { label: "Clients Served", val: "100+" },
                        { label: "Industries", val: "15+" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i} initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: i * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-5xl md:text-7xl font-black text-[#56c0db]">{stat.val}</div>
                            <div className="uppercase tracking-widest text-[10px] mt-2 text-white/40 font-bold">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* --- Leadership Section --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] bg-gradient-to-br from-[#56c0db]/20 to-transparent rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                            {/* Replace with actual image */}
                            <div className="w-full h-full bg-white/5 flex items-center justify-center text-white/10 text-8xl font-black">
                                <img src="./mohit_chaudhary.jpg" alt="" />
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-[#56c0db] p-8 rounded-2xl hidden md:block">
                            <p className="text-black font-black uppercase text-sm tracking-tighter italic">"Passion for Innovation"</p>
                        </div>
                    </motion.div>

                    <motion.div initial="off" whileInView="on" viewport={{ once: true }} variants={fUp}>
                        <h3 className="text-[#56c0db] font-black uppercase tracking-[0.4em] text-xs mb-4">Leadership</h3>
                        <h2 className="text-5xl font-black uppercase mb-8 text-white">Mohit Chaudhary</h2>
                        <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                            <p>
                                As an <span className="text-white font-bold">ex-Accenture professional</span>, Mohit brings a strategic mindset
                                to every client engagement, with a proven track record from startups to large-scale government initiatives.
                            </p>
                            <p>
                                Throughout his career, Mohit has collaborated with leading global organizations, including
                                <span className="text-[#56c0db]"> KPMG, PwC, SAP, Labs, and the Trident Group</span>.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* --- Approach Section --- */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}
                    className="bg-[#56c0db] rounded-[3rem] p-8 md:p-20 text-black overflow-hidden relative"
                >
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight">Tailored Solutions, <br />Measurable Results</h2>
                        </div>
                        <div className="space-y-6">
                            <p className="text-xl font-medium opacity-80">
                                We believe in building long-term partnerships by taking the time to understand your unique goals.
                            </p>
                            <p className="text-lg opacity-70">
                                Our comprehensive suite of services ensures that all your digital needs are met under one roof, providing a cohesive and powerful approach to your brand's growth.
                            </p>
                            <button className="mt-4 px-8 py-4 bg-black text-white rounded-full font-black uppercase text-xs tracking-[0.2em] hover:scale-105 transition-transform">
                                Let's Build Together
                            </button>
                        </div>
                    </div>
                    {/* Abstract background shape */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                </motion.div>

            </div>
        </section>
    );
}