import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SubjectAccordion } from "@/components/subject-accordion";
import { PositionSidebar } from "@/components/position-sidebar";
import { positions } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, FileText, Target } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CargoDetailPage({ params }: PageProps) {
  const { id } = await params;
  const position = positions.find((p) => p.id === id);

  if (!position) {
    notFound();
  }

  const totalTopics = position.subjects.reduce(
    (acc, subject) => acc + subject.topics.length,
    0
  );

  const totalQuestions = position.subjects.reduce(
    (acc, subject) => acc + subject.totalQuestions,
    0
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="border-b border-border bg-muted/30 py-8">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Button asChild variant="ghost" size="sm" className="mb-4">
              <Link href="/cargos">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar aos Cargos
              </Link>
            </Button>

            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <Badge variant="secondary" className="mb-2">
                  Codigo {position.code}
                </Badge>
                <h1 className="text-3xl font-bold text-foreground">{position.name}</h1>
                <p className="mt-2 text-muted-foreground">{position.requirements}</p>
                
                <div className="mt-4 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-muted-foreground">Vagas:</span>
                    <span className="font-medium text-foreground">{position.vacancies}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-muted-foreground">Salario:</span>
                    <span className="font-medium text-foreground">{position.salary}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-muted-foreground">Carga:</span>
                    <span className="font-medium text-foreground">{position.workload}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button asChild variant="outline">
                  <Link href={`/questoes?cargo=${position.id}`}>
                    <Target className="mr-2 h-4 w-4" />
                    Fazer Questoes
                  </Link>
                </Button>
                <Button asChild>
                  <Link href={`/plano-estudos?cargo=${position.id}`}>
                    <FileText className="mr-2 h-4 w-4" />
                    Plano de Estudos
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground">Conteudo Programatico</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {position.subjects.length} disciplinas, {totalTopics} topicos, {totalQuestions} questoes na prova
                </p>
              </div>

              <SubjectAccordion subjects={position.subjects} positionId={position.id} />
            </div>

            <aside className="lg:sticky lg:top-24 lg:h-fit">
              <PositionSidebar position={position} />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return positions.map((position) => ({
    id: position.id,
  }));
}
