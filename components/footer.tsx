import { GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">EstudaConcurso</span>
          </div>
          
          <p className="text-center text-sm text-muted-foreground">
            Plataforma de estudos para o Concurso Publico de Bom Repouso/MG - Edital 001/2026
          </p>
          
          <p className="text-sm text-muted-foreground">
            2026 - Todos os direitos reservados
          </p>
        </div>
        
        <div className="mt-6 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>
            Este site e uma ferramenta de estudo e nao possui vinculo oficial com a Prefeitura Municipal de Bom Repouso ou a organizadora do concurso.
            Consulte sempre o edital oficial para informacoes atualizadas.
          </p>
        </div>
      </div>
    </footer>
  );
}
