import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PositionCard } from "@/components/position-card";
import { positions } from "@/lib/data";

export default function CargosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Cargos do Concurso</h1>
            <p className="mt-2 text-muted-foreground">
              Selecione um cargo para acessar o material de estudo completo
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {positions.map((position) => (
              <PositionCard key={position.id} position={position} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
