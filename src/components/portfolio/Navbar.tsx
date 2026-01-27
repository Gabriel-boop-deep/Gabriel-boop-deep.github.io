import { motion } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Benefícios", href: "#beneficios" },
  { label: "Projetos", href: "#projetos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Vídeos", href: "#video" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-strong rounded-2xl px-6 py-3">
          <div className="flex items-center justify-between">
            <motion.a
              href="#hero"
              className="text-xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {"<GN/>"}
            </motion.a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-6">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <a
                    href={item.href}
                    className="relative text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="hidden md:block"
            >
              <Button
                asChild
                size="sm"
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold rounded-full px-5"
              >
                <a href="#contato">
                  <Zap className="w-4 h-4 mr-1" />
                  Orçamento
                </a>
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pt-4"
            >
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium py-2"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button
                  asChild
                  className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold rounded-full"
                >
                  <a href="#contato" onClick={() => setIsOpen(false)}>
                    <Zap className="w-4 h-4 mr-1" />
                    Solicitar Orçamento
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
