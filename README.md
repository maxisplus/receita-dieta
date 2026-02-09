# Dieta Calculada - Desafio dos 21 dias

Cardápio fixo do **Desafio dos 21 dias** (apenas frontend).

## 🚀 Como executar

```bash
# Na raiz do projeto
npm run dev

# Ou dentro do frontend
cd frontend && npm install && npm run dev
```

Acesse: http://localhost:3000

## 📋 Funcionalidades

- **Desafio dos 21 dias** - Navegação entre os 21 dias (7 cardápios em ciclo)
- **4 refeições por dia** - Café da manhã, Almoço, Lanche da tarde, Jantar
- **3 opções por refeição** - O usuário pode escolher entre as opções
- **Calculadora de água** - Calcula quantidade diária baseada no peso
- **Modal de observações** - Regras da dieta sempre visíveis
- **Design moderno e responsivo**

## 📝 Editar cardápio

Para personalizar as refeições, edite o arquivo:

```
frontend/data/menu.ts
```

Exemplo de estrutura:

```typescript
{
  day: 1,
  meals: [
    {
      name: 'Café da manhã',
      totalKcal: 430,
      options: [
        {
          items: [
            { item: '2 ovos', kcal: 168 },
            { item: '50g de requeijão', kcal: 200 },
            { item: '1 fatia de pão', kcal: 130 }
          ]
        },
        // ... mais 2 opções
      ]
    },
    // ... mais 3 refeições
  ]
}
```

Os 7 cardápios do arquivo se repetem ao longo dos 21 dias (Dia 1, 8 e 15 usam o cardápio 1; Dia 2, 9 e 16 o cardápio 2; e assim por diante).

## 🎨 Design

Interface moderna com:
- Cores suaves e gradientes
- Cartões arredondados
- Animações suaves
- Totalmente responsivo

## 💧 Calculadora de Água

- Fórmula: 35ml por kg de peso corporal
- Salva no localStorage
- Aparece no topo após calculado
