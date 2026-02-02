import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en";

interface Translations {
  [key: string]: {
    pt: string;
    en: string;
  };
}

export const translations: Translations = {
  // Navbar
  "nav.home": { pt: "Início", en: "Home" },
  "nav.services": { pt: "Serviços", en: "Services" },
  "nav.portfolio": { pt: "Portfólio", en: "Portfolio" },
  "nav.results": { pt: "Resultados", en: "Results" },
  "nav.contact": { pt: "Contato", en: "Contact" },
  "nav.quote": { pt: "Orçamento", en: "Quote" },
  "nav.urgency": { pt: "🔥 VAGAS LIMITADAS — Apenas 3 projetos por mês", en: "🔥 LIMITED SPOTS — Only 3 projects per month" },
  
  // Hero/Inicio
  "hero.available": { pt: "✓ 1 vaga disponível este mês", en: "✓ 1 spot available this month" },
  "hero.title": { pt: "Web Developer & AI Specialist", en: "Web Developer & AI Specialist" },
  "hero.headline1": { pt: "Seu negócio merece um", en: "Your business deserves a" },
  "hero.headline2": { pt: "site que vende.", en: "website that sells." },
  "hero.headline3": { pt: 'Não apenas um que "existe".', en: 'Not just one that "exists".' },
  "hero.description": { pt: "Crio sites profissionais que transformam visitantes em clientes pagantes. Design moderno, rápido, otimizado para converter e vender.", en: "I create professional websites that turn visitors into paying customers. Modern design, fast, optimized to convert and sell." },
  "hero.sites": { pt: "sites profissionais", en: "professional websites" },
  "hero.convert": { pt: "converter e vender", en: "convert and sell" },
  "hero.point1": { pt: "Sites que vendem de verdade", en: "Websites that really sell" },
  "hero.point2": { pt: "Entrega em até 7 dias", en: "Delivery in up to 7 days" },
  "hero.point3": { pt: "Suporte pós-entrega", en: "Post-delivery support" },
  "hero.projects": { pt: "Projetos", en: "Projects" },
  "hero.satisfaction": { pt: "Satisfação", en: "Satisfaction" },
  "hero.delivery": { pt: "Entrega", en: "Delivery" },
  "hero.cta": { pt: "QUERO MEU SITE", en: "I WANT MY WEBSITE" },
  "hero.results": { pt: "Ver Resultados", en: "See Results" },
  "hero.commitment": { pt: "Orçamento gratuito • Sem compromisso • Resposta em 24h", en: "Free quote • No commitment • Response in 24h" },
  "hero.webExpert": { pt: "Web Expert", en: "Web Expert" },
  "hero.fast": { pt: "Rápido", en: "Fast" },
  
  // Contact
  "contact.available": { pt: "Vaga disponível — Respondo hoje!", en: "Spot available — I'll respond today!" },
  "contact.headline1": { pt: "Pronto para ter um", en: "Ready to have a" },
  "contact.headline2": { pt: "site que vende?", en: "website that sells?" },
  "contact.description": { pt: "Me conta sobre seu projeto e receba um orçamento personalizado.", en: "Tell me about your project and get a personalized quote." },
  "contact.noCommitment": { pt: "Sem custo, sem compromisso.", en: "Free, no commitment." },
  "contact.cta": { pt: "SOLICITAR ORÇAMENTO GRÁTIS", en: "REQUEST FREE QUOTE" },
  "contact.guarantee1": { pt: "Resposta em até 24h", en: "Response within 24h" },
  "contact.guarantee2": { pt: "Orçamento sem compromisso", en: "Quote with no commitment" },
  "contact.guarantee3": { pt: "30 dias de suporte grátis", en: "30 days free support" },
  "contact.connect": { pt: "ou conecte-se comigo", en: "or connect with me" },
  "contact.urgency": { pt: "⚡ Apenas 3 vagas por mês — Garanta a sua!", en: "⚡ Only 3 spots per month — Secure yours!" },
  "contact.faq1.q": { pt: "Quanto custa um site?", en: "How much does a website cost?" },
  "contact.faq1.a": { pt: "Depende da complexidade. Sites simples a partir de R$ 997. Peça um orçamento personalizado!", en: "Depends on complexity. Simple sites starting at $200. Ask for a personalized quote!" },
  "contact.faq2.q": { pt: "Qual o prazo de entrega?", en: "What's the delivery time?" },
  "contact.faq2.a": { pt: "Em média 7 dias úteis para sites landing page. Projetos maiores de 15-30 dias.", en: "Average 7 business days for landing pages. Larger projects 15-30 days." },
  "contact.faq3.q": { pt: "O que está incluso?", en: "What's included?" },
  "contact.faq3.a": { pt: "Design responsivo, SEO básico, hospedagem no primeiro ano e 30 dias de suporte.", en: "Responsive design, basic SEO, first year hosting, and 30 days support." },
  
  // Services
  "services.title": { pt: "Serviços", en: "Services" },
  "services.subtitle": { pt: "Soluções completas para transformar sua presença digital em resultados reais.", en: "Complete solutions to transform your digital presence into real results." },
  "services.web.title": { pt: "Desenvolvimento Web", en: "Web Development" },
  "services.web.desc": { pt: "Sites modernos, rápidos e otimizados para converter visitantes em clientes.", en: "Modern, fast websites optimized to convert visitors into customers." },
  "services.uiux.title": { pt: "Design UI/UX", en: "UI/UX Design" },
  "services.uiux.desc": { pt: "Interfaces intuitivas e experiências que encantam e retêm usuários.", en: "Intuitive interfaces and experiences that delight and retain users." },
  "services.ai.title": { pt: "Automação com IA", en: "AI Automation" },
  "services.ai.desc": { pt: "Chatbots inteligentes e automações que aumentam sua eficiência.", en: "Smart chatbots and automations that increase your efficiency." },
  "services.popular": { pt: "MAIS POPULAR", en: "MOST POPULAR" },
  
  // Portfolio
  "portfolio.title": { pt: "Projetos que", en: "Projects that" },
  "portfolio.highlight": { pt: "geram resultados", en: "generate results" },
  "portfolio.subtitle": { pt: "Não são apenas projetos — são soluções que resolvem problemas reais.", en: "Not just projects — they're solutions that solve real problems." },
  "portfolio.featured": { pt: "Destaques", en: "Featured" },
  "portfolio.others": { pt: "Outros Projetos", en: "Other Projects" },
  "portfolio.view": { pt: "Ver projeto", en: "View project" },
  "portfolio.badge.featured": { pt: "DESTAQUE", en: "FEATURED" },
  
  // Results
  "results.title": { pt: "Resultados que", en: "Results that" },
  "results.highlight": { pt: "falam por si", en: "speak for themselves" },
  "results.subtitle": { pt: "Números reais de projetos reais. Transformando ideias em sucesso mensurável.", en: "Real numbers from real projects. Transforming ideas into measurable success." },
  "results.testimonials": { pt: "O que dizem meus clientes", en: "What my clients say" },
  "results.tech": { pt: "Tecnologias que Domino", en: "Technologies I Master" },
  
  // Footer
  "footer.rights": { pt: "Todos os direitos reservados.", en: "All rights reserved." },
  "footer.made": { pt: "Feito com", en: "Made with" },
  "footer.by": { pt: "por", en: "by" },
  
  // WhatsApp
  "whatsapp.message": { pt: "Olá Gabriel! Visitei seu portfólio e gostaria de um orçamento para meu projeto.", en: "Hello Gabriel! I visited your portfolio and would like a quote for my project." },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt");

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language] || translation.pt || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
