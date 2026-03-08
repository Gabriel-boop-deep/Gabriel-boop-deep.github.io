import { motion } from "framer-motion";
import { Youtube, Play, Trophy, Rocket, Monitor, Video } from "lucide-react";

const videos = [
  {
    title: "Seu Próximo Nível",
    subtitle: "Não vem do treino",
    embedUrl: "https://www.youtube.com/embed/bvRoZgPVwdM",
    icon: Rocket,
  },
  {
    title: "Conheça o FinDash",
    subtitle: "Dashboard Financeiro",
    embedUrl: "https://www.youtube.com/embed/_06h9hCnJq8",
    icon: Monitor,
  },
  {
    title: "O GABTUBE",
    subtitle: "Plataforma de Vídeos",
    embedUrl: "https://www.youtube.com/embed/2HLG1LC1-ik",
    icon: Video,
  },
  {
    title: "Conheça Meu Trabalho",
    subtitle: "Desenvolvimento Web & IA",
    embedUrl: "https://www.youtube.com/embed/fGLR5h1n2Fk",
    icon: Play,
  },
  {
    title: "Velotech Bike Yourself",
    subtitle: "Case de Sucesso",
    embedUrl: "https://www.youtube.com/embed/V7wFONGVRew",
    icon: Trophy,
    badge: "CASE",
  },
  {
    title: "Velotech Continuação",
    subtitle: "Parte 2 do Projeto",
    embedUrl: "https://www.youtube.com/embed/IE0kMwtyOfg",
    icon: Play,
    badge: "PARTE 2",
  },
];

const VideoSection = () => {
  return (
    <section id="video" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Conteúdo em <span className="text-primary">Vídeo</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Compartilhando conhecimento sobre desenvolvimento web e inteligência artificial
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {videos.slice(0, 3).map((video, index) => (
            <motion.div
              key={video.embedUrl}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-4 relative overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              {video.badge && (
                <div className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded-md bg-primary text-primary-foreground text-[10px] font-medium">
                  {video.badge}
                </div>
              )}

              <div className="relative rounded-lg overflow-hidden">
                <div className="aspect-video bg-muted">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>

              <div className="mt-3 text-center">
                <h3 className="text-sm font-bold mb-0.5">{video.title}</h3>
                <p className="text-muted-foreground text-xs">{video.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.slice(3).map((video, index) => (
            <motion.div
              key={video.embedUrl}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-4 relative overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              {video.badge && (
                <div className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded-md bg-primary text-primary-foreground text-[10px] font-medium">
                  {video.badge}
                </div>
              )}

              <div className="relative rounded-lg overflow-hidden">
                <div className="aspect-video bg-muted">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>

              <div className="mt-3 text-center">
                <h3 className="text-sm font-bold mb-0.5">{video.title}</h3>
                <p className="text-muted-foreground text-xs">{video.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* YouTube CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mt-10"
        >
          <motion.a
            href="https://www.youtube.com/@IdeIA-f7l5i"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 rounded-lg font-medium text-primary-foreground text-sm transition-all"
          >
            <Youtube className="w-4 h-4" />
            Ver Canal no YouTube
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
