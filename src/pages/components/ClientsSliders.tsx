"use client";
import { motion } from "framer-motion";

// This array now contains all your unique logos from the public/clients folder
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


// Double the array to create a seamless loop
const sliderItems = [...clients, ...clients];

export default function IndustryGiants() {
    return (
        <section className="py-24 bg-[#f1f5f9] overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-[#55c0dc] font-bold tracking-[0.2em] text-xs uppercase">
                        Our Trusted Clients
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-800 mt-3 mb-4">
                        Working with the <span className="text-[#55c0dc]">Industry Giants</span>
                    </h2>
                    <div className="w-24 h-1 bg-[#55c0dc] mx-auto rounded-full" />
                </motion.div>
            </div>

            <div className="relative flex">
                {/* Gradient Fades for visual polish */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f1f5f9] to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#f1f5f9] to-transparent z-10" />

                <motion.div
                    className="flex gap-8"
                    animate={{ x: ["0%", "-50%"] }} // Slides through exactly one full set of the 58 logos
                    transition={{
                        repeat: Infinity,
                        duration: 120, // Slower duration (60s) because there are 58 items now
                        ease: "linear",
                    }}
                >
                    {sliderItems.map((client, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 group flex flex-col items-center gap-4"
                        >
                            <div className="w-40 h-24 md:w-52 md:h-32 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center p-6 transition-all duration-300 group-hover:shadow-xl group-hover:border-[#55c0dc]/30 group-hover:-translate-y-1">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="w-full h-full object-contain filter transition-all duration-500"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://via.placeholder.com/200x100?text=Logo";
                                    }}
                                />
                            </div>
                            <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[9px] group-hover:text-[#55c0dc] transition-colors">
                                {client.name}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}