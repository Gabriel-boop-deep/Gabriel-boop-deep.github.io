import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpeg";

const urgencyPoints = [
  { icon: CheckCircle2, text: "Sites que vendem de verdade" },
  { icon: CheckCircle2, text: "Entrega em até 7 dias" },
  { icon: CheckCircle2, text: "Suporte pós-entrega" },
];

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-12 relative overflow-hidden">
      {/* Urgency banner */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="absolute top-16 left-0 right-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-gradient py-2 z-40"
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2 text-primary-foreground font-semibold text-sm">
          <Zap className="w-4 h-4" />
          <span>🔥 VAGAS LIMITADAS — Apenas 3 projetos por mês para garantir qualidade máxima</span>
          <Zap className="w-4 h-4" />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 w-full pt-10">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-green-500/50 mb-6"
            >
              <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-green-400">✓ 1 vaga disponível este mês</span>
            </motion.div>

            {/* Main headline - Problem + Solution */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Seu negócio merece um
              <br />
              <span className="text-gradient">site que vende.</span>
              <br />
              <span className="text-2xl md:text-3xl text-muted-foreground font-normal">
                Não apenas um que "existe".
              </span>
            </motion.h1>

            {/* Value proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Crio <span className="text-primary font-semibold">sites profissionais</span> que transformam 
              visitantes em clientes pagantes. Design moderno, rápido, otimizado para 
              <span className="text-secondary font-semibold"> converter e vender</span> — não apenas para "ficar bonito".
            </motion.p>

            {/* Urgency points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col gap-3 mb-8"
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

            {/* Stats with social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex justify-center lg:justify-start gap-6 md:gap-10 mb-10"
            >
              {[
                { number: "20+", label: "Projetos Entregues", icon: TrendingUp },
                { number: "100%", label: "Clientes Satisfeitos", icon: CheckCircle2 },
                { number: "7 dias", label: "Entrega Rápida", icon: Clock },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, type: "spring" }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <stat.icon className="w-4 h-4 text-primary" />
                    <span className="text-2xl md:text-3xl font-bold text-gradient">
                      {stat.number}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons - Main conversion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-bold rounded-full px-8 py-6 text-lg glow-primary animate-pulse-glow"
              >
                <a href="#contato">
                  QUERO MEU SITE AGORA
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 border-primary/50 hover:border-primary hover:bg-primary/10 font-semibold"
              >
                <a href="#projetos">
                  Ver Resultados Reais
                </a>
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

          {/* Profile Image with trust elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-30 blur-3xl animate-pulse" />
              
              {/* Main frame */}
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-3xl border-gradient p-1">
                  <div className="w-full h-full rounded-3xl bg-gradient-to-br from-muted to-background flex items-center justify-center overflow-hidden">
                    <img 
                      src={profileImage} 
                      alt="Gabriel Nunes - Desenvolvedor Web Profissional" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 border-primary rounded-tl-lg" />
                <div className="absolute -top-3 -right-3 w-12 h-12 border-r-2 border-t-2 border-primary rounded-tr-lg" />
                <div className="absolute -bottom-3 -left-3 w-12 h-12 border-l-2 border-b-2 border-primary rounded-bl-lg" />
                <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-2 border-b-2 border-primary rounded-br-lg" />

                {/* Floating badge - Results */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 px-4 py-2 rounded-xl glass-strong text-sm font-bold border border-green-500/30"
                >
                  <span className="text-green-400">✓</span> Especialista Web
                </motion.div>
                
                {/* Floating badge - Trust */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl glass-strong text-sm font-bold border border-primary/30"
                >
                  <span className="text-primary">⚡</span> Entrega Rápida
                </motion.div>
              </div>

              {/* Name tag */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center"
              >
                <h2 className="text-xl font-bold text-gradient">Gabriel Nunes</h2>
                <p className="text-sm text-muted-foreground">Web Developer & AI Specialist</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
