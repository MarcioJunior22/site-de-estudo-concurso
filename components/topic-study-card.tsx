"use client";

import Link from "next/link";
import { useMemo } from "react";
import { BookOpen, BrainCircuit, Lightbulb, Target } from "lucide-react";
import { Topic } from "@/lib/data";
import { MindMapViewer } from "@/components/mind-map-viewer";
import { Flashcard } from "@/components/flashcard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TopicStudyCardProps {
  topic: Topic;
  positionId?: string;
  subjectId?: string;
  showActions?: boolean;
}

export function TopicStudyCard({
  topic,
  positionId,
  subjectId,
  showActions = false,
}: TopicStudyCardProps) {
  const flashcards = useMemo(
    () =>
      (topic.tips ?? []).map((tip, index) => {
        const separator = tip.indexOf(":");
        const term = separator >= 0 ? tip.slice(0, separator).trim() : `Dica ${index + 1}`;
        const definition = separator >= 0 ? tip.slice(separator + 1).trim() : tip;
        return {
          id: `${topic.id}-flash-${index + 1}`,
          term,
          definition,
        };
      }),
    [topic.id, topic.tips],
  );

  return (
    <Card className="border-border bg-card">
      <CardHeader className="space-y-3 pb-3">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <CardTitle className="text-lg">{topic.name}</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">{topic.description}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline">{topic.keyPoints?.length ?? 0} pontos-chave</Badge>
            <Badge variant="secondary">{topic.tips?.length ?? 0} dicas</Badge>
          </div>
        </div>

        {showActions && positionId && subjectId && (
          <div className="flex flex-wrap gap-2">
            {topic.mindMapNodes && topic.mindMapNodes.length > 0 && (
              <Button asChild size="sm" variant="outline">
                <Link href={`/mapas-mentais?cargo=${positionId}&disciplina=${subjectId}&topico=${topic.id}`}>
                  <BrainCircuit className="mr-2 h-4 w-4" />
                  Abrir Mapa
                </Link>
              </Button>
            )}
            <Button asChild size="sm" variant="outline">
              <Link href={`/questoes?cargo=${positionId}&disciplina=${subjectId}&topico=${topic.id}`}>
                <Target className="mr-2 h-4 w-4" />
                Questoes do Topico
              </Link>
            </Button>
          </div>
        )}
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="resumo" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="resumo">
              <BookOpen className="mr-1 h-4 w-4" />
              Resumo
            </TabsTrigger>
            <TabsTrigger value="mapa">
              <BrainCircuit className="mr-1 h-4 w-4" />
              Mapa Mental
            </TabsTrigger>
            <TabsTrigger value="dicas">
              <Lightbulb className="mr-1 h-4 w-4" />
              Dicas Rapidas
            </TabsTrigger>
          </TabsList>

          <TabsContent value="resumo" className="space-y-4">
            <div className="rounded-lg bg-muted/30 p-4">
              <p className="text-sm leading-relaxed text-foreground">{topic.summary}</p>
            </div>

            {(topic.keyPoints?.length ?? 0) > 0 && (
              <div>
                <h4 className="mb-2 text-sm font-semibold text-foreground">Pontos mais cobrados</h4>
                <ul className="space-y-2">
                  {topic.keyPoints!.map((point, index) => (
                    <li key={`${topic.id}-kp-${index + 1}`} className="rounded-md bg-background p-2 text-sm text-foreground">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(topic.references?.length ?? 0) > 0 && (
              <div>
                <h4 className="mb-2 text-sm font-semibold text-foreground">Referencias</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {topic.references.map((reference, index) => (
                    <li key={`${topic.id}-ref-${index + 1}`}>- {reference}</li>
                  ))}
                </ul>
              </div>
            )}
          </TabsContent>

          <TabsContent value="mapa">
            {topic.mindMapNodes && topic.mindMapNodes.length > 0 ? (
              <MindMapViewer nodes={topic.mindMapNodes} />
            ) : (
              <div className="rounded-lg border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
                Este topico ainda nao possui mapa mental.
              </div>
            )}
          </TabsContent>

          <TabsContent value="dicas" className="space-y-4">
            {(topic.tips?.length ?? 0) > 0 ? (
              <>
                <ul className="space-y-2">
                  {topic.tips!.map((tip, index) => (
                    <li key={`${topic.id}-tip-${index + 1}`} className="rounded-md bg-muted/30 p-3 text-sm text-foreground">
                      {tip}
                    </li>
                  ))}
                </ul>
                <Flashcard cards={flashcards} />
              </>
            ) : (
              <div className="rounded-lg border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
                Sem dicas rapidas cadastradas para este topico.
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
