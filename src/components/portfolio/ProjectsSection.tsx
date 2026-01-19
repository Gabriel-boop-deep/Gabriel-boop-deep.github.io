import { motion } from "framer-motion";
import { ArrowUpRight, Database, Brain, BarChart3 } from "lucide-react";

const projects = [
  {
    icon: Database,
    title: "BANVIC Analytics Project",
    description: "Análise detalhada de dados empresariais utilizando Modern Data Stack. Implementação de pipeline ETL completo com dbt, transformações de dados e dashboards analíticos para tomada de decisão estratégica.",
    tags: ["dbt", "SQL", "Python", "Modern Data Stack"],
    link: "https://github.com/Gabriel-Nunes-dev/BANVIC_Analytics_Project",
    color: "primary",
  },
  {
    icon: Brain,
    title: "Classificação de Imagens CNN",
    description: "Modelo de Deep Learning para classificação de imagens usando Redes Neurais Convolucionais (CNN) com TensorFlow. Implementação de arquitetura customizada com técnicas de data augmentation e otimização de hiperparâmetros.",
    tags: ["TensorFlow", "Keras", "CNN", "Python"],
    link: "https://github.com/Gabriel-Nunes-dev/image_classification_cnn",
    color: "secondary",
  },
  {
    icon: BarChart3,
    title: "DBT BV Monitoring",
    description: "Sistema de monitoramento e validação de dados usando dbt (data build tool). Implementação de testes automatizados, documentação de dados e observabilidade de pipelines de dados para garantir qualidade e confiabilidade.",
    tags: ["dbt", "SQL", "Data Quality", "Testing"],
    link: "https://github.com/Gabriel-Nunes-dev/dbt_bv_monitoring",
    color: "accent",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Projetos</span> em Destaque
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções reais utilizando as melhores práticas de Data Engineering e AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                whileHover={{ y: -10 }}
                className="block h-full"
              >
                <div className="h-full glass rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Scan line effect */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_linear_infinite]" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="w-7 h-7 text-primary-foreground" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2 group-hover:text-primary transition-colors">
                      {project.title}
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-5 line-clamp-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
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
