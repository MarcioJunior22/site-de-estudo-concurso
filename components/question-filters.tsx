"use client";

import { positions } from "@/lib/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Filter } from "lucide-react";

interface QuestionFiltersProps {
  selectedPosition: string;
  selectedSubject: string;
  selectedDifficulty: string;
  onPositionChange: (value: string) => void;
  onSubjectChange: (value: string) => void;
  onDifficultyChange: (value: string) => void;
}

export function QuestionFilters({
  selectedPosition,
  selectedSubject,
  selectedDifficulty,
  onPositionChange,
  onSubjectChange,
  onDifficultyChange,
}: QuestionFiltersProps) {
  const selectedPositionData = positions.find(p => p.id === selectedPosition);
  const subjects = selectedPositionData?.subjects || [];

  return (
    <Card className="border-border bg-card">
      <CardContent className="py-4">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">Filtros</span>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-1.5 block text-xs text-muted-foreground">Cargo</label>
            <Select value={selectedPosition} onValueChange={onPositionChange}>
              <SelectTrigger>
                <SelectValue placeholder="Todos os cargos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os cargos</SelectItem>
                {positions.map((position) => (
                  <SelectItem key={position.id} value={position.id}>
                    {position.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="mb-1.5 block text-xs text-muted-foreground">Disciplina</label>
            <Select 
              value={selectedSubject} 
              onValueChange={onSubjectChange}
              disabled={selectedPosition === "all"}
            >
              <SelectTrigger>
                <SelectValue placeholder="Todas as disciplinas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as disciplinas</SelectItem>
                {subjects.map((subject) => (
                  <SelectItem key={subject.id} value={subject.id}>
                    {subject.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="mb-1.5 block text-xs text-muted-foreground">Dificuldade</label>
            <Select value={selectedDifficulty} onValueChange={onDifficultyChange}>
              <SelectTrigger>
                <SelectValue placeholder="Todas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="facil">Facil</SelectItem>
                <SelectItem value="medio">Medio</SelectItem>
                <SelectItem value="dificil">Dificil</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
