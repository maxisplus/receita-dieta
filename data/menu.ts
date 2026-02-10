export interface MenuItem {
  item: string;
  kcal: number;
  alternatives: { item: string; kcal: number }[];
}

export interface MealOption {
  items: MenuItem[];
}

export interface Meal {
  name: string;
  totalKcal: number;
  options: MealOption[];
}

export interface DayMenu {
  day: number;
  meals: Meal[];
}

export const weekMenu: DayMenu[] = [
  // ── DIA 1 ──
  {
    day: 1,
    meals: [
      {
        name: "Café da manhã",
        totalKcal: 320,
        options: [
          {
            items: [
              {
                item: "2 ovos mexidos",
                kcal: 168,
                alternatives: [
                  {
                    item: "1 lata sardinha pequena (80g escorrida)",
                    kcal: 140,
                  },
                  { item: "100g frango desfiado cozido", kcal: 165 },
                ],
              },
              {
                item: "Tapioca pequena (30g de goma)",
                kcal: 100,
                alternatives: [
                  { item: "3 col. sopa aveia em flocos (30g)", kcal: 90 },
                  { item: "1 fatia pão de forma integral", kcal: 80 },
                ],
              },
              {
                item: "1 banana prata",
                kcal: 52,
                alternatives: [
                  { item: "1 maçã pequena", kcal: 60 },
                  { item: "150g mamão", kcal: 45 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Mingau de aveia 50g (água)",
                kcal: 200,
                alternatives: [
                  { item: "Mingau de fubá 50g (água)", kcal: 180 },
                  { item: "3 col. sopa quinoa em flocos (50g)", kcal: 190 },
                ],
              },
              {
                item: "1 col. de chia",
                kcal: 60,
                alternatives: [
                  { item: "1 col. linhaça moída", kcal: 55 },
                  { item: "1 col. semente de abóbora", kcal: 50 },
                ],
              },
              {
                item: "1 maçã pequena",
                kcal: 60,
                alternatives: [
                  { item: "1 pera pequena", kcal: 60 },
                  { item: "2 tangerinas pequenas", kcal: 65 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "1 fatia de pão integral",
                kcal: 80,
                alternatives: [
                  { item: "2 torradas integrais", kcal: 70 },
                  { item: "1 pão francês integral pequeno", kcal: 90 },
                ],
              },
              {
                item: "2 ovos cozidos",
                kcal: 156,
                alternatives: [
                  { item: "1 lata sardinha (100g)", kcal: 140 },
                  { item: "120g frango desfiado", kcal: 190 },
                ],
              },
              {
                item: "1 colher de requeijão light",
                kcal: 60,
                alternatives: [
                  { item: "1 fatia queijo branco light", kcal: 50 },
                  { item: "1/2 abacate pequeno (60g)", kcal: 100 },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Almoço",
        totalKcal: 485,
        options: [
          {
            items: [
              {
                item: "100g arroz (cozido)",
                kcal: 130,
                alternatives: [
                  { item: "100g macarrão integral", kcal: 120 },
                  { item: "150g batata doce", kcal: 135 },
                ],
              },
              {
                item: "100g feijão cozido",
                kcal: 80,
                alternatives: [
                  { item: "100g lentilha", kcal: 110 },
                  { item: "100g grão-de-bico", kcal: 120 },
                ],
              },
              {
                item: "150g coxa de frango sem pele (assada)",
                kcal: 220,
                alternatives: [
                  { item: "130g peito de frango", kcal: 180 },
                  { item: "1 lata sardinha grande (150g)", kcal: 210 },
                ],
              },
              {
                item: "Salada (alface/tomate)",
                kcal: 15,
                alternatives: [
                  { item: "Agrião com cenoura", kcal: 20 },
                  { item: "Couve folha com pepino", kcal: 15 },
                ],
              },
              {
                item: "1 colher de chá de azeite",
                kcal: 40,
                alternatives: [
                  { item: "1 col. chá óleo de soja", kcal: 40 },
                  { item: "1 col. sopa azeite de oliva", kcal: 80 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "120g carne moída magra (refogada)",
                kcal: 260,
                alternatives: [
                  { item: "130g patinho moído", kcal: 250 },
                  { item: "150g frango desfiado", kcal: 240 },
                ],
              },
              {
                item: "150g mandioca cozida",
                kcal: 200,
                alternatives: [
                  { item: "180g batata inglesa", kcal: 140 },
                  { item: "160g inhame", kcal: 190 },
                ],
              },
              {
                item: "Legumes cozidos (cenoura/vagem)",
                kcal: 30,
                alternatives: [
                  { item: "Chuchu cozido", kcal: 25 },
                  { item: "Abobrinha cozida", kcal: 20 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "1 lata de atum em água (100g)",
                kcal: 120,
                alternatives: [
                  { item: "1 lata sardinha em água (100g)", kcal: 140 },
                  { item: "120g frango grelhado desfiado", kcal: 165 },
                ],
              },
              {
                item: "100g arroz (cozido)",
                kcal: 130,
                alternatives: [
                  { item: "100g arroz integral", kcal: 110 },
                  { item: "120g macarrão cozido", kcal: 140 },
                ],
              },
              {
                item: "150g batata doce cozida",
                kcal: 150,
                alternatives: [
                  { item: "150g mandioca cozida", kcal: 200 },
                  { item: "200g batata inglesa", kcal: 160 },
                ],
              },
              {
                item: "Salada simples (limão)",
                kcal: 20,
                alternatives: [
                  { item: "Couve folha", kcal: 15 },
                  { item: "Alface crespa", kcal: 10 },
                ],
              },
              {
                item: "1 col. de azeite",
                kcal: 65,
                alternatives: [
                  { item: "1 col. óleo de soja", kcal: 60 },
                  { item: "1/2 abacate médio", kcal: 80 },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Lanche da tarde",
        totalKcal: 180,
        options: [
          {
            items: [
              {
                item: "Iogurte natural 170g",
                kcal: 90,
                alternatives: [
                  { item: "150g kefir", kcal: 90 },
                  { item: "200g iogurte grego zero", kcal: 120 },
                ],
              },
              {
                item: "1 col. de aveia",
                kcal: 30,
                alternatives: [
                  { item: "1 col. farinha de linhaça", kcal: 35 },
                  { item: "1 col. fubá", kcal: 40 },
                ],
              },
              {
                item: "1 maçã pequena",
                kcal: 60,
                alternatives: [
                  { item: "1 banana prata", kcal: 80 },
                  { item: "150g laranja", kcal: 65 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "1 ovo cozido",
                kcal: 78,
                alternatives: [
                  { item: "50g queijo coalho", kcal: 130 },
                  { item: "60g peito de peru", kcal: 70 },
                ],
              },
              {
                item: "1 pera pequena",
                kcal: 60,
                alternatives: [
                  { item: "1 maçã", kcal: 60 },
                  { item: "2 tangerinas", kcal: 70 },
                ],
              },
              {
                item: "10g castanhas (mix)",
                kcal: 45,
                alternatives: [
                  { item: "1 col. chá amendoim", kcal: 50 },
                  { item: "1/2 col. sopa margarina", kcal: 45 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "1 fatia de pão integral",
                kcal: 80,
                alternatives: [
                  { item: "2 torradas", kcal: 70 },
                  { item: "1 pão francês", kcal: 140 },
                ],
              },
              {
                item: "1 col. de pasta de amendoim",
                kcal: 90,
                alternatives: [
                  { item: "1 fatia queijo branco", kcal: 70 },
                  { item: "1/2 abacate pequeno", kcal: 80 },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Jantar",
        totalKcal: 320,
        options: [
          {
            items: [
              {
                item: "Sopa de lentilha com legumes (porção)",
                kcal: 200,
                alternatives: [
                  { item: "Sopa de feijão com legumes", kcal: 220 },
                  { item: "Caldo de mandioca com carne", kcal: 210 },
                ],
              },
              {
                item: "1 fatia de pão integral",
                kcal: 80,
                alternatives: [
                  { item: "2 torradas", kcal: 70 },
                  { item: "1 pão francês pequeno", kcal: 90 },
                ],
              },
              {
                item: "Salada de folhas",
                kcal: 20,
                alternatives: [
                  { item: "Couve refogada", kcal: 30 },
                  { item: "Agrião cru", kcal: 15 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Omelete de 2 ovos com espinafre",
                kcal: 180,
                alternatives: [
                  { item: "2 ovos fritos com couve", kcal: 190 },
                  { item: "100g peito de frango grelhado", kcal: 165 },
                ],
              },
              {
                item: "1 tapioca pequena (30g)",
                kcal: 100,
                alternatives: [
                  { item: "2 col. sopa aveia", kcal: 90 },
                  { item: "1 fatia pão integral", kcal: 80 },
                ],
              },
              {
                item: "Tomate temperado",
                kcal: 40,
                alternatives: [
                  { item: "Cenoura cozida temperada", kcal: 45 },
                  { item: "Chuchu refogado", kcal: 35 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Frango desfiado 120g",
                kcal: 200,
                alternatives: [
                  { item: "120g carne moída refogada", kcal: 220 },
                  { item: "1 lata sardinha escorrida", kcal: 140 },
                ],
              },
              {
                item: "Legumes assados (abobrinha/berinjela) 100g",
                kcal: 80,
                alternatives: [
                  { item: "Couve-flor cozida 150g", kcal: 45 },
                  { item: "Vagem cozida 150g", kcal: 50 },
                ],
              },
              {
                item: "Salada verde",
                kcal: 40,
                alternatives: [
                  { item: "Repolho roxo cru", kcal: 30 },
                  { item: "Agrião cru", kcal: 25 },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // ── DIA 2 ──
  {
    day: 2,
    meals: [
      {
        name: "Café da manhã",
        totalKcal: 310,
        options: [
          {
            items: [
              {
                item: "Panqueca de aveia e banana (2 un)",
                kcal: 220,
                alternatives: [
                  {
                    item: "2 bolinhos de banana com fubá (assados)",
                    kcal: 200,
                  },
                  { item: "1 tapioca grande com banana amassada", kcal: 210 },
                ],
              },
              {
                item: "Canela a gosto",
                kcal: 0,
                alternatives: [
                  { item: "Cravo a gosto", kcal: 0 },
                  { item: "Baunilha", kcal: 0 },
                ],
              },
              {
                item: "1 xícara de café sem açúcar",
                kcal: 5,
                alternatives: [
                  { item: "1 xícara chá mate", kcal: 0 },
                  { item: "1 xícara café coado", kcal: 5 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Pão integral com ovo cozido",
                kcal: 230,
                alternatives: [
                  { item: "2 torradas com atum", kcal: 220 },
                  { item: "Pão francês com queijo branco", kcal: 240 },
                ],
              },
              {
                item: "1 fatia de queijo branco (pequena)",
                kcal: 70,
                alternatives: [
                  { item: "1 fatia mussarela light", kcal: 60 },
                  { item: "2 col. cottage cheese", kcal: 50 },
                ],
              },
              {
                item: "1 xícara de chá",
                kcal: 5,
                alternatives: [
                  { item: "1 xícara café fraco", kcal: 5 },
                  { item: "Água com limão", kcal: 0 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Mingau de aveia 40g (água)",
                kcal: 160,
                alternatives: [
                  { item: "Mingau de fubá 40g", kcal: 140 },
                  { item: "Aveia em flocos com água 45g", kcal: 170 },
                ],
              },
              {
                item: "1 col. de chia",
                kcal: 60,
                alternatives: [
                  { item: "1 col. linhaça", kcal: 55 },
                  { item: "2 col. semente de girassol", kcal: 50 },
                ],
              },
              {
                item: "100g mamão",
                kcal: 40,
                alternatives: [
                  { item: "100g melão", kcal: 35 },
                  { item: "1 banana pequena", kcal: 80 },
                ],
              },
              {
                item: "Canela",
                kcal: 0,
                alternatives: [
                  { item: "Cravo", kcal: 0 },
                  { item: "Gengibre em pó", kcal: 0 },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Almoço",
        totalKcal: 500,
        options: [
          {
            items: [
              {
                item: "130g carne moída (cozida)",
                kcal: 260,
                alternatives: [
                  { item: "140g frango desfiado", kcal: 230 },
                  { item: "2 ovos fritos + 50g queijo", kcal: 280 },
                ],
              },
              {
                item: "100g arroz (cozido)",
                kcal: 130,
                alternatives: [
                  { item: "100g macarrão", kcal: 120 },
                  { item: "120g batata doce", kcal: 135 },
                ],
              },
              {
                item: "80g feijão",
                kcal: 75,
                alternatives: [
                  { item: "80g lentilha", kcal: 90 },
                  { item: "100g grão-de-bico", kcal: 120 },
                ],
              },
              {
                item: "Salada cru",
                kcal: 20,
                alternatives: [
                  { item: "Couve refogada", kcal: 30 },
                  { item: "Agrião cru", kcal: 15 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "150g sobrecoxa de frango sem pele (assada)",
                kcal: 250,
                alternatives: [
                  { item: "130g peito de frango", kcal: 215 },
                  { item: "1 lata sardinha grande", kcal: 210 },
                ],
              },
              {
                item: "150g mandioca cozida",
                kcal: 200,
                alternatives: [
                  { item: "200g batata inglesa", kcal: 160 },
                  { item: "180g inhame", kcal: 210 },
                ],
              },
              {
                item: "Legumes verdes (vagem)",
                kcal: 30,
                alternatives: [
                  { item: "Chuchu cozido", kcal: 25 },
                  { item: "Abobrinha cozida", kcal: 20 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "120g sardinha (lata em água)",
                kcal: 160,
                alternatives: [
                  { item: "120g atum em água", kcal: 130 },
                  { item: "130g frango grelhado", kcal: 215 },
                ],
              },
              {
                item: "100g arroz (cozido)",
                kcal: 130,
                alternatives: [
                  { item: "100g arroz integral", kcal: 110 },
                  { item: "150g batata doce", kcal: 135 },
                ],
              },
              {
                item: "Espinafre refogado (pequeno)",
                kcal: 30,
                alternatives: [
                  { item: "Couve refogada", kcal: 35 },
                  { item: "Agrião cru (dobro)", kcal: 20 },
                ],
              },
              {
                item: "1 col. de azeite",
                kcal: 80,
                alternatives: [
                  { item: "1 col. óleo de soja", kcal: 80 },
                  { item: "1 col. margarina", kcal: 70 },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Lanche da tarde",
        totalKcal: 170,
        options: [
          {
            items: [
              {
                item: "Iogurte natural 120g",
                kcal: 60,
                alternatives: [
                  { item: "150g kefir", kcal: 70 },
                  { item: "100g coalhada seca", kcal: 80 },
                ],
              },
              {
                item: "1 col. mel",
                kcal: 60,
                alternatives: [
                  { item: "1 col. rapadura ralada", kcal: 60 },
                  { item: "1 banana pequena amassada", kcal: 80 },
                ],
              },
              {
                item: "20g de aveia/granola caseira",
                kcal: 50,
                alternatives: [
                  { item: "20g fubá", kcal: 70 },
                  { item: "15g amendoim torrado", kcal: 90 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "1 fatia de bolo de aveia pequeno (caseiro)",
                kcal: 150,
                alternatives: [
                  { item: "1 fatia pão de queijo caseiro", kcal: 150 },
                  { item: "2 bolachas de arroz com pasta amendoim", kcal: 140 },
                ],
              },
              {
                item: "Café sem açúcar",
                kcal: 5,
                alternatives: [
                  { item: "Chá mate", kcal: 0 },
                  { item: "Chá preto", kcal: 0 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "2 ovos cozidos",
                kcal: 156,
                alternatives: [
                  { item: "1 lata sardinha pequena", kcal: 140 },
                  { item: "100g frango desfiado", kcal: 165 },
                ],
              },
              {
                item: "1 fruta (pera/maçã)",
                kcal: 60,
                alternatives: [
                  { item: "1 banana prata", kcal: 80 },
                  { item: "150g mamão", kcal: 60 },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Jantar",
        totalKcal: 320,
        options: [
          {
            items: [
              {
                item: "Wrap simples com frango desfiado (tortilla caseira)",
                kcal: 300,
                alternatives: [
                  { item: "Tapioca grande com frango", kcal: 280 },
                  { item: "2 fatias pão integral com frango", kcal: 290 },
                ],
              },
              {
                item: "Tomate temperado",
                kcal: 20,
                alternatives: [
                  { item: "Cenoura cozida temperada", kcal: 35 },
                  { item: "Beterraba cozida", kcal: 40 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Salada grande com atum enlatado (100g)",
                kcal: 250,
                alternatives: [
                  { item: "Salada com sardinha (100g)", kcal: 230 },
                  { item: "Salada com frango desfiado (100g)", kcal: 220 },
                ],
              },
              {
                item: "1 col. de azeite",
                kcal: 80,
                alternatives: [
                  { item: "1 col. óleo de soja", kcal: 80 },
                  { item: "1 col. margarina", kcal: 70 },
                ],
              },
              {
                item: "Pepino e cenoura",
                kcal: 20,
                alternatives: [
                  { item: "Tomate e alface", kcal: 15 },
                  { item: "Beterraba ralada", kcal: 35 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Sopa de lentilha com legumes",
                kcal: 200,
                alternatives: [
                  { item: "Sopa de feijão com legumes", kcal: 220 },
                  { item: "Caldo de mandioca com carne", kcal: 210 },
                ],
              },
              {
                item: "1 fatia de pão integral",
                kcal: 80,
                alternatives: [
                  { item: "2 torradas", kcal: 70 },
                  { item: "1 pão francês pequeno", kcal: 90 },
                ],
              },
              {
                item: "Salada pequena",
                kcal: 20,
                alternatives: [
                  { item: "Couve refogada pequena", kcal: 25 },
                  { item: "Agrião", kcal: 15 },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // ── DIA 2 ──
  {
    day: 2,
    meals: [
      {
        name: "Café da manhã",
        totalKcal: 310,
        options: [
          {
            items: [
              {
                item: "Panqueca de aveia e banana (2 un)",
                kcal: 220,
                alternatives: [
                  { item: "2 bolinhos de banana com fubá", kcal: 200 },
                  { item: "Tapioca com banana amassada", kcal: 210 },
                ],
              },
              {
                item: "Canela a gosto",
                kcal: 0,
                alternatives: [
                  { item: "Cravo a gosto", kcal: 0 },
                  { item: "Sem tempero", kcal: 0 },
                ],
              },
              {
                item: "1 xícara de café sem açúcar",
                kcal: 5,
                alternatives: [
                  { item: "1 xícara chá mate", kcal: 0 },
                  { item: "1 xícara café coado", kcal: 5 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Pão integral com ovo cozido",
                kcal: 230,
                alternatives: [
                  { item: "Tapioca com ovo", kcal: 220 },
                  { item: "2 torradas com sardinha", kcal: 210 },
                ],
              },
              {
                item: "1 fatia de queijo branco (pequena)",
                kcal: 70,
                alternatives: [
                  { item: "1 fatia mussarela", kcal: 80 },
                  { item: "2 col. requeijão light", kcal: 60 },
                ],
              },
              {
                item: "1 xícara de chá",
                kcal: 5,
                alternatives: [
                  { item: "1 xícara café fraco", kcal: 5 },
                  { item: "Água morna", kcal: 0 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Mingau de aveia 40g (água)",
                kcal: 160,
                alternatives: [
                  { item: "Mingau de fubá 40g", kcal: 140 },
                  { item: "Mingau de arroz integral 50g", kcal: 170 },
                ],
              },
              {
                item: "1 col. de chia",
                kcal: 60,
                alternatives: [
                  { item: "1 col. linhaça", kcal: 55 },
                  { item: "1 col. gergelim", kcal: 50 },
                ],
              },
              {
                item: "100g mamão",
                kcal: 40,
                alternatives: [
                  { item: "100g melão", kcal: 35 },
                  { item: "1 banana nanica pequena", kcal: 90 },
                ],
              },
              {
                item: "Canela",
                kcal: 0,
                alternatives: [
                  { item: "Cravo", kcal: 0 },
                  { item: "Sem tempero", kcal: 0 },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Almoço",
        totalKcal: 500,
        options: [
          {
            items: [
              {
                item: "150g filé de frango ao molho simples",
                kcal: 270,
                alternatives: [
                  { item: "150g coxa de frango sem pele", kcal: 250 },
                  { item: "130g carne moída magra", kcal: 260 },
                ],
              },
              {
                item: "100g arroz (cozido)",
                kcal: 130,
                alternatives: [
                  { item: "100g macarrão integral", kcal: 120 },
                  { item: "150g batata doce", kcal: 135 },
                ],
              },
              {
                item: "Brócolis e couve-flor congelados",
                kcal: 40,
                alternatives: [
                  { item: "Couve folha refogada", kcal: 35 },
                  { item: "Abobrinha cozida", kcal: 25 },
                ],
              },
              {
                item: "1 col. de azeite",
                kcal: 70,
                alternatives: [
                  { item: "1 col. óleo de soja", kcal: 80 },
                  { item: "1 col. margarina", kcal: 70 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "150g coxão mole (ou assado econômico)",
                kcal: 300,
                alternatives: [
                  { item: "160g coxa de frango", kcal: 280 },
                  { item: "180g carne moída", kcal: 320 },
                ],
              },
              {
                item: "100g macarrão integral (cozido)",
                kcal: 140,
                alternatives: [
                  { item: "100g arroz", kcal: 130 },
                  { item: "150g mandioca", kcal: 200 },
                ],
              },
              {
                item: "Molho de tomate caseiro",
                kcal: 30,
                alternatives: [
                  { item: "Molho de tomate pronto (econômico)", kcal: 40 },
                  { item: "Tomate fresco picado refogado", kcal: 25 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "130g pernil magro assado",
                kcal: 250,
                alternatives: [
                  { item: "140g coxa de frango sem pele", kcal: 260 },
                  { item: "150g carne moída magra", kcal: 260 },
                ],
              },
              {
                item: "100g batata doce assada",
                kcal: 120,
                alternatives: [
                  { item: "100g mandioca assada", kcal: 160 },
                  { item: "120g batata inglesa assada", kcal: 100 },
                ],
              },
              {
                item: "Salada de beterraba ralada",
                kcal: 35,
                alternatives: [
                  { item: "Cenoura ralada crua", kcal: 40 },
                  { item: "Tomate picado", kcal: 20 },
                ],
              },
              {
                item: "Folhas verdes",
                kcal: 15,
                alternatives: [
                  { item: "Couve folha", kcal: 20 },
                  { item: "Agrião", kcal: 15 },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Lanche da tarde",
        totalKcal: 200,
        options: [
          {
            items: [
              {
                item: "Banana amassada com aveia (1 unidade + 20g aveia)",
                kcal: 200,
                alternatives: [
                  { item: "Mamão picado com fubá (150g + 20g)", kcal: 180 },
                  { item: "Banana com pão seco (1 un + 1 fatia)", kcal: 220 },
                ],
              },
              {
                item: "5 castanhas de caju",
                kcal: 60,
                alternatives: [
                  { item: "10 amendoins", kcal: 55 },
                  { item: "1 col. chá óleo de soja", kcal: 40 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Iogurte grego light 120g",
                kcal: 80,
                alternatives: [
                  { item: "Iogurte natural 150g", kcal: 90 },
                  { item: "Coalhada seca 100g", kcal: 70 },
                ],
              },
              {
                item: "1 col. mel",
                kcal: 60,
                alternatives: [
                  { item: "1 col. rapadura ralada", kcal: 60 },
                  { item: "1 banana pequena picada", kcal: 80 },
                ],
              },
              {
                item: "10g nibs de cacau (opcional)",
                kcal: 50,
                alternatives: [
                  { item: "10g chocolate em pó 50%", kcal: 40 },
                  { item: "5g café solúvel (para energy)", kcal: 10 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "1 ovo mexido",
                kcal: 78,
                alternatives: [
                  { item: "50g sardinha enlatada", kcal: 70 },
                  { item: "40g queijo coalho", kcal: 130 },
                ],
              },
              {
                item: "2 torradas integrais",
                kcal: 100,
                alternatives: [
                  { item: "1 pão francês pequeno", kcal: 140 },
                  { item: "3 col. sopa aveia cozida", kcal: 90 },
                ],
              },
              {
                item: "1 fruta pequena",
                kcal: 20,
                alternatives: [
                  { item: "100g melão", kcal: 35 },
                  { item: "1 tangerina", kcal: 40 },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Jantar",
        totalKcal: 320,
        options: [
          {
            items: [
              {
                item: "Wrap simples com frango desfiado (tortilla caseira)",
                kcal: 300,
                alternatives: [
                  { item: "Tapioca grande com frango", kcal: 280 },
                  { item: "2 pães franceses pequenos com frango", kcal: 320 },
                ],
              },
              {
                item: "Tomate temperado",
                kcal: 20,
                alternatives: [
                  { item: "Cenoura cozida temperada", kcal: 40 },
                  { item: "Chuchu refogado", kcal: 30 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Salada grande com atum enlatado (100g)",
                kcal: 250,
                alternatives: [
                  { item: "Salada com sardinha (100g)", kcal: 230 },
                  { item: "Salada com frango (100g)", kcal: 220 },
                ],
              },
              {
                item: "1 col. de azeite",
                kcal: 80,
                alternatives: [
                  { item: "1 col. óleo de soja", kcal: 80 },
                  { item: "1 col. margarina", kcal: 70 },
                ],
              },
              {
                item: "Pepino e cenoura",
                kcal: 20,
                alternatives: [
                  { item: "Tomate e alface", kcal: 15 },
                  { item: "Beterraba ralada", kcal: 40 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Sopa de lentilha com legumes",
                kcal: 200,
                alternatives: [
                  { item: "Sopa de feijão com legumes", kcal: 220 },
                  { item: "Caldo de mandioca com carne", kcal: 210 },
                ],
              },
              {
                item: "1 fatia de pão integral",
                kcal: 80,
                alternatives: [
                  { item: "2 torradas", kcal: 70 },
                  { item: "1 pão francês pequeno", kcal: 90 },
                ],
              },
              {
                item: "Salada pequena",
                kcal: 20,
                alternatives: [
                  { item: "Couve refogada", kcal: 30 },
                  { item: "Agrião", kcal: 15 },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // ── DIA 3 ──
  {
    day: 3,
    meals: [
      {
        name: "Café da manhã",
        totalKcal: 320,
        options: [
          {
            items: [
              {
                item: "Crepioca (1 ovo + 2 col. tapioca)",
                kcal: 200,
                alternatives: [
                  {
                    item: "Omelete com aveia (1 ovo + 2 col aveia)",
                    kcal: 180,
                  },
                  { item: "2 ovos mexidos com fubá", kcal: 220 },
                ],
              },
              {
                item: "30g requeijão light",
                kcal: 60,
                alternatives: [
                  { item: "1 fatia queijo branco", kcal: 70 },
                  { item: "2 col. cottage cheese", kcal: 50 },
                ],
              },
              {
                item: "1 banana prata",
                kcal: 60,
                alternatives: [
                  { item: "1 maçã", kcal: 80 },
                  { item: "150g mamão", kcal: 60 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Smoothie de frutas com aveia (sem whey)",
                kcal: 200,
                alternatives: [
                  { item: "Vitamina de banana com aveia", kcal: 220 },
                  { item: "Mamão batido com aveia", kcal: 180 },
                ],
              },
              {
                item: "2 torradas integrais",
                kcal: 100,
                alternatives: [
                  { item: "1 pão francês", kcal: 140 },
                  { item: "3 col. aveia cozida", kcal: 90 },
                ],
              },
              {
                item: "1 fruta pequena",
                kcal: 20,
                alternatives: [
                  { item: "100g melão", kcal: 35 },
                  { item: "1 tangerina", kcal: 40 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "2 ovos cozidos",
                kcal: 156,
                alternatives: [
                  { item: "1 lata sardinha", kcal: 140 },
                  { item: "100g frango desfiado", kcal: 165 },
                ],
              },
              {
                item: "1 fatia de pão integral",
                kcal: 80,
                alternatives: [
                  { item: "2 torradas", kcal: 70 },
                  { item: "1 pão francês pequeno", kcal: 90 },
                ],
              },
              {
                item: "100g melão",
                kcal: 35,
                alternatives: [
                  { item: "100g mamão", kcal: 40 },
                  { item: "1 kiwi", kcal: 45 },
                ],
              },
              {
                item: "Canela",
                kcal: 0,
                alternatives: [
                  { item: "Cravo", kcal: 0 },
                  { item: "Sem tempero", kcal: 0 },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Almoço",
        totalKcal: 500,
        options: [
          {
            items: [
              {
                item: "150g peito de frango grelhado",
                kcal: 250,
                alternatives: [
                  { item: "160g coxa de frango sem pele", kcal: 260 },
                  { item: "1 lata sardinha grande", kcal: 210 },
                ],
              },
              {
                item: "100g arroz (cozido)",
                kcal: 130,
                alternatives: [
                  { item: "100g macarrão", kcal: 120 },
                  { item: "150g batata doce", kcal: 135 },
                ],
              },
              {
                item: "Berinjela assada",
                kcal: 35,
                alternatives: [
                  { item: "Abobrinha assada", kcal: 30 },
                  { item: "Chuchu assado", kcal: 25 },
                ],
              },
              {
                item: "Salada (agrião)",
                kcal: 15,
                alternatives: [
                  { item: "Alface", kcal: 10 },
                  { item: "Couve folha", kcal: 20 },
                ],
              },
              {
                item: "1 col. de azeite",
                kcal: 70,
                alternatives: [
                  { item: "1 col. óleo de soja", kcal: 80 },
                  { item: "1 col. margarina", kcal: 70 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "150g lagarto ou carne magra (grelhada)",
                kcal: 280,
                alternatives: [
                  { item: "160g coxa de frango", kcal: 280 },
                  { item: "180g carne moída magra", kcal: 300 },
                ],
              },
              {
                item: "100g purê de batata doce",
                kcal: 120,
                alternatives: [
                  { item: "100g purê de mandioca", kcal: 160 },
                  { item: "100g purê de batata inglesa", kcal: 90 },
                ],
              },
              {
                item: "Cenoura cozida",
                kcal: 30,
                alternatives: [
                  { item: "Chuchu cozido", kcal: 25 },
                  { item: "Abobrinha cozida", kcal: 20 },
                ],
              },
              {
                item: "Molho de tomate caseiro",
                kcal: 25,
                alternatives: [
                  { item: "Molho pronto sache", kcal: 30 },
                  { item: "Tomate fresco refogado", kcal: 20 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "120g peixe assado (peixe branco)",
                kcal: 160,
                alternatives: [
                  { item: "120g frango grelhado", kcal: 200 },
                  { item: "1 lata sardinha", kcal: 140 },
                ],
              },
              {
                item: "100g lentilha cozida",
                kcal: 120,
                alternatives: [
                  { item: "100g feijão carioca", kcal: 80 },
                  { item: "100g grão-de-bico", kcal: 120 },
                ],
              },
              {
                item: "Chuchu refogado",
                kcal: 25,
                alternatives: [
                  { item: "Abobrinha refogada", kcal: 30 },
                  { item: "Berinjela refogada", kcal: 35 },
                ],
              },
              {
                item: "1 col. de azeite",
                kcal: 80,
                alternatives: [
                  { item: "1 col. óleo de soja", kcal: 80 },
                  { item: "1 col. margarina", kcal: 70 },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Lanche da tarde",
        totalKcal: 170,
        options: [
          {
            items: [
              {
                item: "Smoothie verde (couve + abacaxi + água)",
                kcal: 100,
                alternatives: [
                  { item: "Suco de laranja natural", kcal: 80 },
                  { item: "Vitamina de banana com água", kcal: 120 },
                ],
              },
              {
                item: "2 torradas com cottage",
                kcal: 80,
                alternatives: [
                  { item: "2 torradas com requeijão light", kcal: 90 },
                  { item: "1 pão com queijo branco", kcal: 150 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "1 barrinha de proteína caseira (aveia/banana)",
                kcal: 180,
                alternatives: [
                  { item: "2 bolachas de arroz com pasta amendoim", kcal: 160 },
                  { item: "1 pão de queijo caseiro", kcal: 150 },
                ],
              },
              {
                item: "1 pera",
                kcal: 60,
                alternatives: [
                  { item: "1 maçã", kcal: 60 },
                  { item: "1 banana", kcal: 90 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Bolinho de banana fit (1 un pequeno)",
                kcal: 160,
                alternatives: [
                  { item: "1 fatia bolo de fubá", kcal: 180 },
                  { item: "2 bolachas maizena com banana", kcal: 150 },
                ],
              },
              {
                item: "Chá verde",
                kcal: 0,
                alternatives: [
                  { item: "Chá mate", kcal: 0 },
                  { item: "Chá preto", kcal: 0 },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Jantar",
        totalKcal: 320,
        options: [
          {
            items: [
              {
                item: "Hambúrguer de frango caseiro (150g)",
                kcal: 250,
                alternatives: [
                  { item: "150g almôndegas de carne moída", kcal: 280 },
                  { item: "150g peixe empanado caseiro", kcal: 240 },
                ],
              },
              {
                item: "Salada de folhas com tomate",
                kcal: 30,
                alternatives: [
                  { item: "Couve refogada", kcal: 35 },
                  { item: "Cenoura ralada com limão", kcal: 40 },
                ],
              },
              {
                item: "1 fatia de pão integral (opcional)",
                kcal: 80,
                alternatives: [
                  { item: "2 torradas", kcal: 70 },
                  { item: "1 pão francês pequeno", kcal: 90 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Bowl de quinoa/cevada com legumes (porção moderada)",
                kcal: 260,
                alternatives: [
                  { item: "Bowl de arroz integral com legumes", kcal: 240 },
                  { item: "Bowl de feijão tropeiro (sem bacon)", kcal: 280 },
                ],
              },
              {
                item: "100g frango desfiado",
                kcal: 165,
                alternatives: [
                  { item: "100g carne moída refogada", kcal: 180 },
                  { item: "1 lata sardinha pequena", kcal: 140 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Sopa de legumes com carne (porção)",
                kcal: 220,
                alternatives: [
                  { item: "Sopa de feijão com carne", kcal: 240 },
                  { item: "Caldo de mandioca com frango", kcal: 230 },
                ],
              },
              {
                item: "2 torradas integrais",
                kcal: 100,
                alternatives: [
                  { item: "1 pão francês", kcal: 140 },
                  { item: "1 fatia pão integral grossa", kcal: 90 },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // ── DIA 4 ──
  {
    day: 4,
    meals: [
      {
        name: "Café da manhã",
        totalKcal: 300,
        options: [
          {
            items: [
              {
                item: "Overnight oats (aveia + iogurte natural) 50g",
                kcal: 250,
                alternatives: [
                  { item: "Aveia cozida com leite em pó (50g)", kcal: 240 },
                  { item: "Fubá com iogurte (50g fubá)", kcal: 230 },
                ],
              },
              {
                item: "Frutas da estação 50g",
                kcal: 25,
                alternatives: [
                  { item: "Banana 1/2 unidade", kcal: 45 },
                  { item: "Mamão 100g", kcal: 40 },
                ],
              },
              {
                item: "1 col. chia",
                kcal: 25,
                alternatives: [
                  { item: "1 col. linhaça", kcal: 28 },
                  { item: "1 col. gergelim", kcal: 22 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Tapioca com queijo branco (pequena)",
                kcal: 250,
                alternatives: [
                  { item: "Crepioca com queijo", kcal: 280 },
                  { item: "Pão integral com queijo quente", kcal: 240 },
                ],
              },
              {
                item: "Café sem açúcar",
                kcal: 5,
                alternatives: [
                  { item: "Chá mate", kcal: 0 },
                  { item: "Chá preto", kcal: 0 },
                ],
              },
              {
                item: "1 kiwi pequeno",
                kcal: 40,
                alternatives: [
                  { item: "1 tangerina", kcal: 40 },
                  { item: "100g melão", kcal: 35 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "2 ovos mexidos com tomate",
                kcal: 156,
                alternatives: [
                  { item: "2 ovos fritos", kcal: 180 },
                  { item: "100g frango desfiado", kcal: 165 },
                ],
              },
              {
                item: "1 fatia de pão integral",
                kcal: 80,
                alternatives: [
                  { item: "2 torradas", kcal: 70 },
                  { item: "1 pão francês pequeno", kcal: 90 },
                ],
              },
              {
                item: "100g mamão",
                kcal: 40,
                alternatives: [
                  { item: "100g melão", kcal: 35 },
                  { item: "1/2 banana", kcal: 45 },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Almoço",
        totalKcal: 510,
        options: [
          {
            items: [
              {
                item: "150g filé de frango ao molho simples",
                kcal: 270,
                alternatives: [
                  { item: "150g coxa de frango sem pele", kcal: 250 },
                  { item: "140g carne moída magra", kcal: 280 },
                ],
              },
              {
                item: "100g arroz (cozido)",
                kcal: 130,
                alternatives: [
                  { item: "100g macarrão integral", kcal: 120 },
                  { item: "150g batata doce", kcal: 135 },
                ],
              },
              {
                item: "Brócolis e couve-flor congelados",
                kcal: 40,
                alternatives: [
                  { item: "Couve folha refogada", kcal: 35 },
                  { item: "Vagem cozida", kcal: 30 },
                ],
              },
              {
                item: "1 col. de azeite",
                kcal: 70,
                alternatives: [
                  { item: "1 col. óleo de soja", kcal: 80 },
                  { item: "1 col. margarina", kcal: 70 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "150g coxão mole (ou assado econômico)",
                kcal: 300,
                alternatives: [
                  { item: "160g coxa de frango", kcal: 280 },
                  { item: "180g carne moída", kcal: 320 },
                ],
              },
              {
                item: "100g macarrão integral (cozido)",
                kcal: 140,
                alternatives: [
                  { item: "100g arroz", kcal: 130 },
                  { item: "150g mandioca", kcal: 200 },
                ],
              },
              {
                item: "Molho de tomate caseiro",
                kcal: 30,
                alternatives: [
                  { item: "Molho de tomate pronto", kcal: 40 },
                  { item: "Tomate fresco refogado", kcal: 25 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "130g pernil magro assado",
                kcal: 250,
                alternatives: [
                  { item: "140g coxa de frango sem pele", kcal: 260 },
                  { item: "150g carne moída magra", kcal: 260 },
                ],
              },
              {
                item: "100g batata doce assada",
                kcal: 120,
                alternatives: [
                  { item: "100g mandioca assada", kcal: 160 },
                  { item: "120g batata inglesa assada", kcal: 100 },
                ],
              },
              {
                item: "Salada de beterraba ralada",
                kcal: 35,
                alternatives: [
                  { item: "Cenoura ralada", kcal: 40 },
                  { item: "Tomate picado", kcal: 20 },
                ],
              },
              {
                item: "Folhas verdes",
                kcal: 15,
                alternatives: [
                  { item: "Couve folha", kcal: 20 },
                  { item: "Agrião", kcal: 15 },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Lanche da tarde",
        totalKcal: 160,
        options: [
          {
            items: [
              {
                item: "Mix de oleaginosas 20g",
                kcal: 140,
                alternatives: [
                  { item: "20g amendoim torrado", kcal: 115 },
                  { item: "15g castanha de caju", kcal: 85 },
                ],
              },
              {
                item: "1 pera pequena",
                kcal: 60,
                alternatives: [
                  { item: "1 maçã pequena", kcal: 60 },
                  { item: "1 banana prata", kcal: 80 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Queijo cottage 100g",
                kcal: 100,
                alternatives: [
                  { item: "100g coalhada seca", kcal: 80 },
                  { item: "80g queijo branco", kcal: 110 },
                ],
              },
              {
                item: "2 torradas integrais",
                kcal: 100,
                alternatives: [
                  { item: "1 pão francês", kcal: 140 },
                  { item: "1 fatia pão integral grossa", kcal: 90 },
                ],
              },
              {
                item: "Tomate cereja (pequeno)",
                kcal: 10,
                alternatives: [
                  { item: "Tomate picado comum", kcal: 20 },
                  { item: "Cenoura ralada", kcal: 40 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "1 copo iogurte natural",
                kcal: 90,
                alternatives: [
                  { item: "1 copo kefir", kcal: 90 },
                  { item: "150g coalhada", kcal: 120 },
                ],
              },
              {
                item: "1 maçã verde",
                kcal: 80,
                alternatives: [
                  { item: "1 banana", kcal: 90 },
                  { item: "150g mamão", kcal: 60 },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Jantar",
        totalKcal: 320,
        options: [
          {
            items: [
              {
                item: "Escondidinho de frango light (batata doce)",
                kcal: 300,
                alternatives: [
                  { item: "Escondidinho de carne com mandioca", kcal: 320 },
                  {
                    item: "Purê de batata doce com frango desfiado",
                    kcal: 280,
                  },
                ],
              },
              {
                item: "Salada de tomate",
                kcal: 30,
                alternatives: [
                  { item: "Salada de pepino", kcal: 20 },
                  { item: "Cenoura ralada", kcal: 40 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Omelete 2 ovos com tomate",
                kcal: 180,
                alternatives: [
                  { item: "2 ovos fritos com cebola", kcal: 190 },
                  { item: "100g frango grelhado", kcal: 165 },
                ],
              },
              {
                item: "1 fatia de pão integral",
                kcal: 80,
                alternatives: [
                  { item: "2 torradas", kcal: 70 },
                  { item: "1 pão francês pequeno", kcal: 90 },
                ],
              },
              {
                item: "Salada pequena",
                kcal: 20,
                alternatives: [
                  { item: "Couve refogada", kcal: 30 },
                  { item: "Cenoura cozida", kcal: 35 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Panqueca de aveia (2 un) com frango desfiado",
                kcal: 260,
                alternatives: [
                  { item: "Tapioca grande com frango", kcal: 280 },
                  { item: "2 fatias pão com frango desfiado", kcal: 250 },
                ],
              },
              {
                item: "Salada verde",
                kcal: 20,
                alternatives: [
                  { item: "Couve folha", kcal: 20 },
                  { item: "Agrião", kcal: 15 },
                ],
              },
              {
                item: "1 fruta pequena",
                kcal: 30,
                alternatives: [
                  { item: "1 tangerina", kcal: 40 },
                  { item: "100g melão", kcal: 35 },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // ── DIA 5 ──
  {
    day: 5,
    meals: [
      {
        name: "Café da manhã",
        totalKcal: 330,
        options: [
          {
            items: [
              {
                item: "2 ovos pochê",
                kcal: 156,
                alternatives: [
                  { item: "2 ovos cozidos", kcal: 156 },
                  { item: "100g peito de peru", kcal: 110 },
                ],
              },
              {
                item: "1 fatia de pão integral com abacate (pequena)",
                kcal: 160,
                alternatives: [
                  { item: "Tapioca com abacate", kcal: 180 },
                  { item: "Pão com margarina", kcal: 130 },
                ],
              },
              {
                item: "Chá verde",
                kcal: 5,
                alternatives: [
                  { item: "Chá mate", kcal: 0 },
                  { item: "Chá preto", kcal: 0 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Vitamina de banana com aveia (sem whey)",
                kcal: 250,
                alternatives: [
                  { item: "Vitamina de mamão com aveia", kcal: 200 },
                  { item: "Banana batida com leite em pó", kcal: 230 },
                ],
              },
              {
                item: "5 castanhas do Pará ( pequenas )",
                kcal: 80,
                alternatives: [
                  { item: "10 amendoins", kcal: 60 },
                  { item: "1 col. chá óleo de soja", kcal: 40 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Crepioca com queijo branco",
                kcal: 280,
                alternatives: [
                  { item: "Tapioca com ovo", kcal: 220 },
                  { item: "Pão integral com queijo quente", kcal: 260 },
                ],
              },
              {
                item: "100g melancia",
                kcal: 30,
                alternatives: [
                  { item: "100g melão", kcal: 35 },
                  { item: "1 tangerina", kcal: 40 },
                ],
              },
              {
                item: "Café sem açúcar",
                kcal: 5,
                alternatives: [
                  { item: "Chá mate", kcal: 0 },
                  { item: "Chá preto", kcal: 0 },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Almoço",
        totalKcal: 520,
        options: [
          {
            items: [
              {
                item: "150g filé mignon (ou corte magro em promoção)",
                kcal: 300,
                alternatives: [
                  { item: "160g coxa de frango", kcal: 280 },
                  { item: "180g carne moída magra", kcal: 320 },
                ],
              },
              {
                item: "100g arroz (cozido)",
                kcal: 130,
                alternatives: [
                  { item: "100g macarrão integral", kcal: 120 },
                  { item: "150g batata doce", kcal: 135 },
                ],
              },
              {
                item: "Espinafre refogado",
                kcal: 40,
                alternatives: [
                  { item: "Couve refogada", kcal: 35 },
                  { item: "Agrião refogado", kcal: 30 },
                ],
              },
              {
                item: "Tomate assado",
                kcal: 25,
                alternatives: [
                  { item: "Cenoura assada", kcal: 40 },
                  { item: "Abobrinha assada", kcal: 30 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "150g coxa de frango assada",
                kcal: 280,
                alternatives: [
                  { item: "130g peito de frango", kcal: 215 },
                  { item: "160g carne moída assada", kcal: 290 },
                ],
              },
              {
                item: "150g purê de abóbora",
                kcal: 80,
                alternatives: [
                  { item: "150g purê de batata doce", kcal: 120 },
                  { item: "150g purê de mandioca", kcal: 160 },
                ],
              },
              {
                item: "80g feijão preto",
                kcal: 90,
                alternatives: [
                  { item: "80g feijão carioca", kcal: 85 },
                  { item: "80g lentilha", kcal: 95 },
                ],
              },
              {
                item: "Salada simples",
                kcal: 15,
                alternatives: [
                  { item: "Agrião", kcal: 15 },
                  { item: "Alface", kcal: 10 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "130g atum fresco ou enlatado (quando fresco for caro, usar enlatado)",
                kcal: 240,
                alternatives: [
                  { item: "130g sardinha enlatada", kcal: 180 },
                  { item: "130g frango grelhado", kcal: 215 },
                ],
              },
              {
                item: "100g arroz 7 grãos (ou mix arroz)",
                kcal: 140,
                alternatives: [
                  { item: "100g arroz branco", kcal: 130 },
                  { item: "100g arroz integral", kcal: 110 },
                ],
              },
              {
                item: "Aspargos/legume econômico",
                kcal: 30,
                alternatives: [
                  { item: "Vagem cozida", kcal: 30 },
                  { item: "Chuchu cozido", kcal: 25 },
                ],
              },
              {
                item: "1 col. de azeite",
                kcal: 40,
                alternatives: [
                  { item: "1 col. óleo de soja", kcal: 40 },
                  { item: "1 col. margarina", kcal: 35 },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Lanche da tarde",
        totalKcal: 170,
        options: [
          {
            items: [
              {
                item: "Mix de oleaginosas 20g",
                kcal: 140,
                alternatives: [
                  { item: "20g amendoim", kcal: 115 },
                  { item: "15g castanha de caju", kcal: 85 },
                ],
              },
              {
                item: "1 pera pequena",
                kcal: 60,
                alternatives: [
                  { item: "1 maçã pequena", kcal: 60 },
                  { item: "1 banana prata", kcal: 80 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Queijo cottage 100g",
                kcal: 100,
                alternatives: [
                  { item: "100g coalhada seca", kcal: 80 },
                  { item: "80g queijo branco", kcal: 110 },
                ],
              },
              {
                item: "2 torradas integrais",
                kcal: 100,
                alternatives: [
                  { item: "1 pão francês", kcal: 140 },
                  { item: "1 fatia pão integral", kcal: 80 },
                ],
              },
              {
                item: "Tomate cereja (pequeno)",
                kcal: 10,
                alternatives: [
                  { item: "Tomate comum picado", kcal: 20 },
                  { item: "Cenoura ralada", kcal: 40 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "1 copo iogurte natural",
                kcal: 90,
                alternatives: [
                  { item: "1 copo kefir", kcal: 90 },
                  { item: "150g coalhada", kcal: 120 },
                ],
              },
              {
                item: "1 maçã verde",
                kcal: 80,
                alternatives: [
                  { item: "1 banana", kcal: 90 },
                  { item: "150g mamão", kcal: 60 },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Jantar",
        totalKcal: 320,
        options: [
          {
            items: [
              {
                item: "150g peixe assado (opções locais/mais baratas)",
                kcal: 200,
                alternatives: [
                  { item: "150g frango grelhado", kcal: 250 },
                  { item: "1 lata sardinha grande", kcal: 210 },
                ],
              },
              {
                item: "Legumes assados (abobrinha + berinjela)",
                kcal: 60,
                alternatives: [
                  { item: "Couve-flor cozida", kcal: 40 },
                  { item: "Vagem cozida", kcal: 45 },
                ],
              },
              {
                item: "1 batata pequena assada",
                kcal: 60,
                alternatives: [
                  { item: "100g mandioca cozida", kcal: 130 },
                  { item: "100g batata doce", kcal: 90 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Strogonoff de frango fit (porção pequena)",
                kcal: 280,
                alternatives: [
                  { item: "Frango ao molho branco light", kcal: 260 },
                  {
                    item: "Frango desfiado com creme de milho (light)",
                    kcal: 250,
                  },
                ],
              },
              {
                item: "80g arroz (cozido)",
                kcal: 80,
                alternatives: [
                  { item: "80g macarrão", kcal: 95 },
                  { item: "100g batata doce", kcal: 90 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Omelete de claras com cogumelos",
                kcal: 180,
                alternatives: [
                  { item: "Omelete de ovos inteiros", kcal: 210 },
                  { item: "100g frango grelhado", kcal: 165 },
                ],
              },
              {
                item: "Salada Caesar light (porção pequena)",
                kcal: 120,
                alternatives: [
                  { item: "Salada verde com limão", kcal: 40 },
                  { item: "Salada de alface e tomate", kcal: 30 },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // ── DIA 6 ──
  {
    day: 6,
    meals: [
      {
        name: "Café da manhã",
        totalKcal: 330,
        options: [
          {
            items: [
              {
                item: "Panqueca de aveia com banana (2-3 un)",
                kcal: 300,
                alternatives: [
                  { item: "Bolinhos de banana com fubá (2 un)", kcal: 280 },
                  { item: "Tapioca com banana e canela", kcal: 250 },
                ],
              },
              {
                item: "Canela e 1 col. mel (pequena)",
                kcal: 30,
                alternatives: [
                  { item: "Canela e rapadura ralada", kcal: 40 },
                  { item: "Canela pura", kcal: 0 },
                ],
              },
              {
                item: "Café sem açúcar",
                kcal: 5,
                alternatives: [
                  { item: "Chá mate", kcal: 0 },
                  { item: "Chá preto", kcal: 0 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "1 pão francês integral",
                kcal: 170,
                alternatives: [
                  { item: "2 fatias pão integral", kcal: 160 },
                  { item: "1 tapioca grande", kcal: 150 },
                ],
              },
              {
                item: "2 ovos mexidos",
                kcal: 156,
                alternatives: [
                  { item: "2 ovos cozidos", kcal: 156 },
                  { item: "100g frango desfiado", kcal: 165 },
                ],
              },
              {
                item: "100g mamão",
                kcal: 40,
                alternatives: [
                  { item: "100g melão", kcal: 35 },
                  { item: "1 banana pequena", kcal: 80 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Açaí fit 150-200ml (sem xarope) - versão econômica",
                kcal: 250,
                alternatives: [
                  { item: "Smoothie de banana com aveia", kcal: 220 },
                  { item: "Vitamina de mamão com aveia", kcal: 200 },
                ],
              },
              {
                item: "1 col. granola caseira 15g",
                kcal: 65,
                alternatives: [
                  { item: "15g aveia em flocos", kcal: 45 },
                  { item: "10g amendoim torrado", kcal: 60 },
                ],
              },
              {
                item: "1 banana pequena",
                kcal: 50,
                alternatives: [
                  { item: "1 maçã pequena", kcal: 60 },
                  { item: "1 pera pequena", kcal: 60 },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Almoço",
        totalKcal: 510,
        options: [
          {
            items: [
              {
                item: "150g frango ao limão (asse/grelhado)",
                kcal: 260,
                alternatives: [
                  { item: "150g coxa de frango sem pele", kcal: 250 },
                  { item: "140g carne moída magra", kcal: 280 },
                ],
              },
              {
                item: "100g macarrão integral (cozido)",
                kcal: 140,
                alternatives: [
                  { item: "100g arroz", kcal: 130 },
                  { item: "150g mandioca", kcal: 200 },
                ],
              },
              {
                item: "Brócolis no vapor",
                kcal: 30,
                alternatives: [
                  { item: "Couve-flor no vapor", kcal: 25 },
                  { item: "Vagem cozida", kcal: 30 },
                ],
              },
              {
                item: "Cenoura ralada",
                kcal: 20,
                alternatives: [
                  { item: "Beterraba ralada", kcal: 40 },
                  { item: "Tomate picado", kcal: 20 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "150g alcatra grelhada (promoção)",
                kcal: 300,
                alternatives: [
                  { item: "160g coxa de frango", kcal: 280 },
                  { item: "180g carne moída", kcal: 320 },
                ],
              },
              {
                item: "80g arroz (cozido)",
                kcal: 100,
                alternatives: [
                  { item: "80g macarrão", kcal: 95 },
                  { item: "100g batata doce", kcal: 90 },
                ],
              },
              {
                item: "80g feijão",
                kcal: 75,
                alternatives: [
                  { item: "80g lentilha", kcal: 90 },
                  { item: "80g grão-de-bico", kcal: 95 },
                ],
              },
              {
                item: "Salada mista",
                kcal: 25,
                alternatives: [
                  { item: "Couve refogada", kcal: 30 },
                  { item: "Agrião", kcal: 15 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "130g salmão ou sardinha (quando salmão caro, trocar por sardinha)",
                kcal: 200,
                alternatives: [
                  { item: "130g sardinha enlatada", kcal: 180 },
                  { item: "130g frango grelhado", kcal: 215 },
                ],
              },
              {
                item: "100g batata doce",
                kcal: 120,
                alternatives: [
                  { item: "100g mandioca", kcal: 130 },
                  { item: "120g batata inglesa", kcal: 100 },
                ],
              },
              {
                item: "Espinafre com alho",
                kcal: 35,
                alternatives: [
                  { item: "Couve com alho", kcal: 40 },
                  { item: "Agrião refogado", kcal: 30 },
                ],
              },
              {
                item: "1 col. de azeite",
                kcal: 40,
                alternatives: [
                  { item: "1 col. óleo de soja", kcal: 40 },
                  { item: "1 col. margarina", kcal: 35 },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Lanche da tarde",
        totalKcal: 160,
        options: [
          {
            items: [
              {
                item: "Mix de oleaginosas 20g",
                kcal: 140,
                alternatives: [
                  { item: "20g amendoim", kcal: 115 },
                  { item: "15g castanha de caju", kcal: 85 },
                ],
              },
              {
                item: "1 pera pequena",
                kcal: 60,
                alternatives: [
                  { item: "1 maçã pequena", kcal: 60 },
                  { item: "1 banana prata", kcal: 80 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Queijo cottage 100g",
                kcal: 100,
                alternatives: [
                  { item: "100g coalhada seca", kcal: 80 },
                  { item: "80g queijo branco", kcal: 110 },
                ],
              },
              {
                item: "2 torradas integrais",
                kcal: 100,
                alternatives: [
                  { item: "1 pão francês", kcal: 140 },
                  { item: "1 fatia pão integral grossa", kcal: 90 },
                ],
              },
              {
                item: "Tomate cereja (pequeno)",
                kcal: 10,
                alternatives: [
                  { item: "Tomate comum picado", kcal: 20 },
                  { item: "Cenoura ralada", kcal: 40 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "1 copo iogurte natural",
                kcal: 90,
                alternatives: [
                  { item: "1 copo kefir", kcal: 90 },
                  { item: "150g coalhada", kcal: 120 },
                ],
              },
              {
                item: "1 maçã verde",
                kcal: 80,
                alternatives: [
                  { item: "1 banana", kcal: 90 },
                  { item: "150g mamão", kcal: 60 },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Jantar",
        totalKcal: 320,
        options: [
          {
            items: [
              {
                item: "150g peixe assado (opções locais/mais baratas)",
                kcal: 200,
                alternatives: [
                  { item: "150g frango grelhado", kcal: 250 },
                  { item: "1 lata sardinha grande", kcal: 210 },
                ],
              },
              {
                item: "Legumes assados (abobrinha + berinjela)",
                kcal: 60,
                alternatives: [
                  { item: "Couve-flor cozida", kcal: 45 },
                  { item: "Vagem cozida", kcal: 50 },
                ],
              },
              {
                item: "1 batata pequena assada",
                kcal: 60,
                alternatives: [
                  { item: "100g mandioca cozida", kcal: 130 },
                  { item: "100g batata doce", kcal: 90 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Strogonoff de frango fit (porção pequena)",
                kcal: 280,
                alternatives: [
                  { item: "Frango ao creme de milho (light)", kcal: 260 },
                  { item: "Frango desfiado com molho branco light", kcal: 250 },
                ],
              },
              {
                item: "80g arroz (cozido)",
                kcal: 80,
                alternatives: [
                  { item: "80g macarrão", kcal: 95 },
                  { item: "100g batata doce", kcal: 90 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Omelete de claras com cogumelos",
                kcal: 180,
                alternatives: [
                  { item: "Omelete de ovos inteiros com cebola", kcal: 210 },
                  { item: "100g frango grelhado", kcal: 165 },
                ],
              },
              {
                item: "Salada Caesar light (porção pequena)",
                kcal: 120,
                alternatives: [
                  { item: "Salada verde com limão", kcal: 40 },
                  { item: "Salada de alface e tomate", kcal: 30 },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // ── DIA 7 ──
  {
    day: 7,
    meals: [
      {
        name: "Café da manhã",
        totalKcal: 340,
        options: [
          {
            items: [
              {
                item: "Waffle fit de aveia (2 un - caseiro)",
                kcal: 260,
                alternatives: [
                  { item: "Panqueca de banana com fubá (2 un)", kcal: 240 },
                  {
                    item: "Tapioca doce com banana (2 unidades pequenas)",
                    kcal: 280,
                  },
                ],
              },
              {
                item: "1 col. pasta de amendoim 15g",
                kcal: 90,
                alternatives: [
                  { item: "1 col. margarina light", kcal: 50 },
                  { item: "1 fatia queijo branco", kcal: 70 },
                ],
              },
              {
                item: "50g morango",
                kcal: 15,
                alternatives: [
                  { item: "50g mamão picado", kcal: 20 },
                  { item: "1/2 banana pequena", kcal: 40 },
                ],
              },
              {
                item: "Café sem açúcar",
                kcal: 5,
                alternatives: [
                  { item: "Chá mate", kcal: 0 },
                  { item: "Chá preto", kcal: 0 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Pão integral com abacate e ovo (1)",
                kcal: 320,
                alternatives: [
                  { item: "Tapioca com abacate e ovo", kcal: 300 },
                  { item: "Pão com margarina e ovo", kcal: 280 },
                ],
              },
              {
                item: "100g melão",
                kcal: 35,
                alternatives: [
                  { item: "100g mamão", kcal: 40 },
                  { item: "1 tangerina", kcal: 40 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Iogurte natural com frutas e 20g aveia",
                kcal: 280,
                alternatives: [
                  { item: "Coalhada com frutas e fubá", kcal: 260 },
                  { item: "Iogurte com banana e aveia", kcal: 290 },
                ],
              },
              {
                item: "1 col. mel",
                kcal: 60,
                alternatives: [
                  { item: "1 col. rapadura", kcal: 60 },
                  { item: "1 banana pequena picada", kcal: 80 },
                ],
              },
              {
                item: "Chá verde",
                kcal: 0,
                alternatives: [
                  { item: "Chá mate", kcal: 0 },
                  { item: "Chá preto", kcal: 0 },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Almoço",
        totalKcal: 510,
        options: [
          {
            items: [
              {
                item: "150g frango empanado fit (aveia)",
                kcal: 300,
                alternatives: [
                  { item: "150g frango grelhado", kcal: 250 },
                  { item: "150g carne moída assada", kcal: 300 },
                ],
              },
              {
                item: "100g arroz (cozido)",
                kcal: 130,
                alternatives: [
                  { item: "100g macarrão", kcal: 120 },
                  { item: "150g batata doce", kcal: 135 },
                ],
              },
              {
                item: "Salada colorida",
                kcal: 30,
                alternatives: [
                  { item: "Couve refogada", kcal: 35 },
                  { item: "Agrião", kcal: 15 },
                ],
              },
              {
                item: "1 col. de azeite",
                kcal: 50,
                alternatives: [
                  { item: "1 col. óleo de soja", kcal: 40 },
                  { item: "1 col. margarina", kcal: 35 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "150g costela desfiada magra (promoção)",
                kcal: 280,
                alternatives: [
                  { item: "160g carne moída", kcal: 320 },
                  { item: "150g frango desfiado", kcal: 250 },
                ],
              },
              {
                item: "100g polenta caseira",
                kcal: 100,
                alternatives: [
                  { item: "100g angu de milho", kcal: 90 },
                  { item: "100g cuscuz de milho", kcal: 110 },
                ],
              },
              {
                item: "Couve refogada",
                kcal: 35,
                alternatives: [
                  { item: "Espinafre refogado", kcal: 40 },
                  { item: "Agrião refogado", kcal: 30 },
                ],
              },
              {
                item: "80g feijão tropeiro fit (versão econômica)",
                kcal: 90,
                alternatives: [
                  { item: "80g feijão carioca", kcal: 85 },
                  { item: "80g lentilha", kcal: 90 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "120g camarão/refeição de peixe econômico",
                kcal: 150,
                alternatives: [
                  { item: "120g frango grelhado", kcal: 200 },
                  { item: "1 lata sardinha", kcal: 140 },
                ],
              },
              {
                item: "100g arroz com brócolis",
                kcal: 160,
                alternatives: [
                  { item: "100g arroz com cenoura", kcal: 140 },
                  { item: "100g macarrão com brócolis", kcal: 150 },
                ],
              },
              {
                item: "Abobrinha grelhada",
                kcal: 30,
                alternatives: [
                  { item: "Berinjela grelhada", kcal: 35 },
                  { item: "Chuchu grelhado", kcal: 25 },
                ],
              },
              {
                item: "Tomate assado",
                kcal: 25,
                alternatives: [
                  { item: "Cenoura assada", kcal: 40 },
                  { item: "Abobrinha assada", kcal: 30 },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Lanche da tarde",
        totalKcal: 170,
        options: [
          {
            items: [
              {
                item: "Smoothie verde (couve + abacaxi + água)",
                kcal: 100,
                alternatives: [
                  { item: "Suco de laranja natural", kcal: 80 },
                  { item: "Vitamina de banana com água", kcal: 120 },
                ],
              },
              {
                item: "2 torradas com cottage",
                kcal: 80,
                alternatives: [
                  { item: "2 torradas com requeijão light", kcal: 90 },
                  { item: "1 pão com queijo branco", kcal: 150 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "1 barrinha de proteína caseira (aveia/banana)",
                kcal: 180,
                alternatives: [
                  { item: "2 bolachas de arroz com pasta amendoim", kcal: 160 },
                  { item: "1 pão de queijo caseiro", kcal: 150 },
                ],
              },
              {
                item: "1 pera",
                kcal: 60,
                alternatives: [
                  { item: "1 maçã", kcal: 60 },
                  { item: "1 banana", kcal: 90 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Bolinho de banana fit (1 un pequeno)",
                kcal: 160,
                alternatives: [
                  { item: "1 fatia bolo de fubá", kcal: 180 },
                  { item: "2 bolachas maizena com banana", kcal: 150 },
                ],
              },
              {
                item: "Chá verde",
                kcal: 0,
                alternatives: [
                  { item: "Chá mate", kcal: 0 },
                  { item: "Chá preto", kcal: 0 },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Jantar",
        totalKcal: 320,
        options: [
          {
            items: [
              {
                item: "Hambúrguer de frango caseiro (150g)",
                kcal: 250,
                alternatives: [
                  { item: "Hambúrguer de carne moída magra", kcal: 280 },
                  { item: "150g frango grelhado temperado", kcal: 250 },
                ],
              },
              {
                item: "Salada de folhas com tomate",
                kcal: 30,
                alternatives: [
                  { item: "Couve refogada", kcal: 35 },
                  { item: "Agrião com tomate", kcal: 25 },
                ],
              },
              {
                item: "1 fatia de pão integral (opcional)",
                kcal: 80,
                alternatives: [
                  { item: "2 torradas", kcal: 70 },
                  { item: "1 pão francês pequeno", kcal: 90 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Bowl de quinoa/cevada com legumes (porção moderada)",
                kcal: 260,
                alternatives: [
                  { item: "Bowl de arroz com legumes", kcal: 240 },
                  { item: "Bowl de feijão tropeiro", kcal: 280 },
                ],
              },
              {
                item: "100g frango desfiado",
                kcal: 165,
                alternatives: [
                  { item: "100g carne moída desfiada", kcal: 185 },
                  { item: "1 lata sardinha desfiada", kcal: 140 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Sopa de legumes com carne (porção)",
                kcal: 220,
                alternatives: [
                  { item: "Sopa de feijão com carne", kcal: 240 },
                  { item: "Caldo de mandioca com frango", kcal: 230 },
                ],
              },
              {
                item: "2 torradas integrais",
                kcal: 100,
                alternatives: [
                  { item: "1 pão francês", kcal: 140 },
                  { item: "1 fatia pão integral", kcal: 80 },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // ── DIA 7 ──
  {
    day: 7,
    meals: [
      {
        name: "Café da manhã",
        totalKcal: 340,
        options: [
          {
            items: [
              {
                item: "Waffle fit de aveia (2 un - caseiro)",
                kcal: 260,
                alternatives: [
                  { item: "Panqueca de banana com fubá (2 un)", kcal: 240 },
                  { item: "Tapioca doce com banana (2 unidades)", kcal: 250 },
                ],
              },
              {
                item: "1 col. pasta de amendoim 15g",
                kcal: 90,
                alternatives: [
                  { item: "1 col. margarina", kcal: 70 },
                  { item: "1 fatia queijo branco", kcal: 70 },
                ],
              },
              {
                item: "50g morango",
                kcal: 15,
                alternatives: [
                  { item: "50g mamão picado", kcal: 20 },
                  { item: "1/2 banana pequena", kcal: 45 },
                ],
              },
              {
                item: "Café sem açúcar",
                kcal: 5,
                alternatives: [
                  { item: "Chá mate", kcal: 0 },
                  { item: "Chá preto", kcal: 0 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Pão integral com abacate e ovo (1)",
                kcal: 320,
                alternatives: [
                  { item: "Tapioca com abacate e ovo", kcal: 300 },
                  { item: "Pão francês com margarina e ovo", kcal: 310 },
                ],
              },
              {
                item: "100g melão",
                kcal: 35,
                alternatives: [
                  { item: "100g mamão", kcal: 40 },
                  { item: "1 tangerina", kcal: 40 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Iogurte natural com frutas e 20g aveia",
                kcal: 280,
                alternatives: [
                  { item: "Coalhada com frutas e fubá", kcal: 260 },
                  { item: "Iogurte com banana e aveia", kcal: 290 },
                ],
              },
              {
                item: "1 col. mel",
                kcal: 60,
                alternatives: [
                  { item: "1 col. rapadura", kcal: 60 },
                  { item: "1 banana pequena picada", kcal: 80 },
                ],
              },
              {
                item: "Chá verde",
                kcal: 0,
                alternatives: [
                  { item: "Chá mate", kcal: 0 },
                  { item: "Chá preto", kcal: 0 },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Almoço",
        totalKcal: 510,
        options: [
          {
            items: [
              {
                item: "150g frango empanado fit (aveia)",
                kcal: 300,
                alternatives: [
                  { item: "150g frango grelhado", kcal: 250 },
                  { item: "150g carne moída assada", kcal: 300 },
                ],
              },
              {
                item: "100g arroz (cozido)",
                kcal: 130,
                alternatives: [
                  { item: "100g macarrão integral", kcal: 120 },
                  { item: "150g batata doce", kcal: 135 },
                ],
              },
              {
                item: "Salada colorida",
                kcal: 30,
                alternatives: [
                  { item: "Couve refogada", kcal: 35 },
                  { item: "Agrião", kcal: 15 },
                ],
              },
              {
                item: "1 col. de azeite",
                kcal: 50,
                alternatives: [
                  { item: "1 col. óleo de soja", kcal: 40 },
                  { item: "1 col. margarina", kcal: 35 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "150g costela desfiada magra (promoção)",
                kcal: 280,
                alternatives: [
                  { item: "160g carne moída", kcal: 320 },
                  { item: "150g frango desfiado", kcal: 250 },
                ],
              },
              {
                item: "100g polenta caseira",
                kcal: 100,
                alternatives: [
                  { item: "100g angu", kcal: 90 },
                  { item: "100g cuscuz", kcal: 110 },
                ],
              },
              {
                item: "Couve refogada",
                kcal: 35,
                alternatives: [
                  { item: "Espinafre refogado", kcal: 40 },
                  { item: "Agrião refogado", kcal: 30 },
                ],
              },
              {
                item: "80g feijão tropeiro fit (versão econômica)",
                kcal: 90,
                alternatives: [
                  { item: "80g feijão carioca", kcal: 85 },
                  { item: "80g lentilha", kcal: 90 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "120g camarão/refeição de peixe econômico",
                kcal: 150,
                alternatives: [
                  { item: "120g frango grelhado", kcal: 200 },
                  { item: "1 lata sardinha", kcal: 140 },
                ],
              },
              {
                item: "100g arroz com brócolis",
                kcal: 160,
                alternatives: [
                  { item: "100g arroz com cenoura", kcal: 140 },
                  { item: "100g macarrão com brócolis", kcal: 150 },
                ],
              },
              {
                item: "Abobrinha grelhada",
                kcal: 30,
                alternatives: [
                  { item: "Berinjela grelhada", kcal: 35 },
                  { item: "Chuchu grelhado", kcal: 25 },
                ],
              },
              {
                item: "Tomate assado",
                kcal: 25,
                alternatives: [
                  { item: "Cenoura assada", kcal: 40 },
                  { item: "Abobrinha assada", kcal: 30 },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Lanche da tarde",
        totalKcal: 170,
        options: [
          {
            items: [
              {
                item: "Brownie fit caseiro (pequeno)",
                kcal: 150,
                alternatives: [
                  { item: "Bolo de banana fit (1 fatia)", kcal: 140 },
                  { item: "Bolo de fubá (1 fatia pequena)", kcal: 180 },
                ],
              },
              {
                item: "Café sem açúcar",
                kcal: 5,
                alternatives: [
                  { item: "Chá mate", kcal: 0 },
                  { item: "Chá preto", kcal: 0 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Vitamina de abacate com aveia (pequena)",
                kcal: 250,
                alternatives: [
                  { item: "Vitamina de banana com aveia", kcal: 220 },
                  { item: "Mamão batido com aveia", kcal: 200 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Mix de castanhas 20g",
                kcal: 120,
                alternatives: [
                  { item: "20g amendoim", kcal: 115 },
                  { item: "15g castanha de caju", kcal: 85 },
                ],
              },
              {
                item: "1 banana prata",
                kcal: 50,
                alternatives: [
                  { item: "1 maçã pequena", kcal: 60 },
                  { item: "1 pera pequena", kcal: 60 },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Jantar",
        totalKcal: 320,
        options: [
          {
            items: [
              {
                item: "Pizza fit de frigideira (2 fatias caseiras)",
                kcal: 300,
                alternatives: [
                  { item: "Tapioca pizza (2 unidades)", kcal: 280 },
                  {
                    item: "Pão sírio aberto com molho e queijo (2 un)",
                    kcal: 320,
                  },
                ],
              },
              {
                item: "Salada de rúcula",
                kcal: 15,
                alternatives: [
                  { item: "Agrião", kcal: 15 },
                  { item: "Alface", kcal: 10 },
                ],
              },
              {
                item: "1 col. de azeite",
                kcal: 40,
                alternatives: [
                  { item: "1 col. óleo de soja", kcal: 40 },
                  { item: "1 col. margarina", kcal: 35 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "Wrap integral de carne (pequeno) com queijo",
                kcal: 320,
                alternatives: [
                  { item: "Tapioca com carne e queijo", kcal: 300 },
                  { item: "2 pães franceses com carne e queijo", kcal: 350 },
                ],
              },
              {
                item: "Salada de pepino e tomate",
                kcal: 20,
                alternatives: [
                  { item: "Salada de alface e tomate", kcal: 25 },
                  { item: "Cenoura ralada com limão", kcal: 40 },
                ],
              },
            ],
          },
          {
            items: [
              {
                item: "120g tilápia ao forno (ou peixe econômico)",
                kcal: 160,
                alternatives: [
                  { item: "120g frango grelhado", kcal: 200 },
                  { item: "1 lata sardinha", kcal: 140 },
                ],
              },
              {
                item: "Legumes grelhados variados",
                kcal: 80,
                alternatives: [
                  { item: "Legumes cozidos", kcal: 60 },
                  { item: "Salada crua grande", kcal: 40 },
                ],
              },
              {
                item: "80g arroz integral/cozido",
                kcal: 80,
                alternatives: [
                  { item: "80g macarrão integral", kcal: 95 },
                  { item: "100g batata doce", kcal: 90 },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
