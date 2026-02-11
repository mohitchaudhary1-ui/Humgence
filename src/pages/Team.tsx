import { motion } from "framer-motion";

const team = [
    {
        name: "MOHIT CHAUDHARY",
        role: "Founder",
        bio: "The mind behind the mission and the force driving momentum.",
        grad: "from-pink-500 to-[#56c0db]",
        image: "/team/mohit_humgence.png"
    },
    {
        name: "Deeksha",
        role: "Operations Lead",
        bio: "Building the culture and talent that power our success.",
        grad: "from-amber-400 to-[#56c0db]",
        image: "/team/deeksha_humgence.png"
    },
    {
        name: "Sukhcharan Singh",
        role: "Senior Video Editor",
        bio: "Crafting edits that hold attention till the final frame.",
        grad: "from-blue-400 to-[#56c0db]",
        image: "/team/sukhcharan_humgence.png"
    },
    {
        name: "Amandeep Singh",
        role: "Technical Head",
        bio: "A full-stack developer building powerful, scalable digital systems.",
        grad: "from-[#56c0db] to-blue-600",
        image: "/team/amandeep_humgence.png"
    },
    {
        name: "Harpreet Singh",
        role: "Meta & Google Ads Specialist",
        bio: "Creates performance campaigns that drive real enquiries, not just traffic.",
        grad: "from-indigo-500 to-[#56c0db]",
        image: "/team/harpreet_humgence.png"
    },
    {
        name: "Akshita",
        role: "UI/UX Designer",
        bio: "Designing intuitive user journeys that feel seamless and effortless.",
        grad: "from-rose-500 to-[#56c0db]",
        image: "/team/akshita_humgence.png"
    },
    {
        name: "Edita Kohli",
        role: "Social Media Lead",
        bio: "Turning ordinary briefs into high-performing, engaging content.",
        grad: "from-[#56c0db] to-emerald-500",
        image: "/team/edita_humgence.png"
    },
    {
        name: "Sehaj Singh Saggu",
        role: "Social Media Manager",
        bio: "Plans content strategies that genuinely connect and convert.",
        grad: "from-purple-600 to-[#56c0db]",
        image: "/team/sehaj_humgence.png"
    },
    {
        name: "Gurinder Singh",
        role: "Video Editor",
        bio: "A visual storyteller crafting compelling cinematic experiences.",
        grad: "from-[#56c0db] to-slate-600",
        image: "/team/gurinder_humgence.png"
    },
    {
        name: "Gursharan Singh",
        role: "Video Editor & Graphic Designer",
        bio: "Blending motion and design to create striking visual impact.",
        grad: "from-orange-400 to-[#56c0db]",
        image: "/team/gursharan_humgence.png"
    },
    {
        name: "Armaan Singh",
        role: "Video Editor",
        bio: "Transforms raw footage into polished, scroll-stopping content.",
        grad: "from-[#56c0db] to-cyan-600",
        image: "/team/armaan_humgence.png"
    },
    {
        name: "Gagan Singh",
        role: "Cinematographer",
        bio: "Captures motion and movement designed for maximum impact.",
        grad: "from-[#56c0db] to-blue-800",
        image: "/team/gagan_humgence.png"
    },
    {
        name: "Hardik",
        role: "Event Planner & Manager",
        bio: "From setup to showtime, ensures every event runs smoothly.",
        grad: "from-emerald-500 to-[#56c0db]",
        image: "/team/hardik_humgence.png"
    },
    {
        name: "Ishveer Singh",
        role: "Social Media Manager, Meta Ads",
        bio: "Ensuring your brand never blends into the ordinary.",
        grad: "from-[#56c0db] to-violet-600",
        image: "/team/ishvir_humgence.png"
    },
    {
        name: "Sneha",
        role: "Social Media Manager",
        bio: "Crafting brand stories that connect with the right audience.",
        grad: "from-[#56c0db] to-teal-500",
        image: "/team/sneha_humgence.png"
    },
    {
        name: "Shreya Kapoor",
        role: "Social Media Manager, Influencer Marketing",
        bio: "Driving purposeful collaborations that amplify brand visibility.",
        grad: "from-red-400 to-[#56c0db]",
        image: "/team/shreya_humgence.png"
    },
    {
        name: "Vansh Singh",
        role: "Brand Strategist, Social Media Manager",
        bio: "Designing strategies that build brands beyond engagement metrics.",
        grad: "from-yellow-400 to-[#56c0db]",
        image: "/team/vansh_humgence.png"
    },
    {
        name: "Prabhdeep",
        role: "Business Development Manager",
        bio: "Building strategic partnerships that fuel measurable growth.",
        grad: "from-[#56c0db] to-green-600",
        image: "/team/prabhdeep_humgence.png"
    },
    {
        name: "Satyam Tripathi",
        role: "Full Stack Developer",
        bio: "Turning complex requirements into seamless digital solutions.",
        grad: "from-slate-700 to-[#56c0db]",
        image: "/team/satyam_humgence.png"
    },
    {
        name: "Namrata",
        role: "Photographer",
        bio: "Capturing everyday moments as powerful brand visuals.",
        grad: "from-orange-300 to-[#56c0db]",
        image: "/team/namrata_humgence.png"
    },
    {
        name: "Abhishek",
        role: "Photographer & Videographer",
        bio: "Blending photography and film to tell complete brand stories.",
        grad: "from-[#56c0db] to-indigo-800",
        image: "/team/abhishek_humgence.png"
    },
    {
        name: "Taran",
        role: "Graphic Designer",
        bio: "Creating bold visuals designed to stand out instantly.",
        grad: "from-[#56c0db] to-orange-500",
        image: "/team/taran_humgence.png"
    }
];

export default function PerfectTeamGrid() {
    return (
        <div className="bg-[#030712] min-h-screen py-24 px-6 overflow-hidden">

            {/* --- SECTION HEADER --- */}
            <div className="max-w-7xl mx-auto mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-[1px] bg-[#56c0db]" />
                        <h2 className="text-[#56c0db] font-black tracking-[0.4em] uppercase text-xs">The Collective</h2>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                        Meet the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#56c0db] via-white to-[#56c0db] animate-gradient-x">
                            Visionaries.
                        </span>
                    </h1>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-slate-400 text-xl font-light lg:text-right max-w-md ml-auto leading-relaxed"
                >
                    A high-performance team where every member brings a unique frequency to the digital spectrum.
                </motion.p>
            </div>

            {/* --- THE GRID --- */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {team.map((member, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 0,
                            x: i % 3 === 0 ? -100 : i % 3 === 2 ? 100 : 0,
                            y: i % 3 === 1 ? 100 : 0
                        }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="group relative h-[480px] rounded-[3rem] overflow-hidden bg-slate-900/50 border border-white/10 hover:border-[#56C0DB]/50 transition-colors duration-500"
                    >
                        {/* 1. DYNAMIC GRADIENT STAGE */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${member.grad} opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />

                        {/* 2. CIRCULAR IMAGE CONTAINER */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-64 h-64 md:w-72 md:h-72">
                                {/* Animated glow behind image */}
                                <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${member.grad} blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`} />

                                <motion.div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#56c0db]/30 transition-all duration-700 relative z-10 shadow-2xl">
                                    <motion.img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
                                    />
                                </motion.div>
                            </div>
                        </div>

                        {/* 3. HOVER CONTENT PANEL */}
                        <div className="absolute inset-0 z-20 flex flex-col justify-end">
                            <motion.div
                                className="p-8 bg-black/40 backdrop-blur-xl border-t border-white/10 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-[0.6s] ease-[0.16, 1, 0.3, 1]"
                            >
                                <div className="space-y-3">
                                    <div className="w-12 h-[2px] bg-[#56c0db]" />
                                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none">
                                        {member.name}
                                    </h3>
                                    <p className="text-[#56c0db] text-xs font-black uppercase tracking-[0.3em]">
                                        {member.role}
                                    </p>
                                    <p className="text-slate-300 text-sm font-light leading-relaxed">
                                        {member.bio}
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* 4. DEFAULT VISIBLE LABEL (Fades on hover) */}
                        <div className="absolute bottom-8 left-10 z-10 group-hover:opacity-0 group-hover:translate-y-4 transition-all duration-500">
                            <h4 className="text-white text-2xl font-black uppercase tracking-tighter drop-shadow-lg">
                                {member.name}
                            </h4>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#56c0db]" />
                                <p className="text-white/60 text-[10px] uppercase font-bold tracking-[0.2em]">{member.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}