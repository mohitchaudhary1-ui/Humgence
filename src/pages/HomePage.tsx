import Banner from "./components/Banner";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import DoBigThings from "./components/DoBigThings";

export default function Home() {
    return (
        <div className="text-white w-full">
            <Header />
            <div>
                <Banner />
                <HeroSection />
                <DoBigThings />

            </div>
        </div>
    );
}
