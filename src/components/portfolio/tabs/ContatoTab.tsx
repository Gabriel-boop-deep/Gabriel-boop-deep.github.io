import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, Youtube, ArrowRight, CheckCircle2, Clock, Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const ContatoTab = () => {
  const { t } = useLanguage();
  
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/gabriel-nunes-barbosa-nogueira/",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/Gabriel-boop-deep",
      label: "GitHub",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@IdeIA-f7l5i",
      label: "YouTube",
    },
  ];

  const guarantees = [
    { icon: Clock, textKey: "contact.guarantee1" },
    { icon: Shield, textKey: "contact.guarantee2" },
    { icon: CheckCircle2, textKey: "contact.guarantee3" },
  ];

  const faqs = [
    { qKey: "contact.faq1.q", aKey: "contact.faq1.a" },
    { qKey: "contact.faq2.q", aKey: "contact.faq2.a" },
    { qKey: "contact.faq3.q", aKey: "contact.faq3.a" },
  ];
  
  const phoneNumber = "5571999428340";
  const whatsappMessage = encodeURIComponent(t("whatsapp.message"));
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-28 pb-12"
    >
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-xl p-8 md:p-12 relative overflow-hidden shadow-sm"
        >
          <div className="relative z-10">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex justify-center mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/8 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-primary text-sm font-medium">{t("contact.available")}</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {t("contact.headline1")}
                <br />
                <span className="text-gradient">{t("contact.headline2")}</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                {t("contact.description")}
                <span className="text-primary font-medium"> {t("contact.noCommitment")}</span>
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 justify-center mb-8"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg px-8 py-6 text-base shadow-md"
              >
                <a href="mailto:gabrielnbn@hotmail.com?subject=Orçamento%20-%20Desenvolvimento%20Web&body=Olá%20Gabriel%2C%0A%0AVisitei%20seu%20portfólio%20e%20gostaria%20de%20um%20orçamento%20para%3A%0A%0A%5BDescreva%20seu%20projeto%20aqui%5D%0A%0AAtenciosamente%2C%0A%5BSeu%20nome%5D">
                  <Mail className="mr-2 h-5 w-5" />
                  {t("contact.cta")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-semibold rounded-lg px-8 py-6 text-base border-border hover:border-primary/50 hover:bg-primary/5"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </motion.div>

            {/* Guarantees */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6 mb-10"
            >
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <guarantee.icon className="w-4 h-4 text-primary" />
                  <span>{t(guarantee.textKey)}</span>
                </div>
              ))}
            </motion.div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-border" />
              <span className="text-muted-foreground text-sm">{t("contact.connect")}</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-3 flex-wrap mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + index * 0.05 }}
                  whileHover={{ y: -2 }}
                  className="w-12 h-12 rounded-lg bg-muted border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center space-y-2"
            >
              <a
                href="mailto:gabrielnbn@hotmail.com"
                className="flex items-center justify-center gap-2 text-primary hover:text-foreground transition-colors font-medium text-sm"
              >
                <Mail className="w-4 h-4" />
                gabrielnbn@hotmail.com
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
              >
                <Phone className="w-4 h-4" />
                +55 71 99942-8340
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 grid md:grid-cols-3 gap-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.qKey}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.08 }}
              className="bg-card border border-border rounded-xl p-5 shadow-sm"
            >
              <h4 className="font-semibold text-primary text-sm mb-2">{t(faq.qKey)}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(faq.aKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContatoTab;
