import type { Locale } from "@/lib/i18n";

export type QuestionTopic = {
  title: string;
  description: string;
  href?: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type SiteCopy = {
  localeName: string;
  nav: {
    overview: string;
    investment: string;
    costs: string;
    comparison: string;
    glossary: string;
    process: string;
    faq: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    reviewBadge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    cardTitle: string;
    cardBody: string;
  };
  stats: Stat[];
  overview: {
    title: string;
    body: string;
    highlights: string[];
  };
  investment: {
    title: string;
    intro: string;
    cards: Array<{ title: string; body: string }>;
    footnote: string;
  };
  costs: {
    title: string;
    intro: string;
    cards: Array<{ title: string; body: string }>;
    tableTitle: string;
    tableHeaders: {
      category: string;
      meaning: string;
      possibleReturn: string;
    };
    tableRows: Array<{ category: string; meaning: string; possibleReturn: string }>;
    footnote: string;
  };
  comparison: {
    title: string;
    intro: string;
    cards: Array<{ title: string; body: string }>;
  };
  process: {
    title: string;
    steps: Array<{ title: string; body: string }>;
  };
  faq: {
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  topics: {
    title: string;
    items: QuestionTopic[];
  };
  contact: {
    title: string;
    intro: string;
    legalStrip: string;
    notice: string;
    interestsLabel: string;
    interestsHint: string;
    interestsRequired: string;
    interestOptions: string[];
    consent: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    placeholders: {
      name: string;
      email: string;
      phone: string;
      visaStatus: string;
      question: string;
    };
  };
  compliance: {
    title: string;
    points: string[];
  };
  sources: {
    title: string;
    intro: string;
    links: Array<{ label: string; url: string; description: string }>;
    reviewedLabel: string;
    reviewedDate: string;
    priorityDisclaimer: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  footer: {
    disclaimer: string;
    copyright: string;
  };
};

export const siteContent: Record<Locale, SiteCopy> = {
  en: {
    localeName: "English",
    nav: {
      overview: "EB-5 Overview",
      investment: "Investment Basics",
      costs: "Cost Breakdown",
      comparison: "Path Comparison",
      glossary: "Glossary",
      process: "Processing Steps",
      faq: "Common Questions",
      contact: "Contact",
    },
    hero: {
      eyebrow: "EB-5 visa guidance for investors already in the U.S.",
      reviewBadge: "Updated from official sources | Last reviewed March 28, 2026",
      title: "Clear, compliant EB-5 visa information without sales pressure.",
      description:
        "Understand the EB-5 process, timing drivers, investment structure basics, and common questions for applicants inside the United States. This site is educational and does not promise immigration outcomes.",
      primaryCta: "Ask an EB-5 question",
      secondaryCta: "Review the process",
      cardTitle: "What this site does",
      cardBody:
        "Explains the EB-5 path in plain language, surfaces common documentation issues, and gives visitors a compliant way to request a follow-up.",
    },
    stats: [
      { value: "8", label: "process stages explained" },
      { value: "3", label: "languages supported" },
      { value: "0", label: "approval guarantees" },
    ],
    overview: {
      title: "What EB-5 means",
      body:
        "The EB-5 Immigrant Investor Program can allow qualifying investors and eligible family members to pursue lawful permanent residence if they meet investment, job creation, and source-of-funds requirements under current law and policy. Final decisions are made by USCIS and other government agencies.",
      highlights: [
        "Educational information written for users comparing options while in the U.S.",
        "Clear reminders that every case depends on documentation, timing, and individual facts.",
        "Multilingual content for English, Spanish, and Chinese-speaking visitors.",
      ],
    },
    investment: {
      title: "How the investment works",
      intro:
        "USCIS and the Congressional Research Service describe EB-5 as an investment into a new commercial enterprise that must meet capital and job-creation rules. The exact project terms vary, but several core points stay consistent.",
      cards: [
        {
          title: "Capital is invested into a qualifying enterprise",
          body: "EB-5 investors place capital into a new commercial enterprise, usually through a standalone structure or a regional center offering. Current statutory thresholds are generally $1,050,000, or $800,000 for qualifying targeted employment area or infrastructure cases, with future inflation adjustments possible under current law.",
        },
        {
          title: "Repayment timing is not fixed by USCIS",
          body: "Current law requires the investor to expect to keep the investment in place for at least two years, and later immigration stages look at sustained investment and job creation. In practice, return of capital usually depends on project documents, business performance, refinancing or sale proceeds, and the offering's exit terms rather than a guaranteed government timetable.",
        },
        {
          title: "EB-5 money must be at risk",
          body: "EB-5 eligibility requires capital to be at risk for gain or loss. That means no compliant EB-5 offering can promise that the money is completely safe, guarantee repayment of principal, or guarantee a profit as a condition of immigration eligibility.",
        },
      ],
      footnote:
        "This summary reflects USCIS EB-5 program materials and the Congressional Research Service overview published June 23, 2025. Rules, thresholds, and agency guidance can change.",
    },
    costs: {
      title: "What costs money in EB-5",
      intro:
        "People often mix up the EB-5 investment amount with the rest of the case budget. They are different. The investment is capital placed into the enterprise, while other costs are separate case or transaction expenses.",
      cards: [
        {
          title: "1. EB-5 investment capital",
          body: "This is usually the largest amount. Under the current framework, investors generally commit $1,050,000, or $800,000 in qualifying targeted employment area or certain infrastructure cases. This is investment capital, not just a filing fee.",
        },
        {
          title: "2. USCIS filing fees",
          body: "USCIS filing fees are separate from the investment amount. The exact total depends on which forms apply to the case and whether family members file related applications. Fee schedules can change, so applicants should confirm the current USCIS fee pages and form instructions.",
        },
        {
          title: "3. Lawyer, project, and transaction costs",
          body: "Many cases also involve immigration attorney fees, document translation costs, source-of-funds preparation expenses, and project or regional-center-related administrative or subscription fees. These costs vary significantly by provider and case complexity.",
        },
      ],
      tableTitle: "Quick view: investment vs. fees vs. possible return",
      tableHeaders: {
        category: "Category",
        meaning: "What it usually means",
        possibleReturn: "Could money come back later?",
      },
      tableRows: [
        {
          category: "EB-5 investment capital",
          meaning: "Capital invested into the qualifying enterprise",
          possibleReturn: "Possibly, depending on project terms and performance",
        },
        {
          category: "USCIS filing fees",
          meaning: "Government application and petition fees",
          possibleReturn: "Usually no",
        },
        {
          category: "Lawyer and project fees",
          meaning: "Professional, administrative, subscription, and transaction costs",
          possibleReturn: "Usually no",
        },
      ],
      footnote:
        "Whether any invested capital is returned later depends on the project terms and performance. Filing, legal, and administrative fees are usually costs, not refundable investment principal.",
    },
    comparison: {
      title: "Standalone EB-5 vs. regional center EB-5",
      intro:
        "Congressional Research Service and USCIS materials describe two main EB-5 pathways. The right fit depends on the project structure, management expectations, and how job creation will be documented.",
      cards: [
        {
          title: "Standalone EB-5",
          body: "A standalone investment is made into a new commercial enterprise that generally must create direct jobs, meaning the enterprise or its subsidiaries are the actual employer. Investors often need to pay closer attention to operational involvement and how direct job creation will be proven.",
        },
        {
          title: "Regional center EB-5",
          body: "Regional center investors usually participate through a USCIS-approved regional center structure. These cases may rely on direct, indirect, and in some cases induced job modeling under applicable rules, and investors are often less involved in day-to-day management than in standalone structures.",
        },
      ],
    },
    process: {
      title: "Typical EB-5 processing path",
      steps: [
        {
          title: "1. Assess fit",
          body: "Review immigration goals, country-specific timing concerns, current U.S. status, and risk tolerance before discussing an EB-5 strategy.",
        },
        {
          title: "2. Review project and offering documents",
          body: "Investors typically examine the new commercial enterprise structure, offering materials, project assumptions, and third-party diligence items.",
        },
        {
          title: "3. Prepare source-of-funds records",
          body: "Document how the invested capital was lawfully obtained and transferred. This is often one of the most time-consuming parts of the case.",
        },
        {
          title: "4. File the immigrant petition",
          body: "The petition package usually includes investment records, project evidence, and source-of-funds documentation.",
        },
        {
          title: "5. Track visa availability and status options",
          body: "Some applicants may evaluate adjustment-related steps while others may need consular processing, depending on eligibility and visa availability.",
        },
        {
          title: "6. Respond to follow-up requests",
          body: "Government agencies may request clarifications or additional records. Timely, accurate responses matter.",
        },
        {
          title: "7. Monitor job creation milestones",
          body: "Project progress and economic reporting support later stages of the EB-5 process.",
        },
        {
          title: "8. Prepare for conditions removal",
          body: "The later filing stage focuses on sustained investment and qualifying job creation evidence.",
        },
      ],
    },
    faq: {
      title: "Questions people often ask",
      items: [
        {
          question: "Can this site tell me whether I will be approved?",
          answer: "No. This site provides general education only. Immigration results depend on your facts, documentation, government review, and current law.",
        },
        {
          question: "Is EB-5 faster if I am already in the U.S.?",
          answer: "Not automatically. Timing depends on eligibility, visa availability, agency processing, and the specific filing path available to you.",
        },
        {
          question: "What usually causes delays?",
          answer: "Incomplete source-of-funds records, translation gaps, unresolved status questions, project-related issues, and government backlogs are common delay drivers.",
        },
        {
          question: "When can an investor usually get the money back?",
          answer: "There is no universal EB-5 repayment date. Return of capital usually depends on the offering documents, project performance, refinancing or sale events, and whether the investment has remained in place long enough to satisfy immigration requirements under the facts of the case.",
        },
        {
          question: "Is an EB-5 investment safe or guaranteed?",
          answer: "No compliant EB-5 case should be described as risk-free. USCIS rules require the capital to be at risk for gain or loss, so investors should assume there is real business risk and should review project documents with qualified legal and financial advisers.",
        },
        {
          question: "Is EB-5 a fee or an investment?",
          answer: "The EB-5 amount is primarily an investment, not just a fee. Separate USCIS, legal, and project-related fees may also apply.",
        },
        {
          question: "How often is this site reviewed, and should I still check USCIS?",
          answer: "This site is reviewed against official public sources, but it is still a secondary summary. Before filing or relying on a process detail, you should confirm the current USCIS page, form instructions, policy updates, and any case-specific guidance with qualified counsel.",
        },
        {
          question: "Do I need legal and investment advice?",
          answer: "Most investors benefit from qualified immigration counsel and appropriate financial or tax advice. This website is not a law firm and does not provide legal advice.",
        },
      ],
    },
    topics: {
      title: "Popular topics for follow-up",
      items: [
        {
          title: "Current U.S. visa status",
          description: "How existing nonimmigrant status can affect the options available to you.",
          href: "/existing-nonimmigrant-status-eb-5-options",
        },
        {
          title: "Source of funds",
          description: "What records are often gathered to explain lawful source and transfer path.",
        },
        {
          title: "Project due diligence",
          description: "Questions investors often raise when reviewing a regional center or project structure.",
        },
      ],
    },
    contact: {
      title: "Ask a question or request a follow-up",
      intro:
        "Use the form to share your contact details and your EB-5 question. Submissions are informational intake requests only.",
      legalStrip:
        "This contact form is for general educational follow-up only. It does not create an attorney-client relationship and should not be used to send confidential legal or financial information.",
      notice:
        "Do not include passport numbers, full birth dates, bank account details, or other highly sensitive information in this form.",
      interestsLabel: "What would you like help with?",
      interestsHint: "Select every topic you want included in the follow-up.",
      interestsRequired: "Select at least one topic so the follow-up can be routed correctly.",
      interestOptions: [
        "Ask for project information available for EB-5 filing",
        "Ask for more information on the EB-5 process",
        "Schedule a free 30-minute informational call about EB-5 qualification and process",
        "Discuss source of funds documentation requirements",
        "Review current U.S. visa or status questions related to EB-5",
        "Ask what documents are usually needed to begin an EB-5 case review",
      ],
      consent:
        "I understand this website provides general information only, not legal advice, and submitting this form does not create an attorney-client relationship.",
      submit: "Send request",
      sending: "Sending...",
      success: "Your request was received. A follow-up can be arranged after review.",
      error: "The request could not be sent. Please review the form and try again.",
      placeholders: {
        name: "Full name",
        email: "Email address",
        phone: "Phone number",
        visaStatus: "Current U.S. visa or status",
        question: "What do you want to know about EB-5?",
      },
    },
    compliance: {
      title: "Compliance commitments",
      points: [
        "No outcome guarantees, priority processing claims, or investment performance promises.",
        "Educational copy clearly separated from any consultation request workflow.",
        "Consent language and sensitive-data warnings included in the intake form.",
      ],
    },
    sources: {
      title: "Official sources",
      intro:
        "Review the government and congressional source material directly if you want to compare this summary against the underlying public references.",
      links: [
        {
          label: "USCIS EB-5 Immigrant Investor Program",
          url: "https://www.uscis.gov/working-in-the-united-states/permanent-workers/eb-5-immigrant-investor-program",
          description: "USCIS overview of eligibility, forms, policy links, and EB-5 program resources.",
        },
        {
          label: "Congressional Research Service IF13040",
          url: "https://www.congress.gov/crs-product/IF13040",
          description: "Nonpartisan legislative overview of EB-5 requirements, pathways, thresholds, and recent program framework.",
        },
      ],
      reviewedLabel: "Last reviewed",
      reviewedDate: "March 28, 2026",
      priorityDisclaimer:
        "If a future USCIS policy update, form instruction, or official government publication differs from this website, the official source should control.",
    },
    seo: {
      title: "EB-5 Visa Information for Investors in the U.S. | EB5 Info",
      description:
        "EB-5 visa processing information for investors already in the United States. Learn timelines, source-of-funds issues, project review basics, and submit questions through a compliant intake form.",
      keywords: [
        "EB-5 visa",
        "EB5 processing",
        "EB-5 visa in USA",
        "EB-5 adjustment of status",
        "investor visa USA",
        "how EB-5 investment works",
        "when do you get EB-5 money back",
        "is EB-5 investment safe",
      ],
    },
    footer: {
      disclaimer:
        "General educational information only. Nothing on this website is legal, tax, or investment advice, and no immigration result is guaranteed.",
      copyright: "EB5 Info",
    },
  },
  es: {
    localeName: "Espanol",
    nav: {
      overview: "Resumen EB-5",
      investment: "Inversion EB-5",
      costs: "Desglose de costos",
      comparison: "Comparacion de vias",
      glossary: "Glosario",
      process: "Pasos del proceso",
      faq: "Preguntas comunes",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "Orientacion EB-5 para inversionistas que ya estan en EE. UU.",
      reviewBadge: "Actualizado con fuentes oficiales | Ultima revision 28 de marzo de 2026",
      title: "Informacion clara y compatible sobre la visa EB-5.",
      description:
        "Entienda el proceso EB-5, los factores que afectan los tiempos, la estructura basica de la inversion y las preguntas mas comunes para solicitantes dentro de Estados Unidos. Este sitio es educativo y no promete resultados migratorios.",
      primaryCta: "Hacer una pregunta",
      secondaryCta: "Ver el proceso",
      cardTitle: "Que hace este sitio",
      cardBody:
        "Explica la ruta EB-5 en lenguaje sencillo, destaca problemas frecuentes de documentacion y ofrece una forma compatible de solicitar seguimiento.",
    },
    stats: [
      { value: "8", label: "etapas explicadas" },
      { value: "3", label: "idiomas disponibles" },
      { value: "0", label: "garantias de aprobacion" },
    ],
    overview: {
      title: "Que significa EB-5",
      body:
        "El Programa de Inmigrante Inversionista EB-5 puede permitir que inversionistas que califican y sus familiares elegibles busquen la residencia permanente legal si cumplen con los requisitos de inversion, creacion de empleo y origen licito de fondos bajo la ley y politica vigentes. Las decisiones finales las toman USCIS y otras agencias gubernamentales.",
      highlights: [
        "Informacion educativa para usuarios que comparan opciones mientras estan en EE. UU.",
        "Recordatorios claros de que cada caso depende de documentos, tiempos y hechos individuales.",
        "Contenido multilingue para visitantes en ingles, espanol y chino.",
      ],
    },
    investment: {
      title: "Como funciona la inversion",
      intro:
        "USCIS y el Servicio de Investigacion del Congreso describen EB-5 como una inversion en una nueva empresa comercial que debe cumplir reglas de capital y creacion de empleo. Los terminos del proyecto cambian, pero varios principios clave se mantienen.",
      cards: [
        {
          title: "El capital se invierte en una empresa calificante",
          body: "Los inversionistas EB-5 colocan capital en una nueva empresa comercial, normalmente mediante una estructura directa o una oferta de centro regional. Los montos legales actuales suelen ser $1,050,000 o $800,000 para casos calificantes en areas de empleo objetivo o infraestructura, con posibles ajustes futuros por inflacion bajo la ley vigente.",
        },
        {
          title: "La devolucion del capital no tiene una fecha fija de USCIS",
          body: "La ley actual exige que el inversionista espere mantener la inversion al menos dos anos, y las etapas posteriores revisan la inversion sostenida y la creacion de empleo. En la practica, la devolucion suele depender de los documentos de la oferta, el desempeno del proyecto, refinanciacion o venta, y las condiciones de salida del proyecto, no de un calendario gubernamental garantizado.",
        },
        {
          title: "El dinero EB-5 debe estar en riesgo",
          body: "La elegibilidad EB-5 exige que el capital este en riesgo de ganancia o perdida. Eso significa que ninguna oferta EB-5 compatible puede prometer que el dinero es completamente seguro, garantizar la devolucion del principal, ni garantizar una ganancia como condicion de la elegibilidad migratoria.",
        },
      ],
      footnote:
        "Este resumen refleja materiales del programa EB-5 de USCIS y la vista general del Congressional Research Service publicada el 23 de junio de 2025. Las reglas, montos y criterios pueden cambiar.",
    },
    costs: {
      title: "Que cuesta dinero en EB-5",
      intro:
        "Muchas personas confunden el monto de inversion EB-5 con el presupuesto total del caso. No son lo mismo. La inversion es capital colocado en la empresa, mientras que los demas costos son gastos separados del caso o de la transaccion.",
      cards: [
        {
          title: "1. Capital de inversion EB-5",
          body: "Suele ser el monto mas grande. Bajo el marco actual, los inversionistas generalmente comprometen $1,050,000 o $800,000 en casos calificantes de area de empleo objetivo o ciertos proyectos de infraestructura. Esto es capital de inversion, no solo una tarifa de tramite.",
        },
        {
          title: "2. Tarifas de presentacion de USCIS",
          body: "Las tarifas de USCIS son separadas del monto de inversion. El total exacto depende de los formularios aplicables y de si familiares presentan solicitudes relacionadas. Las tarifas pueden cambiar, por lo que debe revisarse la pagina oficial de tarifas e instrucciones de formularios de USCIS.",
        },
        {
          title: "3. Honorarios legales, del proyecto y costos de transaccion",
          body: "Muchos casos tambien incluyen honorarios de abogados de inmigracion, traducciones, preparacion de origen de fondos y tarifas administrativas o de suscripcion del proyecto o centro regional. Estos costos varian bastante segun el proveedor y la complejidad del caso.",
        },
      ],
      tableTitle: "Vista rapida: inversion frente a tarifas y posible devolucion",
      tableHeaders: {
        category: "Categoria",
        meaning: "Que significa normalmente",
        possibleReturn: "Podria regresar dinero despues?",
      },
      tableRows: [
        {
          category: "Capital de inversion EB-5",
          meaning: "Capital invertido en la empresa calificante",
          possibleReturn: "Posiblemente, segun los terminos y el desempeno del proyecto",
        },
        {
          category: "Tarifas de USCIS",
          meaning: "Tarifas gubernamentales por solicitudes y peticiones",
          possibleReturn: "Normalmente no",
        },
        {
          category: "Honorarios legales y del proyecto",
          meaning: "Costos profesionales, administrativos, de suscripcion y de transaccion",
          possibleReturn: "Normalmente no",
        },
      ],
      footnote:
        "Si el capital invertido se devuelve mas adelante depende de los terminos y del desempeno del proyecto. Las tarifas de USCIS, honorarios legales y costos administrativos normalmente son gastos, no principal reembolsable.",
    },
    comparison: {
      title: "EB-5 directo frente a EB-5 por centro regional",
      intro:
        "Los materiales de USCIS y del Congressional Research Service describen dos vias principales de EB-5. La opcion adecuada depende de la estructura del proyecto, las expectativas de participacion y la forma en que se demostrara la creacion de empleo.",
      cards: [
        {
          title: "EB-5 directo",
          body: "Una inversion directa suele realizarse en una nueva empresa comercial que por lo general debe crear empleos directos, es decir, empleos donde la empresa o sus subsidiarias son el empleador real. El inversionista normalmente debe prestar mas atencion a la operacion y a como se demostrara la creacion directa de empleos.",
        },
        {
          title: "EB-5 por centro regional",
          body: "Los inversionistas de centros regionales suelen participar mediante una estructura aprobada por USCIS. Estos casos pueden apoyarse en modelado de empleos directos, indirectos y en algunos casos inducidos bajo las reglas aplicables, y el inversionista suele tener menos participacion diaria que en una estructura directa.",
        },
      ],
    },
    process: {
      title: "Ruta tipica del proceso EB-5",
      steps: [
        {
          title: "1. Evaluar compatibilidad",
          body: "Revise objetivos migratorios, consideraciones de tiempo por pais, estatus actual en EE. UU. y tolerancia al riesgo antes de discutir una estrategia EB-5.",
        },
        {
          title: "2. Revisar documentos del proyecto",
          body: "Los inversionistas normalmente analizan la estructura de la empresa comercial, los materiales de oferta, los supuestos del proyecto y la diligencia debida disponible.",
        },
        {
          title: "3. Preparar evidencia del origen de fondos",
          body: "Documente como se obtuvo y transfirio legalmente el capital invertido. Suele ser una de las partes mas lentas del caso.",
        },
        {
          title: "4. Presentar la peticion",
          body: "El paquete suele incluir registros de inversion, evidencia del proyecto y documentacion del origen de fondos.",
        },
        {
          title: "5. Revisar disponibilidad de visa y opciones de estatus",
          body: "Algunos solicitantes pueden evaluar pasos de ajuste mientras otros requeriran proceso consular, segun elegibilidad y disponibilidad de visa.",
        },
        {
          title: "6. Responder solicitudes adicionales",
          body: "Las agencias pueden pedir aclaraciones o registros adicionales. Las respuestas precisas y puntuales importan.",
        },
        {
          title: "7. Monitorear la creacion de empleo",
          body: "El avance del proyecto y los reportes economicos respaldan etapas posteriores del proceso EB-5.",
        },
        {
          title: "8. Preparar la remocion de condiciones",
          body: "La etapa posterior se centra en la inversion sostenida y la evidencia de creacion de empleos calificantes.",
        },
      ],
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        {
          question: "Este sitio puede decirme si sere aprobado?",
          answer: "No. Este sitio solo ofrece informacion general. Los resultados migratorios dependen de sus hechos, documentos, revision gubernamental y la ley vigente.",
        },
        {
          question: "EB-5 es mas rapido si ya estoy en EE. UU.?",
          answer: "No necesariamente. El tiempo depende de la elegibilidad, disponibilidad de visa, procesamiento de agencias y la via de presentacion disponible para usted.",
        },
        {
          question: "Que suele causar demoras?",
          answer: "Registros incompletos del origen de fondos, faltas de traduccion, dudas sobre estatus, temas del proyecto y atrasos gubernamentales son causas comunes.",
        },
        {
          question: "Cuando suele recuperarse el dinero invertido?",
          answer: "No existe una fecha universal de devolucion en EB-5. La devolucion del capital suele depender de los documentos de la oferta, el desempeno del proyecto, refinanciacion o eventos de venta, y de que la inversion haya permanecido el tiempo necesario para cumplir los requisitos migratorios segun los hechos del caso.",
        },
        {
          question: "La inversion EB-5 es segura o garantizada?",
          answer: "No. Un caso EB-5 compatible no debe describirse como libre de riesgo. Las reglas de USCIS exigen que el capital este en riesgo de ganancia o perdida, por lo que el inversionista debe asumir riesgo empresarial real y revisar los documentos del proyecto con asesores legales y financieros calificados.",
        },
        {
          question: "EB-5 es una tarifa o una inversion?",
          answer: "El monto EB-5 es principalmente una inversion, no solo una tarifa. Ademas pueden aplicarse tarifas separadas de USCIS y costos legales o del proyecto.",
        },
        {
          question: "Con que frecuencia se revisa este sitio y aun debo verificar USCIS?",
          answer: "Este sitio se revisa usando fuentes publicas oficiales, pero sigue siendo un resumen secundario. Antes de presentar un caso o depender de un detalle del proceso, debe confirmar la pagina actual de USCIS, las instrucciones de formularios, las actualizaciones de politica y cualquier orientacion especifica con asesoria calificada.",
        },
        {
          question: "Necesito asesoria legal y financiera?",
          answer: "La mayoria de los inversionistas se benefician de asesoria migratoria calificada y de asesoria financiera o fiscal apropiada. Este sitio no es un bufete y no brinda asesoria legal.",
        },
      ],
    },
    topics: {
      title: "Temas populares de seguimiento",
      items: [
        {
          title: "Estatus actual en EE. UU.",
          description: "Como su visa o estatus actual puede afectar las opciones disponibles.",
          href: "/existing-nonimmigrant-status-eb-5-options",
        },
        {
          title: "Origen de fondos",
          description: "Que documentos suelen reunirse para explicar el origen licito y la ruta de transferencia.",
        },
        {
          title: "Diligencia del proyecto",
          description: "Preguntas comunes al revisar un centro regional o la estructura del proyecto.",
        },
      ],
    },
    contact: {
      title: "Haga una pregunta o solicite seguimiento",
      intro:
        "Use el formulario para compartir sus datos de contacto y su pregunta sobre EB-5. Los envios son solicitudes informativas de contacto.",
      legalStrip:
        "Este formulario de contacto es solo para seguimiento educativo general. No crea una relacion abogado-cliente y no debe usarse para enviar informacion legal o financiera confidencial.",
      notice:
        "No incluya numeros de pasaporte, fechas completas de nacimiento, datos bancarios u otra informacion muy sensible en este formulario.",
      interestsLabel: "Sobre que temas desea ayuda?",
      interestsHint: "Seleccione todos los temas que quiera incluir en el seguimiento.",
      interestsRequired: "Seleccione al menos un tema para dirigir correctamente el seguimiento.",
      interestOptions: [
        "Solicitar informacion de proyectos disponibles para presentacion EB-5",
        "Solicitar mas informacion sobre el proceso EB-5",
        "Programar una llamada informativa gratuita de 30 minutos sobre calificacion y proceso EB-5",
        "Hablar sobre requisitos de documentacion del origen de fondos",
        "Revisar preguntas sobre visa o estatus actual en EE. UU. relacionadas con EB-5",
        "Preguntar que documentos suelen necesitarse para iniciar una revision de caso EB-5",
      ],
      consent:
        "Entiendo que este sitio ofrece informacion general solamente, no asesoria legal, y enviar este formulario no crea una relacion abogado-cliente.",
      submit: "Enviar solicitud",
      sending: "Enviando...",
      success: "Su solicitud fue recibida. Se puede coordinar un seguimiento despues de la revision.",
      error: "No se pudo enviar la solicitud. Revise el formulario e intente de nuevo.",
      placeholders: {
        name: "Nombre completo",
        email: "Correo electronico",
        phone: "Numero de telefono",
        visaStatus: "Visa o estatus actual en EE. UU.",
        question: "Que desea saber sobre EB-5?",
      },
    },
    compliance: {
      title: "Compromisos de cumplimiento",
      points: [
        "Sin garantias de resultados, procesamiento prioritario ni promesas de rendimiento.",
        "Contenido educativo claramente separado del formulario de contacto.",
        "Lenguaje de consentimiento y advertencias sobre datos sensibles incluidos en el formulario.",
      ],
    },
    sources: {
      title: "Fuentes oficiales",
      intro:
        "Revise directamente las fuentes gubernamentales y legislativas si desea comparar este resumen con las referencias publicas originales.",
      links: [
        {
          label: "USCIS Programa de Inversionistas Inmigrantes EB-5",
          url: "https://www.uscis.gov/working-in-the-united-states/permanent-workers/eb-5-immigrant-investor-program",
          description: "Resumen de USCIS sobre elegibilidad, formularios, enlaces de politica y recursos del programa EB-5.",
        },
        {
          label: "Congressional Research Service IF13040",
          url: "https://www.congress.gov/crs-product/IF13040",
          description: "Resumen legislativo no partidista sobre requisitos EB-5, vias de inversion, montos y marco reciente del programa.",
        },
      ],
      reviewedLabel: "Ultima revision",
      reviewedDate: "28 de marzo de 2026",
      priorityDisclaimer:
        "Si una futura actualizacion de politica de USCIS, una instruccion oficial de formularios o una publicacion gubernamental difiere de este sitio, debe prevalecer la fuente oficial.",
    },
    seo: {
      title: "Informacion de visa EB-5 para inversionistas en EE. UU. | EB5 Info",
      description:
        "Informacion sobre el proceso EB-5 para inversionistas que ya estan en Estados Unidos. Revise tiempos, origen de fondos, fundamentos del proyecto y envie preguntas mediante un formulario compatible.",
      keywords: ["visa EB-5", "proceso EB5", "inversionista en USA", "ajuste de estatus EB-5", "informacion EB5", "como funciona la inversion EB-5", "cuando devuelven dinero EB-5", "riesgo de inversion EB-5"],
    },
    footer: {
      disclaimer:
        "Informacion educativa general solamente. Nada en este sitio constituye asesoria legal, fiscal o de inversion, y no se garantiza ningun resultado migratorio.",
      copyright: "EB5 Info",
    },
  },
  zh: {
    localeName: "中文",
    nav: {
      overview: "EB-5 概览",
      investment: "投资机制",
      costs: "费用构成",
      comparison: "路径比较",
      glossary: "术语表",
      process: "办理流程",
      faq: "常见问题",
      contact: "联系咨询",
    },
    hero: {
      eyebrow: "面向已在美国境内投资人的 EB-5 信息说明",
      reviewBadge: "依据官方来源更新 | 最近审核日期 2026年3月28日",
      title: "用清晰且合规的方式了解 EB-5 签证流程。",
      description:
        "帮助您理解 EB-5 的基本流程、影响审理时间的因素、投资结构常识以及在美国境内申请人常问的问题。本网站仅提供一般信息，不承诺任何移民结果。",
      primaryCta: "提交问题",
      secondaryCta: "查看流程",
      cardTitle: "本网站提供什么",
      cardBody:
        "用易懂语言解释 EB-5 路径，提示常见文件问题，并提供合规的咨询提交方式。",
    },
    stats: [
      { value: "8", label: "个流程阶段说明" },
      { value: "3", label: "种语言支持" },
      { value: "0", label: "项审批保证" },
    ],
    overview: {
      title: "什么是 EB-5",
      body:
        "EB-5 投资移民项目在符合现行法律和政策的前提下，可能使合格投资人及其符合条件的家庭成员通过投资、就业创造和资金来源证明申请合法永久居留。最终决定由 USCIS 及其他政府机构作出。",
      highlights: [
        "为正在美国境内比较移民路径的用户提供教育性信息。",
        "明确提示每个案件都取决于材料、时间安排和个人事实。",
        "提供英文、西班牙文和中文内容。",
      ],
    },
    investment: {
      title: "投资是如何运作的",
      intro:
        "根据 USCIS 和美国国会研究处的公开说明，EB-5 本质上是向符合要求的新商业企业投入资本，并满足资本与就业创造规则。不同项目条款不同，但有几个核心原则基本一致。",
      cards: [
        {
          title: "资金投入到符合要求的商业实体中",
          body: "EB-5 投资人通常将资本投入新的商业企业，可通过直投结构或区域中心项目完成。根据现行法律，投资门槛通常为 1,050,000 美元；对于符合条件的目标就业区或基础设施项目，通常为 800,000 美元。未来金额可能按现行法律进行通胀调整。",
        },
        {
          title: "返还资金时间并非由 USCIS 固定规定",
          body: "现行法律要求投资人预期将投资维持至少两年，而后续移民阶段会关注投资是否持续以及是否完成就业创造。实际何时返还本金，通常取决于项目文件、项目经营表现、再融资或出售安排，以及项目退出条款，而不是政府保证的固定时间表。",
        },
        {
          title: "EB-5 资金必须处于风险之中",
          body: "EB-5 资格要求资本必须处于可能获利也可能亏损的风险状态。这意味着合规的 EB-5 项目不能把资金描述为绝对安全、不能保证本金返还，也不能保证收益作为移民资格的一部分。",
        },
      ],
      footnote:
        "本摘要依据 USCIS EB-5 项目公开资料以及 2025 年 6 月 23 日发布的美国国会研究处概览整理。规则、金额门槛和机构指引可能变化。",
    },
    costs: {
      title: "EB-5 里哪些部分要花钱",
      intro:
        "很多人会把 EB-5 投资金额和整个案件预算混为一谈，但两者并不相同。投资金额是投入企业的资本，其他费用则是独立的申请或交易成本。",
      cards: [
        {
          title: "1. EB-5 投资本金",
          body: "这通常是最大的一笔。根据现行框架，投资人通常投入 1,050,000 美元，或者在符合条件的目标就业区及某些基础设施项目中投入 800,000 美元。这是投资资本，不只是申请手续费。",
        },
        {
          title: "2. USCIS 申请费用",
          body: "USCIS 申请费与投资金额分开计算。具体总额取决于适用的表格以及家属是否提交相关申请。收费标准可能变化，因此应以 USCIS 当前收费页面和表格说明为准。",
        },
        {
          title: "3. 律师费、项目费用和交易成本",
          body: "很多案件还会产生移民律师费、翻译费、资金来源整理成本，以及项目方或区域中心的行政费、认购费等。这部分金额会因服务提供方和案件复杂程度而明显不同。",
        },
      ],
      tableTitle: "快速区分：投资、本金返还与各类费用",
      tableHeaders: {
        category: "类别",
        meaning: "通常代表什么",
        possibleReturn: "以后可能拿回钱吗？",
      },
      tableRows: [
        {
          category: "EB-5 投资本金",
          meaning: "投入符合要求企业的资本",
          possibleReturn: "有可能，但取决于项目条款和项目表现",
        },
        {
          category: "USCIS 申请费用",
          meaning: "政府申请和请愿表格费用",
          possibleReturn: "通常不能",
        },
        {
          category: "律师费和项目费用",
          meaning: "专业服务、行政、认购和交易成本",
          possibleReturn: "通常不能",
        },
      ],
      footnote:
        "未来是否能拿回投资本金，取决于项目条款和项目表现。USCIS 申请费、律师费和行政费用通常属于支出，不属于可返还的投资本金。",
    },
    comparison: {
      title: "直投 EB-5 与区域中心 EB-5 的区别",
      intro:
        "USCIS 和美国国会研究处资料通常将 EB-5 分为两条主要路径。选择哪一种，通常取决于项目结构、管理参与程度，以及就业创造将如何被证明。",
      cards: [
        {
          title: "直投 EB-5",
          body: "直投通常是向新的商业企业直接投入资金，并且一般需要创造直接就业，也就是由该企业或其子公司直接雇佣的岗位。投资人通常需要更关注企业运营，以及如何证明直接就业创造。",
        },
        {
          title: "区域中心 EB-5",
          body: "区域中心投资通常通过 USCIS 批准的区域中心结构进行。这类案件在适用规则下可依赖直接、间接，某些情况下还包括诱发就业的模型计算，而且投资人通常比直投结构更少参与日常经营。",
        },
      ],
    },
    process: {
      title: "典型 EB-5 办理路径",
      steps: [
        {
          title: "1. 评估适配度",
          body: "在讨论 EB-5 策略前，先梳理移民目标、排期因素、当前美国身份以及风险承受能力。",
        },
        {
          title: "2. 审阅项目与发行文件",
          body: "投资人通常会查看商业实体结构、募资文件、项目假设以及可获得的第三方尽调材料。",
        },
        {
          title: "3. 准备资金来源文件",
          body: "说明投资资金如何合法取得并完成转移。这通常是案件中最耗时的部分之一。",
        },
        {
          title: "4. 递交移民申请",
          body: "申请包通常包括投资记录、项目证据以及资金来源文件。",
        },
        {
          title: "5. 关注排期和身份路径",
          body: "部分申请人可能评估境内身份调整步骤，另一些则可能需要领馆处理，具体取决于资格和签证名额。",
        },
        {
          title: "6. 回复补件或问询",
          body: "政府机构可能要求进一步说明或补充材料，及时且准确的回复非常重要。",
        },
        {
          title: "7. 跟踪就业创造进度",
          body: "项目进展和经济报告会支持 EB-5 后续阶段。",
        },
        {
          title: "8. 准备去除条件阶段",
          body: "后续申请通常聚焦持续投资和符合要求的就业创造证据。",
        },
      ],
    },
    faq: {
      title: "常见问题",
      items: [
        {
          question: "这个网站能判断我是否一定获批吗？",
          answer: "不能。本网站仅提供一般教育信息。移民结果取决于您的事实情况、文件、政府审查以及当时适用的法律政策。",
        },
        {
          question: "如果我已经在美国，EB-5 会更快吗？",
          answer: "不一定。时间取决于资格、排期、机构处理速度以及您可适用的申请路径。",
        },
        {
          question: "常见延误原因有哪些？",
          answer: "资金来源文件不完整、翻译问题、身份问题、项目相关风险以及政府积压都可能导致延误。",
        },
        {
          question: "投资人通常什么时候能拿回投资款？",
          answer: "EB-5 并没有统一的返款日期。资金返还通常取决于募集文件、项目表现、再融资或出售事件，以及投资是否已维持到满足移民要求所需的阶段。",
        },
        {
          question: "EB-5 投资是否安全或有保证？",
          answer: "不是。合规的 EB-5 投资不能被描述为无风险。USCIS 规则要求资金必须处于可能盈利也可能亏损的风险中，因此投资人应假设存在真实商业风险，并结合独立律师和财务顾问审阅项目文件。",
        },
        {
          question: "EB-5 是手续费还是投资？",
          answer: "EB-5 的主要金额本质上是投资，不只是手续费。除此之外，通常还会有单独的 USCIS 费用、律师费和项目相关费用。",
        },
        {
          question: "本站多久审核一次，我是否仍应查看 USCIS 官方信息？",
          answer: "本站会根据公开官方来源进行审核，但本质上仍是二次整理摘要。在提交申请或依赖某个流程细节前，您仍应核对 USCIS 当前页面、表格说明、政策更新，以及在需要时向合格律师确认个案相关要求。",
        },
        {
          question: "我是否需要律师和投资顾问？",
          answer: "多数投资人都会寻求合格的移民律师以及适当的税务或财务建议。本网站不是律师事务所，也不提供法律意见。",
        },
      ],
    },
    topics: {
      title: "常见咨询主题",
      items: [
        {
          title: "当前美国身份",
          description: "了解现有签证或身份如何影响您可选择的路径。",
          href: "/existing-nonimmigrant-status-eb-5-options",
        },
        {
          title: "资金来源",
          description: "通常需要哪些材料来说明资金合法来源及转账路径。",
        },
        {
          title: "项目尽调",
          description: "投资人在评估区域中心或项目结构时常问的问题。",
        },
      ],
    },
    contact: {
      title: "提交问题或留下联系方式",
      intro:
        "您可以使用表单提交联系方式和 EB-5 相关问题。该表单仅用于一般咨询意向收集。",
      legalStrip:
        "此联系表单仅用于一般教育性后续沟通，不会建立律师与客户关系，也不应用于提交机密法律或财务信息。",
      notice:
        "请不要在表单中填写护照号码、完整出生日期、银行账户信息或其他高度敏感数据。",
      interestsLabel: "您希望了解哪些内容？",
      interestsHint: "请选择所有希望在后续沟通中讨论的主题。",
      interestsRequired: "请至少选择一个主题，以便正确安排后续沟通。",
      interestOptions: [
        "了解可用于 EB-5 申请的项目信息",
        "了解更多 EB-5 办理流程信息",
        "预约一次免费的 30 分钟 EB-5 资格与流程说明电话",
        "咨询资金来源文件要求",
        "咨询与 EB-5 相关的当前美国签证或身份问题",
        "了解开始 EB-5 案件评估通常需要准备哪些文件",
      ],
      consent:
        "我理解本网站仅提供一般信息，不构成法律意见，提交表单不会建立律师与客户关系。",
      submit: "提交请求",
      sending: "提交中...",
      success: "您的请求已收到，审核后可安排后续联系。",
      error: "提交失败，请检查表单后重试。",
      placeholders: {
        name: "姓名",
        email: "电子邮箱",
        phone: "电话号码",
        visaStatus: "当前美国签证或身份",
        question: "您想了解哪些 EB-5 问题？",
      },
    },
    compliance: {
      title: "合规说明",
      points: [
        "不提供结果保证、加急承诺或投资回报承诺。",
        "教育性内容与咨询表单流程明确区分。",
        "表单包含同意说明和敏感信息提醒。",
      ],
    },
    sources: {
      title: "官方来源",
      intro:
        "如果您希望将本站摘要与原始公开资料对照，可直接查看以下政府与国会资料来源。",
      links: [
        {
          label: "USCIS EB-5 移民投资人项目",
          url: "https://www.uscis.gov/working-in-the-united-states/permanent-workers/eb-5-immigrant-investor-program",
          description: "USCIS 关于资格、表格、政策链接及 EB-5 项目资源的官方说明。",
        },
        {
          label: "美国国会研究处 IF13040",
          url: "https://www.congress.gov/crs-product/IF13040",
          description: "关于 EB-5 要求、投资路径、金额门槛及近期项目框架的非党派立法概览。",
        },
      ],
      reviewedLabel: "最近审核日期",
      reviewedDate: "2026年3月28日",
      priorityDisclaimer:
        "如果未来 USCIS 政策更新、官方表格说明或其他政府正式发布内容与本站不同，应以官方来源为准。",
    },
    seo: {
      title: "美国境内投资人的 EB-5 签证信息 | EB5 Info",
      description:
        "为已在美国的投资人提供 EB-5 签证流程信息，涵盖审理时间、资金来源、项目审核基础，并可通过合规表单提交问题。",
      keywords: ["EB-5 签证", "EB5 办理", "美国投资移民", "境内调整身份", "EB5 资讯", "EB-5 投资如何运作", "EB-5 何时返款", "EB-5 投资风险"],
    },
    footer: {
      disclaimer:
        "本网站仅提供一般教育信息，不构成法律、税务或投资建议，也不保证任何移民结果。",
      copyright: "EB5 Info",
    },
  },
};