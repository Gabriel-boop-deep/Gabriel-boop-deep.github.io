import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import profileImage from "@/assets/profile.jpeg";
import VideoSection from "@/components/portfolio/VideoSection";

interface InicioTabProps {
  onNavigate: (tab: string) => void;
}

const InicioTab = ({ onNavigate }: InicioTabProps) => {
  const { t } = useLanguage();
  
  const urgencyPoints = [
    { icon: CheckCircle2, textKey: "hero.point1" },
    { icon: CheckCircle2, textKey: "hero.point2" },
    { icon: CheckCircle2, textKey: "hero.point3" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center pt-32 pb-12 relative"
    >
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/20 mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-primary">{t("hero.available")}</span>
            </motion.div>

            {/* Name and title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mb-5"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Gabriel Nunes
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mt-1">{t("hero.title")}</p>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight"
            >
              {t("hero.headline1")}
              <br />
              <span className="text-gradient">{t("hero.headline2")}</span>
              <br />
              <span className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-normal">
                {t("hero.headline3")}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-sm md:text-base lg:text-lg text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {t("hero.description")}
            </motion.p>

            {/* Points */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-col gap-2.5 mb-7"
            >
              {urgencyPoints.map((point, index) => (
                <motion.div
                  key={point.textKey}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <point.icon className="w-4.5 h-4.5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium text-sm">{t(point.textKey)}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center lg:justify-start gap-8 mb-8"
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
                  transition={{ delay: 0.75 + index * 0.08 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <stat.icon className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xl md:text-2xl font-bold text-foreground">
                      {stat.number}
                    </span>
                  </div>
                  <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">
                    {t(stat.labelKey)}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Button
                onClick={() => onNavigate("contato")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg px-6 py-5 text-sm md:text-base shadow-md"
              >
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => onNavigate("portfolio")}
                variant="outline"
                size="lg"
                className="rounded-lg px-6 py-5 border-border hover:border-primary/50 hover:bg-primary/5 font-medium text-sm md:text-base"
              >
                {t("hero.results")}
              </Button>
            </motion.div>

            {/* Commitment */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-sm text-muted-foreground mt-4 flex items-center gap-2 justify-center lg:justify-start"
            >
              <CheckCircle2 className="w-4 h-4 text-primary" />
              {t("hero.commitment")}
            </motion.p>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end order-first lg:order-last"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-primary/5 blur-3xl" />
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px]">
                <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-border shadow-lg">
                  <img 
                    src={profileImage} 
                    alt="Gabriel Nunes - Desenvolvedor Web Profissional" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Floating badges - subtle */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-3 -right-3 md:-top-4 md:-right-4 px-3 py-1.5 rounded-lg bg-card border border-border shadow-md text-xs font-medium"
                >
                  <span className="text-primary">✓</span> {t("hero.webExpert")}
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 px-3 py-1.5 rounded-lg bg-card border border-border shadow-md text-xs font-medium"
                >
                  <span className="text-primary">⚡</span> {t("hero.fast")}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Video Section */}
        <VideoSection />
      </div>
    </motion.div>
  );
};

export default InicioTab;
