const GREETING_PATTERNS = /^\s*(oi|olá|ola|oi!|olá!|ola!|hello|hi|hey|bom dia|boa tarde|boa noite|tudo bem|tudo bom|e aí|e ai)\s*[!?.]?\s*$/i;

const GREETING_RESPONSE =
  "Oi! 👋 Que bom ter você por aqui! Sou o **GABOT**, assistente virtual do Gabriel Nunes.\n\nPosso te ajudar com:\n- 💻 Informações sobre serviços de desenvolvimento web\n- 🤖 Projetos com IA\n- 📊 Soluções de engenharia de dados\n- 💬 Falar sobre orçamentos e prazos\n\nO que você gostaria de saber?";

export const getGreetingResponse = (text: string): string | null => {
  return GREETING_PATTERNS.test(text) ? GREETING_RESPONSE : null;
};
