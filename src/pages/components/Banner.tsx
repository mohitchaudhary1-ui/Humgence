import { motion } from "motion/react";

export default function Banner() {
    const fUp = {
        off: { opacity: 0, y: 50 },
        on: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="relative h-screen w-full flex items-center overflow-hidden">
            <img src="./banner.jpg" className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105 animate-slow-zoom" alt="Hero" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
            <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
                <motion.div initial="off" animate="on" variants={fUp}>
                    <h1 className="text-3xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
                        Beyond <br /> <span className="text-[#56c0db]">Boundaries.</span>
                    </h1>
                    <p className="text-lg md:text-xl max-w-xl font-light text-white/70 uppercase tracking-[0.2em]">
                        Global Creative Agency Driving Digital Revolution.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-3 mt-8 px-10 py-4 rounded-full bg-[#56c0db] text-black font-black text-xs uppercase tracking-[0.3em] hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-[#56c0db]/30"
                    >
                        Get In Touch
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M5 12h14m-7-7l7 7-7 7" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}