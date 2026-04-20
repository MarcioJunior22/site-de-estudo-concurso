"use client";

import { useState } from "react";
import { positions } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { CalendarDays, Clock, BookOpen, Target } from "lucide-react";

interface StudyPlanGeneratorProps {
  selectedPosition: string;
  onPositionChange: (value: string) => void;
  onGenerate: (totalDays: number, hoursPerDay: number) => void;
}

export function StudyPlanGenerator({
  selectedPosition,
  onPositionChange,
  onGenerate,
}: StudyPlanGeneratorProps) {
  const [totalDays, setTotalDays] = useState(60);
  const [hoursPerDay, setHoursPerDay] = useState(3);

  const selectedPositionData = positions.find(p => p.id === selectedPosition);
  const totalHours = totalDays * hoursPerDay;

  const handleGenerate = () => {
    if (selectedPosition) {
      onGenerate(totalDays, hoursPerDay);
    }
  };

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CalendarDays className="h-5 w-5 text-primary" />
          Gerar Plano de Estudos
        </CardTitle>
        <CardDescription>
          Configure seu plano personalizado baseado no tempo disponivel
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="position">Cargo Desejado</Label>
          <Select value={selectedPosition} onValueChange={onPositionChange}>
            <SelectTrigger id="position">
              <SelectValue placeholder="Selecione um cargo" />
            </SelectTrigger>
            <SelectContent>
              {positions.map((position) => (
                <SelectItem key={position.id} value={position.id}>
                  {position.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedPositionData && (
          <>
            <div className="rounded-lg bg-muted/50 p-4">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                <BookOpen className="h-4 w-4" />
                Disciplinas do Cargo
              </div>
              <div className="grid grid-cols-2 gap-2">
                {selectedPositionData.subjects.map((subject) => (
                  <div key={subject.id} className="text-sm">
                    <span className="text-muted-foreground">{subject.name}</span>
                    <span className="ml-1 text-xs text-primary">
                      ({(subject.weight * 100).toFixed(0)}%)
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label>Dias ate a prova</Label>
                  <span className="text-sm font-medium text-primary">{totalDays} dias</span>
                </div>
                <Slider
                  value={[totalDays]}
                  onValueChange={(value) => setTotalDays(value[0])}
                  min={7}
                  max={120}
                  step={1}
                  className="w-full"
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  A prova sera em 23/08/2026
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label>Horas de estudo por dia</Label>
                  <span className="text-sm font-medium text-primary">{hoursPerDay}h/dia</span>
                </div>
                <Slider
                  value={[hoursPerDay]}
                  onValueChange={(value) => setHoursPerDay(value[0])}
                  min={1}
                  max={8}
                  step={0.5}
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 rounded-lg bg-primary/5 p-4">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-2xl font-bold text-primary">
                  <CalendarDays className="h-5 w-5" />
                  {totalDays}
                </div>
                <p className="text-xs text-muted-foreground">Dias</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-2xl font-bold text-primary">
                  <Clock className="h-5 w-5" />
                  {totalHours}h
                </div>
                <p className="text-xs text-muted-foreground">Total</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-2xl font-bold text-primary">
                  <Target className="h-5 w-5" />
                  {selectedPositionData.subjects.length}
                </div>
                <p className="text-xs text-muted-foreground">Disciplinas</p>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Distribuicao por Disciplina:</p>
              <div className="space-y-2">
                {selectedPositionData.subjects.map((subject) => {
                  const subjectHours = Math.round(totalHours * subject.weight);
                  return (
                    <div key={subject.id} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{subject.name}</span>
                      <span className="font-medium">{subjectHours}h</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <Button onClick={handleGenerate} className="w-full">
              <CalendarDays className="mr-2 h-4 w-4" />
              Gerar Plano de Estudos
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}
