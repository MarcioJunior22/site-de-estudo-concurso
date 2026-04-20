"use client";

import { Position } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Target, Clock, TrendingUp } from "lucide-react";

interface PositionSidebarProps {
  position: Position;
}

export function PositionSidebar({ position }: PositionSidebarProps) {
  const totalTopics = position.subjects.reduce(
    (acc, subject) => acc + subject.topics.length,
    0
  );

  const totalQuestions = position.subjects.reduce(
    (acc, subject) => acc + subject.totalQuestions,
    0
  );

  return (
    <div className="space-y-4">
      <Card className="border-border bg-card">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base">
            <TrendingUp className="h-4 w-4 text-primary" />
            Seu Progresso
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="mb-1 flex justify-between text-sm">
              <span className="text-muted-foreground">Topicos estudados</span>
              <span className="font-medium">0/{totalTopics}</span>
            </div>
            <Progress value={0} className="h-2" />
          </div>
          <div>
            <div className="mb-1 flex justify-between text-sm">
              <span className="text-muted-foreground">Questoes respondidas</span>
              <span className="font-medium">0/0</span>
            </div>
            <Progress value={0} className="h-2" />
          </div>
          <div>
            <div className="mb-1 flex justify-between text-sm">
              <span className="text-muted-foreground">Taxa de acertos</span>
              <span className="font-medium">--%</span>
            </div>
            <Progress value={0} className="h-2" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-border bg-card">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base">
            <Target className="h-4 w-4 text-primary" />
            Estrutura da Prova
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {position.subjects.map((subject) => (
              <div key={subject.id} className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{subject.name}</span>
                <Badge variant="secondary" className="text-xs">
                  {subject.totalQuestions} questoes
                </Badge>
              </div>
            ))}
            <div className="border-t border-border pt-3">
              <div className="flex items-center justify-between font-medium">
                <span className="text-sm text-foreground">Total</span>
                <span className="text-sm text-foreground">{totalQuestions} questoes</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border bg-card">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base">
            <Clock className="h-4 w-4 text-primary" />
            Datas Importantes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Inscricoes</span>
              <span className="font-medium">16/06 a 20/07/2026</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Prova Objetiva</span>
              <span className="font-medium">23/08/2026</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Homologacao</span>
              <span className="font-medium">14/09/2026</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border bg-primary/5">
        <CardContent className="py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Dica de Estudo</p>
              <p className="text-xs text-muted-foreground">
                Foque nos Conhecimentos Especificos - eles representam 60% da nota!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
