import { motion } from "framer-motion";
import { Play, Youtube } from "lucide-react";

const VideoSection = () => {
  return (
    <section id="video" className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Conteúdo em <span className="text-gradient">Vídeo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Compartilhando conhecimento e experiências em IA e Data Science
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-6 md:p-8 relative overflow-hidden"
        >
          {/* Animated border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-[scan_3s_linear_infinite]" />

          {/* Video wrapper */}
          <div className="relative rounded-2xl overflow-hidden glow-primary">
            <div className="aspect-video bg-muted">
              <iframe
                src="https://www.youtube.com/embed/uxL5kWGFRcE"
                title="Gabriel Nunes - AI & Data Science"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Video info */}
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Explorando IA e Data Science
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Neste vídeo, compartilho insights sobre Inteligência Artificial, 
              Machine Learning e as melhores práticas em Engenharia de Dados.
            </p>
            <motion.a
              href="https://www.youtube.com/@GabrielNunes-rq1kl"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary rounded-full font-semibold text-primary-foreground"
            >
              <Youtube className="w-5 h-5" />
              Assista no YouTube
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
