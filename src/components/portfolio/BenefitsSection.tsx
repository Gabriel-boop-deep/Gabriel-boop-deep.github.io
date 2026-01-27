import { motion } from "framer-motion";
import { TrendingUp, Smartphone, Zap, Shield, HeadphonesIcon, Search } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Site que Converte",
    description: "Design estratégico focado em transformar visitantes em clientes pagantes. Cada elemento pensado para gerar vendas.",
    highlight: "Mais vendas",
  },
  {
    icon: Smartphone,
    title: "100% Responsivo",
    description: "Perfeito em qualquer dispositivo — celular, tablet ou computador. Seus clientes acessam de onde quiserem.",
    highlight: "Todos os dispositivos",
  },
  {
    icon: Zap,
    title: "Ultra Rápido",
    description: "Carregamento em menos de 3 segundos. Sites lentos perdem 40% dos visitantes — o seu não vai perder.",
    highlight: "Loading < 3s",
  },
  {
    icon: Search,
    title: "Otimizado para Google",
    description: "SEO básico incluído para seu site aparecer nas buscas. Mais visibilidade = mais clientes.",
    highlight: "SEO incluído",
  },
  {
    icon: Shield,
    title: "Seguro e Confiável",
    description: "Certificado SSL, código limpo e hospedagem de qualidade. Seu site protegido e sempre no ar.",
    highlight: "SSL + Hosting",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Dedicado",
    description: "Não te abandono após a entrega. Suporte por 30 dias para ajustes e dúvidas incluído.",
    highlight: "30 dias grátis",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
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
            POR QUE ME ESCOLHER?
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Não é só um site. É uma
            <br />
            <span className="text-gradient">máquina de vendas.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Enquanto outros fazem sites "bonitinhos", eu crio ferramentas que geram resultado real para o seu negócio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-2xl p-6 relative overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              {/* Highlight badge */}
              <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                {benefit.highlight}
              </div>
              
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
