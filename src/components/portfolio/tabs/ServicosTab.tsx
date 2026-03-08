import { motion } from "framer-motion";
import { TrendingUp, Smartphone, Zap, Shield, HeadphonesIcon, Search, Code, Palette, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code,
    title: "Desenvolvimento Web",
    description: "Sites profissionais, landing pages e aplicações web com tecnologias modernas e código de alta qualidade.",
    features: ["React / Next.js", "Performance otimizada", "SEO técnico"],
    highlight: "Mais Popular",
    popular: true,
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Interfaces elegantes e funcionais, projetadas com foco na experiência do usuário e na conversão.",
    features: ["Design System", "Responsivo", "Testes de usabilidade"],
    highlight: "Design Premium",
    popular: false,
  },
  {
    icon: Rocket,
    title: "Automação & IA",
    description: "Soluções inteligentes com chatbots, automações de processos e integração de inteligência artificial.",
    features: ["Chatbots IA", "Automações", "Integrações API"],
    highlight: "Inovação",
    popular: false,
  },
];

const benefits = [
  { icon: TrendingUp, title: "Alta Conversão", description: "Design estratégico focado em resultados" },
  { icon: Smartphone, title: "100% Responsivo", description: "Perfeito em qualquer dispositivo" },
  { icon: Zap, title: "Alta Performance", description: "Carregamento otimizado e rápido" },
  { icon: Search, title: "SEO Incluído", description: "Visibilidade nos mecanismos de busca" },
  { icon: Shield, title: "Segurança", description: "SSL e boas práticas de segurança" },
  { icon: HeadphonesIcon, title: "Suporte", description: "30 dias de suporte pós-entrega" },
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
      className="min-h-screen pt-28 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-3 py-1 rounded-md bg-primary/8 text-primary text-xs font-semibold tracking-wider uppercase mb-4"
          >
            Serviços
          </motion.span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Soluções digitais para
            <br />
            <span className="text-gradient">impulsionar seu negócio</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Desenvolvimento web profissional com foco em resultados mensuráveis e experiências digitais de alto impacto.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`bg-card rounded-xl p-7 relative overflow-hidden border transition-all duration-300 shadow-sm hover:shadow-md ${
                service.popular ? "border-primary/40 ring-1 ring-primary/20" : "border-border hover:border-primary/30"
              }`}
            >
              {/* Badge */}
              <div className={`absolute top-4 right-4 px-2.5 py-1 rounded-md text-xs font-medium ${
                service.popular 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground"
              }`}>
                {service.highlight}
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
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
                  className={`w-full rounded-lg ${
                    service.popular 
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                      : "border-border hover:border-primary/50 hover:bg-primary/5"
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            O que está <span className="text-primary">incluído</span>
          </h2>
          <p className="text-muted-foreground">Em todos os projetos</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
              whileHover={{ y: -2 }}
              className="bg-card border border-border rounded-xl p-4 text-center shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <benefit.icon className="w-7 h-7 text-primary mx-auto mb-2" />
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
