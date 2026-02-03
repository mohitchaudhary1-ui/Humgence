import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "./components/Header";

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const onLoad = () => setTimeout(() => setLoading(false), 2000);

        if (document.readyState === "complete") onLoad();
        else window.addEventListener("load", onLoad);

        return () => window.removeEventListener("load", onLoad);
    }, []);

    /* ================= PREMIUM MOTION CONFIG ================= */
    const ease = [0.22, 1, 0.36, 1];

    const fadeUp = {
        hidden: { opacity: 0, y: 60, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease } }
    };

    const fadeDown = {
        hidden: { opacity: 0, y: -60 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease } }
    };

    const fadeLeft = {
        hidden: { opacity: 0, x: -80 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, ease } }
    };

    const fadeRight = {
        hidden: { opacity: 0, x: 80 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, ease } }
    };

    const stagger = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2, delayChildren: 0.15 } }
    };

    /* ================= LOADER ================= */
    if (loading) {
        return (
            <div className="fixed inset-0 bg-[#5155a6] flex items-center justify-center z-50">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease }}
                    className="flex items-center"
                >
                    <img src="./logo.png" alt="logo" className="w-20" />
                    <span className="ml-3 text-xl font-bold text-white">HUMGENCE</span>
                </motion.div>
            </div>
        );
    }

    /* ================= PAGE ================= */
    return (
        <div className="text-white w-full overflow-hidden">

            {/* STICKY FULL SCREEN HERO */}
            <section className="sticky top-0 h-screen w-full overflow-hidden z-0">

                {/* BACKGROUND IMAGE */}
                <motion.img
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
                    alt="Banner"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/30" />

                {/* HEADER ON HERO */}
                <Header />

            </section>

            {/* HERO */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 bg-[#5155a6] px-4 sm:px-6 lg:px-10 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* LEFT SIDE – HEADLINE (FROM LEFT) */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} >
                        WE ARE
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.35 }}
                        className="text-center"
                    >
                        HUMGENCE
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6"
                    >
                        WE DO
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.65 }}
                        className="text-center"
                    >
                        BIG THINGS
                    </motion.div>
                </motion.div>

                {/* RIGHT SIDE – CONTENT (FROM RIGHT) */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-xs sm:text-sm max-w-md"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        We solve big problems with strategic and creative ideas that help brands grow.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.55 }}
                        className="mt-4"
                    >
                        We work with brands and agencies to build meaningful experiences.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.75, duration: 0.8, ease }}
                        className="mt-6 border border-white px-6 py-2 text-xs tracking-widest"
                    >
                        CONTACT US
                    </motion.button>
                </motion.div>
            </motion.section>


            {/* WORK */}
            <motion.section
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative px-4 sm:px-6 lg:px-10 py-16 md:py-20"
            >
                <motion.div
                    initial={{ opacity: 0, rotate: 90 }}
                    whileInView={{ opacity: 1, rotate: 90 }}
                    transition={{ duration: 1, ease }}
                    viewport={{ once: true }}
                    className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 text-4xl font-bold tracking-widest text-black"
                >
                    WORK
                </motion.div>

                <motion.div variants={stagger} className="md:ml-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.img variants={fadeUp}
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                        className="w-full h-56 sm:h-64 object-cover"
                    />

                    <div className="grid grid-rows-2 gap-6">
                        <motion.img variants={fadeLeft}
                            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                            className="w-full h-28 object-cover"
                        />
                        <motion.img variants={fadeRight}
                            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
                            className="w-full h-28 object-cover"
                        />
                    </div>

                    <motion.img variants={fadeDown}
                        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                        className="w-full h-28 sm:h-32 sm:col-span-2 object-cover"
                    />
                </motion.div>

                <motion.div variants={fadeRight} className="text-center mt-10">
                    <button className="border border-white px-6 py-2 text-xs">
                        VIEW ALL WORK
                    </button>
                </motion.div>
            </motion.section>

            {/* BIG TEXT */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-[#5155a6] px-4 sm:px-6 lg:px-10 py-16 md:py-20 text-center"
            >
                {/* MAIN TEXT – FROM TOP */}
                <motion.h2
                    initial={{ opacity: 0, y: "-100vh" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold"
                >
                    DO BIG THINGS
                </motion.h2>


                {/* SHADOW TEXT – FROM BOTTOM */}
                <motion.h2
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 0.3, y: 0 }}
                    transition={{ duration: 1, ease, delay: 0.15 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2"
                >
                    DO BIG THINGS
                </motion.h2>
            </motion.section>

            {/* NEWS */}
            <motion.section
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-[#5155a6] relative px-4 sm:px-6 lg:px-10 py-16 md:py-20"
            >
                <motion.div
                    initial={{ opacity: 0, rotate: 90 }}
                    whileInView={{ opacity: 1, rotate: 90 }}
                    transition={{ duration: 1, ease }}
                    viewport={{ once: true }}
                    className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 text-4xl font-bold tracking-widest"
                >
                    NEWS
                </motion.div>

                <motion.div variants={stagger} className="md:mr-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.img variants={fadeUp}
                        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
                        className="w-full h-32 sm:h-40 sm:col-span-2 object-cover"
                    />
                    <motion.img variants={fadeLeft}
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                        className="w-full h-32 sm:h-40 object-cover"
                    />
                    <motion.img variants={fadeRight}
                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                        className="w-full h-32 sm:h-40 object-cover"
                    />
                </motion.div>

                <motion.div variants={fadeUp} className="text-center mt-10">
                    <button className="border border-white px-6 py-2 text-xs">
                        VIEW ALL NEWS
                    </button>
                </motion.div>
            </motion.section>

        </div >
    );
}
