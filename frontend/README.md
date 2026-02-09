# Dieta Calculada - Frontend

Sistema simples de visualização de cardápio semanal fixo.

## Características

- ✅ **Sem backend** - Tudo funciona apenas no frontend
- ✅ **Cardápio fixo** - 7 dias de refeições pré-definidas
- ✅ **Calculadora de água** - Com localStorage
- ✅ **Design moderno** - Interface limpa e responsiva
- ✅ **Observações** - Modal com regras da dieta

## Como executar

```bash
npm install
npm run dev
```

Acesse: http://localhost:3000

## Estrutura

- `/app` - Páginas Next.js
- `/components` - Componentes React
- `/data` - Dados fixos do cardápio
- `/lib` - Utilitários (calculadora de água)

## Editar cardápio

Para editar as refeições, abra o arquivo `/data/menu.ts` e modifique o array `weekMenu`.

Cada dia tem:
- 4 refeições (Café, Almoço, Lanche, Jantar)
- 3 opções por refeição
- Cada opção tem seus itens com calorias
