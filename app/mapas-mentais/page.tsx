"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MindMapViewer } from "@/components/mind-map-viewer";
import { positions, MindMapNode } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { BrainCircuit, BookOpen, ChevronRight } from "lucide-react";

interface TopicWithMindMap {
  positionId: string;
  positionName: string;
  subjectId: string;
  subjectName: string;
  topicId: string;
  topicName: string;
  mindMapNodes: MindMapNode[];
}

function MapasMentaisContent() {
  const searchParams = useSearchParams();
  const cargoParam = searchParams.get("cargo");
  const topicParam = searchParams.get("topic");

  const [selectedPosition, setSelectedPosition] = useState<string>(cargoParam || "all");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(topicParam || null);

  const topicsWithMindMaps = useMemo(() => {
    const topics: TopicWithMindMap[] = [];
    
    positions.forEach(position => {
      position.subjects.forEach(subject => {
        subject.topics.forEach(topic => {
          if (topic.mindMapNodes && topic.mindMapNodes.length > 0) {
            topics.push({
              positionId: position.id,
              positionName: position.name,
              subjectId: subject.id,
              subjectName: subject.name,
              topicId: topic.id,
              topicName: topic.name,
              mindMapNodes: topic.mindMapNodes,
            });
          }
        });
      });
    });

    return topics;
  }, []);

  const filteredTopics = useMemo(() => {
    if (selectedPosition === "all") {
      return topicsWithMindMaps;
    }
    return topicsWithMindMaps.filter(t => t.positionId === selectedPosition);
  }, [topicsWithMindMaps, selectedPosition]);

  const selectedTopicData = selectedTopic
    ? topicsWithMindMaps.find(t => t.topicId === selectedTopic)
    : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Mapas Mentais</h1>
            <p className="mt-2 text-muted-foreground">
              Visualize os conceitos de forma organizada para facilitar a memorizacao
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
            <aside className="space-y-4">
              <Card className="border-border bg-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Filtrar por Cargo</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={selectedPosition} onValueChange={setSelectedPosition}>
                    <SelectTrigger>
                      <SelectValue placeholder="Todos os cargos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos os cargos</SelectItem>
                      {positions.map((position) => (
                        <SelectItem key={position.id} value={position.id}>
                          {position.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Topicos Disponiveis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {filteredTopics.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                      Nenhum mapa mental disponivel para este filtro.
                    </p>
                  ) : (
                    filteredTopics.map((topic) => (
                      <Button
                        key={topic.topicId}
                        variant={selectedTopic === topic.topicId ? "default" : "ghost"}
                        className="w-full justify-start text-left h-auto py-3"
                        onClick={() => setSelectedTopic(topic.topicId)}
                      >
                        <div className="flex items-start gap-2">
                          <BrainCircuit className="h-4 w-4 mt-0.5 shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">{topic.topicName}</p>
                            <p className="text-xs opacity-70 truncate">{topic.subjectName}</p>
                          </div>
                        </div>
                      </Button>
                    ))
                  )}
                </CardContent>
              </Card>
            </aside>

            <div>
              {selectedTopicData ? (
                <Card className="border-border bg-card">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span>{selectedTopicData.positionName}</span>
                      <ChevronRight className="h-4 w-4" />
                      <span>{selectedTopicData.subjectName}</span>
                    </div>
                    <CardTitle className="flex items-center gap-2">
                      <BrainCircuit className="h-5 w-5 text-primary" />
                      {selectedTopicData.topicName}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <MindMapViewer nodes={selectedTopicData.mindMapNodes} />
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-border bg-card">
                  <CardContent className="py-16 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <BrainCircuit className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Selecione um Topico
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Escolha um topico na lista ao lado para visualizar seu mapa mental
                    </p>
                    
                    {filteredTopics.length > 0 && (
                      <div className="mt-6">
                        <p className="text-sm text-muted-foreground mb-3">
                          Mapas mentais disponiveis:
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                          {filteredTopics.slice(0, 5).map((topic) => (
                            <Badge
                              key={topic.topicId}
                              variant="secondary"
                              className="cursor-pointer"
                              onClick={() => setSelectedTopic(topic.topicId)}
                            >
                              {topic.topicName}
                            </Badge>
                          ))}
                          {filteredTopics.length > 5 && (
                            <Badge variant="outline">
                              +{filteredTopics.length - 5} mais
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function MapasMentaisPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Carregando...</div>}>
      <MapasMentaisContent />
    </Suspense>
  );
}
