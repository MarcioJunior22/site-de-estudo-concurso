"use client";

import { Subject } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, BrainCircuit, ExternalLink, CheckCircle2 } from "lucide-react";
import Link from "next/link";

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
                    {subject.topics.length} topicos | {subject.totalQuestions} questoes
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">
                  Peso: {(subject.weight * 10).toFixed(1)}
                </Badge>
              </div>
            </div>
          </AccordionTrigger>
          
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4">
              {subject.topics.map((topic) => (
                <Card key={topic.id} className="border-border bg-muted/30">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-muted-foreground" />
                        <div>
                          <CardTitle className="text-base font-medium">
                            {topic.name}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {topic.description}
                          </CardDescription>
                        </div>
                      </div>
                      {topic.mindMapNodes && topic.mindMapNodes.length > 0 && (
                        <Button asChild size="sm" variant="ghost">
                          <Link href={`/mapas-mentais?cargo=${positionId}&topic=${topic.id}`}>
                            <BrainCircuit className="mr-1 h-4 w-4" />
                            Mapa Mental
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  
                  {topic.references.length > 0 && (
                    <CardContent className="pt-2">
                      <div className="rounded-lg bg-background p-3">
                        <p className="mb-2 text-xs font-medium text-muted-foreground">
                          Referencias Bibliograficas:
                        </p>
                        <ul className="space-y-1">
                          {topic.references.map((ref, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-foreground">
                              <ExternalLink className="h-3 w-3 text-muted-foreground" />
                              {ref}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}

              <div className="flex gap-2 pt-2">
                <Button asChild variant="outline" size="sm" className="flex-1">
                  <Link href={`/questoes?cargo=${positionId}&disciplina=${subject.id}`}>
                    Praticar Questoes
                  </Link>
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
