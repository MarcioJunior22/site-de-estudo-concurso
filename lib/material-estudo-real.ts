// ====================================================================
// MATERIAL DE ESTUDO REAL - CONTEÚDO PRÁTICO PARA PASSAR EM PROVA
// ====================================================================
// FOCO: Explicações passo-a-passo + Tabelas + Questões Resolvidas
// ====================================================================

export interface StudyMaterial {
  id: string;
  title: string;
  subject: string;
  
  // ESTRUTURA PRINCIPAL
  whatYouNeedToKnow: string;        // O que é, em 1 parágrafo
  whyItMatters: string;             // Por que cai em prova
  
  // EXPLICAÇÃO PRÁTICA
  stepByStep: string[];             // Passo-a-passo para entender
  
  // VISUALIZAÇÃO
  visualGuide?: string;             // Fluxograma/tabela em texto
  
  // COMPARAÇÃO
  comparativeTable?: {
    items: Array<{ [key: string]: string }>;
    description: string;
  };
  
  // ESTRATÉGIA
  provenTricks: string[];           // Macetes que funcionam
  
  // PRÁTICA
  questionsResolved: Question[];    // Questões com resolução
  
  // MEMORIZAÇÃO
  cheatSheet: string;               // 1 página de memorização
}

export interface Question {
  number: number;
  text: string;
  options: string[];
  correctAnswer: string;
  whyCorrect: string;
  strategy: string;
}

// ====================================================================
// PORTUGUÊS SUPERIOR - COESÃO E COERÊNCIA TEXTUAL
// ====================================================================

export const coesaoCoerenciaMaterial: StudyMaterial = {
  id: "pt-coesao-real",
  title: "Coesão e Coerência - Material de Estudo Real",
  subject: "Português Superior",
  
  whatYouNeedToKnow: 
`Coesão = como as frases se CONECTAM (pronomes, conectivos, repetição).
Coerência = o texto faz SENTIDO logicamente (ideia-chave mantida, sem contradições).
Resumo: Coesão é a forma, coerência é o conteúdo.`,

  whyItMatters:
`Em TODA prova de concurso, aparecem questões como:
- "Qual palavra DEVERIA substituir o conectivo para manter o sentido?"
- "Por que este parágrafo QUEBRA a coerência?"
- "O pronome se refere a qual termo?"
Se você errar coesão/coerência, erra interpretação, redação e tudo.`,

  stepByStep: [
    `PASSO 1 - RECONHEÇA AS 3 FORMAS DE COESÃO:
    • REFERENCIAL: Pronomes retomam termos (João chegou. ELE estava cansado)
    • SEQUENCIAL: Conectivos ligam frases (Estudei PORTANTO passei)
    • LEXICAL: Palavras repetem/sinônimos (Médico atendeu paciente. O profissional...)`,
    
    `PASSO 2 - DOMINE OS CONECTIVOS (a maioria das questões):
    • ADITIVOS (e, também, além disso) = SOMA ideias
    • ADVERSATIVOS (mas, porém, contudo) = CONTRASTE
    • CAUSAIS (porque, pois, já que) = EXPLICAÇÃO
    • CONCLUSIVOS (portanto, logo, assim) = RESULTADO
    • TEMPORAIS (antes, depois, enquanto) = TEMPO`,
    
    `PASSO 3 - TESTE PRONOMES:
    Quando ver um "ele", "ela", "isso" - MARQUE no texto aonde retoma.
    Se tiver 2+ opções, escolhe a MAIS PRÓXIMA ou a MAIS LÓGICA.
    PROVA REAL: Leia sem o pronome; faz sentido? Se não, referência está errada.`,
    
    `PASSO 4 - COERÊNCIA = "O TEXTO FALA A MESMA COISA DO COMEÇO AO FIM":
    ✓ Paragrafo 1 fala "lei é boa"
    ✓ Paragrafo 2 explica POR QUÊ é boa
    ✓ Paragrafo 3 reforça que é boa
    ❌ Se paragrafo 2 disser "lei é ruim" = INCOERÊNCIA = ERRO GRAVE`,
    
    `PASSO 5 - PROGRESSÃO TEMÁTICA (conceito que diferencia expert):
    TEMA = informação que JÁ CONHECEMOS (começo da frase)
    REMA = informação NOVA (fim da frase)
    EXEMPLO: "O presidente [tema/conhecido] CHEGOU ONTEM [rema/novo]"
    PRÓXIMA FRASE: "Ele [tema/agora conhecido] DEU DISCURSO [rema/novo]"
    REGRA: Cada frase começa onde a anterior terminou = texto fluido.`
  ],

  visualGuide: `
╔════════════════════════════════════════════════════════════════════╗
║  FLUXOGRAMA DE DECISÃO - QUAL CONECTIVO USAR?                     ║
╚════════════════════════════════════════════════════════════════════╝

A frase anterior diz ALGO...
        │
        ├─ Você quer REFORÇAR/ADICIONAR? ──→ E, TAMBÉM, ALÉM DISSO, AINDA
        │
        ├─ Você quer CONTRASTAR/OPOR? ──→ MAS, PORÉM, CONTUDO, TODAVIA, CONQUANTO
        │
        ├─ Você quer EXPLICAR RAZÃO? ──→ PORQUE, POIS, JÁ QUE, VISTO QUE
        │
        ├─ Você quer DAR RESULTADO/CONCLUSÃO? ──→ PORTANTO, LOGO, ASSIM, CONSEQUENTEMENTE
        │
        └─ Você quer COLOCAR EM TEMPO? ──→ ANTES, DEPOIS, ENQUANTO, DURANTE


╔════════════════════════════════════════════════════════════════════╗
║  TABELA DE PRONOMES X REFERENTES                                   ║
╚════════════════════════════════════════════════════════════════════╝

PRONOME          | QUANDO USAR              | CUIDADO
─────────────────┼──────────────────────────┼──────────────────────
Ele/Ela/Eles/Elas| Retoma pessoa já nomeada | Procure 1+ sentença atrás
Isto/Isso/Aquilo | Retoma IDEIA anterior    | Nunca retoma só 1 palavra
Lhe/Lhes         | Objeto indireto (A ele)  | "Dei LHE um livro" ✓
O/A/Os/As        | Objeto direto            | "O li ontem" (o = livro)
Que               | Pronome relativo = volta| "A lei QUE foi aprovada..."
Qual/Quais       | Relativo em dúvida       | "Para qual alternativa..."
`,

  comparativeTable: {
    description: "COESÃO x COERÊNCIA - As 2 diferenças principais",
    items: [
      {
        "Aspecto": "O QUÊ",
        "COESÃO": "FORMA - conecta frases com palavras",
        "COERÊNCIA": "SIGNIFICADO - texto faz sentido lógico"
      },
      {
        "Aspecto": "VERIFICAÇÃO",
        "COESÃO": "Identifique: pronomes, conectivos, repetições",
        "COERÊNCIA": "Leia todo parágrafo: tema mantido? Sem contradição?"
      },
      {
        "Aspecto": "EXEMPLO BOM",
        "COESÃO": ""João chegou. Ele desceu do carro" (pronome 'ele' liga)",
        "COERÊNCIA": "Texto segue tema: Lei é boa → explica → reforça"
      },
      {
        "Aspecto": "EXEMPLO RUIM",
        "COESÃO": ""João chegou. Ela comeu pizza" (pronome 'ela' não retoma João)",
        "COERÊNCIA": "Parágrafo 1: Lei boa | Parágrafo 2: Lei má (contradição!)"
      },
      {
        "Aspecto": "FREQUÊNCIA EM PROVA",
        "COESÃO": "60% das questões - MAIS COMUM",
        "COERÊNCIA": "40% - mas questões MAIS DIFÍCEIS"
      }
    ]
  },

  provenTricks: [
    "🎯 TRUQUE 1 - PRONOME AMBÍGUO: Se tiver 2+ possibilidades, escolhe MAIS PRÓXIMO + CONCORDÂNCIA de gênero/número",
    "🎯 TRUQUE 2 - CONECTIVO ERRADO: Leia a frase ANTES + a DEPOIS. Qual conectivo liga melhor? (aditivo/adversativo/causal/conclusivo)",
    "🎯 TRUQUE 3 - PROVA DE COESÃO: Remove o conectivo. Se perder SENTIDO = era necessário. Se continuar igual = era redundante.",
    "🎯 TRUQUE 4 - COERÊNCIA QUEBRADA: Procure CONTRADIÇÃO entre parágrafos (Parágrafo 1 diz SIM, Parágrafo 2 diz NÃO)",
    "🎯 TRUQUE 5 - TEMA x REMA: Em questão de progressão temática, começo da frase = tema, final = rema. Se 'rema' vira 'tema' da próxima = texto fluido",
    "🎯 TRUQUE 6 - ELIPSE (omissão): Quando vê '_____ estudou, e ela trabalhou' = pode omitir verbo se igual (e trabalhou = e [ela] trabalhou)"
  ],

  questionsResolved: [
    {
      number: 1,
      text: `Leia: "A empresa reduziu custos. _____, aumentou a produção. Portanto, os lucros subiram."
      Qual conectivo completa melhor o espaço?
      
      A) Mas
      B) Porém  
      C) Contudo
      D) Além disso
      E) Entretanto`,
      
      options: ["Mas", "Porém", "Contudo", "Além disso", "Entretanto"],
      correctAnswer: "Além disso",
      whyCorrect: `ESTRATÉGIA: Observe a sequência:
      1º Frase: "Reduziu custos" (ação 1)
      Espaço: ??? (ação 2)
      3º Frase: "Portanto lucros subiram" (RESULTADO)
      
      Lógica: Se reduziu custos E aumentou produção = resultado = lucros subiram.
      Precisa de conectivo ADITIVO (que soma) não adversativo (que contrasta).
      
      ANÁLISE DAS OPÇÕES:
      A/B/C/E) Mas, Porém, Contudo, Entretanto = ADVERSATIVOS (marcam contraste/negação) ❌
      D) Além disso = ADITIVO (soma ações) ✓
      
      LÓGICA INVERTIDA: Se dissesse "reduziu custos. MAS aumentou produção"  
      = faria sentido (custos ↓ mas produção ↑ = contraditório = excelente contraste).
      MAS neste caso, ambas ações levam a resultado positivo = não há contraste.`,
      
      strategy: "CONECTIVOS: Identifique a relação entre frases. Somar? Contrastar? Explicar? Concluir? Escolha conectivo que encaixa."
    },

    {
      number: 2,
      text: `"O gerente reuniu a equipe. Ele explicou os objetivos. Mas eles não entenderam."
      
      A quem "eles" refere-se?
      
      A) Ao gerente
      B) À equipe
      C) Aos objetivos
      D) Ao gerente e à equipe
      E) Não há referente claro`,
      
      options: ["Ao gerente", "À equipe", "Aos objetivos", "Ao gerente e à equipe", "Não há referente claro"],
      correctAnswer: "À equipe",
      whyCorrect: `ANÁLISE PASSO-A-PASSO:
      
      Frase 1: "O gerente [SG/MASC] reuniu a equipe [SG/FEM]"
      Frase 2: "Ele [MASC/SG] explicou..." ← 'Ele' retoma "gerente" ✓
      Frase 3: "Eles [PL/MASC] não entenderam" ← 'Eles' precisa plural
      
      Procure no texto: Qual é PLURAL e pode ser retomado por ELES?
      - "gerente" = singular ❌
      - "equipe" = singular formalmente, mas PLURAL conceitualmente (muitas pessoas) ✓
      - "objetivos" = plural mas seria "eles não entenderam" significaria "objetivos não entendem" (errado) ❌
      
      PROVA REAL: Substitua - "Os objetivos não entenderam" = não faz sentido.
      "A equipe [composta de MÚLTIPLAS PESSOAS] não entenderam" = faz sentido!
      
      REGRA: Coletivo (equipe, grupo, multidão) = SINGULAR formalmente MAS pode gerar plural
      se se referir às pessoas do grupo.`,
      
      strategy: "PRONOME: (1) Veja o número/gênero. (2) Procure no texto quem combina. (3) Substitua mentalmente para testar."
    },

    {
      number: 3,
      text: `Qual parágrafo QUEBRA a coerência do texto?

      I - "A lei foi aprovada por unanimidade"
      II - "O presidente a sancionou imediatamente"
      III - "Todos os senadores votaram contra"
      IV - "Ela entrará em vigor na próxima segunda"

      A) I - porque fala de aprovação
      B) II - porque fala de sanção
      C) III - porque contraria a informação de aprovação
      D) IV - porque fala de vigência
      E) Nenhum quebra a coerência`,
      
      options: ["I", "II", "III", "IV", "Nenhum quebra a coerência"],
      correctAnswer: "III - porque contraria a informação de aprovação",
      whyCorrect: `COERÊNCIA = texto mantém IDEIA PRINCIPAL sem CONTRADIÇÃO
      
      Ideia central dos parágrafos I-II-IV: "Lei APROVADA e SANCIONADA"
      
      Parágrafo I: "Lei foi aprovada por unanimidade" (todos A FAVOR)
      Parágrafo III: "Todos os senadores votaram CONTRA" (todos CONTRA)
      
      CONTRADIÇÃO CLARA: Não pode ser "aprovada por unanimidade" E "todos votarem contra"
      = INCOERÊNCIA = QUEBRA DE LÓGICA
      
      A coerência exige: Se fala APROVAÇÃO no começo, continua com APROVAÇÃO.
      Se descobre que foi REJEITADA, precisa explicar a mudança, não contradizer.
      
      DICA: Em questão de coerência, procure palavra-chave de uma frase que CONTRADIZ a anterior.
      Aprovado ≠ Rejeitado = INCOERÊNCIA`,
      
      strategy: "COERÊNCIA: Leia TEMA de cada parágrafo. Se um contradiz o anterior = INCOERÊNCIA = erro."
    },

    {
      number: 4,
      text: `Identifique a progressão temática:
      
      "O presidente [TEMA 1] promulgou a lei [REMA 1].
       A lei [TEMA 2] entrará em vigor em maio [REMA 2].
       Maio [TEMA 3] marcará mudanças na administração [REMA 3]."
      
      A) Progressão temática constante
      B) Progressão temática linear
      C) Progressão temática derivada
      D) Progressão temática quebrada
      E) Não há progressão temática`,
      
      options: ["Constante", "Linear", "Derivada", "Quebrada", "Não há"],
      correctAnswer: "Linear",
      whyCorrect: `PROGRESSÃO TEMÁTICA = como texto evoluiremos de frase em frase
      
      FRASE 1: Tema = "presidente" | Rema = "promulgou lei"
      FRASE 2: Tema = "lei" (= REMA da frase 1) | Rema = "entrará em vigor em maio"
      FRASE 3: Tema = "maio" (= REMA da frase 2) | Rema = "marcará mudanças"
      
      PADRÃO: Cada REMA (novo) vira TEMA (conhecido) da próxima frase
      = PROGRESSÃO LINEAR (em sequência, como linha)
      
      COMPARAÇÃO COM OUTRAS:
      • CONSTANTE: Tema nunca muda (presidente sempre tema) ❌
      • DERIVADA: Tema ramifica em vários sub-temas ❌
      • QUEBRADA: Pula informações, desconexo ❌
      
      TESTE: Cada frase começa aonde a anterior terminou? SIM = LINEAR ✓`,
      
      strategy: "PROGRESSÃO: Marque REMA de cada frase. O rema vira tema da próxima? Linear! Sempre tema igual? Constante!"
    }
  ],

  cheatSheet: `
════════════════════════════════════════════════════════════════════
COESÃO & COERÊNCIA - 1 PÁGINA DE MEMORIZAÇÃO
════════════════════════════════════════════════════════════════════

🔷 COESÃO = FORMA (como prende frases)
   • PRONOMES: ele/ela/isso retomam termo anterior. Teste: substitua pronome pelo termo
   • CONECTIVOS: e(aditivo) mas(adversativo) porque(causal) portanto(conclusivo)
   • REPETIÇÃO: mesma palavra ou sinônimo liga frases

🔷 COERÊNCIA = LÓGICA (texto faz sentido)
   • TEMA ÚNICO: começo ao fim fala da mesma coisa
   • SEM CONTRADIÇÃO: o que está em Parágrafo 1 não nega Parágrafo 2
   • PROGRESSÃO: cada frase começa onde anterior terminou

🔷 PRONOME AMBÍGUO?
   → Escolha MAIS PRÓXIMO + concordância gênero/número
   → Se múltiplas opções, releia: qual faz sentido LÓGICO?

🔷 CONECTIVO ERRADO?
   → Identifique relação (soma/contraste/causa/resultado)
   → Aditivos: e, também, além, ainda
   → Adversativos: mas, porém, contudo
   → Causais: porque, pois, já que
   → Conclusivos: portanto, logo, assim

🔷 COERÊNCIA QUEBRADA?
   → Procure contradição entre partes
   → Exemplo: "Lei boa" depois "Lei ruim" = INCOERÊNCIA

🔷 PROGRESSÃO TEMÁTICA?
   → Tema = conhecida (início frase) | Rema = nova (final frase)
   → Rema de frase 1 vira Tema de frase 2? = LINEAR ✓
   → Tema nunca muda? = CONSTANTE ✓

════════════════════════════════════════════════════════════════════
`
};

// ====================================================================
// SUS - FUNÇÕES BÁSICAS DA LEI 8.080/90
// ====================================================================

export const susFundamentosMaterial: StudyMaterial = {
  id: "sus-fundamentos-real",
  title: "SUS - Lei 8.080/90 - Material de Estudo Real",
  subject: "Saúde da Família",
  
  whatYouNeedToKnow:
`SUS = Sistema Único de Saúde (criado em 1988).
Lei 8.080/90 = DEFINE O QUÊ é SUS (estrutura, princípios, funções).
Lei 8.142/90 = DEFINE QUEM participa (participação social).

MNEMÔNICO: "8.080 é o O-QUÊ; 8.142 é o QUEM"`,

  whyItMatters:
`Em TODA prova de Saúde da Família:
- 3-5 questões sobre Lei 8.080
- Pegadinha: confunde 8.080 com 8.142
- Cobra diferenças entre Universalidade, Equidade, Integralidade
- Cobra estrutura administrativa (MS, SES, SMS)
Errar SUS = perder pontos IMPORTANTES.`,

  stepByStep: [
    `PASSO 1 - 3 PRINCÍPIOS FUNDAMENTAIS (memorize exatamente):
    
    ✓ UNIVERSALIDADE: "TODO brasileiro tem direito" (sem exceção, sem pagar)
      → Não é "para todos igualmente", é "para todos, ponto final"
      
    ✓ EQUIDADE: "Reconhece diferenças e dá mais a quem precisa mais"
      → Mendigo doente recebe MAIS que rico saudável
      → Diferente de IGUALDADE (que é dar igual para todos)
      
    ✓ INTEGRALIDADE: "Cuida de TUDO" (prevenção, promoção, tratamento, reabilitação)
      → Não cuida só de doença, cuida de saúde inteira
      → Exemplo: vacinação (promoção) + tratamento (cura) + reabilitação (volta à vida)`,
    
    `PASSO 2 - 3 DIRETRIZES OPERACIONAIS (como funciona):
    
    ✓ DESCENTRALIZAÇÃO: "Poder dividido entre 3 esferas"
      → Ministério da Saúde (MS) = regulamenta
      → Secretaria Estadual de Saúde (SES) = executa no estado  
      → Secretaria Municipal de Saúde (SMS) = executa no município
      → Ninguém faz TUDO sozinho = trabalham juntas
      
    ✓ REGIONALIZAÇÃO: "Cada região tem seus serviços"
      → Não existe hospital do SUS em TUDO lugar
      → Serve uma região definida (município + entorno)
      
    ✓ HIERARQUIZAÇÃO: "3 níveis de complexidade":
      → Nível 1 = Atenção Básica (posto, unidade familiar)
      → Nível 2 = Média Complexidade (hospital pequeno, especialista)
      → Nível 3 = Alta Complexidade (hospital grande, cirurgia complexa)
      → Paciente COMEÇA na básica, sobe se precisa`,
    
    `PASSO 3 - 4 ESTRUTURAS CHAVE (quem faz o QUÊ):
    
    ✓ MS (Ministério da Saúde):
      → Faz POLÍTICA NACIONAL (é o "chefe")
      → Regula as regras
      → Financia com FNS (Fundo Nacional de Saúde)
      
    ✓ SES (Secretaria Estadual):
      → Coordena estado
      → Repassa dinheiro (FES = Fundo Estadual)
      
    ✓ SMS (Secretaria Municipal):
      → Coordena município
      → Repassa dinheiro (FMS = Fundo Municipal)
      
    ✓ GESTÃO: Cada esfera IMPLEMENTA (não é hierarquia rígida = é colaborativa)`,
    
    `PASSO 4 - PARTICIPAÇÃO SOCIAL (Lei 8.142/90):
    
    ✓ CONSELHOS (deliberativos = decidem):
      → Conselho de Saúde (50% população, 25% profissionais, 25% gestores)
      → DECIDE as políticas
      
    ✓ CONFERÊNCIAS (consultivas = sugerem):
      → Grandes encontros periódicos
      → População fala o que quer
      
    ⚠️ CUIDADO: Confunde com Lei 8.080?
       8.080 = estrutura + princípios
       8.142 = QUEM PARTICIPA + como decide`,
    
    `PASSO 5 - FINANCIAMENTO (3 Fundos):
    
    ✓ FNS (Fundo Nacional): financia SUS inteiro (Ministério)
    ✓ FES (Fundo Estadual): financia estado (Secretaria Estadual)
    ✓ FMS (Fundo Municipal): financia município (Secretaria Municipal)
    
    LÓGICA: Dinheiro desce em cascata MS → SES → SMS`
  ],

  visualGuide: `
╔════════════════════════════════════════════════════════════════════╗
║  ESTRUTURA DO SUS - QUEM FAZ O QUÊ                                ║
╚════════════════════════════════════════════════════════════════════╝

                    MINISTÉRIO DA SAÚDE (MS)
                   (Faz política nacional)
                              │
                    Financia com FNS
                    (Fundo Nacional)
                              │
                ┌─────────────┴──────────────┐
                │                            │
        SECRETARIA ESTADUAL        SECRETARIA ESTADUAL
        DE SAÚDE (SES)             DE SAÚDE (SES)
      (Coordena estado 1)         (Coordena estado 2)
               │                          │
         Financia com FES           Financia com FES
         (Fundo Estadual)           (Fundo Estadual)
               │                          │
          ┌────┴─────┐              ┌─────┴────┐
          │           │              │          │
        SMS      SMS             SMS        SMS
      Mun A    Mun B            Mun C    Mun D
    Financia   Financia        Financia  Financia
    com FMS    com FMS         com FMS   com FMS


╔════════════════════════════════════════════════════════════════════╗
║  3 NÍVEIS DE COMPLEXIDADE - FLUXO DO PACIENTE                     ║
╚════════════════════════════════════════════════════════════════════╝

PACIENTE CHEGA COM PROBLEMA
            │
            ▼
    NÍVEL 1: ATENÇÃO BÁSICA
    ├─ Consultório (clínica)
    ├─ Unidade de Saúde da Família (ESF)
    ├─ Médico generalista, enfermeiro
    └─ Resolve 80% dos problemas? ÓTIMO! Encerra aqui.
            │ Se NÃO resolve...
            ▼
    NÍVEL 2: MÉDIA COMPLEXIDADE
    ├─ Hospital pequeno, especialista
    ├─ Cirurgias simples, exames mais complexos
    └─ Resolve? Encerra. Se não...
            │
            ▼
    NÍVEL 3: ALTA COMPLEXIDADE
    ├─ Hospital grande com UTI, cirurgia complexa
    ├─ Exames de imagem de última geração
    └─ Único recurso disponível


╔════════════════════════════════════════════════════════════════════╗
║  LEI 8.080 vs LEI 8.142 - DIFERENÇA CRUCIAL                       ║
╚════════════════════════════════════════════════════════════════════╝

LEI 8.080/90                    │  LEI 8.142/90
────────────────────────────────┼────────────────────────────────
"O QUÊ" é SUS                   │  "QUEM" participa do SUS
Define estrutura                │  Define participação social
Princípios (universalidade)     │  Conselhos (deliberativos)
Diretrizes (descentralização)   │  Conferências (consultivas)
Financiamento (FNS, FES, FMS)   │  Controle social da população
Funções (atenção à saúde)       │  Como população fiscaliza
`,

  comparativeTable: {
    description: "3 PRINCÍPIOS x 3 DIRETRIZES - Diferenças Críticas",
    items: [
      {
        "Item": "UNIVERSALIDADE",
        "O QUÊ": "Todo mundo tem direito",
        "PEGADINHA": "Não é 'atender bem todos' = é 'TODOS têm direito'",
        "EXEMPLO PROVA": "Pobre, rico, estrangeiro = todos SIM"
      },
      {
        "Item": "EQUIDADE",
        "O QUÊ": "Dá MAIS a quem precisa MAIS",
        "PEGADINHA": "Diferente de IGUALDADE (igualdade = todos igual)",
        "EXEMPLO PROVA": "Doente grave recebe MAIS recurso que leve"
      },
      {
        "Item": "INTEGRALIDADE",
        "O QUÊ": "Cuida de TUDO (promoção, prevenção, tratamento, reabilitação)",
        "PEGADINHA": "Não é só 'curar doença' = é 'cuidar de saúde inteira'",
        "EXEMPLO PROVA": "Vacinação (promoção) + antibiótico (tratamento) + fisio (reabilitação)"
      },
      {
        "Item": "DESCENTRALIZAÇÃO",
        "O QUÊ": "Poder dividido entre MS/SES/SMS",
        "PEGADINHA": "MS não executa tudo. MS regula. Município executa.",
        "EXEMPLO PROVA": "Município faz ESF = descentralização funcionando"
      },
      {
        "Item": "REGIONALIZAÇÃO",
        "O QUÊ": "Cada hospital serve uma REGIÃO",
        "PEGADINHA": "Não todo mundo vai ao hospital central = desconcentra atendimento",
        "EXEMPLO PROVA": "Hospital do bairro A não serve bairro B"
      },
      {
        "Item": "HIERARQUIZAÇÃO",
        "O QUÊ": "3 níveis: básica → média → alta complexidade",
        "PEGADINHA": "Paciente começa na básica, sobe se precisa. Não vai direto para UTI.",
        "EXEMPLO PROVA": "Tosse → consultório. Se tuberculose → hospital. Se complicação → UTI."
      }
    ]
  },

  provenTricks: [
    "🎯 TRUQUE 1 - LEI 8.080 vs 8.142: Se fala 'participação social/conselho' = 8.142. Se fala 'universalidade/estrutura' = 8.080",
    "🎯 TRUQUE 2 - UNIVERSALIDADE vs EQUIDADE: Pergunta 'todo mundo igual?' = universalidade. 'Dá mais a quem precisa?' = equidade",
    "🎯 TRUQUE 3 - HIERARQUIZAÇÃO: Paciente COMEÇA na básica. Se pergunta 'pode ir direto para UTI?' = NÃO, violaria hierarquização",
    "🎯 TRUQUE 4 - DESCENTRALIZAÇÃO: Se pergunta 'MS executa saúde municipal?' = NÃO! MS regula, município executa",
    "🎯 TRUQUE 5 - ESTRUTURA: FNS (MS) → FES (SES) → FMS (SMS) = cascata de dinheiro de cima para baixo",
    "🎯 TRUQUE 6 - PARTICIPAÇÃO: Conselho é DELIBERATIVO (decide). Conferência é consultiva (sugere). Diferença enorme!"
  ],

  questionsResolved: [
    {
      number: 1,
      text: `Qual afirmação está de acordo com o princípio de UNIVERSALIDADE do SUS?

      A) Apenas trabalhadores formais têm direito ao SUS
      B) Todo brasileiro, independente de renda, tem direito aos serviços do SUS
      C) O SUS oferece recursos de forma igual para todos os pacientes
      D) O SUS atende primeiro os pacientes que pagam mais
      E) O SUS é apenas para pessoas que não têm plano de saúde`,
      
      options: [
        "Apenas trabalhadores formais têm direito",
        "Todo brasileiro, independente de renda, tem direito",
        "Oferece recursos de forma igual para todos",
        "Atende primeiro quem paga mais",
        "É apenas para quem não tem plano"
      ],
      correctAnswer: "Todo brasileiro, independente de renda, tem direito",
      whyCorrect: `UNIVERSALIDADE = "para TODOS, SEM EXCEÇÃO"
      
      ANÁLISE:
      A) "Apenas trabalhadores" = FALSO (universalidade = TODOS) ❌
      B) "Todo brasileiro" = CORRETO (independente de tudo) ✓
      C) "Igualdade" = CONFUNDE com EQUIDADE (não é a mesma coisa)
      D) "Quem paga mais" = SUS é GRATUITO (contra universalidade) ❌
      E) "Apenas sem plano" = FALSO (SUS é para TODOS mesmo com plano) ❌
      
      MACETE: UNIVERSALIDADE = TODOS. Ponto. Ninguém fica de fora.`,
      
      strategy: "UNIVERSALIDADE: Se fala 'para TODOS' ou 'sem exceção' ou 'gratuito' = provavelmente correto. Se restringe a grupo = ERRADO."
    },

    {
      number: 2,
      text: `A diferença entre EQUIDADE e UNIVERSALIDADE é que:

      A) Universalidade é aplicada em hospitais, equidade em postos de saúde
      B) Universalidade significa acesso para todos; equidade reconhece diferentes necessidades
      C) Equidade beneficia ricos, universalidade beneficia pobres
      D) São a mesma coisa, apenas nomes diferentes
      E) Universalidade é Lei 8.080, equidade é Lei 8.142`,
      
      options: [
        "Universalidade em hospitais, equidade em postos",
        "Universalidade=acesso para todos; equidade=reconhece necessidades",
        "Equidade beneficia ricos, universalidade pobres",
        "São a mesma coisa",
        "Universalidade é 8.080, equidade é 8.142"
      ],
      correctAnswer: "Universalidade=acesso para todos; equidade=reconhece necessidades",
      whyCorrect: `CONCEITOS CRÍTICOS:
      
      UNIVERSALIDADE: TODOS têm direito (quantidade = igual para todos? NÃO!)
      EQUIDADE: Quantidade DIFERENTE conforme necessidade (quem precisa mais, recebe mais)
      
      EXEMPLO PRÁTICO:
      • UNIVERSALIDADE: "Pobre E rico têm direito ao SUS" ✓
      • EQUIDADE: "Doente GRAVE recebe mais recurso que leve" ✓
      • COMBINADAS: "Todo mundo tem direito (universal), MAS quem precisa mais recebe mais (equitativo)"
      
      TESTE DE PROVA:
      A) Fala de "locais" = ERRADO (princípios não dependem de local) ❌
      B) Diferencia conceitos = CORRETO ✓
      C) Favorece grupo = ERRADO (equidade é neutra, ajuda precisa) ❌
      D) Iguais = FALSO (são conceitos diferentes) ❌
      E) Confunde 8.080/8.142 = ERRADO (ambos estão na 8.080) ❌`,
      
      strategy: "EQUIDADE vs UNIVERSALIDADE: Universalidade=quem pode acessar. Equidade=quanto recebe. Diferentes dimensões!"
    },

    {
      number: 3,
      text: `Em relação à DESCENTRALIZAÇÃO no SUS, qual afirmativa está CORRETA?

      A) O Ministério da Saúde executa todos os serviços de saúde do Brasil
      B) A Secretaria Municipal é responsável apenas por repassar dinheiro
      C) Cada município é responsável pela organização dos serviços de saúde em seu território
      D) Os estados centralizam todo o poder decisório do SUS
      E) A descentralização foi abolida pela Lei 8.142`,
      
      options: [
        "MS executa todos os serviços",
        "SMS é responsável apenas por repassar dinheiro",
        "Cada município organiza serviços em seu território",
        "Estados centralizam todo poder",
        "Foi abolida pela Lei 8.142"
      ],
      correctAnswer: "Cada município organiza serviços em seu território",
      whyCorrect: `DESCENTRALIZAÇÃO = poder DIVIDIDO entre 3 esferas
      
      ERRO COMUM: Confunde descentralização com "sem hierarquia"
      VERDADE: Descentralização = "cada esfera faz sua parte"
      
      FUNÇÕES:
      • MS (Ministério) = REGULAMENTA (faz política)
      • SES (Estado) = COORDENA (repassa à município)
      • SMS (Município) = EXECUTA (faz de verdade)
      
      ANÁLISE:
      A) "MS executa tudo" = CENTRALIZAÇÃO (oposto de descentralização) ❌
      B) "SMS só repassa" = FALSO (SMS executa também) ❌
      C) "Município organiza" = CORRETO (é a definição de descentralização) ✓
      D) "Estado centraliza" = NÃO (poder dividido) ❌
      E) "Foi abolida" = FALSO (Lei 8.142 REFORÇA participação, não muda desc) ❌
      
      MNEMÔNICO: "Descentralização = MS regula, SES coordena, SMS executa"`,
      
      strategy: "DESCENTRALIZAÇÃO: Procure por 'executar/organizar no município' = provavelmente correto. Se fala 'MS faz tudo' = ERRADO."
    },

    {
      number: 4,
      text: `Um paciente chega ao PSF (Postos de Saúde da Família) com dor no peito. Após avaliação, o ACS identifica que pode ser infarto. Qual é o próximo nível de atenção que esse paciente deve ser encaminhado, de acordo com a HIERARQUIZAÇÃO do SUS?

      A) Direto para UTI (nível 3)
      B) Para a Atenção Básica resolver (nível 1)
      C) Para Média Complexidade (nível 2)
      D) Para um hospital particular
      E) Não precisa ser encaminhado`,
      
      options: [
        "Direto para UTI (nível 3)",
        "Para Atenção Básica resolver (nível 1)",
        "Para Média Complexidade (nível 2)",
        "Para hospital particular",
        "Não precisa ser encaminhado"
      ],
      correctAnswer: "Para Média Complexidade (nível 2)",
      whyCorrect: `HIERARQUIZAÇÃO = fluxo de baixa para alta complexidade
      
      REGRA BÁSICA:
      • Nível 1 (Atenção Básica) = resolve 80% dos problemas
      • Se não resolve → vai para Nível 2 (Média Complexidade)
      • Se não resolve → vai para Nível 3 (Alta Complexidade)
      
      APLICAÇÃO:
      • PSF é NÍVEL 1 ✓
      • Paciente tem sintoma GRAVE (infarto possível)
      • Básica NÃO RESOLVE caso grave = encaminha
      • Destino = NÍVEL 2 (hospital pequeno/especialista) ou NÍVEL 3 se muito grave
      • Como é primeiro encaminhamento de caso agudo = Nível 2 inicialmente
      
      ANÁLISE:
      A) "Direto para UTI" = PULARIA níveis (hierarquização não permite) ❌
      B) "Resolver na básica" = Infarto não resolve em PSF ❌
      C) "Média complexidade" = CORRETO (fluxo respeitado) ✓
      D) "Particular" = Sistema público é SUS ❌
      E) "Não encaminha" = Grave demanda encaminhamento ❌`,
      
      strategy: "HIERARQUIZAÇÃO: Começa na básica. Se grave, sobe nível. Nunca pula níveis. Se pergunta 'direto para UTI' = ERRADO."
    }
  ],

  cheatSheet: `
════════════════════════════════════════════════════════════════════
SUS - 1 PÁGINA DE MEMORIZAÇÃO
════════════════════════════════════════════════════════════════════

🔷 3 PRINCÍPIOS (Lei 8.080):
   • UNIVERSALIDADE: TODOS têm direito (sem exceção, gratuito)
   • EQUIDADE: Quem precisa MAIS recebe MAIS (não é igual para todos)
   • INTEGRALIDADE: Cuida de TUDO (promoção, prevenção, tratamento, reabilitação)

🔷 3 DIRETRIZES (Lei 8.080):
   • DESCENTRALIZAÇÃO: Poder dividido MS (regula) → SES (coordena) → SMS (executa)
   • REGIONALIZAÇÃO: Cada hospital serve uma região (não todo Brasil)
   • HIERARQUIZAÇÃO: 3 níveis (1=básica, 2=média, 3=alta) - começa na básica

🔷 FINANCIAMENTO (cascata de dinheiro):
   FNS (MS) → FES (SES) → FMS (SMS)

🔷 3 NÍVEIS DE COMPLEXIDADE:
   → Nível 1 (Básica): PSF, posto - resolve 80%
   → Nível 2 (Média): Hospital pequeno, especialista
   → Nível 3 (Alta): UTI, cirurgia complexa
   REGRA: Começa na básica, sobe se precisa

🔷 LEI 8.080 vs 8.142:
   → 8.080 = O QUÊ é SUS (estrutura, princípios, diretrizes)
   → 8.142 = QUEM participa (conselhos deliberativos, conferências)
   MNEMÔNICO: 8.080 = O-QUÊ | 8.142 = QUEM

🔷 PARTICIPAÇÃO SOCIAL (Lei 8.142):
   → Conselho de Saúde: DELIBERATIVO (decide). Composição: 50% população, 25% profissional, 25% gestor
   → Conferência: CONSULTIVA (opina, sugere)

🔷 ESTRUTURA ADMINISTRATIVA:
   • MS (Ministério) = política nacional, regula
   • SES (Secretaria Estadual) = coordena estado
   • SMS (Secretaria Municipal) = executa no município

════════════════════════════════════════════════════════════════════
`
};

// EXPORTAÇÕES
export default {
  coesaoCoerenciaMaterial,
  susFundamentosMaterial
};
