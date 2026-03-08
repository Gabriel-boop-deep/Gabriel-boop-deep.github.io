import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 border-t border-border relative"
    >
      {/* Scroll to top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground shadow-md"
      >
        <ArrowUp className="w-4 h-4" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-sm">
            © 2025 Gabriel Nunes. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Desenvolvimento Web • Design Profissional • Soluções Digitais
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
