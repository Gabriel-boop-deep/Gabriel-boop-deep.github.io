import { motion } from "framer-motion";
import { Heart, Coffee } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 border-t border-border/50"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
          © 2025 Gabriel Nunes. Desenvolvido com
          <Heart className="w-4 h-4 text-accent fill-accent" />
          e muita
          <Coffee className="w-4 h-4 text-primary" />
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
