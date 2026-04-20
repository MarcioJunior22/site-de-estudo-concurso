"use client";

import { useEffect, useMemo, useState } from "react";
import { RotateCw, CheckCircle2, CircleHelp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface FlashcardItem {
  id: string;
  term: string;
  definition: string;
}

interface FlashcardProps {
  cards: FlashcardItem[];
  className?: string;
}

function resetQueue(length: number): number[] {
  return Array.from({ length }, (_, index) => index);
}

export function Flashcard({ cards, className }: FlashcardProps) {
  const [queue, setQueue] = useState<number[]>(() => resetQueue(cards.length));
  const [knownCount, setKnownCount] = useState(0);
  const [unknownCount, setUnknownCount] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setQueue(resetQueue(cards.length));
    setKnownCount(0);
    setUnknownCount(0);
    setFlipped(false);
  }, [cards]);

  const totalCards = cards.length;
  const currentIndex = queue[0];
  const currentCard = typeof currentIndex === "number" ? cards[currentIndex] : null;
  const progress = useMemo(
    () => (totalCards === 0 ? 0 : Math.round(((knownCount + unknownCount) / totalCards) * 100)),
    [knownCount, unknownCount, totalCards],
  );

  const handleKnow = () => {
    if (!currentCard) return;
    setQueue((prev) => prev.slice(1));
    setKnownCount((value) => value + 1);
    setFlipped(false);
  };

  const handleDontKnow = () => {
    if (!currentCard) return;
    setQueue((prev) => (prev.length > 1 ? [...prev.slice(1), prev[0]] : prev));
    setUnknownCount((value) => value + 1);
    setFlipped(false);
  };

  const handleReset = () => {
    setQueue(resetQueue(cards.length));
    setKnownCount(0);
    setUnknownCount(0);
    setFlipped(false);
  };

  if (cards.length === 0) {
    return (
      <Card className={cn("border-border bg-card", className)}>
        <CardContent className="py-8 text-center text-sm text-muted-foreground">
          Sem flashcards para este topico.
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn("border-border bg-card", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-base">Flashcards</CardTitle>
          <Badge variant="outline">
            {queue.length === 0 ? "Concluido" : `${queue.length} restantes`}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {currentCard ? (
          <>
            <button
              type="button"
              onClick={() => setFlipped((value) => !value)}
              className="block w-full text-left [perspective:1200px]"
              aria-label="Virar flashcard"
            >
              <div
                className={cn(
                  "relative h-44 w-full rounded-xl border border-border transition-transform duration-500 [transform-style:preserve-3d]",
                  flipped && "[transform:rotateY(180deg)]",
                )}
              >
                <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-primary/5 p-5 [backface-visibility:hidden]">
                  <div className="space-y-2 text-center">
                    <Badge variant="secondary">Frente</Badge>
                    <p className="text-base font-semibold text-foreground">{currentCard.term}</p>
                    <p className="text-xs text-muted-foreground">Toque para ver a definicao</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-accent/5 p-5 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="space-y-2 text-center">
                    <Badge variant="secondary">Verso</Badge>
                    <p className="text-sm text-foreground">{currentCard.definition}</p>
                  </div>
                </div>
              </div>
            </button>

            <div className="grid gap-2 sm:grid-cols-2">
              <Button variant="outline" onClick={handleDontKnow} className="w-full">
                <CircleHelp className="mr-2 h-4 w-4" />
                Nao sei
              </Button>
              <Button onClick={handleKnow} className="w-full">
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Sei
              </Button>
            </div>
          </>
        ) : (
          <div className="rounded-xl border border-accent/30 bg-accent/10 p-6 text-center">
            <p className="font-semibold text-accent">Fila concluida!</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Reinicie para revisar novamente em repeticao espacada.
            </p>
          </div>
        )}

        <div className="space-y-2 rounded-lg bg-muted/30 p-3">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Progresso de revisao</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 rounded-full bg-muted">
            <div className="h-2 rounded-full bg-primary transition-all" style={{ width: `${progress}%` }} />
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Sei: {knownCount}</span>
            <span>Nao sei: {unknownCount}</span>
          </div>
        </div>

        <Button variant="ghost" onClick={handleReset} className="w-full">
          <RotateCw className="mr-2 h-4 w-4" />
          Reiniciar flashcards
        </Button>
      </CardContent>
    </Card>
  );
}
