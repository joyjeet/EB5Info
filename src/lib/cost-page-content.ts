import type { Locale } from "@/lib/i18n";

type CostPageFaq = {
  question: string;
  answer: string;
};

type CostPageContent = {
  mainPageCta: string;
  title: string;
  intro: string;
  cards: Array<{ title: string; body: string }>;
  faqTitle: string;
  faqIntro: string;
  faqs: CostPageFaq[];
  homeLink: string;
  contactLink: string;
  relatedTitle: string;
  relatedIntro: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};

export const costPageContent: Record<Locale, CostPageContent> = {
  en: {
    mainPageCta: "Read the dedicated EB-5 cost guide",
    title: "EB-5 cost in USA",
    intro:
      "This page is focused on one question: what money is required for EB-5 in the United States, what part is invested, what part is paid as fees, and what part might or might not come back later.",
    cards: [
      {
        title: "The investment is usually the largest amount",
        body: "Under the current framework, many applicants focus first on the required investment threshold, which is generally $1,050,000 or $800,000 in qualifying targeted employment area or certain infrastructure cases.",
      },
      {
        title: "Fees are separate from the investment",
        body: "USCIS filing fees, attorney fees, translation costs, and project or subscription charges are usually separate from the invested capital and should be budgeted separately.",
      },
      {
        title: "Return of money depends on the project",
        body: "Invested capital may or may not come back later depending on the offering terms, exit structure, business results, and the fact that EB-5 capital must remain at risk.",
      },
    ],
    faqTitle: "Quick answers about EB-5 cost",
    faqIntro: "These short answers are written for visitors searching specifically for EB-5 costs in the U.S.",
    faqs: [
      {
        question: "How much money is required for EB-5?",
        answer: "The main investment amount is generally $1,050,000, or $800,000 in qualifying targeted employment area or certain infrastructure cases under the current framework.",
      },
      {
        question: "Is EB-5 just a government fee?",
        answer: "No. The main EB-5 amount is investment capital. Government filing fees and professional costs are additional expenses.",
      },
      {
        question: "Will I definitely get the investment money back?",
        answer: "No. EB-5 capital must be at risk, so return of money depends on project terms and performance rather than a guarantee.",
      },
    ],
    homeLink: "Back to the main EB-5 guide",
    contactLink: "Ask a cost-related EB-5 question",
    relatedTitle: "Related EB-5 guides",
    relatedIntro: "Use these related pages to compare the investment amount question with the separate issue of whether invested capital may come back later.",
    seo: {
      title: "EB-5 Cost in USA | Investment Amount, Fees, and Possible Return",
      description:
        "Understand EB-5 cost in the USA, including the required investment amount, USCIS filing fees, lawyer and project costs, and whether invested money may come back later.",
      keywords: ["EB-5 cost in USA", "EB5 investment amount", "EB-5 fees", "EB-5 money back", "EB-5 cost breakdown"],
    },
  },
  es: {
    mainPageCta: "Ver la guia dedicada de costos EB-5",
    title: "Costo de EB-5 en Estados Unidos",
    intro:
      "Esta pagina responde una pregunta concreta: cuanto dinero se necesita para EB-5 en Estados Unidos, que parte se invierte, que parte se paga como tarifa y que parte podria o no regresar despues.",
    cards: [
      {
        title: "La inversion suele ser el monto mas alto",
        body: "Bajo el marco actual, muchos solicitantes se enfocan primero en el umbral de inversion requerido, que generalmente es de $1,050,000 o $800,000 en casos calificantes de area de empleo objetivo o ciertos proyectos de infraestructura.",
      },
      {
        title: "Las tarifas son separadas de la inversion",
        body: "Las tarifas de USCIS, honorarios legales, traducciones y cargos del proyecto o de suscripcion suelen ser costos separados del capital invertido y deben presupuestarse aparte.",
      },
      {
        title: "La devolucion del dinero depende del proyecto",
        body: "El capital invertido podria o no regresar despues, segun los terminos de la oferta, la estructura de salida, los resultados del negocio y el hecho de que el capital EB-5 debe permanecer en riesgo.",
      },
    ],
    faqTitle: "Respuestas rapidas sobre el costo EB-5",
    faqIntro: "Estas respuestas breves estan dirigidas a visitantes que buscan especificamente informacion sobre el costo EB-5 en Estados Unidos.",
    faqs: [
      {
        question: "Cuanto dinero se requiere para EB-5?",
        answer: "El monto principal de inversion generalmente es $1,050,000 o $800,000 en casos calificantes de area de empleo objetivo o ciertos proyectos de infraestructura bajo el marco actual.",
      },
      {
        question: "EB-5 es solo una tarifa gubernamental?",
        answer: "No. El monto principal EB-5 es capital de inversion. Las tarifas gubernamentales y los costos profesionales son gastos adicionales.",
      },
      {
        question: "Recibire de regreso el dinero invertido con certeza?",
        answer: "No. El capital EB-5 debe estar en riesgo, por lo que la devolucion del dinero depende de los terminos y del desempeno del proyecto, no de una garantia.",
      },
    ],
    homeLink: "Volver a la guia principal EB-5",
    contactLink: "Hacer una pregunta sobre costos EB-5",
    relatedTitle: "Guias relacionadas de EB-5",
    relatedIntro: "Use estas paginas relacionadas para comparar la pregunta sobre el monto de inversion con la cuestion separada de si el capital invertido podria regresar despues.",
    seo: {
      title: "Costo de EB-5 en Estados Unidos | Inversion, tarifas y posible devolucion",
      description:
        "Entienda el costo de EB-5 en Estados Unidos, incluyendo el monto de inversion requerido, tarifas de USCIS, honorarios legales y del proyecto, y si el dinero invertido podria regresar despues.",
      keywords: ["costo EB-5 en USA", "monto de inversion EB5", "tarifas EB-5", "devolucion dinero EB-5", "desglose costo EB-5"],
    },
  },
  zh: {
    mainPageCta: "查看专门的 EB-5 费用指南",
    title: "美国 EB-5 费用说明",
    intro:
      "本页专门回答一个问题：在美国申请 EB-5 通常需要准备哪些资金，哪些属于投资本金，哪些属于费用，以及哪些钱未来可能返还、哪些通常不会返还。",
    cards: [
      {
        title: "投资本金通常是最大的一部分",
        body: "在现行框架下，很多申请人首先关注的是投资门槛，通常为 1,050,000 美元，或者在符合条件的目标就业区及某些基础设施项目中为 800,000 美元。",
      },
      {
        title: "各类费用与投资本金分开计算",
        body: "USCIS 申请费、律师费、翻译费以及项目方或认购相关费用，通常都与投资本金分开，应该单独预算。",
      },
      {
        title: "资金是否返还取决于项目",
        body: "未来能否拿回投资本金，通常取决于项目文件、退出安排、经营结果，以及 EB-5 资金必须处于风险之中的要求。",
      },
    ],
    faqTitle: "关于 EB-5 费用的快速回答",
    faqIntro: "这些简短回答面向专门搜索美国 EB-5 费用问题的访问者。",
    faqs: [
      {
        question: "申请 EB-5 需要准备多少钱？",
        answer: "主要投资金额通常为 1,050,000 美元；在符合条件的目标就业区或某些基础设施项目中，通常为 800,000 美元。",
      },
      {
        question: "EB-5 只是政府手续费吗？",
        answer: "不是。EB-5 的主要金额是投资本金，政府申请费和专业服务费属于额外成本。",
      },
      {
        question: "投资的钱一定能拿回来吗？",
        answer: "不能保证。EB-5 资金必须处于风险之中，因此能否返还取决于项目条款和项目表现，而不是保证。",
      },
    ],
    homeLink: "返回主 EB-5 指南",
    contactLink: "咨询 EB-5 费用相关问题",
    relatedTitle: "相关 EB-5 指南",
    relatedIntro: "您可以结合这些相关页面，一起理解投资金额问题，以及投资本金未来是否可能返还这个独立问题。",
    seo: {
      title: "美国 EB-5 费用 | 投资金额、各类费用与可能返还",
      description:
        "了解美国 EB-5 费用，包括所需投资金额、USCIS 申请费、律师和项目费用，以及投资本金未来是否可能返还。",
      keywords: ["美国 EB-5 费用", "EB5 投资金额", "EB-5 申请费", "EB-5 资金返还", "EB-5 费用构成"],
    },
  },
};