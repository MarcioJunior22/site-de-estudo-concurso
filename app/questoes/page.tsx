"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, RotateCcw, Target, XCircle } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { QuestionCard } from "@/components/question-card";
import { QuestionFilters } from "@/components/question-filters";
import { positions, sampleQuestions } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

function QuestoesContent() {
  const searchParams = useSearchParams();
  const cargoParam = searchParams.get("cargo");
  const disciplinaParam = searchParams.get("disciplina");
  const topicoParam = searchParams.get("topico");

  const [selectedPosition, setSelectedPosition] = useState<string>(cargoParam || "all");
  const [selectedSubject, setSelectedSubject] = useState<string>(disciplinaParam || "all");
  const [selectedTopic, setSelectedTopic] = useState<string>(topicoParam || "all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [showResults, setShowResults] = useState<Record<string, boolean>>({});

  const subjectNameMap = useMemo(() => {
    const map = new Map<string, string>();
    positions.forEach((position) => {
      position.subjects.forEach((subject) => {
        map.set(subject.id, subject.name);
      });
    });
    return map;
  }, []);

  const filteredQuestions = useMemo(() => {
    let questions = sampleQuestions;

    if (selectedPosition !== "all") {
      questions = questions.filter((question) => question.positionId === selectedPosition);
    }

    if (selectedSubject !== "all") {
      questions = questions.filter((question) => question.subjectId === selectedSubject);
    }

    if (selectedTopic !== "all") {
      questions = questions.filter((question) => question.topicId === selectedTopic);
    }

    if (selectedDifficulty !== "all") {
      questions = questions.filter((question) => question.difficulty === selectedDifficulty);
    }

    return questions;
  }, [selectedPosition, selectedSubject, selectedTopic, selectedDifficulty]);

  useEffect(() => {
    if (currentQuestionIndex >= filteredQuestions.length) {
      setCurrentQuestionIndex(0);
    }
  }, [currentQuestionIndex, filteredQuestions.length]);

  const currentQuestion = filteredQuestions[currentQuestionIndex];

  const handleAnswer = (questionId: string, answerIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleShowResult = (questionId: string) => {
    setShowResults((prev) => ({ ...prev, [questionId]: true }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setShowResults({});
    setCurrentQuestionIndex(0);
  };

  const answeredQuestions = filteredQuestions.filter((question) => answers[question.id] !== undefined).length;
  const correctAnswers = filteredQuestions.filter(
    (question) => showResults[question.id] && answers[question.id] === question.correctAnswer,
  ).length;
  const wrongAnswers = filteredQuestions.filter(
    (question) =>
      showResults[question.id] &&
      answers[question.id] !== question.correctAnswer &&
      answers[question.id] !== null &&
      answers[question.id] !== undefined,
  ).length;

  const performanceBySubject = useMemo(() => {
    const performance = new Map<
      string,
      { subjectName: string; answered: number; correct: number; wrong: number; total: number }
    >();

    filteredQuestions.forEach((question) => {
      const current = performance.get(question.subjectId) ?? {
        subjectName: subjectNameMap.get(question.subjectId) ?? question.subjectId,
        answered: 0,
        correct: 0,
        wrong: 0,
        total: 0,
      };

      current.total += 1;

      if (showResults[question.id] && answers[question.id] !== undefined) {
        current.answered += 1;
        if (answers[question.id] === question.correctAnswer) {
          current.correct += 1;
        } else {
          current.wrong += 1;
        }
      }

      performance.set(question.subjectId, current);
    });

    return Array.from(performance.values()).sort((a, b) => a.subjectName.localeCompare(b.subjectName));
  }, [filteredQuestions, answers, showResults, subjectNameMap]);

  const totalFiltered = filteredQuestions.length;
  const accuracy = correctAnswers + wrongAnswers > 0
    ? Math.round((correctAnswers / (correctAnswers + wrongAnswers)) * 100)
    : 0;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Banco de Questoes</h1>
            <p className="mt-2 text-muted-foreground">
              Pratique por cargo, disciplina e topico com correcoes comentadas
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <div className="space-y-6">
              <QuestionFilters
                selectedPosition={selectedPosition}
                selectedSubject={selectedSubject}
                selectedTopic={selectedTopic}
                selectedDifficulty={selectedDifficulty}
                onPositionChange={(value) => {
                  setSelectedPosition(value);
                  setSelectedSubject("all");
                  setSelectedTopic("all");
                  setCurrentQuestionIndex(0);
                }}
                onSubjectChange={(value) => {
                  setSelectedSubject(value);
                  setSelectedTopic("all");
                  setCurrentQuestionIndex(0);
                }}
                onTopicChange={(value) => {
                  setSelectedTopic(value);
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
                    <h3 className="mt-4 text-lg font-medium text-foreground">Nenhuma questao encontrada</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Ajuste os filtros para combinar cargo, disciplina e topico.
                    </p>
                  </CardContent>
                </Card>
              ) : currentQuestion ? (
                <>
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
                      {filteredQuestions.map((question, index) => (
                        <button
                          key={question.id}
                          onClick={() => setCurrentQuestionIndex(index)}
                          className={`h-2 w-2 rounded-full transition-colors ${
                            index === currentQuestionIndex
                              ? "bg-primary"
                              : answers[question.id] !== undefined
                                ? showResults[question.id]
                                  ? answers[question.id] === question.correctAnswer
                                    ? "bg-accent"
                                    : "bg-destructive"
                                  : "bg-muted-foreground"
                                : "bg-muted"
                          }`}
                          aria-label={`Ir para questao ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <Card className="border-border bg-card">
                    <CardHeader>
                      <CardTitle className="text-base">Desempenho por materia</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {performanceBySubject.map((subject) => {
                        const localAccuracy =
                          subject.answered > 0
                            ? Math.round((subject.correct / subject.answered) * 100)
                            : 0;

                        return (
                          <div key={subject.subjectName} className="rounded-md border border-border p-3">
                            <div className="flex items-center justify-between gap-2">
                              <p className="text-sm font-medium text-foreground">{subject.subjectName}</p>
                              <Badge variant="outline">{localAccuracy}%</Badge>
                            </div>
                            <p className="mt-1 text-xs text-muted-foreground">
                              Respondidas: {subject.answered}/{subject.total} | Acertos: {subject.correct} | Erros: {subject.wrong}
                            </p>
                          </div>
                        );
                      })}
                    </CardContent>
                  </Card>
                </>
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
                          {answeredQuestions}/{totalFiltered}
                        </span>
                      </div>
                      <Progress value={totalFiltered > 0 ? (answeredQuestions / totalFiltered) * 100 : 0} className="h-2" />
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
                        <p className="text-2xl font-bold text-foreground">{accuracy}%</p>
                        <p className="text-xs text-muted-foreground">Taxa de Acertos</p>
                      </div>
                    )}

                    <Button variant="outline" className="w-full" onClick={handleReset}>
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

export default function QuestoesPage() {
  return (
    <Suspense
      fallback={<div className="flex min-h-screen items-center justify-center">Carregando...</div>}
    >
      <QuestoesContent />
    </Suspense>
  );
}
