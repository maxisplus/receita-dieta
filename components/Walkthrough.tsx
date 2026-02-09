"use client";

import React, { useEffect, useState } from "react";

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
        return (
          buttons.find((b) => /\bExportar\b/i.test(b.textContent || "")) ||
          buttons.find((b) => {
            const svg = b.querySelector("svg");
            if (!svg) return false;
            const path = svg.querySelector('path[d*="16.5v2.25"]');
            return !!path;
          }) ||
          null
        );
      },
    },
  ];

  useEffect(() => {
    setMounted(true);

    try {
      const seen = localStorage.getItem(LOCAL_KEY);
      if (forceOpen) {
        setOpen(true);
        setStepIndex(0);
      } else if (!seen) {
        setTimeout(() => {
          setOpen(true);
          setStepIndex(0);
        }, 200);
      }
    } catch (e) {
      if (forceOpen) {
        setOpen(true);
        setStepIndex(0);
      }
    }
  }, [forceOpen]);

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
        const margin = 12;
        const topVisible = rect.top >= margin;
        const bottomVisible = rect.bottom <= window.innerHeight - margin;
        if (!topVisible || !bottomVisible) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      } else {
        setHighlightRect(null);
      }
    };

    update();

    const onScroll = () => update();
    const onResize = () => update();

    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onResize);

    const interval = setInterval(update, 700);

    return () => {
      active = false;
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onResize);
      clearInterval(interval);
    };
  }, [open, stepIndex, steps]);

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

  const handleSkip = () => handleClose(true);

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
  const targetEl = current.findElement();
  const rect = highlightRect;

  // Calculate tooltip position (kept inline since dynamic)
  const tooltipStyle: React.CSSProperties = {
    left: "50%",
    transform: "translateX(-50%)",
  };

  if (rect) {
    const tooltipWidth = 340;
    const spaceAbove = rect.top;
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
    tooltipStyle.top = "18vh";
    tooltipStyle.left = "50%";
    tooltipStyle.transform = "translateX(-50%)";
  }

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[9999]"
        onClick={() => handleClose(true)}
        aria-hidden
      />

      {/* Highlight box */}
      {rect && (
        <div
          className="fixed rounded-xl shadow-2xl border-2 border-orange-500/95 z-[10001] pointer-events-none"
          style={{
            left: rect.left - 8,
            top: rect.top - 8,
            width: rect.width + 16,
            height: rect.height + 16,
          }}
          aria-hidden
        />
      )}

      {/* Tooltip */}
      <div
        className="fixed w-[340px] max-w-[calc(100%-32px)] bg-white text-slate-900 rounded-xl p-4 shadow-2xl z-[10002]"
        style={tooltipStyle}
      >
        {/* Header */}
        <div className="flex justify-between items-start gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-bold text-orange-500 leading-tight">
              {current.title}
            </h3>
            <p className="mt-2 text-[13px] text-slate-600 leading-relaxed">
              {current.description}
            </p>
            {!targetEl && (
              <p className="mt-2 text-xs text-slate-400 italic">
                Nota: elemento não encontrado na tela — prossiga com a
                explicação.
              </p>
            )}
          </div>
          <span className="text-xs text-slate-400 font-medium shrink-0">
            Passo {stepIndex + 1}/{steps.length}
          </span>
        </div>

        {/* Footer - Fixed layout */}
        <div className="flex items-center justify-between gap-4 mt-5 pt-2">
          {/* Step dots */}
          <div className="flex items-center gap-1.5">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  i === stepIndex ? "bg-orange-500" : "bg-slate-300"
                }`}
              />
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleSkip}
              className="px-3 py-1.5 text-xs font-medium text-slate-500 bg-transparent hover:bg-slate-100 rounded-lg transition-colors"
            >
              Pular
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={stepIndex === 0}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                  stepIndex === 0
                    ? "text-slate-400 bg-slate-50 border-slate-200 cursor-not-allowed"
                    : "text-slate-700 bg-white border-slate-300 hover:bg-slate-50 hover:border-slate-400"
                }`}
              >
                Anterior
              </button>

              <button
                onClick={handleNext}
                className="px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-400 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                {stepIndex < steps.length - 1 ? "Próximo" : "Concluir"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
