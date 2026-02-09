'use client';

import { useEffect } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const sections = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.228 0 4.46s-3.228 1.232-4.46 0L15.3 19.8M5 14.5l-1.402 1.402c-1.232 1.232-1.232 3.228 0 4.46s3.228 1.232 4.46 0L9.75 15.3" />
      </svg>
    ),
    title: 'Café',
    color: 'amber',
    content:
      'O café não está incluso na dieta, mas está liberado para consumo em qualquer horário do dia, sem açúcar. Evite adicionar qualquer tipo de leite.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: 'Adoçante',
    color: 'blue',
    content:
      'Todos os tipos estão liberados. As opções mais saudáveis e recomendadas são LINEA SUCRALOSE e STEVIA.',
  },
];

const beverages = {
  forbidden: {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    title: 'Bebidas — evite tomar',
    items: [
      'Suco natural',
      'Sucos industrializados (ADES, DELL VALLEY, SINUELLO)',
      'Água de coco',
      'Bebidas energéticas (GATORADE, RED BULL)',
      'Suco tipo TANG, chá solúvel e refrigerante comum',
    ],
  },
  allowed: {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Bebidas — pode tomar à vontade',
    items: [
      'Água natural',
      'Suco CLIGHT',
      'Chimarrão',
      'Chá sem açúcar (carqueja, hibisco, cavalinha, cidreira, erva-doce, capim-limão, camomila, cabelo-de-milho, dente-de-leão, quebra-pedra, salsaparrilha, porangaba, guabiroba, chá-de-bugre)',
      'Chá verde (tipo japonês)',
      'Suco natural de limão sem açúcar (amargo ou com adoçante)',
    ],
  },
  moderation: {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: 'Bebidas — tomar com moderação',
    items: [
      'Água com gás',
      'Chá industrializado (GREEN TEA, FEEL GOOD, MTE LEÃO DIET, ICE TEA LIGHT)',
      'Energético zero calorias (NITRIX ZERO e RED BULL SUGAR FREE)',
      'Água gaseificada com sabor',
      'Refrigerante diet/light/zero',
    ],
  },
};

const dotColors: Record<string, string> = {
  forbidden: 'bg-red-400',
  allowed: 'bg-green-400',
  moderation: 'bg-amber-400',
};

export default function ObservationsModal({ isOpen, onClose }: Props) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div
        className="relative bg-white rounded-2xl w-full max-w-[560px] max-h-[85vh] shadow-modal animate-scale-in flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header fixo */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 shrink-0">
          <h2 className="text-lg font-bold text-gray-900">Observações</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Conteúdo scrollável */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Aviso */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
            <p className="text-sm text-blue-800 leading-relaxed">
              Leia esta dieta com atenção pelo menos 2–3 vezes. Qualquer dúvida, entre em contato por e-mail ou telefone.
            </p>
          </div>

          {/* Café e Adoçante */}
          {sections.map((s, i) => (
            <div key={i}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-600">{s.icon}</span>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">{s.title}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed pl-7">{s.content}</p>
            </div>
          ))}

          {/* Listas de bebidas */}
          {(Object.keys(beverages) as Array<keyof typeof beverages>).map((key) => {
            const b = beverages[key];
            return (
              <div key={key}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-gray-600 ${key === 'forbidden' ? 'text-red-500' : key === 'allowed' ? 'text-green-500' : 'text-amber-500'}`}>{b.icon}</span>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">{b.title}</h3>
                </div>
                <ul className="space-y-2 pl-7">
                  {b.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed">
                      <span className={`w-1.5 h-1.5 rounded-full ${dotColors[key]} mt-[7px] shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
