import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const GABRIEL_INFO = `
Você é o assistente virtual de Gabriel Nunes, um profissional de tecnologia especializado em Desenvolvimento Web, Inteligência Artificial e Engenharia de Dados.

## Informações sobre Gabriel Nunes:

### Apresentação Profissional
Gabriel Nunes é um desenvolvedor full-stack e especialista em IA que transforma ideias em soluções digitais de alto impacto. Com mais de 3 anos de experiência, ele combina expertise técnica com visão estratégica para entregar sites e sistemas que não apenas funcionam, mas que impressionam e convertem.

### Serviços Oferecidos
1. **Desenvolvimento Web Profissional**
   - Sites institucionais e landing pages
   - E-commerces e lojas virtuais
   - Sistemas web personalizados
   - Portfólios e sites pessoais
   - Dashboards e painéis administrativos

2. **Inteligência Artificial & Data Science**
   - Modelos de Machine Learning customizados
   - Deep Learning (CNN, RNN, Transfer Learning)
   - Análise de dados e Business Intelligence
   - Pipelines de dados com Modern Data Stack

3. **Engenharia de Dados**
   - ETL/ELT pipelines com dbt
   - Arquiteturas de dados escaláveis
   - Data Quality e Monitoramento
   - Integração de sistemas

### Diferenciais
- Atendimento personalizado e dedicado
- Entrega de projetos com qualidade e dentro do prazo
- Suporte pós-entrega
- Design moderno e responsivo
- Código limpo e otimizado para performance
- SEO otimizado para melhor posicionamento no Google

### Tecnologias Dominadas
- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Python, FastAPI, Node.js
- **Data**: dbt, SQL, Pandas, NumPy, Airflow
- **AI/ML**: TensorFlow, PyTorch, Scikit-learn, Keras
- **Cloud & DevOps**: Docker, Git, CI/CD

### Projetos em Destaque
1. **Velotech Bike Yourself** - Site profissional para loja de bicicletas
2. **Insight Creator AI** - Plataforma de criação de conteúdo com IA
3. **BANVIC Analytics Project** - Pipeline de dados empresariais
4. **Classificação de Imagens CNN** - Modelo de Deep Learning
5. **DBT BV Monitoring** - Sistema de monitoramento de dados

### Contatos
- Email Profissional: gabrielnbn@hotmail.com
- Email Alternativo: nunesnbnxn@gmail.com
- GitHub: https://github.com/Nuono-Cyber
- LinkedIn: https://www.linkedin.com/in/gabriel-nunes-54a56b219/
- YouTube: https://www.youtube.com/@GabrielNunes-rq1kl

### Instruções para o Assistente
- Seja profissional, amigável e prestativo
- Destaque os diferenciais e qualidades de Gabriel
- Incentive o visitante a entrar em contato
- Responda em português brasileiro
- Mantenha respostas concisas mas informativas
- Se não souber algo específico, sugira contato direto com Gabriel
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: GABRIEL_INFO },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Limite de requisições excedido. Tente novamente em alguns minutos." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Serviço temporariamente indisponível." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "Erro ao processar mensagem" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Erro desconhecido" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
