import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { positions } from "@/lib/data";
import { Users, Clock, Banknote, ArrowRight } from "lucide-react";

export function PositionsSection() {
  return (
    <section className="bg-muted/30 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Cargos Disponiveis
          </h2>
          <p className="mt-4 text-muted-foreground">
            Materiais de estudo organizados para cada cargo do concurso
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {positions.map((position) => (
            <Card key={position.id} className="relative overflow-hidden border-border bg-card transition-shadow hover:shadow-lg">
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-primary/10" />
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <Badge 
                      variant="secondary" 
                      className="mb-2"
                    >
                      Codigo {position.code}
                    </Badge>
                    <CardTitle className="text-xl">{position.name}</CardTitle>
                    <CardDescription className="mt-1">
                      {position.requirements}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-3 gap-4 border-t border-border pt-4">
                  <div className="flex flex-col">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Users className="h-3 w-3" />
                      Vagas
                    </span>
                    <span className="text-lg font-semibold text-foreground">
                      {position.vacancies}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      Carga Horaria
                    </span>
                    <span className="text-lg font-semibold text-foreground">
                      {position.workload.replace(" semanais", "")}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Banknote className="h-3 w-3" />
                      Salario
                    </span>
                    <span className="text-lg font-semibold text-foreground">
                      {position.salary}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {position.subjects.map((subject) => (
                    <Badge key={subject.id} variant="outline" className="text-xs">
                      {subject.name}
                    </Badge>
                  ))}
                </div>

                <Button asChild className="mt-6 w-full" variant="default">
                  <Link href={`/cargos/${position.id}`}>
                    Acessar Material de Estudo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
