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
    description: "Pipeline de dados completo com dbt e Modern Data Stack. Dashboards analíticos para decisões estratégicas.",
    tags: ["dbt", "SQL", "Python", "Analytics"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    featured: false,
    result: "Data Driven",
  },
  {
    title: "Classificação CNN",
    description: "Modelo de Deep Learning para classificação de imagens usando TensorFlow com alta precisão.",
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
            {t("nav.portfolio")}
          </motion.span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t("portfolio.title")}
            <br />
            <span className="text-gradient">{t("portfolio.highlight")}</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {t("portfolio.subtitle")}
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all group"
            >
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-1 px-2.5 py-1 rounded-md bg-primary text-primary-foreground text-xs font-medium">
                <Star className="w-3 h-3 fill-current" />
                {t("portfolio.badge.featured")}
              </div>
              <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                {project.result}
              </div>

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.githubUrl && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="rounded-lg"
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

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <h2 className="text-xl font-bold mb-6 text-center">{t("portfolio.others")}</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.08 }}
              whileHover={{ y: -3 }}
              className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all group"
            >
              <div className="relative h-32 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/70 to-transparent" />
                <div className="absolute top-2 right-2 z-10 px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[10px] font-medium">
                  {project.result}
                </div>
              </div>

              <div className="p-4">
                <h4 className="font-bold mb-1 text-sm">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-xs line-clamp-2 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-muted text-muted-foreground text-[10px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center bg-card border border-border rounded-xl p-8 md:p-12 shadow-sm"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Precisa de um projeto <span className="text-primary">como esses</span>?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Vamos conversar sobre suas necessidades e criar uma solução personalizada para o seu negócio.
          </p>
          <Button
            onClick={() => onNavigate("contato")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg px-8 py-5"
          >
            Solicitar Proposta
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PortfolioTab;
