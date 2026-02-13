"use client";

import ClientsSliders from "./components/ClientsSliders";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import VideoTestimonials from "./components/Testimonials";

export default function HumgenceHome() {
    return (
        <main className="bg-black text-white overflow-x-hidden">
            <Banner />
            <About />
            <Services />
            <VideoTestimonials />
            <ClientsSliders />

            <style jsx global>{`
        @keyframes slow-zoom { 0% { transform: scale(1); } 100% { transform: scale(1.15); } }
        .animate-slow-zoom { animation: slow-zoom 30s infinite alternate ease-in-out; }
      `}</style>
        </main>
    );
}   