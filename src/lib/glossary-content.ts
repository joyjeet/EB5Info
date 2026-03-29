import type { Locale } from "@/lib/i18n";

type GlossaryTerm = {
  term: string;
  definition: string;
};

type GlossaryContent = {
  title: string;
  intro: string;
  terms: GlossaryTerm[];
};

export const glossaryContent: Record<Locale, GlossaryContent> = {
  en: {
    title: "EB-5 glossary",
    intro: "Key terms that appear often in EB-5 materials and project documents.",
    terms: [
      {
        term: "TEA",
        definition: "A targeted employment area that may qualify for the lower EB-5 investment threshold under the current framework.",
      },
      {
        term: "Regional center",
        definition: "A USCIS-approved structure used in many EB-5 offerings where job creation may include indirect and modeled impacts under applicable rules.",
      },
      {
        term: "New commercial enterprise",
        definition: "The for-profit U.S. business entity into which the EB-5 investor places capital.",
      },
      {
        term: "Direct jobs",
        definition: "Jobs where the qualifying enterprise or its subsidiaries are the actual employer, especially important in standalone EB-5 cases.",
      },
      {
        term: "At risk",
        definition: "A core EB-5 concept meaning the invested capital must face possible gain or loss and cannot be guaranteed as a risk-free deposit.",
      },
      {
        term: "Source of funds",
        definition: "The evidence showing how the investor lawfully obtained and transferred the capital used for the EB-5 investment.",
      },
    ],
  },
  es: {
    title: "Glosario EB-5",
    intro: "Terminos clave que aparecen con frecuencia en materiales EB-5 y documentos de proyectos.",
    terms: [
      {
        term: "TEA",
        definition: "Area de empleo objetivo que puede calificar para el monto reducido de inversion EB-5 bajo el marco actual.",
      },
      {
        term: "Centro regional",
        definition: "Estructura aprobada por USCIS utilizada en muchas ofertas EB-5 donde la creacion de empleo puede incluir impactos indirectos y modelados segun las reglas aplicables.",
      },
      {
        term: "Nueva empresa comercial",
        definition: "Entidad empresarial con fines de lucro en Estados Unidos en la que el inversionista EB-5 coloca su capital.",
      },
      {
        term: "Empleos directos",
        definition: "Empleos donde la empresa calificante o sus subsidiarias son el empleador real, especialmente relevantes en casos EB-5 directos.",
      },
      {
        term: "En riesgo",
        definition: "Concepto central de EB-5 que significa que el capital invertido debe estar expuesto a posible ganancia o perdida y no puede estar garantizado como un deposito sin riesgo.",
      },
      {
        term: "Origen de fondos",
        definition: "Conjunto de pruebas que muestran como el inversionista obtuvo y transfirio legalmente el capital usado para la inversion EB-5.",
      },
    ],
  },
  zh: {
    title: "EB-5 术语表",
    intro: "以下是 EB-5 资料和项目文件中经常出现的关键术语。",
    terms: [
      {
        term: "TEA",
        definition: "目标就业区。在现行框架下，符合条件的 TEA 项目可能适用较低的 EB-5 投资门槛。",
      },
      {
        term: "区域中心",
        definition: "经 USCIS 批准的 EB-5 项目结构，适用规则下的就业创造可能包括间接就业和模型测算结果。",
      },
      {
        term: "新商业企业",
        definition: "EB-5 投资人投入资本的美国营利性商业实体。",
      },
      {
        term: "直接就业",
        definition: "由符合条件企业或其子公司直接雇佣的岗位，在直投 EB-5 案件中尤其重要。",
      },
      {
        term: "处于风险之中",
        definition: "EB-5 的核心概念，表示投资资本必须承担可能盈利也可能亏损的真实风险，不能被保证为无风险存款。",
      },
      {
        term: "资金来源",
        definition: "用于说明投资人如何合法取得并转移 EB-5 投资资金的证明材料。",
      },
    ],
  },
};