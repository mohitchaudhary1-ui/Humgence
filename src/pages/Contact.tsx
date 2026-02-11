import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <div className="bg-[#0f172a] min-h-screen selection:bg-[#56c0db] selection:text-white pb-20">

            {/* --- CINEMATIC HEADER --- */}
            <section className="relative h-[50vh] flex flex-col justify-center items-center px-6 text-center overflow-hidden">
                {/* Refined Background Mesh */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#56c0db]/20 rounded-full blur-[100px] animate-pulse" />
                    {/* Professional Dot Matrix Overlay */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10"
                >
                    <h2 className="text-[#56c0db] font-bold tracking-[0.4em] uppercase text-[10px] mb-4">Get in Touch</h2>
                    <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                        Start the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#56c0db] to-slate-400 italic">Conversation.</span>
                    </h1>
                </motion.div>
            </section>

            {/* --- OVERLAPPING CONTENT CARD --- */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] border border-white/10">

                    {/* LEFT: DARK INFO BAR */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-4 bg-slate-900/95 backdrop-blur-xl p-8 md:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5"
                    >
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-white text-xl font-bold uppercase tracking-tight mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    {[
                                        { title: "Email", value: "hello@humgence.agency", color: "bg-[#56c0db]" },
                                        { title: "WhatsApp", value: "+91 98765-43210", color: "bg-emerald-500" },
                                        { title: "Office", value: "Ludhiana, Punjab, IN", color: "bg-slate-400" }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ x: 5 }}
                                            className="group cursor-pointer"
                                        >
                                            <p className="text-slate-500 text-[9px] font-bold uppercase tracking-[0.2em] mb-1">{item.title}</p>
                                            <div className="flex items-center gap-3">
                                                <div className={`w-1 h-3 ${item.color} rounded-full group-hover:h-5 transition-all duration-300`} />
                                                <p className="text-slate-200 font-medium text-base group-hover:text-[#56c0db] transition-colors">{item.value}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="text-slate-500 text-[9px] font-bold uppercase tracking-[0.2em] mb-4">Connect Socially</p>
                                <div className="flex flex-wrap gap-3">
                                    {['LinkedIn', 'Instagram', 'Twitter'].map(s => (
                                        <span key={s} className="px-4 py-2 rounded-lg bg-white/5 text-slate-300 hover:bg-[#56c0db] hover:text-slate-900 transition-all cursor-pointer font-bold text-[10px] uppercase tracking-widest border border-white/5">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT: THE FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-8 bg-slate-50 p-8 md:p-16 lg:p-20"
                    >
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                            <div className="space-y-2 group">
                                <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest ml-1 transition-colors group-focus-within:text-[#56c0db]">Full Name</label>
                                <input type="text" className="w-full border-b border-slate-200 bg-transparent py-3 focus:outline-none focus:border-[#56c0db] transition-colors text-slate-900 font-semibold placeholder:text-slate-300" placeholder="e.g. John Doe" />
                            </div>

                            <div className="space-y-2 group">
                                <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest ml-1 transition-colors group-focus-within:text-[#56c0db]">Email Address</label>
                                <input type="email" className="w-full border-b border-slate-200 bg-transparent py-3 focus:outline-none focus:border-[#56c0db] transition-colors text-slate-900 font-semibold placeholder:text-slate-300" placeholder="name@company.com" />
                            </div>

                            <div className="md:col-span-2 space-y-4">
                                <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest ml-1">Inquiry Type</label>
                                <div className="flex flex-wrap gap-2">
                                    {['Development', 'UI/UX Design', 'Marketing', 'Video Production'].map((tag) => (
                                        <button key={tag} type="button" className="px-5 py-2.5 rounded-xl border border-slate-200 text-[11px] font-bold text-slate-600 hover:border-[#56c0db] hover:bg-[#56c0db]/5 hover:text-[#56c0db] transition-all">
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="md:col-span-2 space-y-2 pt-2">
                                <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest ml-1">Message Brief</label>
                                <textarea rows={4} className="w-full border border-slate-200 rounded-2xl p-5 focus:outline-none focus:border-[#56c0db] focus:ring-4 focus:ring-[#56c0db]/5 transition-all text-slate-900 font-medium placeholder:text-slate-300 resize-none bg-white" placeholder="Describe your project vision..."></textarea>
                            </div>

                            <div className="md:col-span-2">
                                <motion.button
                                    whileHover={{ scale: 1.01, translateY: -2 }}
                                    whileTap={{ scale: 0.99 }}
                                    className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[11px] shadow-xl shadow-slate-200 hover:bg-[#56c0db] hover:shadow-[#56c0db]/20 transition-all duration-300"
                                >
                                    Submit Inquiry
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}