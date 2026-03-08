import { motion } from "framer-motion";
import { Home, Briefcase, FolderOpen, TrendingUp, MessageCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  const { t } = useLanguage();
  
  const tabs = [
    { id: "inicio", labelKey: "nav.home", icon: Home },
    { id: "servicos", labelKey: "nav.services", icon: Briefcase },
    { id: "portfolio", labelKey: "nav.portfolio", icon: FolderOpen },
    { id: "resultados", labelKey: "nav.results", icon: TrendingUp },
    { id: "contato", labelKey: "nav.contact", icon: MessageCircle },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 border-b border-border backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold tracking-tight text-foreground">GN</span>
            <span className="hidden sm:block text-xs text-muted-foreground font-medium">Gabriel Nunes</span>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden md:flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t(tab.labelKey)}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => onTabChange("contato")}
              className="hidden md:inline-flex items-center gap-1.5 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-md px-4 py-2 text-sm transition-colors"
            >
              {t("nav.quote")}
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Mobile Tabs */}
        <div className="flex md:hidden items-center border-t border-border -mx-4 px-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex-1 flex flex-col items-center gap-0.5 py-2 text-[10px] font-medium transition-colors relative ${
                activeTab === tab.id
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {t(tab.labelKey)}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="mobileIndicator"
                  className="absolute top-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default TabNavigation;
