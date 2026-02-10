"use client";

import ObservationsModal from "@/components/ObservationsModal";
import Walkthrough from "@/components/Walkthrough";
import WaterCalculatorModal from "@/components/WaterCalculatorModal";
import { Meal, MealOption, weekMenu } from "@/data/menu";
import { clearUser, getUser, isAuthenticated } from "@/lib/auth";
import { exportDayMenuToPDF } from "@/lib/pdfExport";
import { getWaterIntakeFromLocalStorage } from "@/lib/waterCalculator";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TOTAL_DAYS = 21;

const MEAL_ICONS: Record<string, React.ReactNode> = {
  "Café da manhã": (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  ),
  Almoço: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  ),
  "Lanche da tarde": (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
      />
    </svg>
  ),
  Jantar: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  ),
};

export default function Home() {
  const router = useRouter();
  const [day, setDay] = useState(1);
  const [showObs, setShowObs] = useState(false);
  const [showWater, setShowWater] = useState(false);
  const [water, setWater] = useState<number | null>(null);
  const [user, setUser] = useState<{ name: string; phone: string } | null>(
    null,
  );
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
    null,
  );

  useEffect(() => {
    // Verificar autenticação
    if (!isAuthenticated()) {
      router.push("/login");
      return;
    }

    const userData = getUser();
    setUser(userData);
    setCheckingAuth(false);

    // Carregar água salva
    const saved = getWaterIntakeFromLocalStorage();
    if (saved) setWater(saved);
  }, [router]);

  useEffect(() => {
    // Resetar direção após animação
    if (slideDirection) {
      const timer = setTimeout(() => {
        setSlideDirection(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [day, slideDirection]);

  const handleLogout = () => {
    clearUser();
    router.push("/login");
  };

  const handleExportPDF = () => {
    if (!user) return;
    exportDayMenuToPDF(menu, day, user.name, water);
  };

  // Mostrar loading enquanto verifica autenticação
  if (checkingAuth || !user) {
    return (
      <div className="min-h-screen bg-[#fafbfc] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[rgb(255,145,26)] mx-auto mb-4"></div>
          <p className="text-sm text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  // Ciclo dos 7 cardápios ao longo dos 21 dias
  const menuIndex = (day - 1) % weekMenu.length;
  const menu = weekMenu[menuIndex];
  const maxDay = TOTAL_DAYS;

  const navigate = (dir: "prev" | "next") => {
    const direction = dir === "prev" ? "right" : "left";
    setSlideDirection(direction);
    setDay((d) =>
      dir === "prev" ? Math.max(1, d - 1) : Math.min(maxDay, d + 1),
    );
  };

  const handleDayClick = (newDay: number) => {
    if (newDay === day) return;
    const direction = newDay > day ? "left" : "right";
    setSlideDirection(direction);
    setDay(newDay);
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] py-4 px-3 sm:py-6 sm:px-4 md:py-10">
      <div className="max-w-[620px] mx-auto">
        <Walkthrough />
        {/* ─── HEADER ─── */}
        <header className="mb-6 sm:mb-8">
          <div className="flex items-center justify-between">
            {/* Logo + Info */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/*<Image
                src="/cropped-principal.png"
                alt="Logo"
                width={56}
                height={56}
                className="object-contain"
              />*/}
              <div>
                <p className="text-xs sm:text-sm font-medium text-orange-500 tracking-wide uppercase">
                  Desafio dos 21 dias
                </p>
                <p className="text-lg sm:text-xl font-semibold text-gray-800">
                  Olá, <span className="text-orange-500">{user.name}</span>!
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setShowObs(true)}
                className="p-2 rounded-full text-gray-400 hover:text-orange-500 hover:bg-orange-50 transition-colors"
                title="Observações"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path strokeLinecap="round" d="M12 16v-4m0-4h.01" />
                </svg>
              </button>
              <button
                onClick={handleLogout}
                className="p-2 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                title="Sair"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* ─── ACTION BUTTONS ─── */}
        <div className="flex items-center gap-2 mb-4 sm:mb-6 md:mb-8">
          <button
            onClick={() => setShowWater(true)}
            className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-2 sm:py-2.5 bg-white border border-gray-200 rounded-lg sm:rounded-xl text-[11px] sm:text-xs md:text-sm font-medium text-gray-700
              hover:border-[rgb(255,145,26)] hover:bg-orange-50/50 active:scale-[0.98] transition-all shadow-card flex-1 sm:flex-initial"
          >
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a.75.75 0 01.69.46l5.06 12.14A4.5 4.5 0 0110 18.5a4.5 4.5 0 01-5.75-3.9L9.31 2.46A.75.75 0 0110 2z" />
            </svg>
            <span className="truncate">
              {water ? `${water}L água` : "Calcular água"}
            </span>
          </button>

          <button
            onClick={handleExportPDF}
            className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-[rgb(255,145,26)] to-[rgb(255,165,0)] text-white rounded-lg sm:rounded-xl text-[11px] sm:text-xs md:text-sm font-semibold
            hover:from-[rgb(255,165,0)] hover:to-[rgb(255,145,26)] hover:shadow-lg hover:shadow-[rgb(255,145,26)]/40 active:scale-[0.98] transition-all shadow-md shadow-[rgb(255,145,26)]/20 shrink-0 relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 relative z-10"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            <span className="hidden sm:inline relative z-10">Exportar</span>
          </button>
        </div>

        {/* ─── CARD PRINCIPAL ─── */}
        <div
          className="bg-white rounded-2xl border-2 border-transparent bg-clip-padding overflow-hidden relative
          before:absolute before:inset-0 before:rounded-2xl before:p-[2px] before:bg-gradient-to-br before:from-[rgb(255,145,26)]/20 before:via-transparent before:to-[rgb(255,145,26)]/10 before:-z-10
          shadow-lg shadow-[rgb(255,145,26)]/10 hover:shadow-xl hover:shadow-[rgb(255,145,26)]/20 transition-all duration-300"
        >
          {/* Container com overflow para o efeito de slide */}
          <div className="overflow-hidden relative">
            <div
              key={`menu-${day}`}
              className={`transition-all duration-300 ease-out ${
                slideDirection === "left"
                  ? "animate-slide-in-right"
                  : slideDirection === "right"
                    ? "animate-slide-in-left"
                    : ""
              }`}
            >
              {/* Navegação de dias */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <button
                  onClick={() => navigate("prev")}
                  disabled={day === 1}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-400
                    hover:bg-gradient-to-r hover:from-[rgb(255,145,26)]/10 hover:to-[rgb(255,165,0)]/10 hover:text-[rgb(255,145,26)] hover:border hover:border-[rgb(255,145,26)]/30
                    disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>

                <div className="text-center">
                  <h2 className="text-xl font-bold">
                    <span className="bg-gradient-to-r from-[rgb(255,145,26)] to-[rgb(255,165,0)] bg-clip-text text-transparent">
                      Dia {day}
                    </span>
                    <span className="text-sm font-normal text-gray-400 ml-1.5">
                      de {maxDay}
                    </span>
                  </h2>
                  {/* Barra de progresso dos 21 dias */}
                  <div className="flex gap-0.5 mt-3 max-w-[280px] mx-auto">
                    {Array.from({ length: maxDay }, (_, i) => i + 1).map(
                      (d) => (
                        <button
                          key={d}
                          onClick={() => handleDayClick(d)}
                          className={`h-1.5 flex-1 rounded-full transition-all min-w-0 relative overflow-hidden ${
                            d === day
                              ? "bg-gradient-to-r from-[rgb(255,145,26)] to-[rgb(255,165,0)] shadow-sm shadow-[rgb(255,145,26)]/50"
                              : d < day
                                ? "bg-gradient-to-r from-orange-200 to-orange-300"
                                : "bg-gray-200 hover:bg-gradient-to-r hover:from-gray-300 hover:to-gray-200"
                          }`}
                          title={`Dia ${d}`}
                        />
                      ),
                    )}
                  </div>
                </div>

                <button
                  onClick={() => navigate("next")}
                  disabled={day === maxDay}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-400
                    hover:bg-gradient-to-r hover:from-[rgb(255,145,26)]/10 hover:to-[rgb(255,165,0)]/10 hover:text-[rgb(255,145,26)] hover:border hover:border-[rgb(255,145,26)]/30
                    disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>

              {/* Refeições */}
              <div className="divide-y divide-gray-100">
                {menu.meals.map((meal, mi) => (
                  <MealSection key={mi} meal={meal} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-8">
          Desafio dos 21 dias &middot; Transforme sua saúde em três semanas
        </p>
      </div>

      {/* Modais */}
      <WaterCalculatorModal
        isOpen={showWater}
        onClose={() => setShowWater(false)}
        onCalculated={setWater}
      />
      <ObservationsModal isOpen={showObs} onClose={() => setShowObs(false)} />
    </div>
  );
}

/* ─────────── COMPONENTE DE REFEIÇÃO ─────────── */
function MealSection({ meal }: { meal: Meal }) {
  const icon = MEAL_ICONS[meal.name] || (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  // Índice da opção aberta (acordeon). Começa com a primeira opção aberta.
  const [openOptionIndex, setOpenOptionIndex] = useState<number | null>(0);

  return (
    <div className="px-6 py-5 animate-fade-in">
      {/* Título da refeição */}
      <div className="flex items-center mb-4">
        <span className="mr-2 text-gray-600">{icon}</span>
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
          {meal.name}
        </h3>
        <div className="dashed-separator" />
        <span className="text-sm font-semibold text-gray-500 font-mono tabular-nums">
          {meal.totalKcal}
          <span className="text-xs font-normal text-gray-400 ml-0.5">kcal</span>
        </span>
      </div>

      {/* Opções (acordeon: apenas uma aberta por vez) */}
      <div className="space-y-3">
        {meal.options.map((option, oi) => (
          <OptionBlock
            key={oi}
            option={option}
            index={oi + 1}
            isOpen={openOptionIndex === oi}
            onToggle={() =>
              setOpenOptionIndex((prev) => (prev === oi ? null : oi))
            }
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────── COMPONENTE DE OPÇÃO (ACORDEON) ─────────── */
function OptionBlock({
  option,
  index,
  isOpen,
  onToggle,
}: {
  option: MealOption;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border rounded-xl transition-all duration-300 ${
        isOpen
          ? "border-[rgb(255,145,26)]/40 bg-gradient-to-br from-orange-50/80 to-white shadow-md shadow-[rgb(255,145,26)]/10"
          : "border-gray-100 bg-gray-50/60 hover:border-[rgb(255,145,26)]/20 hover:bg-orange-50/30"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-2.5 text-left transition-all"
      >
        <div className="flex items-center gap-2">
          <div className="option-badge mb-0">
            <span
              className={`w-4 h-4 rounded-md inline-flex items-center justify-center text-[10px] font-bold transition-all ${
                isOpen
                  ? "bg-gradient-to-br from-[rgb(255,145,26)] to-[rgb(255,165,0)] text-white shadow-sm shadow-[rgb(255,145,26)]/30"
                  : "bg-gray-100 text-gray-500 group-hover:bg-orange-100"
              }`}
            >
              {index}
            </span>
            <span
              className={isOpen ? "text-[rgb(255,145,26)] font-semibold" : ""}
            >
              Opção {index}
            </span>
          </div>
        </div>
        <svg
          className={`w-4 h-4 transition-all duration-200 ${
            isOpen ? "rotate-180 text-[rgb(255,145,26)]" : "text-gray-400"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="space-y-1 px-5 pb-3">
          {option.items.map((item, ii) => (
            <div key={ii} className="group">
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-gray-700 leading-relaxed">
                  <span className="text-gray-400 mr-1.5">–</span>
                  {item.item}
                </span>
                <span className="text-xs font-mono text-gray-400 tabular-nums ml-4 shrink-0 group-hover:text-gray-600 transition-colors">
                  {item.kcal}
                  <span className="text-[10px] ml-0.5">kcal</span>
                </span>
              </div>

              {/* Mostrar alternativas, se existirem */}
              {item.alternatives && item.alternatives.length > 0 && (
                <div className="mt-2 ml-4 pl-3 border-l border-gray-100">
                  <div className="text-xs text-gray-500 mb-1">
                    Alternativas:
                  </div>
                  <ul className="space-y-1">
                    {item.alternatives.map((alt, ai) => (
                      <li
                        key={ai}
                        className="flex items-baseline justify-between text-xs text-gray-600"
                      >
                        <span className="truncate">
                          <span className="text-gray-400 mr-1">•</span>
                          {alt.item}
                        </span>
                        <span className="ml-3 text-gray-400 font-mono tabular-nums text-[11px]">
                          {alt.kcal}
                          <span className="text-[10px] ml-0.5">kcal</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
