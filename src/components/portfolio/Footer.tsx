import { motion } from "framer-motion";
import { Heart, Zap, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 border-t border-border/50 relative"
    >
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground glow-primary"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground flex items-center gap-2 text-sm">
            © 2025 Gabriel Nunes. Feito com
            <Heart className="w-4 h-4 text-accent fill-accent" />
            e
            <Zap className="w-4 h-4 text-primary" />
          </p>
          
          <p className="text-xs text-muted-foreground">
            Sites que vendem • Design profissional • Resultados reais
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
