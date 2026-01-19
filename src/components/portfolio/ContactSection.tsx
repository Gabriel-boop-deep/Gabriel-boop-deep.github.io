import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Gabriel-Nunes-dev",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/gabriel-nunes-54a56b219/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:gabriellnunesdeveloper@hotmail.com?subject=Oportunidade%20de%20Colaboração%20-%20Contato%20via%20Portfólio&body=Olá%20Gabriel%2C%0A%0AVisitei%20seu%20portfólio%20e%20fiquei%20impressionado%20com%20seus%20projetos%20em%20AI%20e%20Data%20Engineering.%0A%0AGostaria%20de%20conversar%20sobre%3A%0A%0A%5BDescreva%20aqui%20o%20motivo%20do%20contato%5D%0A%0AAguardo%20seu%20retorno!%0A%0AAtenciosamente%2C%0A%5BSeu%20nome%5D",
    label: "Email",
  },
];

const ContactSection = () => {
  return (
    <section id="contato" className="py-24">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center"
            >
              <Send className="w-10 h-10 text-primary-foreground" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vamos <span className="text-gradient">Conversar</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Estou sempre aberto a novos projetos e oportunidades de colaboração. 
              Entre em contato e vamos criar algo incrível juntos!
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-6 flex-wrap">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 rounded-2xl glass-strong flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:glow-primary transition-all duration-300"
                >
                  <social.icon size={28} />
                </motion.a>
              ))}
            </div>

            {/* Email CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-10"
            >
              <a
                href="mailto:gabriellnunesdeveloper@hotmail.com"
                className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-colors font-medium"
              >
                <Mail className="w-5 h-5" />
                gabriellnunesdeveloper@hotmail.com
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
