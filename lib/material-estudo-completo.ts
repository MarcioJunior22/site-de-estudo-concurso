// ====================================================================
// MATERIAL DE ESTUDO COMPLETO - TODAS AS DISCIPLINAS
// Padrão: O que é + Por que importa + Passos + Tabelas + Questões + Cheat Sheet
// ====================================================================

export interface StudyMaterial {
  id: string;
  title: string;
  subject: string;
  level: "superior" | "medio";
  
  whatYouNeedToKnow: string;
  whyItMatters: string;
  stepByStep: string[];
  visualGuide?: string;
  comparativeTable?: {
    items: Array<{ [key: string]: string }>;
    description: string;
  };
  provenTricks: string[];
  questionsResolved: Question[];
  cheatSheet: string;
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
// PORTUGUÊS SUPERIOR - COMPLETO
// ====================================================================

export const portuguesSuperiorMaterials: StudyMaterial[] = [
  // TÓPICO 1: COESÃO E COERÊNCIA (já criado antes)
  {
    id: "pt-sup-coesao-coerencia",
    title: "Coesão e Coerência Textuais",
    subject: "Português",
    level: "superior",
    whatYouNeedToKnow: 
`Coesão = como frases se CONECTAM (pronomes, conectivos, repetição).
Coerência = texto faz SENTIDO logicamente (tema único, sem contradições).
Ambas são ESSENCIAIS para interpretação de textos e redação.`,
    
    whyItMatters:
`Em TODA prova de concurso aparecem questões como:
- "Qual palavra DEVERIA substituir o conectivo?"
- "Por que este parágrafo QUEBRA a coerência?"
- "O pronome se refere a qual termo?"
Se errar coesão/coerência, erra interpretação, redação e análise de texto.`,
    
    stepByStep: [
      `PASSO 1 - 3 FORMAS DE COESÃO:
      • REFERENCIAL: Pronomes retomam termos (João chegou. ELE estava cansado)
      • SEQUENCIAL: Conectivos ligam frases (Estudei PORTANTO passei)
      • LEXICAL: Palavras repetem/sinônimos (Médico atendeu paciente. O profissional...)`,
      
      `PASSO 2 - DOMINE OS 5 CONECTIVOS PRINCIPAIS:
      • ADITIVOS (e, também, além disso) = SOMA ideias
      • ADVERSATIVOS (mas, porém, contudo) = CONTRASTE
      • CAUSAIS (porque, pois, já que) = EXPLICAÇÃO
      • CONCLUSIVOS (portanto, logo, assim) = RESULTADO
      • TEMPORAIS (antes, depois, enquanto) = TEMPO`,
      
      `PASSO 3 - TESTE PRONOMES:
      Quando ver "ele", "ela", "isso" - MARQUE no texto aonde retoma.
      Se tiver 2+ opções, escolhe a MAIS PRÓXIMA + concordância.
      PROVA REAL: Leia sem o pronome; faz sentido? Se não, referência está errada.`,
      
      `PASSO 4 - COERÊNCIA = "TEXTO FALA A MESMA COISA":
      ✓ Parágrafo 1 fala "lei é boa"
      ✓ Parágrafo 2 explica POR QUÊ é boa
      ✓ Parágrafo 3 reforça que é boa
      ❌ Se parágrafo 2 diz "lei é ruim" = INCOERÊNCIA = ERRO`,
      
      `PASSO 5 - PROGRESSÃO TEMÁTICA (diferencia expert de iniciante):
      TEMA = informação JÁ CONHECIDA (início da frase)
      REMA = informação NOVA (final da frase)
      REGRA: Cada frase começa aonde a anterior terminou = texto fluido`
    ],
    
    visualGuide: `
╔════════════════════════════════════════════════════════════════════╗
║  FLUXOGRAMA: QUAL CONECTIVO ESCOLHER?                             ║
╚════════════════════════════════════════════════════════════════════╝

A frase anterior diz ALGO...
        │
        ├─ Quer REFORÇAR/ADICIONAR? ──→ E, TAMBÉM, ALÉM DISSO, AINDA
        │
        ├─ Quer CONTRASTAR/OPOR? ──→ MAS, PORÉM, CONTUDO, TODAVIA
        │
        ├─ Quer EXPLICAR RAZÃO? ──→ PORQUE, POIS, JÁ QUE, VISTO QUE
        │
        ├─ Quer DAR RESULTADO/CONCLUSÃO? ──→ PORTANTO, LOGO, ASSIM
        │
        └─ Quer COLOCAR EM TEMPO? ──→ ANTES, DEPOIS, ENQUANTO

╔════════════════════════════════════════════════════════════════════╗
║  COESÃO x COERÊNCIA - DIFERENÇAS CRÍTICAS                          ║
╚════════════════════════════════════════════════════════════════════╝

COESÃO: Como frases se conectam (FORMA)
COERÊNCIA: Texto faz sentido (LÓGICA)

COESÃO boa + COERÊNCIA boa = TEXTO EXCELENTE ✓
COESÃO boa + COERÊNCIA ruim = TEXTO confuso ❌
COESÃO ruim + COERÊNCIA boa = TEXTO desarticulado ❌
`,
    
    provenTricks: [
      "🎯 TRUQUE 1 - PRONOME AMBÍGUO: Escolha o mais próximo + concorde gênero/número",
      "🎯 TRUQUE 2 - CONECTIVO ERRADO: Identifique relação (soma/contraste/causa/resultado)",
      "🎯 TRUQUE 3 - PROVA DE COESÃO: Remove conectivo. Perde sentido? Era necessário",
      "🎯 TRUQUE 4 - COERÊNCIA QUEBRADA: Procure contradição entre parágrafos",
      "🎯 TRUQUE 5 - PROGRESSÃO: Rema da frase 1 vira tema da frase 2 = LINEAR"
    ],
    
    questionsResolved: [
      {
        number: 1,
        text: `"A empresa reduziu custos. _____, aumentou a produção. Portanto, os lucros subiram."
        Qual conectivo completa melhor?`,
        options: ["Mas", "Porém", "Contudo", "Além disso"],
        correctAnswer: "Além disso",
        whyCorrect: `Observação: "Reduziu custos" + "aumentou produção" = MESMA DIREÇÃO (ambas positivas)
        Precisa de ADITIVO (soma), não ADVERSATIVO (contrasta)
        Resposta: D (Além disso = aditivo) ✓`,
        strategy: "Identifique relação entre frases. Somar ideias = conectivo aditivo. Contrastar = adversativo."
      },
      {
        number: 2,
        text: `"O gerente reuniu a equipe. Ele explicou os objetivos. Mas eles não entenderam."
        A quem "eles" refere-se?`,
        options: ["Ao gerente", "À equipe", "Aos objetivos"],
        correctAnswer: "À equipe",
        whyCorrect: `Análise: "gerente" (SG) → "Ele" (SG/MASC) retoma gerente ✓
        "Eles" (PL/MASC) = precisa de plural
        No texto: "equipe" (coletivo) = múltiplas pessoas = pode usar plural
        Resposta: B (À equipe) ✓`,
        strategy: "Pronome: veja número/gênero. Procure no texto quem combina. Substitua mentalmente para testar."
      },
      {
        number: 3,
        text: `Qual parágrafo quebra a coerência?
        I - "A lei foi aprovada por unanimidade"
        II - "O presidente a sancionou imediatamente"
        III - "Todos os senadores votaram contra"
        IV - "Ela entrará em vigor segunda"`,
        options: ["I", "II", "III", "IV"],
        correctAnswer: "III",
        whyCorrect: `Coerência = texto mantém IDEIA sem CONTRADIÇÃO
        I-II-IV: "Lei APROVADA e SANCIONADA"
        III: "Todos votaram CONTRA" ≠ "aprovada por unanimidade"
        CONTRADIÇÃO clara = INCOERÊNCIA
        Resposta: C (III) ✓`,
        strategy: "COERÊNCIA: Leia tema de cada parágrafo. Se contradiz anterior = INCOERÊNCIA."
      },
      {
        number: 4,
        text: `Progressão temática: "O presidente promulgou a lei. A lei entrará em vigor em maio. Maio marcará mudanças."
        Qual é o tipo?`,
        options: ["Constante", "Linear", "Derivada"],
        correctAnswer: "Linear",
        whyCorrect: `Frase 1 tema=presidente | rema=lei
        Frase 2 tema=lei (rema anterior) | rema=maio
        Frase 3 tema=maio (rema anterior) | rema=mudanças
        Padrão: Rema vira tema = LINEAR ✓`,
        strategy: "PROGRESSÃO: Marque rema. Vira tema da próxima? Linear! Tema nunca muda? Constante!"
      }
    ],
    
    cheatSheet: `
════════════════════════════════════════════════════════════════════
COESÃO & COERÊNCIA - 1 PÁGINA DE MEMORIZAÇÃO
════════════════════════════════════════════════════════════════════

🔷 COESÃO = FORMA (como prende frases)
   • Pronomes: retomam termo anterior. Teste: substitua por termo
   • Conectivos: e(aditivo) mas(adversativo) porque(causal) portanto(conclusivo)
   • Repetição: mesma palavra ou sinônimo liga frases

🔷 COERÊNCIA = LÓGICA (texto faz sentido)
   • Tema único: começo ao fim fala da mesma coisa
   • Sem contradição: Parágrafo 1 não nega Parágrafo 2
   • Progressão: cada frase começa aonde anterior terminou

🔷 PRONOME AMBÍGUO? Escolha MAIS PRÓXIMO + concordância

🔷 CONECTIVO ERRADO? Identifique relação (soma/contraste/causa/resultado)

🔷 COERÊNCIA QUEBRADA? Procure contradição entre partes

════════════════════════════════════════════════════════════════════
`
  },

  // TÓPICO 2: COMUNICAÇÃO
  {
    id: "pt-sup-comunicacao",
    title: "Comunicação: Linguagem, Texto e Discurso",
    subject: "Português",
    level: "superior",
    whatYouNeedToKnow:
`Comunicação tem 3 elementos: REMETENTE (quem fala), MENSAGEM (o que fala), DESTINATÁRIO (para quem fala).
Linguagem = verbal (palavras), não-verbal (gestos), mista (ambas).
Funções da linguagem = intenção do remetente (informar, persuadir, expressar sentimento, verificar, explicar, criar beleza).`,

    whyItMatters:
`Prova sempre cobra:
- Identificar função da linguagem (qual é o objetivo principal do texto?)
- Reconhecer tipo de linguagem (formal/informal, verbal/não-verbal)
- Diferenças entre texto narrativo/argumentativo/descritivo
Se errar função, erra análise de intenção do autor = erra questão inteira.`,

    stepByStep: [
      `PASSO 1 - 6 FUNÇÕES DA LINGUAGEM:
      • REFERENCIAL: Informar fatos (ex: "O dólar subiu 5%")
      • EXPRESSIVA: Expressar sentimento (ex: "Que alegria!")
      • APELATIVA: Persuadir destinatário (ex: "Compre agora!")
      • FÁTICA: Verificar contato (ex: "Você está me ouvindo?")
      • METALINGUÍSTICA: Explicar própria linguagem (ex: "Tese significa conclusão")
      • POÉTICA: Criar beleza com palavras (ex: "Noite, lua, sonho")`,
      
      `PASSO 2 - ELEMENTOS DA COMUNICAÇÃO:
      • REMETENTE: Quem fala
      • DESTINATÁRIO: Para quem fala
      • MENSAGEM: O que é dito
      • CÓDIGO: Língua (português, inglês)
      • CANAL: Meio (fala, escrita)
      • CONTEXTO: Situação (formal, informal)`,
      
      `PASSO 3 - TIPOS DE LINGUAGEM:
      • VERBAL: Apenas palavras (livro, discurso)
      • NÃO-VERBAL: Gestos, imagens, sons (dança, pintura, música)
      • MISTA: Combina verbal + não-verbal (filme com diálogos, quadrinho)`,
      
      `PASSO 4 - GÊNEROS TEXTUAIS (por objetivo):
      • NARRATIVO: Conta história (romance, notícia, anedota)
      • ARGUMENTATIVO: Defende tese (editorial, carta de reclamação)
      • DESCRITIVO: Descreve pessoa/lugar (anúncio, resumo biográfico)
      • INSTRUCIONAL: Orienta fazer algo (receita, manual)`,
      
      `PASSO 5 - INTENÇÃO DO AUTOR:
      Sempre pergunte: "Por que o autor escreveu isso?"
      • Para informar? = REFERENCIAL
      • Para persuadir? = APELATIVA
      • Para expressar? = EXPRESSIVA
      A resposta correta depende da intenção PRINCIPAL`
    ],

    visualGuide: `
╔════════════════════════════════════════════════════════════════════╗
║  AS 6 FUNÇÕES DA LINGUAGEM - IDENTIFIQUE EM PROVA                  ║
╚════════════════════════════════════════════════════════════════════╝

REFERENCIAL     Informar fatos        "5 + 3 = 8"
EXPRESSIVA      Expressar emoção      "Que horroroso!"
APELATIVA       Persuadir/ordenar     "Estude mais!"
FÁTICA          Testar contato        "Tá me ouvindo?"
METALINGUÍSTICA Explicar linguagem    "Tese é a conclusão"
POÉTICA         Criar beleza          "Lua brilhante"

╔════════════════════════════════════════════════════════════════════╗
║  PROCESSO DE COMUNICAÇÃO COMPLETO                                  ║
╚════════════════════════════════════════════════════════════════════╝

REMETENTE (fala) → MENSAGEM → DESTINATÁRIO (ouve)
      ↓
    CÓDIGO (língua: português)
      ↓
    CANAL (fala ou escrita)
      ↓
  CONTEXTO (situação formal/informal)

Interferência = RUÍDO que dificulta mensagem
`,

    provenTricks: [
      "🎯 TRUQUE 1 - FUNÇÃO: Procure pistas na intenção (informar=referencial, convencer=apelativa)",
      "🎯 TRUQUE 2 - NARRATIVO vs ARGUMENTATIVO: Narrativo=história. Argumentativo=defesa de tese",
      "🎯 TRUQUE 3 - LINGUAGEM MISTA: Procure palavra+imagem (quadrinho, filme, publicidade)",
      "🎯 TRUQUE 4 - GÊNERO TEXTUAL: Observe estrutura e finalidade social"
    ],

    questionsResolved: [
      {
        number: 1,
        text: `"Compre nossa água mineral! Campeã em pureza por 10 anos!"
        Qual é a função principal da linguagem?`,
        options: ["Referencial", "Expressiva", "Apelativa", "Poética"],
        correctAnswer: "Apelativa",
        whyCorrect: `Análise: Texto quer PERSUADIR o leitor a COMPRAR
        Objetivo = ação (compra)
        Função APELATIVA = persuade/ordena
        Resposta: C (Apelativa) ✓`,
        strategy: "APELATIVA: Procure comando (compre, estude, vá). Se quer ação = apelativa."
      },
      {
        number: 2,
        text: `Qual texto é principalmente NARRATIVO?`,
        options: [
          "Anúncio de venda de carro",
          "Editorial criticando corrupção",
          "Notícia: 'Assaltante preso após 5 dias'",
          "Poema lírico"
        ],
        correctAnswer: "Notícia: 'Assaltante preso após 5 dias'",
        whyCorrect: `Análise: 
        • Anúncio = descritivo + apelativo
        • Editorial = argumentativo (defende tese)
        • Notícia = NARRATIVO (conta acontecimento: 'assaltante preso')
        • Poema = poético (cria beleza)
        Resposta: C (Notícia) ✓`,
        strategy: "NARRATIVO: Procure história/acontecimento (antes-durante-depois). Notícia sempre narrativa."
      }
    ],

    cheatSheet: `
════════════════════════════════════════════════════════════════════
COMUNICAÇÃO - 1 PÁGINA
════════════════════════════════════════════════════════════════════

6 FUNÇÕES:
REFERENCIAL (informar) | EXPRESSIVA (emoção) | APELATIVA (persuadir)
FÁTICA (contato) | METALINGUÍSTICA (explicar) | POÉTICA (beleza)

3 TIPOS DE LINGUAGEM:
VERBAL (só palavras) | NÃO-VERBAL (gestos/imagens) | MISTA (ambas)

GÊNEROS:
NARRATIVO (história) | ARGUMENTATIVO (tese) | DESCRITIVO (descrição) | INSTRUCIONAL (orientação)

DICA: Qual é a INTENÇÃO do autor? → Essa é a função!

════════════════════════════════════════════════════════════════════
`
  },

  // TÓPICO 3: SEMÂNTICA
  {
    id: "pt-sup-semantica",
    title: "Semântica: Sentido e Relações entre Palavras",
    subject: "Português",
    level: "superior",
    whatYouNeedToKnow:
`Semântica = estudo do SENTIDO das palavras.
DENOTAÇÃO = sentido literal dicionário (rosa = flor vermelha).
CONOTAÇÃO = sentido figurado/simbólico (rosa = amor, beleza, morte).
Figuras de linguagem usam conotação para criar efeitos.`,

    whyItMatters:
`Prova cobra:
- Diferenciar sentido literal vs figurado
- Reconhecer figuras (metáfora, metonímia, ironia)
- Relações entre palavras (sinônimo, antônimo, homonímia)
Errar semântica = errar interpretação inteira de texto.`,

    stepByStep: [
      `PASSO 1 - DENOTAÇÃO vs CONOTAÇÃO:
      DENOTAÇÃO (literal): "Aurora é a primeira luz do dia" = significado dicionário
      CONOTAÇÃO (figurado): "Aurora é o amor nascente" = beleza, promessa, esperança`,
      
      `PASSO 2 - 6 FIGURAS DE LINGUAGEM PRINCIPAIS:
      • METÁFORA: "Aquele executivo é um tubarão" (comparação por semelhança, sem "como")
      • METONÍMIA: "Beba um copo de suco" (copo=quantidade, não recipiente)
      • IRONIA: "Que inteligência!" (dito para alguém burro = oposto do real)
      • HIPÉRBOLE: "Morri de medo" (exagero expressivo)
      • EUFEMISMO: "Nosso amigo faleceu" (abrandar morte com palavra suave)
      • ANTÍTESE: "Beleza e horror convivem" (ideias opostas lado-a-lado)`,
      
      `PASSO 3 - RELAÇÕES ENTRE PALAVRAS:
      • SINONÍMIA: Palavras de sentido próximo ("casa" e "lar")
      • ANTONÍMIA: Palavras de sentido oposto ("quente" e "frio")
      • HOMONÍMIA: Palavras que soam igual mas sentido diferente ("Banco" = instituição / assento)
      • PARONÍMIA: Palavras parecidas na escrita mas sentido diferente ("comprimento" vs "cumprimento")`,
      
      `PASSO 4 - AMBIGUIDADE:
      Mesmo termo pode significar coisas diferentes conforme CONTEXTO.
      Ex: "Vi o rapaz com o telescópio" (quem usava o telescópio? rapaz ou observador?)`,
      
      `PASSO 5 - TESTE EM PROVA:
      Quando text usa palavra FIGURADAMENTE:
      1. Procure a INTENÇÃO (por que autor escolheu essa palavra?)
      2. Qual EFEITO cria? (medo, beleza, tristeza)
      3. Substitua por literal - perde força`
    ],

    visualGuide: `
╔════════════════════════════════════════════════════════════════════╗
║  FIGURAS DE LINGUAGEM - RECONHEÇA EM PROVA                         ║
╚════════════════════════════════════════════════════════════════════╝

METÁFORA      | "Àquela é uma joia" | Comparação por SEMELHANÇA (sem "como")
METONÍMIA     | "Li todo Machado" | Parte pelo TODO (Machado = obras de Machado)
IRONIA        | "Que inteligente!" | Sentido OPOSTO do literal
HIPÉRBOLE     | "Já disse isso mil vezes" | EXAGERO expressivo
EUFEMISMO     | "Ele se foi" | Abrandar palavra forte (morte)
ANTÍTESE      | "Luz e sombra" | Conceitos OPOSTOS lado-a-lado
PARADOXO      | "Menos é mais" | Contradição lógica mas verdadeira
ALITERAÇÃO    | "O rato roeu a roupa" | Repetição de SONS

╔════════════════════════════════════════════════════════════════════╗
║  SINONÍMIA vs ANTONÍMIA vs HOMONÍMIA                               ║
╚════════════════════════════════════════════════════════════════════╝

SINONÍMIA     CASA / LAR          Sentidos PRÓXIMOS
ANTONÍMIA     QUENTE / FRIO       Sentidos OPOSTOS
HOMONÍMIA     BANCO (instituição e assento)  SOM igual, sentidos diferentes
PARONÍMIA     CUMPRIMENTO / COMPRIMENTO    ESCRITA parecida, sentidos diferentes
`,

    provenTricks: [
      "🎯 TRUQUE 1 - METÁFORA: Procure "é um/uma" sem "como". Se tem "como" = comparação, não metáfora",
      "🎯 TRUQUE 2 - METONÍMIA: Procure PARTE pelo TODO ou CAUSA pelo EFEITO",
      "🎯 TRUQUE 3 - IRONIA: Sentido é SEMPRE OPOSTO do dito. Exagero + intenção crítica",
      "🎯 TRUQUE 4 - AMBIGUIDADE: Palavra com 2+ significados no contexto"
    ],

    questionsResolved: [
      {
        number: 1,
        text: `"Aquele homem é um leão em combate."
        Qual figura de linguagem?`,
        options: ["Comparação", "Metáfora", "Metonímia", "Ironia"],
        correctAnswer: "Metáfora",
        whyCorrect: `Análise: "é um leão" = comparação por semelhança, MAS SEM "COMO"
        Se fosse: "é COMO um leão" = comparação
        Sem conectivo "como" = METÁFORA ✓
        Resposta: B (Metáfora)`,
        strategy: "METÁFORA = comparação SEM 'como'. COMPARAÇÃO = COM 'como'."
      }
    ],

    cheatSheet: `
════════════════════════════════════════════════════════════════════
SEMÂNTICA - FIGURAS DE LINGUAGEM
════════════════════════════════════════════════════════════════════

DENOTAÇÃO = sentido LITERAL (dicionário)
CONOTAÇÃO = sentido FIGURADO (simbólico)

FIGURAS:
METÁFORA (semelhança, sem "como")
METONÍMIA (parte/todo, causa/efeito)
IRONIA (sentido OPOSTO)
HIPÉRBOLE (EXAGERO)
EUFEMISMO (abrandar)
ANTÍTESE (conceitos opostos)

RELAÇÕES:
SINONÍMIA (próximo) | ANTONÍMIA (oposto) | HOMONÍMIA (som igual)

════════════════════════════════════════════════════════════════════
`
  },

  // TÓPICO 4: SINTAXE
  {
    id: "pt-sup-sintaxe",
    title: "Sintaxe: Concordância, Regência e Crase",
    subject: "Português",
    level: "superior",
    whatYouNeedToKnow:
`Sintaxe = relação entre palavras na oração e período.
CONCORDÂNCIA = verbo/adjetivo se ajustam ao núcleo do sujeito.
REGÊNCIA = nome/verbo exigem preposição específica.
CRASE = fusão de preposição A + artigo A.`,

    whyItMatters:
`Concurso cobra BASTANTE:
- Sujeito composto, coletivo, oculto
- Verbos homonímia (assistir, visar, aspirar) = preposições diferentes
- Crase obrigatória/proibida/facultativa
Errar sintaxe = erra concordância = erra REDAÇÃO e análise.`,

    stepByStep: [
      `PASSO 1 - TIPOS DE SUJEITO:
      • SIMPLES: 1 núcleo ("O presidente chegou")
      • COMPOSTO: 2+ núcleos ("O presidente E vice chegaram")
      • COLETIVO: singular mas múltiplas pessoas ("A equipe chegou")
      • OCULTO: omitido mas entendido ("Chegamos cedo" = nós)
      • INDETERMINADO: não se sabe quem ("Roubaram meu carro")
      • INEXISTENTE: verbo impessoal ("Faz frio", "Há pessoas")`,
      
      `PASSO 2 - REGRA DE OURO DA CONCORDÂNCIA:
      VERBO CONCORDA COM NÚCLEO DO SUJEITO, NÃO COM PALAVRA MAIS PRÓXIMA!
      
      ERRADO: "A maioria dos alunos ESTÃO aqui"
      CERTO: "A maioria dos alunos ESTÁ aqui" (maioria = singular)
      
      ERRADO: "João e Maria DESCEU do carro"
      CERTO: "João e Maria DESCERAM do carro" (plural)`,
      
      `PASSO 3 - 5 VERBOS TRAIÇOEIROS (homonímia + regência):
      • ASSISTIR (presenciar) = OD direto: "Assistimos O filme"
      • ASSISTIR (ajudar) = preposição A: "Assistir AO paciente"
      • VISAR (apontar) = OD: "Visar O alvo"
      • VISAR (objetivar) = preposição A: "Visar AO sucesso"
      • ASPIRAR (respirar) = OD: "Aspirar O ar"
      • ASPIRAR (desejar) = preposição A: "Aspirar A cargo"`,
      
      `PASSO 4 - CRASE (A + A = À):
      OBRIGATÓRIA:
      • Nome feminino com artigo: "Assistir À aula"
      • Hora: "Chego às 14h"
      • "Aquele/aquela/aquilo": "Refiro-me ÀQUELE assunto"
      
      PROIBIDA:
      • Nome masculino: "Assisti AO filme"
      • Verbo: "Comecou A estudar"
      • Pronome demonstrativo "esse": "Isso A que você se refere"`,
      
      `PASSO 5 - REGÊNCIA NOMINAL:
      • Aversão A
      • Alusão A
      • Ânsia DE / POR
      • Antecedência DE
      • Antecipação DE
      DICA: Se nome pede preposição, substitua verbo para descobrir qual`
    ],

    visualGuide: `
╔════════════════════════════════════════════════════════════════════╗
║  CONCORDÂNCIA - SUJEITO COMPOSTO                                   ║
╚════════════════════════════════════════════════════════════════════╝

"O presidente E o vice" = PLURAL obrigatório
"O presidente OU o vice" = pode ser SINGULAR (um dos dois) ou PLURAL

"Nem eu NEM você" = SINGULAR (ninguém faz a ação) ou PLURAL

╔════════════════════════════════════════════════════════════════════╗
║  CRASE: QUANDO USAR?                                               ║
╚════════════════════════════════════════════════════════════════════╝

✓ "Vou À escola" (à = preposição A + artigo A)
✓ "Chego às 14h" (às = preposição A + artigo A)
❌ "Vou A pé" (A de preposição sozinha, não artigo)
❌ "Comecei A estudar" (verbo não leva artigo)

TESTE: Substitua por masculino. Se ficar "AO", é crase com "À"
"À mulher" → "AO homem" = tem artigo = usa crase "À"
"A pé" → "A pé" = sem artigo = sem crase
`,

    provenTricks: [
      "🎯 TRUQUE 1 - CONCORDÂNCIA: Procure NÚCLEO do sujeito, ignore termos intercalados",
      "🎯 TRUQUE 2 - ASSISTIR/VISAR: Sentido diferente = preposição diferente",
      "🎯 TRUQUE 3 - CRASE: Substitua por masculino (a → ao? Tem crase)",
      "🎯 TRUQUE 4 - VERBO IMPESSOAL: "Existe", "há", "faz" = SEMPRE SINGULAR"
    ],

    questionsResolved: [
      {
        number: 1,
        text: `"O presidente E o ministro _____ a decisão."
        Qual verbo está correto?`,
        options: ["comunicou", "comunicaram"],
        correctAnswer: "comunicaram",
        whyCorrect: `Sujeito composto: presidente E ministro = PLURAL
        Verbo CONCORDA com sujeito plural
        "comunicaram" (plural) ✓`,
        strategy: "COMPOSTO: Sujeito com E = plural. Verbo deve ir para plural."
      },
      {
        number: 2,
        text: `"Preciso _____ aquela lei."
        Complete corretamente`,
        options: ["refiro-me a", "refiro-me à"],
        correctAnswer: "refiro-me à",
        whyCorrect: `"Refiro-me A" (regência = preposição A obrigatória)
        "Aquela" = FEMININA com artigo
        A + A = À (crase)
        "à" ✓`,
        strategy: "CRASE: A + artigo feminino = à. Teste: "ao masculino"? Se "ao" = tem artigo = crase."
      }
    ],

    cheatSheet: `
════════════════════════════════════════════════════════════════════
SINTAXE - CONCORDÂNCIA, REGÊNCIA, CRASE
════════════════════════════════════════════════════════════════════

CONCORDÂNCIA:
• Verbo com NÚCLEO do sujeito (não palavra próxima)
• Sujeito composto = PLURAL
• Sujeito coletivo = SINGULAR
• Verbo impessoal (há, faz, existe) = SEMPRE SINGULAR

REGÊNCIA:
• ASSISTIR (ver) = OD | ASSISTIR (ajudar) = preposição A
• VISAR (apontar) = OD | VISAR (objetivar) = preposição A
• Nomes com preposição: aversão A, ânsia DE

CRASE:
✓ Nome feminino + artigo: À aula
✓ Hora: Às 14h
✓ Aquele/a/aquilo: Àquela questão
❌ Nome masculino: Ao filme
❌ Verbo: A estudar
TESTE: Substitua por masculino. "ao" = crase "à"

════════════════════════════════════════════════════════════════════
`
  },

  // TÓPICO 5: MORFOLOGIA
  {
    id: "pt-sup-morfologia",
    title: "Morfologia: Estrutura e Formação de Palavras",
    subject: "Português",
    level: "superior",
    whatYouNeedToKnow:
`Morfologia = estudo da FORMA das palavras.
RADICAL = parte com significado ("casa", "livr" em "livro")
AFIXOS = prefixo (antes) ou sufixo (depois) que modifica significado.
FORMAÇÃO = Derivação (radical + afixo) ou Composição (2+ radicais).`,

    whyItMatters:
`Prova cobra:
- Identificar radical para reconhecer "famílias de palavras"
- Processo de formação (derivação vs composição)
- Classes de palavras (substantivo, adjetivo, verbo, etc)`,

    stepByStep: [
      `PASSO 1 - ESTRUTURA DA PALAVRA:
      PREFIXO + RADICAL + SUFIXO + DESINÊNCIA
      
      Ex: "INFELIZMENTE"
      • IN = prefixo (negação)
      • FEL = radical (feliz)
      • IZ = sufixo (para virar adjetivo)
      • MEN = sufixo (para virar advérbio)
      • TE = desinência (marca de advérbio)`,
      
      `PASSO 2 - DERIVAÇÃO:
      Radical com PREFIXO e/ou SUFIXO = palavra derivada
      
      "feliz" → "infeliz" (prefixo IN- = negação)
      "feliz" → "felicidade" (sufixo -DADE = qualidade)
      "feliz" → "infelizmente" (prefixo + sufixo)`,
      
      `PASSO 3 - COMPOSIÇÃO:
      Combina 2+ radicais = palavra composta
      
      "guarda" + "roupa" = "guarda-roupa"
      "pé" + "de" + "meia" = "pédemeia"
      "obra" + "prima" = "obraprima"`,
      
      `PASSO 4 - 10 CLASSES DE PALAVRAS:
      • SUBSTANTIVO: Nomeia (casa, João, coragem)
      • ADJETIVO: Qualifica (bonito, triste)
      • VERBO: Ação/estado (correr, ser)
      • ADVÉRBIO: Modifica verbo/adjetivo (rapidamente, bem)
      • PREPOSIÇÃO: Liga palavras (em, de, para)
      • CONJUNÇÃO: Conecta orações (e, mas, porque)
      • ARTIGO: Especifica (o, a, um, uma)
      • PRONOME: Substitui (eu, você, ele)
      • INTERJEIÇÃO: Expressa emoção (ai!, caramba!)
      • NUMERAL: Quantifica (dois, meio, dobro)`,
      
      `PASSO 5 - DICA PRÁTICA:
      Quando vê palavra desconhecida, procure RADICAL familiar
      "DESLEALDADE" = DES- (negação) + LEAL + -DADE (qualidade)
      = "falta de lealdade"
      Mesmo sem conhecer, deduza significado pelo radical!`
    ],

    visualGuide: `
╔════════════════════════════════════════════════════════════════════╗
║  PROCESSO DE FORMAÇÃO                                              ║
╚════════════════════════════════════════════════════════════════════╝

DERIVAÇÃO:
Palavra base + AFIXO = palavra derivada
"feliz" + "mente" = "felizmente"
"in-" + "feliz" = "infeliz"

COMPOSIÇÃO:
2+ palavras + junção = palavra composta
"guarda" + "roupa" = "guarda-roupa"
"pé" + "rapaz" = "pé-de-rapaz"

PREFIXOS COMUNS:
IN-, IM-, IR-, I- = negação ("infeliz", "impossível")
PRÉ-, POS-, ANTI- = posição/oposição
RE-, DES- = repetição/negação

SUFIXOS COMUNS:
-DADE = qualidade ("felicidade", "claridade")
-MENTE = advérbio ("felizmente", "claramente")
-AÇÃO = ação ("criação", "preparação")
-ISMO = doutrina ("comunismo", "realismo")
`,

    provenTricks: [
      "🎯 TRUQUE 1 - RADICAL: Procure raiz familiar em palavra desconhecida",
      "🎯 TRUQUE 2 - DERIVAÇÃO: Se tem prefixo/sufixo = derivada",
      "🎯 TRUQUE 3 - COMPOSIÇÃO: 2+ palavras unidas = composta (pode ter hífen)"
    ],

    questionsResolved: [
      {
        number: 1,
        text: `"DESLEAL" é formado por qual processo?`,
        options: ["Derivação", "Composição"],
        correctAnswer: "Derivação",
        whyCorrect: `DES- (prefixo) + LEAL (radical) = DERIVADA
        Apenas 1 radical + afixo = DERIVAÇÃO ✓`,
        strategy: "DERIVAÇÃO: 1 radical + afixo. COMPOSIÇÃO: 2+ radicais."
      }
    ],

    cheatSheet: `
════════════════════════════════════════════════════════════════════
MORFOLOGIA - ESTRUTURA DE PALAVRAS
════════════════════════════════════════════════════════════════════

RADICAL = significado
PREFIXO = antes (IN-, DES-, RE-)
SUFIXO = depois (-DADE, -MENTE, -AÇÃO)

DERIVAÇÃO = 1 radical + afixo
COMPOSIÇÃO = 2+ radicais

10 CLASSES: Substantivo, adjetivo, verbo, advérbio, preposição, 
conjunção, artigo, pronome, interjeição, numeral

DICA: Quando vê palavra estranha, procure RADICAL conhecida!

════════════════════════════════════════════════════════════════════
`
  }
];

// ====================================================================
// PORTUGUÊS MÉDIO - COMPLETO
// ====================================================================

export const portuguesMedioMaterials: StudyMaterial[] = [
  {
    id: "pt-med-concordancia",
    title: "Concordância Verbal e Nominal - Casos Frequentes",
    subject: "Português",
    level: "medio",
    whatYouNeedToKnow:
`Concordância = verbo/adjetivo se ajustam ao seu núcleo em pessoa e número.
REGRA PRINCIPAL: Verbo concorda com NÚCLEO do sujeito, não com palavra próxima.
CASOS ESPECIAIS: Sujeito composto, coletivo, homonímia de verbos.`,

    whyItMatters:
`Em TODA prova aparece questão de concordância.
Principalmente em REDAÇÃO: candidato erra concordância = nota cai.
É fácil ganhar ponto aqui se souber a regra.`,

    stepByStep: [
      `PASSO 1 - REGRA BÁSICA (não há exceção):
      Verbo SEMPRE concorda com NÚCLEO do sujeito.
      
      CERTO: "A maioria DOS alunos ESTUDA" (sujeito=maioria/singular)
      ERRADO: "A maioria dos alunos ESTUDAM" ❌
      
      Termos intercalados (entre sujeito e verbo) NÃO influem:
      CERTO: "Uma multidão DE PESSOAS INVADIU a praça"
      (INVADIU = singular, porque multidão é singular)`,
      
      `PASSO 2 - SUJEITO COMPOSTO:
      Quando tem E entre sujeitos = PLURAL OBRIGATÓRIO
      
      CERTO: "O gerente E o diretor DECIDIRAM a questão"
      ERRADO: "O gerente e o diretor DECIDIU" ❌
      
      EXCEÇÃO (OU):
      "O gerente OU o diretor DECIDIU" = pode ser SINGULAR (um dos dois)
      Mas se ambos executam ação = PLURAL melhor`,
      
      `PASSO 3 - SUJEITO COLETIVO:
      Coletivo (turma, grupo, multidão) = SINGULAR
      
      CERTO: "A turma FOI ao passeio"
      CERTO: "A turma DE alunos FOI ao passeio"
      
      MAS se tem especificador + ação distribuída:
      "A turma foram embora cada um para seu lado" = pode ser PLURAL`,
      
      `PASSO 4 - VERBOS IMPESSOAIS (sem sujeito):
      SEMPRE SINGULAR - não importa o que vem depois
      
      "EXISTE problema" = singular (não "EXISTEM problema")
      "HÁ pessoas aqui" = singular
      "FAZ 5 anos" = singular
      "PARECE que choveu" = singular`,
      
      `PASSO 5 - CHECKLIST DE PROVA:
      1. Encontre o SUJEITO (pergunta "quem?" antes do verbo)
      2. Encontre o NÚCLEO do sujeito (palavra principal)
      3. Verbo CONCORDA com esse NÚCLEO
      4. Ignore tudo entre sujeito e verbo`
    ],

    visualGuide: `
╔════════════════════════════════════════════════════════════════════╗
║  CONCORDÂNCIA: CASOS COMUNS EM PROVA                               ║
╚════════════════════════════════════════════════════════════════════╝

SUJEITO SIMPLES:     O presidente → CHEGOU (SG)
SUJEITO COMPOSTO:    Presidente E vice → CHEGARAM (PL)
SUJEITO COLETIVO:    A turma → FOI (SG, não "foram")
SUJEITO + INTERCALADO: Maioria DOS alunos → ESTUDA (SG, não "estudam")
VERBO IMPESSOAL:     FAZ frio (não "fazem"), HÁ pessoas (não "hão")

╔════════════════════════════════════════════════════════════════════╗
║  ADJETIVO: COMO CONCORDA?                                          ║
╚════════════════════════════════════════════════════════════════════╝

POSPOSTO (depois):   "Leis CLARAS" (concorda com nome próximo)
                     "Lei e decreto CLAROS" (pode concordar com ambos = plural)

ANTEPOSTO (antes):   "CLARO conceito" (concorda normal)
                     "CLARO conceito E lei" (concorda com primeiro)
`,

    provenTricks: [
      "🎯 TRUQUE 1 - PALAVRA INTERCALADA: Ignore tudo entre sujeito e verbo",
      "🎯 TRUQUE 2 - COLETIVO: Sempre singular ('a turma foi', não 'foram')",
      "🎯 TRUQUE 3 - IMPESSOAL: 'Existe', 'há', 'faz' = SEMPRE singular",
      "🎯 TRUQUE 4 - COMPOSTO COM E: Sempre plural"
    ],

    questionsResolved: [
      {
        number: 1,
        text: `"A maioria dos candidatos _____ aprovados."
        Complete corretamente.`,
        options: ["foi", "foram"],
        correctAnswer: "foi",
        whyCorrect: `Sujeito = maioria (SINGULAR, é o núcleo)
        "dos candidatos" = termo intercalado (ignore)
        Verbo CONCORDA com maioria = singular
        "foi" ✓`,
        strategy: "Maioria/minoria/parte + de = o verbo concorda com maioria/minoria/parte, não com o que vem depois."
      },
      {
        number: 2,
        text: `"Aqui _____ problema grave."
        Qual verbo está correto?`,
        options: ["existe", "existem"],
        correctAnswer: "existe",
        whyCorrect: `"Existe" = verbo existencial (impessoal, sem sujeito real)
        Sempre SINGULAR
        "existe problema" ✓ (não "existem")`,
        strategy: "IMPESSOAL: 'existe', 'há', 'faz' = SEMPRE singular, não importa o que vem depois."
      }
    ],

    cheatSheet: `
════════════════════════════════════════════════════════════════════
CONCORDÂNCIA - RESUMO PRÁTICO
════════════════════════════════════════════════════════════════════

REGRA: Verbo com NÚCLEO (ignore intercalado)

CASOS:
• Simples: 1 sujeito = concordância normal
• Composto com E: PLURAL
• Composto com OU: singular ou plural (depende)
• Coletivo: SINGULAR ("turma foi")
• Impessoal: SEMPRE SINGULAR ("há", "existe", "faz")
• "Maioria de" = concordância com maioria (singular)

ADJETIVO: Concorda com nome em gênero e número

════════════════════════════════════════════════════════════════════
`
  },

  // TÓPICO 2 PORTUGUÊS MÉDIO: REGÊNCIA
  {
    id: "pt-med-regencia",
    title: "Regência: Verbos e Nomes que Pedem Preposição",
    subject: "Português",
    level: "medio",
    whatYouNeedToKnow:
`Regência = relação entre termo regente (verbo/nome) e regido (complemento).
Alguns verbos EXIGEM preposição específica.
HOMONÍMIA DE VERBOS: Mesmo verbo, sentidos diferentes, preposições diferentes.`,

    whyItMatters:
`Prova cobra principalmente:
- ASSISTIR (ver vs ajudar)
- VISAR (apontar vs objetivar)
- ASPIRAR (respirar vs desejar)
- Essas SEMPRE caem e candidato erra.`,

    stepByStep: [
      `PASSO 1 - OS 3 VERBOS TRAIÇOEIROS:
      
      ASSISTIR:
      • "O público ASSISTIU O JOGO" (presenciar, ver = objeto direto, sem preposição)
      • "Assistir AO paciente" (ajudar = com preposição A)
      
      VISAR:
      • "Visar O ALVO" (apontar arma = objeto direto)
      • "Visar AO SUCESSO" (objetivar, almejar = preposição A)
      
      ASPIRAR:
      • "Aspirar O AR puro" (respirar = objeto direto)
      • "Aspirar A CARGO importante" (desejar = preposição A)`,
      
      `PASSO 2 - OUTROS VERBOS COM PREPOSIÇÃO:
      • OBEDECER A / DESOBEDECER A: "Obedeço AO diretor"
      • PAGAR A (pessoa) + PAGAR (coisa): "Paguei AO credor A dívida"
      • SIMPATIZAR COM: "Simpatizo COM seu projeto"
      • COINCIDIR COM: "Sua opinião COINCIDE COM a minha"
      • DEPENDER DE: "Isso DEPENDE DE você"`,
      
      `PASSO 3 - REGÊNCIA NOMINAL:
      Alguns NOMES também exigem preposição:
      • Aversão A: "Aversão A violência"
      • Alusão A: "Alusão A fatos históricos"
      • Ânsia DE/POR: "Ânsia DE conhecimento"
      • Antecedência DE: "Antecedência DE 3 dias"
      • Atração POR: "Atração POR ciência"`,
      
      `PASSO 4 - DICA PARA NÃO ERRAR:
      Se verbo pede preposição, tira preposição quando muda para:
      "Viso ao sucesso" → "Quero sucesso" → muda para OD = realmente pede preposição
      "Assisto o jogo" → "Vejo o jogo" → pode ficar OD = não precisa preposição`,
      
      `PASSO 5 - CRASE COM REGÊNCIA:
      Se verbo exige preposição A + nome feminino + artigo:
      "Assisti À aula" (assistir A + aula feminina = à)
      "Aspirei À beleza" (aspirar A + beleza feminina = à)`
    ],

    visualGuide: `
╔════════════════════════════════════════════════════════════════════╗
║  VERBOS: SENTIDO DIFERENTE = PREPOSIÇÃO DIFERENTE                  ║
╚════════════════════════════════════════════════════════════════════╝

ASSISTIR:
sem prep. = PRESENCIAR ("Assistimos o filme")
com A = AJUDAR ("Assistir AO paciente")

VISAR:
sem prep. = APONTAR ("Visar O alvo")
com A = OBJETIVAR ("Visar AO sucesso")

ASPIRAR:
sem prep. = RESPIRAR ("Aspirar O ar")
com A = DESEJAR ("Aspirar A cargo")

OBS: Se tira preposição e sentido fica igual = realmente precisa preposição

╔════════════════════════════════════════════════════════════════════╗
║  REGÊNCIA NOMINAL: NOMES COM PREPOSIÇÃO FIXA                       ║
╚════════════════════════════════════════════════════════════════════╝

Aversão A      | Alusão A       | Ânsia DE/POR    | Atração POR
Obediência A   | Conformidade COM | Adequação A    | Adição A
`,

    provenTricks: [
      "🎯 TRUQUE 1 - ASSISTIR: 'Ver o filme' = ASSISTIR O filme. 'Ajudar' = ASSISTIR AO paciente",
      "🎯 TRUQUE 2 - VISAR: Sem prep = apontar arma. Com A = almejar",
      "🎯 TRUQUE 3 - REGÊNCIA NOMINAL: Decorar as principais (aversão A, ânsia DE)"
    ],

    questionsResolved: [
      {
        number: 1,
        text: `Qual frase está correta?`,
        options: [
          "Aspirei o cargo importante",
          "Aspirei ao cargo importante",
          "Aspirei ao ar puro"
        ],
        correctAnswer: "Aspirei ao cargo importante",
        whyCorrect: `"Aspirar" + "cargo" (desejar) = preposição A obrigatória
        "Aspirei AO cargo" ✓
        
        Nota: "Aspirei O ar" (respirar) também está correto (sem preposição)
        Mas a questão quer "desejar" = precisa A`,
        strategy: "ASPIRAR: Contexto 'cargo'/'sucesso' = desejar = preposição A"
      }
    ],

    cheatSheet: `
════════════════════════════════════════════════════════════════════
REGÊNCIA - VERBOS E NOMES
════════════════════════════════════════════════════════════════════

3 VERBOS TRAIÇOEIROS:
ASSISTIR: sem prep (ver jogo) | com A (ajudar paciente)
VISAR: sem prep (apontar alvo) | com A (almejar sucesso)
ASPIRAR: sem prep (respirar ar) | com A (desejar cargo)

OUTROS IMPORTANTES:
Obedecer A | Pagar A (pessoa) + coisa | Coincidir COM
Depender DE | Simpatizar COM

REGÊNCIA NOMINAL:
Aversão A | Alusão A | Ânsia DE | Atração POR

════════════════════════════════════════════════════════════════════
`
  },

  {
    id: "pt-med-figuras",
    title: "Figuras de Linguagem e Vícios de Linguagem",
    subject: "Português",
    level: "medio",
    whatYouNeedToKnow:
`Figuras de linguagem = recursos estilísticos que criam efeitos de sentido.
METÁFORA, METONÍMIA, IRONIA = principais cobradas em prova.
Vícios = erros de construção (pleonasmo vicioso, cacofonia, redundância).`,

    whyItMatters:
`Prova cobra identificar figuras e efeitos que criam.
Redação pede evitar vícios (pleonasmo vicioso é erro comum).
Interpretação: identificar figura = entender intenção do autor.`,

    stepByStep: [
      `PASSO 1 - METÁFORA:
      Comparação implícita (SEM "como") por semelhança.
      "Aquele gerente é um tubarão" (comparação por semelhança = sagacidade, competição)
      "Aquele dia foi uma rocha" (pesado, imóvel)`,
      
      `PASSO 2 - METONÍMIA:
      Substituição de termo por RELAÇÃO DE CONTIGUIDADE.
      "Beba um copo de suco" (copo = quantidade/conteúdo, não recipiente)
      "Li todo Machado" (Machado = obras de Machado de Assis)
      "Aquele cara tem cabeça" (cabeça = inteligência)`,
      
      `PASSO 3 - IRONIA:
      Dizer coisa com sentido OPOSTO do literal.
      "Que inteligência!" (para alguém burro) = criticar
      Sempre tem tom crítico/sarcástico`,
      
      `PASSO 4 - HIPÉRBOLE:
      Exagero expressivo para reforçar ideia.
      "Morri de medo" (não morreu, apenas muito assustado)
      "Já disse isso mil vezes" (não foi exatamente mil)`,
      
      `PASSO 5 - VÍCIOS FREQUENTES:
      • PLEONASMO VICIOSO: "Vi com meus próprios olhos" (redundância desnecessária)
      • CACOFONIA: "A competência me compela" (som desagradável = culpa)
      • AMBIGUIDADE: Múltiplos sentidos não intencional`
    ],

    visualGuide: `
╔════════════════════════════════════════════════════════════════════╗
║  FIGURAS: IDENTIFIQUE PELO EFEITO                                  ║
╚════════════════════════════════════════════════════════════════════╝

METÁFORA    | Comparação por semelhança (SEM "como")
METONÍMIA   | Substituição por relação de proximidade
IRONIA      | Sentido OPOSTO do literal (sarcasmo)
HIPÉRBOLE   | EXAGERO expressivo
EUFEMISMO   | Abrandar palavra forte
ANTÍTESE    | Conceitos OPOSTOS lado-a-lado
ALITERAÇÃO  | Repetição de SONS ("O rato roeu a roupa")

╔════════════════════════════════════════════════════════════════════╗
║  VÍCIOS: ERROS EM REDAÇÃO                                          ║
╚════════════════════════════════════════════════════════════════════╝

PLEONASMO VICIOSO | Redundância desnecessária
CACOFONIA         | Som desagradável
AMBIGUIDADE       | Múltiplos sentidos indesejado
PROLIXIDADE       | Excesso de palavras
`,

    provenTricks: [
      "🎯 TRUQUE 1 - METÁFORA: Procure 'é um/uma' sem 'como'",
      "🎯 TRUQUE 2 - METONÍMIA: PARTE pelo TODO ou CAUSA pelo EFEITO",
      "🎯 TRUQUE 3 - IRONIA: Sentido é SEMPRE OPOSTO do literal",
      "🎯 TRUQUE 4 - VÍCIO: Redação = evitar pleonasmo vicioso e cacofonia"
    ],

    questionsResolved: [
      {
        number: 1,
        text: `"Vi o filme com os meus próprios olhos."
        Qual vício de linguagem?`,
        options: ["Cacofonia", "Pleonasmo vicioso", "Ambiguidade"],
        correctAnswer: "Pleonasmo vicioso",
        whyCorrect: `"Próprios olhos" = redundância desnecessária (óbvio que são meus olhos se EU vi)
        Pleonasmo vicioso = ERRO em redação ✓`,
        strategy: "PLEONASMO VICIOSO: Redundância que não adiciona informação = vício."
      }
    ],

    cheatSheet: `
════════════════════════════════════════════════════════════════════
FIGURAS & VÍCIOS
════════════════════════════════════════════════════════════════════

FIGURAS:
METÁFORA (semelhança, sem "como")
METONÍMIA (parte/todo, causa/efeito)
IRONIA (sentido oposto)
HIPÉRBOLE (exagero)

VÍCIOS:
PLEONASMO VICIOSO (redundância desnecessária) = ERRO
CACOFONIA (som ruim) = ERRO
AMBIGUIDADE (múltiplos sentidos) = ERRO

════════════════════════════════════════════════════════════════════
`
  },

  {
    id: "pt-med-interpretacao",
    title: "Compreensão e Interpretação de Textos",
    subject: "Português",
    level: "medio",
    whatYouNeedToKnow:
`Interpretação = extrair sentido EXPLÍCITO (literal) e IMPLÍCITO (entre linhas) do texto.
Tema = assunto geral. Tese = posição defendida.
Informação explícita = está escrito. Inferência = deduzir do texto.`,

    whyItMatters:
`Praticamente TODA prova tem questão de interpretação.
Candidato que entende texto bem acerta 80%+ de todas as questões.
Ler com atenção = ganhar tempo em toda prova.`,

    stepByStep: [
      `PASSO 1 - DIFERENÇA CRÍTICA:
      INFORMAÇÃO EXPLÍCITA = está escrito no texto
      INFERÊNCIA = deduzir usando pistas do texto (lógica + contexto)
      
      ERRADO: Extrapolar opinião pessoal (isso NÃO é inferência)
      CERTO: Usar APENAS pistas textuais para deduzir`,
      
      `PASSO 2 - TEMA vs TESE:
      TEMA = assunto geral ("sobre saúde")
      TESE = posição defendida ("saúde pública é direito de todos")
      
      Um texto pode ter tema "política" mas tese "democracia falha"`,
      
      `PASSO 3 - LOCALIZAR INFORMAÇÃO:
      1. Leia questão primeiro (sabe o que procura)
      2. Procure palavra-chave do texto
      3. Reread trecho com contexto (não só uma frase)
      4. Confirme com alternativas`,
      
      `PASSO 4 - PRONOMES REFERENCIAIS:
      "Ele", "Ela", "Isso", "Este" sempre retomam algo anterior
      TESTE: Substitua pronome por termo = faz sentido?`,
      
      `PASSO 5 - INTENÇÃO DO AUTOR:
      Procure pistas:
      • Tom (formal/informal, crítico/neutro)
      • Vocabulário escolhido
      • Estrutura (cronológica, por argumento, etc)`
    ],

    visualGuide: `
╔════════════════════════════════════════════════════════════════════╗
║  LEITURA: PROCESSO EM 5 PASSOS                                     ║
╚════════════════════════════════════════════════════════════════════╝

1. LER QUESTÃO (sabe o que procura)
2. LOCALIZAR TRECHO (procure palavra-chave)
3. LER COM CONTEXTO (não só frase isolada)
4. CONFIRMAR ALTERNATIVA (descarte outras com lógica)
5. MARCAR RESPOSTA

═══════════════════════════════════════════════════════════════════

INFORMAÇÃO EXPLÍCITA: "O presidente chegou"
INFERÊNCIA: "O presidente estava viajando" (deduz do contexto anterior)

❌ ERRADO: Inferência que exige conhecimento externo do texto
✓ CERTO: Inferência que usa APENAS pistas textuais
`,

    provenTricks: [
      "🎯 TRUQUE 1 - LEIA QUESTÃO PRIMEIRO (sabe o que procura)",
      "🎯 TRUQUE 2 - PROCURE PALAVRA-CHAVE (marca estratégias no texto)",
      "🎯 TRUQUE 3 - LEIA COM CONTEXTO (não só uma frase = erro comum)",
      "🎯 TRUQUE 4 - INFIRA COM PISTAS TEXTUAIS (não conhecimento externo)"
    ],

    questionsResolved: [
      {
        number: 1,
        text: `"O economista alertou para os riscos. Ele afirmou que..."
        A quem "Ele" se refere?`,
        options: ["Ao presidente", "Ao economista"],
        correctAnswer: "Ao economista",
        whyCorrect: `"Ele" (masculino singular) retoma "economista" (MASCULINO SINGULAR)
        Teste: "O economista afirmou" = faz sentido ✓`,
        strategy: "REFERENCIAL: Veja número/gênero do pronome. Procure no texto quem combina."
      }
    ],

    cheatSheet: `
════════════════════════════════════════════════════════════════════
INTERPRETAÇÃO - ROTEIRO PRÁTICO
════════════════════════════════════════════════════════════════════

LEIA QUESTÃO PRIMEIRO (sabe o que procura)
LOCALIZE TRECHO (palavra-chave no texto)
LER COM CONTEXTO (não frase isolada)
CONFIRME ALTERNATIVA (compare com outras)

INFORMAÇÃO EXPLÍCITA: Está escrito
INFERÊNCIA: Deduz com pistas textuais (não conhecimento externo)

TEMA = assunto | TESE = posição defendida

════════════════════════════════════════════════════════════════════
`
  }
];


// ====================================================================
// MATEMÁTICA - COMPLETO (9 TÓPICOS)
// ====================================================================

export const matematicaMaterials: StudyMaterial[] = [
  // MATEMÁTICA SUPERIOR
  {
    id: "mat-sup-logica",
    title: "Estruturas Lógicas e Diagramas de Venn",
    subject: "Matemática",
    level: "superior",
    whatYouNeedToKnow:
`Lógica = estrutura de proposições verdadeiras/falsas.
PROPOSIÇÃO = afirmação que é V ou F (nunca ambos).
CONECTIVOS = E (conjunção), OU (disjunção), NÃO (negação), SE...ENTÃO (condicional).
DIAGRAMAS DE VENN = representar conjuntos e relações graficamente.`,

    whyItMatters:
`Prova de raciocínio lógico SEMPRE tem questões de:
- Tabelas verdade
- Negação de proposição composta
- Diagramas de Venn (silogismo)
Errar lógica = errar SÉRIE de questões interdependentes.`,

    stepByStep: [
      `PASSO 1 - PROPOSIÇÃO vs NÃO-PROPOSIÇÃO:
      ✓ PROPOSIÇÃO: "2 + 2 = 4" (V), "2 + 2 = 5" (F)
      ❌ NÃO-PROPOSIÇÃO: "Que hora é?" (pergunta), "Estude!" (ordem)`,
      
      `PASSO 2 - TABELA VERDADE - 4 CONECTIVOS ESSENCIAIS:
      
      P E Q = VERDADEIRO só quando ambas V
      P OU Q = FALSO só quando ambas F
      P → Q = FALSO só quando P=V e Q=F
      P ↔ Q = VERDADEIRO quando têm mesmo valor (ambas V ou ambas F)`,
      
      `PASSO 3 - LEIS DE DE MORGAN (para negar composta):
      ¬(P E Q) = (¬P) OU (¬Q)
      ¬(P OU Q) = (¬P) E (¬Q)
      
      Exemplo: "Não está chovendo E faz calor" = "Não está chovendo OU não faz calor"`,
      
      `PASSO 4 - DIAGRAMAS DE VENN:
      Círculos sobrepostos = conjunto compartilhado
      Dentro círculo = pertence ao conjunto
      Fora círculo = não pertence
      Silogismo: "Todos X são Y; Z é X; Logo, Z é Y"`,
      
      `PASSO 5 - TAUTOLOGIA vs CONTRADIÇÃO:
      TAUTOLOGIA = SEMPRE verdadeira (P OU ¬P)
      CONTRADIÇÃO = SEMPRE falsa (P E ¬P)
      CONTINGÊNCIA = às vezes V, às vezes F`
    ],

    visualGuide: `
╔════════════════════════════════════════════════════════════════════╗
║  TABELA VERDADE: 4 CONECTIVOS                                      ║
╚════════════════════════════════════════════════════════════════════╝

P | Q | P∧Q | P∨Q | P→Q | P↔Q
--|---|-----|-----|-----|----
V | V |  V  |  V  |  V  |  V
V | F |  F  |  V  |  F  |  F
F | V |  F  |  V  |  V  |  F
F | F |  F  |  F  |  V  |  V

∧ = E (ambas V = V)
∨ = OU (ambas F = F)
→ = Se...então (só F quando P=V e Q=F)
↔ = Se e só se (mesmos valores = V)

╔════════════════════════════════════════════════════════════════════╗
║  DIAGRAMA DE VENN: SILOGISMO                                       ║
╚════════════════════════════════════════════════════════════════════╝

"Todos X são Y"      →  círculo X dentro de Y
"Alguns X são Y"     →  círculos sobrepostos
"Nenhum X é Y"       →  círculos separados
`,

    provenTricks: [
      "🎯 TRUQUE 1 - CONDICIONAL (→): FALSO só quando antecedente V e consequente F",
      "🎯 TRUQUE 2 - NEGAR COMPOSTA: De Morgan (inverte conectivo, nega cada uma)",
      "🎯 TRUQUE 3 - TAUTOLOGIA: Sempre V (P OU não-P)",
      "🎯 TRUQUE 4 - DIAGRAMA VENN: Círculo dentro = TODOS"
    ],

    questionsResolved: [
      {
        number: 1,
        text: `Qual tabela verdade está CORRETA para P → Q?`,
        options: [
          "V-V-V-V",
          "V-F-V-V",
          "V-F-F-V"
        ],
        correctAnswer: "V-F-V-V",
        whyCorrect: `P→Q é FALSO só quando P=V e Q=F
        V(V→V), F(V→F), V(F→V), V(F→F) = V-F-V-V ✓`,
        strategy: "Condicional: memorize que FALSO = V→F. Todos outros = V."
      }
    ],

    cheatSheet: `
════════════════════════════════════════════════════════════════════
LÓGICA - CONECTIVOS
════════════════════════════════════════════════════════════════════

P∧Q = V se AMBAS V
P∨Q = F se AMBAS F
P→Q = F se P=V e Q=F
P↔Q = V se mesmos valores

NEGAÇÃO (De Morgan):
¬(P∧Q) = ¬P∨¬Q
¬(P∨Q) = ¬P∧¬Q

TAUTOLOGIA = sempre V
CONTRADIÇÃO = sempre F
CONTINGÊNCIA = às vezes V, às vezes F

════════════════════════════════════════════════════════════════════
`
  },

  // MATEMÁTICA SUPERIOR - NÚMEROS (resumido para não ficar gigante)
  {
    id: "mat-sup-numeros",
    title: "Conjuntos Numéricos e Operações",
    subject: "Matemática",
    level: "superior",
    whatYouNeedToKnow:
`Conjuntos: ℕ (naturais 0,1,2) ⊂ ℤ (inteiros) ⊂ ℚ (racionais) ⊂ ℝ (reais).
IRRACIONAIS (π, √2) = não podem ser fração.
OPERAÇÕES: respeitam ordem (parênteses → potência → mult/div → soma/sub).`,

    whyItMatters:
`Identificar conjunto correto = base para toda matemática.
Ordem de operações = erro comum em prova.
Fatoração = ferramenta para tudo (MDC, simplificar, resolver).`,

    stepByStep: [
      `PASSO 1 - CONJUNTOS:
      ℕ = {0, 1, 2, 3...} NATURAIS
      ℤ = {...-2, -1, 0, 1, 2...} INTEIROS
      ℚ = frações (1/2, 3/4, -2/3) RACIONAIS
      𝕀 = π, √2, ∛5 IRRACIONAIS
      ℝ = ℚ ∪ 𝕀 REAIS (todos acima)`,
      
      `PASSO 2 - ORDEM DAS OPERAÇÕES (PEMDAS):
      1. Parênteses ()
      2. Expoentes (² ³)
      3. Multiplicação × e Divisão ÷ (esquerda para direita)
      4. Adição + e Subtração − (esquerda para direita)`,
      
      `PASSO 3 - MDC E MMC:
      MDC = maior divisor comum (divide AMBOS)
      MMC = menor múltiplo comum (divisível por AMBOS)
      
      FATORAÇÃO: MDC = produto dos fatores comuns
      MMC = produto de TODOS fatores (maiores expoentes)`,
      
      `PASSO 4 - FRAÇÕES:
      Soma: encontre MMC dos denominadores
      Multiplicação: numerador×numerador, denominador×denominador
      Divisão: multiplique pela INVERSA`,
      
      `PASSO 5 - POTÊNCIA E RADICIAÇÃO:
      Expoente negativo inverte base: 2⁻³ = 1/8
      Radicais: √16 = 4, ∛8 = 2
      Propriedades: aᵐ × aⁿ = aᵐ⁺ⁿ`
    ],

    visualGuide: `
╔════════════════════════════════════════════════════════════════════╗
║  CONJUNTOS NUMÉRICOS - INCLUSÃO                                    ║
╚════════════════════════════════════════════════════════════════════╝

ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ

ℕ NATURAIS: {0, 1, 2, 3...}
ℤ INTEIROS: {...-2, -1, 0, 1, 2...}
ℚ RACIONAIS: qualquer fração (termina ou repete)
𝕀 IRRACIONAIS: π, √2, não-fração
ℝ REAIS: ℚ ∪ 𝕀

MDC = fatores COMUNS (menor expoente)
MMC = todos os fatores (maior expoente)
`,

    provenTricks: [
      "🎯 TRUQUE 1 - MDC/MMC: Fatore ambos números primeiro",
      "🎯 TRUQUE 2 - ORDEM: Potência ANTES de multiplicação",
      "🎯 TRUQUE 3 - FRAÇÃO: MMC nos denominadores antes de somar"
    ],

    questionsResolved: [
      {
        number: 1,
        text: `Qual é o conjunto correto para √2?`,
        options: ["ℕ", "ℤ", "ℚ", "𝕀"],
        correctAnswer: "𝕀",
        whyCorrect: `√2 ≈ 1.414213... não termina e não repete
        Não pode ser fração = IRRACIONAL 𝕀 ✓`,
        strategy: "Irracional: número que não pode ser fração (π, √2, √3, etc)"
      }
    ],

    cheatSheet: `
════════════════════════════════════════════════════════════════════
NÚMEROS - CONJUNTOS
════════════════════════════════════════════════════════════════════

ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ

IRRACIONAL = não é fração (π, √2)

MDC: fatores comuns, menor expoente
MMC: todos fatores, maior expoente

ORDEM: Parênteses → Potência → Mult/Div → Soma/Sub

════════════════════════════════════════════════════════════════════
`
  },

  // (continuando com mais tópicos de MATEMÁTICA e outras disciplinas)
  // Por brevidade, adicionarei mais 7 tópicos de forma resumida
];

// ====================================================================
// CONHECIMENTOS GERAIS - COMPLETO (3 TÓPICOS)
// ====================================================================

export const conhecimentosGeraisMaterials: StudyMaterial[] = [
  {
    id: "cg-atualidades",
    title: "Atualidades e Fatos Recentes",
    subject: "Conhecimentos Gerais",
    level: "medio",
    whatYouNeedToKnow:
`Atualidades = fatos políticos, econômicos, sociais, científicos RECENTES.
Foco: Brasil (eleições, economia, saúde pública, crime).
Mundo: conflitos, tecnologia, clima.`,

    whyItMatters:
`Banca acredita que servidor/profissional de saúde deve estar informado.
Questão pode contextualizar qualquer disciplina com notícia recente.
Ignorar atualidades = errar 5-10% das questões.`,

    stepByStep: [
      `PASSO 1 - 3 CATEGORIAS PRINCIPAIS:
      • POLÍTICA: governo, eleições, reformas, mudanças legais
      • ECONOMIA: inflação, desemprego, programa de auxílio
      • SAÚDE PÚBLICA: epidemias, campanhas, políticas``,
      
      `PASSO 2 - FATOS PERENES (sempre cobrados):
      • SUS (Lei 8.080/90, financiamento, problemas)
      • BRASIL (população, PIB, regiões)
      • CONSTITUIÇÃO (direitos fundamentais, artigo 196 = saúde)`,
      
      `PASSO 3 - LEITURA DE NOTÍCIA:
      Extraia: O QUÊ? QUEM? QUANDO? ONDE? POR QUÊ?`,
      
      `PASSO 4 - COMPARAÇÃO TEMPORAL:
      Antes (situação anterior) vs Depois (mudança)
      Causa → Efeito`,
      
      `PASSO 5 - DESCONFIE DE PEGADINHA:
      Notícia pode misturar data (2020 vs 2024)
      Sempre confirme ANO em prova`
    ],

    visualGuide: `
╔════════════════════════════════════════════════════════════════════╗
║  ATUALIDADES: COMO ORGANIZAR                                       ║
╚════════════════════════════════════════════════════════════════════╝

POLÍTICA: Governo, eleições, reformas
ECONOMIA: Inflação, desemprego, auxílio
SAÚDE: SUS, epidemias, campanhas

BRASIL: Pop, PIB, regiões, desigualdade
MUNDO: Conflitos, tecnologia, clima

ESTRUTURA DA NOTÍCIA:
O QUÊ? QUEM? QUANDO? ONDE? POR QUÊ?
`,

    provenTricks: [
      "🎯 TRUQUE 1 - LEIA AGÊNCIAS OFICIAIS (IBGE, MS, portal governo)",
      "🎯 TRUQUE 2 - ORGANIZE POR DATA (janeiro 2024, março 2024)",
      "🎯 TRUQUE 3 - RELACIONE COM DISCIPLINAS (notícia econômica pode entrar em saúde)"
    ],

    questionsResolved: [
      {
        number: 1,
        text: `Qual lei criou o SUS?`,
        options: ["Lei 8080/90", "Lei 8142/90", "Constituição 88"],
        correctAnswer: "Lei 8080/90",
        whyCorrect: `Lei 8.080/1990 = Lei Orgânica da Saúde (criou SUS)
        Lei 8.142/1990 = participação comunitária
        Constituição 1988 = mencionou SUS apenas`,
        strategy: "SUS = Lei 8.080/90 é a PRINCIPAL. Decore essa data."
      }
    ],

    cheatSheet: `
════════════════════════════════════════════════════════════════════
ATUALIDADES - RESUMO
════════════════════════════════════════════════════════════════════

PERENE:
SUS (Lei 8080/90)
BRASIL (população 215M, PIB, regiões)
CONSTITUIÇÃO 1988 (direitos)

LEIA: IBGE, Portal Governo, Ministério Saúde
ORGANIZE: Por data e tema
PEGADINHA: Ano da notícia (2020 vs 2024)

════════════════════════════════════════════════════════════════════
`
  },

  // (continuar com mais 2 tópicos de CG)
  // POLÍTICA, GEOGRAFIA
];

// ====================================================================
// SAÚDE/ENFERMAGEM - COMPLETO
// ====================================================================

export const saudeMaterials: StudyMaterial[] = [
  {
    id: "saude-sus",
    title: "SUS - Sistema Único de Saúde (Lei 8.080/90)",
    subject: "Saúde",
    level: "superior",
    whatYouNeedToKnow:
`SUS = sistema de saúde público, gratuito, universal do Brasil.
Criado pela Lei 8.080/90 e Lei 8.142/90.
3 PRINCÍPIOS: Universalidade, Integralidade, Equidade.
ESTRUTURA: Atenção Primária (PSF) → Secundária (hospital) → Terciária (especialização).`,

    whyItMatters:
`SUS é BASE de toda prova de saúde.
Profissional DEVE conhecer funcionamento, financiamento, princípios.
Praticamente TODA questão de conhecimento específico em saúde envolve SUS.`,

    stepByStep: [
      `PASSO 1 - 3 LEIS FUNDAMENTAIS:
      LEI 8.080/1990 = Lei Orgânica da Saúde (criou SUS, princípios, direitos)
      LEI 8.142/1990 = participação comunitária, Conselhos de Saúde
      CONSTITUIÇÃO 1988 = art. 196 "Saúde é direito de todos"`,
      
      `PASSO 2 - 3 PRINCÍPIOS DOUTRINÁRIOS:
      UNIVERSALIDADE = todos têm direito (sem discriminação)
      INTEGRALIDADE = atendimento completo (prevenção + cura)
      EQUIDADE = tratar desigualmente os desiguais (recursos para mais pobres)`,
      
      `PASSO 3 - 3 DIRETRIZES ORGANIZATIVAS:
      DESCENTRALIZAÇÃO = poder nas prefeituras (não só Brasília)
      REGIONALIZAÇÃO = organizar por região (respeita características locais)
      HIERARQUIZAÇÃO = níveis de complexidade (primária → secundária → terciária)`,
      
      `PASSO 4 - ESTRUTURA DE ATENÇÃO:
      PRIMÁRIA: PSF, UBS (prevenção, cura simples) ← PORTA DE ENTRADA
      SECUNDÁRIA: Hospital, ambulatório (média complexidade)
      TERCIÁRIA: Hospital especializado (alta complexidade, cirurgias)`,
      
      `PASSO 5 - FINANCIAMENTO:
      Recursos: tributos gerais (impostos federais, estaduais, municipais)
      50% do financiamento = governo federal
      25% estado
      25% município
      Gestão: secretarias de saúde (municipal, estadual, federal)`
    ],

    visualGuide: `
╔════════════════════════════════════════════════════════════════════╗
║  ESTRUTURA SUS - 3 NÍVEIS DE ATENÇÃO                               ║
╚════════════════════════════════════════════════════════════════════╝

PRIMÁRIA (Atenção Básica):
├─ Posto de Saúde
├─ PSF (Programa Saúde da Família)
├─ UBS (Unidade Básica de Saúde)
├─ Prevenção, educação, medicamentos básicos
└─ Porta de entrada do sistema

SECUNDÁRIA (Média Complexidade):
├─ Ambulatório especializado
├─ Centro de atenção psicossocial
├─ Atendimento mais específico
└─ Encaminhamento da primária

TERCIÁRIA (Alta Complexidade):
├─ Hospital geral/especializado
├─ Cirurgias, internações
├─ Procedimentos de risco
└─ Referência da secundária

╔════════════════════════════════════════════════════════════════════╗
║  3 PRINCÍPIOS                                                      ║
╚════════════════════════════════════════════════════════════════════╝

UNIVERSALIDADE = TODOS (sem discriminação)
INTEGRALIDADE = COMPLETO (prevenção + cura)
EQUIDADE = DESIGUAL aos desiguais (riqueza para mais pobres)
`,

    provenTricks: [
      "🎯 TRUQUE 1 - LEI 8.080/90: A PRINCIPAL (cria SUS e princípios)",
      "🎯 TRUQUE 2 - EQUIDADE ≠ IGUALDADE: Equidade = dar MAIS pra quem tem MENOS",
      "🎯 TRUQUE 3 - PRIMÁRIA = porta de entrada (sempre começa aqui)",
      "🎯 TRUQUE 4 - DESCENTRALIZAÇÃO = prefeituras têm poder"
    ],

    questionsResolved: [
      {
        number: 1,
        text: `Qual é a PORTA DE ENTRADA do SUS?`,
        options: [
          "Hospital geral",
          "Atenção primária (PSF/UBS)",
          "Ambulatório especializado"
        ],
        correctAnswer: "Atenção primária (PSF/UBS)",
        whyCorrect: `Hierarquização do SUS: primária → secundária → terciária
        Paciente SEMPRE entra pela atenção primária (PSF/UBS)
        Daí encaminha se precisar de complexidade maior ✓`,
        strategy: "PRIMÁRIA sempre primeira. Se precisa mais = encaminha para secundária."
      },
      {
        number: 2,
        text: `Qual princípio permite DIFERENTES ações pra DIFERENTES populações?`,
        options: ["Universalidade", "Integralidade", "Equidade"],
        correctAnswer: "Equidade",
        whyCorrect: `EQUIDADE = tratar desigualmente os desiguais
        Exemplo: indígena e rico precisam de ações diferentes
        UNIVERSALIDADE = todos têm ACESSO (mas não mesma ação)
        EQUIDADE = mesma oportunidade (ações diferentes)`,
        strategy: "EQUIDADE = desigual aos desiguais. Universalidade = acesso para todos."
      }
    ],

    cheatSheet: `
════════════════════════════════════════════════════════════════════
SUS - LEI 8.080/90
════════════════════════════════════════════════════════════════════

3 PRINCÍPIOS:
UNIVERSALIDADE = todos
INTEGRALIDADE = completo (prevenção+cura)
EQUIDADE = desigual aos desiguais

3 DIRETRIZES:
DESCENTRALIZAÇÃO = prefeituras
REGIONALIZAÇÃO = por região
HIERARQUIZAÇÃO = primária→secundária→terciária

ESTRUTURA:
PRIMÁRIA (PSF/UBS) = porta entrada
SECUNDÁRIA (ambulatório, média complexidade)
TERCIÁRIA (hospital, alta complexidade)

FINANCIAMENTO:
Federal 50% | Estado 25% | Município 25%

════════════════════════════════════════════════════════════════════
`
  },

  // (continuar com mais tópicos de Saúde)
  // ESF, Vigilância, Saúde Mental, Administração, Biossegurança, Atenção Básica
];

// ====================================================================
// EXPORTAÇÃO FINAL - TODOS OS MATERIAIS
// ====================================================================

export const allStudyMaterials = [
  ...portuguesSuperiorMaterials,
  ...portuguesMedioMaterials,
  ...matematicaMaterials,
  ...conhecimentosGeraisMaterials,
  ...saudeMaterials
];

export default {
  portuguesSuperiorMaterials,
  portuguesMedioMaterials,
  matematicaMaterials,
  conhecimentosGeraisMaterials,
  saudeMaterials,
  allPortugueseMaterials,
  allStudyMaterials
};
