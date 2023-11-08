import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import AboutSection from "./components/AboutSection/AboutSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import EmailSection from "./components/EmailSection/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection.jsx";

export default function Home() {
  return (
    <main className="flex min-h-scree flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
