"use client";

import { useEffect, useMemo, useState } from "react";
import {
  BookOpen,
  Calculator,
  ChevronDown,
  ChevronRight,
  Circle,
  HeartPulse,
  Landmark,
  Shield,
  Workflow,
} from "lucide-react";
import { MindMapNode } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface MindMapViewerProps {
  nodes: MindMapNode[];
}

interface NodeItemProps {
  node: MindMapNode;
  level: number;
  isLast: boolean;
  expandedNodes: Record<string, boolean>;
  onToggle: (nodeId: string) => void;
}

const levelNodeColors = [
  "border-primary bg-primary/10 text-primary",
  "border-accent bg-accent/10 text-accent",
  "border-chart-3 bg-chart-3/10 text-foreground",
  "border-chart-4 bg-chart-4/10 text-foreground",
];

const levelLineColors = [
  "bg-primary/30",
  "bg-accent/30",
  "bg-chart-3/30",
  "bg-chart-4/30",
];

const levelLabelColors = [
  "bg-primary text-primary-foreground",
  "bg-muted text-foreground",
  "bg-accent/10 text-foreground",
  "bg-muted/50 text-muted-foreground",
];

function flattenNodes(nodes: MindMapNode[]): MindMapNode[] {
  return nodes.flatMap((node) => [node, ...(node.children ? flattenNodes(node.children) : [])]);
}

function countVisibleNodes(nodes: MindMapNode[], expandedNodes: Record<string, boolean>): number {
  return nodes.reduce((total, node) => {
    const hasChildren = (node.children?.length ?? 0) > 0;
    const childrenCount =
      hasChildren && expandedNodes[node.id]
        ? countVisibleNodes(node.children ?? [], expandedNodes)
        : 0;
    return total + 1 + childrenCount;
  }, 0);
}

function getRootIcon(label: string) {
  const normalized = label.toLowerCase();
  if (
    normalized.includes("saude") ||
    normalized.includes("enfermagem") ||
    normalized.includes("clinica")
  ) {
    return HeartPulse;
  }
  if (
    normalized.includes("matematica") ||
    normalized.includes("porcentagem") ||
    normalized.includes("equa")
  ) {
    return Calculator;
  }
  if (
    normalized.includes("politica") ||
    normalized.includes("estado") ||
    normalized.includes("sus")
  ) {
    return Landmark;
  }
  if (
    normalized.includes("etica") ||
    normalized.includes("biosseguranca") ||
    normalized.includes("vigilancia")
  ) {
    return Shield;
  }
  if (
    normalized.includes("processo") ||
    normalized.includes("organizacao") ||
    normalized.includes("gestao")
  ) {
    return Workflow;
  }
  return BookOpen;
}

function NodeItem({ node, level, isLast, expandedNodes, onToggle }: NodeItemProps) {
  const hasChildren = (node.children?.length ?? 0) > 0;
  const isExpanded = expandedNodes[node.id] ?? true;
  const colorIndex = level % levelNodeColors.length;
  const Icon = level === 0 ? getRootIcon(node.label) : null;

  return (
    <div className="relative">
      {level > 0 && (
        <div
          className={cn(
            "absolute left-0 top-0 w-0.5 -translate-x-[calc(1.5rem+1px)]",
            levelLineColors[(level - 1) % levelLineColors.length],
            isLast ? "h-[1.125rem]" : "h-full",
          )}
        />
      )}

      {level > 0 && (
        <div
          className={cn(
            "absolute left-0 top-[1.125rem] h-0.5 w-6 -translate-x-6",
            levelLineColors[(level - 1) % levelLineColors.length],
          )}
        />
      )}

      <div className="flex items-start gap-2">
        {hasChildren ? (
          <button
            onClick={() => onToggle(node.id)}
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-2 transition-colors hover:opacity-85",
              levelNodeColors[colorIndex],
            )}
            aria-label={isExpanded ? "Recolher no" : "Expandir no"}
          >
            {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </button>
        ) : (
          <div
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-2",
              levelNodeColors[colorIndex],
            )}
          >
            {Icon ? <Icon className="h-4 w-4" /> : <Circle className="h-2 w-2 fill-current" />}
          </div>
        )}

        <div className="flex-1 pt-1.5">
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium",
              levelLabelColors[level % levelLabelColors.length],
            )}
          >
            {Icon && <Icon className="h-4 w-4" />}
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
                  expandedNodes={expandedNodes}
                  onToggle={onToggle}
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
  const flatNodes = useMemo(() => flattenNodes(nodes), [nodes]);
  const expandableNodeIds = useMemo(
    () => flatNodes.filter((node) => (node.children?.length ?? 0) > 0).map((node) => node.id),
    [flatNodes],
  );

  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const initialState = expandableNodeIds.reduce<Record<string, boolean>>((acc, nodeId) => {
      acc[nodeId] = true;
      return acc;
    }, {});
    setExpandedNodes(initialState);
  }, [expandableNodeIds]);

  const visibleNodes = useMemo(
    () => countVisibleNodes(nodes, expandedNodes),
    [nodes, expandedNodes],
  );

  const setAllExpanded = (expanded: boolean) => {
    const nextState = expandableNodeIds.reduce<Record<string, boolean>>((acc, nodeId) => {
      acc[nodeId] = expanded;
      return acc;
    }, {});
    setExpandedNodes(nextState);
  };

  const toggleNode = (nodeId: string) => {
    setExpandedNodes((current) => ({
      ...current,
      [nodeId]: !current[nodeId],
    }));
  };

  return (
    <div className="space-y-6 p-4">
      <div className="flex flex-col gap-3 rounded-lg border border-border bg-muted/30 p-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setAllExpanded(true)}
            disabled={expandableNodeIds.length === 0}
          >
            Expandir Tudo
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setAllExpanded(false)}
            disabled={expandableNodeIds.length === 0}
          >
            Recolher Tudo
          </Button>
        </div>
        <Badge variant="secondary">Nos visiveis: {visibleNodes}</Badge>
      </div>

      <div className="rounded-lg border border-border bg-background p-3">
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Legenda por nivel
        </p>
        <div className="flex flex-wrap gap-2">
          {["Nivel 1", "Nivel 2", "Nivel 3", "Nivel 4+"].map((level, index) => (
            <Badge key={level} variant="outline" className={cn("border", levelNodeColors[index])}>
              {level}
            </Badge>
          ))}
        </div>
      </div>

      {nodes.map((node, index) => (
        <NodeItem
          key={node.id}
          node={node}
          level={0}
          isLast={index === nodes.length - 1}
          expandedNodes={expandedNodes}
          onToggle={toggleNode}
        />
      ))}

      <div className="rounded-lg bg-muted/50 p-4">
        <h4 className="mb-2 text-sm font-medium text-foreground">Dica de Estudo</h4>
        <p className="text-sm text-muted-foreground">
          Use "Expandir Tudo" para revisar a estrutura completa e depois "Recolher Tudo" para testar
          memoria ativa por blocos.
        </p>
      </div>
    </div>
  );
}
