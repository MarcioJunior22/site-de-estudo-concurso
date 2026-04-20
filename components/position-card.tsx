import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Position } from "@/lib/data";
import { Users, Clock, Banknote, ArrowRight, BookOpen } from "lucide-react";

interface PositionCardProps {
  position: Position;
}

export function PositionCard({ position }: PositionCardProps) {
  const totalTopics = position.subjects.reduce(
    (acc, subject) => acc + subject.topics.length,
    0
  );

  return (
    <Card className="relative overflow-hidden border-border bg-card transition-shadow hover:shadow-lg">
      <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-primary/5" />
      
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <Badge variant="secondary" className="mb-2">
              Codigo {position.code} - {position.level === "superior" ? "Nivel Superior" : "Nivel Medio"}
            </Badge>
            <CardTitle className="text-xl">{position.name}</CardTitle>
            <CardDescription className="mt-1">
              {position.requirements}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col rounded-lg bg-muted/50 p-3">
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Users className="h-3 w-3" />
              Vagas
            </span>
            <span className="text-lg font-semibold text-foreground">
              {position.vacancies}
            </span>
          </div>
          <div className="flex flex-col rounded-lg bg-muted/50 p-3">
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              Carga
            </span>
            <span className="text-lg font-semibold text-foreground">
              {position.workload.replace(" semanais", "")}
            </span>
          </div>
          <div className="flex flex-col rounded-lg bg-muted/50 p-3">
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Banknote className="h-3 w-3" />
              Salario
            </span>
            <span className="text-lg font-semibold text-foreground">
              {position.salary}
            </span>
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Disciplinas</span>
            <span className="font-medium text-foreground">{position.subjects.length}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {position.subjects.map((subject) => (
              <Badge key={subject.id} variant="outline" className="text-xs">
                {subject.name}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Topicos de Estudo</span>
            <span className="font-medium text-foreground">{totalTopics} topicos</span>
          </div>
          <Progress value={0} className="h-2" />
          <p className="mt-1 text-xs text-muted-foreground">0% concluido</p>
        </div>

        <div className="flex gap-2">
          <Button asChild className="flex-1">
            <Link href={`/cargos/${position.id}`}>
              <BookOpen className="mr-2 h-4 w-4" />
              Estudar
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/questoes?cargo=${position.id}`}>
              Questoes
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
