"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Testimonials from "./components/Testimonials";

const clients = [
    { name: "Alpha power", logo: "/clients/alpha.jpg" },
    { name: "Amar punjabi", logo: "/clients/amar.jpg" },
    { name: "Ambrosia Grand", logo: "/clients/ambrosia.jpg" },
    { name: "Arrow", logo: "/clients/arrow.jpg" },
    { name: "Best Western Plus", logo: "/clients/best.jpg" },
    { name: "Blaze", logo: "/clients/blaze.jpg" },
    { name: "BNI", logo: "/clients/bni.jpg" },
    { name: "Brew sage", logo: "/clients/brew.jpg" },
    { name: "Burger company", logo: "/clients/burger.jpg" },
    { name: "Club house", logo: "/clients/club.jpg" },
    { name: "DK", logo: "/clients/dk.jpg" },
    { name: "DM", logo: "/clients/dm.jpg" },
    { name: "DPS store", logo: "/clients/dps.jpg" },
    { name: "DT", logo: "/clients/dt.jpg" },
    { name: "Elanora", logo: "/clients/elanora.jpg" },
    { name: "General estates", logo: "/clients/general.jpg" },
    { name: "Glued playground", logo: "/clients/glued.jpg" },
    { name: "Gourmet", logo: "/clients/gourmet.jpg" },
    { name: "Grand heritage", logo: "/clients/grand.jpg" },
    { name: "Grey group", logo: "/clients/grey.jpg" },
    { name: "HK", logo: "/clients/hk.jpg" },
    { name: "Imperial golf estate", logo: "/clients/imperial.jpg" },
    { name: "Kanika gosain", logo: "/clients/kanika.jpg" },
    { name: "Kashmir gardens", logo: "/clients/kashmir.jpg" },
    { name: "KB infra", logo: "/clients/kb.jpg" },
    { name: "KK hospital", logo: "/clients/kk.jpg" },
    { name: "Lakehouse", logo: "/clients/lakehouse.jpg" },
    { name: "Lakme salone", logo: "/clients/lakme.jpg" },
    { name: "Lifecare", logo: "/clients/lifecare.jpg" },
    { name: "Lumen", logo: "/clients/lumen.jpg" },
    { name: "Malhotra", logo: "/clients/maljotra.jpg" },
    { name: "Modern colors", logo: "/clients/mdern.jpg" },
    { name: "Mehak dhand", logo: "/clients/mehak.jpg" },
    { name: "Miamo", logo: "/clients/miami.jpg" },
    { name: "Mindful foods", logo: "/clients/mindful.jpg" },
    { name: "Moti mahal delux", logo: "/clients/moti.jpg" },
    { name: "MPRO realtors", logo: "/clients/mpro.jpg" },
    { name: "M Square", logo: "/clients/msquare.jpg" },
    { name: "Nanda fruits", logo: "/clients/nanda.jpg" },
    { name: "Nirvana", logo: "/clients/nirwana.jpg" },
    { name: "Papa Joe's pizza", logo: "/clients/papa jow.jpg" },
    { name: "Punfun", logo: "/clients/punfun.jpg" },
    { name: "Punjoy", logo: "/clients/punjoy.jpg" },
    { name: "Rzekka resorts", logo: "/clients/rzeka.jpg" },
    { name: "Sharman jain sweets", logo: "/clients/sharman.jpg" },
    { name: "Singla slimming clinic", logo: "/clients/singla.jpg" },
    { name: "Skinrise", logo: "/clients/skinrise.jpg" },
    { name: "Technocare", logo: "/clients/techno.jpg" },
    { name: "the terrace", logo: "/clients/terace.jpg" },
    { name: "Terra firma realty", logo: "/clients/terra.jpg" },
    { name: "Thukral fabrics", logo: "/clients/thukral.jpg" },
    { name: "Vidya wings", logo: "/clients/vidya.jpg" },
    { name: "Vision solutions", logo: "/clients/vision.jpg" },
    { name: "Vybe", logo: "/clients/vybe.jpg" },
    { name: "the Welkin Heights", logo: "/clients/welkin heights.jpg" },
    { name: "the Wilton", logo: "/clients/wilton.jpg" },
    { name: "Zapp", logo: "/clients/zapp.jpg" },
    { name: "Sangh", logo: "/clients/sangh.jpeg" },
];

export default function ClientsPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredClients = clients.filter((c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Grid Container Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08, // Time between each card appearing
            }
        }
    };

    return (
        <main className="min-h-screen bg-[#fcfdfe]">
            {/* --- CLIENTS GRID --- */}
            <div className="max-w-7xl mx-auto">
                <Testimonials />
                <motion.div
                    className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 mx-10"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredClients.map((client) => (
                            <motion.div
                                layout
                                key={client.name}
                                whileHover={{
                                    y: -10,
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }}
                                className="group relative"
                            >
                                <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 aspect-square flex flex-col items-center justify-center shadow-sm hover:shadow-2xl hover:border-[#56c0db]/10 transition-all duration-500 relative overflow-hidden mb-5">

                                    {/* Logo Reveal Animation */}
                                    <div className="w-full h-full relative z-10">
                                        <img
                                            src={client.logo}
                                            alt={client.name}
                                            className="w-full h-full object-contain"
                                            onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/200x100?text=Logo"; }}
                                        />
                                    </div>

                                    {/* Background Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#56c0db]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -rotate-45 translate-x-full group-hover:translate-x-[-100%]" />

                                    {/* Name Badge */}
                                    <div className="absolute bottom-6">
                                        <span className="bg-slate-900 text-white text-[9px] font-black uppercase tracking-[0.25em] px-5 py-2 rounded-full shadow-lg">
                                            {client.name}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* --- EMPTY STATE --- */}
                {filteredClients.length === 0 && (
                    <div className="text-center py-32 text-slate-300 font-bold uppercase tracking-widest text-sm">
                        No match found for "{searchTerm}"
                    </div>
                )}
            </div>
        </main>
    );
}