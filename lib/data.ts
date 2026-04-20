export interface Subject {
  id: string;
  name: string;
  weight: number;
  totalQuestions: number;
  topics: Topic[];
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  references: string[];
  mindMapNodes?: MindMapNode[];
}

export interface MindMapNode {
  id: string;
  label: string;
  children?: MindMapNode[];
}

export interface Question {
  id: string;
  subjectId: string;
  topicId: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: "facil" | "medio" | "dificil";
}

export interface Position {
  id: string;
  code: string;
  name: string;
  level: "fundamental" | "medio" | "tecnico" | "superior";
  workload: string;
  salary: string;
  vacancies: number;
  requirements: string;
  subjects: Subject[];
  questions: Question[];
}

export interface StudyPlan {
  id: string;
  positionId: string;
  name: string;
  totalDays: number;
  dailyHours: number;
  schedule: StudyDay[];
}

export interface StudyDay {
  day: number;
  subjects: {
    subjectId: string;
    hours: number;
    completed: boolean;
  }[];
}

export interface UserProgress {
  positionId: string;
  questionsAnswered: number;
  questionsCorrect: number;
  subjectProgress: {
    subjectId: string;
    topicsStudied: string[];
    questionsAnswered: number;
    questionsCorrect: number;
  }[];
  studyPlanProgress: {
    studyPlanId: string;
    currentDay: number;
    completedDays: number[];
  };
}

// Dados do concurso extraídos do edital
export const examInfo = {
  title: "Concurso Publico - Prefeitura Municipal de Bom Repouso/MG",
  edital: "001/2026",
  organizadora: "ABCP - Associacao Brasileira de Concursos Publicos",
  inscricoes: {
    inicio: "16/06/2026",
    fim: "20/07/2026",
  },
  prova: "23/08/2026",
  site: "www.abconcursospublicos.org",
};

// Posicoes do concurso
export const positions: Position[] = [
  {
    id: "enfermeiro-20h",
    code: "024",
    name: "Enfermeiro (20 horas)",
    level: "superior",
    workload: "20 horas semanais",
    salary: "R$ 3.550,00",
    vacancies: 9,
    requirements: "Ensino Superior Completo + Inscricao no COREN",
    subjects: [
      {
        id: "portugues-superior",
        name: "Lingua Portuguesa",
        weight: 0.20,
        totalQuestions: 10,
        topics: [
          {
            id: "comunicacao",
            name: "Comunicacao: linguagem, texto e discurso",
            description: "O texto, contexto e a construcao dos sentidos",
            references: ["Gramatica de Celso Cunha", "Novissima Gramatica - Cegalla"],
            mindMapNodes: [
              {
                id: "1",
                label: "Comunicacao",
                children: [
                  { id: "1.1", label: "Linguagem" },
                  { id: "1.2", label: "Texto" },
                  { id: "1.3", label: "Discurso" },
                  { id: "1.4", label: "Contexto" },
                ]
              }
            ]
          },
          {
            id: "coesao-coerencia",
            name: "Coesao e Coerencia Textuais",
            description: "Elementos de conexao e articulacao textual",
            references: ["A Coesao Textual - Ingedore Koch"],
            mindMapNodes: [
              {
                id: "2",
                label: "Coesao e Coerencia",
                children: [
                  { id: "2.1", label: "Coesao Referencial" },
                  { id: "2.2", label: "Coesao Sequencial" },
                  { id: "2.3", label: "Coerencia Global" },
                  { id: "2.4", label: "Coerencia Local" },
                ]
              }
            ]
          },
          {
            id: "semantica",
            name: "Semantica",
            description: "Denotacao e conotacao; figuras de linguagem; sinonimia, antonimia, homonimia, paronimia; polissemia e ambiguidade",
            references: ["Moderna Gramatica Portuguesa - Evanildo Bechara"],
          },
          {
            id: "morfologia",
            name: "Morfologia",
            description: "Estrutura e processos de formacao de palavras; classes de palavras",
            references: ["Gramatica Descritiva do Portugues - Mario Perini"],
          },
          {
            id: "sintaxe",
            name: "Sintaxe",
            description: "Termos e oracoes coordenadas e subordinadas; concordancia nominal e verbal; regencia; crase",
            references: ["Gramatica de Celso Cunha"],
          },
        ]
      },
      {
        id: "matematica-superior",
        name: "Matematica",
        weight: 0.20,
        totalQuestions: 5,
        topics: [
          {
            id: "logica",
            name: "Estruturas logicas e Diagramas logicos",
            description: "Logica da argumentacao, proposicoes e conectivos",
            references: ["Raciocinio Logico - Renato Oliveira"],
          },
          {
            id: "numeros",
            name: "Numeros e Operacoes",
            description: "Numeros inteiros e fracionarios, operacoes e propriedades",
            references: ["Matematica Basica - Gelson Iezzi"],
          },
          {
            id: "equacoes",
            name: "Equacoes e Funcoes",
            description: "Equacoes do 1o e 2o graus; Funcoes do 1o e 2o grau",
            references: ["Fundamentos de Matematica - Gelson Iezzi"],
          },
          {
            id: "geometria",
            name: "Geometria e Trigonometria",
            description: "Triangulo retangulo; Teorema de Pitagoras; Area, Volume e Perimetro",
            references: ["Geometria Plana - Dolce e Pompeo"],
          },
          {
            id: "porcentagem",
            name: "Porcentagem e Regra de Tres",
            description: "Razoes, proporcoes, regra de tres simples e composta, juros simples",
            references: ["Matematica Financeira - Jose Dutra"],
          },
        ]
      },
      {
        id: "conhecimentos-gerais",
        name: "Conhecimentos Gerais",
        weight: 0.20,
        totalQuestions: 5,
        topics: [
          {
            id: "atualidades",
            name: "Atualidades",
            description: "Fatos e noticias locais, nacionais e internacionais",
            references: ["Portais de noticias: G1, Folha, Estadao"],
          },
          {
            id: "politica",
            name: "Politica e Economia",
            description: "Conhecimentos municipais, estaduais e nacionais",
            references: ["Constituicao Federal", "Noticias atualizadas"],
          },
          {
            id: "geografia",
            name: "Geografia e Historia",
            description: "Aspectos geograficos, historicos e culturais de Bom Repouso e MG",
            references: ["Site da Prefeitura de Bom Repouso", "IBGE"],
          },
        ]
      },
      {
        id: "conhecimentos-especificos-enfermeiro",
        name: "Conhecimentos Especificos",
        weight: 0.30,
        totalQuestions: 20,
        topics: [
          {
            id: "sus",
            name: "Sistema Unico de Saude (SUS)",
            description: "Principios, diretrizes, organizacao e funcionamento; Politicas de saude",
            references: ["Lei 8.080/1990", "Lei 8.142/1990", "Constituicao Federal Arts. 196 a 200"],
            mindMapNodes: [
              {
                id: "sus-1",
                label: "SUS",
                children: [
                  { id: "sus-1.1", label: "Principios", children: [
                    { id: "sus-1.1.1", label: "Universalidade" },
                    { id: "sus-1.1.2", label: "Integralidade" },
                    { id: "sus-1.1.3", label: "Equidade" },
                  ]},
                  { id: "sus-1.2", label: "Diretrizes", children: [
                    { id: "sus-1.2.1", label: "Descentralizacao" },
                    { id: "sus-1.2.2", label: "Regionalizacao" },
                    { id: "sus-1.2.3", label: "Hierarquizacao" },
                  ]},
                ]
              }
            ]
          },
          {
            id: "esf",
            name: "Estrategia Saude da Familia (ESF)",
            description: "Programa de saude da familia; Vigilancia a saude; NASF",
            references: ["Portarias de Consolidacao GM/MS n 1 a 6/2017", "PNAB"],
          },
          {
            id: "etica-enfermagem",
            name: "Etica, Deontologia e Bioetica em Enfermagem",
            description: "Codigo de Etica dos Profissionais de Enfermagem; Legislacao",
            references: ["Resolucao COFEN", "Lei do Exercicio Profissional"],
          },
          {
            id: "semiologia",
            name: "Semiologia e Semiotecnica",
            description: "Sistematizacao da Assistencia em Enfermagem; Processo do cuidar",
            references: ["Semiologia e Semiotecnica - Bare & Smeltzer"],
          },
          {
            id: "clinica-enfermagem",
            name: "Clinica em Todo Ciclo Vital",
            description: "Cuidados em recem-nascidos, crianca, adolescente, adulto, mulher e idoso",
            references: ["Tratado de Enfermagem Medico-Cirurgica - Brunner"],
          },
          {
            id: "doencas-transmissiveis",
            name: "Doencas Transmissiveis",
            description: "Processo do cuidar em enfermagem em doencas transmissiveis",
            references: ["Manual de Vigilancia Epidemiologica - MS"],
          },
          {
            id: "urgencia-emergencia",
            name: "Urgencias e Emergencias",
            description: "Atendimento de emergencia; Suporte basico e avancado de vida",
            references: ["Protocolos de Urgencia - SAMU", "BLS/ACLS"],
          },
          {
            id: "saude-mental",
            name: "Saude Mental e Psiquiatria",
            description: "Processo do cuidar em Enfermagem em Saude Mental",
            references: ["Lei 10.216/2001", "Politica Nacional de Saude Mental"],
          },
          {
            id: "administracao-saude",
            name: "Administracao e Gerenciamento em Saude",
            description: "Gestao de equipes; Lideranca em enfermagem",
            references: ["Administracao em Enfermagem - Kurcgant"],
          },
          {
            id: "biosseguranca",
            name: "Biosseguranca",
            description: "Biosseguranca nas acoes de Enfermagem; Centro de material e esterilizacao",
            references: ["NR-32", "Manual de Biosseguranca - MS"],
          },
          {
            id: "imunizacao",
            name: "Programa Nacional de Imunizacao",
            description: "Calendario vacinal; Rede de frio; Eventos adversos",
            references: ["Manual de Normas e Procedimentos para Vacinacao - MS"],
          },
          {
            id: "vigilancia-saude",
            name: "Vigilancia em Saude",
            description: "Vigilancia epidemiologica, sanitaria e ambiental",
            references: ["Lei 8.080/1990", "Guia de Vigilancia em Saude - MS"],
          },
          {
            id: "atencao-basica",
            name: "Atencao Basica a Saude",
            description: "Estrategia Saude da Familia; NASF; Modelos de atencao primaria",
            references: ["PNAB", "Portarias de Consolidacao GM/MS"],
          },
        ]
      },
    ],
    questions: []
  },
  {
    id: "enfermeiro-psf-40h",
    code: "037",
    name: "Enfermeiro do ESF (40 horas)",
    level: "superior",
    workload: "40 horas semanais",
    salary: "R$ 5.229,00",
    vacancies: 5,
    requirements: "Ensino Superior Completo + Habilitacao Legal + Inscricao no COREN",
    subjects: [
      {
        id: "portugues-superior",
        name: "Lingua Portuguesa",
        weight: 0.20,
        totalQuestions: 10,
        topics: [
          {
            id: "comunicacao",
            name: "Comunicacao: linguagem, texto e discurso",
            description: "O texto, contexto e a construcao dos sentidos",
            references: ["Gramatica de Celso Cunha", "Novissima Gramatica - Cegalla"],
          },
          {
            id: "coesao-coerencia",
            name: "Coesao e Coerencia Textuais",
            description: "Elementos de conexao e articulacao textual",
            references: ["A Coesao Textual - Ingedore Koch"],
          },
          {
            id: "semantica",
            name: "Semantica",
            description: "Denotacao e conotacao; figuras de linguagem; sinonimia, antonimia, homonimia, paronimia",
            references: ["Moderna Gramatica Portuguesa - Evanildo Bechara"],
          },
          {
            id: "morfologia",
            name: "Morfologia",
            description: "Estrutura e processos de formacao de palavras; classes de palavras",
            references: ["Gramatica Descritiva do Portugues - Mario Perini"],
          },
          {
            id: "sintaxe",
            name: "Sintaxe",
            description: "Termos e oracoes coordenadas e subordinadas; concordancia nominal e verbal; regencia; crase",
            references: ["Gramatica de Celso Cunha"],
          },
        ]
      },
      {
        id: "matematica-superior",
        name: "Matematica",
        weight: 0.20,
        totalQuestions: 5,
        topics: [
          {
            id: "logica",
            name: "Estruturas logicas e Diagramas logicos",
            description: "Logica da argumentacao, proposicoes e conectivos",
            references: ["Raciocinio Logico - Renato Oliveira"],
          },
          {
            id: "numeros",
            name: "Numeros e Operacoes",
            description: "Numeros inteiros e fracionarios, operacoes e propriedades",
            references: ["Matematica Basica - Gelson Iezzi"],
          },
          {
            id: "equacoes",
            name: "Equacoes e Funcoes",
            description: "Equacoes do 1o e 2o graus; Funcoes do 1o e 2o grau",
            references: ["Fundamentos de Matematica - Gelson Iezzi"],
          },
          {
            id: "geometria",
            name: "Geometria e Trigonometria",
            description: "Triangulo retangulo; Teorema de Pitagoras; Area, Volume e Perimetro",
            references: ["Geometria Plana - Dolce e Pompeo"],
          },
          {
            id: "porcentagem",
            name: "Porcentagem e Regra de Tres",
            description: "Razoes, proporcoes, regra de tres simples e composta, juros simples",
            references: ["Matematica Financeira - Jose Dutra"],
          },
        ]
      },
      {
        id: "conhecimentos-gerais",
        name: "Conhecimentos Gerais",
        weight: 0.20,
        totalQuestions: 5,
        topics: [
          {
            id: "atualidades",
            name: "Atualidades",
            description: "Fatos e noticias locais, nacionais e internacionais",
            references: ["Portais de noticias: G1, Folha, Estadao"],
          },
          {
            id: "politica",
            name: "Politica e Economia",
            description: "Conhecimentos municipais, estaduais e nacionais",
            references: ["Constituicao Federal", "Noticias atualizadas"],
          },
          {
            id: "geografia",
            name: "Geografia e Historia",
            description: "Aspectos geograficos, historicos e culturais de Bom Repouso e MG",
            references: ["Site da Prefeitura de Bom Repouso", "IBGE"],
          },
        ]
      },
      {
        id: "conhecimentos-especificos-enfermeiro-esf",
        name: "Conhecimentos Especificos",
        weight: 0.30,
        totalQuestions: 20,
        topics: [
          {
            id: "psf",
            name: "Programa de Saude da Familia",
            description: "Conhecimentos inerentes ao ESF-Estrategia Saude da Familia",
            references: ["PNAB", "Portarias de Consolidacao GM/MS n 1 a 6/2017"],
            mindMapNodes: [
              {
                id: "psf-1",
                label: "ESF - Estrategia Saude da Familia",
                children: [
                  { id: "psf-1.1", label: "Equipe Minima", children: [
                    { id: "psf-1.1.1", label: "Medico" },
                    { id: "psf-1.1.2", label: "Enfermeiro" },
                    { id: "psf-1.1.3", label: "Tec. Enfermagem" },
                    { id: "psf-1.1.4", label: "ACS" },
                  ]},
                  { id: "psf-1.2", label: "Territorio Adscrito" },
                  { id: "psf-1.3", label: "Atendimento Domiciliar" },
                  { id: "psf-1.4", label: "Acoes de Promocao" },
                ]
              }
            ]
          },
          {
            id: "vigilancia-saude-esf",
            name: "Vigilancia a Saude",
            description: "Perfil epidemiologico, vacina, endemias e epidemias; PCIH",
            references: ["Guia de Vigilancia em Saude - MS", "Manual de PCIH"],
          },
          {
            id: "sus-esf",
            name: "Sistema Unico de Saude (SUS)",
            description: "Principios, diretrizes, organizacao e funcionamento",
            references: ["Lei 8.080/1990", "Lei 8.142/1990", "Constituicao Federal Arts. 196 a 200"],
          },
          {
            id: "etica-enfermagem-esf",
            name: "Etica, Deontologia e Bioetica",
            description: "Legislacao em Enfermagem; Codigo de Etica",
            references: ["Resolucao COFEN", "Lei do Exercicio Profissional"],
          },
          {
            id: "saude-coletiva",
            name: "Saude Coletiva e Epidemiologia",
            description: "Nocoes de saude coletiva; Indicadores de saude",
            references: ["Epidemiologia e Saude - Rouquayrol"],
          },
          {
            id: "semiologia-esf",
            name: "Semiologia e Semiotecnica",
            description: "Sistematizacao da Assistencia em Enfermagem",
            references: ["Semiologia e Semiotecnica - Bare & Smeltzer"],
          },
          {
            id: "clinica-ciclo-vital",
            name: "Clinica em Todo Ciclo Vital",
            description: "Cuidados em recem-nascidos, crianca, adolescente, adulto, mulher e idoso",
            references: ["Tratado de Enfermagem Medico-Cirurgica - Brunner"],
          },
          {
            id: "enfermagem-cirurgica",
            name: "Enfermagem Cirurgica",
            description: "Processo do cuidar em Enfermagem Cirurgica em todo o ciclo vital",
            references: ["Enfermagem Medico-Cirurgica - Brunner"],
          },
          {
            id: "doencas-transmissiveis-esf",
            name: "Doencas Transmissiveis",
            description: "Processo do cuidar em enfermagem em doencas transmissiveis",
            references: ["Manual de Vigilancia Epidemiologica - MS"],
          },
          {
            id: "urgencia-emergencia-esf",
            name: "Urgencias e Emergencias",
            description: "Atendimento de emergencia",
            references: ["Protocolos de Urgencia - SAMU", "BLS/ACLS"],
          },
          {
            id: "saude-mental-esf",
            name: "Saude Mental e Psiquiatria",
            description: "Processo do cuidar em Enfermagem em Saude Mental",
            references: ["Lei 10.216/2001", "Politica Nacional de Saude Mental"],
          },
          {
            id: "administracao-saude-esf",
            name: "Administracao e Gerenciamento",
            description: "Gestao de equipes; Saude da Familia e atendimento domiciliar",
            references: ["Administracao em Enfermagem - Kurcgant"],
          },
          {
            id: "biosseguranca-esf",
            name: "Biosseguranca",
            description: "Biosseguranca nas acoes de Enfermagem; CME",
            references: ["NR-32", "Manual de Biosseguranca - MS"],
          },
          {
            id: "imunizacao-esf",
            name: "Programa Nacional de Imunizacao",
            description: "Calendario vacinal; Rede de frio",
            references: ["Manual de Normas e Procedimentos para Vacinacao - MS"],
          },
        ]
      },
    ],
    questions: []
  },
  {
    id: "auxiliar-administrativo",
    code: "012",
    name: "Auxiliar Administrativo",
    level: "medio",
    workload: "40 horas semanais",
    salary: "R$ 1.776,00",
    vacancies: 15,
    requirements: "Ensino Medio Completo",
    subjects: [
      {
        id: "portugues-medio",
        name: "Lingua Portuguesa",
        weight: 0.20,
        totalQuestions: 10,
        topics: [
          {
            id: "concordancia",
            name: "Concordancia Verbal e Nominal",
            description: "Identificacao dos tempos e modos verbais, correspondencia de formas verbais, flexao de verbos",
            references: ["Gramatica de Celso Cunha"],
          },
          {
            id: "regencia",
            name: "Regencia Nominal e Verbal",
            description: "Relacao entre termos regentes e regidos",
            references: ["Novissima Gramatica - Cegalla"],
          },
          {
            id: "oracao",
            name: "Oracao: Sujeito e Predicado",
            description: "Posicao do sujeito e predicado, concordancia, classificacao do sujeito",
            references: ["Gramatica Reflexiva - Cereja e Magalhaes"],
          },
          {
            id: "figuras-linguagem",
            name: "Figuras de Linguagem e Vicios",
            description: "Figuras de linguagem; vicios de linguagem; colocacao pronominal",
            references: ["Moderna Gramatica Portuguesa - Evanildo Bechara"],
          },
          {
            id: "interpretacao",
            name: "Compreensao e Interpretacao de Textos",
            description: "Compreensao e interpretacao de frases, palavras ou textos",
            references: ["Interpretacao de Textos - William Cereja"],
          },
        ]
      },
      {
        id: "matematica-medio",
        name: "Matematica",
        weight: 0.20,
        totalQuestions: 5,
        topics: [
          {
            id: "logica-medio",
            name: "Estruturas logicas e Raciocinio Logico",
            description: "Estruturas logicas, logica da argumentacao, diagramas logicos",
            references: ["Raciocinio Logico - Renato Oliveira"],
          },
          {
            id: "numeros-medio",
            name: "Numeros e Operacoes",
            description: "Numeros inteiros, racionais, decimais: operacoes e propriedades",
            references: ["Matematica Basica - Gelson Iezzi"],
          },
          {
            id: "porcentagem-medio",
            name: "Porcentagem e Regra de Tres",
            description: "Razao, proporcao, porcentagem, regra de tres simples",
            references: ["Matematica Comercial - Oscar de Moura"],
          },
          {
            id: "geometria-medio",
            name: "Geometria",
            description: "Triangulo retangulo; Teorema de Pitagoras; Area, Volume e Perimetro",
            references: ["Geometria Plana - Dolce e Pompeo"],
          },
          {
            id: "graficos",
            name: "Tabelas e Graficos",
            description: "Relacao entre grandezas: tabelas e graficos; resolucao de problemas",
            references: ["Matematica - Dante"],
          },
        ]
      },
      {
        id: "conhecimentos-gerais-medio",
        name: "Conhecimentos Gerais",
        weight: 0.20,
        totalQuestions: 5,
        topics: [
          {
            id: "atualidades-medio",
            name: "Atualidades",
            description: "Fatos e noticias locais, nacionais e internacionais",
            references: ["Portais de noticias: G1, Folha, Estadao"],
          },
          {
            id: "politica-medio",
            name: "Politica e Economia",
            description: "Conhecimentos municipais, estaduais e nacionais",
            references: ["Constituicao Federal", "Noticias atualizadas"],
          },
        ]
      },
      {
        id: "conhecimentos-especificos-aux-admin",
        name: "Conhecimentos Especificos",
        weight: 0.30,
        totalQuestions: 20,
        topics: [
          {
            id: "protocolo",
            name: "Protocolo e Recepcao",
            description: "Recepcao; Relacoes humanas; Qualidade no atendimento",
            references: ["Manual de Redacao da Presidencia da Republica"],
            mindMapNodes: [
              {
                id: "prot-1",
                label: "Protocolo e Recepcao",
                children: [
                  { id: "prot-1.1", label: "Atendimento ao Publico" },
                  { id: "prot-1.2", label: "Comunicacao Telefonica" },
                  { id: "prot-1.3", label: "Relacoes Interpessoais" },
                  { id: "prot-1.4", label: "Postura Profissional" },
                ]
              }
            ]
          },
          {
            id: "correspondencia",
            name: "Correspondencia Oficial e Redacao",
            description: "Redacao Oficial; Correspondencia empresarial; Formas de tratamento",
            references: ["Manual de Redacao da Presidencia da Republica"],
          },
          {
            id: "atos-administrativos",
            name: "Atos Administrativos",
            description: "Nocoes de Administracao Publica; Principios fundamentais",
            references: ["Direito Administrativo - Maria Sylvia Di Pietro"],
          },
          {
            id: "arquivo",
            name: "Arquivo e Documentacao",
            description: "Organizacao de arquivo; tecnicas e metodos de arquivamento; arquivamento informatizado",
            references: ["Arquivologia - Renato Valentini"],
          },
          {
            id: "rotinas",
            name: "Rotinas Administrativas",
            description: "Rotinas de pessoal, compras, escritorio; Cadastro e licitacoes",
            references: ["Administracao de Recursos Materiais - Marco Viana"],
          },
          {
            id: "equipamentos",
            name: "Uso de Equipamentos de Escritorio",
            description: "Uso de microcomputador; equipamentos de escritorio",
            references: ["Informatica para Concursos"],
          },
          {
            id: "etica-admin",
            name: "Etica Profissional",
            description: "Etica profissional e sigilo profissional",
            references: ["Codigo de Etica do Servidor Publico"],
          },
        ]
      },
    ],
    questions: []
  },
  {
    id: "monitor-apoio",
    code: "014",
    name: "Monitor de Apoio",
    level: "medio",
    workload: "40 horas semanais",
    salary: "R$ 2.036,00",
    vacancies: 83,
    requirements: "Ensino Medio Completo",
    subjects: [
      {
        id: "portugues-medio",
        name: "Lingua Portuguesa",
        weight: 0.20,
        totalQuestions: 10,
        topics: [
          {
            id: "concordancia",
            name: "Concordancia Verbal e Nominal",
            description: "Identificacao dos tempos e modos verbais, correspondencia de formas verbais",
            references: ["Gramatica de Celso Cunha"],
          },
          {
            id: "regencia",
            name: "Regencia Nominal e Verbal",
            description: "Relacao entre termos regentes e regidos",
            references: ["Novissima Gramatica - Cegalla"],
          },
          {
            id: "oracao",
            name: "Oracao: Sujeito e Predicado",
            description: "Posicao do sujeito e predicado, concordancia, classificacao do sujeito",
            references: ["Gramatica Reflexiva - Cereja e Magalhaes"],
          },
          {
            id: "interpretacao",
            name: "Compreensao e Interpretacao de Textos",
            description: "Compreensao e interpretacao de frases, palavras ou textos",
            references: ["Interpretacao de Textos - William Cereja"],
          },
        ]
      },
      {
        id: "matematica-medio",
        name: "Matematica",
        weight: 0.20,
        totalQuestions: 5,
        topics: [
          {
            id: "logica-medio",
            name: "Estruturas logicas e Raciocinio Logico",
            description: "Estruturas logicas, logica da argumentacao, diagramas logicos",
            references: ["Raciocinio Logico - Renato Oliveira"],
          },
          {
            id: "numeros-medio",
            name: "Numeros e Operacoes",
            description: "Numeros inteiros, racionais, decimais: operacoes e propriedades",
            references: ["Matematica Basica - Gelson Iezzi"],
          },
          {
            id: "porcentagem-medio",
            name: "Porcentagem e Regra de Tres",
            description: "Razao, proporcao, porcentagem, regra de tres simples",
            references: ["Matematica Comercial - Oscar de Moura"],
          },
        ]
      },
      {
        id: "conhecimentos-gerais-medio",
        name: "Conhecimentos Gerais",
        weight: 0.20,
        totalQuestions: 5,
        topics: [
          {
            id: "atualidades-medio",
            name: "Atualidades",
            description: "Fatos e noticias locais, nacionais e internacionais",
            references: ["Portais de noticias: G1, Folha, Estadao"],
          },
        ]
      },
      {
        id: "conhecimentos-especificos-monitor",
        name: "Conhecimentos Especificos",
        weight: 0.30,
        totalQuestions: 20,
        topics: [
          {
            id: "ldb",
            name: "Lei de Diretrizes e Bases da Educacao",
            description: "Lei n 9.394/96 e suas alteracoes",
            references: ["Lei 9.394/1996"],
            mindMapNodes: [
              {
                id: "ldb-1",
                label: "LDB - Lei 9.394/96",
                children: [
                  { id: "ldb-1.1", label: "Principios e Fins" },
                  { id: "ldb-1.2", label: "Direito a Educacao" },
                  { id: "ldb-1.3", label: "Organizacao da Educacao" },
                  { id: "ldb-1.4", label: "Niveis e Modalidades" },
                ]
              }
            ]
          },
          {
            id: "psicomotricidade",
            name: "Psicomotricidade",
            description: "Psicomotricidade como desenvolvimento na aprendizagem da crianca",
            references: ["Psicomotricidade - Le Boulch"],
          },
          {
            id: "ludico",
            name: "O Brincar e o Ludico",
            description: "A importancia do brincar: a crianca e o ludico; Adaptacao da crianca",
            references: ["O Jogo e a Educacao Infantil - Kishimoto"],
          },
          {
            id: "organizacao-trabalho",
            name: "Organizacao do Trabalho na Educacao Infantil",
            description: "Organizacao dos espacos, do tempo e selecao de atividades de rotina e recreacao",
            references: ["Educacao Infantil: Fundamentos e Metodos - Zilma de Oliveira"],
          },
          {
            id: "cuidados-crianca",
            name: "Cuidados Basicos com a Crianca",
            description: "Nocoes de higiene e seguranca ambiental; primeiros socorros; saude oral",
            references: ["Manual de Primeiros Socorros"],
          },
          {
            id: "nutricao-crianca",
            name: "Nocoes de Nutricao",
            description: "Alimentacao saudavel na infancia; prevencao de doencas comuns",
            references: ["Guia Alimentar para a Populacao Brasileira"],
          },
          {
            id: "relacao-educacao",
            name: "Relacao entre Educacao, Sociedade e Cultura",
            description: "Aspectos socioculturais da educacao",
            references: ["Sociologia da Educacao - Dermeval Saviani"],
          },
        ]
      },
    ],
    questions: []
  },
];

// Questoes de exemplo para cada cargo
export const sampleQuestions: Question[] = [
  // Questoes para Enfermeiro
  {
    id: "enf-q1",
    subjectId: "conhecimentos-especificos-enfermeiro",
    topicId: "sus",
    text: "De acordo com a Lei 8.080/1990, qual dos seguintes NAO e um principio do SUS?",
    options: [
      "Universalidade de acesso aos servicos de saude",
      "Integralidade de assistencia",
      "Centralizacao da gestao",
      "Igualdade da assistencia a saude"
    ],
    correctAnswer: 2,
    explanation: "A centralizacao NAO e um principio do SUS. Pelo contrario, a descentralizacao politico-administrativa e uma das diretrizes do SUS, conforme Art. 7o da Lei 8.080/1990.",
    difficulty: "facil"
  },
  {
    id: "enf-q2",
    subjectId: "conhecimentos-especificos-enfermeiro",
    topicId: "esf",
    text: "Qual e a equipe minima de uma Unidade de Saude da Familia?",
    options: [
      "Medico, Enfermeiro e Agente Comunitario de Saude",
      "Medico, Enfermeiro, Tecnico de Enfermagem e Agente Comunitario de Saude",
      "Medico, Enfermeiro, Auxiliar de Enfermagem e Dentista",
      "Medico, Enfermeiro, Tecnico de Enfermagem, Dentista e ACS"
    ],
    correctAnswer: 1,
    explanation: "Conforme a PNAB, a equipe minima de Saude da Familia e composta por: medico, enfermeiro, tecnico ou auxiliar de enfermagem e agentes comunitarios de saude (ACS).",
    difficulty: "medio"
  },
  {
    id: "enf-q3",
    subjectId: "conhecimentos-especificos-enfermeiro",
    topicId: "biosseguranca",
    text: "Qual e a ordem correta de paramentacao dos EPIs para atendimento de paciente em isolamento respiratorio?",
    options: [
      "Avental, mascara N95, oculos, luvas, gorro",
      "Gorro, mascara N95, avental, oculos, luvas",
      "Mascara N95, gorro, avental, oculos, luvas",
      "Oculos, mascara N95, avental, luvas, gorro"
    ],
    correctAnswer: 1,
    explanation: "A sequencia correta de paramentacao e: gorro (protecao dos cabelos), mascara N95 (protecao respiratoria), avental (protecao do corpo), oculos/face shield (protecao ocular) e por ultimo as luvas.",
    difficulty: "dificil"
  },
  {
    id: "enf-q4",
    subjectId: "portugues-superior",
    topicId: "coesao-coerencia",
    text: "Assinale a alternativa em que o termo destacado funciona como elemento de coesao referencial:",
    options: [
      "O paciente chegou ao hospital. ELE estava com febre alta.",
      "O paciente chegou ao hospital E foi atendido rapidamente.",
      "O paciente chegou ao hospital, POREM nao foi atendido.",
      "O paciente chegou ao hospital PORQUE estava passando mal."
    ],
    correctAnswer: 0,
    explanation: "O pronome 'ELE' retoma o termo 'paciente', funcionando como elemento de coesao referencial (anafora). Os demais conectivos (E, POREM, PORQUE) sao elementos de coesao sequencial.",
    difficulty: "medio"
  },
  {
    id: "enf-q5",
    subjectId: "matematica-superior",
    topicId: "porcentagem",
    text: "Um hospital tem 250 leitos e a taxa de ocupacao atual e de 72%. Quantos leitos estao ocupados?",
    options: [
      "170 leitos",
      "180 leitos",
      "190 leitos",
      "200 leitos"
    ],
    correctAnswer: 1,
    explanation: "Para calcular 72% de 250: (72/100) x 250 = 0,72 x 250 = 180 leitos ocupados.",
    difficulty: "facil"
  },

  // Questoes para Auxiliar Administrativo
  {
    id: "adm-q1",
    subjectId: "conhecimentos-especificos-aux-admin",
    topicId: "correspondencia",
    text: "Qual o pronome de tratamento adequado para dirigir-se a um Prefeito Municipal?",
    options: [
      "Vossa Excelencia",
      "Vossa Senhoria",
      "Vossa Magnificencia",
      "Vossa Santidade"
    ],
    correctAnswer: 0,
    explanation: "De acordo com o Manual de Redacao da Presidencia da Republica, usa-se 'Vossa Excelencia' para dirigir-se a autoridades como Prefeitos Municipais.",
    difficulty: "facil"
  },
  {
    id: "adm-q2",
    subjectId: "conhecimentos-especificos-aux-admin",
    topicId: "arquivo",
    text: "No metodo de arquivamento alfabetico, como deve ser arquivado o nome 'Maria das Gracas Silva Santos'?",
    options: [
      "Maria das Gracas Silva Santos",
      "Santos, Maria das Gracas Silva",
      "Silva Santos, Maria das Gracas",
      "Das Gracas Silva Santos, Maria"
    ],
    correctAnswer: 1,
    explanation: "No arquivamento alfabetico pelo sobrenome, deve-se colocar o ultimo sobrenome primeiro, seguido de virgula e os demais nomes na ordem direta: Santos, Maria das Gracas Silva.",
    difficulty: "medio"
  },
  {
    id: "adm-q3",
    subjectId: "conhecimentos-especificos-aux-admin",
    topicId: "atos-administrativos",
    text: "Qual dos seguintes NAO e um principio da Administracao Publica previsto na Constituicao Federal?",
    options: [
      "Legalidade",
      "Impessoalidade",
      "Lucratividade",
      "Eficiencia"
    ],
    correctAnswer: 2,
    explanation: "Os principios da Administracao Publica previstos no Art. 37 da CF/88 sao: Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiencia (LIMPE). Lucratividade NAO e um principio da Administracao Publica.",
    difficulty: "facil"
  },

  // Questoes para Monitor de Apoio
  {
    id: "mon-q1",
    subjectId: "conhecimentos-especificos-monitor",
    topicId: "ldb",
    text: "De acordo com a LDB (Lei 9.394/96), a educacao infantil sera oferecida em:",
    options: [
      "Creches para criancas de 0 a 3 anos e pre-escolas para criancas de 4 a 5 anos",
      "Creches para criancas de 0 a 2 anos e pre-escolas para criancas de 3 a 6 anos",
      "Creches para criancas de 0 a 4 anos e pre-escolas para criancas de 5 a 6 anos",
      "Creches para criancas de 0 a 5 anos"
    ],
    correctAnswer: 0,
    explanation: "Conforme o Art. 30 da LDB, a educacao infantil sera oferecida em: I - creches, ou entidades equivalentes, para criancas de ate tres anos de idade; II - pre-escolas, para as criancas de 4 (quatro) a 5 (cinco) anos de idade.",
    difficulty: "medio"
  },
  {
    id: "mon-q2",
    subjectId: "conhecimentos-especificos-monitor",
    topicId: "ludico",
    text: "Qual a principal funcao do brincar no desenvolvimento infantil?",
    options: [
      "Apenas entretenimento",
      "Desenvolvimento cognitivo, social e emocional",
      "Somente exercicio fisico",
      "Preparacao exclusiva para a alfabetizacao"
    ],
    correctAnswer: 1,
    explanation: "O brincar e fundamental para o desenvolvimento integral da crianca, promovendo o desenvolvimento cognitivo (raciocinio, imaginacao), social (interacao, cooperacao) e emocional (expressao de sentimentos, autoconhecimento).",
    difficulty: "facil"
  },
  {
    id: "mon-q3",
    subjectId: "conhecimentos-especificos-monitor",
    topicId: "cuidados-crianca",
    text: "Em caso de engasgo em crianca consciente maior de 1 ano, qual a manobra indicada?",
    options: [
      "Manobra de Heimlich",
      "Respiracao boca a boca",
      "Tapotagem",
      "Posicao de recuperacao"
    ],
    correctAnswer: 0,
    explanation: "A Manobra de Heimlich e indicada para desobstrucao de vias aereas em criancas maiores de 1 ano e adultos conscientes. Consiste em compressoes abdominais subdiafragmaticas.",
    difficulty: "medio"
  },
];
