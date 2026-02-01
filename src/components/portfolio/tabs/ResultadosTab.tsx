import { motion } from "framer-motion";
import { Star, Quote, TrendingUp, Users, Award, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const results = [
  { metric: "20+", label: "Projetos Entregues", icon: Award },
  { metric: "100%", label: "Taxa de Satisfação", icon: Star },
  { metric: "50%", label: "Aumento Médio em Vendas", icon: TrendingUp },
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
            className="inline-block px-4 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-semibold mb-4"
          >
            RESULTADOS COMPROVADOS
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Números que
            <br />
            <span className="text-gradient">falam por si</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Não vendo promessas. Entrego resultados mensuráveis que impactam diretamente o seu negócio.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {results.map((result, index) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-6 text-center group hover:border-primary/50 transition-all"
            >
              <result.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            O que dizem sobre <span className="text-primary">meu trabalho</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 relative overflow-hidden group"
            >
              {/* Badges */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <span className="px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-500 text-xs font-bold">
                  {testimonial.highlight}
                </span>
                <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold">
                  {testimonial.result}
                </span>
              </div>

              <Quote className="w-10 h-10 text-primary/20 mb-4" />

              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-8"
        >
          <h3 className="text-xl font-bold mb-6">
            Tecnologias que <span className="text-gradient">domino</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 rounded-full glass border border-primary/20 hover:border-primary/50 transition-all"
              >
                <span className="text-sm font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center glass rounded-3xl p-8 md:p-12 mt-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para ser o <span className="text-gradient">próximo case de sucesso</span>?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Seu projeto pode ser o próximo a gerar resultados reais. Vamos conversar?
          </p>
          <Button
            onClick={() => onNavigate("contato")}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-bold rounded-full px-8 py-6 text-base glow-primary"
          >
            QUERO RESULTADOS ASSIM
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ResultadosTab;
