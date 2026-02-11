import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, Youtube, ArrowRight, CheckCircle2, Clock, Shield, Zap, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/gabriel-nunes-barbosa-nogueira/",
    label: "LinkedIn",
    color: "hover:bg-blue-600/20 hover:border-blue-500/50 hover:text-blue-400",
  },
  {
    icon: Github,
    href: "https://github.com/Gabriel-boop-deep",
    label: "GitHub",
    color: "hover:bg-gray-600/20 hover:border-gray-500/50 hover:text-gray-300",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@IdeIA-f7l5i",
    label: "YouTube",
    color: "hover:bg-red-600/20 hover:border-red-500/50 hover:text-red-400",
  },
];

const guarantees = [
  { icon: Clock, text: "Resposta em até 24h" },
  { icon: Shield, text: "Orçamento sem compromisso" },
  { icon: CheckCircle2, text: "30 dias de suporte grátis" },
];

const ContactSection = () => {
  const phoneNumber = "5571999428340";
  const whatsappMessage = encodeURIComponent("Olá Gabriel! Visitei seu portfólio e gostaria de um orçamento para meu projeto.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden border-2 border-primary/20"
        >
          {/* Glow effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            {/* Urgency badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-semibold">Vaga disponível — Respondo hoje!</span>
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Pronto para ter um
                <br />
                <span className="text-gradient">site que vende?</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Me conta sobre seu projeto e receba um orçamento personalizado. 
                <span className="text-primary font-semibold"> Sem custo, sem compromisso.</span>
              </p>
            </motion.div>

            {/* Main CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-bold rounded-full px-10 py-7 text-lg glow-primary animate-pulse-glow"
              >
                <a href="mailto:gabrielnbn@hotmail.com?subject=Orçamento%20-%20Desenvolvimento%20Web&body=Olá%20Gabriel%2C%0A%0AVisitei%20seu%20portfólio%20e%20gostaria%20de%20um%20orçamento%20para%3A%0A%0A%5BDescreva%20seu%20projeto%20aqui%5D%0A%0AAtenciosamente%2C%0A%5BSeu%20nome%5D">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  SOLICITAR ORÇAMENTO GRÁTIS
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BA5C] text-white font-bold rounded-full px-10 py-7 text-lg"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" fill="white" />
                  WhatsApp
                </a>
              </Button>
            </motion.div>

            {/* Guarantees */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6 mb-10"
            >
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <guarantee.icon className="w-4 h-4 text-green-400" />
                  <span>{guarantee.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-border" />
              <span className="text-muted-foreground text-sm">ou conecte-se comigo</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 flex-wrap mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-14 h-14 rounded-2xl glass-strong flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color}`}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center space-y-3"
            >
              <a
                href="mailto:gabrielnbn@hotmail.com"
                className="flex items-center justify-center gap-2 text-primary hover:text-foreground transition-colors font-medium"
              >
                <Mail className="w-5 h-5" />
                gabrielnbn@hotmail.com
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-green-400 hover:text-foreground transition-colors font-medium"
              >
                <Phone className="w-5 h-5" />
                +55 71 99942-8340
              </a>
            </motion.div>

            {/* Final urgency */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-10 text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span className="text-yellow-500 text-sm font-medium">
                  ⚡ Apenas 3 vagas por mês — Garanta a sua!
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
