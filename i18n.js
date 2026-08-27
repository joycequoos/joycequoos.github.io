/**
 * i18n.js — Toggle de idioma PT/EN para joycequoos.github.io
 * -------------------------------------------------------------
 * Basta manter este arquivo na mesma pasta do index.html.
 * O próprio index.html já inclui:
 *   <script src="i18n.js"></script>
 * -------------------------------------------------------------
 */

const TRANSLATIONS = {
  pt: {
    nav_stack: "Stack",
    nav_cases: "Cases",
    nav_sobre: "Sobre",
    nav_contato: "Contato",

    hero_eyebrow: "Engenharia de Dados & IA",
    hero_title_main: "De dado bruto a decisão: pipelines e sistemas de ",
    hero_title_accent: "IA que resolvem problemas reais",
    hero_subtitle:
      "Engenheira de Dados vinda do QA. Gosto de testar, validar e documentar o que construo — não porque acerto sempre, mas porque isso ajuda o time inteiro a confiar no que chega até eles. Veja abaixo os problemas que já ajudei a resolver.",
    hero_cta_cases: "Ver cases de solução →",
    hero_cta_contato: "Entrar em contato",

    stack_kicker: "Trilha técnica",
    stack_title_prefix: "Stack por ",
    stack_dominio: "domínio",
    stack_dados_title: "Engenharia de Dados",
    stack_ia_title: "IA & Automação",
    stack_ia_item4: "Prompt engineering aplicado",
    stack_bi_title: "BI & Análise",
    stack_bi_item4: "Storytelling de dados",

    cases_kicker: "Portfólio",
    cases_title_prefix: "Problemas reais, ",
    cases_title_em: "soluções entregues",

    case1_tag: "Engenharia de Dados",
    case1_title: "Pipelines de ingestão sob medida: ETL e ELT conforme o cenário do cliente",
    case1_problem_label: "Problema:",
    case1_problem:
      "cada ambiente de cliente impõe restrições diferentes de acesso, volume e infraestrutura — nem sempre é possível, ou eficiente, usar a mesma abordagem de ingestão em todos os projetos.",
    case1_solution_label: "Solução:",
    case1_solution:
      "pipelines de ETL e ELT com a técnica mais adequada a cada contexto — pacotes SSIS para orquestração em SQL Server, scripts Python para ingestões customizadas, Bulk Insert para cargas de alto volume, leitura direta de views na base do cliente, leitura direta de volumes na AWS e DAGs no Airflow para orquestração e agendamento de pipelines mais complexos.",
    case1_link: "Ver etapa completa →",
    case1_stat1_label: "formas de implementação",
    case1_stat2_label: "abordagens: ETL e ELT",

    case2_tag: "Engenharia de Dados",
    case2_title: "Motor de regras de detecção de transações suspeitas",
    case2_problem_label: "Problema:",
    case2_problem:
      "verificar manualmente cada movimentação contra o limiar de Compliance não escala com o volume diário de operações.",
    case2_solution_label: "Solução:",
    case2_solution:
      "regra automatizada que sinaliza transações acima do parâmetro definido e segrega os resultados em tabela própria, criando fila de trabalho para o time de Compliance.",
    case2_link: "Ver etapa completa →",
    case2_stat1_label: "alertas gerados no dia",
    case2_stat2_label: "produtos monitorados",

    case3_tag: "Análise & IA",
    case3_title: "Priorização de alertas com SQL + Python",
    case3_problem_label: "Problema:",
    case3_problem:
      "com dezenas de alertas gerados por dia, o Compliance precisa saber por onde começar a investigação.",
    case3_solution_label: "Solução:",
    case3_solution:
      "conexão Python↔SQL Server (pymssql) para consultar alertas, ranquear os clientes com maior incidência e cruzar volume de movimentação com risco por produto.",
    case3_link: "Ver etapa completa →",
    case3_stat1_label: "clientes priorizados",
    case3_stat2_label: "produto de maior risco relativo",

    sobre_kicker: "Sobre",
    sobre_p1:
      "Minha jornada começou em 2005, no suporte técnico, onde aprendi a ouvir o usuário e resolver problemas na raiz (e que \"reiniciar a máquina\" nem sempre é a solução).",
    sobre_p2:
      "A passagem por QA moldou minha visão analítica e crítica. Desde 2020, aplico essa bagagem como Especialista em Dados: trago a mentalidade de testes, validação e documentação para garantir que os dados não sejam apenas visuais, mas confiáveis para a tomada de decisão.",
    sobre_stat1_label: "projetos",
    sobre_stat2_label: "domínios técnicos",
    sobre_stat3_label: "curiosidade",

    contato_title: "Vamos conversar?",
    contato_subtitle: "Colaborações e novas conexões em Engenharia de Dados e IA.",
    contato_linkedin: "LinkedIn",
    contato_github: "GitHub",

    footer_text: "✦ joyce.data — pipelines e IA para problemas reais © 2026",
  },

  en: {
    nav_stack: "Stack",
    nav_cases: "Cases",
    nav_sobre: "About",
    nav_contato: "Contact",

    hero_eyebrow: "Data Engineering & AI",
    hero_title_main: "From raw data to decisions: pipelines and ",
    hero_title_accent: "AI systems that solve real problems",
    hero_subtitle:
      "Data Engineer with roots in QA. I like to test, validate, and document what I build — not because I always get it right, but because it helps the whole team trust what reaches them. See below the problems I've helped solve.",
    hero_cta_cases: "See solution cases →",
    hero_cta_contato: "Get in touch",

    stack_kicker: "Technical path",
    stack_title_prefix: "Stack by ",
    stack_dominio: "domain",
    stack_dados_title: "Data Engineering",
    stack_ia_title: "AI & Automation",
    stack_ia_item4: "Applied prompt engineering",
    stack_bi_title: "BI & Analytics",
    stack_bi_item4: "Data storytelling",

    cases_kicker: "Portfolio",
    cases_title_prefix: "Real problems, ",
    cases_title_em: "delivered solutions",

    case1_tag: "Data Engineering",
    case1_title: "Custom ingestion pipelines: ETL and ELT tailored to each client's scenario",
    case1_problem_label: "Problem:",
    case1_problem:
      "each client environment imposes different constraints around access, volume, and infrastructure — using the same ingestion approach across every project isn't always possible or efficient.",
    case1_solution_label: "Solution:",
    case1_solution:
      "ETL and ELT pipelines built with the technique best suited to each context — SSIS packages for orchestration in SQL Server, Python scripts for custom ingestions, Bulk Insert for high-volume loads, direct reads from client-side views, direct reads from AWS volumes, and Airflow DAGs for orchestrating and scheduling more complex pipelines.",
    case1_link: "See full case →",
    case1_stat1_label: "implementation methods",
    case1_stat2_label: "approaches: ETL and ELT",

    case2_tag: "Data Engineering",
    case2_title: "Rule engine for suspicious transaction detection",
    case2_problem_label: "Problem:",
    case2_problem:
      "manually checking every transaction against the Compliance threshold doesn't scale with the daily volume of operations.",
    case2_solution_label: "Solution:",
    case2_solution:
      "an automated rule that flags transactions above the defined threshold and segregates the results into a dedicated table, creating a work queue for the Compliance team.",
    case2_link: "See full case →",
    case2_stat1_label: "alerts generated per day",
    case2_stat2_label: "products monitored",

    case3_tag: "Analytics & AI",
    case3_title: "Alert prioritization with SQL + Python",
    case3_problem_label: "Problem:",
    case3_problem:
      "with dozens of alerts generated daily, Compliance needs to know where to start investigating.",
    case3_solution_label: "Solution:",
    case3_solution:
      "a Python↔SQL Server connection (pymssql) to query alerts, rank clients by highest incidence, and cross-reference transaction volume with risk by product.",
    case3_link: "See full case →",
    case3_stat1_label: "clients prioritized",
    case3_stat2_label: "highest relative-risk product",

    sobre_kicker: "About",
    sobre_p1:
      "My journey started in 2005, in technical support, where I learned to listen to users and solve problems at the root (and that \"just restart it\" isn't always the fix).",
    sobre_p2:
      "My time in QA shaped my analytical and critical mindset. Since 2020, I've applied that background as a Data Specialist: bringing a testing, validation, and documentation mindset to make sure data isn't just visual, but reliable enough for decision-making.",
    sobre_stat1_label: "projects",
    sobre_stat2_label: "technical domains",
    sobre_stat3_label: "curiosity",

    contato_title: "Let's talk?",
    contato_subtitle: "Collaborations and new connections in Data Engineering and AI.",
    contato_linkedin: "LinkedIn",
    contato_github: "GitHub",

    footer_text: "✦ joyce.data — pipelines and AI for real problems © 2026",
  },
};

(function () {
  const STORAGE_KEY = "site-lang";
  const DEFAULT_LANG = "en";

  function getInitialLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && TRANSLATIONS[saved]) return saved;
    const browserLang = navigator.language || navigator.userLanguage || "";
    if (browserLang.toLowerCase().startsWith("pt")) return "pt";
    return DEFAULT_LANG;
  }

  function applyLang(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const [attr, key] = el.getAttribute("data-i18n-attr").split(":");
      if (dict[key] !== undefined) {
        el.setAttribute(attr, dict[key]);
      }
    });

    document.documentElement.setAttribute("lang", lang === "en" ? "en" : "pt-BR");
    localStorage.setItem(STORAGE_KEY, lang);

    const toggleBtn = document.getElementById("lang-toggle");
    if (toggleBtn) {
      toggleBtn.textContent = lang === "en" ? "PT" : "EN";
      toggleBtn.setAttribute(
        "aria-label",
        lang === "en" ? "Mudar para Português" : "Switch to English"
      );
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    let currentLang = getInitialLang();
    applyLang(currentLang);

    const toggleBtn = document.getElementById("lang-toggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        currentLang = currentLang === "pt" ? "en" : "pt";
        applyLang(currentLang);
      });
    }
  });
})();