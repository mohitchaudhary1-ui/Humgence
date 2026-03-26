"use client";

import ClientsSliders from "./components/ClientsSliders";
import Banner from "./components/Banner";
import AboutComponent from "./components/AboutComponent";
import ServicesComponent from "./components/ServicesComponent";
import VideoTestimonials from "./components/Testimonials";
import HomeContactForm from "./components/ContactForm";

export default function HumgenceHome() {
    return (
        <main className="bg-black text-white overflow-x-hidden">
            <Banner />
            <AboutComponent />
            <ServicesComponent />
            <VideoTestimonials />
            <ClientsSliders />
            <HomeContactForm />

            <style jsx global>{`
        @keyframes slow-zoom { 0% { transform: scale(1); } 100% { transform: scale(1.15); } }
        .animate-slow-zoom { animation: slow-zoom 30s infinite alternate ease-in-out; }
      `}</style>
        </main>
    );
}   