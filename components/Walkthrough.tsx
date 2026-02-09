"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Walkthrough component
 *
 * - Automatically opens for first-time users (localStorage key: "walkthroughSeen")
 * - Highlights three important UI elements and shows short descriptions:
 *   1) Observações button (title="Observações")
 *   2) Calcular água button (text contains "água")
 *   3) Exportar button (text contains "Exportar")
 *
 * Props:
 *  - forceOpen?: boolean  -> forces the walkthrough open (useful for debugging)
 *
 * Notes:
 *  - It tries to find targets by simple DOM queries. If an element isn't found it will skip to the next step.
 *  - The highlight and tooltip reposition on scroll/resize.
 */

type Step = {
  id: string;
  title: string;
  description: string;
  findElement: () => HTMLElement | null;
};

export default function Walkthrough({
  forceOpen = false,
}: {
  forceOpen?: boolean;
}) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [highlightRect, setHighlightRect] = useState<DOMRect | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const LOCAL_KEY = "walkthroughSeen";

  const steps: Step[] = [
    {
      id: "observations",
      title: "Observações importantes",
      description:
        "Aqui você pode registrar observações sobre sua rotina diária, restrições alimentares, dicas e notas que ajudam a seguir o plano. Toque para abrir as observações.",
      findElement: () =>
        document.querySelector(
          'button[title="Observações"]',
        ) as HTMLElement | null,
    },
    {
      id: "water",
      title: "Calcule sua água",
      description:
        "Use esta calculadora para estimar a ingestão diária de água. O resultado ficará visível no botão e ajuda a manter a hidratação adequada.",
      findElement: () => {
        // Encontrar botão que contenha a palavra 'água' ou 'Calcular água'
        const buttons = Array.from(
          document.querySelectorAll("button"),
        ) as HTMLElement[];
        return (
          buttons.find((b) =>
            /\bágua\b|\bCalcular água\b/i.test(b.innerText),
          ) || null
        );
      },
    },
    {
      id: "export",
      title: "Exportar para PDF",
      description:
        "Exporte o cardápio do dia como PDF para ter acesso offline ou imprimir. Este botão gera um arquivo com o cardápio, calorias e suas observações.",
      findElement: () => {
        const buttons = Array.from(
          document.querySelectorAll("button"),
        ) as HTMLElement[];
        // Find button with "Exportar" text or with download icon path
        return (
          buttons.find((b) => /\bExportar\b/i.test(b.textContent || "")) ||
          buttons.find((b) => {
            const svg = b.querySelector("svg");
            if (!svg) return false;
            const path = svg.querySelector('path[d*="16.5v2.25"]'); // Part of download icon
            return !!path;
          }) ||
          null
        );
      },
    },
  ];

  // Helpers
  useEffect(() => {
    setMounted(true);

    // Show walkthrough if first time (no localStorage) or forced
    try {
      const seen = localStorage.getItem(LOCAL_KEY);
      if (forceOpen) {
        setOpen(true);
        setStepIndex(0);
      } else if (!seen) {
        // delay a little to allow UI to render and ensure targets present
        setTimeout(() => {
          setOpen(true);
          setStepIndex(0);
        }, 200);
      }
    } catch (e) {
      // If localStorage isn't available, open only if forced
      if (forceOpen) {
        setOpen(true);
        setStepIndex(0);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Position highlight around current target
  useEffect(() => {
    if (!open) {
      setHighlightRect(null);
      return;
    }

    let active = true;

    const update = () => {
      if (!active) return;
      const curStep = steps[stepIndex];
      const el = curStep?.findElement();
      if (el) {
        const rect = el.getBoundingClientRect();
        setHighlightRect(rect);
        // scroll into view if not fully visible
        const margin = 12;
        const topVisible = rect.top >= margin;
        const bottomVisible = rect.bottom <= window.innerHeight - margin;
        if (!topVisible || !bottomVisible) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      } else {
        // If element not found, try to advance to next step after a short delay
        setHighlightRect(null);
      }
    };

    update();

    const onScroll = () => update();
    const onResize = () => update();

    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onResize);

    const interval = setInterval(update, 700); // keep trying for dynamic UIs

    return () => {
      active = false;
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onResize);
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, stepIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose(false);
      } else if (e.key === "ArrowRight" || e.key === "Enter") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, stepIndex]);

  const handleClose = (markSeen = true) => {
    setOpen(false);
    setHighlightRect(null);
    if (markSeen) {
      try {
        localStorage.setItem(LOCAL_KEY, "1");
      } catch (e) {
        // ignore
      }
    }
  };

  const handleSkip = () => {
    handleClose(true);
  };

  const handleNext = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex((s) => s + 1);
    } else {
      handleClose(true);
    }
  };

  const handlePrev = () => {
    setStepIndex((s) => Math.max(0, s - 1));
  };

  if (!mounted || !open) return null;

  const current = steps[stepIndex];
  // Try to find element; if not found, allow user to still read description but indicate missing target
  const targetEl = current.findElement();
  const rect = highlightRect;

  // Tooltip positioning: prefer above target, else below, else centered
  const tooltipStyle: React.CSSProperties = {
    left: "50%",
    transform: "translateX(-50%)",
  };
  if (rect) {
    const tooltipWidth = 340;
    const spaceAbove = rect.top;
    const spaceBelow = window.innerHeight - rect.bottom;
    const preferAbove = spaceAbove > 140;
    const x = Math.max(
      12,
      Math.min(
        window.innerWidth - tooltipWidth - 12,
        rect.left + rect.width / 2 - tooltipWidth / 2,
      ),
    );
    tooltipStyle.left = x;
    tooltipStyle.transform = "none";

    if (preferAbove) {
      tooltipStyle.top = Math.max(12, rect.top - 140 - 12);
    } else {
      tooltipStyle.top = rect.bottom + 12;
      if (tooltipStyle.top + 160 > window.innerHeight) {
        tooltipStyle.top = Math.max(12, window.innerHeight - 180);
      }
    }
  } else {
    // center
    tooltipStyle.top = "18vh";
    tooltipStyle.left = "50%";
    tooltipStyle.transform = "translateX(-50%)";
  }

  // small helpers for styles
  const overlayStyle: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    background: "rgba(15, 23, 42, 0.6)", // semi-dark
    zIndex: 9999,
    backdropFilter: "blur(2px)",
  };

  const highlightBoxStyle: React.CSSProperties = rect
    ? {
        position: "fixed",
        left: rect.left - 8,
        top: rect.top - 8,
        width: rect.width + 16,
        height: rect.height + 16,
        borderRadius: 10,
        boxShadow: "0 8px 30px rgba(0,0,0,0.45)",
        border: "2px solid rgba(255,145,26,0.95)",
        zIndex: 10001,
        pointerEvents: "none",
      }
    : {};

  const tooltipBase: React.CSSProperties = {
    position: "fixed",
    width: 340,
    maxWidth: "calc(100% - 32px)",
    background: "linear-gradient(180deg,#fff,#fff)",
    color: "#0f172a",
    borderRadius: 12,
    padding: "14px 16px",
    boxShadow: "0 10px 30px rgba(2,6,23,0.4)",
    zIndex: 10002,
  };

  const dotStyle = (i: number) => ({
    width: 8,
    height: 8,
    borderRadius: 4,
    background: i === stepIndex ? "#ff911a" : "#cbd5e1",
    margin: "0 4px",
    transition: "background .18s",
  });

  return (
    <>
      <div style={overlayStyle} onClick={() => handleClose(true)} aria-hidden />
      {/* Highlighted element box */}
      {rect && <div style={highlightBoxStyle} aria-hidden />}

      {/* Tooltip */}
      <div ref={tooltipRef} style={{ ...tooltipBase, ...tooltipStyle }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 8,
          }}
        >
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#FF8F2A" }}>
              {current.title}
            </div>
            <div
              style={{
                marginTop: 6,
                fontSize: 13,
                color: "#475569",
                lineHeight: 1.35,
              }}
            >
              {current.description}
            </div>
            {!targetEl && (
              <div style={{ marginTop: 8, fontSize: 12, color: "#94a3b8" }}>
                Nota: elemento não encontrado na tela — prossiga com a
                explicação.
              </div>
            )}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              alignItems: "flex-end",
            }}
          >
            <button
              onClick={() => {
                // don't close when clicking inside tooltip
                // keep focus in tooltip
              }}
              aria-hidden
              style={{
                background: "transparent",
                border: "none",
                color: "#64748b",
                fontSize: 12,
                cursor: "default",
              }}
            >
              Passo {stepIndex + 1}/{steps.length}
            </button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {steps.map((_, i) => (
              <div key={i} style={dotStyle(i)} />
            ))}
          </div>

          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <button
              onClick={handleSkip}
              style={{
                background: "white",
                border: "1px solid #e2e8f0",
                padding: "7px 12px",
                borderRadius: 8,
                color: "#475569",
                fontSize: 12,
                cursor: "pointer",
                fontWeight: 500,
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#cbd5e1";
                e.currentTarget.style.background = "#f8fafc";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e2e8f0";
                e.currentTarget.style.background = "white";
              }}
            >
              Não mostrar novamente
            </button>

            <button
              onClick={handlePrev}
              disabled={stepIndex === 0}
              style={{
                background: stepIndex === 0 ? "#f1f5f9" : "white",
                border: "1px solid #e2e8f0",
                padding: "7px 14px",
                borderRadius: 8,
                color: stepIndex === 0 ? "#94a3b8" : "#475569",
                fontSize: 12,
                cursor: stepIndex === 0 ? "not-allowed" : "pointer",
                fontWeight: 500,
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                if (stepIndex !== 0) {
                  e.currentTarget.style.borderColor = "#cbd5e1";
                  e.currentTarget.style.background = "#f8fafc";
                }
              }}
              onMouseLeave={(e) => {
                if (stepIndex !== 0) {
                  e.currentTarget.style.borderColor = "#e2e8f0";
                  e.currentTarget.style.background = "white";
                }
              }}
            >
              Anterior
            </button>

            <button
              onClick={handleNext}
              style={{
                background: "linear-gradient(90deg,#ff911a,#ffa940)",
                border: "none",
                padding: "7px 16px",
                borderRadius: 8,
                color: "white",
                fontSize: 12,
                cursor: "pointer",
                fontWeight: 600,
                boxShadow: "0 2px 8px rgba(255,145,26,0.25)",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(255,145,26,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 2px 8px rgba(255,145,26,0.25)";
              }}
            >
              {stepIndex < steps.length - 1 ? "Próximo" : "Concluir"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
