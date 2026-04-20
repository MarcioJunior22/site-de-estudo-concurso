import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, BrainCircuit, Target, CalendarDays, FileText, BarChart3 } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Material Organizado",
    description: "Conteudo programatico completo organizado por disciplina e topico, baseado no edital oficial.",
  },
  {
    icon: Target,
    title: "Questoes Comentadas",
    description: "Banco de questoes com gabarito comentado para voce praticar e entender cada resposta.",
  },
  {
    icon: BrainCircuit,
    title: "Mapas Mentais",
    description: "Mapas mentais interativos para facilitar a memorizacao e revisao dos conteudos.",
  },
  {
    icon: CalendarDays,
    title: "Plano de Estudos",
    description: "Cronograma personalizado de estudos com acompanhamento de progresso.",
  },
  {
    icon: FileText,
    title: "Referencias Bibliograficas",
    description: "Indicacao de materiais e livros recomendados para aprofundar seus estudos.",
  },
  {
    icon: BarChart3,
    title: "Acompanhamento",
    description: "Acompanhe seu progresso e identifique os pontos que precisam de mais atencao.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tudo que Voce Precisa para Estudar
          </h2>
          <p className="mt-4 text-muted-foreground">
            Recursos completos para sua preparacao, organizados de forma pratica e eficiente
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="border-border bg-card transition-colors hover:bg-muted/50">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
