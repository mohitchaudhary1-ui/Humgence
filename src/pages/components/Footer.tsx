"use client";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-black text-white text-bold py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

                    {/* --- BRAND COLUMN --- */}
                    <div className="md:col-span-5 space-y-6">
                        <div className="flex items-center gap-2">
                            {/* SVG Logo to match the 'D' icon in your screenshot */}
                            <Link to="/" className="flex items-center font-black text-xl tracking-tighter uppercase relative">
                                <img src="./logo.png" alt="logo" className="w-8 md:w-10 mr-3" />
                                <span className="xs:block">HUM<span className="text-[#56c0db]">GENCE</span></span>
                            </Link>
                        </div>
                        <p className="text-sm leading-relaxed max-w-sm">
                            We build scalable digital ecosystems for businesses through innovation and performance-focused execution.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://www.facebook.com/share/1Fj6sf9MSc/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 rounded-lg bg-white/5 text-slate-300 hover:bg-[#56c0db] hover:text-slate-900 transition-all cursor-pointer font-bold text-[10px] uppercase tracking-widest border border-white/5"
                            >
                                Facebook
                            </a>
                            <a
                                href="https://www.instagram.com/humgence/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 rounded-lg bg-white/5 text-slate-300 hover:bg-[#56c0db] hover:text-slate-900 transition-all cursor-pointer font-bold text-[10px] uppercase tracking-widest border border-white/5"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>

                    {/* --- QUICK LINKS --- */}
                    <div className="md:col-span-3 space-y-6">
                        <h3 className="text-[15px] font-bold uppercase tracking-[0.2em]">
                            Quick Links
                        </h3>
                        <ul className="space-y-4">
                            {['About', 'Services', 'Team', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a href={`/${link.toLowerCase()}`} className="hover:text-[#56c0db] transition-colors text-sm font-medium">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* --- CONTACT INFO --- */}
                    <div className="md:col-span-4 space-y-6">
                        <h3 className="text-[15px] font-bold uppercase tracking-[0.2em]">
                            Contact
                        </h3>
                        <ul className="space-y-5">
                            <li className="flex items-center gap-4 group">
                                <div className="text-[#56c0db] text-lg">
                                    <i className="far fa-envelope"></i>
                                </div>
                                <a href="mailto:hello@agency.com" className="hover:text-[#56c0db] transition-colors text-sm font-medium">
                                    info@humgence.com                                </a>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="text-[#56c0db] text-lg rotate-90">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <a href="tel:+15551234567" className="hover:text-[#56c0db] transition-colors text-sm font-medium">
                                    +91 7508400002
                                </a>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="text-[#56c0db] text-lg">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <span className="text-sm font-medium">
                                    SCO 140, 4th Floor, Feroze Gandhi Market, Ludhiana, India

                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* --- COPYRIGHT BAR --- */}
                <div className="pt-8 border-t border-slate-100 text-center">
                    <a href="/copyright.pdf" target="__blank" className="text-slate-400 text-[11px] font-medium tracking-wide">
                        © 2026 Humgence. All rights reserved.
                    </a>
                    <div className="flex justify-center gap-6 mt-2">
                        <a href="/privacy_policy.pdf" target="__blank" className="text-slate-400 hover:text-[#56c0db] text-[11px] font-semibold transition-colors">Privacy Policy</a>
                        <a href="/terms_and_conditions.pdf" target="__blank" className="text-slate-400 hover:text-[#56c0db] text-[11px] font-semibold transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;