import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.button
      onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-9 h-9 rounded-lg glass flex items-center justify-center text-xs font-bold text-muted-foreground hover:text-foreground transition-colors"
      aria-label={language === "pt" ? "Switch to English" : "Mudar para Português"}
    >
      {language === "pt" ? "EN" : "PT"}
    </motion.button>
  );
};

export default LanguageToggle;
