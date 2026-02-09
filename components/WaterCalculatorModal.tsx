'use client';

import { useState, useEffect, useRef } from 'react';
import { calculateWaterIntake, saveWaterIntakeToLocalStorage, getWaterIntakeFromLocalStorage } from '@/lib/waterCalculator';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onCalculated: (liters: number) => void;
}

export default function WaterCalculatorModal({ isOpen, onClose, onCalculated }: Props) {
  const [weight, setWeight] = useState('');
  const [liters, setLiters] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      const saved = getWaterIntakeFromLocalStorage();
      if (saved) setLiters(saved);
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setWeight('');
      setLiters(null);
    }
  }, [isOpen]);

  // Fechar com ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const handleCalc = () => {
    const w = parseFloat(weight);
    if (w > 0) setLiters(calculateWaterIntake(w));
  };

  const handleConfirm = () => {
    if (liters) {
      saveWaterIntakeToLocalStorage(liters);
      onCalculated(liters);
      onClose();
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') liters === null ? handleCalc() : handleConfirm();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl w-full max-w-[400px] shadow-modal animate-scale-in overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-0">
          <h2 className="text-lg font-bold text-gray-900">Calculadora de Água</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 pt-4">
          {liters === null ? (
            <div className="space-y-4">
              <p className="text-sm text-gray-500 leading-relaxed">
                Informe seu peso corporal para calcularmos a quantidade ideal de água diária.
              </p>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
                  Peso
                </label>
                <div className="relative">
                  <input
                    ref={inputRef}
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    onKeyDown={handleKey}
                    placeholder="0"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3.5 text-xl font-semibold
                      focus:outline-none focus:ring-2 focus:ring-[rgb(255,145,26)]/30 focus:border-[rgb(255,145,26)]
                      placeholder:text-gray-300 transition-all"
                    min="1"
                    step="0.1"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-400">kg</span>
                </div>
              </div>
              <button
                onClick={handleCalc}
                disabled={!weight || parseFloat(weight) <= 0}
                className="w-full bg-[rgb(255,145,26)] text-white py-3.5 rounded-xl font-semibold text-sm
                  hover:bg-[rgb(230,130,23)] active:scale-[0.98] transition-all
                  disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100"
              >
                Calcular
              </button>
            </div>
          ) : (
            <div className="space-y-4 animate-slide-up">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center border border-orange-200/60">
                <p className="text-xs font-semibold text-orange-700/70 uppercase tracking-wider mb-3">
                  Consumo diário recomendado
                </p>
                <p className="text-5xl font-extrabold text-[rgb(255,145,26)] tracking-tight">
                  {liters}<span className="text-3xl ml-1">L</span>
                </p>
                <p className="text-sm text-[rgb(255,145,26)]/70 mt-2">de água por dia</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => { setLiters(null); setWeight(''); }}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold text-sm
                    hover:bg-gray-200 active:scale-[0.98] transition-all"
                >
                  Recalcular
                </button>
                <button
                  onClick={handleConfirm}
                  className="flex-1 bg-[rgb(255,145,26)] text-white py-3 rounded-xl font-semibold text-sm
                    hover:bg-[rgb(230,130,23)] active:scale-[0.98] transition-all"
                >
                  Confirmar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
