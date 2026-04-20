"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { BrainCircuit, ChevronRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { positions, Topic } from "@/lib/data";
import { TopicStudyCard } from "@/components/topic-study-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TopicEntry {
  key: string;
  positionId: string;
  positionName: string;
  subjectId: string;
  subjectName: string;
  topic: Topic;
}

function buildKey(positionId: string, subjectId: string, topicId: string) {
  return `${positionId}::${subjectId}::${topicId}`;
}

function MapasMentaisContent() {
  const searchParams = useSearchParams();
  const cargoParam = searchParams.get("cargo");
  const disciplinaParam = searchParams.get("disciplina");
  const topicoParam = searchParams.get("topico") ?? searchParams.get("topic");

  const [selectedPosition, setSelectedPosition] = useState<string>(cargoParam || positions[0]?.id || "");
  const [selectedSubject, setSelectedSubject] = useState<string>(disciplinaParam || "all");
  const [selectedTopicKey, setSelectedTopicKey] = useState<string>("");

  const allTopicEntries = useMemo<TopicEntry[]>(
    () =>
      positions.flatMap((position) =>
        position.subjects.flatMap((subject) =>
          subject.topics
            .filter((topic) => (topic.mindMapNodes?.length ?? 0) > 0)
            .map((topic) => ({
              key: buildKey(position.id, subject.id, topic.id),
              positionId: position.id,
              positionName: position.name,
              subjectId: subject.id,
              subjectName: subject.name,
              topic,
            })),
        ),
      ),
    [],
  );

  const availableSubjects = useMemo(() => {
    const position = positions.find((item) => item.id === selectedPosition);
    return position?.subjects ?? [];
  }, [selectedPosition]);

  const filteredTopics = useMemo(() => {
    if (!selectedPosition) return [];
    return allTopicEntries.filter((entry) => {
      if (entry.positionId !== selectedPosition) return false;
      if (selectedSubject !== "all" && entry.subjectId !== selectedSubject) return false;
      return true;
    });
  }, [allTopicEntries, selectedPosition, selectedSubject]);

  useEffect(() => {
    if (!selectedPosition) return;
    const hasCurrentSubject =
      selectedSubject === "all" ||
      availableSubjects.some((subject) => subject.id === selectedSubject);

    if (!hasCurrentSubject) {
      setSelectedSubject("all");
    }
  }, [selectedPosition, selectedSubject, availableSubjects]);

  useEffect(() => {
    if (filteredTopics.length === 0) {
      setSelectedTopicKey("");
      return;
    }

    const isCurrentValid = filteredTopics.some((entry) => entry.key === selectedTopicKey);
    if (isCurrentValid) return;

    if (topicoParam) {
      const fromParam = filteredTopics.find((entry) => entry.topic.id === topicoParam);
      if (fromParam) {
        setSelectedTopicKey(fromParam.key);
        return;
      }
    }

    setSelectedTopicKey(filteredTopics[0].key);
  }, [filteredTopics, selectedTopicKey, topicoParam]);

  const selectedEntry = filteredTopics.find((entry) => entry.key === selectedTopicKey) ?? null;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Mapas Mentais por Topico</h1>
            <p className="mt-2 text-muted-foreground">
              Navegue por cargo e disciplina para estudar um mapa mental detalhado por topico.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
            <aside className="space-y-4">
              <Card className="border-border bg-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Filtro de Navegacao</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="mb-1 text-xs text-muted-foreground">Cargo</p>
                    <Select
                      value={selectedPosition}
                      onValueChange={(value) => {
                        setSelectedPosition(value);
                        setSelectedSubject("all");
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o cargo" />
                      </SelectTrigger>
                      <SelectContent>
                        {positions.map((position) => (
                          <SelectItem key={position.id} value={position.id}>
                            {position.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <p className="mb-1 text-xs text-muted-foreground">Disciplina</p>
                    <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                      <SelectTrigger>
                        <SelectValue placeholder="Todas as disciplinas" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todas as disciplinas</SelectItem>
                        {availableSubjects.map((subject) => (
                          <SelectItem key={subject.id} value={subject.id}>
                            {subject.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Topicos Disponiveis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {filteredTopics.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                      Nenhum topico com mapa mental para o filtro atual.
                    </p>
                  ) : (
                    filteredTopics.map((entry) => (
                      <Button
                        key={entry.key}
                        variant={entry.key === selectedTopicKey ? "default" : "ghost"}
                        className="h-auto w-full justify-start py-3 text-left"
                        onClick={() => setSelectedTopicKey(entry.key)}
                      >
                        <div>
                          <p className="text-sm font-medium">{entry.topic.name}</p>
                          <p className="text-xs opacity-80">{entry.subjectName}</p>
                        </div>
                      </Button>
                    ))
                  )}
                </CardContent>
              </Card>
            </aside>

            <section>
              {selectedEntry ? (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <Badge variant="outline">{selectedEntry.positionName}</Badge>
                    <ChevronRight className="h-4 w-4" />
                    <Badge variant="outline">{selectedEntry.subjectName}</Badge>
                    <ChevronRight className="h-4 w-4" />
                    <Badge variant="secondary">{selectedEntry.topic.name}</Badge>
                  </div>

                  <TopicStudyCard
                    topic={selectedEntry.topic}
                    positionId={selectedEntry.positionId}
                    subjectId={selectedEntry.subjectId}
                    showActions
                  />
                </div>
              ) : (
                <Card className="border-border bg-card">
                  <CardContent className="py-16 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <BrainCircuit className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Selecione um topico</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Use a barra lateral para escolher cargo, disciplina e topico.
                    </p>
                  </CardContent>
                </Card>
              )}
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function MapasMentaisPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Carregando...</div>}>
      <MapasMentaisContent />
    </Suspense>
  );
}
