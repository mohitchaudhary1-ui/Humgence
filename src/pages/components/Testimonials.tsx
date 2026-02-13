"use client";
import { useRef } from "react";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Ashok Arora",
        agency: "N Square Marketing",
        videoSrc: "/testimonials/ashok_arora_n_square_marketing.MP4",
    },
    {
        name: "Harbans Sekhon",
        agency: "Nirvana Club",
        videoSrc: "/testimonials/harbans_sekhon_nirvana.MP4",
    },
    {
        name: "Shivani Gupta",
        agency: "BNI",
        videoSrc: "/testimonials/shivani_gupta_bni.MP4",
    },
    {
        name: "Sachin Vidya",
        agency: "Vidya Wings",
        videoSrc: "/testimonials/sachin_vidya_wings.MP4",
    },
    {
        name: "Rishi Khosla",
        agency: "Rakshi Khosa and Associations",
        videoSrc: "/testimonials/rishi_khosla_rakshit_khosla_and_assisiates.MP4",
    }
];

export default function VideoSlider() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === "left"
                ? scrollLeft - clientWidth / 1.5
                : scrollLeft + clientWidth / 1.5;

            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    return (
        <section className="bg-slate-50 py-24 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                >
                    <span className="text-[#56c0db] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter">
                        Our <span className="text-[#56c0db] italic">Testimonials.</span>
                    </h2>
                </motion.div>

                {/* Navigation Arrows */}
                <div className="flex gap-4">
                    <button
                        onClick={() => scroll("left")}
                        className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#56c0db] hover:border-[#56c0db] hover:text-white transition-all text-slate-600 shadow-sm bg-white"
                        aria-label="Previous"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#56c0db] hover:border-[#56c0db] hover:text-white transition-all text-slate-600 shadow-sm bg-white"
                        aria-label="Next"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </button>
                </div>
            </div>

            <div className="relative">
                {/* Scroll Container with scroll-hide utility */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 px-6 md:px-12 overflow-x-auto no-scrollbar scroll-smooth"
                >
                    <motion.div
                        className="flex gap-6 cursor-grab active:cursor-grabbing pb-8"
                        drag="x"
                        dragConstraints={scrollRef}
                    >
                        {testimonials.map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex-shrink-0 w-[300px] md:w-[450px] group"
                            >
                                <div
                                    onClick={() => window.open(item.videoSrc, '_blank')}
                                    className="relative cursor-pointer aspect-[16/9] rounded-[2.5rem] overflow-hidden bg-black shadow-2xl border border-slate-200"
                                >
                                    <video
                                        src={item.videoSrc}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />

                                    <div className="absolute bottom-8 left-8 right-8 pointer-events-none">
                                        <p className="text-[#56c0db] font-bold text-2xxl uppercase tracking-widest mb-2">
                                            {item.agency}
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-[1px] bg-white/50" />
                                            <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest">
                                                {item.name}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="absolute top-6 right-6">
                                        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                                            <div className="w-2 h-2 bg-[#56c0db] rounded-full animate-pulse" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className="mt-8 text-center">
                <p className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.4em]">
                    Click video to play full screen
                </p>
            </div>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}