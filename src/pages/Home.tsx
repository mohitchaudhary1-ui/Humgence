"use client";

import ClientsSliders from "./components/ClientsSliders";
import Banner from "./components/Banner";
import AboutComponent from "./components/AboutComponent";
import ServicesComponent from "./components/ServicesComponent";
import VideoTestimonials from "./components/Testimonials";
import HomeContactForm from "./components/ContactForm";
import { Helmet } from "react-helmet-async";

export default function HumgenceHome() {
    return (<>
     <Helmet>
            <title>Humgence - Empowering Your Digital Future</title>
            <meta name="description" content="Humgence is a leading digital transformation company that helps businesses thrive in the digital age. We offer innovative solutions and services to drive growth and success." />
            <meta name="keywords" content="digital transformation, technology solutions, business growth, innovation, Humgence" />
            <meta name="author" content="Humgence" />
            {/* open graph meta tags */}
            <meta property="og:title" content="Humgence - Empowering Your Digital Future" />
            <meta property="og:description" content="Humgence is a leading digital transformation company that helps businesses thrive in the digital age. We offer innovative solutions and services to drive growth and success." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://humgence.com/" />
            <meta property="og:image" content="https://humgence.com/banner.webp" />

        </Helmet>
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
        </>
    );
}   