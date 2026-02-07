import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [loading, setLoading] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);

        // Prevent scrolling when menu is open
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            clearTimeout(timer);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isOpen]);

    const menuVariants = {
        closed: { opacity: 0, y: "-100%" },
        open: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
    };

    const linkVariants = {
        closed: { opacity: 0, x: -20 },
        open: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: 0.4 + i * 0.1, duration: 0.5 }
        })
    };

    if (loading) return (
        <div className="fixed inset-0 bg-[#0a0f1a] flex flex-col items-center justify-center z-[100]">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
                <img src="./logo.png" alt="logo" className="w-16 sm:w-24 animate-pulse" />
                <span className="mt-6 text-xl tracking-[0.4em] font-black text-white uppercase">HUMGENCE</span>
            </motion.div>
        </div>
    );

    return (
        <>
            <header className={`fixed top-0 left-0 z-[60] w-full transition-all duration-500 px-6 lg:px-12 ${scrolled ? "py-4 bg-black/80 backdrop-blur-md" : "py-8 bg-transparent"}`}>
                <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
                    {/* Logo */}
                    <a href="/" className="flex items-center font-black text-xl tracking-tighter uppercase relative z-[70]">
                        <img src="./logo.png" alt="logo" className="w-10 mr-3" />
                        HUM<span className="text-[#56c0db]">GENCE</span>
                    </a>

                    {/* Toggle Button / Close Button Hybrid */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="group flex items-center gap-4 relative z-[70] outline-none"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 group-hover:text-[#56c0db] transition-colors">
                            {isOpen ? "Close" : "Menu"}
                        </span>
                        <div className="flex flex-col gap-1.5 w-8 items-end">
                            <span className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? "w-full rotate-45 translate-y-2 bg-[#56c0db]" : "w-full"}`} />
                            <span className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? "opacity-0" : "w-2/3"}`} />
                            <span className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? "w-full -rotate-45 -translate-y-2 bg-[#56c0db]" : "w-1/2"}`} />
                        </div>
                    </button>
                </div>
            </header>

            {/* Fullscreen Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-0 bg-[#0a0f1a] z-[55] flex items-center px-6 md:px-24"
                    >
                        {/* Background Decorative Text */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03] flex items-center justify-center">
                            <h2 className="text-[25vw] font-black uppercase text-white leading-none">HUMGENCE</h2>
                        </div>

                        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                            {/* Navigation Links */}
                            <nav className="flex flex-col space-y-4">
                                {["Home", "Services", "About", "Contact"].map((item, i) => (
                                    <motion.a
                                        key={item}
                                        custom={i}
                                        variants={linkVariants}
                                        href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                                        onClick={() => setIsOpen(false)}
                                        className="text-5xl md:text-7xl font-black uppercase text-white hover:text-[#56c0db] transition-all duration-300 w-fit"
                                    >
                                        {item}
                                    </motion.a>
                                ))}
                            </nav>

                            {/* Contact Info Column */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                className="lg:border-l lg:border-white/10 lg:pl-16 space-y-12"
                            >
                                <div>
                                    <h4 className="text-[10px] tracking-[0.5em] uppercase font-black text-[#56c0db] mb-6">Address</h4>
                                    <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed">
                                        SCO 17, 18 Model Town Extension,<br />
                                        Ludhiana, India
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-[10px] tracking-[0.5em] uppercase font-black text-[#56c0db] mb-2">Inquiries</h4>
                                    <a href="mailto:info@humgence.com" className="block text-xl text-white hover:text-[#56c0db] transition-colors">info@humgence.com</a>
                                    <div className="flex flex-col gap-1 text-white/60">
                                        <a href="tel:+917508400002" className="hover:text-white transition-colors">+91 7508400002</a>
                                        <a href="tel:+971585066985" className="hover:text-white transition-colors">+971 58 506 6985</a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Mobile Bottom Close - extra touch for UX */}
                        <div className="absolute bottom-12 left-0 w-full flex justify-center lg:hidden">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="px-8 py-3 bg-white/5 rounded-full border border-white/10 text-white text-xs font-black uppercase tracking-widest"
                            >
                                [ Close Menu ]
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}