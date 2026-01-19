import ParticlesBackground from "@/components/portfolio/ParticlesBackground";
import GradientOrbs from "@/components/portfolio/GradientOrbs";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import VideoSection from "@/components/portfolio/VideoSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background Effects */}
      <GradientOrbs />
      <ParticlesBackground />
      <div className="fixed inset-0 grid-pattern pointer-events-none z-[1]" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <ProjectsSection />
          <VideoSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
