import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Building, FileText, Globe, Clock, CreditCard } from "lucide-react";
import { examInfo } from "@/lib/data";

const infoItems = [
  {
    icon: Building,
    title: "Organizadora",
    value: examInfo.organizadora,
  },
  {
    icon: FileText,
    title: "Edital",
    value: examInfo.edital,
  },
  {
    icon: Calendar,
    title: "Inscricoes",
    value: `${examInfo.inscricoes.inicio} a ${examInfo.inscricoes.fim}`,
  },
  {
    icon: Clock,
    title: "Data da Prova",
    value: examInfo.prova,
  },
  {
    icon: Globe,
    title: "Site Oficial",
    value: examInfo.site,
  },
  {
    icon: CreditCard,
    title: "Taxa de Inscricao",
    value: "R$ 114,60 (Nivel Superior)",
  },
];

export function ExamInfoSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Informacoes do Concurso
          </h2>
          <p className="mt-4 text-muted-foreground">
            Dados oficiais extraidos do Edital 001/2026 da Prefeitura Municipal de Bom Repouso/MG
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {infoItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="border-border bg-card">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <Icon className="h-4 w-4" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-foreground">{item.value}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 rounded-lg border border-border bg-muted/50 p-6">
          <h3 className="font-semibold text-foreground">Estrutura da Prova Objetiva - Nivel Superior</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-card p-4">
              <p className="text-2xl font-bold text-primary">10</p>
              <p className="text-sm text-muted-foreground">Questoes de Portugues</p>
              <p className="text-xs text-muted-foreground">Peso: 0,20 cada</p>
            </div>
            <div className="rounded-lg bg-card p-4">
              <p className="text-2xl font-bold text-primary">5</p>
              <p className="text-sm text-muted-foreground">Questoes de Matematica</p>
              <p className="text-xs text-muted-foreground">Peso: 0,20 cada</p>
            </div>
            <div className="rounded-lg bg-card p-4">
              <p className="text-2xl font-bold text-primary">5</p>
              <p className="text-sm text-muted-foreground">Conhecimentos Gerais</p>
              <p className="text-xs text-muted-foreground">Peso: 0,20 cada</p>
            </div>
            <div className="rounded-lg bg-card p-4">
              <p className="text-2xl font-bold text-primary">20</p>
              <p className="text-sm text-muted-foreground">Conhec. Especificos</p>
              <p className="text-xs text-muted-foreground">Peso: 0,30 cada</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Total: 40 questoes | Pontuacao maxima: 10 pontos
          </p>
        </div>
      </div>
    </section>
  );
}
