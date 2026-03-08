import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, TrendingUp, Shield, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import profileImage from "@/assets/profile.jpeg";
import VideoSection from "@/components/portfolio/VideoSection";

interface InicioTabProps {
  onNavigate: (tab: string) => void;
}

const InicioTab = ({ onNavigate }: InicioTabProps) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-12"
    >
      {/* Hero — Full width centered */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-primary">{t("hero.available")}</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight"
            >
              {t("hero.headline1")}
              <br />
              <span className="text-gradient">{t("hero.headline2")}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              {t("hero.description")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Button
                onClick={() => onNavigate("contato")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg px-8 py-6 text-base shadow-md"
              >
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => onNavigate("portfolio")}
                variant="outline"
                size="lg"
                className="rounded-lg px-8 py-6 border-border hover:border-primary/50 hover:bg-primary/5 font-medium text-base"
              >
                {t("hero.results")}
              </Button>
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {[
              { number: "20+", labelKey: "hero.projects", icon: TrendingUp },
              { number: "100%", labelKey: "hero.satisfaction", icon: CheckCircle2 },
              { number: "7d", labelKey: "hero.delivery", icon: Clock },
            ].map((stat, index) => (
              <motion.div
                key={stat.labelKey}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex flex-col items-center p-5 rounded-xl bg-card/50 border border-border/50"
              >
                <stat.icon className="w-5 h-5 text-primary mb-2" />
                <span className="text-2xl md:text-3xl font-bold text-foreground">
                  {stat.number}
                </span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                  {t(stat.labelKey)}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About strip — profile + points */}
      <section className="border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            {/* Profile */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-4 flex justify-center"
            >
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-border shadow-lg">
                <img
                  src={profileImage}
                  alt="Gabriel Nunes - Desenvolvedor Web Profissional"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Gabriel Nunes
              </h2>
              <p className="text-muted-foreground mb-6">{t("hero.title")}</p>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: Target, textKey: "hero.point1" },
                  { icon: Zap, textKey: "hero.point2" },
                  { icon: Shield, textKey: "hero.point3" },
                ].map((point, i) => (
                  <div
                    key={point.textKey}
                    className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-border/50"
                  >
                    <point.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">{t(point.textKey)}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground mt-6 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {t("hero.commitment")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
          <VideoSection />
        </div>
      </section>
    </motion.div>
  );
};

export default InicioTab;
