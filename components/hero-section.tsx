import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Target } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Target className="h-4 w-4" />
            Concurso Publico 2026
          </div>
          
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Prepare-se para o Concurso de{" "}
            <span className="text-primary">Bom Repouso/MG</span>
          </h1>
          
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Plataforma completa de estudos com materiais organizados por disciplina, 
            questoes comentadas, mapas mentais e plano de estudos personalizado 
            baseado no edital oficial.
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/cargos">
                <BookOpen className="mr-2 h-5 w-5" />
                Comecar a Estudar
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="/plano-estudos">
                Ver Plano de Estudos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span>4 Cargos Disponiveis</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span>112+ Vagas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span>Prova: 23/08/2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
