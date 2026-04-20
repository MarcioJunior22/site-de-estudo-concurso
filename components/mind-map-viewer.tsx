"use client";

import { MindMapNode } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight, Circle } from "lucide-react";
import { useState } from "react";

interface MindMapViewerProps {
  nodes: MindMapNode[];
}

interface NodeItemProps {
  node: MindMapNode;
  level: number;
  isLast: boolean;
}

function NodeItem({ node, level, isLast }: NodeItemProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = node.children && node.children.length > 0;

  const colors = [
    "border-primary bg-primary/10 text-primary",
    "border-accent bg-accent/10 text-accent",
    "border-chart-3 bg-chart-3/10",
    "border-chart-4 bg-chart-4/10",
    "border-chart-5 bg-chart-5/10",
  ];

  const lineColors = [
    "bg-primary/30",
    "bg-accent/30",
    "bg-chart-3/30",
    "bg-chart-4/30",
    "bg-chart-5/30",
  ];

  const colorIndex = level % colors.length;

  return (
    <div className="relative">
      {/* Vertical line connecting to parent */}
      {level > 0 && (
        <div
          className={cn(
            "absolute left-0 top-0 w-0.5 -translate-x-[calc(1.5rem+1px)]",
            lineColors[(level - 1) % lineColors.length],
            isLast ? "h-[1.125rem]" : "h-full"
          )}
        />
      )}
      
      {/* Horizontal line connecting to node */}
      {level > 0 && (
        <div
          className={cn(
            "absolute left-0 top-[1.125rem] h-0.5 w-6 -translate-x-6",
            lineColors[(level - 1) % lineColors.length]
          )}
        />
      )}

      <div className="flex items-start gap-2">
        {hasChildren ? (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-2 transition-colors",
              colors[colorIndex],
              "hover:opacity-80"
            )}
          >
            {isExpanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
        ) : (
          <div
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-2",
              colors[colorIndex]
            )}
          >
            <Circle className="h-2 w-2 fill-current" />
          </div>
        )}

        <div className="flex-1 pt-1.5">
          <span
            className={cn(
              "inline-block rounded-md px-3 py-1.5 text-sm font-medium",
              level === 0 ? "bg-primary text-primary-foreground text-base" :
              level === 1 ? "bg-muted text-foreground" :
              "text-muted-foreground"
            )}
          >
            {node.label}
          </span>

          {hasChildren && isExpanded && (
            <div className="relative mt-3 ml-4 space-y-3 pl-6">
              {node.children!.map((child, index) => (
                <NodeItem
                  key={child.id}
                  node={child}
                  level={level + 1}
                  isLast={index === node.children!.length - 1}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function MindMapViewer({ nodes }: MindMapViewerProps) {
  return (
    <div className="space-y-6 p-4">
      {nodes.map((node, index) => (
        <NodeItem 
          key={node.id} 
          node={node} 
          level={0} 
          isLast={index === nodes.length - 1}
        />
      ))}

      <div className="mt-8 rounded-lg bg-muted/50 p-4">
        <h4 className="mb-2 text-sm font-medium text-foreground">Dica de Estudo</h4>
        <p className="text-sm text-muted-foreground">
          Use este mapa mental para criar suas proprias anotacoes. 
          Tente recriar a estrutura de memoria sem olhar, depois confira se acertou.
          A repeticao espacada ajuda a fixar o conteudo.
        </p>
      </div>
    </div>
  );
}
