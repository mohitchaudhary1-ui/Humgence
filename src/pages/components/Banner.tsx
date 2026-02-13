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
                </motion.div>
            </div>
        </section>
    );
}