import { motion } from "framer-motion";
import { Home, Briefcase, FolderOpen, TrendingUp, MessageCircle, Zap } from "lucide-react";
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
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
    >
      {/* Urgency banner */}
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="absolute -top-0 left-0 right-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-gradient py-2"
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2 text-primary-foreground font-semibold text-xs md:text-sm">
          <Zap className="w-3 h-3 md:w-4 md:h-4" />
          <span>{t("nav.urgency")}</span>
          <Zap className="w-3 h-3 md:w-4 md:h-4" />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto mt-8">
        <div className="glass-strong rounded-2xl px-4 md:px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => onTabChange("inicio")}
              className="text-xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {"<GN/>"}
            </motion.button>

            {/* Desktop Tabs */}
            <div className="hidden md:flex items-center gap-1 bg-muted/30 rounded-xl p-1">
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  onClick={() => onTabChange(tab.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-primary rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <tab.icon className="w-4 h-4" />
                    {t(tab.labelKey)}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Right side controls */}
            <div className="hidden md:flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                onClick={() => onTabChange("contato")}
                className="flex items-center gap-2 bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold rounded-full px-5 py-2 text-sm transition-all"
              >
                <Zap className="w-4 h-4" />
                {t("nav.quote")}
              </motion.button>
            </div>

            {/* Mobile controls */}
            <div className="flex md:hidden items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
          
          {/* Mobile Tabs */}
          <div className="flex md:hidden items-center gap-1 overflow-x-auto scrollbar-hide mt-3 -mx-2 px-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`p-2 rounded-lg transition-all duration-300 flex-shrink-0 flex flex-col items-center gap-1 min-w-[60px] ${
                  activeTab === tab.id
                    ? "bg-gradient-primary text-primary-foreground"
                    : "text-muted-foreground"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="text-[10px] font-medium">{t(tab.labelKey)}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default TabNavigation;
