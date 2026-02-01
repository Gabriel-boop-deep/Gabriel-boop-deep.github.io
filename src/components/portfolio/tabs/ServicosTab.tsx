import { motion } from "framer-motion";
import { TrendingUp, Smartphone, Zap, Shield, HeadphonesIcon, Search, Code, Palette, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code,
    title: "Desenvolvimento Web",
    description: "Sites profissionais, landing pages e e-commerces com código limpo, otimizado e pronto para escalar.",
    features: ["React/Next.js", "Performance A+", "SEO Otimizado"],
    highlight: "Mais Popular",
    popular: true,
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Interfaces modernas e intuitivas focadas em conversão. Design que não só impressiona, mas vende.",
    features: ["Figma/Design System", "Responsivo", "User Testing"],
    highlight: "Design Premium",
    popular: false,
  },
  {
    icon: Rocket,
    title: "Automação & IA",
    description: "Integração de chatbots, automações e soluções de IA para otimizar processos e atendimento.",
    features: ["Chatbots IA", "Automações", "APIs"],
    highlight: "Inovação",
    popular: false,
  },
];

const benefits = [
  { icon: TrendingUp, title: "Site que Converte", description: "Design estratégico focado em vendas" },
  { icon: Smartphone, title: "100% Responsivo", description: "Perfeito em qualquer dispositivo" },
  { icon: Zap, title: "Ultra Rápido", description: "Carregamento em menos de 3 segundos" },
  { icon: Search, title: "SEO Incluído", description: "Apareça nas buscas do Google" },
  { icon: Shield, title: "Seguro", description: "SSL + hospedagem de qualidade" },
  { icon: HeadphonesIcon, title: "Suporte 30 dias", description: "Não te abandono após entrega" },
];

interface ServicosTabProps {
  onNavigate: (tab: string) => void;
}

const ServicosTab = ({ onNavigate }: ServicosTabProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
          >
            MEUS SERVIÇOS
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Soluções que fazem seu
            <br />
            <span className="text-gradient">negócio crescer</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Não vendo apenas sites. Entrego ferramentas de vendas personalizadas para cada tipo de negócio.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`glass rounded-3xl p-8 relative overflow-hidden group transition-all duration-300 ${
                service.popular ? "border-2 border-primary/50 ring-2 ring-primary/20" : "hover:border-primary/30"
              }`}
            >
              {/* Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                service.popular 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground"
              }`}>
                {service.highlight}
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => onNavigate("contato")}
                  variant={service.popular ? "default" : "outline"}
                  className={`w-full rounded-full ${
                    service.popular 
                      ? "bg-gradient-primary hover:opacity-90 text-primary-foreground" 
                      : "border-primary/50 hover:border-primary hover:bg-primary/10"
                  }`}
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            O que está <span className="text-gradient">incluso</span>
          </h2>
          <p className="text-muted-foreground">Em todos os projetos que entrego</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="glass rounded-2xl p-4 text-center group hover:border-primary/50 transition-all"
            >
              <benefit.icon className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-sm mb-1">{benefit.title}</h4>
              <p className="text-xs text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServicosTab;
