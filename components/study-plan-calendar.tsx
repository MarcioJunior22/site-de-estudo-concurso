"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

interface StudyPlanCalendarProps {
  schedule: {
    week: number;
    days: {
      day: number;
      date: string;
      subjects: {
        subjectId: string;
        subjectName: string;
        topics: string[];
        hours: number;
        completed: boolean;
      }[];
    }[];
  }[];
  completedDays: Set<number>;
  onToggleDay: (day: number) => void;
}

const subjectColors: Record<string, string> = {
  "portugues": "bg-chart-1/20 border-chart-1",
  "matematica": "bg-chart-2/20 border-chart-2",
  "gerais": "bg-chart-3/20 border-chart-3",
  "especificos": "bg-chart-4/20 border-chart-4",
};

function getSubjectColor(subjectId: string): string {
  if (subjectId.includes("portugues")) return subjectColors.portugues;
  if (subjectId.includes("matematica")) return subjectColors.matematica;
  if (subjectId.includes("gerais")) return subjectColors.gerais;
  return subjectColors.especificos;
}

export function StudyPlanCalendar({
  schedule,
  completedDays,
  onToggleDay,
}: StudyPlanCalendarProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 text-xs">
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 rounded bg-chart-1/50" />
          <span className="text-muted-foreground">Portugues</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 rounded bg-chart-2/50" />
          <span className="text-muted-foreground">Matematica</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 rounded bg-chart-3/50" />
          <span className="text-muted-foreground">Conh. Gerais</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 rounded bg-chart-4/50" />
          <span className="text-muted-foreground">Conh. Especificos</span>
        </div>
      </div>

      {schedule.map((week) => (
        <div key={week.week}>
          <h3 className="mb-3 text-sm font-semibold text-foreground">
            Semana {week.week}
          </h3>
          <div className="grid grid-cols-7 gap-2">
            {week.days.map((day) => {
              const isCompleted = completedDays.has(day.day);
              
              return (
                <button
                  key={day.day}
                  onClick={() => onToggleDay(day.day)}
                  className={cn(
                    "relative flex flex-col rounded-lg border p-2 text-left transition-all hover:shadow-md min-h-[100px]",
                    isCompleted
                      ? "border-accent bg-accent/10"
                      : "border-border bg-card hover:bg-muted/50"
                  )}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-muted-foreground">
                      {day.date}
                    </span>
                    {isCompleted && (
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                    )}
                  </div>
                  
                  <div className="flex-1 space-y-1">
                    {day.subjects.map((subject, idx) => (
                      <div
                        key={idx}
                        className={cn(
                          "rounded px-1.5 py-0.5 text-xs border",
                          getSubjectColor(subject.subjectId)
                        )}
                      >
                        <span className="font-medium">
                          {subject.subjectName.split(" ")[0]}
                        </span>
                        <span className="text-muted-foreground ml-1">
                          {subject.hours}h
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-1 text-center">
                    <Badge 
                      variant="outline" 
                      className={cn(
                        "text-[10px]",
                        isCompleted && "border-accent text-accent"
                      )}
                    >
                      Dia {day.day}
                    </Badge>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <div className="rounded-lg bg-muted/50 p-4">
        <p className="text-sm text-muted-foreground">
          <strong>Dica:</strong> Clique em um dia para marcar como concluido. 
          Mantenha a consistencia para melhorar sua preparacao!
        </p>
      </div>
    </div>
  );
}
