import MenuOverlay from "./NavPopup";
import { useEffect, useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onLoad = () => setTimeout(() => setLoading(false), 2000);

        if (document.readyState === "complete") onLoad();
        else window.addEventListener("load", onLoad);

        return () => window.removeEventListener("load", onLoad);
    }, []);

    // ✅ Detect scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* ================= LOADER ================= */
    if (loading) {
        return (
            <div className="fixed inset-0 bg-[#5155a6] flex items-center justify-center z-50">
                <div className="flex items-center">
                    <img src="./logo.png" alt="logo" className="w-[100px]" />
                    <span className="ml-3 text-2xl font-bold text-white">
                        HUMGENCE
                    </span>
                </div>
            </div>
        );
    }

    return (
        <div
            className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrolled
                ? "bg-black/40 backdrop-blur-md"
                : "bg-transparent"
                }`}
        >
            <div className="flex justify-between items-center px-4 sm:px-6 lg:px-10">
                <div className="flex items-center font-bold text-base sm:text-lg text-white">
                    <img src="./logo.png" alt="logo" className="w-16" />
                    <span className="ml-2">HUMGENCE</span>
                </div>

                <div
                    className="text-2xl cursor-pointer text-white"
                    onClick={() => setIsMenuOpen(true)}
                >
                    ☰
                </div>

                <MenuOverlay
                    isOpen={isMenuOpen}
                    onClose={() => setIsMenuOpen(false)}
                />
            </div>
        </div>
    );
}
