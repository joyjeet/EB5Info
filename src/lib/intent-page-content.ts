import type { Locale } from "@/lib/i18n";

type IntentPageFaq = {
  question: string;
  answer: string;
};

type IntentPage = {
  mainPageCta: string;
  title: string;
  intro: string;
  cards: Array<{ title: string; body: string }>;
  faqTitle: string;
  faqIntro: string;
  faqs: IntentPageFaq[];
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

type IntentPageMap = {
  investmentAmount: IntentPage;
  moneyBack: IntentPage;
};

export const intentPageContent: Record<Locale, IntentPageMap> = {
  en: {
    investmentAmount: {
      mainPageCta: "Read the EB-5 investment amount guide",
      title: "EB-5 investment amount",
      intro:
        "This page answers a narrow question: how much investment capital is generally required for EB-5 under the current framework, and why that amount is different from the rest of the case budget.",
      cards: [
        {
          title: "The standard threshold is usually higher",
          body: "Under the current framework, the standard EB-5 investment amount is generally $1,050,000.",
        },
        {
          title: "Some cases may qualify for the lower threshold",
          body: "A lower threshold of $800,000 may apply in qualifying targeted employment area and certain infrastructure cases under the current framework.",
        },
        {
          title: "The investment amount is not the whole budget",
          body: "Even after identifying the investment threshold, applicants still need to budget separately for USCIS fees, attorney costs, and possible project or transaction expenses.",
        },
      ],
      faqTitle: "Quick answers about the EB-5 investment amount",
      faqIntro: "Short answers for visitors specifically searching for the required EB-5 investment amount.",
      faqs: [
        {
          question: "What is the normal EB-5 investment amount?",
          answer: "The normal amount is generally $1,050,000 under the current framework.",
        },
        {
          question: "When can the lower EB-5 amount apply?",
          answer: "A lower amount of $800,000 may apply in qualifying targeted employment area or certain infrastructure cases under the current framework.",
        },
        {
          question: "Does the investment amount include USCIS and lawyer fees?",
          answer: "No. The investment amount is separate from government filing fees, legal fees, and many project-related costs.",
        },
      ],
      homeLink: "Back to the main EB-5 guide",
      contactLink: "Ask an EB-5 investment amount question",
      relatedTitle: "Related EB-5 guides",
      relatedIntro: "Compare the investment amount issue with overall EB-5 costs and the separate question of whether invested capital may come back later.",
      seo: {
        title: "EB-5 Investment Amount | Current Thresholds and What They Mean",
        description:
          "Learn the EB-5 investment amount under the current framework, when the lower threshold may apply, and why the investment amount is separate from filing and legal fees.",
        keywords: ["EB-5 investment amount", "EB5 amount", "EB-5 800000", "EB-5 1050000", "EB-5 minimum investment"],
      },
    },
    moneyBack: {
      mainPageCta: "Read the EB-5 money-back guide",
      title: "Can I get EB-5 money back?",
      intro:
        "This page focuses on whether invested EB-5 capital may come back later, what affects repayment timing, and why no compliant EB-5 offering should promise a guaranteed return of principal.",
      cards: [
        {
          title: "Return of capital is not guaranteed",
          body: "Because EB-5 capital must be at risk, repayment of the invested amount cannot be treated as guaranteed.",
        },
        {
          title: "Timing depends on the project terms",
          body: "Even when repayment is contemplated, timing usually depends on project documents, exit terms, refinancing, sale events, and project performance rather than a fixed government deadline.",
        },
        {
          title: "Fees usually do not come back",
          body: "USCIS filing fees, attorney fees, translation costs, and many project administration charges are usually costs rather than refundable principal.",
        },
      ],
      faqTitle: "Quick answers about getting money back",
      faqIntro: "Short answers for visitors searching whether EB-5 money is returned later.",
      faqs: [
        {
          question: "Will I definitely get my EB-5 money back?",
          answer: "No. EB-5 capital must be at risk, so no compliant structure should guarantee return of principal.",
        },
        {
          question: "When might EB-5 money come back?",
          answer: "If money comes back, it usually depends on the project terms, exit structure, refinancing, sale events, and performance.",
        },
        {
          question: "Do USCIS filing fees come back?",
          answer: "Usually no. Government filing fees and many professional costs are generally expenses rather than refundable investment capital.",
        },
      ],
      homeLink: "Back to the main EB-5 guide",
      contactLink: "Ask a question about EB-5 money back",
      relatedTitle: "Related EB-5 guides",
      relatedIntro: "Compare the return-of-capital question with the overall cost breakdown and the separate issue of the required EB-5 investment amount.",
      seo: {
        title: "Can I Get EB-5 Money Back? | Return of Capital and Risk",
        description:
          "Understand whether EB-5 money can come back later, why repayment is not guaranteed, and how project terms affect return of capital and timing.",
        keywords: ["can I get EB-5 money back", "EB-5 money back", "EB5 return of capital", "is EB-5 money refundable", "EB-5 repayment timing"],
      },
    },
  },
  es: {
    investmentAmount: {
      mainPageCta: "Ver la guia del monto de inversion EB-5",
      title: "Monto de inversion EB-5",
      intro:
        "Esta pagina responde una pregunta concreta: cuanto capital de inversion suele requerirse para EB-5 bajo el marco actual y por que ese monto es distinto del resto del presupuesto del caso.",
      cards: [
        {
          title: "El umbral estandar suele ser mas alto",
          body: "Bajo el marco actual, el monto estandar de inversion EB-5 generalmente es de $1,050,000.",
        },
        {
          title: "Algunos casos pueden calificar para el monto reducido",
          body: "Un monto reducido de $800,000 puede aplicar en casos calificantes de area de empleo objetivo o ciertos proyectos de infraestructura bajo el marco actual.",
        },
        {
          title: "El monto de inversion no es todo el presupuesto",
          body: "Incluso despues de identificar el umbral de inversion, los solicitantes deben presupuestar por separado las tarifas de USCIS, costos legales y posibles gastos del proyecto o de la transaccion.",
        },
      ],
      faqTitle: "Respuestas rapidas sobre el monto de inversion EB-5",
      faqIntro: "Respuestas breves para visitantes que buscan especificamente el monto requerido de inversion EB-5.",
      faqs: [
        {
          question: "Cual es el monto normal de inversion EB-5?",
          answer: "El monto normal generalmente es de $1,050,000 bajo el marco actual.",
        },
        {
          question: "Cuando puede aplicar el monto reducido de EB-5?",
          answer: "Un monto reducido de $800,000 puede aplicar en casos calificantes de area de empleo objetivo o ciertos proyectos de infraestructura bajo el marco actual.",
        },
        {
          question: "El monto de inversion incluye tarifas de USCIS y honorarios legales?",
          answer: "No. El monto de inversion es separado de las tarifas gubernamentales, honorarios legales y muchos costos relacionados con el proyecto.",
        },
      ],
      homeLink: "Volver a la guia principal EB-5",
      contactLink: "Hacer una pregunta sobre el monto de inversion EB-5",
      relatedTitle: "Guias relacionadas de EB-5",
      relatedIntro: "Compare la pregunta sobre el monto de inversion con el costo total EB-5 y con la cuestion separada de si el capital invertido podria regresar despues.",
      seo: {
        title: "Monto de Inversion EB-5 | Umbrales actuales y que significan",
        description:
          "Conozca el monto de inversion EB-5 bajo el marco actual, cuando puede aplicar el umbral reducido y por que este monto es separado de las tarifas legales y de USCIS.",
        keywords: ["monto de inversion EB-5", "monto EB5", "EB-5 800000", "EB-5 1050000", "inversion minima EB-5"],
      },
    },
    moneyBack: {
      mainPageCta: "Ver la guia sobre si se devuelve el dinero EB-5",
      title: "Se puede recuperar el dinero EB-5?",
      intro:
        "Esta pagina explica si el capital invertido en EB-5 podria regresar despues, que factores afectan el momento de devolucion y por que ninguna oferta EB-5 compatible debe prometer devolucion garantizada del principal.",
      cards: [
        {
          title: "La devolucion del capital no esta garantizada",
          body: "Como el capital EB-5 debe estar en riesgo, la devolucion del monto invertido no puede tratarse como garantizada.",
        },
        {
          title: "El tiempo depende de los terminos del proyecto",
          body: "Incluso cuando se contempla una devolucion, el momento suele depender de los documentos del proyecto, las condiciones de salida, refinanciacion, eventos de venta y desempeno del proyecto, no de un plazo fijo del gobierno.",
        },
        {
          title: "Las tarifas generalmente no regresan",
          body: "Las tarifas de USCIS, honorarios legales, traducciones y muchos cargos administrativos del proyecto generalmente son costos y no principal reembolsable.",
        },
      ],
      faqTitle: "Respuestas rapidas sobre recuperar dinero",
      faqIntro: "Respuestas breves para visitantes que buscan si el dinero EB-5 se devuelve despues.",
      faqs: [
        {
          question: "Voy a recuperar con certeza mi dinero EB-5?",
          answer: "No. El capital EB-5 debe estar en riesgo, por lo que ninguna estructura compatible debe garantizar la devolucion del principal.",
        },
        {
          question: "Cuando podria regresar el dinero EB-5?",
          answer: "Si el dinero regresa, normalmente depende de los terminos del proyecto, la estructura de salida, refinanciacion, eventos de venta y desempeno.",
        },
        {
          question: "Las tarifas de USCIS se devuelven?",
          answer: "Normalmente no. Las tarifas gubernamentales y muchos costos profesionales suelen ser gastos y no capital de inversion reembolsable.",
        },
      ],
      homeLink: "Volver a la guia principal EB-5",
      contactLink: "Hacer una pregunta sobre devolucion del dinero EB-5",
      relatedTitle: "Guias relacionadas de EB-5",
      relatedIntro: "Compare la pregunta sobre devolucion del capital con el desglose total de costos y con la cuestion separada del monto requerido de inversion EB-5.",
      seo: {
        title: "Se Puede Recuperar el Dinero EB-5? | Devolucion de capital y riesgo",
        description:
          "Entienda si el dinero EB-5 puede regresar despues, por que la devolucion no esta garantizada y como los terminos del proyecto afectan la devolucion del capital y el tiempo.",
        keywords: ["se puede recuperar dinero EB-5", "devolucion dinero EB-5", "retorno de capital EB5", "EB-5 reembolso", "tiempo devolucion EB-5"],
      },
    },
  },
  zh: {
    investmentAmount: {
      mainPageCta: "查看 EB-5 投资金额指南",
      title: "EB-5 投资金额",
      intro:
        "本页专门回答一个问题：在现行框架下，EB-5 通常需要多少投资本金，以及为什么这个金额与案件中的其他费用不同。",
      cards: [
        {
          title: "标准门槛通常更高",
          body: "在现行框架下，标准 EB-5 投资金额通常为 1,050,000 美元。",
        },
        {
          title: "部分案件可能适用较低门槛",
          body: "在符合条件的目标就业区或某些基础设施项目中，现行框架下可能适用 800,000 美元的较低门槛。",
        },
        {
          title: "投资金额不等于全部预算",
          body: "即使确认了投资门槛，申请人通常仍需另外预算 USCIS 费用、律师费以及项目或交易相关开支。",
        },
      ],
      faqTitle: "关于 EB-5 投资金额的快速回答",
      faqIntro: "面向专门搜索 EB-5 投资金额问题的访问者。",
      faqs: [
        {
          question: "EB-5 常见投资金额是多少？",
          answer: "在现行框架下，常见标准金额通常为 1,050,000 美元。",
        },
        {
          question: "什么时候可以适用较低的 EB-5 金额？",
          answer: "在符合条件的目标就业区或某些基础设施项目中，现行框架下可能适用 800,000 美元的较低金额。",
        },
        {
          question: "投资金额是否包含 USCIS 和律师费用？",
          answer: "不包含。投资金额与政府申请费、律师费以及许多项目相关费用是分开计算的。",
        },
      ],
      homeLink: "返回主 EB-5 指南",
      contactLink: "咨询 EB-5 投资金额问题",
      relatedTitle: "相关 EB-5 指南",
      relatedIntro: "可将投资金额问题与 EB-5 总成本以及投资本金未来是否可能返还这两个独立问题一起比较查看。",
      seo: {
        title: "EB-5 投资金额 | 当前门槛及其含义",
        description:
          "了解现行框架下的 EB-5 投资金额、何时可能适用较低门槛，以及为什么投资金额与 USCIS 费用和律师费用分开计算。",
        keywords: ["EB-5 投资金额", "EB5 金额", "EB-5 800000", "EB-5 1050000", "EB-5 最低投资"],
      },
    },
    moneyBack: {
      mainPageCta: "查看 EB-5 资金是否返还指南",
      title: "EB-5 的钱能拿回来吗？",
      intro:
        "本页专门说明 EB-5 投资本金未来是否可能返还、返还时间通常受哪些因素影响，以及为什么合规的 EB-5 项目不能承诺本金保证返还。",
      cards: [
        {
          title: "本金返还不能保证",
          body: "由于 EB-5 资金必须处于风险之中，投资本金的返还不能被视为保证事项。",
        },
        {
          title: "返还时间取决于项目条款",
          body: "即使项目预期未来返还本金，时间通常也取决于项目文件、退出安排、再融资、出售事件以及项目表现，而不是固定的政府期限。",
        },
        {
          title: "各类费用通常不会返还",
          body: "USCIS 申请费、律师费、翻译费以及许多项目行政费用通常属于成本，而不是可返还的投资本金。",
        },
      ],
      faqTitle: "关于资金返还的快速回答",
      faqIntro: "面向专门搜索 EB-5 资金是否返还问题的访问者。",
      faqs: [
        {
          question: "EB-5 的钱一定能拿回来吗？",
          answer: "不能保证。EB-5 资金必须处于风险之中，因此合规结构不应保证本金返还。",
        },
        {
          question: "EB-5 的钱什么时候可能回来？",
          answer: "如果未来返还，通常取决于项目条款、退出结构、再融资、出售事件和项目表现。",
        },
        {
          question: "USCIS 申请费会退吗？",
          answer: "通常不会。政府费用和许多专业服务成本一般属于支出，而不是可返还的投资本金。",
        },
      ],
      homeLink: "返回主 EB-5 指南",
      contactLink: "咨询 EB-5 资金返还问题",
      relatedTitle: "相关 EB-5 指南",
      relatedIntro: "可将资金返还问题与总费用结构以及 EB-5 所需投资金额这两个独立问题一起比较查看。",
      seo: {
        title: "EB-5 的钱能拿回来吗？ | 本金返还与投资风险",
        description:
          "了解 EB-5 投资本金未来是否可能返还、为什么返还不能保证，以及项目条款如何影响返还时间和资金风险。",
        keywords: ["EB-5 的钱能拿回来吗", "EB-5 资金返还", "EB5 本金返还", "EB-5 可退吗", "EB-5 返还时间"],
      },
    },
  },
};