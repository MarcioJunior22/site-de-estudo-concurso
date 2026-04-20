"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StudyPlanGenerator } from "@/components/study-plan-generator";
import { StudyPlanCalendar } from "@/components/study-plan-calendar";
import { positions } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, Target, BookOpen, Lightbulb } from "lucide-react";

export interface GeneratedStudyPlan {
  positionId: string;
  totalDays: number;
  hoursPerDay: number;
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
}

function PlanoEstudosContent() {
  const searchParams = useSearchParams();
  const cargoParam = searchParams.get("cargo");

  const [selectedPosition, setSelectedPosition] = useState<string>(cargoParam || "");
  const [studyPlan, setStudyPlan] = useState<GeneratedStudyPlan | null>(null);
  const [completedDays, setCompletedDays] = useState<Set<number>>(new Set());

  const selectedPositionData = positions.find(p => p.id === selectedPosition);

  const handleGeneratePlan = (totalDays: number, hoursPerDay: number) => {
    if (!selectedPositionData) return;

    const subjects = selectedPositionData.subjects;
    const totalHours = totalDays * hoursPerDay;
    
    // Calculate hours per subject based on weight
    const subjectHours = subjects.map(subject => ({
      ...subject,
      allocatedHours: Math.round(totalHours * subject.weight),
    }));

    // Generate weekly schedule
    const schedule: GeneratedStudyPlan["schedule"] = [];
    let dayCounter = 0;
    let currentSubjectIndex = 0;
    let remainingHoursInSubject = subjectHours[0]?.allocatedHours || 0;

    const today = new Date();
    
    for (let week = 0; week < Math.ceil(totalDays / 7); week++) {
      const weekDays: GeneratedStudyPlan["schedule"][0]["days"] = [];
      
      for (let dayOfWeek = 0; dayOfWeek < 7 && dayCounter < totalDays; dayOfWeek++) {
        const dayDate = new Date(today);
        dayDate.setDate(today.getDate() + dayCounter);
        
        let remainingHoursToday = hoursPerDay;
        const daySubjects: GeneratedStudyPlan["schedule"][0]["days"][0]["subjects"] = [];
        
        while (remainingHoursToday > 0 && currentSubjectIndex < subjectHours.length) {
          const currentSubject = subjectHours[currentSubjectIndex];
          const hoursToAllocate = Math.min(remainingHoursToday, remainingHoursInSubject);
          
          const existingSubject = daySubjects.find(s => s.subjectId === currentSubject.id);
          
          if (existingSubject) {
            existingSubject.hours += hoursToAllocate;
          } else {
            daySubjects.push({
              subjectId: currentSubject.id,
              subjectName: currentSubject.name,
              topics: currentSubject.topics.slice(0, 3).map(t => t.name),
              hours: hoursToAllocate,
              completed: false,
            });
          }
          
          remainingHoursToday -= hoursToAllocate;
          remainingHoursInSubject -= hoursToAllocate;
          
          if (remainingHoursInSubject <= 0) {
            currentSubjectIndex++;
            if (currentSubjectIndex < subjectHours.length) {
              remainingHoursInSubject = subjectHours[currentSubjectIndex].allocatedHours;
            }
          }
        }
        
        weekDays.push({
          day: dayCounter + 1,
          date: dayDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
          subjects: daySubjects,
        });
        
        dayCounter++;
      }
      
      schedule.push({ week: week + 1, days: weekDays });
    }

    setStudyPlan({
      positionId: selectedPosition,
      totalDays,
      hoursPerDay,
      schedule,
    });
    setCompletedDays(new Set());
  };

  const handleToggleDay = (day: number) => {
    setCompletedDays(prev => {
      const next = new Set(prev);
      if (next.has(day)) {
        next.delete(day);
      } else {
        next.add(day);
      }
      return next;
    });
  };

  const progress = studyPlan 
    ? Math.round((completedDays.size / studyPlan.totalDays) * 100)
    : 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Plano de Estudos</h1>
            <p className="mt-2 text-muted-foreground">
              Gere um cronograma personalizado baseado no tempo disponivel ate a prova
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <div className="space-y-6">
              {!studyPlan ? (
                <StudyPlanGenerator
                  selectedPosition={selectedPosition}
                  onPositionChange={setSelectedPosition}
                  onGenerate={handleGeneratePlan}
                />
              ) : (
                <>
                  <Card className="border-border bg-card">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>Seu Plano de Estudos</CardTitle>
                          <CardDescription>
                            {selectedPositionData?.name} - {studyPlan.totalDays} dias, {studyPlan.hoursPerDay}h/dia
                          </CardDescription>
                        </div>
                        <Button 
                          variant="outline" 
                          onClick={() => setStudyPlan(null)}
                        >
                          Gerar Novo Plano
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Tabs defaultValue="calendar">
                        <TabsList className="mb-4">
                          <TabsTrigger value="calendar">Calendario</TabsTrigger>
                          <TabsTrigger value="list">Lista Semanal</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="calendar">
                          <StudyPlanCalendar 
                            schedule={studyPlan.schedule}
                            completedDays={completedDays}
                            onToggleDay={handleToggleDay}
                          />
                        </TabsContent>
                        
                        <TabsContent value="list">
                          <div className="space-y-6">
                            {studyPlan.schedule.map((week) => (
                              <div key={week.week}>
                                <h3 className="mb-3 font-semibold text-foreground">
                                  Semana {week.week}
                                </h3>
                                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                  {week.days.map((day) => (
                                    <Card 
                                      key={day.day}
                                      className={`cursor-pointer transition-colors ${
                                        completedDays.has(day.day) 
                                          ? "border-accent bg-accent/5" 
                                          : "border-border bg-card hover:bg-muted/50"
                                      }`}
                                      onClick={() => handleToggleDay(day.day)}
                                    >
                                      <CardContent className="p-4">
                                        <div className="flex items-center justify-between mb-2">
                                          <Badge variant="outline">
                                            Dia {day.day} - {day.date}
                                          </Badge>
                                          {completedDays.has(day.day) && (
                                            <Badge variant="default" className="bg-accent">
                                              Concluido
                                            </Badge>
                                          )}
                                        </div>
                                        <div className="space-y-1">
                                          {day.subjects.map((subject, idx) => (
                                            <p key={idx} className="text-sm text-muted-foreground">
                                              {subject.subjectName} - {subject.hours}h
                                            </p>
                                          ))}
                                        </div>
                                      </CardContent>
                                    </Card>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>

            <aside className="space-y-4 lg:sticky lg:top-24 lg:h-fit">
              {studyPlan && (
                <Card className="border-border bg-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Target className="h-4 w-4 text-primary" />
                      Progresso
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <span className="text-4xl font-bold text-primary">{progress}%</span>
                      <p className="text-sm text-muted-foreground">
                        {completedDays.size} de {studyPlan.totalDays} dias
                      </p>
                    </div>
                    <div className="h-3 w-full rounded-full bg-muted">
                      <div 
                        className="h-3 rounded-full bg-primary transition-all"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card className="border-border bg-card">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    Cronograma Oficial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Inscricoes</span>
                      <span className="font-medium">16/06 a 20/07/2026</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Prova Objetiva</span>
                      <span className="font-medium">23/08/2026</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Resultado</span>
                      <span className="font-medium">02/09/2026</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-primary/5">
                <CardContent className="py-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Lightbulb className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Dica de Estudo</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Estude os Conhecimentos Especificos com mais intensidade - eles valem 60% da nota total!
                        Alterne entre teoria e pratica de questoes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function PlanoEstudosPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Carregando...</div>}>
      <PlanoEstudosContent />
    </Suspense>
  );
}
