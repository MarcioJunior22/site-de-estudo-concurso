"use client";

import Link from "next/link";
import { Subject } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { TopicStudyCard } from "@/components/topic-study-card";

interface SubjectAccordionProps {
  subjects: Subject[];
  positionId: string;
}

export function SubjectAccordion({ subjects, positionId }: SubjectAccordionProps) {
  return (
    <Accordion type="multiple" className="space-y-4">
      {subjects.map((subject) => (
        <AccordionItem
          key={subject.id}
          value={subject.id}
          className="rounded-lg border border-border bg-card px-0 data-[state=open]:bg-card"
        >
          <AccordionTrigger className="px-6 py-4 hover:no-underline [&[data-state=open]>div]:text-primary">
            <div className="flex flex-1 items-center justify-between gap-4 text-left">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{subject.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {subject.topics.length} topicos | {subject.totalQuestions} questoes na prova
                  </p>
                </div>
              </div>
              <Badge variant="outline">Peso: {(subject.weight * 10).toFixed(1)}</Badge>
            </div>
          </AccordionTrigger>

          <AccordionContent className="space-y-4 px-6 pb-6">
            {subject.topics.map((topic) => (
              <TopicStudyCard
                key={`${subject.id}-${topic.id}`}
                topic={topic}
                positionId={positionId}
                subjectId={subject.id}
                showActions
              />
            ))}

            <Button asChild variant="outline" size="sm" className="w-full">
              <Link href={`/questoes?cargo=${positionId}&disciplina=${subject.id}`}>
                Praticar Questoes da Disciplina
              </Link>
            </Button>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
