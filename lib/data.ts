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
  summary?: string;
  keyPoints?: string[];
  tips?: string[];
}

export interface MindMapNode {
  id: string;
  label: string;
  children?: MindMapNode[];
}

export interface Question {
  id: string;
  positionId: string;
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

const n = (id: string, label: string, children: MindMapNode[] = []): MindMapNode =>
  children.length > 0 ? { id, label, children } : { id, label };

type TopicSeed = Omit<Topic, "summary" | "keyPoints"> & {
  summary?: string;
  keyPoints?: string[];
};

function extractMainBranches(nodes: MindMapNode[] | undefined): string[] {
  if (!nodes || nodes.length === 0) return [];
  return nodes.flatMap((root) => (root.children ?? []).map((branch) => branch.label));
}

function enrichTopic(seed: TopicSeed): Topic {
  const mainBranches = extractMainBranches(seed.mindMapNodes).slice(0, 8);
  const summary =
    seed.summary ??
    `${seed.description}. Para cobertura completa, revise conceito-base, classificacoes, excecoes e aplicacao em questoes do edital, com foco em ${mainBranches.join(", ")}.`;

  const keyPoints =
    seed.keyPoints ??
    mainBranches.map(
      (branch) =>
        `${branch}: memorize definicao, criterio de cobranca e armadilhas de banca relacionadas ao tema.`,
    );

  return {
    ...seed,
    summary,
    keyPoints,
  };
}

const portuguesSuperiorTopics: Topic[] = [
  enrichTopic({
    id: "comunicacao",
    name: "Comunicacao: linguagem, texto e discurso",
    description: "Estrutura da comunicacao, funcoes da linguagem e construcao de sentidos em diferentes generos",
    references: ["Gramatica de Celso Cunha", "Novissima Gramatica - Cegalla", "Interpretacao de Textos - Koch e Elias"],
    mindMapNodes: [
      n("com-root", "Comunicacao", [
        n("com-lang", "Linguagem", [
          n("com-lang-tipos", "Tipos", [
            n("com-lang-verbal", "Verbal"),
            n("com-lang-nverbal", "Nao verbal"),
            n("com-lang-mista", "Mista"),
          ]),
          n("com-lang-funcoes", "Funcoes da Linguagem", [
            n("com-lang-ref", "Referencial"),
            n("com-lang-exp", "Expressiva"),
            n("com-lang-apel", "Apelativa"),
            n("com-lang-fat", "Fatica"),
            n("com-lang-meta", "Metalinguistica"),
            n("com-lang-poe", "Poetica"),
          ]),
        ]),
        n("com-texto", "Texto", [
          n("com-texto-estrutura", "Estrutura", [
            n("com-texto-intro", "Introducao"),
            n("com-texto-desen", "Desenvolvimento"),
            n("com-texto-conc", "Conclusao"),
          ]),
          n("com-texto-generos", "Generos Textuais", [
            n("com-texto-narr", "Narrativo"),
            n("com-texto-arg", "Argumentativo"),
            n("com-texto-inst", "Injuntivo"),
          ]),
          n("com-texto-inter", "Intertextualidade"),
        ]),
        n("com-disc", "Discurso", [
          n("com-disc-narrador", "Narrador e ponto de vista"),
          n("com-disc-modal", "Modalizacao"),
          n("com-disc-intencao", "Intencao comunicativa"),
        ]),
      ]),
    ],
    tips: [
      "Funcoes da linguagem: identifique sempre a intencao principal do enunciador antes de marcar alternativa.",
      "Genero textual: observe finalidade social do texto para diferenciar artigo, noticia, editorial e instrucao.",
      "Intertextualidade: relacao entre textos pode aparecer por citacao, alusao, parodia ou referencia implicita.",
      "Modalizacao: marcas de certeza, duvida e avaliacao mostram posicionamento do autor no discurso.",
    ],
  }),
  enrichTopic({
    id: "coesao-coerencia",
    name: "Coesao e Coerencia Textuais",
    description: "Mecanismos linguistico-discursivos que conectam ideias e garantem sentido global ao texto",
    references: ["A Coesao Textual - Ingedore Koch", "Texto e Coerencia - Koch e Travaglia"],
    mindMapNodes: [
      n("coec-root", "Coesao e Coerencia", [
        n("coec-ref", "Coesao Referencial", [
          n("coec-ref-pronomes", "Pronomes anaforicos e cataforicos"),
          n("coec-ref-sinon", "Sinonimos e hiperonimos"),
          n("coec-ref-elipse", "Elipse e substituicao lexical"),
        ]),
        n("coec-seq", "Coesao Sequencial", [
          n("coec-seq-conect", "Conectivos", [
            n("coec-seq-add", "Aditivos"),
            n("coec-seq-adv", "Adversativos"),
            n("coec-seq-caus", "Causais"),
            n("coec-seq-conc", "Conclusivos"),
          ]),
          n("coec-seq-temp", "Sequenciacao temporal"),
        ]),
        n("coec-coer", "Coerencia", [
          n("coec-coer-global", "Coerencia global"),
          n("coec-coer-local", "Coerencia local"),
          n("coec-coer-naoc", "Nao contradicao e progressao"),
        ]),
      ]),
    ],
    tips: [
      "Coesao referencial: procure o termo retomado para validar pronomes e evitar ambiguidades.",
      "Conectivos: classifique a relacao logica entre periodos antes de substituir conjuncoes.",
      "Coerencia global: tema central precisa ser mantido do inicio ao fim sem fuga argumentativa.",
      "Coerencia local: incompatibilidade semantica entre frases costuma indicar alternativa incorreta.",
    ],
  }),
  enrichTopic({
    id: "semantica",
    name: "Semantica",
    description: "Sentido literal e figurado, relacoes semanticas entre palavras e efeitos de significado em contexto",
    references: ["Moderna Gramatica Portuguesa - Evanildo Bechara"],
    mindMapNodes: [
      n("sem-root", "Semantica", [
        n("sem-dencon", "Denotacao x Conotacao", [
          n("sem-dencon-den", "Sentido literal"),
          n("sem-dencon-con", "Sentido figurado"),
          n("sem-dencon-efeito", "Efeito de sentido"),
        ]),
        n("sem-fig", "Figuras de Linguagem", [
          n("sem-fig-palavra", "Metafora e metonimia"),
          n("sem-fig-pens", "Ironia e eufemismo"),
          n("sem-fig-constr", "Hiperbato e elipse"),
        ]),
        n("sem-rel", "Relacoes Semanticas", [
          n("sem-rel-sin", "Sinonimia e antonimia"),
          n("sem-rel-hom", "Homonimia e paronimia"),
          n("sem-rel-pol", "Polissemia e ambiguidade"),
        ]),
      ]),
    ],
    tips: [
      "Denotacao e conotacao: avalie o contexto para decidir se o termo foi usado literalmente ou por figura.",
      "Metafora e metonimia: metafora opera por semelhanca e metonimia por relacao de contiguidade.",
      "Homonimia e paronimia: palavras parecidas na forma podem ter sentidos totalmente distintos.",
      "Ambiguidade: verifique se o periodo permite dupla interpretacao por referencia mal posicionada.",
    ],
  }),
  enrichTopic({
    id: "morfologia",
    name: "Morfologia",
    description: "Estrutura, formacao e classificacao das palavras na norma padrao",
    references: ["Gramatica Descritiva do Portugues - Mario Perini", "Gramatica para Concursos - Fernando Pestana"],
    mindMapNodes: [
      n("mor-root", "Morfologia", [
        n("mor-estr", "Estrutura das Palavras", [
          n("mor-estr-rad", "Radical"),
          n("mor-estr-afixos", "Prefixo e sufixo"),
          n("mor-estr-des", "Desinencias"),
        ]),
        n("mor-form", "Formacao de Palavras", [
          n("mor-form-der", "Derivacao"),
          n("mor-form-comp", "Composicao"),
          n("mor-form-hib", "Hibridismo e siglas"),
        ]),
        n("mor-classes", "Classes Gramaticais", [
          n("mor-classes-nom", "Substantivo, adjetivo e artigo"),
          n("mor-classes-verb", "Verbo e adverbio"),
          n("mor-classes-inv", "Preposicao, conjuncao e interjeicao"),
        ]),
      ]),
    ],
    tips: [
      "Radical e afixos: localizar o radical ajuda a reconhecer familias lexicais cobradas em prova.",
      "Derivacao e composicao: banca costuma pedir identificacao do processo de formacao dominante.",
      "Classes de palavras: funcao no periodo vale mais que decoracao isolada de classificacao.",
      "Flexao verbal: observe modo, tempo, pessoa e numero para evitar erro em concordancia.",
    ],
  }),
  enrichTopic({
    id: "sintaxe",
    name: "Sintaxe",
    description: "Relacoes sintaticas da oracao e do periodo com foco em concordancia, regencia e crase",
    references: ["Gramatica de Celso Cunha", "Nova Gramatica do Portugues Contemporaneo - Cunha e Cintra"],
    mindMapNodes: [
      n("sin-root", "Sintaxe", [
        n("sin-termos", "Termos da Oracao", [
          n("sin-termos-suj", "Sujeito", [
            n("sin-termos-suj-sim", "Simples e composto"),
            n("sin-termos-suj-ind", "Indeterminado e oculto"),
            n("sin-termos-suj-inex", "Inexistente"),
          ]),
          n("sin-termos-pred", "Predicado", [
            n("sin-termos-pred-v", "Verbal"),
            n("sin-termos-pred-n", "Nominal"),
            n("sin-termos-pred-vn", "Verbo-nominal"),
          ]),
        ]),
        n("sin-periodo", "Periodo Composto", [
          n("sin-periodo-coord", "Oracoes coordenadas"),
          n("sin-periodo-subst", "Subordinadas substantivas"),
          n("sin-periodo-subad", "Subordinadas adjetivas e adverbiais"),
        ]),
        n("sin-normap", "Norma Padrao", [
          n("sin-normap-conc", "Concordancia verbal e nominal"),
          n("sin-normap-reg", "Regencia verbal e nominal"),
          n("sin-normap-crase", "Uso da crase"),
        ]),
      ]),
    ],
    tips: [
      "Sujeito inexistente: verbos impessoais permanecem sempre no singular.",
      "Concordancia verbal: nucleo do sujeito determina flexao, nao o termo mais proximo.",
      "Regencia verbal: decore verbos com preposicao obrigatoria para evitar erros classicos.",
      "Crase: confirme fusao de preposicao A com artigo A antes de aplicar o acento grave.",
      "Oracoes subordinadas: classifique a funcao sintatica da oracao para acertar conectivo.",
    ],
  }),
];

const portuguesMedioTopics: Topic[] = [
  enrichTopic({
    id: "concordancia",
    name: "Concordancia Verbal e Nominal",
    description: "Regras basicas e casos frequentes de concordancia em frases de uso administrativo e cotidiano",
    references: ["Gramatica de Celso Cunha", "Portugues para Concursos - Fernando Pestana"],
    mindMapNodes: [
      n("conm-root", "Concordancia", [
        n("conm-verbal", "Concordancia Verbal", [
          n("conm-verbal-bas", "Regra basica com nucleo do sujeito"),
          n("conm-verbal-comp", "Sujeito composto"),
          n("conm-verbal-col", "Sujeito coletivo"),
        ]),
        n("conm-nominal", "Concordancia Nominal", [
          n("conm-nominal-bas", "Ajuste com substantivo"),
          n("conm-nominal-adj", "Adjetivo posposto e anteposto"),
          n("conm-nominal-casos", "Casos especiais"),
        ]),
      ]),
    ],
    tips: [
      "Nucleo do sujeito: verbo concorda com o nucleo e nao com termos intercalados.",
      "Sujeito composto: posicao do sujeito pode alterar preferencia de concordancia verbal.",
      "Adjetivo posposto: quando se refere a dois substantivos, concordancia pode variar.",
      "Expressao partitiva: em parte dos casos, verbo admite singular ou plural conforme sentido.",
    ],
  }),
  enrichTopic({
    id: "regencia",
    name: "Regencia Verbal e Nominal",
    description: "Relacao entre termos regentes e regidos com enfase em verbos de alta incidencia em provas",
    references: ["Novissima Gramatica - Cegalla", "Gramatica para Concursos - Pestana"],
    mindMapNodes: [
      n("regm-root", "Regencia", [
        n("regm-verbos", "Verbos de Regencia", [
          n("regm-verbos-assistir", "Assistir, visar, aspirar"),
          n("regm-verbos-obed", "Obedecer e desobedecer"),
          n("regm-verbos-pagar", "Pagar e perdoar"),
        ]),
        n("regm-nomes", "Regencia Nominal", [
          n("regm-nomes-padroes", "Nomes com preposicao fixa"),
          n("regm-nomes-dupla", "Dupla regencia"),
        ]),
        n("regm-crase", "Crase Basica", [
          n("regm-crase-obrig", "Casos obrigatorios"),
          n("regm-crase-proib", "Casos proibidos"),
          n("regm-crase-fac", "Casos facultativos"),
        ]),
      ]),
    ],
    tips: [
      "Verbo assistir: no sentido de ver, exige preposicao A.",
      "Verbo obedecer: pede complemento indireto com preposicao A.",
      "Regencia nominal: confira sempre o nome que exige preposicao fixa.",
      "Crase basica: ocorre quando ha preposicao A mais artigo A no termo seguinte.",
    ],
  }),
  enrichTopic({
    id: "figuras-linguagem",
    name: "Figuras de Linguagem e Vicios",
    description: "Figuras de palavra, pensamento e construcao, alem de vicios recorrentes em redacao",
    references: ["Moderna Gramatica Portuguesa - Evanildo Bechara"],
    mindMapNodes: [
      n("figm-root", "Figuras de Linguagem", [
        n("figm-palavra", "Figuras de Palavra", [
          n("figm-palavra-met", "Metafora"),
          n("figm-palavra-meton", "Metonimia"),
          n("figm-palavra-cat", "Catacrese"),
        ]),
        n("figm-pens", "Figuras de Pensamento", [
          n("figm-pens-ant", "Antitese e paradoxo"),
          n("figm-pens-hip", "Hiperbole e eufemismo"),
          n("figm-pens-iro", "Ironia"),
        ]),
        n("figm-constr", "Figuras de Construcao", [
          n("figm-constr-elipse", "Elipse e zeugma"),
          n("figm-constr-hip", "Hiperbato"),
          n("figm-constr-vicios", "Vicios de linguagem"),
        ]),
      ]),
    ],
    tips: [
      "Metafora: transferencia de sentido por semelhanca sem conectivo comparativo.",
      "Metonimia: substituicao por relacao de proximidade entre termos.",
      "Ironia: sentido real oposto ao literal exige leitura de contexto.",
      "Vicios de linguagem: pleonasmo vicioso e cacofonia aparecem em itens de correcao.",
    ],
  }),
  enrichTopic({
    id: "interpretacao",
    name: "Compreensao e Interpretacao de Textos",
    description: "Leitura objetiva para localizar informacoes explicitas e inferir sentidos implicitos",
    references: ["Interpretacao de Textos - William Cereja", "Leitura e Producao de Texto - Koch"],
    mindMapNodes: [
      n("intm-root", "Interpretacao de Textos", [
        n("intm-local", "Localizacao de Informacoes", [
          n("intm-local-exp", "Dados explicitos"),
          n("intm-local-refer", "Referentes pronominais"),
        ]),
        n("intm-infer", "Inferencia", [
          n("intm-infer-imp", "Informacoes implicitas"),
          n("intm-infer-int", "Intencao do autor"),
        ]),
        n("intm-tema", "Tema Central e Vocabulrio", [
          n("intm-tema-central", "Tema e tese"),
          n("intm-tema-contexto", "Sentido de palavras no contexto"),
        ]),
      ]),
    ],
    tips: [
      "Informacao explicita: resposta literal costuma estar em trecho especifico do texto.",
      "Inferencia: use apenas pistas textuais, sem extrapolar opiniao pessoal.",
      "Tema central: diferencie assunto geral da tese defendida no texto.",
      "Vocabulario em contexto: a mesma palavra pode mudar sentido conforme o enunciado.",
    ],
  }),
];

const matematicaSuperiorTopics: Topic[] = [
  enrichTopic({
    id: "logica",
    name: "Estruturas Logicas e Diagramas",
    description: "Proposicoes, conectivos, tabelas-verdade e argumentacao logica",
    references: ["Raciocinio Logico - Renato Oliveira", "Matematica para Concursos - Carlos Henrique"],
    mindMapNodes: [
      n("logs-root", "Logica Proposicional", [
        n("logs-prop", "Proposicoes", [
          n("logs-prop-simples", "Simples e composta"),
          n("logs-prop-valor", "Valor logico"),
        ]),
        n("logs-conect", "Conectivos", [
          n("logs-conect-neg", "Negacao"),
          n("logs-conect-conj", "Conjuncao e disjuncao"),
          n("logs-conect-cond", "Condicional e bicondicional"),
        ]),
        n("logs-analise", "Analise Logica", [
          n("logs-analise-tab", "Tabelas verdade"),
          n("logs-analise-taut", "Tautologia e contradicao"),
          n("logs-analise-venn", "Diagramas de Euler-Venn e silogismo"),
        ]),
      ]),
    ],
    tips: [
      "Condicional: proposicao P->Q so e falsa quando P for verdadeira e Q falsa.",
      "Negacao composta: aplique leis de De Morgan para negar conjuncao e disjuncao.",
      "Tautologia: expressao sempre verdadeira para qualquer combinacao logica.",
      "Diagramas de Venn: use interseccao e uniao para testar inclusao de conjuntos.",
    ],
  }),
  enrichTopic({
    id: "numeros",
    name: "Conjuntos Numericos e Operacoes",
    description: "Operacoes fundamentais, propriedades dos conjuntos e calculo com fracoes",
    references: ["Matematica Basica - Gelson Iezzi"],
    mindMapNodes: [
      n("nums-root", "Numeros e Operacoes", [
        n("nums-conj", "Conjuntos Numericos", [
          n("nums-conj-n", "Naturais e inteiros"),
          n("nums-conj-q", "Racionais e irracionais"),
          n("nums-conj-r", "Reais"),
        ]),
        n("nums-op", "Operacoes", [
          n("nums-op-mmcmdc", "MMC e MDC"),
          n("nums-op-frac", "Fracoes e numeros decimais"),
          n("nums-op-pot", "Potenciacao e radiciacao"),
        ]),
        n("nums-prob", "Problemas", [
          n("nums-prob-ordem", "Ordem das operacoes"),
          n("nums-prob-propr", "Propriedades distributiva e associativa"),
        ]),
      ]),
    ],
    tips: [
      "MMC e MDC: fatoracao prima acelera questoes com multiplos e divisores.",
      "Fracoes: antes de somar, reduza ao mesmo denominador.",
      "Potenciacao: expoente negativo inverte a base para o denominador.",
      "Conjuntos numericos: identifique rapidamente o menor conjunto que contem o numero.",
    ],
  }),
  enrichTopic({
    id: "equacoes",
    name: "Equacoes, Sistemas e Funcoes",
    description: "Equacoes de 1o e 2o grau, sistemas lineares e analise grafica de funcoes",
    references: ["Fundamentos de Matematica Elementar - Gelson Iezzi"],
    mindMapNodes: [
      n("eqs-root", "Equacoes e Funcoes", [
        n("eqs-eq", "Equacoes", [
          n("eqs-eq-1g", "Equacao do 1o grau"),
          n("eqs-eq-2g", "Equacao do 2o grau e Bhaskara"),
          n("eqs-eq-sis", "Sistema de equacoes"),
        ]),
        n("eqs-func1", "Funcao do 1o Grau", [
          n("eqs-func1-coef", "Coeficientes angular e linear"),
          n("eqs-func1-graf", "Grafico e raiz"),
        ]),
        n("eqs-func2", "Funcao do 2o Grau", [
          n("eqs-func2-vert", "Vertice da parabola"),
          n("eqs-func2-raiz", "Raizes e concavidade"),
        ]),
      ]),
    ],
    tips: [
      "Bhaskara: calcule primeiro o delta para identificar numero de raizes reais.",
      "Sistema linear: substituicao e adicao sao metodos mais cobrados em concursos.",
      "Funcao afim: coeficiente angular positivo indica funcao crescente.",
      "Parabola: vertice define ponto de maximo ou minimo da funcao quadratica.",
    ],
  }),
  enrichTopic({
    id: "geometria",
    name: "Geometria e Trigonometria Basica",
    description: "Triangulos, areas, volumes e relacoes trigonometricas fundamentais",
    references: ["Geometria Plana - Dolce e Pompeo", "Trigonometria - Iezzi"],
    mindMapNodes: [
      n("ges-root", "Geometria", [
        n("ges-tri", "Triangulos", [
          n("ges-tri-pitag", "Teorema de Pitagoras"),
          n("ges-tri-lei", "Lei dos senos e cossenos"),
        ]),
        n("ges-plan", "Figuras Planas", [
          n("ges-plan-area", "Area de quadrado, retangulo, triangulo e circulo"),
          n("ges-plan-per", "Perimetro"),
        ]),
        n("ges-esp", "Solidos e Trigonometria", [
          n("ges-esp-vol", "Volume de prisma, cilindro e cone"),
          n("ges-esp-trig", "Seno, cosseno e tangente"),
        ]),
      ]),
    ],
    tips: [
      "Pitagoras: so vale em triangulo retangulo com catetos e hipotenusa.",
      "Area de triangulo: base vezes altura dividido por dois.",
      "Volume de cilindro: area da base multiplicada pela altura.",
      "Trigonometria basica: relacione catetos e hipotenusa para escolher razao correta.",
    ],
  }),
  enrichTopic({
    id: "porcentagem",
    name: "Porcentagem, Razoes e Juros Simples",
    description: "Razao, proporcao, regra de tres e aplicacoes em desconto, aumento e juros",
    references: ["Matematica Financeira - Jose Dutra"],
    mindMapNodes: [
      n("pors-root", "Porcentagem e Proporcao", [
        n("pors-raz", "Razao e Proporcao", [
          n("pors-raz-conceito", "Comparacao entre grandezas"),
          n("pors-raz-escalas", "Escalas e taxas"),
        ]),
        n("pors-regra", "Regra de Tres", [
          n("pors-regra-simples", "Simples"),
          n("pors-regra-comp", "Composta"),
        ]),
        n("pors-apl", "Aplicacoes Financeiras", [
          n("pors-apl-desc", "Desconto e aumento percentual"),
          n("pors-apl-juros", "Juros simples"),
          n("pors-apl-contexto", "Aplicacoes em saude e administracao"),
        ]),
      ]),
    ],
    tips: [
      "Porcentagem: converter para decimal antes do calculo evita erro de escala.",
      "Regra de tres simples: identifique primeiro se as grandezas sao diretas ou inversas.",
      "Aumento e desconto: aplique sempre sobre o valor-base informado no enunciado.",
      "Juros simples: juros iguais em todos os periodos com formula J igual a C vezes i vezes t.",
    ],
  }),
];

const matematicaMedioTopics: Topic[] = [
  enrichTopic({
    id: "numeros-medio",
    name: "Numeros e Operacoes Basicas",
    description: "Operacoes com inteiros, fracoes e decimais em problemas praticos",
    references: ["Matematica Basica - Gelson Iezzi"],
    mindMapNodes: [
      n("numm-root", "Numeros e Operacoes", [
        n("numm-int", "Inteiros e Decimais", [
          n("numm-int-soma", "Soma e subtracao"),
          n("numm-int-mult", "Multiplicacao e divisao"),
        ]),
        n("numm-frac", "Fracoes", [
          n("numm-frac-equ", "Equivalencia"),
          n("numm-frac-op", "Operacoes com fracoes"),
        ]),
        n("numm-prob", "Resolucao de Problemas", [
          n("numm-prob-ordem", "Ordem das operacoes"),
          n("numm-prob-contexto", "Problemas de cotidiano"),
        ]),
      ]),
    ],
    tips: [
      "Ordem das operacoes: parenteses primeiro, depois potencia, multiplicacao e soma.",
      "Fracoes equivalentes: multiplique numerador e denominador pelo mesmo numero.",
      "Divisao por decimal: transforme divisor em inteiro deslocando a virgula.",
      "Revisao final: reler unidade de medida evita erro de interpretacao.",
    ],
  }),
  enrichTopic({
    id: "porcentagem-medio",
    name: "Porcentagem",
    description: "Calculo percentual com foco em descontos, acrescimos e comparacao de valores",
    references: ["Matematica Comercial - Oscar de Moura"],
    mindMapNodes: [
      n("porm-root", "Porcentagem", [
        n("porm-conv", "Conversoes", [
          n("porm-conv-frac", "Percentual para fracao"),
          n("porm-conv-dec", "Percentual para decimal"),
        ]),
        n("porm-calculo", "Calculos", [
          n("porm-calculo-parte", "Parte de um todo"),
          n("porm-calculo-variacao", "Variacao percentual"),
        ]),
        n("porm-apl", "Aplicacoes", [
          n("porm-apl-desc", "Descontos"),
          n("porm-apl-acresc", "Acrescimos"),
          n("porm-apl-impostos", "Taxas e impostos simples"),
        ]),
      ]),
    ],
    tips: [
      "Percentual para decimal: 25 por cento equivale a 0,25.",
      "Desconto sucessivo: nao some percentuais, aplique um de cada vez.",
      "Acrescimo percentual: valor final igual a valor inicial vezes um mais taxa.",
      "Comparacao de precos: use base comum para nao cair em pegadinha.",
    ],
  }),
  enrichTopic({
    id: "regra-tres-medio",
    name: "Regra de Tres Simples e Composta",
    description: "Proporcionalidade entre grandezas em cenarios administrativos e escolares",
    references: ["Matematica para Concursos - Joao Carlos"],
    mindMapNodes: [
      n("r3m-root", "Regra de Tres", [
        n("r3m-simples", "Regra de Tres Simples", [
          n("r3m-simples-direta", "Grandezas diretamente proporcionais"),
          n("r3m-simples-inv", "Grandezas inversamente proporcionais"),
        ]),
        n("r3m-comp", "Regra de Tres Composta", [
          n("r3m-comp-ident", "Identificacao de grandezas"),
          n("r3m-comp-mont", "Montagem da equacao"),
        ]),
        n("r3m-valid", "Validacao", [
          n("r3m-valid-unid", "Unidades coerentes"),
          n("r3m-valid-resultado", "Checagem do resultado"),
        ]),
      ]),
    ],
    tips: [
      "Direta ou inversa: ao aumentar uma grandeza, observe comportamento da outra.",
      "Regra composta: organize em tabela para reduzir erro de montagem.",
      "Unidades: padronize horas, minutos e dias antes de calcular.",
      "Conferencia: resultado final deve ser coerente com o contexto da questao.",
    ],
  }),
  enrichTopic({
    id: "graficos",
    name: "Leitura de Graficos e Tabelas",
    description: "Interpretacao de dados quantitativos com analise de tendencia e comparacao",
    references: ["Matematica - Dante", "Estatistica Basica para Concursos"],
    mindMapNodes: [
      n("graf-root", "Graficos e Tabelas", [
        n("graf-tipos", "Tipos de Representacao", [
          n("graf-tipos-barras", "Grafico de barras"),
          n("graf-tipos-linhas", "Grafico de linhas"),
          n("graf-tipos-setores", "Grafico de setores"),
        ]),
        n("graf-leitura", "Leitura de Dados", [
          n("graf-leitura-eixos", "Eixos e escalas"),
          n("graf-leitura-valores", "Valores absolutos e percentuais"),
        ]),
        n("graf-analise", "Analise", [
          n("graf-analise-tend", "Tendencias"),
          n("graf-analise-compar", "Comparacoes"),
          n("graf-analise-conclusao", "Conclusoes validas"),
        ]),
      ]),
    ],
    tips: [
      "Escala do eixo: verifique intervalo antes de comparar barras ou linhas.",
      "Setores: converta percentual em parte do total quando solicitado.",
      "Tendencia: crescimento e queda exigem observacao da sequencia temporal.",
      "Conclusao valida: nao extrapole dado que nao aparece no grafico.",
    ],
  }),
  enrichTopic({
    id: "geometria-medio",
    name: "Geometria Basica",
    description: "Perimetro, area e volume de figuras comuns no ensino medio",
    references: ["Geometria Plana - Dolce e Pompeo"],
    mindMapNodes: [
      n("gem-root", "Geometria Basica", [
        n("gem-plan", "Figuras Planas", [
          n("gem-plan-quad", "Quadrado e retangulo"),
          n("gem-plan-tri", "Triangulo"),
          n("gem-plan-circ", "Circulo"),
        ]),
        n("gem-per", "Perimetro e Area", [
          n("gem-per-form", "Formulas principais"),
          n("gem-per-unid", "Unidades de medida"),
        ]),
        n("gem-vol", "Volume", [
          n("gem-vol-prisma", "Prisma e paralelepipedo"),
          n("gem-vol-cil", "Cilindro"),
        ]),
      ]),
    ],
    tips: [
      "Perimetro: soma de todos os lados da figura.",
      "Area do triangulo: base vezes altura dividido por dois.",
      "Area do circulo: pi vezes raio ao quadrado.",
      "Volume do paralelepipedo: comprimento vezes largura vezes altura.",
    ],
  }),
];

const conhecimentosGeraisTopics: Topic[] = [
  enrichTopic({
    id: "atualidades",
    name: "Atualidades",
    description: "Leitura critica de fatos politicos, economicos, ambientais, cientificos e culturais",
    references: ["Agencia Brasil", "IBGE Noticias", "Portal do Governo de MG"],
    mindMapNodes: [
      n("atu-root", "Atualidades", [
        n("atu-br", "Brasil", [
          n("atu-br-pol", "Politica"),
          n("atu-br-eco", "Economia"),
          n("atu-br-social", "Questoes sociais"),
        ]),
        n("atu-mundo", "Mundo", [
          n("atu-mundo-confl", "Conflitos e geopolita"),
          n("atu-mundo-org", "Organizacoes internacionais"),
        ]),
        n("atu-temas", "Temas Transversais", [
          n("atu-temas-meio", "Meio ambiente"),
          n("atu-temas-ciencia", "Ciencia e tecnologia"),
          n("atu-temas-cultura", "Cultura"),
        ]),
      ]),
    ],
    tips: [
      "Fonte confiavel: priorize orgaos oficiais e veiculos jornalisticos consolidados.",
      "Linha do tempo: organize fatos por data para evitar confusao em questoes contextualizadas.",
      "Tema transversal: conecte economia, politica e impacto social no mesmo evento.",
      "Revisao semanal: atualidades exige constancia e resumo periodico.",
    ],
  }),
  enrichTopic({
    id: "politica",
    name: "Politica, Estado e Administracao Publica",
    description: "Estrutura politico-administrativa com foco em esfera municipal e principios constitucionais",
    references: ["Constituicao Federal de 1988", "Lei Organica Municipal de Bom Repouso"],
    mindMapNodes: [
      n("pol-root", "Politica e Administracao", [
        n("pol-estr", "Estrutura Municipal", [
          n("pol-estr-pref", "Prefeitura e secretarias"),
          n("pol-estr-camara", "Camara Municipal"),
        ]),
        n("pol-poderes", "Poderes", [
          n("pol-poderes-exec", "Executivo"),
          n("pol-poderes-leg", "Legislativo"),
          n("pol-poderes-jud", "Judiciario"),
        ]),
        n("pol-adm", "Administracao Publica", [
          n("pol-adm-dirfund", "Direitos fundamentais"),
          n("pol-adm-limpe", "Principios LIMPE"),
        ]),
      ]),
    ],
    tips: [
      "Principios LIMPE: legalidade, impessoalidade, moralidade, publicidade e eficiencia.",
      "Poder Executivo municipal: chefiado pelo prefeito com apoio das secretarias.",
      "Camara Municipal: legisla e fiscaliza atos do Executivo local.",
      "Direitos fundamentais: base para controle de legalidade de politicas publicas.",
    ],
  }),
  enrichTopic({
    id: "geografia",
    name: "Geografia e Historia Regional",
    description: "Aspectos geograficos, historicos e economicos de Bom Repouso, Minas Gerais e Brasil",
    references: ["IBGE", "Fundacao Joao Pinheiro", "Portal Prefeitura de Bom Repouso"],
    mindMapNodes: [
      n("geo-root", "Geografia e Historia", [
        n("geo-bom", "Bom Repouso/MG", [
          n("geo-bom-local", "Localizacao e limites"),
          n("geo-bom-eco", "Economia local"),
          n("geo-bom-hist", "Formacao historica"),
        ]),
        n("geo-mg", "Minas Gerais", [
          n("geo-mg-reg", "Regioes do estado"),
          n("geo-mg-eco", "Setores economicos"),
        ]),
        n("geo-br", "Brasil", [
          n("geo-br-regioes", "Regioes e biomas"),
          n("geo-br-clima", "Clima e relevo"),
          n("geo-br-demografia", "Populacao e urbanizacao"),
        ]),
      ]),
    ],
    tips: [
      "Bom Repouso: revise localizacao, atividades economicas e caracteristicas populacionais.",
      "Minas Gerais: relacione regiao geografica e vocacao economica.",
      "Biomas brasileiros: diferencie clima, vegetacao e desafios ambientais.",
      "Dados oficiais: use indicadores do IBGE para embasar respostas objetivas.",
    ],
  }),
];

const enfermagem20hSpecificTopics: Topic[] = [
  enrichTopic({
    id: "sus",
    name: "Sistema Unico de Saude (SUS)",
    description: "Fundamentos historicos, legais e organizacionais do SUS",
    references: ["Lei 8.080/1990", "Lei 8.142/1990", "Constituicao Federal arts. 196 a 200"],
    mindMapNodes: [
      n("sus-root", "SUS", [
        n("sus-hist", "Historico", [
          n("sus-hist-reforma", "Reforma Sanitaria"),
          n("sus-hist-8cns", "8a Conferencia Nacional de Saude"),
        ]),
        n("sus-leis", "Base Legal", [
          n("sus-leis-8080", "Lei 8.080/90"),
          n("sus-leis-8142", "Lei 8.142/90"),
          n("sus-leis-const", "Constituicao Federal"),
        ]),
        n("sus-princ", "Principios e Diretrizes", [
          n("sus-princ-univ", "Universalidade"),
          n("sus-princ-int", "Integralidade"),
          n("sus-princ-eq", "Equidade"),
          n("sus-princ-desc", "Descentralizacao"),
          n("sus-princ-reg", "Regionalizacao e hierarquizacao"),
        ]),
        n("sus-gestao", "Organizacao e Gestao", [
          n("sus-gestao-inst", "MS, SES e SMS"),
          n("sus-gestao-fin", "FNS, FES e FMS"),
          n("sus-gestao-controle", "Conselhos e Conferencias"),
        ]),
      ]),
    ],
    tips: [
      "Universalidade: todos tem direito de acesso aos servicos de saude.",
      "Integralidade: cuidado deve abranger promocao, prevencao, tratamento e reabilitacao.",
      "Equidade: tratar desigualmente os desiguais para reduzir iniquidades em saude.",
      "Descentralizacao: gestao compartilhada entre uniao, estados e municipios.",
      "Controle social: conselhos de saude atuam de forma permanente e deliberativa.",
      "Lei 8.142/90: define participacao da comunidade e transferencia intergovernamental de recursos.",
    ],
  }),
  enrichTopic({
    id: "esf",
    name: "Estrategia Saude da Familia (ESF)",
    description: "Organizacao da atencao primaria orientada por territorio, equipe multiprofissional e adscricao",
    references: ["PNAB", "Portaria de Consolidacao GM/MS n 2/2017"],
    mindMapNodes: [
      n("esf-root", "ESF", [
        n("esf-pnab", "PNAB", [
          n("esf-pnab-princ", "Principios da APS"),
          n("esf-pnab-acoes", "Acoes programaticas"),
        ]),
        n("esf-equipe", "Equipe Minima", [
          n("esf-equipe-med", "Medico"),
          n("esf-equipe-enf", "Enfermeiro"),
          n("esf-equipe-tec", "Tecnico de enfermagem"),
          n("esf-equipe-acs", "ACS"),
        ]),
        n("esf-territ", "Territorio e Processo de Trabalho", [
          n("esf-territ-ads", "Territorio adscrito"),
          n("esf-territ-visita", "Visita domiciliar"),
          n("esf-territ-esus", "e-SUS APS"),
          n("esf-territ-nasf", "Apoio multiprofissional"),
        ]),
      ]),
    ],
    tips: [
      "Territorio adscrito: cada equipe responde por populacao definida no territorio.",
      "Equipe minima: medico, enfermeiro, tecnico de enfermagem e ACS.",
      "Atribuicoes do enfermeiro: consulta, gestao da equipe e educacao em saude.",
      "e-SUS APS: registro qualificado melhora acompanhamento de indicadores.",
    ],
  }),
  enrichTopic({
    id: "etica-enfermagem",
    name: "Etica, Deontologia e Bioetica em Enfermagem",
    description: "Normas eticas e legais para o exercicio profissional de enfermagem",
    references: ["Codigo de Etica dos Profissionais de Enfermagem", "Lei 7.498/1986", "Decreto 94.406/1987"],
    mindMapNodes: [
      n("ete-root", "Etica em Enfermagem", [
        n("ete-codigo", "Codigo de Etica COFEN", [
          n("ete-codigo-dir", "Direitos"),
          n("ete-codigo-dev", "Deveres"),
          n("ete-codigo-proib", "Proibicoes"),
        ]),
        n("ete-legal", "Legislacao Profissional", [
          n("ete-legal-7498", "Lei 7.498/86"),
          n("ete-legal-94406", "Decreto 94.406/87"),
        ]),
        n("ete-bio", "Bioetica", [
          n("ete-bio-auto", "Autonomia"),
          n("ete-bio-ben", "Beneficencia"),
          n("ete-bio-naomal", "Nao maleficencia"),
          n("ete-bio-just", "Justica"),
        ]),
      ]),
    ],
    tips: [
      "Autonomia: paciente participa das decisoes com consentimento esclarecido.",
      "Beneficencia: conduta deve buscar o melhor interesse clinico do paciente.",
      "Sigilo profissional: quebra so ocorre nos casos previstos em lei.",
      "Lei 7.498/86: define atividades privativas do enfermeiro no exercicio profissional.",
    ],
  }),
  enrichTopic({
    id: "semiologia",
    name: "Semiologia e Semiotecnica",
    description: "Processo de enfermagem, exame fisico e procedimentos basicos assistenciais",
    references: ["Semiologia e Semiotecnica em Enfermagem - Posso", "NANDA-I"],
    mindMapNodes: [
      n("semi-root", "Semiologia e SAE", [
        n("semi-sae", "Processo de Enfermagem", [
          n("semi-sae-hist", "Historico"),
          n("semi-sae-dx", "Diagnostico"),
          n("semi-sae-plan", "Planejamento"),
          n("semi-sae-impl", "Implementacao"),
          n("semi-sae-evol", "Evolucao"),
        ]),
        n("semi-exame", "Exame Fisico", [
          n("semi-exame-ins", "Inspecao"),
          n("semi-exame-pal", "Palpacao"),
          n("semi-exame-perc", "Percussao"),
          n("semi-exame-ausc", "Ausculta"),
        ]),
        n("semi-proc", "Sinais Vitais e Procedimentos", [
          n("semi-proc-sv", "Pressao, pulso, FR, temperatura"),
          n("semi-proc-cur", "Curativos"),
          n("semi-proc-med", "Administracao de medicamentos"),
        ]),
      ]),
    ],
    tips: [
      "SAE: coleta de dados bem feita orienta diagnostico e plano de cuidados.",
      "Inspecao: primeira etapa do exame fisico, antes de tocar o paciente.",
      "Sinais vitais: alteracao simultanea exige correlacao clinica imediata.",
      "Evolucao de enfermagem: registro objetivo e cronologico com resposta do paciente.",
    ],
  }),
  enrichTopic({
    id: "clinica-enfermagem",
    name: "Clinica de Enfermagem no Ciclo Vital",
    description: "Assistencia de enfermagem ao recem-nascido, crianca, adolescente, adulto, mulher e idoso",
    references: ["Brunner & Suddarth", "Manual de Atenao a Saude da Mulher - MS"],
    mindMapNodes: [
      n("clin-root", "Clinica no Ciclo Vital", [
        n("clin-fases", "Fases da Vida", [
          n("clin-fases-rn", "Recem-nascido"),
          n("clin-fases-cri", "Crianca"),
          n("clin-fases-ado", "Adolescente"),
          n("clin-fases-adult", "Adulto"),
          n("clin-fases-idoso", "Idoso"),
        ]),
        n("clin-mulher", "Saude da Mulher", [
          n("clin-mulher-prenatal", "Pre-natal"),
          n("clin-mulher-parto", "Parto e puerperio"),
        ]),
        n("clin-risco", "Riscos e Cuidados Prioritarios", [
          n("clin-risco-quedas", "Prevencao de quedas"),
          n("clin-risco-polif", "Polifarmacia"),
          n("clin-risco-seg", "Seguranca do paciente"),
        ]),
      ]),
    ],
    tips: [
      "Apgar: avaliacao no primeiro e quinto minuto orienta conduta neonatal.",
      "Puerperio: monitorar sangramento, dor e sinais de infeccao.",
      "Idoso fragil: quedas e polifarmacia sao temas recorrentes em prova.",
      "Ciclo vital: planejamento do cuidado muda conforme etapa de desenvolvimento.",
    ],
  }),
  enrichTopic({
    id: "doencas-transmissiveis",
    name: "Doencas Transmissiveis",
    description: "Cadeia de transmissao, notificacao compulsoria e protocolos de controle",
    references: ["Guia de Vigilancia em Saude - MS", "Manual de Tuberculose - MS"],
    mindMapNodes: [
      n("dot-root", "Doencas Transmissiveis", [
        n("dot-trans", "Transmissao", [
          n("dot-trans-direta", "Direta"),
          n("dot-trans-indireta", "Indireta"),
          n("dot-trans-vet", "Vetorial"),
        ]),
        n("dot-not", "Notificacao Compulsoria", [
          n("dot-not-imed", "Imediata"),
          n("dot-not-semanal", "Semanal"),
        ]),
        n("dot-prot", "Doencas Prioritarias", [
          n("dot-prot-tb", "Tuberculose"),
          n("dot-prot-arb", "Dengue, Zika e Chikungunya"),
          n("dot-prot-hiv", "HIV/AIDS"),
          n("dot-prot-hep", "Hepatites virais"),
        ]),
      ]),
    ],
    tips: [
      "Notificacao compulsoria: prazo depende do potencial de disseminacao da doenca.",
      "Tuberculose: tratamento supervisionado aumenta adesao e cura.",
      "Arboviroses: controle vetorial e eliminacao de criadouros sao medidas-chave.",
      "Hepatites virais: diferencie vias de transmissao para orientar prevencao.",
    ],
  }),
  enrichTopic({
    id: "urgencia-emergencia",
    name: "Urgencia e Emergencia",
    description: "Atendimento inicial, suporte basico de vida e manejo de quadros agudos",
    references: ["Protocolos SAMU", "Diretrizes AHA BLS"],
    mindMapNodes: [
      n("urg-root", "Urgencia e Emergencia", [
        n("urg-rede", "Rede e Fluxo", [
          n("urg-rede-samu", "SAMU 192"),
          n("urg-rede-class", "Classificacao de risco"),
        ]),
        n("urg-sbv", "Suporte Basico de Vida", [
          n("urg-sbv-rcp", "RCP adulto e pediatrico"),
          n("urg-sbv-pcr", "Parada cardiorrespiratoria"),
        ]),
        n("urg-agudos", "Quadros Agudos", [
          n("urg-agudos-choque", "Choque"),
          n("urg-agudos-trauma", "Trauma"),
          n("urg-agudos-queim", "Queimaduras"),
          n("urg-agudos-intox", "Intoxicacoes"),
        ]),
      ]),
    ],
    tips: [
      "RCP de qualidade: compressao eficaz e minimizacao de interrupcoes salvam vidas.",
      "Classificacao de risco: prioridade clinica nao segue ordem de chegada.",
      "Choque: reconhecer sinais de hipoperfusao antecipa desfechos graves.",
      "Intoxicacao: estabilizar via aerea e identificar agente sao medidas iniciais.",
    ],
  }),
  enrichTopic({
    id: "saude-mental",
    name: "Saude Mental e Psiquiatria",
    description: "Rede de atencao psicossocial, reforma psiquiatrica e manejo de transtornos prevalentes",
    references: ["Lei 10.216/2001", "Cadernos de Saude Mental - MS"],
    mindMapNodes: [
      n("sm-root", "Saude Mental", [
        n("sm-reforma", "Reforma Psiquiatrica", [
          n("sm-reforma-lei", "Lei 10.216/01"),
          n("sm-reforma-direitos", "Direitos da pessoa em sofrimento psiquico"),
        ]),
        n("sm-rede", "Rede de Cuidado", [
          n("sm-rede-caps", "CAPS"),
          n("sm-rede-aps", "APS e matriciamento"),
          n("sm-rede-urg", "Crise psiquiatrica"),
        ]),
        n("sm-transt", "Transtornos e Tratamento", [
          n("sm-transt-ans", "Ansiedade e depressao"),
          n("sm-transt-esq", "Esquizofrenia"),
          n("sm-transt-farm", "Psicofarmacos e seguranca"),
        ]),
      ]),
    ],
    tips: [
      "Lei 10.216/01: prioriza cuidado em liberdade e direitos do usuario.",
      "CAPS: servico strategico para casos moderados e graves em territorio.",
      "Crise psiquiatrica: acolhimento e avaliacao de risco sao prioridades iniciais.",
      "Psicofarmacos: monitore efeitos adversos e adesao terapeutica.",
    ],
  }),
  enrichTopic({
    id: "administracao-saude",
    name: "Administracao e Gerenciamento em Saude",
    description: "Planejamento, lideranca e organizacao do trabalho de enfermagem",
    references: ["Administracao em Enfermagem - Kurcgant"],
    mindMapNodes: [
      n("admss-root", "Gestao em Enfermagem", [
        n("admss-func", "Funcoes Administrativas", [
          n("admss-func-plan", "Planejar"),
          n("admss-func-org", "Organizar"),
          n("admss-func-dir", "Dirigir"),
          n("admss-func-ctrl", "Controlar"),
        ]),
        n("admss-pessoas", "Gestao de Pessoas", [
          n("admss-pessoas-lid", "Lideranca"),
          n("admss-pessoas-dim", "Dimensionamento"),
          n("admss-pessoas-esc", "Escalas"),
        ]),
        n("admss-qual", "Qualidade e SAE", [
          n("admss-qual-ind", "Indicadores"),
          n("admss-qual-sae", "SAE como gestao do cuidado"),
        ]),
      ]),
    ],
    tips: [
      "Planejamento: metas claras e indicadores tornam a gestao mensuravel.",
      "Dimensionamento: equipe insuficiente aumenta risco assistencial.",
      "Lideranca: comunicacao assertiva melhora clima e desempenho da equipe.",
      "Indicadores: monitorar processos orienta melhoria continua.",
    ],
  }),
  enrichTopic({
    id: "biosseguranca",
    name: "Biosseguranca em Servicos de Saude",
    description: "Normas de prevencao de risco biologico, uso de EPIs e processamento de materiais",
    references: ["NR-32", "RDC ANVISA sobre CME", "Manual de Biosseguranca - MS"],
    mindMapNodes: [
      n("bio-root", "Biosseguranca", [
        n("bio-normas", "Normas e Precaucoes", [
          n("bio-normas-nr32", "NR-32"),
          n("bio-normas-padrao", "Precaucoes padrao"),
          n("bio-normas-trans", "Contato, goticula e aerosol"),
        ]),
        n("bio-epi", "EPIs", [
          n("bio-epi-tipos", "Tipos de EPI"),
          n("bio-epi-ordem", "Paramentacao e desparamentacao"),
        ]),
        n("bio-cme", "CME e Residuos", [
          n("bio-cme-ester", "Ciclos de esterilizacao"),
          n("bio-cme-pgrss", "Gerenciamento de residuos"),
        ]),
      ]),
    ],
    tips: [
      "NR-32: norma central para seguranca do trabalhador em servicos de saude.",
      "Precaucao padrao: higiene das maos e EPI adequado em todo atendimento.",
      "Paramentacao: siga ordem correta para reduzir risco de contaminacao.",
      "PGRSS: segregacao de residuos deve ocorrer no ponto de geracao.",
    ],
  }),
  enrichTopic({
    id: "imunizacao",
    name: "Programa Nacional de Imunizacao",
    description: "Calendario vacinal, rede de frio e seguranca da pratica de vacinacao",
    references: ["Manual de Normas e Procedimentos para Vacinacao - MS"],
    mindMapNodes: [
      n("imu-root", "Imunizacao", [
        n("imu-cal", "Calendario Vacinal", [
          n("imu-cal-cri", "Crianca"),
          n("imu-cal-ado", "Adolescente"),
          n("imu-cal-adult", "Adulto e idoso"),
        ]),
        n("imu-rede", "Rede de Frio", [
          n("imu-rede-temp", "Faixa de temperatura"),
          n("imu-rede-monitor", "Monitoramento"),
        ]),
        n("imu-seg", "Seguranca", [
          n("imu-seg-eapv", "EAPV"),
          n("imu-seg-contra", "Contraindicacoes"),
          n("imu-seg-tec", "Tecnica de aplicacao"),
        ]),
      ]),
    ],
    tips: [
      "Rede de frio: manter imunobiologico em faixa adequada preserva eficacia.",
      "EAPV: evento adverso deve ser registrado e investigado conforme protocolo.",
      "Contraindicacao: diferencie contraindicacao absoluta de situacao temporaria.",
      "Tecnica correta: via, dose e local aplicados definem seguranca vacinal.",
    ],
  }),
  enrichTopic({
    id: "vigilancia-saude",
    name: "Vigilancia em Saude",
    description: "Integracao entre vigilancia epidemiologica, sanitaria e ambiental",
    references: ["Guia de Vigilancia em Saude - MS", "Lei 8.080/1990"],
    mindMapNodes: [
      n("vig-root", "Vigilancia em Saude", [
        n("vig-epi", "Vigilancia Epidemiologica", [
          n("vig-epi-not", "Notificacao"),
          n("vig-epi-invest", "Investigacao"),
          n("vig-epi-controle", "Controle de surtos"),
        ]),
        n("vig-san", "Vigilancia Sanitaria", [
          n("vig-san-prod", "Produtos e servicos"),
          n("vig-san-risco", "Risco sanitario"),
        ]),
        n("vig-cadeia", "Cadeia Epidemiologica", [
          n("vig-cadeia-agente", "Agente"),
          n("vig-cadeia-hosp", "Hospedeiro"),
          n("vig-cadeia-amb", "Ambiente"),
        ]),
      ]),
    ],
    tips: [
      "Notificacao: dado oportuno permite resposta rapida da vigilancia.",
      "Investigacao de surto: identificar fonte e elo de transmissao e essencial.",
      "Vigilancia sanitaria: atua sobre risco em produtos, servicos e ambientes.",
      "Cadeia epidemiologica: interromper um elo reduz propagacao da doenca.",
    ],
  }),
  enrichTopic({
    id: "atencao-basica",
    name: "Atencao Basica a Saude",
    description: "APS como ordenadora da rede de atencao e coordenadora do cuidado longitudinal",
    references: ["PNAB", "Portarias de Consolidacao GM/MS"],
    mindMapNodes: [
      n("ab-root", "Atencao Basica", [
        n("ab-modelos", "Modelos de Atencao", [
          n("ab-modelos-trad", "Modelo tradicional"),
          n("ab-modelos-esf", "Modelo ESF"),
        ]),
        n("ab-atrib", "Atributos da APS", [
          n("ab-atrib-acesso", "Acesso"),
          n("ab-atrib-vinc", "Vinculo"),
          n("ab-atrib-long", "Longitudinalidade"),
          n("ab-atrib-coord", "Coordenacao do cuidado"),
        ]),
        n("ab-rede", "Ordenacao da Rede", [
          n("ab-rede-refer", "Referencia e contra-referencia"),
          n("ab-rede-linha", "Linhas de cuidado"),
        ]),
      ]),
    ],
    tips: [
      "APS ordenadora: coordena fluxos da rede e evita fragmentacao do cuidado.",
      "Acesso: porta de entrada preferencial do SUS para a populacao.",
      "Longitudinalidade: seguimento continuado melhora desfechos clinicos.",
      "Vinculo: relacao usuario-equipe fortalece adesao e resolutividade.",
    ],
  }),
];

const enfermagemEsfSpecificTopics: Topic[] = [
  enrichTopic({
    id: "psf",
    name: "Programa/Estrategia Saude da Familia",
    description: "Evolucao historica da ESF, implantacao territorial e monitoramento por indicadores",
    references: ["PNAB", "e-Gestor AB"],
    mindMapNodes: [
      n("psf-root", "PSF/ESF", [
        n("psf-hist", "Historia e Implantacao", [
          n("psf-hist-origem", "Origem do programa"),
          n("psf-hist-exp", "Expansao nacional"),
          n("psf-hist-mg", "Implantacao em MG"),
        ]),
        n("psf-processo", "Processo de Trabalho", [
          n("psf-processo-cad", "Cadastro de familias"),
          n("psf-processo-visita", "Visita domiciliar"),
          n("psf-processo-vinculo", "Territorializacao"),
        ]),
        n("psf-avaliacao", "Indicadores e Politicas", [
          n("psf-avaliacao-ind", "Indicadores ESF"),
          n("psf-avaliacao-prev", "Monitoramento e avaliacao"),
          n("psf-avaliacao-mm", "Interfaces com Mais Medicos"),
        ]),
      ]),
    ],
    tips: [
      "Territorializacao: conhecimento do territorio orienta planejamento local.",
      "Cadastro familiar: base para estratificacao de risco e programacao de acoes.",
      "Visita domiciliar: instrumento-chave para continuidade do cuidado.",
      "Indicadores ESF: acompanham cobertura, acesso e qualidade da APS.",
    ],
  }),
  enrichTopic({
    id: "vigilancia-saude-esf",
    name: "Vigilancia em Saude na ESF",
    description: "Perfil epidemiologico local, notificacao e integracao entre vigilancia e APS",
    references: ["Guia de Vigilancia em Saude - MS", "Protocolos SES-MG"],
    mindMapNodes: [
      n("vesf-root", "Vigilancia na ESF", [
        n("vesf-not", "Notificacao Compulsoria", [
          n("vesf-not-imed", "Imediata"),
          n("vesf-not-semanal", "Semanal"),
          n("vesf-not-fluxo", "Fluxo local de notificacao"),
        ]),
        n("vesf-perfil", "Perfil Epidemiologico", [
          n("vesf-perfil-endem", "Endemias de MG"),
          n("vesf-perfil-agravos", "Agravos prioritarios"),
        ]),
        n("vesf-integracao", "Integracao da Rede", [
          n("vesf-integracao-pcih", "PCIH e seguranca"),
          n("vesf-integracao-aps", "Acoes no territorio"),
        ]),
      ]),
    ],
    tips: [
      "Notificacao imediata: agravos com alto risco exigem comunicacao em ate 24 horas.",
      "Notificacao semanal: segue calendario regular para vigilancia continua.",
      "Perfil epidemiologico: direciona acao preventiva e educativa da equipe ESF.",
      "Integracao vigilancia-APS: melhora resposta a surtos e agravos recorrentes.",
    ],
  }),
  enrichTopic({
    id: "saude-coletiva",
    name: "Saude Coletiva e Epidemiologia",
    description: "Indicadores epidemiologicos, determinantes sociais e sistemas de informacao em saude",
    references: ["Epidemiologia e Saude - Rouquayrol", "DATASUS"],
    mindMapNodes: [
      n("saco-root", "Saude Coletiva", [
        n("saco-epi", "Medidas Epidemiologicas", [
          n("saco-epi-inc", "Incidencia"),
          n("saco-epi-prev", "Prevalencia"),
          n("saco-epi-mort", "Mortalidade e letalidade"),
        ]),
        n("saco-det", "Determinantes Sociais", [
          n("saco-det-renda", "Renda e escolaridade"),
          n("saco-det-territ", "Territorio e acesso"),
        ]),
        n("saco-sis", "Sistemas de Informacao", [
          n("saco-sis-sinan", "SINAN"),
          n("saco-sis-sim", "SIM"),
          n("saco-sis-sinasc", "SINASC"),
        ]),
      ]),
    ],
    tips: [
      "Incidencia: mede casos novos em periodo definido.",
      "Prevalencia: representa total de casos existentes em determinada populacao.",
      "Letalidade: expressa gravidade da doenca entre os casos diagnosticados.",
      "SINAN, SIM e SINASC: bases essenciais para vigilancia e planejamento local.",
    ],
  }),
];

const auxiliarAdministrativoSpecificTopics: Topic[] = [
  enrichTopic({
    id: "protocolo",
    name: "Protocolo e Atendimento ao Publico",
    description: "Atendimento presencial e telefonico com foco em comunicacao institucional e postura profissional",
    references: ["Manual de Atendimento ao Cidadao", "Boas praticas de Ouvidoria"],
    mindMapNodes: [
      n("prot-root", "Protocolo e Atendimento", [
        n("prot-fases", "Fases do Atendimento", [
          n("prot-fases-acolh", "Acolhimento"),
          n("prot-fases-escuta", "Escuta ativa"),
          n("prot-fases-solucao", "Encaminhamento"),
        ]),
        n("prot-com", "Comunicacao", [
          n("prot-com-verbal", "Verbal e nao verbal"),
          n("prot-com-telefone", "Atendimento telefonico"),
        ]),
        n("prot-postura", "Postura Profissional", [
          n("prot-postura-etica", "Empatia e urbanidade"),
          n("prot-postura-conflito", "Mediacao de conflitos"),
        ]),
      ]),
    ],
    tips: [
      "Escuta ativa: compreender demanda do cidadao reduz retrabalho no atendimento.",
      "Comunicacao clara: linguagem simples melhora entendimento de orientacoes.",
      "Atendimento telefonico: registrar recado completo evita perda de informacao.",
      "Postura profissional: cordialidade e imparcialidade reforcam imagem institucional.",
    ],
  }),
  enrichTopic({
    id: "correspondencia",
    name: "Correspondencia e Redacao Oficial",
    description: "Padroes formais de documentos administrativos conforme manual oficial",
    references: ["Manual de Redacao da Presidencia da Republica"],
    mindMapNodes: [
      n("corr-root", "Redacao Oficial", [
        n("corr-doc", "Documentos", [
          n("corr-doc-oficio", "Oficio padrao"),
          n("corr-doc-memo", "Memorando e circular"),
          n("corr-doc-email", "E-mail institucional"),
          n("corr-doc-ata", "Ata e requerimento"),
        ]),
        n("corr-forma", "Formas de Tratamento", [
          n("corr-forma-vex", "Vossa Excelencia"),
          n("corr-forma-vsen", "Vossa Senhoria"),
        ]),
        n("corr-qual", "Qualidade Textual", [
          n("corr-qual-clar", "Clareza"),
          n("corr-qual-obj", "Objetividade"),
          n("corr-qual-imp", "Impessoalidade"),
        ]),
      ]),
    ],
    tips: [
      "Oficio padrao: exige cabecalho, assunto, texto objetivo e fecho institucional.",
      "Forma de tratamento: escolha depende do cargo da autoridade destinataria.",
      "Memorando: comunicacao interna entre unidades administrativas.",
      "Ata: registro fiel e cronologico das deliberacoes de reuniao.",
      "E-mail oficial: mantenha linguagem formal e identificacao institucional.",
    ],
  }),
  enrichTopic({
    id: "atos-administrativos",
    name: "Atos Administrativos e Principios da Administracao",
    description: "Conceito, atributos, classificacao e regime juridico dos atos administrativos",
    references: ["Direito Administrativo - Maria Sylvia Di Pietro", "Constituicao Federal art. 37"],
    mindMapNodes: [
      n("ato-root", "Atos Administrativos", [
        n("ato-conc", "Conceito e Elementos", [
          n("ato-conc-comp", "Competencia, finalidade e forma"),
          n("ato-conc-mot", "Motivo e objeto"),
        ]),
        n("ato-atrib", "Atributos", [
          n("ato-atrib-pres", "Presuncao de legitimidade"),
          n("ato-atrib-imp", "Imperatividade"),
          n("ato-atrib-auto", "Autoexecutoriedade"),
        ]),
        n("ato-class", "Classificacao e Principios", [
          n("ato-class-tipos", "Normativos, ordinatorios, negociais, enunciativos, punitivos"),
          n("ato-class-limpe", "Principios LIMPE"),
        ]),
      ]),
    ],
    tips: [
      "Presuncao de legitimidade: ato administrativo nasce valido ate prova em contrario.",
      "Imperatividade: administracao pode impor obrigacoes independentemente de concordancia.",
      "Autoexecutoriedade: alguns atos podem ser executados sem ordem judicial previa.",
      "Classificacao dos atos: identifique finalidade para diferenciar tipo do ato.",
      "LIMPE: principios constitucionais que orientam toda atividade administrativa.",
    ],
  }),
  enrichTopic({
    id: "arquivo",
    name: "Arquivo e Gestao Documental",
    description: "Metodos de arquivamento e ciclo de vida dos documentos",
    references: ["CONARQ", "Arquivologia para Concursos - Renato Valentini"],
    mindMapNodes: [
      n("arq-root", "Arquivo", [
        n("arq-met", "Metodos de Arquivamento", [
          n("arq-met-alf", "Alfabetico"),
          n("arq-met-num", "Numerico"),
          n("arq-met-geo", "Geografico"),
          n("arq-met-ideo", "Ideografico"),
        ]),
        n("arq-ciclo", "Ciclo de Vida", [
          n("arq-ciclo-corr", "Arquivo corrente"),
          n("arq-ciclo-int", "Intermediario"),
          n("arq-ciclo-perm", "Permanente"),
        ]),
        n("arq-digital", "Gestao Eletronica", [
          n("arq-digital-ged", "GED"),
          n("arq-digital-segur", "Seguranca e rastreabilidade"),
        ]),
      ]),
    ],
    tips: [
      "Arquivo corrente: documentos de uso frequente no setor.",
      "Arquivo intermediario: guarda temporaria ate destinacao final.",
      "Arquivo permanente: valor historico, probatorio ou informativo.",
      "GED: facilita busca, controle de versao e preservacao digital.",
    ],
  }),
  enrichTopic({
    id: "rotinas",
    name: "Rotinas Administrativas",
    description: "Processos de compras, controle interno e rotinas de pessoal",
    references: ["Lei 14.133/2021", "Manuais de rotina administrativa municipal"],
    mindMapNodes: [
      n("rot-root", "Rotinas Administrativas", [
        n("rot-comp", "Compras e Contratacoes", [
          n("rot-comp-lei", "Nocoes da Lei 14.133/21"),
          n("rot-comp-fluxo", "Fluxo de solicitacao"),
        ]),
        n("rot-estoque", "Controle Interno", [
          n("rot-estoque-mat", "Controle de estoque"),
          n("rot-estoque-prot", "Protocolo de entrada e saida"),
        ]),
        n("rot-rh", "Rotinas de Pessoal", [
          n("rot-rh-ponto", "Folha de ponto"),
          n("rot-rh-ferias", "Ferias e licencas"),
        ]),
      ]),
    ],
    tips: [
      "Lei 14.133/21: planejar contratacao e documentar etapas e obrigatorio.",
      "Controle de estoque: entradas e saidas devem ser registradas em tempo real.",
      "Protocolo: documento sem numero de protocolo perde rastreabilidade.",
      "Folha de ponto: inconsistencias impactam direitos e deveres do servidor.",
    ],
  }),
  enrichTopic({
    id: "equipamentos",
    name: "Informatica e Equipamentos de Escritorio",
    description: "Uso funcional de ferramentas digitais e equipamentos administrativos",
    references: ["Cartilha de Seguranca da Informacao - Gov.br"],
    mindMapNodes: [
      n("eqp-root", "Equipamentos e Informatica", [
        n("eqp-soft", "Software", [
          n("eqp-soft-win", "Windows e navegadores"),
          n("eqp-soft-office", "Word e Excel"),
        ]),
        n("eqp-hard", "Equipamentos", [
          n("eqp-hard-impressora", "Impressora"),
          n("eqp-hard-scanner", "Scanner"),
          n("eqp-hard-copiadora", "Copiadora"),
        ]),
        n("eqp-seg", "Seguranca da Informacao", [
          n("eqp-seg-senha", "Boas praticas de senha"),
          n("eqp-seg-phish", "Prevencao a phishing"),
        ]),
      ]),
    ],
    tips: [
      "Word e Excel: atalhos e formatacao padrao aumentam produtividade administrativa.",
      "Impressora e scanner: manutencao preventiva reduz interrupcoes no expediente.",
      "Senha forte: combine letras, numeros e simbolos com troca periodica.",
      "Phishing: desconfie de links e anexos de remetentes desconhecidos.",
    ],
  }),
  enrichTopic({
    id: "etica-admin",
    name: "Etica do Servidor Publico",
    description: "Conduta funcional, sigilo e responsabilidade no servico publico",
    references: ["Decreto 1.171/1994", "Lei 8.429/1992"],
    mindMapNodes: [
      n("etad-root", "Etica Administrativa", [
        n("etad-codigo", "Codigo de Etica", [
          n("etad-codigo-princ", "Valores e deveres"),
          n("etad-codigo-cond", "Condutas vedadas"),
        ]),
        n("etad-sigilo", "Sigilo Profissional", [
          n("etad-sigilo-protecao", "Protecao de dados"),
          n("etad-sigilo-limites", "Limites legais"),
        ]),
        n("etad-improb", "Improbidade", [
          n("etad-improb-conceito", "Conceito"),
          n("etad-improb-sancoes", "Sancoes"),
        ]),
      ]),
    ],
    tips: [
      "Decreto 1.171/94: orienta comportamento etico do servidor civil federal.",
      "Sigilo funcional: informacoes internas nao podem ser divulgadas sem autorizacao.",
      "Improbidade administrativa: pode gerar perda de funcao e ressarcimento ao erario.",
    ],
  }),
];

const monitorApoioSpecificTopics: Topic[] = [
  enrichTopic({
    id: "ldb",
    name: "Lei de Diretrizes e Bases da Educacao (LDB)",
    description: "Fundamentos da educacao nacional com foco na educacao infantil e ensino fundamental",
    references: ["Lei 9.394/1996"],
    mindMapNodes: [
      n("ldb-root", "LDB", [
        n("ldb-princ", "Principios e Fins", [
          n("ldb-princ-art1", "Artigos 1 a 3"),
          n("ldb-princ-lib", "Liberdade e pluralismo"),
        ]),
        n("ldb-direito", "Direito a Educacao", [
          n("ldb-direito-art4", "Artigos 4 a 7"),
          n("ldb-direito-dever", "Dever do Estado e familia"),
        ]),
        n("ldb-organ", "Organizacao da Educacao", [
          n("ldb-organ-infantil", "Educacao infantil art. 29 a 31"),
          n("ldb-organ-fund", "Ensino fundamental"),
          n("ldb-organ-prof", "Profissionais da educacao"),
          n("ldb-organ-fin", "Recursos financeiros"),
        ]),
      ]),
    ],
    tips: [
      "Artigos 29 a 31: definem finalidades e organizacao da educacao infantil.",
      "Direito a educacao: dever compartilhado entre Estado e familia.",
      "Gestao democratica: principio orientador da educacao publica.",
      "Profissionais da educacao: requisitos de formacao previstos em lei.",
      "Recursos financeiros: vinculacao constitucional sustenta politicas educacionais.",
      "Educacao infantil: creche atende 0 a 3 anos e pre-escola 4 a 5 anos.",
    ],
  }),
  enrichTopic({
    id: "psicomotricidade",
    name: "Psicomotricidade",
    description: "Desenvolvimento psicomotor e sua relacao com aprendizagem na educacao infantil",
    references: ["Psicomotricidade - Le Boulch"],
    mindMapNodes: [
      n("psi-root", "Psicomotricidade", [
        n("psi-conceito", "Conceito e Bases", [
          n("psi-conceito-int", "Integra corpo e mente"),
          n("psi-conceito-apren", "Impacto na aprendizagem"),
        ]),
        n("psi-elementos", "Elementos Psicomotores", [
          n("psi-elementos-ton", "Tonicidade e equilibrio"),
          n("psi-elementos-lat", "Lateralidade"),
          n("psi-elementos-esp", "Estruturacao espaco-temporal"),
          n("psi-elementos-coord", "Coordenacao global e fina"),
        ]),
        n("psi-desenvolv", "Faixas Etarias e Disfuncoes", [
          n("psi-desenvolv-marcos", "Marcos de desenvolvimento"),
          n("psi-desenvolv-disf", "Disfuncoes psicomotoras"),
        ]),
      ]),
    ],
    tips: [
      "Lateralidade: consolidacao adequada favorece escrita e orientacao espacial.",
      "Coordenacao motora fina: essencial para recorte, escrita e manipulacao.",
      "Estruturacao espaco-temporal: ajuda organizacao de rotinas e sequencias.",
      "Equilibrio: alteracoes podem indicar necessidade de intervencao precoce.",
    ],
  }),
  enrichTopic({
    id: "ludico",
    name: "Ludico e Brincar",
    description: "Teorias do brincar e uso pedagogico de atividades ludicas",
    references: ["Kishimoto", "Piaget", "Vygotsky", "Wallon"],
    mindMapNodes: [
      n("lud-root", "Ludico", [
        n("lud-teorias", "Teorias do Jogo", [
          n("lud-teorias-piaget", "Piaget"),
          n("lud-teorias-vyg", "Vygotsky"),
          n("lud-teorias-wallon", "Wallon"),
        ]),
        n("lud-pratica", "Pratica Pedagogica", [
          n("lud-pratica-tipos", "Tipos de brincadeiras"),
          n("lud-pratica-brinq", "Brinquedo educativo"),
          n("lud-pratica-espacos", "Espacos ludicos"),
        ]),
        n("lud-monitor", "Papel do Monitor", [
          n("lud-monitor-mediacao", "Mediacao e inclusao"),
          n("lud-monitor-segur", "Seguranca no brincar"),
        ]),
      ]),
    ],
    tips: [
      "Piaget: brincar acompanha estagios de desenvolvimento cognitivo.",
      "Vygotsky: interacao social no brincar amplia aprendizagem.",
      "Brinquedo educativo: deve ser adequado a faixa etaria e objetivo pedagico.",
      "Mediacao do monitor: orienta regras, cooperacao e resolucao de conflitos.",
    ],
  }),
  enrichTopic({
    id: "organizacao-trabalho",
    name: "Organizacao do Trabalho na Educacao Infantil",
    description: "Planejamento de rotina, espacos e documentacao pedagogica",
    references: ["BNCC", "Diretrizes Curriculares da Educacao Infantil"],
    mindMapNodes: [
      n("orgt-root", "Organizacao do Trabalho", [
        n("orgt-rotina", "Rotina", [
          n("orgt-rotina-acolh", "Acolhimento"),
          n("orgt-rotina-ativ", "Atividades"),
          n("orgt-rotina-hig", "Higiene e alimentacao"),
        ]),
        n("orgt-espaco", "Espaco Fisico", [
          n("orgt-espaco-setores", "Setorizacao"),
          n("orgt-espaco-segur", "Seguranca"),
        ]),
        n("orgt-planej", "Planejamento e Registro", [
          n("orgt-planej-doc", "Documentacao pedagogica"),
          n("orgt-planej-avali", "Acompanhamento do desenvolvimento"),
        ]),
      ]),
    ],
    tips: [
      "Rotina previsivel: traz seguranca emocional para criancas pequenas.",
      "Espaco pedagogico: organizacao influencia autonomia e exploracao.",
      "Planejamento: alinhe objetivos, materiais e tempo de cada atividade.",
      "Documentacao: registrar observacoes sustenta intervencao pedagogica.",
    ],
  }),
  enrichTopic({
    id: "cuidados-crianca",
    name: "Cuidados Basicos com a Crianca",
    description: "Higiene, seguranca, prevencao de acidentes e primeiros socorros basicos",
    references: ["Cartilha de Primeiros Socorros - MS", "SBP"],
    mindMapNodes: [
      n("cuid-root", "Cuidados com a Crianca", [
        n("cuid-hig", "Higiene", [
          n("cuid-hig-banho", "Banho e troca de fraldas"),
          n("cuid-hig-oral", "Escovacao"),
        ]),
        n("cuid-prev", "Prevencao de Acidentes", [
          n("cuid-prev-amb", "Seguranca ambiental"),
          n("cuid-prev-superv", "Supervisao constante"),
        ]),
        n("cuid-ps", "Primeiros Socorros", [
          n("cuid-ps-eng", "Engasgo"),
          n("cuid-ps-conv", "Convulsao"),
          n("cuid-ps-desm", "Desmaio e queda"),
        ]),
      ]),
    ],
    tips: [
      "Engasgo: acione protocolo de desobstrucao adequado a faixa etaria.",
      "Convulsao: proteger a crianca sem conter movimentos e monitorar tempo.",
      "Prevencao de quedas: organizar espaco e remover riscos visiveis.",
      "Higiene oral: rotina diaria previne caries e infeccoes.",
    ],
  }),
  enrichTopic({
    id: "nutricao-crianca",
    name: "Nutricao Infantil",
    description: "Alimentacao saudavel, amamentacao e prevencao de agravos nutricionais",
    references: ["Guia Alimentar para a Populacao Brasileira", "Ministerio da Saude"],
    mindMapNodes: [
      n("nut-root", "Nutricao Infantil", [
        n("nut-amam", "Amamentacao e Introducao Alimentar", [
          n("nut-amam-excl", "Aleitamento materno exclusivo"),
          n("nut-amam-comp", "Alimentacao complementar"),
        ]),
        n("nut-grupos", "Grupos Alimentares", [
          n("nut-grupos-var", "Variedade e equilibrio"),
          n("nut-grupos-ultra", "Reducao de ultraprocessados"),
        ]),
        n("nut-prev", "Prevencao", [
          n("nut-prev-obes", "Prevencao de obesidade infantil"),
          n("nut-prev-escola", "Alimentacao no ambiente escolar"),
        ]),
      ]),
    ],
    tips: [
      "Aleitamento materno: recomendado de forma exclusiva ate 6 meses.",
      "Alimentacao complementar: iniciar com consistencia e variedade adequadas.",
      "Ultraprocessados: consumo frequente aumenta risco de obesidade infantil.",
    ],
  }),
  enrichTopic({
    id: "relacao-educacao",
    name: "Relacao entre Educacao, Sociedade e Cultura",
    description: "Funcao social da escola, diversidade e inclusao no processo educativo",
    references: ["Sociologia da Educacao - Saviani", "BNCC"],
    mindMapNodes: [
      n("rele-root", "Educacao e Sociedade", [
        n("rele-funcao", "Funcao Social da Escola", [
          n("rele-funcao-cidad", "Formacao cidada"),
          n("rele-funcao-crit", "Pensamento critico"),
        ]),
        n("rele-div", "Diversidade e Inclusao", [
          n("rele-div-cultural", "Diversidade cultural"),
          n("rele-div-inclusao", "Inclusao educacional"),
        ]),
        n("rele-fam", "Relacao Familia-Escola", [
          n("rele-fam-com", "Comunicacao e parceria"),
          n("rele-fam-part", "Participacao da comunidade"),
        ]),
      ]),
    ],
    tips: [
      "Funcao social da escola: vai alem de conteudo, envolve formacao integral.",
      "Inclusao: praticas pedagogicas devem considerar diferentes necessidades.",
      "Parceria familia-escola: melhora desenvolvimento e permanencia da crianca.",
    ],
  }),
];

function cloneTopics(topics: Topic[]): Topic[] {
  return topics.map((topic) => ({
    ...topic,
    references: [...topic.references],
    keyPoints: [...(topic.keyPoints ?? [])],
    tips: [...(topic.tips ?? [])],
    mindMapNodes: topic.mindMapNodes ? cloneNodes(topic.mindMapNodes) : undefined,
  }));
}

function cloneNodes(nodes: MindMapNode[]): MindMapNode[] {
  return nodes.map((node) => ({
    id: node.id,
    label: node.label,
    children: node.children ? cloneNodes(node.children) : undefined,
  }));
}

type PositionBase = Omit<Position, "questions">;

const positionsBase: PositionBase[] = [
  {
    id: "enfermeiro-20h",
    code: "024",
    name: "Enfermeiro (20 horas)",
    level: "superior",
    workload: "20 horas semanais",
    salary: "R$ 3.550,00",
    vacancies: 9,
    requirements: "Ensino superior completo em Enfermagem + inscricao no COREN",
    subjects: [
      {
        id: "portugues-superior",
        name: "Lingua Portuguesa (Nivel Superior)",
        weight: 0.2,
        totalQuestions: 10,
        topics: cloneTopics(portuguesSuperiorTopics),
      },
      {
        id: "matematica-superior",
        name: "Matematica (Nivel Superior)",
        weight: 0.2,
        totalQuestions: 5,
        topics: cloneTopics(matematicaSuperiorTopics),
      },
      {
        id: "conhecimentos-gerais",
        name: "Conhecimentos Gerais",
        weight: 0.2,
        totalQuestions: 5,
        topics: cloneTopics(conhecimentosGeraisTopics),
      },
      {
        id: "conhecimentos-especificos-enfermeiro",
        name: "Conhecimentos Especificos - Enfermeiro 20h",
        weight: 0.3,
        totalQuestions: 20,
        topics: cloneTopics(enfermagem20hSpecificTopics),
      },
    ],
  },
  {
    id: "enfermeiro-psf-40h",
    code: "037",
    name: "Enfermeiro do ESF (40 horas)",
    level: "superior",
    workload: "40 horas semanais",
    salary: "R$ 5.229,00",
    vacancies: 5,
    requirements: "Ensino superior completo em Enfermagem + inscricao no COREN",
    subjects: [
      {
        id: "portugues-superior",
        name: "Lingua Portuguesa (Nivel Superior)",
        weight: 0.2,
        totalQuestions: 10,
        topics: cloneTopics(portuguesSuperiorTopics),
      },
      {
        id: "matematica-superior",
        name: "Matematica (Nivel Superior)",
        weight: 0.2,
        totalQuestions: 5,
        topics: cloneTopics(matematicaSuperiorTopics),
      },
      {
        id: "conhecimentos-gerais",
        name: "Conhecimentos Gerais",
        weight: 0.2,
        totalQuestions: 5,
        topics: cloneTopics(conhecimentosGeraisTopics),
      },
      {
        id: "conhecimentos-especificos-enfermeiro-esf",
        name: "Conhecimentos Especificos - Enfermeiro ESF 40h",
        weight: 0.3,
        totalQuestions: 20,
        topics: cloneTopics(enfermagemEsfSpecificTopics),
      },
    ],
  },
  {
    id: "auxiliar-administrativo",
    code: "012",
    name: "Auxiliar Administrativo",
    level: "medio",
    workload: "40 horas semanais",
    salary: "R$ 1.776,00",
    vacancies: 15,
    requirements: "Ensino medio completo",
    subjects: [
      {
        id: "portugues-medio",
        name: "Lingua Portuguesa (Nivel Medio)",
        weight: 0.2,
        totalQuestions: 10,
        topics: cloneTopics(portuguesMedioTopics),
      },
      {
        id: "matematica-medio",
        name: "Matematica (Nivel Medio)",
        weight: 0.2,
        totalQuestions: 5,
        topics: cloneTopics(matematicaMedioTopics),
      },
      {
        id: "conhecimentos-gerais-medio",
        name: "Conhecimentos Gerais",
        weight: 0.2,
        totalQuestions: 5,
        topics: cloneTopics(conhecimentosGeraisTopics),
      },
      {
        id: "conhecimentos-especificos-aux-admin",
        name: "Conhecimentos Especificos - Auxiliar Administrativo",
        weight: 0.3,
        totalQuestions: 20,
        topics: cloneTopics(auxiliarAdministrativoSpecificTopics),
      },
    ],
  },
  {
    id: "monitor-apoio",
    code: "014",
    name: "Monitor de Apoio",
    level: "medio",
    workload: "40 horas semanais",
    salary: "R$ 2.036,00",
    vacancies: 83,
    requirements: "Ensino medio completo",
    subjects: [
      {
        id: "portugues-medio",
        name: "Lingua Portuguesa (Nivel Medio)",
        weight: 0.2,
        totalQuestions: 10,
        topics: cloneTopics(portuguesMedioTopics),
      },
      {
        id: "matematica-medio",
        name: "Matematica (Nivel Medio)",
        weight: 0.2,
        totalQuestions: 5,
        topics: cloneTopics(matematicaMedioTopics),
      },
      {
        id: "conhecimentos-gerais-medio",
        name: "Conhecimentos Gerais",
        weight: 0.2,
        totalQuestions: 5,
        topics: cloneTopics(conhecimentosGeraisTopics),
      },
      {
        id: "conhecimentos-especificos-monitor",
        name: "Conhecimentos Especificos - Monitor de Apoio",
        weight: 0.3,
        totalQuestions: 20,
        topics: cloneTopics(monitorApoioSpecificTopics),
      },
    ],
  },
];

type Difficulty = Question["difficulty"];

interface FlashcardSeed {
  topicId: string;
  term: string;
  definition: string;
  difficulty: Difficulty;
}

function topicToFlashcards(topic: Topic, topicIndex: number): FlashcardSeed[] {
  const cycle: Difficulty[] = ["facil", "medio", "dificil"];
  return (topic.tips ?? []).map((tip, tipIndex) => {
    const separator = tip.indexOf(":");
    const term =
      separator >= 0 ? tip.slice(0, separator).trim() : `${topic.name} - ponto ${tipIndex + 1}`;
    const definition =
      separator >= 0 ? tip.slice(separator + 1).trim() : tip.trim();

    return {
      topicId: topic.id,
      term,
      definition,
      difficulty: cycle[(topicIndex + tipIndex) % cycle.length],
    };
  });
}

function topicsToFlashcards(topics: Topic[]): FlashcardSeed[] {
  return topics.flatMap((topic, index) => topicToFlashcards(topic, index));
}

function selectCardsByTopicDistribution(
  cards: FlashcardSeed[],
  distribution: Record<string, number>,
): FlashcardSeed[] {
  const byTopic = new Map<string, FlashcardSeed[]>();
  cards.forEach((card) => {
    const current = byTopic.get(card.topicId) ?? [];
    current.push(card);
    byTopic.set(card.topicId, current);
  });

  return Object.entries(distribution).flatMap(([topicId, count]) => {
    const options = byTopic.get(topicId) ?? [];
    if (options.length < count) {
      throw new Error(
        `Nao ha flashcards suficientes para o topico "${topicId}". Necessario: ${count}, disponivel: ${options.length}.`,
      );
    }
    return options.slice(0, count);
  });
}

function buildOptions(cards: FlashcardSeed[], currentIndex: number): {
  options: string[];
  correctAnswer: number;
} {
  const correct = cards[currentIndex].definition;
  const distractors: string[] = [];

  let pointer = currentIndex + 1;
  while (distractors.length < 3 && pointer < currentIndex + cards.length * 3) {
    const candidate = cards[pointer % cards.length]?.definition;
    if (candidate && candidate !== correct && !distractors.includes(candidate)) {
      distractors.push(candidate);
    }
    pointer += 1;
  }

  while (distractors.length < 3) {
    distractors.push("Alternativa incorreta de referencia teorica.");
  }

  const correctAnswer = currentIndex % 4;
  const options = [...distractors];
  options.splice(correctAnswer, 0, correct);

  return { options, correctAnswer };
}

function buildQuestionsFromCards(
  positionId: string,
  subjectId: string,
  cards: FlashcardSeed[],
  context: string,
): Omit<Question, "id">[] {
  return cards.map((card, index) => {
    const { options, correctAnswer } = buildOptions(cards, index);
    return {
      positionId,
      subjectId,
      topicId: card.topicId,
      text: `${context}: no contexto de "${card.term}", assinale a alternativa correta.`,
      options,
      correctAnswer,
      explanation: `A resposta correta descreve "${card.term}" como: ${card.definition}`,
      difficulty: card.difficulty,
    };
  });
}

function withQuestionIds(prefix: string, questions: Omit<Question, "id">[]): Question[] {
  return questions.map((question, index) => ({
    ...question,
    id: `${prefix}-${String(index + 1).padStart(3, "0")}`,
  }));
}

const superiorPortugueseCards = topicsToFlashcards(portuguesSuperiorTopics);
const superiorMathCards = topicsToFlashcards(matematicaSuperiorTopics);
const superiorGeneralCards = topicsToFlashcards(conhecimentosGeraisTopics);
const enf20SpecificCards = topicsToFlashcards(enfermagem20hSpecificTopics);
const enfEsfSpecificCards = topicsToFlashcards(enfermagemEsfSpecificTopics);

const medioPortugueseCards = topicsToFlashcards(portuguesMedioTopics);
const medioMathCards = topicsToFlashcards(matematicaMedioTopics);
const medioGeneralCards = topicsToFlashcards(conhecimentosGeraisTopics);
const auxSpecificCards = topicsToFlashcards(auxiliarAdministrativoSpecificTopics);
const monitorSpecificCards = topicsToFlashcards(monitorApoioSpecificTopics);

const superiorPortugueseSelection = selectCardsByTopicDistribution(superiorPortugueseCards, {
  comunicacao: 3,
  "coesao-coerencia": 3,
  semantica: 3,
  morfologia: 3,
  sintaxe: 3,
});

const superiorMathSelection = selectCardsByTopicDistribution(superiorMathCards, {
  logica: 2,
  numeros: 2,
  equacoes: 2,
  geometria: 2,
  porcentagem: 2,
});

const superiorGeneralSelection = selectCardsByTopicDistribution(superiorGeneralCards, {
  atualidades: 3,
  politica: 3,
  geografia: 2,
});

const enf20SpecificSelection = selectCardsByTopicDistribution(enf20SpecificCards, {
  sus: 6,
  esf: 4,
  biosseguranca: 3,
  "urgencia-emergencia": 3,
  imunizacao: 3,
  "etica-enfermagem": 3,
});

const enfEsfSpecificSelection = selectCardsByTopicDistribution(enfEsfSpecificCards, {
  psf: 4,
  "saude-coletiva": 4,
  "vigilancia-saude-esf": 4,
});

const medioPortugueseSelection = selectCardsByTopicDistribution(medioPortugueseCards, {
  concordancia: 4,
  regencia: 4,
  "figuras-linguagem": 4,
  interpretacao: 3,
});

const medioMathSelection = selectCardsByTopicDistribution(medioMathCards, {
  "numeros-medio": 2,
  "porcentagem-medio": 2,
  "regra-tres-medio": 2,
  graficos: 2,
  "geometria-medio": 2,
});

const medioGeneralSelection = selectCardsByTopicDistribution(medioGeneralCards, {
  atualidades: 3,
  politica: 3,
  geografia: 2,
});

const auxSpecificSelection = selectCardsByTopicDistribution(auxSpecificCards, {
  "atos-administrativos": 5,
  arquivo: 4,
  correspondencia: 4,
  rotinas: 4,
  "etica-admin": 3,
});

const monitorSpecificSelection = selectCardsByTopicDistribution(monitorSpecificCards, {
  ldb: 6,
  ludico: 3,
  psicomotricidade: 2,
  "cuidados-crianca": 4,
  "nutricao-crianca": 3,
  "relacao-educacao": 2,
});

const enf20Questions = withQuestionIds("enf-20h", [
  ...buildQuestionsFromCards(
    "enfermeiro-20h",
    "portugues-superior",
    superiorPortugueseSelection,
    "Lingua Portuguesa (nivel superior)",
  ),
  ...buildQuestionsFromCards(
    "enfermeiro-20h",
    "matematica-superior",
    superiorMathSelection,
    "Matematica (nivel superior)",
  ),
  ...buildQuestionsFromCards(
    "enfermeiro-20h",
    "conhecimentos-gerais",
    superiorGeneralSelection,
    "Conhecimentos Gerais",
  ),
  ...buildQuestionsFromCards(
    "enfermeiro-20h",
    "conhecimentos-especificos-enfermeiro",
    enf20SpecificSelection,
    "Conhecimentos Especificos - Enfermeiro 20h",
  ),
]);

const enfEsfQuestions = withQuestionIds("enf-esf", [
  ...buildQuestionsFromCards(
    "enfermeiro-psf-40h",
    "portugues-superior",
    superiorPortugueseSelection,
    "Lingua Portuguesa (nivel superior)",
  ),
  ...buildQuestionsFromCards(
    "enfermeiro-psf-40h",
    "matematica-superior",
    superiorMathSelection,
    "Matematica (nivel superior)",
  ),
  ...buildQuestionsFromCards(
    "enfermeiro-psf-40h",
    "conhecimentos-gerais",
    superiorGeneralSelection,
    "Conhecimentos Gerais",
  ),
  ...buildQuestionsFromCards(
    "enfermeiro-psf-40h",
    "conhecimentos-especificos-enfermeiro-esf",
    enfEsfSpecificSelection,
    "Conhecimentos Especificos - Enfermeiro ESF 40h",
  ),
]);

const admQuestions = withQuestionIds("adm", [
  ...buildQuestionsFromCards(
    "auxiliar-administrativo",
    "portugues-medio",
    medioPortugueseSelection,
    "Lingua Portuguesa (nivel medio)",
  ),
  ...buildQuestionsFromCards(
    "auxiliar-administrativo",
    "matematica-medio",
    medioMathSelection,
    "Matematica (nivel medio)",
  ),
  ...buildQuestionsFromCards(
    "auxiliar-administrativo",
    "conhecimentos-gerais-medio",
    medioGeneralSelection,
    "Conhecimentos Gerais",
  ),
  ...buildQuestionsFromCards(
    "auxiliar-administrativo",
    "conhecimentos-especificos-aux-admin",
    auxSpecificSelection,
    "Conhecimentos Especificos - Auxiliar Administrativo",
  ),
]);

const monitorQuestions = withQuestionIds("mon", [
  ...buildQuestionsFromCards(
    "monitor-apoio",
    "portugues-medio",
    medioPortugueseSelection,
    "Lingua Portuguesa (nivel medio)",
  ),
  ...buildQuestionsFromCards(
    "monitor-apoio",
    "matematica-medio",
    medioMathSelection,
    "Matematica (nivel medio)",
  ),
  ...buildQuestionsFromCards(
    "monitor-apoio",
    "conhecimentos-gerais-medio",
    medioGeneralSelection,
    "Conhecimentos Gerais",
  ),
  ...buildQuestionsFromCards(
    "monitor-apoio",
    "conhecimentos-especificos-monitor",
    monitorSpecificSelection,
    "Conhecimentos Especificos - Monitor de Apoio",
  ),
]);

export const sampleQuestions: Question[] = [
  ...enf20Questions,
  ...enfEsfQuestions,
  ...admQuestions,
  ...monitorQuestions,
];

export const positions: Position[] = positionsBase.map((position) => ({
  ...position,
  questions: sampleQuestions.filter((question) => question.positionId === position.id),
}));
