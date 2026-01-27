import { motion } from "framer-motion";
import { Star, Quote, TrendingUp, Users, Award } from "lucide-react";

const results = [
  {
    metric: "20+",
    label: "Projetos Entregues",
    icon: Award,
  },
  {
    metric: "100%",
    label: "Taxa de Satisfação",
    icon: Star,
  },
  {
    metric: "50%",
    label: "Aumento Médio em Vendas",
    icon: TrendingUp,
  },
  {
    metric: "7 dias",
    label: "Tempo Médio de Entrega",
    icon: Users,
  },
];

const testimonials = [
  {
    name: "Velotech Bike Yourself",
    role: "Loja de Bicicletas",
    content: "Site profissional completo que elevou nossa presença digital. Design moderno, responsivo e otimizado para vendas. Resultado: aumento significativo nas consultas de clientes.",
    rating: 5,
    highlight: "Case de Sucesso",
  },
  {
    name: "Empresa Data Analytics",
    role: "Análise de Dados",
    content: "Desenvolvimento de dashboards e pipelines de dados que transformaram nossa tomada de decisão. Profissional dedicado e entregas dentro do prazo.",
    rating: 5,
    highlight: "Entrega Rápida",
  },
  {
    name: "Startup de IA",
    role: "Tecnologia",
    content: "Implementação de modelos de machine learning para classificação de imagens. Conhecimento técnico impressionante e comunicação clara durante todo o projeto.",
    rating: 5,
    highlight: "Expertise Técnica",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="resultados" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Results stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-semibold mb-4"
          >
            RESULTADOS COMPROVADOS
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Números que <span className="text-gradient">falam por si</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {results.map((result, index) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center group hover:border-primary/50 transition-all"
            >
              <result.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold">
            O que dizem sobre <span className="text-primary">meu trabalho</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 relative overflow-hidden group"
            >
              {/* Highlight badge */}
              <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-500 text-xs font-bold">
                {testimonial.highlight}
              </div>
              
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              {/* Content */}
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
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
