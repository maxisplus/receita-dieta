const API_URL = 'https://lifeinfit-kcal-bot-rohecbnoaa-uc.a.run.app/api/v1/auth/upsell';

export interface AuthResponse {
  ok: boolean;
  user?: {
    name: string;
  };
  message?: string;
}

export interface User {
  name: string;
  phone: string;
}

/**
 * Valida o número de telefone via API
 */
export async function validatePhone(phone: string): Promise<AuthResponse> {


  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone }),
    });

    if (!response.ok) {
      return {
        ok: false,
        message: 'Erro ao validar telefone. Tente novamente.',
      };
    }

    const data: AuthResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Erro na validação:', error);
    return {
      ok: false,
      message: 'Erro de conexão. Verifique sua internet.',
    };
  }
}

/**
 * Salva dados do usuário no localStorage
 */
export function saveUser(user: User): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('user', JSON.stringify(user));
  }
}

/**
 * Busca dados do usuário do localStorage
 */
export function getUser(): User | null {
  if (typeof window === 'undefined') return null;
  
  const saved = localStorage.getItem('user');
  if (!saved) return null;
  
  try {
    return JSON.parse(saved) as User;
  } catch {
    return null;
  }
}

/**
 * Remove dados do usuário (logout)
 */
export function clearUser(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('user');
  }
}

/**
 * Verifica se o usuário está autenticado
 */
export function isAuthenticated(): boolean {
  return getUser() !== null;
}

/**
 * Aplica máscara de telefone brasileiro no formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
 */
export function maskPhone(value: string): string {
  // Remove tudo que não é número
  const numbers = value.replace(/\D/g, '');
  
  // Limita a 11 dígitos (DDD + 9 dígitos para celular)
  const limitedNumbers = numbers.slice(0, 11);
  
  // Aplica a máscara conforme o tamanho
  if (limitedNumbers.length <= 2) {
    return limitedNumbers;
  } else if (limitedNumbers.length <= 7) {
    return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2)}`;
  } else if (limitedNumbers.length <= 10) {
    return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2, 6)}-${limitedNumbers.slice(6)}`;
  } else {
    return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2, 7)}-${limitedNumbers.slice(7)}`;
  }
}

/**
 * Formata telefone para o formato da API (+55XXXXXXXXXXX)
 */
export function formatPhone(phone: string): string {
  // Remove tudo que não é número
  let numbers = phone.replace(/\D/g, '');
  
  // Se já começa com +, processa removendo o +
  if (phone.startsWith('+')) {
    numbers = phone.replace(/\D/g, '');
  }
  
  // Remove zeros à esquerda
  numbers = numbers.replace(/^0+/, '');
  
  // Se já começa com 55 (código do Brasil), retorna com +
  if (numbers.startsWith('55')) {
    return `+${numbers}`;
  }
  
  // Adiciona código do Brasil se não tiver
  return `+55${numbers}`;
}
