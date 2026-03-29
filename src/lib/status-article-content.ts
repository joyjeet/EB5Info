import type { Locale } from "@/lib/i18n";

type StatusArticleSection = {
  title: string;
  body: string[];
};

type StatusArticleCard = {
  title: string;
  body: string;
};

type StatusArticleFaq = {
  question: string;
  answer: string;
};

type StatusArticleContent = {
  title: string;
  intro: string;
  kicker: string;
  homeLink: string;
  contactLink: string;
  sections: StatusArticleSection[];
  cardsTitle: string;
  cards: StatusArticleCard[];
  faqTitle: string;
  faqs: StatusArticleFaq[];
  disclaimer: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};

export const statusArticleSlug = "existing-nonimmigrant-status-eb-5-options";

export const statusArticleContent: Record<Locale, StatusArticleContent> = {
  en: {
    title: "How existing nonimmigrant status can affect the options available to you",
    intro:
      "For people already inside the United States, current nonimmigrant status can affect timing, filing strategy, travel planning, and what backup options remain available while an EB-5 case is pending.",
    kicker: "Status planning",
    homeLink: "Back to the main EB-5 guide",
    contactLink: "Ask a question about current U.S. status",
    sections: [
      {
        title: "Why current status matters",
        body: [
          "Existing status can shape whether a person is reviewing adjustment-of-status possibilities, consular processing questions, or interim planning while immigrant filings remain pending. The answer is not the same for every visitor because underlying immigration history, visa availability, and admissibility issues can change the analysis.",
          "A visitor in H-1B, L-1, F-1, B-1/B-2, E-2, or another category may face different practical considerations around maintenance of status, work authorization timing, travel, and whether it is safer to preserve a separate nonimmigrant pathway while the EB-5 process moves forward.",
        ],
      },
      {
        title: "Why people should not treat status questions as generic",
        body: [
          "Status-sensitive planning often depends on exact entry history, expiration dates, prior filings, unauthorized employment issues, intent concerns, and whether family members have the same immigration posture. That is why two people interested in EB-5 can have very different procedural options even if they are looking at the same project.",
          "This is also where practical risk management matters. Some people focus on preserving a current work-authorized status while others may be looking at family timing, travel flexibility, or how to avoid gaps in lawful presence during a longer process.",
        ],
      },
    ],
    cardsTitle: "Common status-dependent issues people ask about",
    cards: [
      {
        title: "Adjustment strategy depends on facts and timing",
        body: "Whether someone can realistically evaluate adjustment-related steps can depend on visa availability, current status, filing posture, and the facts of the individual case rather than a single rule that applies to everyone.",
      },
      {
        title: "Travel can change the planning",
        body: "International travel while filings are pending can affect strategy. People often need to understand advance planning issues before assuming they can travel the same way they did before starting the EB-5 process.",
      },
      {
        title: "Employment and status continuity still matter",
        body: "Many people want to know whether they should maintain a current status, how work authorization timing may affect them, and what happens if the immigration timeline is longer than expected.",
      },
    ],
    faqTitle: "Quick questions about nonimmigrant status and EB-5",
    faqs: [
      {
        question: "Does my current visa status automatically make EB-5 easier?",
        answer: "Not automatically. Current status may affect available procedures and timing, but it does not remove the need to satisfy the EB-5 requirements themselves.",
      },
      {
        question: "Should I keep maintaining my current status while reviewing EB-5?",
        answer: "Many people review that question carefully because preserving a separate lawful status can matter for work, travel, and risk management. The right approach depends on the case facts.",
      },
      {
        question: "Can travel or employment issues change my options?",
        answer: "Yes. Travel history, future travel needs, employment authorization, and timing concerns can all affect how a person evaluates EB-5-related next steps.",
      },
    ],
    disclaimer:
      "This article is general educational information only. Current status strategy can be highly fact-specific and should be reviewed with qualified immigration counsel before filing or relying on a process assumption.",
    seo: {
      title: "How Existing Nonimmigrant Status Can Affect EB-5 Options | EB5 Info",
      description:
        "Learn how existing nonimmigrant status can affect EB-5 options, including timing, travel, work authorization planning, and case strategy for people already in the United States.",
      keywords: [
        "EB-5 current status",
        "nonimmigrant status EB-5",
        "EB-5 adjustment of status",
        "EB-5 while in H-1B",
        "EB-5 while in the United States",
      ],
    },
  },
  es: {
    title: "Como el estatus no inmigrante actual puede afectar las opciones disponibles",
    intro:
      "Para personas que ya estan dentro de Estados Unidos, el estatus no inmigrante actual puede afectar los tiempos, la estrategia de presentacion, la planificacion de viajes y las opciones disponibles mientras un caso EB-5 sigue pendiente.",
    kicker: "Planificacion de estatus",
    homeLink: "Volver a la guia principal EB-5",
    contactLink: "Hacer una pregunta sobre el estatus actual en EE. UU.",
    sections: [
      {
        title: "Por que importa el estatus actual",
        body: [
          "El estatus actual puede influir en si una persona esta evaluando posibilidades de ajuste de estatus, procesamiento consular u opciones intermedias mientras las presentaciones inmigratorias siguen pendientes. La respuesta no es igual para todos porque el historial migratorio, la disponibilidad de visa y posibles temas de admisibilidad pueden cambiar el analisis.",
          "Una persona en H-1B, L-1, F-1, B-1/B-2, E-2 u otra categoria puede enfrentar consideraciones distintas sobre mantenimiento de estatus, momento de autorizacion de trabajo, viajes y si conviene conservar otra via no inmigrante mientras avanza el proceso EB-5.",
        ],
      },
      {
        title: "Por que no conviene tratar estas preguntas como si fueran genericas",
        body: [
          "La planificacion dependiente del estatus suele basarse en la fecha de entrada, vencimientos, presentaciones previas, temas de trabajo no autorizado, asuntos de intencion y si los familiares tienen la misma situacion migratoria. Por eso dos personas interesadas en EB-5 pueden tener opciones procedimentales muy distintas aunque miren el mismo proyecto.",
          "Aqui tambien importa la gestion practica del riesgo. Algunas personas buscan preservar un estatus con autorizacion de trabajo, mientras otras se enfocan en tiempos familiares, flexibilidad de viaje o como evitar interrupciones de presencia legal durante un proceso largo.",
        ],
      },
    ],
    cardsTitle: "Temas frecuentes que dependen del estatus",
    cards: [
      {
        title: "La estrategia de ajuste depende de hechos y tiempos",
        body: "Que una persona pueda evaluar pasos relacionados con ajuste puede depender de disponibilidad de visa, estatus actual, posicion de presentacion y hechos individuales, no de una sola regla universal.",
      },
      {
        title: "Los viajes pueden cambiar la estrategia",
        body: "Los viajes internacionales mientras hay presentaciones pendientes pueden afectar la estrategia. Muchas personas necesitan entender estas implicaciones antes de asumir que podran viajar igual que antes de iniciar el proceso EB-5.",
      },
      {
        title: "El empleo y la continuidad del estatus siguen importando",
        body: "Muchas personas quieren saber si deben mantener el estatus actual, como podria afectarles el momento de autorizacion de trabajo y que ocurre si el calendario migratorio dura mas de lo esperado.",
      },
    ],
    faqTitle: "Preguntas rapidas sobre estatus no inmigrante y EB-5",
    faqs: [
      {
        question: "Mi visa o estatus actual hace que EB-5 sea automaticamente mas facil?",
        answer: "No automaticamente. El estatus actual puede afectar procedimientos y tiempos disponibles, pero no elimina la necesidad de cumplir los requisitos propios de EB-5.",
      },
      {
        question: "Debo mantener mi estatus actual mientras evalúo EB-5?",
        answer: "Muchas personas analizan eso con cuidado porque conservar un estatus legal separado puede importar para trabajo, viajes y manejo del riesgo. La respuesta depende de los hechos del caso.",
      },
      {
        question: "Los viajes o el trabajo pueden cambiar mis opciones?",
        answer: "Si. Historial de viajes, necesidades futuras de viaje, autorizacion de empleo y temas de tiempo pueden afectar la forma en que una persona evalua los siguientes pasos relacionados con EB-5.",
      },
    ],
    disclaimer:
      "Este articulo ofrece informacion educativa general solamente. La estrategia basada en estatus actual puede depender mucho de hechos individuales y debe revisarse con asesoria migratoria calificada antes de presentar o asumir un camino procesal.",
    seo: {
      title: "Como el Estatus No Inmigrante Actual Puede Afectar Opciones EB-5 | EB5 Info",
      description:
        "Conozca como el estatus no inmigrante actual puede afectar opciones EB-5, incluyendo tiempos, viajes, autorizacion de trabajo y estrategia para personas ya dentro de Estados Unidos.",
      keywords: [
        "estatus actual EB-5",
        "estatus no inmigrante EB-5",
        "ajuste de estatus EB-5",
        "EB-5 con H-1B",
        "EB-5 dentro de Estados Unidos",
      ],
    },
  },
  zh: {
    title: "现有非移民身份如何影响您可选择的 EB-5 路径",
    intro:
      "对于已经身在美国境内的人来说，当前的非移民签证或身份会影响时间安排、申请策略、出入境规划，以及在 EB-5 案件审理期间还能保留哪些备选路径。",
    kicker: "身份规划",
    homeLink: "返回主 EB-5 指南",
    contactLink: "咨询当前美国身份相关问题",
    sections: [
      {
        title: "为什么当前身份很重要",
        body: [
          "当前身份会影响一个人是在评估身份调整可能性、领事处理路径，还是在移民申请等待期间做中间过渡安排。由于每个人的入境历史、签证排期以及可受理性问题不同，答案并不相同。",
          "处于 H-1B、L-1、F-1、B-1/B-2、E-2 或其他类别的人，往往会面对不同的现实考量，例如是否需要继续维持现有身份、工作授权时间、旅行计划，以及在 EB-5 进程推进时是否应保留另一条非移民路径。",
        ],
      },
      {
        title: "为什么身份问题不能一概而论",
        body: [
          "与身份有关的规划通常取决于具体入境记录、身份到期时间、过往申请、未经授权工作问题、移民意图考量，以及家庭成员是否处于相同移民状态。因此，即使两个人看的是同一个项目，他们在程序上的可选路径也可能完全不同。",
          "这里也涉及实际风险控制。有些人更关注继续维持可工作的合法身份，有些人则更在意家庭时间安排、旅行灵活性，或如何避免在漫长流程中出现合法停留中断。",
        ],
      },
    ],
    cardsTitle: "常见的身份相关问题",
    cards: [
      {
        title: "身份调整策略取决于事实与时间点",
        body: "一个人是否适合评估身份调整相关步骤，往往取决于排期、当前身份、申请时点以及个案事实，而不是一条适用于所有人的规则。",
      },
      {
        title: "旅行计划可能改变整体安排",
        body: "在申请待审期间的国际旅行，可能影响整体策略。很多人在启动 EB-5 之前和之后的旅行规则并不完全相同，需要提前判断。",
      },
      {
        title: "工作与身份连续性仍然关键",
        body: "很多人关心是否应继续维持当前身份、工作授权时间会如何影响自己，以及当移民时间线长于预期时应如何降低风险。",
      },
    ],
    faqTitle: "关于非移民身份与 EB-5 的快速问题",
    faqs: [
      {
        question: "我当前的签证或身份会自动让 EB-5 更容易吗？",
        answer: "不一定。当前身份可能影响可用程序和时间安排，但并不会替代 EB-5 本身的资格要求。",
      },
      {
        question: "在评估 EB-5 期间，我是否应继续维持当前身份？",
        answer: "很多人都会认真评估这个问题，因为保留一条独立的合法身份路径可能关系到工作、旅行和整体风险控制。答案取决于个案事实。",
      },
      {
        question: "旅行或工作问题会改变我的选择吗？",
        answer: "会。过往旅行记录、未来旅行需求、工作授权以及时间安排，都可能影响一个人如何评估与 EB-5 相关的下一步。",
      },
    ],
    disclaimer:
      "本文仅提供一般教育性信息。基于当前身份的策略高度依赖个案事实，在提交申请或依赖某种程序假设前，应与合格移民律师进行具体评估。",
    seo: {
      title: "现有非移民身份如何影响 EB-5 选项 | EB5 Info",
      description:
        "了解当前非移民身份如何影响 EB-5 选项，包括时间安排、旅行、工作授权规划，以及已经身在美国境内申请人的策略考量。",
      keywords: [
        "EB-5 当前身份",
        "非移民身份 EB-5",
        "EB-5 身份调整",
        "H-1B 转 EB-5",
        "美国境内 EB-5",
      ],
    },
  },
};