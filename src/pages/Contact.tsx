"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending....");

        const formData = new FormData(event.target);

        // Enter your Web3Forms Access Key here
        formData.append("access_key", "a0fbedaf-6df2-4551-b7eb-ec7f7dc6b018");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            setIsSubmitting(false);
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-[#0f172a] min-h-screen selection:bg-[#56c0db] selection:text-white pb-20">

            {/* --- CINEMATIC HEADER --- */}
            <section className="relative h-[50vh] flex flex-col justify-center items-center px-6 text-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#56c0db]/20 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10"
                >
                    <h2 className="text-[#56c0db] font-bold tracking-[0.4em] mt-20 uppercase text-[10px] mb-4">Get in Touch</h2>
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
                        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                            {/* Full Name */}
                            <div className="space-y-2 group">
                                <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest ml-1 transition-colors group-focus-within:text-[#56c0db]">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full border-b border-slate-200 bg-transparent py-3 focus:outline-none focus:border-[#56c0db] transition-colors text-slate-900 font-semibold placeholder:text-slate-300"
                                    placeholder="e.g. John Doe"
                                />
                            </div>

                            {/* Phone */}
                            <div className="space-y-2 group">
                                <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest ml-1 transition-colors group-focus-within:text-[#56c0db]">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    className="w-full border-b border-slate-200 bg-transparent py-3 focus:outline-none focus:border-[#56c0db] transition-colors text-slate-900 font-semibold placeholder:text-slate-300"
                                    placeholder="e.g. 9876543210"
                                />
                            </div>

                            {/* Email Address */}
                            <div className="md:col-span-2 space-y-2 group">
                                <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest ml-1 transition-colors group-focus-within:text-[#56c0db]">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full border-b border-slate-200 bg-transparent py-3 focus:outline-none focus:border-[#56c0db] transition-colors text-slate-900 font-semibold placeholder:text-slate-300"
                                    placeholder="name@company.com"
                                />
                            </div>

                            {/* Message Brief */}
                            <div className="md:col-span-2 space-y-2 pt-2">
                                <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest ml-1">Message Brief</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full border border-slate-200 rounded-2xl p-5 focus:outline-none focus:border-[#56c0db] focus:ring-4 focus:ring-[#56c0db]/5 transition-all text-slate-900 font-medium placeholder:text-slate-300 resize-none bg-white"
                                    placeholder="Describe your project vision..."
                                ></textarea>
                            </div>

                            <div className="md:col-span-2">
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.01, translateY: -2 }}
                                    whileTap={{ scale: 0.99 }}
                                    className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[11px] shadow-xl shadow-slate-200 hover:bg-[#56c0db] hover:shadow-[#56c0db]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                                </motion.button>

                                {result && (
                                    <p className={`mt-4 text-center text-[10px] font-bold uppercase tracking-widest ${result.includes("Successfully") ? "text-emerald-500" : "text-red-500"}`}>
                                        {result}
                                    </p>
                                )}
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}