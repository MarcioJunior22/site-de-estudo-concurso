# 🛠️ Guia Técnico: Implementação de Conteúdo Melhorado no Frontend

## Visão Geral

O sistema atual mostra tópicos com mapa mental básico. Necessário expandir para mostrar conteúdo profundo de forma didática e interativa.

---

## 1. Estrutura de Dados (Já Implementada)

Arquivo: `lib/data-improved.ts`

```typescript
export interface Topic {
  id: string;
  name: string;
  description: string;
  references: string[];
  mindMapNodes?: MindMapNode[];
  summary?: string;              // ✅ Novo: 500-800 palavras
  keyPoints?: string[];           // ✅ Expandido: 8-12 pontos
  tips?: string[];                // ✅ Expandido: 10-15 dicas
  studyGuide?: string;            // ✅ Novo: guia de estudo
  practicalExamples?: string[];   // ✅ Novo: exemplos práticos
}
```

**Arquivos afetados a criar/modificar**:
- [ ] `components/topic-study-card.tsx` - Expandir visualização
- [ ] `components/topic-content-expanded.tsx` - NOVO componente
- [ ] `components/study-guide-viewer.tsx` - NOVO componente

---

## 2. Componentes Necessários

### 2.1 TopicContentExpanded.tsx (NOVO)

**Propósito**: Mostrar conteúdo profundo em abas

```typescript
// components/topic-content-expanded.tsx

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Topic } from '@/lib/data';

interface TopicContentExpandedProps {
  topic: Topic;
}

export function TopicContentExpanded({ topic }: TopicContentExpandedProps) {
  const [selectedTab, setSelectedTab] = useState('resumo');

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{topic.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="resumo">Resumo</TabsTrigger>
            <TabsTrigger value="pontos-chave">Pontos-Chave</TabsTrigger>
            <TabsTrigger value="dicas">Dicas de Prova</TabsTrigger>
            <TabsTrigger value="exemplos">Exemplos</TabsTrigger>
          </TabsList>

          {/* TAB 1: RESUMO */}
          <TabsContent value="resumo" className="space-y-4">
            <div className="prose prose-sm max-w-none">
              <p className="text-base leading-relaxed whitespace-pre-wrap">
                {topic.summary}
              </p>
            </div>
            
            {/* Referências */}
            {topic.references && topic.references.length > 0 && (
              <div className="mt-6 pt-4 border-t">
                <h4 className="font-semibold mb-2">📚 Referências Bibliográficas:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {topic.references.map((ref, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground">{ref}</li>
                  ))}
                </ul>
              </div>
            )}
          </TabsContent>

          {/* TAB 2: PONTOS-CHAVE */}
          <TabsContent value="pontos-chave" className="space-y-3">
            <p className="text-sm text-muted-foreground mb-4">
              ⭐ Conceitos principais que devem ser memorizados e aplicados em questões
            </p>
            {topic.keyPoints?.map((point, idx) => (
              <div key={idx} className="flex gap-3 p-3 bg-secondary/30 rounded-lg">
                <span className="font-bold text-primary min-w-fit">#{idx + 1}</span>
                <p className="text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </TabsContent>

          {/* TAB 3: DICAS DE PROVA */}
          <TabsContent value="dicas" className="space-y-3">
            <p className="text-sm text-muted-foreground mb-4">
              💡 Estratégias e macetes para resolver questões eficientemente
            </p>
            {topic.tips?.map((tip, idx) => (
              <div key={idx} className="flex gap-3 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg border-l-4 border-blue-500">
                <span className="font-bold text-blue-600 dark:text-blue-400 min-w-fit">💡</span>
                <p className="text-sm leading-relaxed">{tip}</p>
              </div>
            ))}
          </TabsContent>

          {/* TAB 4: EXEMPLOS PRÁTICOS */}
          <TabsContent value="exemplos" className="space-y-3">
            <p className="text-sm text-muted-foreground mb-4">
              📝 Casos reais que ilustram o conceito
            </p>
            {topic.practicalExamples?.map((example, idx) => (
              <div key={idx} className="p-3 bg-green-50 dark:bg-green-950 rounded-lg border-l-4 border-green-500">
                <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">
                  EXEMPLO {idx + 1}
                </p>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{example}</p>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
```

**Uso**:
```tsx
<TopicContentExpanded topic={selectedTopic} />
```

---

### 2.2 StudyGuideViewer.tsx (NOVO)

**Propósito**: Mostrar guia de estudo personalizado

```typescript
// components/study-guide-viewer.tsx

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Topic } from '@/lib/data';
import { BookOpen, Clock, Target } from 'lucide-react';

interface StudyGuideViewerProps {
  topic: Topic;
}

export function StudyGuideViewer({ topic }: StudyGuideViewerProps) {
  const weeks = topic.studyGuide?.split('\n\n') || [];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          Guia de Estudo Personalizado: {topic.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Tempo Estimado */}
        <Alert className="bg-blue-50 border-blue-200">
          <Clock className="h-4 w-4" />
          <AlertDescription>
            <strong>Tempo recomendado:</strong> 8-10 horas (divididas em 2-3 semanas)
          </AlertDescription>
        </Alert>

        {/* Objetivo */}
        <Alert className="bg-green-50 border-green-200">
          <Target className="h-4 w-4" />
          <AlertDescription>
            <strong>Objetivo final:</strong> Aplicar conceitos em questões múltipla escolha e redação
          </AlertDescription>
        </Alert>

        {/* Semanas de Estudo */}
        <div className="space-y-4">
          {weeks.map((week, idx) => (
            <div key={idx} className="p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
              <h3 className="font-semibold mb-2">📅 Semana {idx + 1}</h3>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{week}</p>
            </div>
          ))}
        </div>

        {/* Dica Final */}
        <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-950">
          <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
            💪 Dica Final
          </p>
          <p className="text-sm text-yellow-700 dark:text-yellow-300">
            Não procure decorar tudo. Foco em COMPREENDER o conceito, depois pratique com questões. 
            Memória de curto prazo esquece; compreensão fica para a vida!
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
```

---

### 2.3 MindMapViewerEnhanced.tsx (MODIFICAR)

**Objetivo**: Expandir `mind-map-viewer.tsx` para mostrar mais detalhes

Adicionar:
- Clique em nó → expandir descrição
- Cor diferente por profundidade
- Contadores de subitens

---

## 3. Página de Tópico Expandida

### Arquivo: `app/mapas-mentais/[topicId]/page.tsx` (NOVO)

```typescript
'use client';

import { useState } from 'react';
import { positions } from '@/lib/data';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { TopicContentExpanded } from '@/components/topic-content-expanded';
import { StudyGuideViewer } from '@/components/study-guide-viewer';
import { MindMapViewerEnhanced } from '@/components/mind-map-viewer-enhanced';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, BookOpen, Brain, ListChecks } from 'lucide-react';
import Link from 'next/link';

interface Props {
  params: {
    topicId: string;
  };
}

export default function TopicDetailPage({ params }: Props) {
  const { topicId } = params;
  
  // Procurar tópico em todas as disciplinas
  let topic = null;
  for (const position of positions) {
    for (const subject of position.subjects) {
      const found = subject.topics.find(t => t.id === topicId);
      if (found) {
        topic = found;
        break;
      }
    }
    if (topic) break;
  }

  if (!topic) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 container mx-auto py-8">
          <p>Tópico não encontrado</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto py-8 px-4">
        {/* Breadcrumb */}
        <Link href="/mapas-mentais" className="flex items-center gap-2 text-blue-600 hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" />
          Voltar aos Mapas Mentais
        </Link>

        {/* Título */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{topic.name}</h1>
          <p className="text-muted-foreground">{topic.description}</p>
        </div>

        {/* Tabs Principais */}
        <Tabs defaultValue="conteudo" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="conteudo" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Conteúdo
            </TabsTrigger>
            <TabsTrigger value="mapa" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Mapa Mental
            </TabsTrigger>
            <TabsTrigger value="guia" className="flex items-center gap-2">
              <ListChecks className="w-4 h-4" />
              Guia de Estudo
            </TabsTrigger>
          </TabsList>

          {/* Content Tab */}
          <TabsContent value="conteudo">
            <TopicContentExpanded topic={topic} />
          </TabsContent>

          {/* Mind Map Tab */}
          <TabsContent value="mapa">
            <Card>
              <CardContent className="pt-6">
                {topic.mindMapNodes && topic.mindMapNodes.length > 0 ? (
                  <MindMapViewerEnhanced nodes={topic.mindMapNodes} />
                ) : (
                  <p className="text-muted-foreground">Mapa mental não disponível</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Study Guide Tab */}
          <TabsContent value="guia">
            {topic.studyGuide ? (
              <StudyGuideViewer topic={topic} />
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">Guia de estudo em desenvolvimento</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}
```

---

## 4. Integração com Data

### Opção A: Substituir `data.ts`

```bash
# Fazer backup
cp lib/data.ts lib/data-original.ts

# Usar novo arquivo
mv lib/data-improved.ts lib/data.ts
```

### Opção B: Usar em Paralelo (Mais Seguro)

Manter ambos os arquivos e criar um selector:

```typescript
// lib/data-selector.ts

export const useStudyData = () => {
  // Retornar dados melhorados quando disponível
  const isImprovedVersion = process.env.NEXT_PUBLIC_USE_IMPROVED_DATA === 'true';
  
  if (isImprovedVersion) {
    return import('./data-improved').then(m => m.default);
  } else {
    return import('./data').then(m => m.default);
  }
};
```

---

## 5. Migrations Gradual

### Fase 1 (Semana 1): Português Superior
- ✅ 3-4 tópicos com conteúdo completo
- Implementar componentes de visualização
- Testar interatividade

### Fase 2 (Semana 2): Saúde da Família
- ✅ 8-10 tópicos de Enfermagem
- Adicionar questões de exemplo
- Feedback dos usuários

### Fase 3 (Semana 3-4): Outras Disciplinas
- Matemática
- Conhecimentos Gerais
- Auxiliar Administrativo
- Monitor de Apoio

---

## 6. Checklist de Implementação

### Backend/Data
- [ ] Arquivo `lib/data-improved.ts` criado com conteúdo
- [ ] Schema Topic expandido (summary, tips, practicalExamples)
- [ ] Dados estruturados e validados

### Frontend
- [ ] Componente `TopicContentExpanded.tsx` (com abas)
- [ ] Componente `StudyGuideViewer.tsx`
- [ ] Página `/mapas-mentais/[topicId]` criada
- [ ] Responsividade testada (mobile/desktop)

### UX/Design
- [ ] Cores consistentes com tema
- [ ] Ícones apropriados (BookOpen, Brain, Target, etc)
- [ ] Tipografia clara e legível
- [ ] Espaçamento equilibrado

### Testes
- [ ] Navegação entre abas funciona
- [ ] Conteúdo longas não quebra layout
- [ ] Links/referências funcionam
- [ ] Performance aceitável

---

## 7. Tecnologias Necessárias

Já disponíveis:
- ✅ Next.js 16.2
- ✅ React 19
- ✅ Tailwind CSS
- ✅ TypeScript
- ✅ Radix UI (Tabs, Card, Alert)

Opcionais (para versão futura):
- 📦 `react-markdown` - Renderizar markdown
- 📦 `highlight.js` - Highlight código
- 📦 `zustand` - State management (progresso)

---

## 8. Estrutura de Pastas (Recomendado)

```
src/
├── components/
│   ├── topic-content-expanded.tsx      (NOVO)
│   ├── study-guide-viewer.tsx          (NOVO)
│   ├── mind-map-viewer-enhanced.tsx    (NOVO)
│   ├── topic-study-card.tsx            (EXISTENTE - EXPANDIR)
│   └── ui/
│       └── tabs.tsx                    (USAR)
├── lib/
│   ├── data.ts                         (ATUAL)
│   ├── data-improved.ts                (✅ CRIADO)
│   ├── data-selector.ts                (NOVO - opcional)
│   └── utils.ts
└── app/
    ├── mapas-mentais/
    │   ├── page.tsx                    (EXISTENTE)
    │   └── [topicId]/
    │       └── page.tsx                (NOVO)
```

---

## 9. Performance e Otimização

### Code Splitting
```typescript
// Lazy load componentes pesados
const TopicContentExpanded = dynamic(() => import('@/components/topic-content-expanded'));
```

### Memoization
```typescript
// Evitar re-renders desnecessários
const MemoizedTopic = React.memo(TopicContentExpanded);
```

### Caching
```typescript
// Next.js ISR (Incremental Static Regeneration)
export const revalidate = 3600; // 1 hora
```

---

## 10. Próximas Evoluções

1. **Quiz Interativo** (depois de cada seção)
2. **Progresso do Usuário** (rastreamento de estudo)
3. **Recomendações IA** (sugere próximo tópico)
4. **Exportar PDF** (baixar guia de estudo)
5. **Modo Offline** (PWA)
6. **Gamificação** (pontos, badges)

---

## 📞 Suporte Técnico

Dúvidas na implementação?

1. Consulte tipos em `Topic` interface
2. Verifique exemplos de componentes existentes
3. Teste em ambiente de desenvolvimento
4. Valide dados em `lib/data-improved.ts`

---

**Versão**: 1.0  
**Últimos 4 dígitos de atualização**: 2406  
**Status**: Pronto para Implementação
