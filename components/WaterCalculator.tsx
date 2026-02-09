'use client';

import { useState, useEffect } from 'react';
import { calculateWaterIntake, saveWaterIntakeToLocalStorage, getWaterIntakeFromLocalStorage } from '@/lib/waterCalculator';

export default function WaterCalculator({ onCalculated }: { onCalculated?: (liters: number) => void }) {
  const [weight, setWeight] = useState<string>('');
  const [calculatedLiters, setCalculatedLiters] = useState<number | null>(null);
  const [confirmedLiters, setConfirmedLiters] = useState<number | null>(null);

  useEffect(() => {
    const saved = getWaterIntakeFromLocalStorage();
    if (saved) {
      setConfirmedLiters(saved);
      onCalculated?.(saved);
    }
  }, []);

  const handleCalculate = () => {
    const weightNum = parseFloat(weight);
    if (weightNum > 0) {
      const liters = calculateWaterIntake(weightNum);
      setCalculatedLiters(liters);
    }
  };

  const handleConfirm = () => {
    if (calculatedLiters !== null) {
      saveWaterIntakeToLocalStorage(calculatedLiters);
      setConfirmedLiters(calculatedLiters);
      onCalculated?.(calculatedLiters);
      setCalculatedLiters(null);
      setWeight('');
    }
  };

  const handleRecalculate = () => {
    setConfirmedLiters(null);
    setCalculatedLiters(null);
    setWeight('');
    if (typeof window !== 'undefined') {
      localStorage.removeItem('water_intake_liters');
      localStorage.removeItem('water_intake_date');
    }
    onCalculated?.(0);
  };

  if (confirmedLiters !== null) {
    return null; // Não mostrar quando já confirmado
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 animate-fade-in" data-water-calc>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
          </svg>
        </div>
        <h2 className="text-lg font-semibold text-gray-900">Calculadora de Água</h2>
      </div>
      
      <div className="space-y-3">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Digite seu peso"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="1"
              step="0.1"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">kg</span>
          </div>
          <button
            onClick={handleCalculate}
            className="bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Calcular
          </button>
        </div>

        {calculatedLiters !== null && (
          <div className="bg-blue-50 rounded-lg p-4 space-y-3 animate-fade-in">
            <p className="text-sm text-gray-600">
              Você deve ingerir aproximadamente:
            </p>
            <p className="text-3xl font-bold text-blue-600">
              {calculatedLiters}L
              <span className="text-sm text-gray-500 font-normal ml-2">de água por dia</span>
            </p>
            <button
              onClick={handleConfirm}
              className="w-full bg-green-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
            >
              Confirmar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
