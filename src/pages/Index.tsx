import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ParticlesBackground from "@/components/portfolio/ParticlesBackground";
import GradientOrbs from "@/components/portfolio/GradientOrbs";
import TabNavigation from "@/components/portfolio/TabNavigation";
import InicioTab from "@/components/portfolio/tabs/InicioTab";
import ServicosTab from "@/components/portfolio/tabs/ServicosTab";
import PortfolioTab from "@/components/portfolio/tabs/PortfolioTab";
import ResultadosTab from "@/components/portfolio/tabs/ResultadosTab";
import ContatoTab from "@/components/portfolio/tabs/ContatoTab";
import Footer from "@/components/portfolio/Footer";
import ChatBot from "@/components/portfolio/ChatBot";

const Index = () => {
  const [activeTab, setActiveTab] = useState("inicio");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "inicio":
        return <InicioTab onNavigate={handleTabChange} />;
      case "servicos":
        return <ServicosTab onNavigate={handleTabChange} />;
      case "portfolio":
        return <PortfolioTab onNavigate={handleTabChange} />;
      case "resultados":
        return <ResultadosTab onNavigate={handleTabChange} />;
      case "contato":
        return <ContatoTab />;
      default:
        return <InicioTab onNavigate={handleTabChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background Effects */}
      <GradientOrbs />
      <ParticlesBackground />
      <div className="fixed inset-0 grid-pattern pointer-events-none z-[1]" />

      {/* Navigation */}
      <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Content */}
      <div className="relative z-10">
        <main>
          <AnimatePresence mode="wait">
            {renderTabContent()}
          </AnimatePresence>
        </main>
        <Footer />
      </div>

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
};

export default Index;
