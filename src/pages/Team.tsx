import { motion } from "framer-motion";

const team = [
    {
        name: "MOHIT CHAUDHARY",
        role: "Founder",
        bio: "At the helm of Humgence is Mohit Chaudhary, a seasoned strategist whose 18-year career has been defined by a relentless pursuit of precision and long-term value. Shaped by the rigorous environments of global consulting giants—including Accenture, KPMG, PwC, and SAP Labs—Mohit brings a rare depth of corporate strategy to the fast-paced world of digital marketing. Mohit’s expertise lies in his ability to bridge the gap between complex business ecosystems and modern digital agility. He does not view marketing in isolation; rather, he approaches it through the lens of a consultant, ensuring that every campaign is backed by foresight and structured for sustainable growth. His portfolio includes high-impact projects for industry leaders such as Hero Honda, Avantha Power, 3M, the Trident Group, and various Public Sector Undertakings (PSUs). Beyond the boardroom, Mohit channels the discipline and competitive spirit of a national-level athlete. A distinguished football and golf player, he applies the same focus, resilience, and strategic calculation to business that he does to sports. Under his leadership, Humgence delivers not just innovation, but performance-focused execution that stands the test of time.",
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
        bio: "Sukhcharan Singh Jagdeo is the Design Team Lead and Head of Graphics Operations at Humgence, bringing 11 years of excellence in the design industry and 3 years of dedicated leadership within the company. As a master of visual storytelling, he seamlessly blends creativity with technical precision, turning concepts into powerful visual experiences. With deep expertise in Photoshop, Premiere Pro, and CorelDRAW, he leads both video and graphic teams to deliver refined, high-impact campaigns. Backed by a strong academic foundation in computer applications, Sukhcharan combines discipline with artistry—crafting designs that are not only visually striking but rich in meaning and emotion.",
        grad: "from-blue-400 to-[#56c0db]",
        image: "/team/sukhcharan_humgence.png"
    },
    {
        name: "Gursharan Singh",
        role: "Video Editor & Graphic Designer",
        bio: "Gursharan is a highly skilled Video Editor and Graphic Designer with over five years of professional experience crafting compelling visual stories. With a sharp creative eye and strong technical expertise, he specializes in delivering impactful designs and seamless video edits that elevate brand presence. Proficient in Adobe Photoshop and Adobe Premiere Pro, along with the full Adobe Creative Suite, Gursharan combines creativity with precision to produce engaging digital content. From promotional videos and social media creatives to branding assets and cinematic edits, his work reflects attention to detail, storytelling strength, and a deep understanding of visual communication that drives results.",
        grad: "from-orange-400 to-[#56c0db]",
        image: "/team/gursharan_humgence.png"
    },
    {
        name: "Harpreet Singh",
        role: "Meta & Google Ads Specialist",
        bio: "Harpreet Singh is a results-driven Meta and Google Ads Specialist at Humgence, dedicated to delivering high-performance digital advertising campaigns. With strong expertise in paid media strategy, audience targeting, and conversion optimization, he helps brands maximize ROI and scale sustainably. Harpreet specializes in creating data-backed campaigns that generate quality leads, increase sales, and strengthen online presence. His analytical mindset, combined with creative ad execution, ensures every campaign is optimized for measurable growth. Passionate about performance marketing and continuous learning, Harpreet focuses on turning insights into impactful strategies that drive real business results in today’s competitive digital landscape.",
        grad: "from-indigo-500 to-[#56c0db]",
        image: "/team/harpreet_humgence.png"
    },
    {
        name: "Amandeep Singh",
        role: "Technical Head",
        bio: "As our Technical Lead and Full Stack Developer, Amandeep Singh is the driving force behind the robust digital architectures that power our agency. He doesn’t just oversee development; he meticulously designs every layer of our systems, ensuring a seamless transition from complex backend logic to high-performance user interfaces. Amandeep bridges the gap between ambitious brand visions and technical reality, leading our engineering team with a blend of strategic foresight and hands-on expertise. His commitment to excellence ensures every project is scalable, secure, and world-class. Under his leadership, we continue to push the boundaries of what’s possible in digital innovation.",
        grad: "from-[#56c0db] to-blue-600",
        image: "/team/amandeep_humgence.png"
    },
    {
        name: "Akshita",
        role: "UI/UX Designer",
        bio: "Akshita Verma is a UI/UX Designer at Humgence, where she focuses on creating meaningful, user-centric digital experiences. She designs intuitive and visually engaging interfaces that align with brand goals and drive conversions. Her work involves user research, wireframing, prototyping, and high-fidelity design for web and mobile platforms. Collaborating closely with marketing strategists, developers, and stakeholders, Akshita translates business objectives into seamless user journeys. With a strong balance of creativity, usability, and data-driven thinking, she contributes to building scalable digital products that enhance engagement, improve usability, and deliver measurable impact for brands.",
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
        bio: "Sehaj Singh Saggu plays a pivotal role in shaping our digital presence through thoughtful strategy and refined execution. With a strong understanding of audience behavior and platform dynamics, he has contributed to elevated brand visibility, high-impact campaigns, and sustained engagement growth. His approach blends creativity with performance, ensuring every piece of content aligns with brand intent and long-term value. Known for his precision and consistency, Sehaj continues to strengthen our social media ecosystem with clarity, relevance, and measurable results.",
        grad: "from-purple-600 to-[#56c0db]",
        image: "/team/sehaj_humgence.png"
    },
    {
        name: "Gurinder Singh",
        role: "Video Editor",
        bio: "Gurinder Singh plays a vital role in shaping our visual storytelling as a Video Editor and Motion Graphics Artist at Humgence. His ability to transform ideas into refined, engaging visuals has consistently elevated the quality and impact of our content. With a strong sense of timing, detail, and creative direction, he has contributed to multiple high-performing campaigns and brand narratives. Gurinder’s dedication, consistency, and commitment to excellence reflect in every project he delivers. His performance continues to strengthen our creative standards, making him a valuable contributor to our growth and an important force behind our evolving visual identity.",
        grad: "from-[#56c0db] to-slate-600",
        image: "/team/gurinder_humgence.png"
    },
    {
        name: "Armaan Singh",
        role: "Video Editor",
        bio: "Armaan is a skilled Video Editor known for his sharp eye for detail and strong storytelling instincts. With hands-on expertise in industry-leading software including Adobe Premiere Pro and After Effects, he transforms raw footage into seamless, engaging visual narratives. His editing style blends precision with creativity, ensuring every frame contributes to the overall impact of the story. Whether it’s promotional content, social media campaigns, or cinematic projects, Armaan delivers polished results that capture attention and hold it. Passionate about evolving trends and techniques, he consistently brings fresh energy and technical excellence to every project he undertakes.",
        grad: "from-[#56c0db] to-cyan-600",
        image: "/team/armaan_humgence.png"
    },
    {
        name: "Gagan Sharma",
        role: "Creative Director",
        bio: "Gagan Sharma is a creative director, content creator, and cinematographer with over five years of industry experience. He has collaborated with 70+ clients on a freelance basis, delivering impactful visual storytelling across digital and branded platforms. Gagan has also worked with Pitara TV, Chaupal Punjabi OTT, and Apple India, gaining diverse exposure across broadcast, streaming, and premium brand productions. His approach blends cinematic precision with strategic thinking, ensuring every project is both visually compelling and purpose-driven. From concept development to final execution, he focuses on crafting engaging narratives that elevate brands and create meaningful audience connections.",
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
        name: "Ishvir Singh",
        role: "Social Media Manager, Meta Ads",
        bio: "Ishvir Khangura is a results-driven digital marketing professional with over 1.5 years of practical experience in performance and social media marketing. He began his career as an Email Marketer, specializing in lead generation through targeted outreach and automation strategies. Over time, he expanded his expertise into Social Media Management, where he handled content planning, audience engagement, and brand growth. He has also worked as a Meta Ads Executive, managing and optimizing paid campaigns focused on generating quality leads and improving ROI. Ishvir brings a strong blend of creativity, analytical thinking, and execution skills to every project he handles.",
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
        bio: "Shreya Kapoor is a results-driven Social Media Manager and Influencer Marketing Specialist with over 3 years of experience in digital marketing. She specialises in building strong brand identities through strategic content planning, performance-driven campaigns and impactful influencer collaborations. With a deep understanding of audience behaviour and platform trends, she crafts marketing strategies that enhance visibility, engagement and conversions. From brand positioning to campaign execution, Shreya focuses on measurable growth and authentic storytelling. Her expertise lies in turning ideas into digital success stories by blending creativity with data-driven insights to help brands establish a powerful and lasting online presence.",
        grad: "from-red-400 to-[#56c0db]",
        image: "/team/shreya_humgence.png"
    },
    {
        name: "Vansh",
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
        bio: "Satyam Tripathi is a passionate full-stack developer and automation specialist focused on building scalable digital products. He works seamlessly across frontend and backend technologies, transforming ideas into fast, functional, and user-centric applications. From crafting clean, intuitive interfaces to developing secure APIs and robust database architectures, he takes ownership of the complete product lifecycle. Satyam actively explores AI integrations, workflow automation, and SaaS systems to build efficient, revenue-driven solutions. Committed to continuous growth, he constantly sharpens his problem-solving, system design, and performance optimization skills. He believes in writing clean code, building with purpose, and delivering technology that creates lasting business impact.",
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
                                className="absolute inset-0 z-20 
               flex flex-col
               p-6 sm:p-10 
               bg-black/85 backdrop-blur-2xl 
               translate-y-full group-hover:translate-y-0 
               transition-transform duration-[0.7s] ease-[0.16,1,0.3,1]"
                            >
                                {/* Inner Content Wrapper */}
                                <div className="relative h-full flex flex-col pt-10">

                                    {/* Header inside the slide-up */}
                                    <div className="mb-4">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "3rem" }}
                                            className="h-[2px] bg-[#56c0db] mb-2"
                                        />
                                        <p className="text-[#56c0db] text-[10px] font-black uppercase tracking-[0.2em]">
                                            About Member
                                        </p>
                                    </div>

                                    {/* Bio Text Container with Custom Scrollbar */}
                                    <div className="flex-1 overflow-y-auto pr-2 
                        /* Custom Scrollbar Styling */
                        scrollbar-thin 
                        scrollbar-thumb-[#56c0db]/40 
                        scrollbar-track-transparent 
                        hover:scrollbar-thumb-[#56c0db]
                        /* For Chrome/Safari/Edge */
                        [&::-webkit-scrollbar]:w-1
                        [&::-webkit-scrollbar-track]:bg-transparent
                        [&::-webkit-scrollbar-thumb]:bg-[#56c0db]/30
                        [&::-webkit-scrollbar-thumb]:rounded-full
                        hover:[&::-webkit-scrollbar-thumb]:bg-[#56c0db]
                        /* Fade Mask */
                        [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">

                                        <p className="text-slate-200 text-sm sm:text-[15px] font-light leading-relaxed tracking-wide py-4">
                                            {member.bio}
                                        </p>
                                    </div>

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