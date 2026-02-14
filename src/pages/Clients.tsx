"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

    return (
        <main className="min-h-screen bg-[#fcfdfe] py-20 px-6 md:px-12 lg:px-24">
            {/* --- HEADER --- */}
            <div className="max-w-7xl mx-auto text-center mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-6">
                        OUR <span className="text-[#56c0db]">NETWORK.</span>
                    </h1>
                    <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
                        Powering digital transformation for 58+ industry leaders across the globe.
                    </p>
                </motion.div>

                {/* --- SEARCH BAR --- */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-12 max-w-md mx-auto relative"
                >
                    <input
                        type="text"
                        placeholder="Search for a client..."
                        className="w-full px-6 py-4 rounded-full border border-slate-200 bg-white shadow-sm focus:ring-2 focus:ring-[#56c0db] outline-none transition-all pr-12 text-slate-600"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </motion.div>
            </div>

            {/* --- CLIENTS GRID --- */}
            <div className="max-w-7xl mx-auto">
                <motion.div
                    layout
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredClients.map((client, index) => (
                            <motion.div
                                layout
                                key={client.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: index * 0.02 }}
                                className="group relative"
                            >
                                <div className="bg-white border border-slate-100 rounded-[2rem] p-8 aspect-square flex flex-col items-center justify-center shadow-sm hover:shadow-2xl hover:border-[#56c0db]/20 transition-all duration-500">
                                    <div className="w-full h-full relative">
                                        <img
                                            src={client.logo}
                                            alt={client.name}
                                            className="w-full h-full object-contain filter transition-all duration-700"
                                            onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/200x100?text=Logo"; }}
                                        />
                                    </div>

                                    {/* Name Badge - Appears on Hover */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transition-opacity duration-300">
                                        <span className="bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">
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
                    <div className="text-center py-20 text-slate-400 font-bold uppercase tracking-widest">
                        No clients found matching your search.
                    </div>
                )}
            </div>

            {/* --- STATS FOOTER --- */}
            <div className="max-w-7xl mx-auto mt-32 pt-20 border-t border-slate-100 text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    {[
                        { label: "Total Clients", val: "58+" },
                        { label: "Success Rate", val: "99%" },
                        { label: "Global Reach", val: "12 countries" },
                        { label: "Repeat Business", val: "85%" },
                    ].map((stat, i) => (
                        <div key={i}>
                            <h4 className="text-3xl font-black text-slate-900">{stat.val}</h4>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}