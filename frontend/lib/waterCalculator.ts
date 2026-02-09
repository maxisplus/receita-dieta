/**
 * Calcula a quantidade de água diária recomendada baseada no peso
 * Fórmula: 35ml por kg de peso corporal
 */
export function calculateWaterIntake(weightKg: number): number {
  if (weightKg <= 0) return 0;
  return Math.round((weightKg * 35) / 100) / 10; // Arredonda para 1 casa decimal (ex: 3.5l)
}

/**
 * Salva a quantidade de água no localStorage
 */
export function saveWaterIntakeToLocalStorage(liters: number): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('water_intake_liters', liters.toString());
    localStorage.setItem('water_intake_date', new Date().toISOString().split('T')[0]);
  }
}

/**
 * Busca a quantidade de água salva no localStorage
 */
export function getWaterIntakeFromLocalStorage(): number | null {
  if (typeof window === 'undefined') return null;
  
  const savedDate = localStorage.getItem('water_intake_date');
  const today = new Date().toISOString().split('T')[0];
  
  // Se a data salva não for hoje, retorna null
  if (savedDate !== today) {
    return null;
  }
  
  const liters = localStorage.getItem('water_intake_liters');
  return liters ? parseFloat(liters) : null;
}
