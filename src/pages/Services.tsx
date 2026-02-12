"use client";

import { motion } from "framer-motion";

const Reveal = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
        {children}
    </motion.div>
);

export default function ServicesPage() {
    const serviceGroups = [
        {
            category: "Digital Growth & Consulting",
            items: [
                {
                    title: "Social Media Marketing",
                    points: [
                        "Instagram, Facebook, LinkedIn, Snapchat, YouTube",
                        "Content planning, captions & hashtag research",
                        "Reel & post concepts for maximum engagement",
                        "Page management & community handling",
                        "Monthly performance insights & optimisation"
                    ],
                    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                },
                {
                    title: "Brand Consulting",
                    points: [
                        "Brand identity & positioning strategy",
                        "Audience research & competitor analysis",
                        "Brand voice, tone & visual direction",
                        "Market fit & growth roadmap",
                        "Long-term brand consistency planning"
                    ],
                    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                },
                {
                    title: "Digital Marketing",
                    points: [
                        "End-to-end online marketing solutions",
                        "SEO & content strategy",
                        "Lead generation & conversion optimisation",
                        "Performance-driven campaigns",
                        "Data-based marketing decisions"
                    ],
                    icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                }
            ]
        },
        {
            category: "Development & Advertising",
            items: [
                {
                    title: "Website Development",
                    points: [
                        "Responsive & mobile-friendly websites",
                        "UI/UX focused design",
                        "Fast loading & SEO-ready structure",
                        "Custom business websites & landing pages",
                        "Easy backend management"
                    ],
                    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                },
                {
                    title: "App Development",
                    points: [
                        "User-friendly interface & smooth performance",
                        "Custom features as per business needs",
                        "Secure & scalable architecture",
                        "Ongoing support & updates"
                    ],
                    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                },
                {
                    title: "Meta & Google Ads",
                    points: [
                        "High-ROI ad campaign planning",
                        "Audience targeting & retargeting",
                        "Creative ad copies & visuals",
                        "Budget optimisation",
                        "Real-time performance tracking"
                    ],
                    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                }
            ]
        },
        {
            category: "Automation & Enterprise",
            items: [
                {
                    title: "AI Automations",
                    points: [
                        "AI-based workflow automation",
                        "Chatbots & smart response systems",
                        "Lead handling & follow-ups",
                        "Reduced manual work & higher efficiency",
                        "Custom automation solutions"
                    ],
                    icon: "M13 10V3L4 14h7v7l9-11h-7z"
                },
                {
                    title: "WhatsApp API",
                    points: [
                        "Official WhatsApp Business API setup",
                        "Automated messages & notifications",
                        "Lead capture & customer support",
                        "Broadcast campaigns",
                        "CRM & system integrations"
                    ],
                    icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                },
                {
                    title: "Software Development",
                    points: [
                        "Custom software solutions",
                        "Business-specific modules",
                        "Secure & scalable systems",
                        "Cloud & system integrations"
                    ],
                    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                }
            ]
        },
        {
            category: "Creative & Immersive",
            items: [
                {
                    title: "Corporate Event Design",
                    points: [
                        "Complete event branding & visuals",
                        "Stage, screen & presentation design",
                        "Digital invites & promotions",
                        "Event content & media coverage",
                        "Professional execution support"
                    ],
                    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                },
                {
                    title: "Wedding Content Creation",
                    points: [
                        "Pre-wedding & wedding day content",
                        "Reels, stories & cinematic visuals",
                        "Social-media-friendly edits",
                        "Trend-based creative concepts"
                    ],
                    icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                },
                {
                    title: "360° Virtual Tour",
                    points: [
                        "Immersive 360° visual experience",
                        "Ideal for property, hotels & campuses",
                        "Website & Google integration",
                        "Interactive navigation"
                    ],
                    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                }
            ]
        }
    ];

    return (
        <div className="bg-[#f8fafc] text-[#1e293b]">

            {/* --- HERO SECTION --- */}
            <section className="relative h-[60vh] flex flex-col justify-center items-center px-6 bg-white border-b border-slate-100 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

                <Reveal>
                    <span className="bg-sky-100 text-sky-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 block">
                        Our Expertise
                    </span>
                </Reveal>
                <Reveal delay={0.1}>
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-center leading-[0.9]">
                        OUR <span className="text-sky-500 italic">SERVICES</span>
                    </h1>
                </Reveal>
            </section>

            {/* --- SERVICES CONTENT --- */}
            <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">

                {serviceGroups.map((group, gIdx) => (
                    <div key={gIdx} className="space-y-12">
                        <Reveal>
                            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 border-l-4 border-sky-500 pl-4">
                                {group.category}
                            </h2>
                        </Reveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {group.items.map((service, i) => (
                                <Reveal key={i} delay={i * 0.1}>
                                    <div className="group bg-white p-10 h-full rounded-[2.5rem] border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-sky-200 transition-all duration-500 flex flex-col">

                                        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-sky-50 transition-colors">
                                            <svg className="w-7 h-7 text-slate-400 group-hover:text-sky-500 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                                            </svg>
                                        </div>

                                        <h3 className="text-xl font-bold mb-6 text-slate-800 uppercase tracking-tight leading-tight">
                                            {service.title}
                                        </h3>

                                        <ul className="space-y-4 flex-grow">
                                            {service.points.map((point, pIdx) => (
                                                <li key={pIdx} className="flex gap-3 text-sm text-slate-500 leading-relaxed font-medium">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* --- CTA SECTION --- */}
            <section className="bg-sky-500 py-24 px-6 text-center">
                <Reveal>
                    <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
                        Ready to scale your <br /> digital presence?
                    </h2>
                    <button className="bg-white text-sky-600 px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all duration-300">
                        Work with us
                    </button>
                </Reveal>
            </section>
        </div>
    );
}