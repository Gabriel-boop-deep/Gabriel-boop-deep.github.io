import { motion } from "framer-motion";
import { Youtube, Trophy, Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section id="video" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
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
            Compartilhando conhecimento e experiências em desenvolvimento web e IA
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-[scan_3s_linear_infinite]" />

            <div className="relative rounded-2xl overflow-hidden glow-primary">
              <div className="aspect-video bg-muted">
                <iframe
                  src="https://www.youtube.com/embed/fGLR5h1n2Fk"
                  title="Gabriel Nunes - Desenvolvimento Web & IA"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold text-primary mb-2">
                Conheça Meu Trabalho
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Descubra como transformo ideias em sites profissionais que geram resultados.
              </p>
              <motion.a
                href="https://www.youtube.com/@GabrielNunes-rq1kl"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-primary rounded-full font-semibold text-primary-foreground text-sm"
              >
                <Youtube className="w-4 h-4" />
                Canal no YouTube
              </motion.a>
            </div>
          </motion.div>

          {/* Trophy Video - Velotech */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-3xl p-6 relative overflow-hidden border-2 border-yellow-500/30"
          >
            {/* Trophy badge */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 text-black text-xs font-bold">
              <Trophy className="w-4 h-4" />
              CASE DE SUCESSO
            </div>

            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent animate-[scan_3s_linear_infinite]" />

            <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: '0 0 40px rgba(234, 179, 8, 0.3)' }}>
              <div className="aspect-video bg-muted">
                <iframe
                  src="https://www.youtube.com/embed/V7wFONGVRew"
                  title="Velotech Bike Yourself - Case de Sucesso"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold mb-2">
                <span className="text-yellow-500">Velotech</span> Bike Yourself
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Site profissional para loja de bicicletas. Um projeto que representa excelência em design e funcionalidade.
              </p>
              <motion.a
                href="https://github.com/Nuono-Cyber/velotechbikeyourself"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full font-semibold text-black text-sm"
              >
                <Play className="w-4 h-4" />
                Ver Projeto Completo
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
