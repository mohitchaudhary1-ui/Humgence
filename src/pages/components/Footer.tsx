import { motion } from "framer-motion";

export default function Footer() {
    const fUp = {
        off: { opacity: 0, y: 50 },
        on: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const view = { once: false, amount: 0.2 };
    return (
        <footer className="bg-black py-20 px-6 text-center border-t border-white/5">
            <motion.div initial="off" whileInView="on" viewport={view} variants={fUp}>
                <img src="./logo.png" className="w-12 mx-auto mb-8 grayscale opacity-40" alt="Footer" />
                <h2 className="text-3xl md:text-5xl font-black uppercase mb-10 tracking-tighter">Ready to <span className="text-[#56c0db]">Elevate?</span></h2>
                <p className="text-white/20 text-[10px] font-bold tracking-[0.5em] uppercase">© 2026 Humgence. Boundless Creativity.</p>
            </motion.div>
        </footer>
    )
}