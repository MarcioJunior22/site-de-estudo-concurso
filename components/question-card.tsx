"use client";

import { Question } from "@/lib/data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle, Lightbulb } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  showResult: boolean;
  onSelectAnswer: (index: number) => void;
  onShowResult: () => void;
}

const difficultyColors = {
  facil: "bg-accent/10 text-accent border-accent/20",
  medio: "bg-warning/10 text-warning-foreground border-warning/20",
  dificil: "bg-destructive/10 text-destructive border-destructive/20",
};

const difficultyLabels = {
  facil: "Facil",
  medio: "Medio",
  dificil: "Dificil",
};

export function QuestionCard({
  question,
  selectedAnswer,
  showResult,
  onSelectAnswer,
  onShowResult,
}: QuestionCardProps) {
  const isCorrect = selectedAnswer === question.correctAnswer;
  const optionLabels = ["A", "B", "C", "D", "E"];

  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="mb-3 flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs">
                {question.subjectId.includes("especif") ? "Conhecimentos Especificos" : 
                 question.subjectId.includes("portugues") ? "Lingua Portuguesa" :
                 question.subjectId.includes("matematica") ? "Matematica" : "Conhecimentos Gerais"}
              </Badge>
              <Badge 
                variant="outline" 
                className={cn("text-xs", difficultyColors[question.difficulty])}
              >
                {difficultyLabels[question.difficulty]}
              </Badge>
            </div>
            <p className="text-lg leading-relaxed text-foreground">{question.text}</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrectOption = index === question.correctAnswer;
          
          let optionStyle = "border-border bg-background hover:bg-muted/50";
          
          if (showResult) {
            if (isCorrectOption) {
              optionStyle = "border-accent bg-accent/10 text-accent";
            } else if (isSelected && !isCorrectOption) {
              optionStyle = "border-destructive bg-destructive/10 text-destructive";
            }
          } else if (isSelected) {
            optionStyle = "border-primary bg-primary/10";
          }

          return (
            <button
              key={index}
              onClick={() => !showResult && onSelectAnswer(index)}
              disabled={showResult}
              className={cn(
                "flex w-full items-start gap-3 rounded-lg border p-4 text-left transition-colors",
                optionStyle,
                !showResult && "cursor-pointer"
              )}
            >
              <span className={cn(
                "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-medium",
                showResult && isCorrectOption ? "border-accent bg-accent text-accent-foreground" :
                showResult && isSelected && !isCorrectOption ? "border-destructive bg-destructive text-destructive-foreground" :
                isSelected ? "border-primary bg-primary text-primary-foreground" :
                "border-muted-foreground/30"
              )}>
                {optionLabels[index]}
              </span>
              <span className="flex-1 pt-0.5">{option}</span>
              {showResult && isCorrectOption && (
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
              )}
              {showResult && isSelected && !isCorrectOption && (
                <XCircle className="h-5 w-5 shrink-0 text-destructive" />
              )}
            </button>
          );
        })}

        {!showResult && selectedAnswer !== null && (
          <Button onClick={onShowResult} className="w-full">
            Verificar Resposta
          </Button>
        )}

        {showResult && (
          <div className={cn(
            "rounded-lg p-4",
            isCorrect ? "bg-accent/10 border border-accent/20" : "bg-destructive/10 border border-destructive/20"
          )}>
            <div className="mb-2 flex items-center gap-2">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span className="font-semibold text-accent">Resposta Correta!</span>
                </>
              ) : (
                <>
                  <XCircle className="h-5 w-5 text-destructive" />
                  <span className="font-semibold text-destructive">Resposta Incorreta</span>
                </>
              )}
            </div>
            <div className="flex items-start gap-2">
              <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">{question.explanation}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
