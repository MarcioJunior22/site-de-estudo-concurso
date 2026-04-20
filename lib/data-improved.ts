// ====================================================================
// DADOS MELHORADOS DO SISTEMA DE ESTUDO PARA CONCURSOS
// ====================================================================
// Este arquivo contém material de estudo profundo, didático e focado
// em estratégias de resolução de questões de concursos públicos
// ====================================================================

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
  studyGuide?: string;
  practicalExamples?: string[];
}

export interface MindMapNode {
  id: string;
  label: string;
  children?: MindMapNode[];
}

// ====================================================================
// PORTUGUÊS - NÍVEL SUPERIOR
// ====================================================================

const portuguesaSuperiorTopicsImproved: Topic[] = [
  {
    id: "coesao-coerencia-avancada",
    name: "Coesão e Coerência Textuais - Análise Profunda",
    description: "Mecanismos linguístico-discursivos que conectam ideias e garantem sentido global ao texto. Essencial para interpretação de textos complexos e redação administrativo.",
    references: [
      "A Coesão Textual - Ingedore Koch",
      "Texto e Coerência - Koch e Travaglia",
      "Linguística Textual - Beaugrande e Dressler"
    ],
    mindMapNodes: [
      {
        id: "coec-root",
        label: "Coesão e Coerência Textuais",
        children: [
          {
            id: "coec-coesao-ref",
            label: "Coesão Referencial",
            children: [
              {
                id: "coec-cref-proclitic",
                label: "Pronomes Anafóricos e Catafóricos"
              },
              {
                id: "coec-cref-subst",
                label: "Sinonímia e Substituição Lexical"
              },
              {
                id: "coec-cref-elipse",
                label: "Elipse (Omissão de Termos)"
              },
              {
                id: "coec-cref-repet",
                label: "Repetição Controlada"
              }
            ]
          },
          {
            id: "coec-coesao-seq",
            label: "Coesão Sequencial",
            children: [
              {
                id: "coec-cseq-conectivos",
                label: "Conectivos (Conjunções e Preposições)"
              },
              {
                id: "coec-cseq-aditivos",
                label: "Conectivos Aditivos (e, também, além disso)"
              },
              {
                id: "coec-cseq-adversat",
                label: "Conectivos Adversativos (mas, porém, contudo)"
              },
              {
                id: "coec-cseq-causais",
                label: "Conectivos Causais (porque, pois, porquanto)"
              },
              {
                id: "coec-cseq-conclus",
                label: "Conectivos Conclusivos (portanto, logo, assim)"
              },
              {
                id: "coec-cseq-temporal",
                label: "Sequenciação Temporal (antes, depois, enquanto)"
              }
            ]
          },
          {
            id: "coec-coerencia",
            label: "Coerência Textual",
            children: [
              {
                id: "coec-cor-global",
                label: "Coerência Global (Macro-estrutura)"
              },
              {
                id: "coec-cor-local",
                label: "Coerência Local (Micro-estrutura)"
              },
              {
                id: "coec-cor-tematica",
                label: "Progressão Temática"
              },
              {
                id: "coec-cor-naoc",
                label: "Não-contradição e Não-redundância"
              }
            ]
          }
        ]
      }
    ],
    summary: `A coesão e coerência são pilares da construção textual. Coesão refere-se aos mecanismos formais de conexão entre elementos do texto (pronomes, conjunções, sinonímia), enquanto coerência diz respeito ao sentido lógico global. Um texto pode ser coeso mas incoerente (logicamente desconexo) ou coerente mas pouco coeso (sem muitos conectivos aparentes, mas sentido claro).

COESÃO REFERENCIAL: Pronomes anafóricos retomam termos anteriores ("João comprou um livro. Ele leu rapidamente"), enquanto catafóricos anunciam termos futuros (uso raro em português). Sinonímia evita repetições ("O médico examinou o paciente. O profissional identificou..."). Elipse omite termos reconstruíveis ("João comeu maçã, e Maria, pera").

COESÃO SEQUENCIAL: Conectivos estabelecem relações lógicas entre períodos. Aditivos (e, também) somam ideias. Adversativos (mas, porém) contrapõem. Causais (porque, pois) explicam razões. Conclusivos (portanto, logo) encerram raciocínio. Temporais (antes, depois) ordenam eventos.

COERÊNCIA: Texto coerente mantém tema central, não se contradiz, segue progressão temática clara. Macrocoerência observa relação entre parágrafos e seções. Microcoerência analisa compatibilidade entre frases sucessivas. Progressão temática equilibra informação conhecida (tema) com informação nova (rema).

APLICAÇÃO EM CONCURSOS: Questões cobram identificação de conectivos inadequados, reconhecimento de pronomes mal aplicados, detecção de incoerência ou redundância. Redação administrativa exige máxima coesão e coerência para clareza de orientações.`,
    keyPoints: [
      "Pronome anafórico retoma elemento anterior; garanta referência clara sem ambiguidade",
      "Conectivos adversativos (mas, porém, contudo, todavia) marcam mudança de rumo argumentativo",
      "Conectivos conclusivos (portanto, logo, assim, pois) encerram raciocínio com consequência",
      "Sinonímia evita repetição do mesmo termo; válida em redação quando não altera nuança de sentido",
      "Elipse omite termos reconstruíveis do contexto; quando excessiva, prejudica clareza",
      "Coerência global exige tema único e não-contradição entre partes do texto",
      "Progressão temática: cada frase começa onde a anterior terminou (tema = informação velha)",
      "Incoerência local: frase isolada contraditória em relação ao parágrafo ou seção",
      "Teste de coesão: remova conectivo; se perder sentido, era necessário",
      "Redundância e pleonasmo: repetição excessiva marca vícios em vez de coesão"
    ],
    tips: [
      "Prova de coesão: substitua pronome por termo original; se não fizer sentido, referência está errada",
      "Conectivos: ADITIVOS (e, também, além disso, tal como) somam argumentos de mesmo peso",
      "Conectivos: ADVERSATIVOS (mas, porém, contudo, conquanto) marcam mudança ou concessão",
      "Conectivos: CAUSAIS (porque, pois, já que, visto que) explicam razão em ordem P → R ou R → P",
      "Conectivos: CONCLUSIVOS (portanto, logo, assim, consequentemente) finalizam com consequência inevitável",
      "Conectivos: TEMPORAIS (antes, depois, enquanto, durante) sequenciam eventos no tempo",
      "Conectivos: COMPARATIVOS (como, assim como, mais...que, menos...que) estabelecem semelhança/diferença",
      "Coerência local falha quando frase contradiz a anterior ou conceito fundamental do texto",
      "Macrocoerência: paragráfo deslocado, assunto não-relacionado, conclusão inconsistente com desenvolvimento",
      "Estratégia de prova: leia parágrafo; se entender tema único, provavelmente está coerente",
      "Ambiguidade pronominal: mais de um referente possível; escolha o mais próximo em concordância",
      "Progressão temática const. = tema se repete; progressiva = cada rema vira tema da frase seguinte"
    ],
    practicalExamples: [
      "EXEMPLO 1: 'O gerente reuniu a equipe. Ele estava preocupado.' → Pronome anafórico 'Ele' retoma 'gerente'",
      "EXEMPLO 2: 'Choveu a noite toda. Portanto, o jogo foi adiado.' → Conectivo causal apresenta consequência",
      "EXEMPLO 3: 'A Lei 8.080 criou o SUS. Mas ela não foi implementada imediatamente.' → Adversativo marca contraste",
      "EXEMPLO 4: 'Os candidatos estudaram muito. A maioria conseguiu aprovação.' → Sequência progressiva coerente",
      "EXEMPLO 5: 'Maria comeu bolo, e João, pizza.' → Elipse de 'comeu' economiza repetição"
    ]
  },

  {
    id: "sintaxe-concordancia-regencia",
    name: "Sintaxe, Concordância e Regência - Aplicação Prática",
    description: "Relações sintatáticas, concordância verbal/nominal e regência em textos administrativos e literários.",
    references: [
      "Gramatica de Celso Cunha",
      "Nova Gramatica do Portugues Contemporaneo",
      "Guia de Sintatica Portuguesa"
    ],
    mindMapNodes: [
      {
        id: "sin-root",
        label: "Sintaxe e Concordância",
        children: [
          {
            id: "sin-concordancia",
            label: "Concordância",
            children: [
              {
                id: "sin-conc-verbal",
                label: "Concordância Verbal"
              },
              {
                id: "sin-conc-nominal",
                label: "Concordância Nominal"
              },
              {
                id: "sin-conc-casos",
                label: "Casos Especiais"
              }
            ]
          },
          {
            id: "sin-regencia",
            label: "Regência",
            children: [
              {
                id: "sin-reg-verbal",
                label: "Regência Verbal"
              },
              {
                id: "sin-reg-nominal",
                label: "Regência Nominal"
              }
            ]
          }
        ]
      }
    ],
    summary: `CONCORDÂNCIA VERBAL: Verbo concorda com o NÚCLEO do sujeito em pessoa e número. Sujeito simples: "O presidente [singular] chegou cedo". Sujeito composto (plural): "O presidente e o vice chegaram cedo". Sujeitos com artigos diferentes: "O presidente e vice" (nucleo = presidente, singular) vs "O presidente e o vice" (plural). Sujeito coletivo (singular): "A multidão invadiu a praça" (multidão = núcleo singular). Verbo impessoal (sem sujeito): sempre singular - "Faz frio", "Há muitos anos".

CONCORDÂNCIA NOMINAL: Adjetivos, artigos e numerais concordam com o nome em gênero e número. Regra básica: "A lei brasileira [fem/sing] é clara". Casos especiais: (1) Adjetivo posposto a dois nomes concordam com o mais próximo ou plural - "Leis e decretos importantes" vs "Decreto e lei importante"; (2) Cores: singular quando for substantivo ("Aquelas paredes cor-de-rosa") mas plural para adjetivo ("Aquelas paredes rosas"); (3) Títulos de obras mantêm ordem original - "Os Lusíadas" (título português, título não concorda).

REGÊNCIA VERBAL: Preposição após verbo forma complemento indireto (OI). Verbos-chave: (1) ASSISTIR (presenciar = OD direto "Assistimos o filme"); ASSISTIR (ajudar = preposição A "Assistir ao paciente"); (2) ASPIRAR (respirar = OD direto); ASPIRAR (desejar = preposição A); (3) VISAR (apontar = OD direto); VISAR (objetivar = preposição A); (4) OBEDECER/DESOBEDECER (preposição A obrigatória); (5) PAGAR/PERDOAR (dativo-OI para pessoa, OD para coisa "Paguei ao credor a dívida").

CRASE (fusão de A preposição + A artigo): Obrigatória antes de nome feminino com artigo ("Assistir à missa"), antes de "aquela/aquele/aquilo" ("Refiro-me àquela lei"), antes de horas ("Chegou às 14h"). Proibida antes de nome masculino (a = preposição solinha), antes de verbo ("Vai a estudar"), antes de nome próprio em geral. Facultativa antes de nomes de pessoa ("À/A Maria").`,
    keyPoints: [
      "Concordância verbal com NÚCLEO do sujeito: 'O presidente E o vice [plural] chegaram'",
      "Verbo impessoal (faz, há, existe sem sujeito): sempre SINGULAR 'Existem rumores' ❌ 'Existe rumor' ✓",
      "Sujeito coletivo (multidão, grupo, maioria): verbo no SINGULAR se coletivo sozinho, PLURAL se + especificador",
      "Adjetivo com dois nomes: concorda com mais próximo ou plural (ambas corretas em geral)",
      "Cores como substantivos (cor-de-rosa, cor de cereja): invariáveis",
      "Verbo ASSISTIR: OD direto = 'presenciar' (assistimos o filme); OI + preposição A = 'ajudar' (assistir ao paciente)",
      "Verbo VISAR: OD direto = 'apontar' (visar o alvo); preposição A = 'objetivar' (visar ao sucesso)",
      "Crase OBRIGATÓRIA: nome feminino com artigo, 'aquela/aquele/aquilo', horas, locuções adverbiais",
      "Crase PROIBIDA: nome masculino, verbo, nome próprio (em geral), pronomes demonstrativos 'esse/esse'",
      "Regência nominal: nome exige preposição específica ('aversão A', 'obediência A', 'ânsia DE')"
    ],
    tips: [
      "Dica de sujeito composto: se dois núcleos de gêneros diferentes, adjetivo vai para o masculino plural",
      "Teste de núcleo: retire partes do sujeito uma por uma; qual deixa agramatical? Aquele é o núcleo",
      "Verbos transitivos indiretos: PEDEM preposição ('obedeço A', 'assisto AO médico')",
      "Númenal x nominal: nome = substantivo; nominal = nome + adjetivos + determinantes",
      "Dupla regência (verbo + nome): estudar + preposição + nome ('estudar SOBRE história')",
      "Crase com 'a qual/o qual': 'Lei À qual me refiro' (à = preposição + a do 'qual')",
      "Homonímia em REGÊNCIA: mesma palavra, preposições diferentes conforme sentido do verbo",
      "Checagem de regência: procure 'pedir para' ❌ vs 'pedir que' ✓; 'obedeço no gerente' ❌ vs 'obedeço ao gerente' ✓",
      "Concordância plural falsa: sujeito com de ('Maioria dos candidatos estuda') concorda com nome reto antes do DE",
      "Regência de particípio: 'respeitado pelos colegas' (regência do verbo 'respeitar' preserva-se)"
    ]
  },

  {
    id: "interpretacao-textual-estrategia",
    name: "Interpretação Textual - Estratégia de Prova",
    description: "Técnicas de leitura, localização de informações, inferência e análise crítica de textos.",
    references: [
      "Interpretacao de Textos - William Cereja",
      "Leitura e Producao de Texto - Ingedore Koch",
      "Como Ler Qualquer Coisa - Lucia Santaella"
    ],
    mindMapNodes: [
      {
        id: "int-root",
        label: "Interpretação de Textos",
        children: [
          {
            id: "int-niveis",
            label: "Níveis de Leitura",
            children: [
              {
                id: "int-literal",
                label: "Leitura Literal (Informações Explícitas)"
              },
              {
                id: "int-infer",
                label: "Leitura Inferencial (Implícitos)"
              },
              {
                id: "int-critica",
                label: "Leitura Crítica (Avaliação)"
              }
            ]
          },
          {
            id: "int-elementos",
            label: "Elementos Textuais",
            children: [
              {
                id: "int-tema",
                label: "Tema e Tese"
              },
              {
                id: "int-intencao",
                label: "Intenção do Autor"
              },
              {
                id: "int-publico",
                label: "Público-Alvo"
              },
              {
                id: "int-contexto",
                label: "Contexto Histórico"
              }
            ]
          }
        ]
      }
    ],
    summary: `LEITURA LITERAL (Nível 1): Extrai informações explícitas do texto. Responda: o que o texto diz diretamente? Localização de dados, conceitos, eventos narrados. Exige atenção palavra por palavra.

LEITURA INFERENCIAL (Nível 2): Deduz significados implícitos. Responda: o que o texto sugere sem afirmar? Use contexto, conhecimento de mundo, relações lógicas para interpretar subentendidos, ironias, pressupostos.

LEITURA CRÍTICA (Nível 3): Avalia argumentação, identifica vieses, questiona validez. Responda: o autor está correto? Quem se beneficia? Existem alternativas? Analisa recursos persuasivos (emoção, autoridade, estatísticas).

TEMA vs TESE: Tema é assunto geral ("educação"). Tese é posição do autor sobre o tema ("educação pública é direito, não privilégio"). Um texto pode tratar tema de educação mas tesar a favor de ensino privado.

INTENÇÃO DO AUTOR: Informar (texto jornalístico), persuadir (editorial, publicidade), entreter (ficção), instruir (manual). Identifique pelo tom, seleção de argumentos, público-alvo.

CONTEXTO: Quando foi escrito? Quem escreveu? Sob qual circunstância? "O negro é feliz na senzala" (século XIX) reflete ideologia escravista vs. "Racismo estrutural mata" (século XXI) reflete consciência crítica.

ARMADILHAS: (1) Informação verdadeira mas fora de contexto; (2) Negação: "X não é verdade" significa o oposto de X; (3) Moderadores: "geralmente", "costuma", "pode"; (4) Confusão entre tema e tese.`,
    keyPoints: [
      "Leitura literal: responda ONDE está a informação no texto com citação direta",
      "Leitura inferencial: use APENAS pistas textuais, não opinião pessoal fora do texto",
      "Leitura crítica: questione argumentação, identifique falácias lógicas e manipulação",
      "Tema é assunto; tese é posição clara e defensável sobre o tema",
      "Intenção informativa (jornalismo): relata fatos objetivamente",
      "Intenção persuasiva (publicidade, editorial): convence usando apelo emocional ou lógico",
      "Intenção recreativa (ficção): entretém mesmo se baseado em eventos reais",
      "Intenção instrutiva (manual, tutorial): ensina procedimentos passo a passo",
      "Pressupostos: informações aceitas como verdadeiras sem justificação",
      "Subentendido: significado implícito deduzível do contexto conversacional"
    ],
    tips: [
      "Estratégia de prova: leia questão ANTES de ler o texto; saiba o que procurar",
      "Marque trechos relevantes durante a leitura para referência rápida",
      "Negação dupla ('Não é impossível') = afirmação positiva ('É possível')",
      "Modalidade: 'deve' (obrigação) ≠ 'pode' (permissão) ≠ 'vai' (certeza)",
      "Ironia: afirma oposto do que pensa; identifique por tom sarcástico ou contexto absurdo",
      "Metonímia em título: 'Brasília aprova lei' ≠ capital física, mas governo/representantes",
      "Comparação de textos: diferencie opinião de autor vs. citação de terceiro no texto",
      "Pergunta inversa: se a alternativa fosse VERDADEIRA, contradiria qual trecho?",
      "Checagem: alternativa incorreta sempre erra em ao menos um detalhe de fato ou contexto",
      "Vocabulário: palavra desconhecida? Use contexto e raiz para deduzir significado",
      "Tom identifica intenção: formal/acadêmico (informar), casual/persuasivo (convencer), dramático (emocionar)"
    ],
    practicalExamples: [
      "EXEMPLO 1 Literal: Texto 'João nasceu em 1980'. Resposta: '1980 é o ano nascimento de João'",
      "EXEMPLO 2 Inferencial: Texto 'Saiu sem guarda-chuva. Voltou encharcado'. Inferência: 'Choveu'",
      "EXEMPLO 3 Crítica: Publicidade 'Nosso produto é seguro'. Questão crítica: 'Seguro segundo quem? Existe comprovação independente?'",
      "EXEMPLO 4 Pressupostos: 'Quando você parou de fumar?' Pressupõe que você fumava",
      "EXEMPLO 5 Ironia: 'Que linda dia para estudar!!' (durante chuva forte)"
    ]
  }
];

// ====================================================================
// SAÚDE DA FAMÍLIA - CONTEÚDO APROFUNDADO
// ====================================================================

const enfermagem20hTopicsImproved: Topic[] = [
  {
    id: "sus-fundamentos",
    name: "SUS - Fundamentos, Lei 8.080/90 e Lei 8.142/90",
    description: "Estrutura legal, princípios e diretrizes do Sistema Único de Saúde com aplicação prática em atenção básica.",
    references: [
      "Constituição Federal - Artigos 196 a 200",
      "Lei Federal 8.080 de 19 de setembro de 1990",
      "Lei Federal 8.142 de 28 de dezembro de 1990",
      "Políticas de Consolidação do SUS - Portaria GM/MS 2017"
    ],
    mindMapNodes: [
      {
        id: "sus-alicerce",
        label: "Fundamentos do SUS",
        children: [
          {
            id: "sus-leg",
            label: "Base Legal",
            children: [
              { id: "sus-cf", label: "Constituição Federal 1988" },
              { id: "sus-l8080", label: "Lei 8.080/1990 (Regulamenta SUS)" },
              { id: "sus-l8142", label: "Lei 8.142/1990 (Participação Social)" }
            ]
          },
          {
            id: "sus-princ",
            label: "Princípios",
            children: [
              { id: "sus-p-univ", label: "Universalidade - Acesso para todos" },
              { id: "sus-p-eq", label: "Equidade - Tratar desigualmente os desiguais" },
              { id: "sus-p-int", label: "Integralidade - Ações em todos os níveis" }
            ]
          },
          {
            id: "sus-diret",
            label: "Diretrizes",
            children: [
              { id: "sus-d-desc", label: "Descentralização - Gestão compartilhada" },
              { id: "sus-d-reg", label: "Regionalização - Organização territorial" },
              { id: "sus-d-hier", label: "Hierarquização - Níveis de atenção" }
            ]
          }
        ]
      }
    ],
    summary: `O SUS nasceu da Reforma Sanitária brasileira, consolidada na Constituição de 1988 e regulamentado pelas Leis 8.080/90 e 8.142/90. É sistema único porque todas as ações e serviços de saúde vinculados ao Estado fazem parte de uma rede integrada.

PRINCÍPIOS FUNDAMENTAIS (Lei 8.080):
1. UNIVERSALIDADE: Todo brasileiro tem direito ao acesso aos serviços de saúde. Não há restrição por classe social, profissão ou capacidade financeira. Todos têm direito igual.
2. EQUIDADE: Reconhece que pessoas têm necessidades diferentes. Logo, distribuição de recursos deve priorizar quem mais precisa. Exemplo: programas específicos para idosos, gestantes, negros.
3. INTEGRALIDADE: Cuidado deve cobrir promoção (campanhas vacinais), prevenção (educação), tratamento (medicamentos, procedimentos) e reabilitação (fisioterapia pós-AVC). Um paciente não é encaminhado para fora do SUS.

DIRETRIZES OPERACIONAIS:
1. DESCENTRALIZAÇÃO: Responsabilidade compartilhada entre União (formula política), Estados (coordenam região) e Municípios (executam diretamente). Cada nível financia sua parte - transferências intergovernamentais.
2. REGIONALIZAÇÃO: Serviços organizados por território geográfico. Cada município é referência para sua população. Quando não tem capacidade, encaminha para referência regional.
3. HIERARQUIZAÇÃO: Rede de atenção em 3 níveis: (1) Atenção Básica (UBS, ESF), (2) Atenção Secundária (policlínicas, hospitais especializados), (3) Atenção Terciária (hospitais de alta complexidade, como ICU, cirurgias complexas).

ESTRUTURA ADMINISTRATIVA:
- MS (Ministério da Saúde): define política nacional, coordena.
- SES (Secretaria Estadual de Saúde): executa no estado, coordena municipios.
- SMS (Secretaria Municipal de Saúde): executa localmente, cumpre diretrizes estaduais.
- Unidades: UBS, ESF, CAPS, PS 24h, hospitais, laboratórios.

LEI 8.142/90 - PARTICIPAÇÃO SOCIAL:
Define dois espaços de controle social: (1) CONFERÊNCIA DE SAÚDE - assembleia aberta, discute saúde de 4 em 4 anos; (2) CONSELHO DE SAÚDE - órgão permanente (não é congresso), deliberativo, formado por 50% usuários, 25% trabalhadores, 25% gestores/prestadores. Deliberação do Conselho é vinculante ao gestor.

FINANCIAMENTO:
- FNS (Fundo Nacional de Saúde): repassa para Estados e Municípios conforme critérios (população, territorialidade, complexidade).
- FES (Fundo Estadual de Saúde): recebe do FNS, repassa parte aos municípios.
- FMS (Fundo Municipal de Saúde): recebe de FES e FNS, executa despesas locais.
- Piso de Atenção Básica: valor per capita fixo para cada município garantir ESF e serviços básicos.

APLICAÇÃO PRÁTICA:
Você trabalha em ESF em município pequeno. Precisa de ressonância magnética? Município não tem. Precisa de referência estadual (cidade maior). Coordenação acontece por contato entre SMS municipal e SES estadual. Paciente segue linha de cuidado: ESF → policlínica → hospital de referência. Todo na mesma rede, sem sair do SUS.`,
    keyPoints: [
      "UNIVERSALIDADE: todo cidadão tem direito, sem cobrança direta no atendimento",
      "EQUIDADE: recursos não são distribuídos igualmente, mas conforme necessidade",
      "INTEGRALIDADE: paciente recebe cuidado em todos os níveis (prevenção até reabilitação) sem fragmentação",
      "DESCENTRALIZAÇÃO: responsabilidades divididas entre União, Estados e Municípios",
      "REGIONALIZAÇÃO: cada região tem sua referência; fluxo organiza acesso conforme capacidade",
      "HIERARQUIZAÇÃO: atenção em 3 níveis progressivos de complexidade",
      "CONSELHO DE SAÚDE: órgão permanente, deliberativo, com poder de veto do gestor",
      "CONFERÊNCIA DE SAÚDE: assembleial aberta de 4 em 4 anos; aprova diretrizes de saúde",
      "FNS: transferência federal de recursos; SMS gerencia localmente",
      "Transferências intergovernamentais garantem SUS mesmo em municípios pobres"
    ],
    tips: [
      "Lei 8.080: define o QUE é SUS, seus princípios e diretrizes operacionais",
      "Lei 8.142: define QUEM participa (controle social) e COMO (conselhos e conferências)",
      "Descentralização ≠ privatização: municipios executam SUS publicamente, não são empresas privadas",
      "Hierarquização NÃO significa recusa de atendimento: se não tem no nível 1, encaminha para nível 2",
      "Equity vs. Equality: equidade é distribuição justa (diferenciada conforme necessidade)",
      "Controle social: população fiscaliza gestão pública de saúde via conselhos",
      "Papel do Conselho de Saúde: aprova orçamento, fiscaliza execução, delibera sobre diretrizes",
      "Deliberação do Conselho é VINCULANTE: se aprova algo, gestor deve fazer ou explicar por que não",
      "Integralidade em prática: não existe 'rede' fragmentada; é um único sistema",
      "Financiamento per capita: evita que municípios pobres deixem de oferecer serviços básicos"
    ],
    practicalExamples: [
      "EXEMPLO 1: Prefeito tenta cobrar R$ 50 por consulta. Viola? SIM - universalidade proíbe cobrança",
      "EXEMPLO 2: Município só oferece hospital; não tem UBS. Viola? SIM - hierarquização deve cobrir todos níveis",
      "EXEMPLO 3: Gestora quer ignorar deliberação do Conselho. Pode? NÃO - é vinculante, precisa justificar",
      "EXEMPLO 4: Paciente precisa cirurgia e município não oferece. Fazer? Referenciar para nível 3 (outro município)",
      "EXEMPLO 5: 80% de pobres em bairro; gestão oferece mesmo recurso que bairro rico. Equitativo? NÃO - precisa diferençar"
    ]
  },

  {
    id: "esf-processo-trabalho",
    name: "Estratégia Saúde da Família - Processo de Trabalho Prático",
    description: "Organização da ESF, atribuições da equipe multiprofissional, ferramentas de trabalho e conceitos de territorialização.",
    references: [
      "PNAB - Política Nacional de Atenção Básica",
      "Portaria de Consolidação GM/MS nº 2/2017",
      "Manual de Atenção Básica - MS",
      "e-SUS Atenção Básica"
    ],
    mindMapNodes: [
      {
        id: "esf-org",
        label: "Organização ESF",
        children: [
          {
            id: "esf-equipe-min",
            label: "Equipe Mínima",
            children: [
              { id: "esf-med", label: "Médico Generalista (40h/semana)" },
              { id: "esf-enf", label: "Enfermeiro (40h/semana)" },
              { id: "esf-tec", label: "Técnico/Auxiliar Enfermagem (40h/semana)" },
              { id: "esf-acs", label: "Agente Comunitário Saúde - ACS" }
            ]
          },
          {
            id: "esf-nasf",
            label: "NASF (Núcleo Apoio Saúde Família)",
            children: [
              { id: "esf-nasf-psic", label: "Psicólogo" },
              { id: "esf-nasf-fono", label: "Fonoaudiólogo" },
              { id: "esf-nasf-farm", label: "Farmacêutico" },
              { id: "esf-nasf-nut", label: "Nutricionista" }
            ]
          },
          {
            id: "esf-territorio",
            label: "Territorialização",
            children: [
              { id: "esf-terr-ads", label: "Público Adscrito (população alvo)" },
              { id: "esf-terr-area", label: "Área Geográfica (normalmente 3-4 mil hab)" },
              { id: "esf-terr-microarea", label: "Micro-área do ACS (200-500 pessoas)" }
            ]
          }
        ]
      }
    ],
    summary: `A Estratégia Saúde da Família é modelo de atenção primária que organiza o cuidado por território e equipe responsável por população adscrita (pré-definida).

EQUIPE MÍNIMA - ATRIBUIÇÕES:
1. MÉDICO: Consultas de demanda e agendadas, procedimentos (curativos, injeções), prescrições, diagnóstico, orientação, participação em grupos educativos e planejamento da unidade.
2. ENFERMEIRO: Consultas de enfermagem, procedimentos, gestão da equipe e unidade, supervisão de técnico, educação em saúde, busca ativa de demandas, preenchimento de prontuário eletrônico.
3. TÉCNICO/AUXILIAR: Procedimentos sob supervisão, aferição de sinais vitais, coleta de material, limpeza/desinfecção de ambiente e materiais.
4. ACS (Agente Comunitário de Saúde): Trabalha em sua micro-área (200-500 pessoas). Visita domiciliar mensal. Orienta sobre higiene, vacinação, prevenção. Identifica necessidades e encaminha. Vinculo comunidade-serviço.

NASF (Núcleo de Apoio à Saúde da Família):
Equipe multiprofissional que NÃO substitui ESF, mas amplia suas capacidades. Geralmente 1 NASF por 2-3 ESF. Oferece consulta especializada compartilhada (profissional NASF + médico da ESF), capacitações, matriciamento (discussão de casos).

TERRITORIALIZAÇÃO:
- Público adscrito: população que ESF é responsável (geralmente 3-4 mil pessoas, 800-1000 por ACS).
- Micro-área: cada ACS trabalha em micro-área com 200-500 pessoas, conhece pelo nome.
- Mapa territorial: equipe conhece geografia, ruas, riscos, vulnerabilidades, pontos de aglomeração.

VISITA DOMICILIAR:
ACS faz visita mensal a cada domicílio de sua micro-área. Orienta, inspeciona condições sanitárias, identifica doentes acamados, gestantes, crianças menores de 5 anos. Detecta demandas antes delas chegarem à unidade.

PROCESSO DE TRABALHO:
1. Acolhimento: qualquer pessoa que chega é avaliada (classificação de risco em unidades com essa rotina).
2. Consulta/Procedimento: realizado por médico, enfermeiro ou técnico conforme demanda.
3. Programação: agendamentos para grupos (pré-natal, hipertensão, diabetes), visitas domiciliares, ações pontuais.
4. Registro: e-SUS coleta dados estruturados (procedimentos, medicamentos, condutas).
5. Avaliação: indicadores acompanham cobertura de campanhas, qualidade de cuidado.

E-SUS ATENÇÃO BÁSICA:
Sistema de informação que registra: atendimentos (tipo, procedimento), procedimentos realizados, medicamentos prescritos, referências, visitas domiciliares. Dados alimentam indicadores de saúde e desempenho da ESF.

PRIORIDADES DA ESF:
- Promoção de saúde: campanhas, grupos educativos.
- Prevenção: vacinação, preventivo (papanicolau), teste de pressão.
- Diagnóstico precoce: busca ativa, testes rápidos, encaminhamentos.
- Tratamento: medicações básicas, curativo, procedimentos simples.
- Reabilitação: encaminhamento para NASF fisioterapia, orientação de repouso.`,
    keyPoints: [
      "ESF responsável por população ADSCRITA de 3-4 mil pessoas geograficamente definida",
      "Médico: 40 horas, atuação clínica e gestão; não é só consulta",
      "Enfermeiro: 40 horas, consultas, educação, supervisão; essencial para qualidade",
      "ACS: agente comunitário é elo comunidade-serviço; visita micro-área regularmente",
      "NASF amplia capacidade ESF em especialidades (psicologia, nutrição, fonoaudiologia)",
      "Territorialização: equipe conhece população, risco social, vulnerabilidades",
      "Visita domiciliar: acompanhamento longitudinal, detecção precoce de problemas",
      "Acesso: ESF garante oferta de atendimentos para população adscrita",
      "Vinculo: relacionamento continuado médico-usuário melhora confiança e adesão",
      "e-SUS: sistema informatizado que gera indicadores de desempenho"
    ],
    tips: [
      "Populacao adscrita ≠ população que chega: ESF vai atrás de quem não chega (busca ativa)",
      "ACS NÃO faz procedimentos clínicos; orienta e encaminha",
      "Visita domiciliar: ferramenta-chave para longitudinalidade e conhecimento de contexto",
      "NASF em contraste: não tem atendimento próprio fixo; funciona por demanda/projetos",
      "Indicador ESF: cobertura (% população em ESF), qualidade (cumprimento de metas)",
      "Micro-área: cada ACS conhece sua área, população, riscos. Fundamental para planejamento",
      "e-SUS substitui sistemas antigos: coleta dados para SIASUS (faturamento) e análise",
      "Modelo ESF vs modelo tradicional: ESF = equipe fixa por população; tradicional = atendimento aberto",
      "Atribuições médico: diagnóstico, prescrição, procedimentos, participação em gestão",
      "Atribuições enfermeiro: consultas independentes em áreas (saúde da mulher, saúde mental, urgência)"
    ],
    practicalExamples: [
      "EXEMPLO 1: ESF tem 3 mil pessoas adcritas. ACS vizita 400 pessoas em sua micro-área. Total: 7-8 ACS por ESF",
      "EXEMPLO 2: Gestante não comparece consulta. ACS faz busca domiciliar. Encontra gestante, orienta, remarca",
      "EXEMPLO 3: NASF psicólogo atende paciente com ansiedade. Compartilha com médico ESF para cuidado integrado",
      "EXEMPLO 4: Hypertensão não controlada? ESF promove grupo de educação em saúde + revisão de medicação",
      "EXEMPLO 5: Criança menores de 5 anos com diarréia. ACS orienta sobre reidratação em casa; se grave, encaminha"
    ]
  },

  {
    id: "biosseguranca-aps",
    name: "Biossegurança e Prevenção de Risco em APS",
    description: "Normas NR-32, precauções padrão, contaminação, EPIs, limpeza/desinfecção de ambientes e instrumentos.",
    references: [
      "NR-32 (Norma Reguladora de Segurança)",
      "RDC ANVISA sobre CME (Central de Material Esterilizado)",
      "Guia de Biossegurança - Ministério da Saúde",
      "Manual de Prevenção de Infecção - APECIH"
    ],
    mindMapNodes: [
      {
        id: "bio-risco",
        label: "Riscos Biológicos",
        children: [
          {
            id: "bio-prec",
            label: "Precauções",
            children: [
              { id: "bio-prec-padrao", label: "Precaução Padrão" },
              { id: "bio-prec-contato", label: "Precaução Contato" },
              { id: "bio-prec-goticula", label: "Precaução Gotícula" },
              { id: "bio-prec-aero", label: "Precaução Aerossol" }
            ]
          },
          {
            id: "bio-epi",
            label: "EPIs (Equipamentos Proteção Individual)",
            children: [
              { id: "bio-epi-luva", label: "Luvas (látex, nitrila)" },
              { id: "bio-epi-mascara", label: "Máscaras (cirúrgica, N95, PFF2)" },
              { id: "bio-epi-avental", label: "Avental impermeável" },
              { id: "bio-epi-protfacial", label: "Protetor Facial/Óculos" }
            ]
          }
        ]
      }
    ],
    summary: `BIOSSEGURANÇA é conjunto de normas e procedimentos que reduzem risco de exposição a agentes biológicos em serviços de saúde.

LEGISLAÇÃO: NR-32 (Segurança e Higiene Ocupacional em Serviços de Saúde) obriga empregadores a:
- Implementar medidas de controle de risco.
- Fornecer EPIs adequados (grátis, em quantidade suficiente).
- Oferecer vacinas contra hepatite B, tétano, varicela, influenza.
- Realizar treinamentos periódicos.
- Manter registros de acidentes.

PRECAUÇÕES PADRÃO (aplicam-se A TODO paciente, TODO atendimento):
1. Higiene das mãos: antes/depois de contato, antes de procedimento limpo, após contato com fluidos corpóreos, após remover luvas.
2. Luvas: ao contato com sangue/fluidos, mucosa, pele não-íntegra. Trocar entre pacientes. NÃO substitui higiene das mãos.
3. Máscara cirúrgica: atendimento presencial, procedimentos que geram aerossol.
4. Avental/capote: contato com sangue abundante ou fluidos corpóreos.
5. Protetor ocular: procedimentos que podem gerar respingos.

PRECAUÇÕES ADICIONAIS (conforme diagnóstico):
1. CONTATO (ex: diarréia, sarna): luva + avental; quarto privativo se possível.
2. GOTÍCULA (ex: gripe, coqueluche, meningite meningocócica): máscara cirúrgica; distância > 1 metro de outro paciente.
3. AEROSSOL (ex: tuberculose, sarampo, varicela, COVID-19): N95/PFF2; isolamento em quarto com ar negativado se internação.

EXPOSIÇÃO ACIDENTAL:
Se pinchaço/corte com agulha contaminada ou mucosa exposta a sangue:
- Lavagem imediata com água e sabão.
- Comunicar supervisor.
- Investigar status sorológico da fonte (HIV, hepatite B/C) se possível.
- Iniciar PEP (Profilaxia Pós-Exposição ao HIV) em até 2 horas se indicado.
- Acompanhamento clínico-laboratorial por 6 meses.

GERENCIAMENTO DE RESÍDUOS (PGRSS):
- Resíduos do Grupo A (biológico): agulhas, seringas, frasco de vacina usada, gaze com sangue → RECIPIENTE RÍGIDO (amarelo).
- Resíduos do Grupo D (comum): papel, papelão, garrafas → lixo comum.
- Resíduos do Grupo E (químico): medicamentos vencidos, desinfetantes → segue protocolo específico.

LIMPEZA E DESINFECÇÃO:
- Superfícies: água + sabão (sujidade) depois desinfetante (álcool 70% ou cloro 0,5%).
- Instrumentos: limpeza com escovação + água, depois desinfecção (álcool 70%) ou esterilização (autoclave 121°C, 15-20 min).
- Mãos: sabonete antisséptico em contato com paciente suspeito de transmissível; água + sabão comum para limpeza geral.

EQUIPAMENTO PROTETOR (Como vestir):
1. Higienize mãos.
2. Coloque avental primeiro (amarrado nas costas).
3. Coloque máscara cobrindo nariz e boca.
4. Coloque protetor ocular.
5. Calce luvas (cobrindo punho do avental).

DESPARAMENTAÇÃO (Retirando EPI):
1. Retire luvas: remova uma, depois use a mão sem luva para remover a outra (evita contaminação).
2. Higienize mãos.
3. Retire protetor ocular.
4. Retire máscara pelas laterais (NUNCA pela frente).
5. Retire avental.
6. Higienize mãos novamente.`,
    keyPoints: [
      "PRECAUÇÃO PADRÃO: aplicada a TODO paciente, protege profissional e outros",
      "Higiene das mãos: ANTES de procedimento limpo, APÓS contato com fluidos",
      "Luvas NÃO substituem higiene das mãos; lavem mãos antes e após removê-las",
      "Máscara cirúrgica: gotícula; N95/PFF2: aerossol",
      "Contato: luva + avental + máscara (pode usar cirúrgica)",
      "Gotícula: máscara cirúrgica para paciente/profissional; distância > 1m de outro",
      "Aerossol: máscara N95/PFF2 para profissional; isolamento do paciente",
      "Exposição acidental: lavar imediatamente, comunicar, avaliar fonte, PEP se necessário",
      "PGRSS: segregação de resíduos no ponto de geração (não misture)",
      "Desinfecção: álcool 70% para superfícies; esterilização em autoclave para instrumentos"
    ],
    tips: [
      "Paramentação: ordem é importante (avental → máscara → óculos → luvas)",
      "Desparamentação: INVERSO da ordem; retire luvas ANTES de tocar rosto",
      "Álcool 70%: eficaz para superfícies e pele íntegra; NÃO use pele ferida (álcool arde)",
      "Cloro 0,5%: usável para desinfecção, mas corrosivo; cuidado com metais",
      "Agulha exposta: risco máximo de transmissão (HIV, HBV, HCV); PEP em até 2 horas",
      "Treinamento: NR-32 obriga capacitação anual dos trabalhadores",
      "Descarte de agulha: caixa específica (rígida, amarela), NUNCA em lixo comum",
      "Precaução de contato: luva É OBRIGATÓRIA; máscara cirúrgica se proximidade",
      "Precaução de gotícula: paciente + profissional usam máscara; distância mínima 1m",
      "Precaução de aerossol: máscara N95 obrigatória; melhor isolamento possível"
    ]
  }
];

// ====================================================================
// EXPORTAÇÃO DE DADOS
// ====================================================================

export const allTopicsImproved = [
  ...portuguesaSuperiorTopicsImproved,
  ...enfermagem20hTopicsImproved
];

export default allTopicsImproved;
