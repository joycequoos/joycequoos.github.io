/**
 * i18n-storytelling.js — Toggle de idioma PT/EN para storytelling_pld_1.html
 * -------------------------------------------------------------
 * Mantenha este arquivo na mesma pasta do storytelling_pld_1.html.
 * A página já inclui: <script src="i18n-storytelling.js"></script>
 *
 * Nota: os blocos de código Python/SQL (comentários e nomes de
 * variáveis) foram mantidos como estão em ambos os idiomas — é
 * prática comum manter código como código, mesmo em versões
 * traduzidas de páginas técnicas.
 * -------------------------------------------------------------
 */

const TRANSLATIONS = {
  pt: {
    back_link: "← Voltar ao portfólio",

    hero_tag: "Projeto de Compliance · PLD/AML",
    hero_title_main: "Rastreamento e ",
    hero_title_accent: "Prevenção",
    hero_title_rest: " à Lavagem de Dinheiro",
    hero_lead: "Uma jornada técnica e analítica que descreve como dados, processos ELT, regras de negócio e análises em Python formam um sistema integrado de combate a crimes financeiros.",
    stat1_label: "Alertas gerados",
    stat2_label: "Produtos monitorados",
    stat3_label: "Etapas do pipeline",
    stat4_label: "Ciclo de atualização",

    nav_intro: "Introdução",
    nav_elt: "ETL/ELT",
    nav_regras: "Regras",
    nav_analise: "Análise",
    nav_resultados: "Resultados",

    // Seção 01
    s1_title: "O problema que o projeto resolve",
    s1_lead: "A lavagem de dinheiro é um crime financeiro que disfarça a origem ilícita de fundos, tornando-os aparentemente legítimos. Ela afeta a estabilidade econômica e a integridade dos sistemas financeiros globalmente.",
    s1_callout_label: "Contexto fictício:",
    s1_callout_text: "os dados, clientes e transações utilizados neste projeto são completamente fictícios e têm finalidade exclusivamente demonstrativa. Nenhuma informação real foi utilizada.",
    s1_card1_title: "Colocação",
    s1_card1_text: "Inserção dos recursos ilícitos no sistema econômico via depósitos, compra de instrumentos ou bens, frequentemente em países com menor regulação.",
    s1_card2_title: "Ocultação",
    s1_card2_text: "Quebra da trilha contábil por meio de transferências eletrônicas para contas anônimas, dificultando rastreamento por autoridades.",
    s1_card3_title: "Integração",
    s1_card3_text: "Os recursos retornam ao sistema econômico formal, aparentemente \"limpos\", prontos para uso pelas organizações criminosas.",
    s1_closing: "A análise de dados oferece uma abordagem baseada em evidências para identificar e mitigar essas atividades suspeitas, tornando-se um aliado essencial do Compliance.",

    // Seção 02
    s2_title: "Pipeline ETL e ELT",
    s2_lead: "O coração operacional do projeto: a extração, transformação e carga dos dados de movimentações financeiras que alimentam toda a análise. A técnica de ingestão varia conforme o cenário e a infraestrutura de cada cliente.",
    s2_etl_title: "O que é ETL?",
    s2_etl_text: "Processo de Extração, Transformação e Carga. Os dados são transformados numa camada intermediária antes de chegar ao destino final — abordagem tradicional quando o destino tem pouca capacidade de processamento.",
    s2_elt_title: "O que é ELT?",
    s2_elt_text: "Processo de Extração, Carga e Transformação. Coleta dados de diversas fontes, os carrega primeiro em formato bruto no destino e só então aplica as transformações — abordagem comum quando o próprio banco de destino tem poder de processamento para transformar (como aqui, via procedure SQL).",
    s2_impl_heading: "Formas de implementação",
    s2_ssis_text: "Pacotes de Integration Services para orquestração de fluxos em ambiente SQL Server — a técnica usada neste projeto.",
    s2_python_text: "Scripts customizados para ingestões flexíveis, com controle total sobre validação e transformação dos dados.",
    s2_bulk_title: "Bulk Insert",
    s2_bulk_text: "Cargas de alto volume direto no banco, priorizando performance em cenários de arquivos grandes.",
    s2_views_title: "Leitura de Views",
    s2_views_text: "Extração direta de views disponibilizadas na base do cliente, sem necessidade de arquivo intermediário.",
    s2_cloud_title: "Cloud (AWS · Azure · BigQuery)",
    s2_cloud_text: "Leitura direta de volumes em nuvem, para cenários em que a origem dos dados já está hospedada em provedores como AWS, Azure ou BigQuery.",
    s2_airflow_title: "Airflow",
    s2_airflow_text: "DAGs para orquestração e agendamento de pipelines mais complexos, com múltiplas dependências entre etapas.",
    s2_json_title: "Arquivo JSON",
    s2_json_text: "Leitura e parsing de arquivos .json, comuns em integrações com sistemas que exportam dados semiestruturados.",
    s2_api_title: "API",
    s2_api_text: "Consumo direto de API do cliente ou de terceiros, sem etapa intermediária de arquivo, para ingestões em tempo real ou sob demanda.",
    card_link_repo: "Ver repositório →",
    s2_callout_label: "Fonte dos dados neste projeto:",
    s2_callout_text: "informações de clientes e operações realizadas em D-1 (dia anterior ao processamento), extraídas diretamente da base de origem do cliente. Esse ciclo de atualização pode ser adaptado conforme a necessidade de cada cliente — aqui, D-1 garante que as análises reflitam sempre as movimentações mais recentes disponíveis.",
    s2_flow_heading: "Fluxo das etapas — implementação aplicada neste projeto",
    s2_flow_sub: "Geralmente ocorre na sequência abaixo, mas pode haver alterações no fluxo dependendo do cliente ou produto.",
    s2_step1_title: "Limpeza da tabela temporária",
    s2_step1_text: "Antes de iniciar a carga, a tabela de staging é limpa para garantir que não haja duplicidade ou dados residuais de execuções anteriores.",
    s2_step2_title: "Leitura da origem",
    s2_step2_text: "Os dados são lidos, validados e seus registros carregados na tabela destino do banco de dados, incluindo dados de clientes e operações do dia anterior.",
    s2_step3_title: "Execução da Procedure de atualização",
    s2_step3_text: "Uma procedure SQL é disparada para consolidar e atualizar as tabelas relacionadas a clientes e operações com os dados recém-carregados.",
    s2_step4_title: "Tabelas disponíveis para análise",
    s2_step4_text: "As tabelas de clientes e operações estão atualizadas e prontas para alimentar as regras de detecção e os relatórios analíticos.",

    // Seção 03
    s3_title: "Execução de Regras de Detecção",
    s3_lead: "Com os dados carregados, o motor de regras entra em ação. A primeira regra avalia movimentações de valores acima de um limiar definido pelo Compliance.",
    s3_card1_title: "Regra: Movimentações de Altos Valores",
    s3_card1_text_a: "Identifica transações com valor igual ou superior ao ",
    s3_card1_param: "Parâmetro01",
    s3_card1_text_b: " — definido pela área de Compliance. Todas as movimentações no período analisado são verificadas automaticamente.",
    s3_card2_title: "Segregação dos resultados",
    s3_card2_text: "Após a análise, as movimentações que acionam a regra são separadas em tabelas dedicadas, criando uma fila de trabalho para verificação pelas áreas responsáveis.",
    s3_callout_label: "Resultado desta etapa:",
    s3_callout_text: "as operações suspeitas ficam isoladas em tabelas independentes, prontas para revisão pelo time de Compliance — sem misturar dados limpos com alertas.",

    // Seção 04
    s4_title: "Consultas e Análises com SQL + Python",
    s4_lead: "A análise aprofundada combina a precisão do SQL com a expressividade do Python para transformar dados brutos em insights acionáveis.",
    s4_sub1_title: "Conexão com SQL Server via Python",
    s4_sub1_text_a: "Usando a biblioteca ",
    s4_sub1_text_b: ", Python se conecta diretamente ao banco para executar queries e retornar DataFrames prontos para análise.",
    s4_sub2_title: "Quantidade de alertas gerados",
    s4_sub2_text_a: "Em ",
    s4_sub2_date: "31/07/2020",
    s4_sub2_text_b: ", a execução da regra de alto valor gerou ",
    s4_sub2_num: "95 alertas",
    s4_sub2_text_c: " para revisão pelo Compliance.",
    s4_table1_header: "Resultado da Query · tgr_alertas",
    th_metrica: "Métrica",
    th_valor: "Valor",
    th_data_ref: "Data referência",
    th_status: "Status",
    td_total_alertas: "Total de alertas",
    badge_para_revisao: "Para revisão",
    s4_sub3_title: "Clientes com maior incidência de alertas",
    s4_sub3_text: "Os 15 clientes com mais alertas foram identificados e ranqueados para priorização no processo de verificação.",
    s4_table2_header: "Top 15 Clientes · Alertas em 31/07/2020",
    th_cod_cliente: "Cód. Cliente",
    th_alertas: "Alertas",
    th_prioridade: "Prioridade",
    badge_alta: "Alta",
    badge_media: "Média",
    badge_normal: "Normal",
    td_demais_clientes: "Demais clientes",
    s4_callout_label: "Insight:",
    s4_callout_text: "a maior concentração de alertas por cliente está entre 3 e 4 ocorrências. Clientes com 7 ou mais alertas devem ser investigados prioritariamente pelo time de Compliance.",

    // Seção 05
    s5_title: "Alertas e movimentações por produto",
    s5_lead: "A análise de correlação entre o volume de movimentações e a quantidade de alertas revela quais produtos financeiros concentram maior risco.",
    s5_chart1_title: "Alertas por produto · Junho/2020",
    s5_chart2_title: "Volume de movimentações por produto · Junho/2020",
    prod_corretora: "Corretora",
    prod_conta_corrente: "Conta Corrente",
    prod_emprestimos: "Empréstimos",
    prod_fundos: "Fundos",
    s5_callout_label: "Correlação importante:",
    s5_callout_text: "embora Conta Corrente seja o produto com maior volume de movimentações (71 mil), a Corretora concentra proporcionalmente mais alertas. Isso sugere que operações de corretagem merecem atenção especial nas regras de detecção.",

    conclusion_title: "Visão integrada do projeto",
    conclusion_text: "Este projeto demonstra como a integração de ETL/ELT (implementada via SSIS e Bulk Insert), Stored Procedures para consolidação dos dados, regras de negócio baseadas em Compliance e análises em SQL + Python cria um pipeline robusto de prevenção à lavagem de dinheiro — do dado bruto à decisão fundamentada.",
    conclusion_stat1_label: "Ciclo de dados",
    conclusion_stat2_label: "Motor ETL/ELT usado aqui",
    conclusion_stat3_label: "Carga de alto volume",
    conclusion_stat4_label: "Stored Procedures",
    conclusion_stat5_label: "Análise & Viz",
    conclusion_stat6_label: "Objetivo final",

    footer_text: "Projeto de demonstração · Dados fictícios para fins educacionais · Rastreamento e Prevenção à Lavagem de Dinheiro",
  },

  en: {
    back_link: "← Back to portfolio",

    hero_tag: "Compliance Project · AML/CFT",
    hero_title_main: "Tracking and ",
    hero_title_accent: "Preventing",
    hero_title_rest: " Money Laundering",
    hero_lead: "A technical and analytical journey through how data, ELT processes, business rules, and Python analysis come together into an integrated system to fight financial crime.",
    stat1_label: "Alerts generated",
    stat2_label: "Products monitored",
    stat3_label: "Pipeline stages",
    stat4_label: "Update cycle",

    nav_intro: "Overview",
    nav_elt: "ETL/ELT",
    nav_regras: "Rules",
    nav_analise: "Analysis",
    nav_resultados: "Results",

    // Section 01
    s1_title: "The problem this project solves",
    s1_lead: "Money laundering is a financial crime that disguises the illicit origin of funds, making them appear legitimate. It undermines economic stability and the integrity of financial systems worldwide.",
    s1_callout_label: "Fictional context:",
    s1_callout_text: "the data, clients, and transactions used in this project are entirely fictional and for demonstration purposes only. No real information was used.",
    s1_card1_title: "Placement",
    s1_card1_text: "Illicit funds enter the economic system through deposits, purchases of instruments or assets, often in countries with lighter regulation.",
    s1_card2_title: "Layering",
    s1_card2_text: "Breaking the accounting trail through electronic transfers to anonymous accounts, making it harder for authorities to trace.",
    s1_card3_title: "Integration",
    s1_card3_text: "The funds return to the formal economic system, appearing \"clean\" and ready for use by criminal organizations.",
    s1_closing: "Data analysis offers an evidence-based approach to identifying and mitigating these suspicious activities, becoming an essential ally for Compliance.",

    // Section 02
    s2_title: "ETL and ELT Pipeline",
    s2_lead: "The operational heart of the project: extracting, transforming, and loading the financial transaction data that feeds the entire analysis. The ingestion technique varies according to each client's scenario and infrastructure.",
    s2_etl_title: "What is ETL?",
    s2_etl_text: "Extract, Transform, Load process. Data is transformed in an intermediate layer before reaching its final destination — a traditional approach when the destination has limited processing capacity.",
    s2_elt_title: "What is ELT?",
    s2_elt_text: "Extract, Load, Transform process. Collects data from various sources, loads it first in raw form at the destination, and only then applies transformations — common when the destination database itself has the processing power to transform the data (as here, via a SQL procedure).",
    s2_impl_heading: "Implementation methods",
    s2_ssis_text: "Integration Services packages for orchestrating flows in a SQL Server environment — the technique used in this project.",
    s2_python_text: "Custom scripts for flexible ingestions, with full control over data validation and transformation.",
    s2_bulk_title: "Bulk Insert",
    s2_bulk_text: "High-volume loads directly into the database, prioritizing performance for large-file scenarios.",
    s2_views_title: "Reading Views",
    s2_views_text: "Direct extraction from views made available in the client's database, with no need for an intermediate file.",
    s2_cloud_title: "Cloud (AWS · Azure · BigQuery)",
    s2_cloud_text: "Direct reads from cloud volumes, for scenarios where the data source is already hosted with providers like AWS, Azure, or BigQuery.",
    s2_airflow_title: "Airflow",
    s2_airflow_text: "DAGs for orchestrating and scheduling more complex pipelines, with multiple dependencies between stages.",
    s2_json_title: "JSON File",
    s2_json_text: "Reading and parsing .json files, common in integrations with systems that export semi-structured data.",
    s2_api_title: "API",
    s2_api_text: "Direct consumption of the client's or a third-party API, with no intermediate file step, for real-time or on-demand ingestions.",
    card_link_repo: "View repository →",
    s2_callout_label: "Data source for this project:",
    s2_callout_text: "client and transaction data as of D-1 (the day before processing), extracted directly from the client's source database. This update cycle can be adapted to each client's needs — here, D-1 ensures the analysis always reflects the most recent available transactions.",
    s2_flow_heading: "Step flow — implementation applied in this project",
    s2_flow_sub: "It generally follows the sequence below, though the flow may vary depending on the client or product.",
    s2_step1_title: "Clearing the temporary table",
    s2_step1_text: "Before loading begins, the staging table is cleared to ensure there's no duplication or leftover data from previous runs.",
    s2_step2_title: "Reading from the source",
    s2_step2_text: "Data is read, validated, and its records loaded into the destination database table, including client and transaction data from the previous day.",
    s2_step3_title: "Running the update procedure",
    s2_step3_text: "A SQL procedure is triggered to consolidate and update the client and transaction tables with the newly loaded data.",
    s2_step4_title: "Tables ready for analysis",
    s2_step4_text: "The client and transaction tables are up to date and ready to feed the detection rules and analytical reports.",

    // Section 03
    s3_title: "Running Detection Rules",
    s3_lead: "Once the data is loaded, the rule engine kicks in. The first rule evaluates transactions above a threshold set by Compliance.",
    s3_card1_title: "Rule: High-Value Transactions",
    s3_card1_text_a: "Identifies transactions with a value equal to or greater than ",
    s3_card1_param: "Parameter01",
    s3_card1_text_b: " — set by the Compliance area. All transactions in the analyzed period are checked automatically.",
    s3_card2_title: "Segregating the results",
    s3_card2_text: "After analysis, transactions that trigger the rule are separated into dedicated tables, creating a work queue for review by the responsible teams.",
    s3_callout_label: "Result of this stage:",
    s3_callout_text: "suspicious transactions are isolated in independent tables, ready for review by the Compliance team — without mixing clean data with alerts.",

    // Section 04
    s4_title: "Queries and Analysis with SQL + Python",
    s4_lead: "The in-depth analysis combines the precision of SQL with the expressiveness of Python to turn raw data into actionable insights.",
    s4_sub1_title: "Connecting to SQL Server via Python",
    s4_sub1_text_a: "Using the ",
    s4_sub1_text_b: " library, Python connects directly to the database to run queries and return DataFrames ready for analysis.",
    s4_sub2_title: "Number of alerts generated",
    s4_sub2_text_a: "On ",
    s4_sub2_date: "07/31/2020",
    s4_sub2_text_b: ", running the high-value rule generated ",
    s4_sub2_num: "95 alerts",
    s4_sub2_text_c: " for Compliance review.",
    s4_table1_header: "Query Result · tgr_alertas",
    th_metrica: "Metric",
    th_valor: "Value",
    th_data_ref: "Reference date",
    th_status: "Status",
    td_total_alertas: "Total alerts",
    badge_para_revisao: "For review",
    s4_sub3_title: "Clients with the highest alert incidence",
    s4_sub3_text: "The 15 clients with the most alerts were identified and ranked for prioritization in the verification process.",
    s4_table2_header: "Top 15 Clients · Alerts on 07/31/2020",
    th_cod_cliente: "Client Code",
    th_alertas: "Alerts",
    th_prioridade: "Priority",
    badge_alta: "High",
    badge_media: "Medium",
    badge_normal: "Normal",
    td_demais_clientes: "Remaining clients",
    s4_callout_label: "Insight:",
    s4_callout_text: "the highest concentration of alerts per client falls between 3 and 4 occurrences. Clients with 7 or more alerts should be prioritized for investigation by the Compliance team.",

    // Section 05
    s5_title: "Alerts and Transactions by Product",
    s5_lead: "The correlation analysis between transaction volume and alert count reveals which financial products carry the greatest risk.",
    s5_chart1_title: "Alerts by product · June/2020",
    s5_chart2_title: "Transaction volume by product · June/2020",
    prod_corretora: "Brokerage",
    prod_conta_corrente: "Checking Account",
    prod_emprestimos: "Loans",
    prod_fundos: "Funds",
    s5_callout_label: "Key correlation:",
    s5_callout_text: "although Checking Account has the highest transaction volume (71,000), Brokerage accounts for proportionally more alerts. This suggests brokerage operations deserve special attention in the detection rules.",

    conclusion_title: "An integrated view of the project",
    conclusion_text: "This project shows how integrating ETL/ELT (implemented via SSIS and Bulk Insert), Stored Procedures for data consolidation, Compliance-based business rules, and SQL + Python analysis creates a robust anti-money-laundering pipeline — from raw data to informed decisions.",
    conclusion_stat1_label: "Data cycle",
    conclusion_stat2_label: "ETL/ELT engine used here",
    conclusion_stat3_label: "High-volume load",
    conclusion_stat4_label: "Stored Procedures",
    conclusion_stat5_label: "Analysis & Viz",
    conclusion_stat6_label: "End goal",

    footer_text: "Demonstration project · Fictional data for educational purposes · Tracking and Preventing Money Laundering",
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
