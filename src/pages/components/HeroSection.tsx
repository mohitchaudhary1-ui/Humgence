import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative bg-[#56c0db] px-4 sm:px-6 lg:px-10 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10">

            <motion.div className="text-3xl sm:text-6xl md:text-8xl font-bold leading-tight"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div>WE ARE</div>
                <div className="text-center">HUMGENCE</div>
                <div className="mt-6">WE DO</div>
                <div className="text-center">BIG THINGS</div>
            </motion.div>

            <motion.div className="text-xs sm:text-4xl max-w-md"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}>
                <p>
                    We solve big problems with strategic and creative ideas that help brands grow.
                </p>
                <p className="mt-4">
                    We work with brands and agencies to build meaningful experiences.
                </p>
                <button className="mt-6 border border-white px-6 py-2 text-xs tracking-widest hover:opacity-70">
                    CONTACT US
                </button>
            </motion.div>
        </section>
    );
}