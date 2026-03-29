import type { Locale } from "@/lib/i18n";

type TopicArticleSection = {
  title: string;
  body: string[];
};

type TopicArticleCard = {
  title: string;
  body: string;
};

type TopicArticleFaq = {
  question: string;
  answer: string;
};

export type TopicArticleSlug =
  | "existing-nonimmigrant-status-eb-5-options"
  | "source-of-funds-eb-5-guide"
  | "eb-5-project-due-diligence-guide"
  | "eb-5-processing-delays-guide"
  | "eb-5-visa-availability-retrogression-guide";

export type TopicArticle = {
  slug: TopicArticleSlug;
  title: string;
  intro: string;
  kicker: string;
  homeLink: string;
  contactLink: string;
  sections: TopicArticleSection[];
  cardsTitle: string;
  cards: TopicArticleCard[];
  faqTitle: string;
  faqs: TopicArticleFaq[];
  relatedTitle: string;
  relatedIntro: string;
  disclaimer: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};

export const topicArticleSlugs: TopicArticleSlug[] = [
  "existing-nonimmigrant-status-eb-5-options",
  "source-of-funds-eb-5-guide",
  "eb-5-project-due-diligence-guide",
  "eb-5-processing-delays-guide",
  "eb-5-visa-availability-retrogression-guide",
];

export function isTopicArticleSlug(value: string): value is TopicArticleSlug {
  return topicArticleSlugs.includes(value as TopicArticleSlug);
}

export const topicArticleContent: Record<Locale, Record<TopicArticleSlug, TopicArticle>> = {
  en: {
    "existing-nonimmigrant-status-eb-5-options": {
      slug: "existing-nonimmigrant-status-eb-5-options",
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
      relatedTitle: "Related articles and guides",
      relatedIntro: "Compare this status-planning topic with source-of-funds preparation, project diligence, and the core cost and investment guides already on the site.",
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
    "source-of-funds-eb-5-guide": {
      slug: "source-of-funds-eb-5-guide",
      title: "What source-of-funds records are often gathered in an EB-5 case",
      intro:
        "Source-of-funds preparation is often one of the most document-heavy parts of an EB-5 case. The question is not just where the money came from, but whether the path from lawful origin to final investment can be clearly documented.",
      kicker: "Source of funds",
      homeLink: "Back to the main EB-5 guide",
      contactLink: "Ask a question about source of funds",
      sections: [
        {
          title: "Why source of funds takes time",
          body: [
            "Many people underestimate how much record gathering can be involved. EB-5 source-of-funds review may require tracing earnings, gifts, business proceeds, loans, asset sales, or transfers across jurisdictions and accounts over time.",
            "The main issue is usually coherence. The records need to tell a consistent story about lawful origin, movement of funds, and the investor's ability to connect the final investment amount back to supporting evidence.",
          ],
        },
        {
          title: "Why document quality matters more than a generic checklist",
          body: [
            "People often ask for one universal source-of-funds list, but the necessary records can differ depending on whether capital comes from salary, a business, a property sale, family gifting, inheritance, or financing. Cross-border transfers and translations can add another layer of complexity.",
            "That is why preparation often works best when the investor builds a timeline first, then gathers the records that support each transfer, conversion, and ownership step in that timeline.",
          ],
        },
      ],
      cardsTitle: "Common source-of-funds concerns",
      cards: [
        {
          title: "Transfers should match the narrative",
          body: "Bank records, contracts, tax records, company records, and declarations are often reviewed together. A clean timeline is easier to defend than a pile of unrelated documents.",
        },
        {
          title: "Translations and formatting matter",
          body: "Foreign-language records, inconsistent names, unclear account references, or missing dates can slow review even when the underlying source may be legitimate.",
        },
        {
          title: "Mixed sources may need separate explanation",
          body: "If capital comes from more than one origin, each component may need its own supporting evidence and explanation instead of being treated as one undifferentiated pool of money.",
        },
      ],
      faqTitle: "Quick questions about EB-5 source of funds",
      faqs: [
        {
          question: "Is source of funds just one bank statement?",
          answer: "Usually no. Many cases require a fuller documentary trail showing how money was earned, transferred, and assembled before the final EB-5 investment.",
        },
        {
          question: "Can gifts or loans be part of the source of funds story?",
          answer: "They can be part of the analysis, but they usually require their own documentation to show lawful origin, structure, and movement of funds.",
        },
        {
          question: "Why does source-of-funds preparation take so long?",
          answer: "It often involves older records, cross-border transfers, translations, and building a consistent chronology that matches the movement of funds.",
        },
      ],
      relatedTitle: "Related articles and guides",
      relatedIntro: "Use these related pages to connect source-of-funds planning with current U.S. status questions, project diligence, and the site’s broader investment guides.",
      disclaimer:
        "This article is general educational information only. Source-of-funds analysis depends heavily on the facts, available records, and case strategy, and should be reviewed with qualified immigration counsel.",
      seo: {
        title: "EB-5 Source of Funds Guide | Common Records and Planning Issues",
        description:
          "Learn what source-of-funds records are often gathered in an EB-5 case, why document quality matters, and how investors often prepare a coherent funding timeline.",
        keywords: [
          "EB-5 source of funds",
          "source of funds EB5",
          "EB-5 fund documentation",
          "EB-5 gift funds",
          "EB-5 money trail",
        ],
      },
    },
    "eb-5-project-due-diligence-guide": {
      slug: "eb-5-project-due-diligence-guide",
      title: "How investors often approach EB-5 project due diligence",
      intro:
        "Project review in EB-5 is not only about immigration structure. Investors often want to understand the offering terms, job-creation assumptions, exit mechanics, and what questions should be raised before capital is committed.",
      kicker: "Project diligence",
      homeLink: "Back to the main EB-5 guide",
      contactLink: "Ask a question about project due diligence",
      sections: [
        {
          title: "Why due diligence goes beyond marketing materials",
          body: [
            "Investors often compare the business summary against the private placement materials, subscription documents, risk disclosures, job creation assumptions, and any third-party diligence reports that may be available.",
            "The practical goal is to understand what the project is actually promising, how capital is structured, what could delay repayment or immigration milestones, and which risks are explicitly disclosed in the offering set.",
          ],
        },
        {
          title: "Why immigration and investment questions overlap",
          body: [
            "People sometimes separate immigration review from business review too sharply. In practice, project structure, timelines, expenditures, job assumptions, and exit terms can all affect how an investor evaluates both immigration and capital-return risk.",
            "That is why many investors ask not only whether a project looks attractive on paper, but also what independent review has been done, how assumptions were built, and what protections or limitations appear in the transaction documents.",
          ],
        },
      ],
      cardsTitle: "Common diligence questions",
      cards: [
        {
          title: "What are the actual risk disclosures?",
          body: "Investors often look beyond summaries and ask what the core offering documents say about business risk, timeline uncertainty, refinancing assumptions, and repayment limitations.",
        },
        {
          title: "How is job creation supported?",
          body: "Depending on the structure, people may ask how direct or modeled jobs are expected to be created and what inputs support those assumptions.",
        },
        {
          title: "What controls the exit and return timing?",
          body: "A common question is what events must happen before capital can be repaid, and whether those events depend on refinancing, sale, operations, or discretionary approvals.",
        },
      ],
      faqTitle: "Quick questions about EB-5 project due diligence",
      faqs: [
        {
          question: "Is reviewing the project mostly a business question or an immigration question?",
          answer: "Usually both. Offering structure, risks, job assumptions, and timelines can affect how investors think about immigration planning and capital risk at the same time.",
        },
        {
          question: "Should I rely only on project marketing materials?",
          answer: "Most investors want to review the actual transaction and offering documents, not just summaries or promotional materials.",
        },
        {
          question: "Why do repayment terms matter so much in diligence?",
          answer: "Because capital return timing often depends on project-specific terms rather than a guaranteed schedule, so investors usually want to understand the real exit mechanics before proceeding.",
        },
      ],
      relatedTitle: "Related articles and guides",
      relatedIntro: "Pair project diligence review with source-of-funds preparation, current-status planning, and the site’s core cost and investment guides.",
      disclaimer:
        "This article is general educational information only. Project review involves legal, financial, and factual issues that should be assessed with qualified professional advisers before any investment decision.",
      seo: {
        title: "EB-5 Project Due Diligence Guide | Questions Investors Often Ask",
        description:
          "Learn how investors often approach EB-5 project due diligence, including offering documents, job-creation assumptions, risk disclosures, and repayment terms.",
        keywords: [
          "EB-5 due diligence",
          "EB-5 project review",
          "regional center due diligence",
          "EB-5 project questions",
          "EB-5 offering documents",
        ],
      },
    },
    "eb-5-processing-delays-guide": {
      slug: "eb-5-processing-delays-guide",
      title: "What often causes EB-5 processing delays",
      intro:
        "People often ask why one EB-5 case moves faster than another. In practice, timing can be affected by visa availability, filing posture, source-of-funds preparation, project issues, government requests, and broader agency backlogs.",
      kicker: "Processing delays",
      homeLink: "Back to the main EB-5 guide",
      contactLink: "Ask a question about EB-5 delays",
      sections: [
        {
          title: "Why EB-5 timing is rarely driven by one factor",
          body: [
            "Investors sometimes look for a single average timeline, but EB-5 processing can be affected by more than one moving part at the same time. Case readiness, visa availability, project evidence, source-of-funds documentation, and government workload can all affect the pace.",
            "That is why two cases filed in similar periods may still progress differently. Timing can turn on the completeness of the submission, the procedural path being used, and whether additional questions arise after filing.",
          ],
        },
        {
          title: "Why preparation still affects speed even when government backlogs exist",
          body: [
            "Government backlogs are real, but investors still influence part of the timeline through document quality, translation readiness, prompt responses, and project selection. A stronger file does not guarantee faster results, but weak preparation can create avoidable delay.",
            "Many people also underestimate the time consumed before filing. Source-of-funds assembly, project review, and current-status planning can add weeks or months before a case is even ready to submit.",
          ],
        },
      ],
      cardsTitle: "Common delay drivers people ask about",
      cards: [
        {
          title: "Source-of-funds gaps",
          body: "Incomplete documentation, inconsistent timelines, missing translations, or unclear transfer paths can slow preparation and create later questions.",
        },
        {
          title: "Project and filing issues",
          body: "If project evidence, job-creation assumptions, or supporting documents are unclear, that can affect how efficiently the case is reviewed.",
        },
        {
          title: "Visa availability and agency workload",
          body: "Even well-prepared filings may still be affected by visa availability constraints, government processing volumes, and timing differences between procedural paths.",
        },
      ],
      faqTitle: "Quick questions about EB-5 delays",
      faqs: [
        {
          question: "Is there one standard EB-5 timeline for everyone?",
          answer: "No. Timing often depends on a mix of visa availability, filing path, case preparation quality, project evidence, and government workload.",
        },
        {
          question: "Can better preparation reduce delay risk?",
          answer: "It can reduce avoidable delay risk, especially where missing documents, weak translations, or unclear timelines would otherwise create questions later.",
        },
        {
          question: "Do government backlogs explain every delay?",
          answer: "Not always. Government backlogs matter, but case-specific issues and pre-filing preparation can also significantly affect timing.",
        },
      ],
      relatedTitle: "Related articles and guides",
      relatedIntro: "Compare delay planning with current-status strategy, source-of-funds preparation, project diligence, and the site’s core cost and investment guides.",
      disclaimer:
        "This article is general educational information only. Processing timing depends on changing facts, agency workload, visa availability, and case-specific issues, so no article can predict an individual outcome or timeline.",
      seo: {
        title: "EB-5 Processing Delays Guide | What Often Slows a Case Down",
        description:
          "Learn what often causes EB-5 processing delays, including source-of-funds preparation, project issues, visa availability, filing posture, and government backlogs.",
        keywords: [
          "EB-5 processing delays",
          "why is EB-5 slow",
          "EB-5 timeline delays",
          "EB-5 backlog",
          "EB-5 case timing",
        ],
      },
    },
    "eb-5-visa-availability-retrogression-guide": {
      slug: "eb-5-visa-availability-retrogression-guide",
      title: "How visa availability and retrogression can affect EB-5 planning",
      intro:
        "For some investors, the practical timing question is not only how long a petition takes, but whether visa availability, cutoff movement, or retrogression can affect when later immigration steps become available.",
      kicker: "Visa availability",
      homeLink: "Back to the main EB-5 guide",
      contactLink: "Ask a question about visa availability",
      sections: [
        {
          title: "Why visa availability is a separate planning issue",
          body: [
            "Investors sometimes focus only on petition review time, but visa availability can be a separate variable in the overall timeline. Depending on country of chargeability, category demand, and the state of visa bulletin movement, the later path may not look identical for every investor.",
            "That is why people often track not only how long case preparation and adjudication may take, but also whether a future step depends on an immigrant visa becoming available at the right time.",
          ],
        },
        {
          title: "Why retrogression matters in practical planning",
          body: [
            "Retrogression can affect expectations around timing, family strategy, and how people think about current status, travel, and backup planning. Even when a case appears strong on the merits, timing assumptions may need to be revisited if visa availability shifts.",
            "This is one reason many investors monitor official government sources and case-specific advice rather than relying on a single static timeline published online.",
          ],
        },
      ],
      cardsTitle: "Common visa-availability questions",
      cards: [
        {
          title: "Chargeability can matter",
          body: "The practical timeline can differ depending on how visa availability applies to the investor and family members under the governing rules.",
        },
        {
          title: "Movement can change over time",
          body: "A planning assumption based on one period may need to be revisited if the visa bulletin or demand picture changes later.",
        },
        {
          title: "Timing affects strategy",
          body: "People often review how visa availability interacts with status planning, family timing, travel, and the broader immigration path rather than looking at one step in isolation.",
        },
      ],
      faqTitle: "Quick questions about EB-5 visa availability",
      faqs: [
        {
          question: "Is petition approval the same as immediate visa availability?",
          answer: "Not necessarily. Petition progress and visa availability can be related but distinct timing issues in the overall immigration path.",
        },
        {
          question: "Can retrogression affect planning even in a strong case?",
          answer: "Yes. Retrogression can affect timing expectations and downstream procedural planning even when the underlying case appears well prepared.",
        },
        {
          question: "Should investors keep checking official visa-availability sources?",
          answer: "Yes. People often monitor official government sources because availability and cutoff movement can change over time.",
        },
      ],
      relatedTitle: "Related articles and guides",
      relatedIntro: "Compare visa-availability planning with processing delays, current-status strategy, and the site’s core cost and investment guides.",
      disclaimer:
        "This article is general educational information only. Visa availability and retrogression are government-controlled issues that can change over time, so current official sources and case-specific legal advice remain important.",
      seo: {
        title: "EB-5 Visa Availability and Retrogression Guide | Planning Issues",
        description:
          "Learn how visa availability and retrogression can affect EB-5 planning, including timing expectations, current-status strategy, and later immigration steps.",
        keywords: [
          "EB-5 visa availability",
          "EB-5 retrogression",
          "EB-5 visa bulletin",
          "EB-5 timing planning",
          "EB-5 backlog planning",
        ],
      },
    },
  },
  es: {
    "existing-nonimmigrant-status-eb-5-options": {
      slug: "existing-nonimmigrant-status-eb-5-options",
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
      relatedTitle: "Articulos y guias relacionadas",
      relatedIntro: "Compare este tema de planificacion de estatus con preparacion de origen de fondos, diligencia del proyecto y las guias principales de costos e inversion del sitio.",
      disclaimer:
        "Este articulo ofrece informacion educativa general solamente. La estrategia basada en estatus actual puede depender mucho de hechos individuales y debe revisarse con asesoria migratoria calificada antes de presentar o asumir un camino procesal.",
      seo: {
        title: "Como el Estatus No Inmigrante Actual Puede Afectar Opciones EB-5 | EB5 Info",
        description:
          "Conozca como el estatus no inmigrante actual puede afectar opciones EB-5, incluyendo tiempos, viajes, autorizacion de trabajo y estrategia para personas ya dentro de Estados Unidos.",
        keywords: ["estatus actual EB-5", "estatus no inmigrante EB-5", "ajuste de estatus EB-5", "EB-5 con H-1B", "EB-5 dentro de Estados Unidos"],
      },
    },
    "source-of-funds-eb-5-guide": {
      slug: "source-of-funds-eb-5-guide",
      title: "Que documentos de origen de fondos suelen reunirse en un caso EB-5",
      intro:
        "La preparacion del origen de fondos suele ser una de las partes con mas documentos en un caso EB-5. La pregunta no es solo de donde viene el dinero, sino si puede demostrarse claramente el camino desde un origen licito hasta la inversion final.",
      kicker: "Origen de fondos",
      homeLink: "Volver a la guia principal EB-5",
      contactLink: "Hacer una pregunta sobre origen de fondos",
      sections: [
        {
          title: "Por que el origen de fondos suele tomar tiempo",
          body: [
            "Muchas personas subestiman la cantidad de documentos que puede requerirse. La revision del origen de fondos en EB-5 puede implicar rastrear ingresos, regalos, ganancias empresariales, prestamos, ventas de activos o transferencias entre jurisdicciones y cuentas a lo largo del tiempo.",
            "El punto central suele ser la coherencia. Los documentos deben contar una historia consistente sobre el origen licito, el movimiento de fondos y la forma en que el monto final invertido se conecta con la evidencia disponible.",
          ],
        },
        {
          title: "Por que la calidad de la evidencia importa mas que una lista generica",
          body: [
            "Muchas personas piden una lista universal de origen de fondos, pero los documentos necesarios pueden variar segun si el capital proviene de salario, empresa, venta de propiedad, regalo familiar, herencia o financiamiento. Las transferencias internacionales y las traducciones pueden agregar complejidad.",
            "Por eso suele ayudar construir primero una linea de tiempo y luego reunir la evidencia que respalda cada transferencia, conversion y paso de propiedad dentro de esa secuencia.",
          ],
        },
      ],
      cardsTitle: "Preocupaciones comunes sobre origen de fondos",
      cards: [
        {
          title: "Las transferencias deben coincidir con la narrativa",
          body: "Estados bancarios, contratos, registros fiscales, documentos de empresa y declaraciones suelen revisarse en conjunto. Una linea de tiempo clara es mas facil de sostener que un conjunto de documentos sin conexion.",
        },
        {
          title: "Las traducciones y el formato importan",
          body: "Documentos en otros idiomas, nombres inconsistentes, referencias de cuenta poco claras o fechas ausentes pueden retrasar la revision incluso cuando el origen subyacente parece legitimo.",
        },
        {
          title: "Las fuentes mixtas pueden requerir explicaciones separadas",
          body: "Si el capital proviene de mas de un origen, cada parte puede necesitar su propia evidencia y explicacion en lugar de tratarse como un solo fondo indistinto.",
        },
      ],
      faqTitle: "Preguntas rapidas sobre origen de fondos EB-5",
      faqs: [
        {
          question: "El origen de fondos se demuestra solo con un estado bancario?",
          answer: "Normalmente no. Muchos casos requieren una ruta documental mas amplia que explique como se obtuvo, transfirio y reunio el dinero antes de la inversion EB-5.",
        },
        {
          question: "Los regalos o prestamos pueden formar parte del origen de fondos?",
          answer: "Pueden formar parte del analisis, pero normalmente requieren su propia documentacion para demostrar origen licito, estructura y movimiento del dinero.",
        },
        {
          question: "Por que la preparacion del origen de fondos tarda tanto?",
          answer: "Porque a menudo implica registros antiguos, transferencias internacionales, traducciones y la construccion de una cronologia consistente que coincida con el movimiento del capital.",
        },
      ],
      relatedTitle: "Articulos y guias relacionadas",
      relatedIntro: "Use estas paginas para conectar la preparacion del origen de fondos con preguntas sobre estatus actual, diligencia del proyecto y las guias principales de inversion del sitio.",
      disclaimer:
        "Este articulo ofrece informacion educativa general solamente. El analisis de origen de fondos depende mucho de los hechos, los documentos disponibles y la estrategia del caso, y debe revisarse con asesoria migratoria calificada.",
      seo: {
        title: "Guia de Origen de Fondos EB-5 | Registros y temas frecuentes",
        description:
          "Conozca que registros de origen de fondos suelen reunirse en un caso EB-5, por que importa la calidad documental y como muchos inversionistas preparan una linea de tiempo financiera coherente.",
        keywords: ["origen de fondos EB-5", "fuente de fondos EB5", "documentos EB-5", "regalo EB-5", "ruta del dinero EB-5"],
      },
    },
    "eb-5-project-due-diligence-guide": {
      slug: "eb-5-project-due-diligence-guide",
      title: "Como suelen abordar los inversionistas la diligencia de un proyecto EB-5",
      intro:
        "La revision de un proyecto EB-5 no se limita a materiales comerciales. Muchos inversionistas quieren entender terminos de la oferta, supuestos de creacion de empleo, mecanismos de salida y que preguntas conviene hacer antes de comprometer capital.",
      kicker: "Diligencia del proyecto",
      homeLink: "Volver a la guia principal EB-5",
      contactLink: "Hacer una pregunta sobre diligencia del proyecto",
      sections: [
        {
          title: "Por que la diligencia va mas alla del material promocional",
          body: [
            "Los inversionistas suelen comparar el resumen comercial con los documentos privados de oferta, suscripcion, revelaciones de riesgo, supuestos de creacion de empleo y cualquier informe de terceros que este disponible.",
            "El objetivo practico es entender que promete realmente el proyecto, como se estructura el capital, que factores podrian retrasar la devolucion o las etapas migratorias y que riesgos aparecen expresamente en el paquete documental.",
          ],
        },
        {
          title: "Por que las preguntas migratorias y de inversion se cruzan",
          body: [
            "A veces se separa demasiado la revision migratoria de la revision financiera. En la practica, la estructura del proyecto, los plazos, el gasto del capital, los supuestos de empleo y los terminos de salida pueden influir en como un inversionista evalua tanto el riesgo migratorio como el de retorno del capital.",
            "Por eso muchos inversionistas preguntan no solo si el proyecto se ve bien en papel, sino tambien que revision independiente se ha hecho, como se construyeron los supuestos y que protecciones o limitaciones aparecen en los documentos de la transaccion.",
          ],
        },
      ],
      cardsTitle: "Preguntas comunes de diligencia",
      cards: [
        {
          title: "Cuales son las revelaciones reales de riesgo?",
          body: "Muchos inversionistas miran mas alla de los resúmenes y preguntan que dicen los documentos principales sobre riesgo empresarial, incertidumbre de tiempos, refinanciacion y limites de devolucion.",
        },
        {
          title: "Como se sustenta la creacion de empleo?",
          body: "Segun la estructura, las personas preguntan como se espera crear empleos directos o modelados y que insumos respaldan esos supuestos.",
        },
        {
          title: "Que controla la salida y el momento de devolucion?",
          body: "Una pregunta comun es que eventos deben ocurrir antes de devolver capital y si esos eventos dependen de refinanciacion, venta, operacion o aprobaciones discrecionales.",
        },
      ],
      faqTitle: "Preguntas rapidas sobre diligencia EB-5",
      faqs: [
        {
          question: "Revisar el proyecto es mas una pregunta financiera o migratoria?",
          answer: "Normalmente ambas. La estructura de la oferta, los riesgos, los supuestos de empleo y los plazos pueden influir a la vez en la planificacion migratoria y en el riesgo del capital.",
        },
        {
          question: "Debo basarme solo en material comercial del proyecto?",
          answer: "La mayoria de inversionistas quiere revisar los documentos reales de la transaccion y la oferta, no solo resúmenes o materiales promocionales.",
        },
        {
          question: "Por que importan tanto los terminos de devolucion?",
          answer: "Porque el momento de retorno del capital suele depender de terminos especificos del proyecto, no de un calendario garantizado, y eso influye mucho en la evaluacion del riesgo.",
        },
      ],
      relatedTitle: "Articulos y guias relacionadas",
      relatedIntro: "Combine la diligencia del proyecto con preparacion del origen de fondos, planificacion de estatus y las guias principales de costos e inversion del sitio.",
      disclaimer:
        "Este articulo ofrece informacion educativa general solamente. La revision de proyectos implica cuestiones legales, financieras y facticas que deben evaluarse con asesoria profesional calificada antes de invertir.",
      seo: {
        title: "Guia de Diligencia de Proyecto EB-5 | Preguntas frecuentes de inversionistas",
        description:
          "Conozca como los inversionistas suelen abordar la diligencia de un proyecto EB-5, incluyendo documentos de oferta, supuestos de empleo, riesgos y terminos de devolucion.",
        keywords: ["diligencia EB-5", "revision de proyecto EB-5", "diligencia centro regional", "preguntas proyecto EB-5", "documentos de oferta EB-5"],
      },
    },
    "eb-5-processing-delays-guide": {
      slug: "eb-5-processing-delays-guide",
      title: "Que suele causar demoras en el proceso EB-5",
      intro:
        "Muchas personas preguntan por que un caso EB-5 avanza mas rapido que otro. En la practica, los tiempos pueden verse afectados por disponibilidad de visa, via procesal, preparacion del origen de fondos, temas del proyecto, solicitudes gubernamentales y atrasos institucionales.",
      kicker: "Demoras de proceso",
      homeLink: "Volver a la guia principal EB-5",
      contactLink: "Hacer una pregunta sobre demoras EB-5",
      sections: [
        {
          title: "Por que el tiempo EB-5 rara vez depende de un solo factor",
          body: [
            "Los inversionistas a veces buscan un plazo promedio unico, pero el tiempo EB-5 puede depender de varios factores a la vez. La preparacion del caso, disponibilidad de visa, evidencia del proyecto, documentos del origen de fondos y carga de trabajo del gobierno pueden influir al mismo tiempo.",
            "Por eso dos casos presentados en periodos similares aun pueden avanzar de forma distinta. El tiempo puede cambiar segun la calidad del paquete, la via procesal elegida y si surgen preguntas adicionales despues de presentar.",
          ],
        },
        {
          title: "Por que la preparacion sigue importando incluso cuando existen atrasos gubernamentales",
          body: [
            "Los atrasos gubernamentales son reales, pero los inversionistas aun influyen en parte del calendario mediante la calidad documental, las traducciones, la rapidez de respuesta y la seleccion del proyecto. Una preparacion mas fuerte no garantiza velocidad, pero una preparacion debil puede crear demoras evitables.",
            "Muchas personas tambien subestiman el tiempo antes de presentar. La recopilacion del origen de fondos, la revision del proyecto y la planificacion del estatus actual pueden sumar semanas o meses antes de que el caso siquiera este listo para presentarse.",
          ],
        },
      ],
      cardsTitle: "Factores comunes de demora",
      cards: [
        {
          title: "Fallas en origen de fondos",
          body: "Documentacion incompleta, cronologias inconsistentes, traducciones faltantes o rutas de transferencia poco claras pueden retrasar la preparacion y generar preguntas posteriores.",
        },
        {
          title: "Temas de proyecto y de presentacion",
          body: "Si la evidencia del proyecto, los supuestos de empleo o los documentos de apoyo no estan claros, eso puede afectar la eficiencia de la revision.",
        },
        {
          title: "Disponibilidad de visa y carga institucional",
          body: "Incluso una presentacion bien preparada puede verse afectada por limites de disponibilidad de visa, volumen de casos y diferencias entre rutas procesales.",
        },
      ],
      faqTitle: "Preguntas rapidas sobre demoras EB-5",
      faqs: [
        {
          question: "Existe un mismo plazo EB-5 para todos?",
          answer: "No. Los tiempos suelen depender de una mezcla de disponibilidad de visa, via de presentacion, calidad de preparacion, evidencia del proyecto y carga de trabajo gubernamental.",
        },
        {
          question: "Una mejor preparacion puede reducir riesgos de demora?",
          answer: "Puede reducir demoras evitables, especialmente cuando documentos faltantes, malas traducciones o cronologias confusas podrian generar preguntas mas adelante.",
        },
        {
          question: "Los atrasos gubernamentales explican todas las demoras?",
          answer: "No siempre. Los atrasos institucionales importan, pero los problemas del caso y la preparacion previa tambien pueden influir bastante en el tiempo.",
        },
      ],
      relatedTitle: "Articulos y guias relacionadas",
      relatedIntro: "Compare la planificacion de demoras con estrategia de estatus, preparacion del origen de fondos, diligencia del proyecto y las guias principales de costos e inversion del sitio.",
      disclaimer:
        "Este articulo ofrece informacion educativa general solamente. Los tiempos dependen de hechos cambiantes, carga institucional, disponibilidad de visa y cuestiones del caso, por lo que ningun articulo puede predecir un plazo individual.",
      seo: {
        title: "Guia de Demoras EB-5 | Que suele ralentizar un caso",
        description:
          "Conozca que suele causar demoras en EB-5, incluyendo origen de fondos, temas del proyecto, disponibilidad de visa, via procesal y atrasos gubernamentales.",
        keywords: ["demoras EB-5", "por que EB-5 tarda", "atrasos EB-5", "backlog EB-5", "tiempo caso EB-5"],
      },
    },
    "eb-5-visa-availability-retrogression-guide": {
      slug: "eb-5-visa-availability-retrogression-guide",
      title: "Como la disponibilidad de visa y la retrogression pueden afectar la planificacion EB-5",
      intro:
        "Para algunos inversionistas, la pregunta practica no es solo cuanto tarda una peticion, sino tambien si la disponibilidad de visa, el movimiento de fechas o la retrogression pueden afectar cuando se habilitan etapas posteriores.",
      kicker: "Disponibilidad de visa",
      homeLink: "Volver a la guia principal EB-5",
      contactLink: "Hacer una pregunta sobre disponibilidad de visa",
      sections: [
        {
          title: "Por que la disponibilidad de visa es un tema separado de planificacion",
          body: [
            "Muchos inversionistas se enfocan solo en el tiempo de revision de la peticion, pero la disponibilidad de visa puede ser una variable distinta dentro del calendario total. Segun el pais de cargo, la demanda de categoria y el movimiento del boletin, la ruta posterior no necesariamente se ve igual para todos.",
            "Por eso muchas personas siguen no solo el tiempo de preparacion y adjudicacion, sino tambien si un paso posterior depende de que exista una visa inmigrante disponible en el momento adecuado.",
          ],
        },
        {
          title: "Por que la retrogression importa en la planificacion practica",
          body: [
            "La retrogression puede afectar expectativas de tiempo, estrategia familiar y la forma en que las personas piensan sobre estatus actual, viajes y planes de respaldo. Incluso cuando un caso parece fuerte en el fondo, los supuestos de tiempo pueden necesitar ajustes si cambia la disponibilidad de visa.",
            "Esta es una de las razones por las que muchos inversionistas siguen fuentes oficiales y orientacion especifica del caso en lugar de confiar en una sola linea de tiempo estatica publicada en internet.",
          ],
        },
      ],
      cardsTitle: "Preguntas comunes sobre disponibilidad de visa",
      cards: [
        {
          title: "La chargeability puede importar",
          body: "El calendario practico puede variar segun como aplique la disponibilidad de visa al inversionista y a sus familiares conforme a las reglas vigentes.",
        },
        {
          title: "El movimiento puede cambiar con el tiempo",
          body: "Un supuesto de planificacion basado en un periodo puede necesitar revisarse si el boletin o la demanda cambian despues.",
        },
        {
          title: "El tiempo afecta la estrategia",
          body: "Muchas personas revisan como la disponibilidad de visa interactua con la planificacion de estatus, tiempos familiares, viajes y la ruta migratoria general en vez de mirar un paso aislado.",
        },
      ],
      faqTitle: "Preguntas rapidas sobre disponibilidad de visa EB-5",
      faqs: [
        {
          question: "La aprobacion de la peticion significa disponibilidad inmediata de visa?",
          answer: "No necesariamente. El avance de la peticion y la disponibilidad de visa pueden ser temas de tiempo relacionados pero distintos dentro de la ruta migratoria.",
        },
        {
          question: "La retrogression puede afectar la planificacion incluso en un caso fuerte?",
          answer: "Si. La retrogression puede cambiar expectativas de tiempo y la planificacion procedimental aunque el caso subyacente parezca bien preparado.",
        },
        {
          question: "Conviene seguir revisando fuentes oficiales de disponibilidad de visa?",
          answer: "Si. Muchas personas monitorean fuentes oficiales porque la disponibilidad y el movimiento de fechas pueden cambiar con el tiempo.",
        },
      ],
      relatedTitle: "Articulos y guias relacionadas",
      relatedIntro: "Compare la planificacion de disponibilidad de visa con demoras de proceso, estrategia de estatus actual y las guias principales de costos e inversion del sitio.",
      disclaimer:
        "Este articulo ofrece informacion educativa general solamente. La disponibilidad de visa y la retrogression dependen del gobierno y pueden cambiar con el tiempo, por lo que siguen siendo importantes las fuentes oficiales y la asesoria legal especifica del caso.",
      seo: {
        title: "Guia de Disponibilidad de Visa y Retrogression EB-5 | Planificacion",
        description:
          "Conozca como la disponibilidad de visa y la retrogression pueden afectar la planificacion EB-5, incluyendo tiempos, estrategia de estatus actual y etapas posteriores.",
        keywords: ["disponibilidad visa EB-5", "retrogression EB-5", "boletin visa EB-5", "planificacion EB-5", "atraso visa EB-5"],
      },
    },
  },
  zh: {
    "existing-nonimmigrant-status-eb-5-options": {
      slug: "existing-nonimmigrant-status-eb-5-options",
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
      relatedTitle: "相关文章与指南",
      relatedIntro: "可将当前身份规划与资金来源准备、项目尽调，以及站内主要费用和投资指南结合阅读。",
      disclaimer:
        "本文仅提供一般教育性信息。基于当前身份的策略高度依赖个案事实，在提交申请或依赖某种程序假设前，应与合格移民律师进行具体评估。",
      seo: {
        title: "现有非移民身份如何影响 EB-5 选项 | EB5 Info",
        description:
          "了解当前非移民身份如何影响 EB-5 选项，包括时间安排、旅行、工作授权规划，以及已经身在美国境内申请人的策略考量。",
        keywords: ["EB-5 当前身份", "非移民身份 EB-5", "EB-5 身份调整", "H-1B 转 EB-5", "美国境内 EB-5"],
      },
    },
    "source-of-funds-eb-5-guide": {
      slug: "source-of-funds-eb-5-guide",
      title: "EB-5 案件中通常会准备哪些资金来源材料",
      intro:
        "资金来源往往是 EB-5 案件中材料量最大的一部分之一。重点不仅是钱来自哪里，还在于能否清楚说明从合法来源到最终投资之间的完整路径。",
      kicker: "资金来源",
      homeLink: "返回主 EB-5 指南",
      contactLink: "咨询资金来源问题",
      sections: [
        {
          title: "为什么资金来源准备通常耗时",
          body: [
            "很多人低估了所需材料的数量。EB-5 资金来源审查可能涉及工资、赠与、企业收入、贷款、资产出售，或跨司法辖区和银行账户的多次转账记录。",
            "关键通常在于逻辑一致。材料需要完整说明资金的合法来源、转移过程，以及最终投资金额如何与这些证据对应起来。",
          ],
        },
        {
          title: "为什么材料质量比通用清单更重要",
          body: [
            "很多人希望拿到一份通用清单，但实际所需材料会因资金来自工资、企业、房产出售、家庭赠与、继承或融资而不同。跨境转账和翻译也会增加复杂度。",
            "因此，通常更有效的做法是先整理资金时间线，再围绕每一笔转账、换汇和所有权变化去匹配支持材料。",
          ],
        },
      ],
      cardsTitle: "常见资金来源关注点",
      cards: [
        {
          title: "资金转移应与整体叙述一致",
          body: "银行流水、合同、税务记录、公司文件和说明性声明通常会结合审阅。清晰的时间线往往比杂乱无章的材料堆更有说服力。",
        },
        {
          title: "翻译和格式也会影响审查",
          body: "外文文件、姓名不一致、账户信息不清或日期缺失，都可能拖慢审查，即便底层资金来源本身可能是合法的。",
        },
        {
          title: "混合来源通常需要分别解释",
          body: "如果投资资金来自多个来源，通常不能笼统处理，而需要分别说明每一部分的来源和流转证据。",
        },
      ],
      faqTitle: "关于 EB-5 资金来源的快速问题",
      faqs: [
        {
          question: "资金来源是否只需要一份银行流水？",
          answer: "通常不是。很多案件需要更完整的证据链来说明资金如何取得、如何转移以及如何汇集成最终的 EB-5 投资款。",
        },
        {
          question: "赠与或贷款能否构成资金来源的一部分？",
          answer: "可以成为分析的一部分，但通常需要单独材料来证明其合法来源、结构和资金流转过程。",
        },
        {
          question: "为什么资金来源准备常常需要很久？",
          answer: "因为往往要处理较早的记录、跨境转账、翻译问题，并建立与资金实际流动一致的完整时间线。",
        },
      ],
      relatedTitle: "相关文章与指南",
      relatedIntro: "可将资金来源准备与当前身份问题、项目尽调，以及站内核心投资指南结合理解。",
      disclaimer:
        "本文仅提供一般教育性信息。资金来源分析高度依赖个案事实、现有材料和案件策略，应与合格移民律师共同审阅。",
      seo: {
        title: "EB-5 资金来源指南 | 常见材料与准备思路",
        description:
          "了解 EB-5 案件中通常会准备哪些资金来源材料、为什么材料质量重要，以及投资人如何整理清晰的资金时间线。",
        keywords: ["EB-5 资金来源", "EB5 资金证明", "EB-5 资金文件", "EB-5 赠与资金", "EB-5 资金路径"],
      },
    },
    "eb-5-project-due-diligence-guide": {
      slug: "eb-5-project-due-diligence-guide",
      title: "投资人通常如何进行 EB-5 项目尽调",
      intro:
        "EB-5 项目审查不只是看营销材料。很多投资人会关注发行文件条款、就业创造假设、退出机制，以及在投入资金前应提出哪些关键问题。",
      kicker: "项目尽调",
      homeLink: "返回主 EB-5 指南",
      contactLink: "咨询项目尽调问题",
      sections: [
        {
          title: "为什么尽调不能只看项目宣传",
          body: [
            "投资人通常会把商业摘要与私募文件、认购文件、风险披露、就业创造假设以及可获得的第三方尽调报告进行对照。",
            "实际目的在于弄清项目真正承诺了什么、资本如何安排、哪些因素可能影响资金返还或移民进度，以及风险披露中到底写了什么。",
          ],
        },
        {
          title: "为什么移民问题和投资问题往往交织在一起",
          body: [
            "有时人们会把移民审查和商业审查分得过开，但在实际中，项目结构、时间线、资金使用、就业假设和退出条款，往往都会同时影响移民风险和资金返还风险的评估。",
            "因此，很多投资人不仅会问项目看起来是否有吸引力，也会问是否做过独立审查、核心假设如何形成，以及交易文件中有哪些保护或限制。",
          ],
        },
      ],
      cardsTitle: "常见尽调问题",
      cards: [
        {
          title: "真实的风险披露写了什么？",
          body: "很多投资人会超越宣传摘要，直接关注核心发行文件如何描述商业风险、时间不确定性、再融资假设以及本金返还限制。",
        },
        {
          title: "就业创造如何被支撑？",
          body: "根据项目结构不同，投资人往往会问直接就业或模型就业预计如何产生，以及这些假设的依据是什么。",
        },
        {
          title: "退出和返款时间由什么决定？",
          body: "常见问题是，在返还本金之前需要满足哪些事件，这些事件是否依赖再融资、出售、经营表现或其他不确定因素。",
        },
      ],
      faqTitle: "关于 EB-5 项目尽调的快速问题",
      faqs: [
        {
          question: "项目审查更偏投资问题还是移民问题？",
          answer: "通常两者都有。发行结构、风险、就业假设和时间线，往往会同时影响移民规划和资金风险判断。",
        },
        {
          question: "我是否只看项目宣传材料就够了？",
          answer: "大多数投资人都会希望审阅真正的交易和发行文件，而不只是宣传摘要或营销资料。",
        },
        {
          question: "为什么返款条款在尽调中这么重要？",
          answer: "因为资金返还时间通常取决于具体项目条款，而不是固定保证时间表，所以这会直接影响对风险的理解。",
        },
      ],
      relatedTitle: "相关文章与指南",
      relatedIntro: "把项目尽调与资金来源准备、当前身份规划，以及站内主要费用和投资指南结合阅读，会更容易形成完整判断。",
      disclaimer:
        "本文仅提供一般教育性信息。项目审查涉及法律、财务和事实判断，在作出投资决定前应与合格专业顾问共同评估。",
      seo: {
        title: "EB-5 项目尽调指南 | 投资人常问的问题",
        description:
          "了解投资人通常如何进行 EB-5 项目尽调，包括发行文件、就业创造假设、风险披露和本金返还条款。",
        keywords: ["EB-5 尽调", "EB-5 项目审查", "区域中心尽调", "EB-5 项目问题", "EB-5 发行文件"],
      },
    },
    "eb-5-processing-delays-guide": {
      slug: "eb-5-processing-delays-guide",
      title: "哪些因素常导致 EB-5 办理延误",
      intro:
        "很多人会问，为什么有些 EB-5 案件推进更快，而有些更慢。实际时间往往受到签证名额、程序路径、资金来源准备、项目问题、政府补件以及机构积压等多重因素影响。",
      kicker: "流程延误",
      homeLink: "返回主 EB-5 指南",
      contactLink: "咨询 EB-5 延误问题",
      sections: [
        {
          title: "为什么 EB-5 时间线通常不由单一因素决定",
          body: [
            "投资人有时希望找到一个统一平均时间，但 EB-5 审理往往同时受到多个变量影响。案件准备程度、签证名额、项目证据、资金来源材料以及政府工作量都可能共同作用。",
            "因此，即使在相近时间提交的两个案件，推进速度也可能不同。时间差异往往取决于申请材料是否完整、采用的是哪条程序路径，以及提交后是否出现额外问题。",
          ],
        },
        {
          title: "为什么即使存在政府积压，前期准备仍然重要",
          body: [
            "政府积压确实存在，但投资人仍然可以通过材料质量、翻译准备、回复速度和项目选择影响一部分时间线。更强的准备并不保证更快，但薄弱准备往往会制造本可避免的延误。",
            "很多人也低估了正式提交前所花的时间。资金来源整理、项目审阅以及当前身份规划，常常会在递交前就额外增加数周甚至数月。",
          ],
        },
      ],
      cardsTitle: "常见延误来源",
      cards: [
        {
          title: "资金来源材料缺口",
          body: "材料不完整、时间线不一致、翻译缺失或资金转移路径不清，都可能拖慢前期准备并在后续引发更多问题。",
        },
        {
          title: "项目和申请文件问题",
          body: "如果项目证据、就业创造假设或支持文件不够清晰，就可能影响审查推进效率。",
        },
        {
          title: "签证名额与机构工作量",
          body: "即使是准备充分的申请，也可能受到签证可用性限制、政府处理量以及不同程序路径节奏差异的影响。",
        },
      ],
      faqTitle: "关于 EB-5 延误的快速问题",
      faqs: [
        {
          question: "所有人的 EB-5 时间线都一样吗？",
          answer: "不是。时间往往取决于签证名额、申请路径、材料质量、项目证据和政府工作量等多方面因素。",
        },
        {
          question: "更充分的准备能否降低延误风险？",
          answer: "可以降低部分可避免的延误风险，尤其是在材料缺失、翻译不足或时间线不清可能导致后续问询的情况下。",
        },
        {
          question: "所有延误都只是政府积压造成的吗？",
          answer: "不完全是。政府积压很重要，但个案问题和递交前准备情况也可能显著影响时间。",
        },
      ],
      relatedTitle: "相关文章与指南",
      relatedIntro: "可将延误规划与当前身份策略、资金来源准备、项目尽调以及站内主要费用和投资指南结合阅读。",
      disclaimer:
        "本文仅提供一般教育性信息。办理时间受不断变化的事实、机构工作量、签证名额和案件具体问题影响，任何文章都无法预测个案结果或时间。",
      seo: {
        title: "EB-5 办理延误指南 | 哪些因素常拖慢案件",
        description:
          "了解哪些因素常导致 EB-5 办理延误，包括资金来源准备、项目问题、签证名额、程序路径以及政府积压。",
        keywords: ["EB-5 延误", "为什么 EB-5 很慢", "EB-5 积压", "EB-5 时间线", "EB-5 审理时间"],
      },
    },
    "eb-5-visa-availability-retrogression-guide": {
      slug: "eb-5-visa-availability-retrogression-guide",
      title: "签证名额与排期倒退如何影响 EB-5 规划",
      intro:
        "对一些投资人来说，实际问题不仅是 petition 审理多久，还包括签证名额、排期变化或倒退是否会影响后续移民步骤何时可走到。",
      kicker: "签证名额",
      homeLink: "返回主 EB-5 指南",
      contactLink: "咨询签证名额问题",
      sections: [
        {
          title: "为什么签证名额是独立的规划变量",
          body: [
            "很多投资人只关注 petition 审理时间，但签证名额本身也可能是整体时间线中的独立变量。根据所属国家、类别需求以及签证公告的变化，后续路径并不一定对每个投资人都相同。",
            "因此，人们通常不仅关注案件准备和审理时间，也会关注后续步骤是否要以移民签证名额可用为前提。",
          ],
        },
        {
          title: "为什么排期倒退会影响实际规划",
          body: [
            "排期倒退会影响时间预期、家庭安排以及人们如何看待当前身份、旅行和备选方案。即使案件本身准备充分，如果签证可用性发生变化，原先的时间假设也可能需要调整。",
            "这也是为什么很多投资人会持续关注官方来源和个案法律建议，而不是只依赖网络上一条固定的时间线。",
          ],
        },
      ],
      cardsTitle: "常见签证名额问题",
      cards: [
        {
          title: "国别归属可能影响时间",
          body: "在适用规则下，投资人及家庭成员所对应的签证名额可用性，可能会影响实际推进节奏。",
        },
        {
          title: "名额变化会随时间调整",
          body: "基于某一时期作出的计划假设，之后可能因签证公告或需求变化而需要重新评估。",
        },
        {
          title: "时间变化会反过来影响策略",
          body: "很多人会把签证名额与身份规划、家庭安排、旅行需求和整体移民路径放在一起综合考虑，而不是孤立看待。",
        },
      ],
      faqTitle: "关于 EB-5 签证名额的快速问题",
      faqs: [
        {
          question: "Petition 获批是否等于马上有签证名额？",
          answer: "不一定。petition 进度与签证名额可用性在整体移民路径中可能是相关但不同的时间问题。",
        },
        {
          question: "即使案件很强，排期倒退也会影响规划吗？",
          answer: "会。即使案件本身准备充分，排期倒退仍可能影响时间预期和后续程序安排。",
        },
        {
          question: "是否应持续查看官方签证名额来源？",
          answer: "应当如此。很多人会持续关注官方来源，因为名额可用性和截止日期会随时间变化。",
        },
      ],
      relatedTitle: "相关文章与指南",
      relatedIntro: "可将签证名额规划与流程延误、当前身份策略，以及站内主要费用和投资指南结合阅读。",
      disclaimer:
        "本文仅提供一般教育性信息。签证名额和排期倒退属于政府控制并可能变化的事项，因此仍应以官方来源和个案法律建议为准。",
      seo: {
        title: "EB-5 签证名额与排期倒退指南 | 规划问题",
        description:
          "了解签证名额和排期倒退如何影响 EB-5 规划，包括时间预期、当前身份策略以及后续移民步骤。",
        keywords: ["EB-5 签证名额", "EB-5 排期倒退", "EB-5 签证公告", "EB-5 规划", "EB-5 排期"],
      },
    },
  },
};