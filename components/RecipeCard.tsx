'use client';

import { Recipe } from '@/lib/api';

interface RecipeCardProps {
  recipe: Recipe;
  optionNumber: number;
}

export default function RecipeCard({ recipe, optionNumber }: RecipeCardProps) {
  const totalKcal = recipe.ingredients.reduce((sum, ing) => sum + (ing.kcal || 0), 0);

  return (
    <div className="space-y-1.5">
      <div className="text-sm font-medium text-gray-700">
        Opção {optionNumber}:
      </div>
      <div className="pl-4 border-l-2 border-gray-200 space-y-1">
        {recipe.ingredients.map((ing, idx) => (
          <div key={idx} className="flex justify-between items-center text-sm">
            <span className="text-gray-700">- {ing.quantity} de {ing.name}</span>
            {ing.kcal && (
              <span className="text-gray-500 font-mono text-xs">{ing.kcal} kcal</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
