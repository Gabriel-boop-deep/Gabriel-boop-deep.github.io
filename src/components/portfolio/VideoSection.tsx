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

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-5 relative overflow-hidden"
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

            <div className="mt-5 text-center">
              <h3 className="text-lg font-bold text-primary mb-2">
                Conheça Meu Trabalho
              </h3>
              <p className="text-muted-foreground text-xs mb-4">
                Descubra como transformo ideias em sites profissionais.
              </p>
              <motion.a
                href="https://www.youtube.com/@GabrielNunes-rq1kl"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary rounded-full font-semibold text-primary-foreground text-xs"
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
            className="glass rounded-3xl p-5 relative overflow-hidden border-2 border-yellow-500/30"
          >
            {/* Trophy badge */}
            <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 text-black text-[10px] font-bold">
              <Trophy className="w-3 h-3" />
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

            <div className="mt-5 text-center">
              <h3 className="text-lg font-bold mb-2">
                <span className="text-yellow-500">Velotech</span> Bike Yourself
              </h3>
              <p className="text-muted-foreground text-xs mb-4">
                Site profissional para loja de bicicletas.
              </p>
              <motion.a
                href="https://github.com/Nuono-Cyber/velotechbikeyourself"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full font-semibold text-black text-xs"
              >
                <Play className="w-4 h-4" />
                Ver Projeto
              </motion.a>
            </div>
          </motion.div>

          {/* Velotech Part 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass rounded-3xl p-5 relative overflow-hidden border-2 border-yellow-500/30"
          >
            {/* Continuation badge */}
            <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 text-black text-[10px] font-bold">
              <Play className="w-3 h-3" />
              PARTE 2
            </div>

            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-[scan_3s_linear_infinite]" />

            <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: '0 0 40px rgba(234, 179, 8, 0.25)' }}>
              <div className="aspect-video bg-muted">
                <iframe
                  src="https://www.youtube.com/embed/IE0kMwtyOfg"
                  title="Velotech Bike Yourself - Parte 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="mt-5 text-center">
              <h3 className="text-lg font-bold mb-2">
                <span className="text-amber-500">Velotech</span> Continuação
              </h3>
              <p className="text-muted-foreground text-xs mb-4">
                Desenvolvimento e finalização do projeto.
              </p>
              <motion.a
                href="https://youtu.be/IE0kMwtyOfg"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full font-semibold text-black text-xs"
              >
                <Youtube className="w-4 h-4" />
                Assistir Parte 2
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
