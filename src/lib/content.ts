export type Section = {
  slug: string;
  title: string;
  emoji: string;
  icon: string;
  short: string;
  videoUrl: string;
  body: string;
  checklist: string[];
  accent?: "primary" | "secondary";
};

export const SECTIONS: Section[] = [
  {
    slug: "cuidados",
    title: "Cuidados após AVC",
    emoji: "🩺",
    icon: "cerebro",
    short: "Rotina de cuidados em casa após a alta hospitalar.",
    videoUrl: "https://www.youtube.com/embed/9No-FiEInLA",
    body:
      "Após a alta, mantenha rotina tranquila, ambiente seguro e acompanhe sinais vitais. Vá às consultas, registre dúvidas e mantenha contato com a equipe de saúde. Pequenos cuidados diários previnem complicações e nova internação.",
    checklist: [
      "Tomar pressão arterial diariamente",
      "Anotar dúvidas para a próxima consulta",
      "Manter casa livre de tapetes soltos",
      "Garantir boa iluminação nos cômodos",
    ],
    accent: "primary",
  },
  {
    slug: "medicacoes",
    title: "Medicações",
    emoji: "💊",
    icon: "medicamento",
    short: "Como organizar e tomar os remédios corretamente.",
    videoUrl: "https://www.youtube.com/embed/9No-FiEInLA",
    body:
      "Tome os medicamentos sempre nos horários indicados. Use uma caixinha organizadora semanal e nunca interrompa um remédio sem orientação médica. Em caso de esquecimento, consulte a bula ou ligue para a equipe.",
    checklist: [
      "Organizar caixinha semanal",
      "Conferir validade dos remédios",
      "Tomar nos horários certos",
      "Não interromper sem orientação",
    ],
    accent: "primary",
  },
  {
    slug: "mobilizacao",
    title: "Mobilização",
    emoji: "🚶",
    icon: "movimentacao",
    short: "Exercícios e movimentos seguros para recuperação.",
    videoUrl: "https://www.youtube.com/embed/9No-FiEInLA",
    body:
      "Movimentar-se com segurança ajuda a recuperar a força. Faça os exercícios indicados pela fisioterapia, evite quedas e use apoios. Sente, levante e caminhe com calma e sempre acompanhado quando necessário.",
    checklist: [
      "Fazer exercícios da fisioterapia",
      "Levantar devagar para evitar tontura",
      "Usar calçados antiderrapantes",
      "Pedir ajuda em escadas",
    ],
    accent: "secondary",
  },
  {
    slug: "alimentacao",
    title: "Alimentação",
    emoji: "🥗",
    icon: "alimentacao",
    short: "Alimentação saudável para proteger o cérebro.",
    videoUrl: "https://www.youtube.com/embed/9No-FiEInLA",
    body:
      "Prefira frutas, verduras, grãos integrais e proteínas magras. Reduza sal, açúcar e frituras. Beba água ao longo do dia. Se houver dificuldade para engolir, siga as orientações da fonoaudiologia.",
    checklist: [
      "Comer frutas e verduras todos os dias",
      "Reduzir sal e frituras",
      "Beber água regularmente",
      "Comer devagar e bem mastigado",
    ],
    accent: "secondary",
  },
  {
    slug: "sinais-de-alerta",
    title: "Sinais de alerta",
    emoji: "⚠️",
    icon: "atencao",
    short: "Reconheça sinais que pedem atenção imediata.",
    videoUrl: "https://www.youtube.com/embed/9No-FiEInLA",
    body:
      "Fique atento a: boca torta, fraqueza em um lado do corpo, fala enrolada, perda de visão, tontura forte ou dor de cabeça intensa. Diante de qualquer sinal, procure ajuda médica imediatamente.",
    checklist: [
      "Observar rosto, braço e fala (SAMU)",
      "Anotar horário do início dos sintomas",
      "Não esperar passar — buscar ajuda",
      "Manter telefones de emergência à mão",
    ],
    accent: "primary",
  },
];

export function getSection(slug: string) {
  return SECTIONS.find((s) => s.slug === slug);
}
