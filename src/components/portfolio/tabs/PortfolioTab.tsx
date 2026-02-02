import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Star, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  {
    title: "Discorama Insights Hub",
    description: "Plataforma de análise de dados musicais com insights e visualizações interativas. Dashboard completo para descoberta de padrões.",
    tags: ["React", "TypeScript", "Data Viz"],
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600",
    githubUrl: "https://github.com/Nuono-Cyber/discorama-insights-hub",
    featured: true,
    result: "Data Analytics",
  },
  {
    title: "Velotech Bike Yourself",
    description: "Loja virtual completa para bicicletas com catálogo de produtos, sistema de contato e design focado em conversão.",
    tags: ["React", "Tailwind CSS", "SEO"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    githubUrl: "https://github.com/Nuono-Cyber/velotechbikeyourself",
    featured: true,
    result: "+150% leads",
  },
  {
    title: "BANVIC Analytics",
    description: "Pipeline de dados completo com dbt e Modern Data Stack. Dashboards analíticos que transformam dados em decisões estratégicas.",
    tags: ["dbt", "SQL", "Python", "Analytics"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    featured: false,
    result: "Data Driven",
  },
  {
    title: "Classificação CNN",
    description: "Modelo de Deep Learning para classificação de imagens usando TensorFlow. Alta precisão com arquitetura customizada.",
    tags: ["TensorFlow", "Python", "CNN", "AI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
    featured: false,
    result: "Machine Learning",
  },
  {
    title: "Academy DBT",
    description: "Projeto educacional de Data Engineering com testes automatizados e documentação profissional.",
    tags: ["dbt", "SQL", "Data Quality"],
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600",
    featured: false,
    result: "Data Engineering",
  },
  {
    title: "Sistema de Agendamento",
    description: "Aplicação para gestão de agendamentos com calendário integrado, notificações e painel administrativo.",
    tags: ["Next.js", "PostgreSQL", "Auth"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600",
    featured: false,
    result: "-70% no-shows",
  },
];

interface PortfolioTabProps {
  onNavigate: (tab: string) => void;
}

const PortfolioTab = ({ onNavigate }: PortfolioTabProps) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-36 md:pt-32 pb-12"
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
            {t("nav.portfolio").toUpperCase()}
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("portfolio.title")}
            <br />
            <span className="text-gradient">{t("portfolio.highlight")}</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("portfolio.subtitle")}
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="glass rounded-3xl overflow-hidden group relative"
            >
              {/* Featured badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                <Star className="w-3 h-3 fill-current" />
                {t("portfolio.badge.featured")}
              </div>

              {/* Result badge */}
              <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold border border-green-500/30">
                {project.result}
              </div>

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="rounded-full border-primary/50 hover:border-primary hover:bg-primary/10"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        {t("portfolio.view")}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">{t("portfolio.others")}</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-2xl overflow-hidden group relative"
            >
              {/* Result badge */}
              <div className="absolute top-2 right-2 z-10 px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-[10px] font-bold">
                {project.result}
              </div>

              <div className="relative h-36 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              <div className="p-4">
                <h4 className="font-bold mb-1 group-hover:text-primary transition-colors text-sm">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-xs line-clamp-2 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-[10px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center glass rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Quer um projeto assim para <span className="text-gradient">seu negócio</span>?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Vamos conversar sobre suas necessidades e criar algo único que realmente gere resultados.
          </p>
          <Button
            onClick={() => onNavigate("contato")}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-bold rounded-full px-8 py-6 text-base glow-primary"
          >
            QUERO MEU PROJETO
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PortfolioTab;
