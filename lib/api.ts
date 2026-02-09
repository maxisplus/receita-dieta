// API client usando fetch nativo (sem dependência de axios)
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

const api = {
  get: async (url: string, config?: { params?: Record<string, any> }) => {
    const queryParams = config?.params 
      ? '?' + new URLSearchParams(config.params).toString()
      : '';
    const response = await fetch(`${API_URL}${url}${queryParams}`);
    return { data: await response.json() };
  },
  post: async (url: string, data?: any) => {
    const response = await fetch(`${API_URL}${url}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return { data: await response.json() };
  },
};

export interface Recipe {
  recipe_id: string;
  name: string;
  meal_type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  ingredients: Array<{ name: string; quantity: string; kcal?: number }>;
  prep_time_min: number;
  macros: {
    kcal: number;
    protein: number;
    carb: number;
    fat: number;
  };
  tags: string[];
}

export interface RecipeScore {
  recipe: Recipe;
  score: number;
  reasons: string[];
  friendly_reason?: string;
}

export interface UserEvent {
  user_id: string;
  event_type: 'view_recipe' | 'save_recipe' | 'cook_recipe' | 'swap_ingredient' | 'dislike_recipe' | 'skip_meal';
  recipe_id?: string;
  tags?: Record<string, any>;
}

export const apiClient = {
  // Eventos
  createEvent: (event: UserEvent) => api.post('/events', event),

  // Receitas
  getRecipes: (mealType?: string) => 
    api.get('/recipes', { params: { meal_type: mealType } }),
  getRecipe: (recipeId: string, userId?: string) =>
    api.get(`/recipes/${recipeId}`, { params: { user_id: userId } }),
  generateVariation: (recipeId: string, userId: string, options?: {
    avoid_ingredients?: string[];
    preferred_tags?: string[];
  }) => api.post(`/recipes/${recipeId}/variation`, {
    user_id: userId,
    ...options
  }),
  swapIngredient: (recipeId: string, userId: string, ingredientToReplace: string, options?: {
    avoid_ingredients?: string[];
  }) => api.post(`/recipes/${recipeId}/swap-ingredient`, {
    user_id: userId,
    ingredient_to_replace: ingredientToReplace,
    ...options
  }),

  // Recomendações
  getDailyRecommendations: (userId: string, date?: Date) =>
    api.get(`/recommendations/daily/${userId}`, {
      params: { date: date?.toISOString().split('T')[0] }
    }),
  generateDailyRecommendations: (userId: string, date?: Date) =>
    api.post(`/recommendations/daily/${userId}`, { date: date?.toISOString() }),

  // Perfil
  getProfile: (userId: string) => api.get(`/profile/${userId}`),
  recalculateProfile: (userId: string) => api.post(`/profile/${userId}/recalculate`),

  // Regras da dieta
  getDietRules: () => api.get('/diet-rules/formatted'),
};

export default api;
