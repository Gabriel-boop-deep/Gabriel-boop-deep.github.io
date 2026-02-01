import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Velotech Bike Yourself",
    description: "Loja virtual completa para bicicletas com catálogo de produtos, sistema de contato e design focado em conversão.",
    tags: ["React", "Tailwind CSS", "SEO"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    liveUrl: "#",
    featured: true,
    result: "+150% em leads",
  },
  {
    title: "Dashboard Analytics",
    description: "Plataforma de visualização de dados com gráficos interativos e relatórios automatizados em tempo real.",
    tags: ["TypeScript", "Recharts", "Supabase"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    liveUrl: "#",
    featured: true,
    result: "Análise em tempo real",
  },
  {
    title: "Sistema de Agendamento",
    description: "Aplicação para gestão de agendamentos com calendário integrado, notificações e painel administrativo.",
    tags: ["Next.js", "PostgreSQL", "Auth"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600",
    liveUrl: "#",
    featured: false,
    result: "-70% no-shows",
  },
  {
    title: "E-commerce Moda",
    description: "Loja online com carrinho de compras, pagamentos integrados e gestão de estoque automatizada.",
    tags: ["React", "Stripe", "Node.js"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600",
    liveUrl: "#",
    featured: false,
    result: "+200% vendas",
  },
  {
    title: "Portal Imobiliário",
    description: "Plataforma de busca de imóveis com filtros avançados, mapas interativos e sistema de favoritos.",
    tags: ["React", "Maps API", "MongoDB"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600",
    liveUrl: "#",
    featured: false,
    result: "+80% conversão",
  },
  {
    title: "App de Delivery",
    description: "Aplicativo de pedidos com rastreamento em tempo real, pagamentos e sistema de avaliações.",
    tags: ["React Native", "Firebase", "Stripe"],
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600",
    liveUrl: "#",
    featured: false,
    result: "5k+ downloads",
  },
];

interface PortfolioTabProps {
  onNavigate: (tab: string) => void;
}

const PortfolioTab = ({ onNavigate }: PortfolioTabProps) => {
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
            MEU PORTFÓLIO
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Projetos que
            <br />
            <span className="text-gradient">geram resultados</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada projeto é desenvolvido com foco em performance, conversão e resultados reais para o cliente.
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
                Destaque
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
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full border-primary/50 hover:border-primary hover:bg-primary/10"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Projeto
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-2xl overflow-hidden group"
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
