import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1];

export default function Header() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
            className="relative z-10 flex justify-between items-center px-4 sm:px-6 lg:px-10 py-6"
        >
            <div className="flex items-center font-bold text-base sm:text-lg text-white">
                <img src="./logo.png" alt="logo" className="w-16" />
                <span className="ml-2">HUMGENCE</span>
            </div>
            <div className="text-2xl cursor-pointer text-white">☰</div>
        </motion.header>
    )
}