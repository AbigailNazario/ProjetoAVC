export type Section = {
  slug: string;
  title: string;
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
    icon: "cerebro",
    short: "Rotina de cuidados em casa após a alta hospitalar.",
    videoUrl: "https://app.heygen.com/embeds/4dc4deb200a34764be8076ff387b1900",
    body:
      "Olá! Depois do AVC, o cuidado em casa envolve proteger o corpo e dar muito carinho ao coração. Vamos começar pela pele: para evitar feridas e assaduras, a higiene deve ser constante. Troque as fraldas assim que estiverem cheias, limpe a pele com suavidade e use sempre creme hidratante. Outro cuidado vital para quem passa muito tempo deitado é a mudança de posição. Use um relógio para lembrar: a cada duas horas, mude o paciente de lado — de costas, para o lado direito, depois para o lado esquerdo. Isso evita que o peso do corpo machuque a pele e crie feridas. Mas o cuidado não é só físico. O pós-AVC mexe muito com as emoções de todos. A família precisa se unir e ter paciência. Se o paciente ou você, cuidador, estiverem muito tristes ou cansados, procurem ajuda psicológica. Vá ao posto de saúde mais próximo da sua casa e se informe sobre o atendimento com psicólogo. Por fim, lembre-se: a recuperação é um caminho. Não falte às consultas com o neurologista e com os outros profissionais indicados no papel da alta do hospital. Cada profissional tem um papel importante para ajudar na melhora. Juntos, com carinho e atenção, nós cuidamos da vida!",
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
    icon: "medicamento",
    short: "Como organizar e tomar os remédios corretamente.",
    videoUrl: "/videos/Medicamentos.mp4",
    body:
      "Olá! Após a alta hospitalar, começa uma nova e fundamental etapa em casa. O uso correto das medicações é essencial para evitar um novo AVC. \n O remédio funciona como um escudo invisível, protegendo seu cérebro vinte e quatro horas por dia contra a pressão alta, o excesso de açúcar e a gordura no sangue. \n Mesmo se estiver se sentindo muito bem, nunca pare a medicação sem falar com seu médico do posto de saúde ou do ambulatório. Sem a medicação, o risco de um novo AVC aumenta muito. \n Lembre-se: Evite o uso de café, chás ou álcool na ingesta dos medicamentos, use apenas água, pois eles podem interferir no efeito do remédio. \n Uma dica valiosa é utilizar alarmes, lembretes no seu celular ou ajuda de familiares para garantir que você tome cada dose exatamente no horário correto.\n Pequenos hábitos diários garantem grandes resultados na sua recuperação. Cuidar da  sua medicação é, acima de tudo, cuidar da sua própria vida.",
    checklist: [
      "Organizar caixinha semanal",
      "Conferir validade dos remédios",
      "Tomar nos horários certos",
      "Não interromper sem orientação",
      "Deixar lembrete ou alarme no celular"
    ],
    accent: "primary",
  },
  {
    slug: "mobilizacao",
    title: "Mobilização",
    icon: "movimentacao",
    short: "Exercícios e movimentos seguros para recuperação.",
    videoUrl: "https://www.youtube.com/embed/9No-FiEInLA",
    body:
      "Olá! Após o AVC, colocar o corpo em movimento de forma segura é o segredo para recuperar a força e a independência. A fisioterapia é fundamental nesse processo, pois ajuda o cérebro a reaprender os movimentos e evita que as articulações fiquem travadas ou doloridas. Além da fisioterapia, quando o paciente estiver liberado pelo médico, começar uma atividade física regular e leve, como pequenas caminhadas no dia a dia, ajuda a manter o coração forte, melhora o humor, controla a pressão e evita que um novo AVC aconteça. Mas lembre-se: comece devagar e respeite o limite do corpo. Para o cuidador que ajuda nessa movimentação, a regra de ouro é: nunca puxe o paciente pelo braço que está fraco ou paralisado, para não machucar o ombro dele. Segure sempre pelo tronco ou dê apoio pelas costas. E onde conseguir o acompanhamento? Vá ao posto de saúde mais próximo da sua casa e se informe sobre o atendimento com fisioterapeuta. A reabilitação exige paciência, mas cada pequeno passo é uma grande vitória. Vamos juntos cuidar da vida!",
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
    icon: "alimentacao",
    short: "Alimentação saudável para proteger o cérebro.",
    videoUrl: "/videos/Alimentacao.mp4",
    body:
      "Olá! Alimentar-se com segurança após o AVC é um dos cuidados mais importantes em casa. \n A sequela do AVC pode enfraquecer os músculos da mastigação e da deglutição, aumentando o risco de engasgos e pneumonia. \n Por isso, siga as regras de ouro. Primeira: a posição. Nunca alimente o paciente deitado. \n Ele deve estar sentado, bem ereto, em um ângulo de noventa graus.\n Mantenha ele sentado por pelo menos trinta minutos após a refeição. \n Segunda: a consistência da comida. Siga a orientação da fonoaudióloga.Se a dieta for pastosa, não ofereça alimentos duros ou líquidos finos sem autorização.\n Terceira: Faça de 5 a 6 refeições por dia, ricas em nutrientes como verduras, frutas e proteínas.E com pouca gordura, sal e açúcar, beba no mínimo 2 litros d'água. \n Quarta: o ambiente. Evite distrações e pressa.Ofereça pequenas porções e espere engolir totalmente antes da próxima colherada.Se o paciente tossir, pigarrear ou a voz ficar molhada, pare a alimentação imediatamente e procure orientação. Comer com segurança protege os pulmões e ajuda na recuperação.",
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
    icon: "atencao",
    short: "Reconheça sinais que pedem atenção imediata.",
    videoUrl: "https://www.youtube.com/embed/9No-FiEInLA",
    body:
      "Olá! Depois da alta hospitalar, o cuidador e a família precisam ficar muito atentos a alguns sinais que mostram que o paciente precisa voltar para a emergência imediatamente. O primeiro grupo de sinais são os sangramentos. Por causa de alguns remédios que o paciente toma para afinar o sangue e evitar novos entupimentos, podem acontecer sangramentos no nariz, na gengiva ao escovar os dentes, ou a presença de sangue na urina e nas fezes. Se notar qualquer sangramento, procure o serviço de emergência. Outro sinal grave é o rebaixamento da consciência. Se o paciente começar a dormir demais e for difícil de acordar, se mostrar muita confusão, desorientação ou uma agitação estranha que ele não tinha antes, vômitos seguidos isso é um aviso de perigo. Por fim, fique de olho nos sinais de um novo AVC: veja se a boca entortou ao sorrir, se um dos braços perdeu a força ou se a fala ficou arrastada e difícil de entender. Diante de qualquer um desses sinais, não espere melhorar em casa. Vá direto para a emergência ou ligue para o SAMU no número 192. Quem avisa a tempo, salva uma vida!",
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
