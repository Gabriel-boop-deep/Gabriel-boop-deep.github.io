import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Trophy, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Discorama Insights Hub",
    description: "Plataforma de análise de dados musicais com insights e visualizações interativas. Dashboard completo para descoberta de padrões.",
    tags: ["React", "TypeScript", "Data Viz"],
    link: "https://github.com/Nuono-Cyber/discorama-insights-hub",
    featured: true,
    result: "Data Analytics",
  },
  {
    title: "Velotech Bike Yourself",
    description: "Site profissional completo para loja de bicicletas. Design moderno, responsivo e otimizado para vendas. Resultado: aumento significativo na captação de clientes.",
    tags: ["React", "TypeScript", "Tailwind", "SEO"],
    link: "https://github.com/Nuono-Cyber/velotechbikeyourself",
    featured: true,
    result: "Case de Sucesso",
  },
  {
    title: "BANVIC Analytics",
    description: "Pipeline de dados completo com dbt e Modern Data Stack. Dashboards analíticos que transformam dados em decisões estratégicas.",
    tags: ["dbt", "SQL", "Python", "Analytics"],
    featured: false,
    result: "Data Driven",
  },
  {
    title: "Classificação CNN",
    description: "Modelo de Deep Learning para classificação de imagens usando TensorFlow. Alta precisão com arquitetura customizada.",
    tags: ["TensorFlow", "Python", "CNN", "AI"],
    featured: false,
    result: "Machine Learning",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4">
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
            className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
          >
            PORTFÓLIO
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projetos que <span className="text-gradient">geram resultados</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Não são apenas projetos — são soluções que resolvem problemas reais e geram valor.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8 }}
                className="block h-full"
              >
                <div className={`h-full glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden ${project.featured ? 'border-2 border-primary/30' : ''}`}>
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-primary text-[10px] font-bold text-primary-foreground">
                      <Trophy className="w-3 h-3" />
                      DESTAQUE
                    </div>
                  )}

                  {/* Result badge */}
                  <div className="absolute top-4 left-4 px-2 py-1 rounded-full bg-green-500/10 text-green-400 text-[10px] font-bold border border-green-500/30">
                    {project.result}
                  </div>

                  {/* Scan line effect */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_linear_infinite]" />

                  <div className="relative z-10 pt-8">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-6 h-6 text-primary-foreground" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2 group-hover:text-primary transition-colors">
                      {project.title}
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-5 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4" />
                      Ver projeto completo
                    </div>
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
