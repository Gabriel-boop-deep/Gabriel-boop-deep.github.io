import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import TabNavigation from "@/components/portfolio/TabNavigation";
import InicioTab from "@/components/portfolio/tabs/InicioTab";
import ServicosTab from "@/components/portfolio/tabs/ServicosTab";
import PortfolioTab from "@/components/portfolio/tabs/PortfolioTab";
import ResultadosTab from "@/components/portfolio/tabs/ResultadosTab";
import ContatoTab from "@/components/portfolio/tabs/ContatoTab";
import Footer from "@/components/portfolio/Footer";
import WhatsAppButton from "@/components/portfolio/WhatsAppButton";
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
    <div className="min-h-screen bg-background">
      <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      <main>
        <AnimatePresence mode="wait">
          {renderTabContent()}
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
};

export default Index;
