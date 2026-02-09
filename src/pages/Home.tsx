"use client";

import { motion } from "framer-motion";
import ClientsSliders from "./components/ClientsSliders";
import Banner from "./components/Banner";
import About from "./components/About";
import Work from "./components/Work";
import Services from "./components/Services";

// --- Reusable Animation Variants ---
const fUp = {
    off: { opacity: 0, y: 50 },
    on: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
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
            <Banner />
            <About />
            <ClientsSliders />
            <Work />


            <Services />

            <style jsx global>{`
        @keyframes slow-zoom { 0% { transform: scale(1); } 100% { transform: scale(1.15); } }
        .animate-slow-zoom { animation: slow-zoom 30s infinite alternate ease-in-out; }
      `}</style>
        </main>
    );
}   