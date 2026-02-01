import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpeg";

const urgencyPoints = [
  { icon: CheckCircle2, text: "Sites que vendem de verdade" },
  { icon: CheckCircle2, text: "Entrega em até 7 dias" },
  { icon: CheckCircle2, text: "Suporte pós-entrega" },
];

interface InicioTabProps {
  onNavigate: (tab: string) => void;
}

const InicioTab = ({ onNavigate }: InicioTabProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center pt-32 pb-12 relative"
    >
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-green-500/50 mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs md:text-sm font-medium text-green-400">✓ 1 vaga disponível este mês</span>
            </motion.div>

            {/* Name and title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mb-4"
            >
              <h2 className="text-2xl md:text-3xl font-bold">
                <span className="text-gradient">Gabriel Nunes</span>
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">Web Developer & AI Specialist</p>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            >
              Seu negócio merece um
              <br />
              <span className="text-gradient">site que vende.</span>
              <br />
              <span className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-normal">
                Não apenas um que "existe".
              </span>
            </motion.h1>

            {/* Value proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-sm md:text-base lg:text-lg text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0"
            >
              Crio <span className="text-primary font-semibold">sites profissionais</span> que transformam 
              visitantes em clientes pagantes. Design moderno, rápido, otimizado para 
              <span className="text-secondary font-semibold"> converter e vender</span>.
            </motion.p>

            {/* Urgency points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col gap-2 mb-6"
            >
              {urgencyPoints.map((point, index) => (
                <motion.div
                  key={point.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <point.icon className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-foreground font-medium">{point.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex justify-center lg:justify-start gap-4 md:gap-8 mb-8"
            >
              {[
                { number: "20+", label: "Projetos", icon: TrendingUp },
                { number: "100%", label: "Satisfação", icon: CheckCircle2 },
                { number: "7d", label: "Entrega", icon: Clock },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, type: "spring" }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-1 mb-0.5">
                    <stat.icon className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                    <span className="text-xl md:text-2xl font-bold text-gradient">
                      {stat.number}
                    </span>
                  </div>
                  <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Button
                onClick={() => onNavigate("contato")}
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-bold rounded-full px-6 py-5 text-sm md:text-base glow-primary animate-pulse-glow"
              >
                QUERO MEU SITE
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => onNavigate("portfolio")}
                variant="outline"
                size="lg"
                className="rounded-full px-6 py-5 border-primary/50 hover:border-primary hover:bg-primary/10 font-semibold text-sm md:text-base"
              >
                Ver Resultados
              </Button>
            </motion.div>

            {/* Micro-commitment */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="text-sm text-muted-foreground mt-4 flex items-center gap-2 justify-center lg:justify-start"
            >
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              Orçamento gratuito • Sem compromisso • Resposta em 24h
            </motion.p>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end order-first lg:order-last"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-20 blur-3xl" />
              
              <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72">
                <div className="absolute inset-0 rounded-3xl border-gradient p-1">
                  <div className="w-full h-full rounded-3xl bg-gradient-to-br from-muted to-background flex items-center justify-center overflow-hidden">
                    <img 
                      src={profileImage} 
                      alt="Gabriel Nunes - Desenvolvedor Web Profissional" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                <div className="absolute -top-2 -left-2 w-8 h-8 md:w-10 md:h-10 border-l-2 border-t-2 border-primary rounded-tl-lg" />
                <div className="absolute -top-2 -right-2 w-8 h-8 md:w-10 md:h-10 border-r-2 border-t-2 border-primary rounded-tr-lg" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 md:w-10 md:h-10 border-l-2 border-b-2 border-primary rounded-bl-lg" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 md:w-10 md:h-10 border-r-2 border-b-2 border-primary rounded-br-lg" />

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-2 -right-2 md:-top-3 md:-right-3 px-2 py-1 md:px-3 md:py-1.5 rounded-lg glass-strong text-[10px] md:text-xs font-bold border border-green-500/30"
                >
                  <span className="text-green-400">✓</span> Web Expert
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 px-2 py-1 md:px-3 md:py-1.5 rounded-lg glass-strong text-[10px] md:text-xs font-bold border border-primary/30"
                >
                  <span className="text-primary">⚡</span> Rápido
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default InicioTab;
