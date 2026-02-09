import { motion } from "framer-motion";

const clients = [
    { name: "EastWood", logo: "./clients/eastwood.webp" },
    { name: "KB Infra", logo: "./clients/kb_infra.webp" },
    { name: "Malhotra", logo: "./clients/malhotra.webp" },
    { name: "The Cambium", logo: "./clients/the_cambium.webp" },
    { name: "The Wilton", logo: "./clients/the_wilton.webp" },
];

export default function ClientSlider() {
    // Triple the array to ensure no gaps on wide desktop screens
    const sliderItems = [...clients, ...clients, ...clients];

    return (
        <section className="py-24 bg-[#f1f5f9] overflow-hidden relative">
            {/* Decorative header */}
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-sky-600 font-bold tracking-[0.2em] text-xs uppercase">
                        Our Trusted Partners
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-800 mt-3 mb-4">
                        Working with the <span className="text-sky-500">Industry Giants</span>
                    </h2>
                    <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full" />
                </motion.div>
            </div>

            {/* Slider Container */}
            <div className="relative">
                {/* Soft edge fades for light mode */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f1f5f9] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#f1f5f9] to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-8"
                    animate={{ x: ["0%", "-33.33%"] }} // Changed to 33% because we tripled the list
                    transition={{
                        repeat: Infinity,
                        duration: 5, // Adjust speed here (higher = slower)
                        ease: "linear",
                    }}
                >
                    {sliderItems.map((client, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 group flex flex-col items-center gap-4"
                        >
                            {/* Logo Card */}
                            <div className="w-48 h-28 md:w-64 md:h-36 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center p-6 transition-all duration-300 group-hover:shadow-xl group-hover:border-sky-200 group-hover:-translate-y-2">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://via.placeholder.com/200x100?text=Logo+Missing";
                                    }}
                                />
                            </div>

                            {/* Client Name Label */}
                            <div className="text-center">
                                <p className="text-slate-700 font-bold uppercase tracking-widest text-[11px] md:text-xs group-hover:text-sky-600 transition-colors">
                                    {client.name}
                                </p>
                                <div className="h-0.5 w-0 group-hover:w-full bg-sky-400 mx-auto transition-all duration-300 mt-1" />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}