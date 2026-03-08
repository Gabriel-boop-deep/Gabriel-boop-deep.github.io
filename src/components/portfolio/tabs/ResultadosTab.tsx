import { motion } from "framer-motion";
import { Star, Quote, TrendingUp, Users, Award, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const results = [
  { metric: "20+", label: "Projetos Entregues", icon: Award },
  { metric: "100%", label: "Taxa de Satisfação", icon: Star },
  { metric: "50%", label: "Aumento Médio em Conversão", icon: TrendingUp },
  { metric: "7 dias", label: "Tempo Médio de Entrega", icon: Clock },
];

const testimonials = [
  {
    name: "Velotech Bike Yourself",
    role: "Loja de Bicicletas",
    content: "Site profissional completo que elevou nossa presença digital. Design moderno, responsivo e otimizado para vendas. Resultado: aumento significativo nas consultas de clientes.",
    rating: 5,
    highlight: "Case de Sucesso",
    result: "+150% leads",
  },
  {
    name: "Empresa Data Analytics",
    role: "Análise de Dados",
    content: "Desenvolvimento de dashboards e pipelines de dados que transformaram nossa tomada de decisão. Profissional dedicado e entregas dentro do prazo.",
    rating: 5,
    highlight: "Entrega Rápida",
    result: "100% no prazo",
  },
  {
    name: "Startup de IA",
    role: "Tecnologia",
    content: "Implementação de modelos de machine learning para classificação de imagens. Conhecimento técnico impressionante e comunicação clara durante todo o projeto.",
    rating: 5,
    highlight: "Expertise Técnica",
    result: "95% precisão",
  },
];

const technologies = [
  "React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "Python", "TensorFlow", "PostgreSQL"
];

interface ResultadosTabProps {
  onNavigate: (tab: string) => void;
}

const ResultadosTab = ({ onNavigate }: ResultadosTabProps) => {
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
            Resultados
          </motion.span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Resultados que
            <br />
            <span className="text-gradient">comprovam qualidade</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Métricas reais de projetos entregues que demonstram o impacto do trabalho profissional.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {results.map((result, index) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 text-center shadow-sm"
            >
              <result.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                {result.metric}
              </div>
              <div className="text-sm text-muted-foreground">
                {result.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            Depoimentos de <span className="text-primary">clientes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 shadow-sm"
            >
              {/* Badges */}
              <div className="flex gap-2 mb-4">
                <span className="px-2 py-1 rounded-md bg-primary/8 text-primary text-xs font-medium">
                  {testimonial.highlight}
                </span>
                <span className="px-2 py-1 rounded-md bg-primary/8 text-primary text-xs font-medium">
                  {testimonial.result}
                </span>
              </div>

              <Quote className="w-8 h-8 text-primary/15 mb-3" />

              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-8"
        >
          <h3 className="text-xl font-bold mb-6">
            Stack <span className="text-primary">tecnológico</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: 0.5 + index * 0.04 }}
                className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium shadow-sm"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center bg-card border border-border rounded-xl p-8 md:p-12 mt-16 shadow-sm"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Pronto para o <span className="text-primary">próximo nível</span>?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Seu projeto pode alcançar resultados semelhantes. Vamos conversar sobre como posso ajudar.
          </p>
          <Button
            onClick={() => onNavigate("contato")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg px-8 py-5"
          >
            Iniciar Conversa
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ResultadosTab;
