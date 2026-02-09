import { motion } from "framer-motion";

const services = {
    marketing: [
        { title: "Social Media", icon: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8", desc: "Strategic content and community management." },
        { title: "SEO Mastery", icon: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16m10 2-4.3-4.3", desc: "Data-driven search engine optimization." },
        { title: "PPC & Ads", icon: "m16 18 6-6-6-6M8 6l-6 6 6 6", desc: "High ROI targeted advertising campaigns." }
    ],
    dev: [
        { title: "Web Dev", icon: "m16 18 6-6-6-6M8 6l-6 6 6 6", desc: "High-performance modern web applications." },
        { title: "Mobile Apps", icon: "M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Z", desc: "Seamless native and cross-platform apps." },
        { title: "Branding", icon: "m12 3 1.9 5.8H20l-4.8 3.5 1.8 5.9-5-3.5-5 3.5 1.9-5.9L4 8.8h6.1Z", desc: "Visual identity and strategic positioning." }
    ]
};

const FadeIn = ({ children, x = 0, y = 0, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, x, y }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
        {children}
    </motion.div>
);

export default function ServicesPage() {
    return (
        <div className="bg-[#fcfcfc] text-slate-900 overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-screen flex flex-col justify-center items-center bg-black text-white px-6">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] " />
                <FadeIn y={40}>
                    <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-none mb-4">OUR SERVICES</h1>
                </FadeIn>
                <FadeIn y={20} delay={0.2}>
                    <p className=" text-lg md:text-2xl font-light tracking-wide max-w-2xl text-center font-bold">
                        Blending cutting-edge technology with world-class design.
                    </p>
                </FadeIn>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-32 space-y-48">
                {/* Sections Wrapper */}
                {[
                    { title: "Digital Marketing", data: services.marketing, direction: -100 },
                    { title: "Development & Brand", data: services.dev, direction: 100 }
                ].map((section, idx) => (
                    <div key={idx} className="space-y-16">
                        <FadeIn x={section.direction}>
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight border-l-8 border-sky-500 pl-6">
                                {section.title}
                            </h2>
                        </FadeIn>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {section.data.map((item, i) => (
                                <FadeIn y={50} delay={i * 0.1} key={i}>
                                    <div className="group relative bg-white p-10 h-full border border-slate-100 hover:border-transparent transition-all duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white opacity-0 group-hover:opacity-100 shadow-2xl transition-all duration-500 -z-10" />
                                        <svg className="w-12 h-12 text-sky-500 mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d={item.icon} /></svg>
                                        <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                        <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                ))}

                {/* 360 Tour - The Grand Finale */}
                <FadeIn y={100}>
                    <section className="relative group bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center text-white overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-20 group-hover:scale-110 transition-transform duration-[2s]" />
                        <div className="relative z-10 space-y-8">
                            <span className="inline-block px-4 py-1 rounded-full border border-sky-500 text-sky-400 text-xs font-bold tracking-widest uppercase">Immersive Tech</span>
                            <h2 className="text-5xl md:text-8xl font-black tracking-tighter">360° VIRTUAL TOUR</h2>
                            <p className="text-slate-400 text-lg max-w-xl mx-auto font-light leading-relaxed">
                                Step inside your digital future with high-fidelity virtual walkthroughs that captivate from every angle.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                className="bg-sky-500 hover:bg-white hover:text-black px-12 py-5 rounded-full font-black text-sm tracking-[0.2em] transition-colors"
                            >
                                START THE EXPERIENCE
                            </motion.button>
                        </div>
                    </section>
                </FadeIn>
            </div>
        </div>
    );
}