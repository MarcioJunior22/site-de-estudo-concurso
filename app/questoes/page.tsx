"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { QuestionCard } from "@/components/question-card";
import { QuestionFilters } from "@/components/question-filters";
import { positions, sampleQuestions, Question } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { RotateCcw, CheckCircle2, XCircle, Target } from "lucide-react";

export default function QuestoesPage() {
  const searchParams = useSearchParams();
  const cargoParam = searchParams.get("cargo");
  const disciplinaParam = searchParams.get("disciplina");

  const [selectedPosition, setSelectedPosition] = useState<string>(cargoParam || "all");
  const [selectedSubject, setSelectedSubject] = useState<string>(disciplinaParam || "all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [showResults, setShowResults] = useState<Record<string, boolean>>({});

  const filteredQuestions = useMemo(() => {
    let questions = sampleQuestions;

    if (selectedPosition !== "all") {
      const positionSubjects = positions.find(p => p.id === selectedPosition)?.subjects.map(s => s.id) || [];
      questions = questions.filter(q => positionSubjects.some(s => q.subjectId.includes(s.replace("-superior", "").replace("-medio", ""))));
    }

    if (selectedSubject !== "all") {
      questions = questions.filter(q => q.subjectId.includes(selectedSubject.replace("-superior", "").replace("-medio", "")));
    }

    if (selectedDifficulty !== "all") {
      questions = questions.filter(q => q.difficulty === selectedDifficulty);
    }

    return questions;
  }, [selectedPosition, selectedSubject, selectedDifficulty]);

  const currentQuestion = filteredQuestions[currentQuestionIndex];

  const handleAnswer = (questionId: string, answerIndex: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleShowResult = (questionId: string) => {
    setShowResults(prev => ({ ...prev, [questionId]: true }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setShowResults({});
    setCurrentQuestionIndex(0);
  };

  const answeredQuestions = Object.keys(answers).filter(id => answers[id] !== null).length;
  const correctAnswers = filteredQuestions.filter(
    q => showResults[q.id] && answers[q.id] === q.correctAnswer
  ).length;
  const wrongAnswers = filteredQuestions.filter(
    q => showResults[q.id] && answers[q.id] !== q.correctAnswer && answers[q.id] !== null
  ).length;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Banco de Questoes</h1>
            <p className="mt-2 text-muted-foreground">
              Pratique com questoes comentadas baseadas no conteudo do edital
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <div className="space-y-6">
              <QuestionFilters
                selectedPosition={selectedPosition}
                selectedSubject={selectedSubject}
                selectedDifficulty={selectedDifficulty}
                onPositionChange={(value) => {
                  setSelectedPosition(value);
                  setSelectedSubject("all");
                  setCurrentQuestionIndex(0);
                }}
                onSubjectChange={(value) => {
                  setSelectedSubject(value);
                  setCurrentQuestionIndex(0);
                }}
                onDifficultyChange={(value) => {
                  setSelectedDifficulty(value);
                  setCurrentQuestionIndex(0);
                }}
              />

              {filteredQuestions.length === 0 ? (
                <Card className="border-border bg-card">
                  <CardContent className="py-12 text-center">
                    <Target className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium text-foreground">
                      Nenhuma questao encontrada
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Tente ajustar os filtros para encontrar questoes
                    </p>
                  </CardContent>
                </Card>
              ) : currentQuestion ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">
                      Questao {currentQuestionIndex + 1} de {filteredQuestions.length}
                    </Badge>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handlePrevQuestion}
                        disabled={currentQuestionIndex === 0}
                      >
                        Anterior
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleNextQuestion}
                        disabled={currentQuestionIndex === filteredQuestions.length - 1}
                      >
                        Proxima
                      </Button>
                    </div>
                  </div>

                  <QuestionCard
                    question={currentQuestion}
                    selectedAnswer={answers[currentQuestion.id] ?? null}
                    showResult={showResults[currentQuestion.id] || false}
                    onSelectAnswer={(index) => handleAnswer(currentQuestion.id, index)}
                    onShowResult={() => handleShowResult(currentQuestion.id)}
                  />

                  <div className="flex justify-center gap-1">
                    {filteredQuestions.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentQuestionIndex(index)}
                        className={`h-2 w-2 rounded-full transition-colors ${
                          index === currentQuestionIndex
                            ? "bg-primary"
                            : answers[filteredQuestions[index].id] !== undefined
                            ? showResults[filteredQuestions[index].id]
                              ? answers[filteredQuestions[index].id] === filteredQuestions[index].correctAnswer
                                ? "bg-accent"
                                : "bg-destructive"
                              : "bg-muted-foreground"
                            : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <aside className="lg:sticky lg:top-24 lg:h-fit">
              <Card className="border-border bg-card">
                <CardContent className="py-6">
                  <h3 className="mb-4 font-semibold text-foreground">Seu Desempenho</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="mb-1 flex justify-between text-sm">
                        <span className="text-muted-foreground">Progresso</span>
                        <span className="font-medium">
                          {answeredQuestions}/{filteredQuestions.length}
                        </span>
                      </div>
                      <Progress 
                        value={(answeredQuestions / filteredQuestions.length) * 100} 
                        className="h-2" 
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg bg-accent/10 p-3 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <CheckCircle2 className="h-4 w-4 text-accent" />
                          <span className="text-2xl font-bold text-accent">{correctAnswers}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Acertos</p>
                      </div>
                      <div className="rounded-lg bg-destructive/10 p-3 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <XCircle className="h-4 w-4 text-destructive" />
                          <span className="text-2xl font-bold text-destructive">{wrongAnswers}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Erros</p>
                      </div>
                    </div>

                    {answeredQuestions > 0 && (
                      <div className="rounded-lg bg-muted p-3 text-center">
                        <p className="text-2xl font-bold text-foreground">
                          {correctAnswers + wrongAnswers > 0
                            ? Math.round((correctAnswers / (correctAnswers + wrongAnswers)) * 100)
                            : 0}%
                        </p>
                        <p className="text-xs text-muted-foreground">Taxa de Acertos</p>
                      </div>
                    )}

                    <Button 
                      variant="outline" 
                      className="w-full" 
                      onClick={handleReset}
                    >
                      <RotateCcw className="mr-2 h-4 w-4" />
                      Reiniciar
                    </Button>
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
