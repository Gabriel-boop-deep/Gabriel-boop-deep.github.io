import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpeg";

const stats = [
  { number: "3+", label: "Anos Experiência" },
  { number: "20+", label: "Projetos" },
  { number: "100%", label: "Dedicação" },
];

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-muted-foreground">Disponível para novos projetos</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="text-gradient">Gabriel</span>
              <br />
              <span className="text-foreground">Nunes</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-primary font-light mb-6"
            >
              Desenvolvedor Full-Stack & AI Specialist
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Transformo sua visão em <span className="text-primary">sites profissionais</span> que 
              convertem visitantes em clientes. Especializado em criar soluções digitais de alto impacto 
              para <span className="text-secondary">qualquer tipo de negócio</span> — do pequeno empreendedor 
              às grandes empresas. Seu sucesso online começa aqui.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center lg:justify-start gap-8 mb-10"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                  className="text-center"
                >
                  <span className="text-3xl md:text-4xl font-bold text-gradient block">
                    {stat.number}
                  </span>
                  <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold rounded-full px-8 glow-primary"
              >
                <a href="#projetos">
                  Ver Projetos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-primary/30 hover:border-primary hover:bg-primary/10"
              >
                <a href="#contato">
                  <Mail className="mr-2 h-5 w-5" />
                  Contato
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex gap-4 mt-8 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com/Nuono-Cyber", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/gabriel-nunes-54a56b219/", label: "LinkedIn" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-3xl border-2 border-dashed border-primary/30"
                style={{ transform: "scale(1.1)" }}
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-20 blur-3xl" />
              
              {/* Main frame */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-3xl border-gradient p-1">
                  <div className="w-full h-full rounded-3xl bg-gradient-to-br from-muted to-background flex items-center justify-center overflow-hidden">
                    <img 
                      src={profileImage} 
                      alt="Gabriel Nunes - Desenvolvedor Full-Stack" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-primary rounded-tl-lg" />
                <div className="absolute -top-4 -right-4 w-16 h-16 border-r-2 border-t-2 border-primary rounded-tr-lg" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border-l-2 border-b-2 border-primary rounded-bl-lg" />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-primary rounded-br-lg" />

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-6 -right-6 px-4 py-2 rounded-full glass-strong text-sm font-medium"
                >
                  💻 Web Developer
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 px-4 py-2 rounded-full glass-strong text-sm font-medium"
                >
                  🤖 AI Specialist
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
