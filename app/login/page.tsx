"use client";

import { formatPhone, maskPhone, saveUser, validatePhone } from "@/lib/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!phone.trim()) {
      setError("Por favor, informe seu número de telefone");
      setLoading(false);
      return;
    }

    try {
      const formattedPhone = formatPhone(phone);
      const response = await validatePhone(formattedPhone);

      if (response.ok && response.user) {
        // Salvar usuário e redirecionar
        saveUser({
          name: response.user.name,
          phone: formattedPhone,
        });
        router.push("/");
      } else {
        setError(response.message || "Usuário não encontrado");
      }
    } catch (err) {
      setError("Erro ao validar telefone. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-6">
            <Image
              src="/cropped-principal.png"
              alt="Logo"
              width={200}
              height={200}
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Desafio dos 21 dias
          </h1>
          <p className="text-gray-600">Transforme sua saúde em três semanas</p>
        </div>

        {/* Card de Login */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Bem-vindo!</h2>
          <p className="text-sm text-gray-600 mb-6">
            Informe seu número de telefone para acessar seu cardápio
            personalizado.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Número de telefone
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-gray-500 text-sm">+55</span>
                </div>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(maskPhone(e.target.value))}
                  placeholder="(00) 00000-0000"
                  className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-300 rounded-xl text-base
                    focus:outline-none focus:ring-2 focus:ring-[rgb(255,145,26)] focus:border-[rgb(255,145,26)]
                    placeholder:text-gray-400 transition-all"
                  disabled={loading}
                  autoFocus
                />
              </div>
              <p className="text-xs text-gray-500 mt-1.5">
                Digite seu número de telefone com DDD
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 animate-fade-in">
                <p className="text-sm text-red-800 flex items-center gap-2">
                  <svg
                    className="w-4 h-4 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {error}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !phone.trim()}
              className="w-full bg-[rgb(255,145,26)] text-white py-3.5 rounded-xl font-semibold text-base
                hover:bg-[rgb(230,130,23)] active:scale-[0.98] transition-all
                disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
                shadow-lg shadow-[rgb(255,145,26)]/30"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Validando...
                </span>
              ) : (
                "Acessar Cardápio"
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Ao continuar, você concorda com nossos termos de uso
        </p>
      </div>
    </div>
  );
}
