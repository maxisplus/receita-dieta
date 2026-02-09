export interface MenuItem {
  item: string;
  kcal: number;
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

export const weekMenuEconomico: DayMenu[] = [
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
              { item: "2 ovos mexidos", kcal: 168 },
              { item: "Tapioca pequena (30g de goma)", kcal: 100 },
              { item: "1 banana prata", kcal: 52 },
            ],
          },
          {
            items: [
              { item: "Mingau de aveia 50g (água)", kcal: 200 },
              { item: "1 col. de chia", kcal: 60 },
              { item: "1 maçã pequena", kcal: 60 },
            ],
          },
          {
            items: [
              { item: "1 fatia de pão integral", kcal: 80 },
              { item: "2 ovos cozidos", kcal: 156 },
              { item: "1 colher de requeijão light", kcal: 60 },
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
              { item: "100g arroz (cozido)", kcal: 130 },
              { item: "100g feijão cozido", kcal: 80 },
              { item: "150g coxa de frango sem pele (assada)", kcal: 220 },
              { item: "Salada (alface/tomate)", kcal: 15 },
              { item: "1 colher de chá de azeite", kcal: 40 },
            ],
          },
          {
            items: [
              { item: "120g carne moída magra (refogada)", kcal: 260 },
              { item: "150g mandioca cozida", kcal: 200 },
              { item: "Legumes cozidos (cenoura/vagem)", kcal: 30 },
            ],
          },
          {
            items: [
              { item: "1 lata de atum em água (100g)", kcal: 120 },
              { item: "100g arroz (cozido)", kcal: 130 },
              { item: "150g batata doce cozida", kcal: 150 },
              { item: "Salada simples (limão)", kcal: 20 },
              { item: "1 col. de azeite", kcal: 65 },
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
              { item: "Iogurte natural 170g", kcal: 90 },
              { item: "1 col. de aveia", kcal: 30 },
              { item: "1 maçã pequena", kcal: 60 },
            ],
          },
          {
            items: [
              { item: "1 ovo cozido", kcal: 78 },
              { item: "1 pera pequena", kcal: 60 },
              { item: "10g castanhas (mix)", kcal: 45 },
            ],
          },
          {
            items: [
              { item: "1 fatia de pão integral", kcal: 80 },
              { item: "1 col. de pasta de amendoim", kcal: 90 },
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
              { item: "Sopa de lentilha com legumes (porção)", kcal: 200 },
              { item: "1 fatia de pão integral", kcal: 80 },
              { item: "Salada de folhas", kcal: 20 },
            ],
          },
          {
            items: [
              { item: "Omelete de 2 ovos com espinafre", kcal: 180 },
              { item: "1 tapioca pequena (30g)", kcal: 100 },
              { item: "Tomate temperado", kcal: 40 },
            ],
          },
          {
            items: [
              { item: "Frango desfiado 120g", kcal: 200 },
              { item: "Legumes assados (abobrinha/berinjela) 100g", kcal: 80 },
              { item: "Salada verde", kcal: 40 },
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
              { item: "Panqueca de aveia e banana (2 un)", kcal: 220 },
              { item: "Canela a gosto", kcal: 0 },
              { item: "1 xícara de café sem açúcar", kcal: 5 },
            ],
          },
          {
            items: [
              { item: "Pão integral com ovo cozido", kcal: 230 },
              { item: "1 fatia de queijo branco (pequena)", kcal: 70 },
              { item: "1 xícara de chá", kcal: 5 },
            ],
          },
          {
            items: [
              { item: "Mingau de aveia 40g (água)", kcal: 160 },
              { item: "1 col. de chia", kcal: 60 },
              { item: "100g mamão", kcal: 40 },
              { item: "Canela", kcal: 0 },
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
              { item: "130g carne moída (cozida)", kcal: 260 },
              { item: "100g arroz (cozido)", kcal: 130 },
              { item: "80g feijão", kcal: 75 },
              { item: "Salada cru", kcal: 20 },
            ],
          },
          {
            items: [
              { item: "150g sobrecoxa de frango sem pele (assada)", kcal: 250 },
              { item: "150g mandioca cozida", kcal: 200 },
              { item: "Legumes verdes (vagem)", kcal: 30 },
            ],
          },
          {
            items: [
              { item: "120g sardinha (lata em água)", kcal: 160 },
              { item: "100g arroz (cozido)", kcal: 130 },
              { item: "Espinafre refogado (pequeno)", kcal: 30 },
              { item: "1 col. de azeite", kcal: 80 },
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
              { item: "Iogurte natural 120g", kcal: 60 },
              { item: "1 col. mel", kcal: 60 },
              { item: "20g de aveia/granola caseira", kcal: 50 },
            ],
          },
          {
            items: [
              { item: "1 fatia de bolo de aveia pequeno (caseiro)", kcal: 150 },
              { item: "Café sem açúcar", kcal: 5 },
            ],
          },
          {
            items: [
              { item: "2 ovos cozidos", kcal: 156 },
              { item: "1 fruta (pera/maçã)", kcal: 60 },
            ],
          },
        ],
      },
      {
        name: "Jantar",
        totalKcal: 330,
        options: [
          {
            items: [
              {
                item: "Wrap simples com frango desfiado (tortilla caseira)",
                kcal: 300,
              },
              { item: "Tomate temperado", kcal: 20 },
            ],
          },
          {
            items: [
              { item: "Salada grande com atum enlatado (100g)", kcal: 250 },
              { item: "1 col. de azeite", kcal: 80 },
              { item: "Pepino e cenoura", kcal: 20 },
            ],
          },
          {
            items: [
              { item: "Sopa de lentilha com legumes", kcal: 200 },
              { item: "1 fatia de pão integral", kcal: 80 },
              { item: "Salada pequena", kcal: 20 },
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
              { item: "Crepioca (1 ovo + 2 col. tapioca)", kcal: 200 },
              { item: "30g requeijão light", kcal: 60 },
              { item: "1 banana prata", kcal: 60 },
            ],
          },
          {
            items: [
              { item: "Smoothie de frutas com aveia (sem whey)", kcal: 200 },
              { item: "2 torradas integrais", kcal: 100 },
              { item: "1 fruta pequena", kcal: 20 },
            ],
          },
          {
            items: [
              { item: "2 ovos cozidos", kcal: 156 },
              { item: "1 fatia de pão integral", kcal: 80 },
              { item: "100g melão", kcal: 35 },
              { item: "Canela", kcal: 0 },
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
              { item: "150g peito de frango grelhado", kcal: 250 },
              { item: "100g arroz (cozido)", kcal: 130 },
              { item: "Berinjela assada", kcal: 35 },
              { item: "Salada (agrião)", kcal: 15 },
              { item: "1 col. de azeite", kcal: 70 },
            ],
          },
          {
            items: [
              { item: "150g lagarto ou carne magra (grelhada)", kcal: 280 },
              { item: "100g purê de batata doce", kcal: 120 },
              { item: "Cenoura cozida", kcal: 30 },
              { item: "Molho de tomate caseiro", kcal: 25 },
            ],
          },
          {
            items: [
              { item: "120g peixe assado (peixe branco)", kcal: 160 },
              { item: "100g lentilha cozida", kcal: 120 },
              { item: "Chuchu refogado", kcal: 25 },
              { item: "1 col. de azeite", kcal: 80 },
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
              { item: "1 copo leite desnatado ou iogurte", kcal: 90 },
              { item: "1 maçã", kcal: 80 },
            ],
          },
          {
            items: [
              { item: "Pasta de amendoim 15g", kcal: 90 },
              { item: "2 torradas integrais", kcal: 100 },
            ],
          },
          {
            items: [
              { item: "Cottage 80-100g", kcal: 90 },
              { item: "5 morangos", kcal: 20 },
              { item: "10g de aveia", kcal: 45 },
            ],
          },
        ],
      },
      {
        name: "Jantar",
        totalKcal: 330,
        options: [
          {
            items: [
              { item: "Escondidinho de frango light (batata doce)", kcal: 300 },
              { item: "Salada de tomate", kcal: 30 },
            ],
          },
          {
            items: [
              { item: "Omelete 2 ovos com tomate", kcal: 180 },
              { item: "1 fatia de pão integral", kcal: 80 },
              { item: "Salada pequena", kcal: 20 },
            ],
          },
          {
            items: [
              {
                item: "Panqueca de aveia (2 un) com frango desfiado",
                kcal: 260,
              },
              { item: "Salada verde", kcal: 20 },
              { item: "1 fruta pequena", kcal: 30 },
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
              },
              { item: "Frutas da estação 50g", kcal: 25 },
              { item: "1 col. chia", kcal: 25 },
            ],
          },
          {
            items: [
              { item: "Tapioca com queijo branco (pequena)", kcal: 250 },
              { item: "Café sem açúcar", kcal: 5 },
              { item: "1 kiwi pequeno", kcal: 40 },
            ],
          },
          {
            items: [
              { item: "2 ovos mexidos com tomate", kcal: 156 },
              { item: "1 fatia de pão integral", kcal: 80 },
              { item: "100g mamão", kcal: 40 },
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
              { item: "150g filé de frango ao molho simples", kcal: 270 },
              { item: "100g arroz (cozido)", kcal: 130 },
              { item: "Brócolis e couve-flor congelados", kcal: 40 },
              { item: "1 col. de azeite", kcal: 70 },
            ],
          },
          {
            items: [
              { item: "150g coxão mole (ou assado econômico)", kcal: 300 },
              { item: "100g macarrão integral (cozido)", kcal: 140 },
              { item: "Molho de tomate caseiro", kcal: 30 },
            ],
          },
          {
            items: [
              { item: "130g pernil magro assado", kcal: 250 },
              { item: "100g batata doce assada", kcal: 120 },
              { item: "Salada de beterraba ralada", kcal: 35 },
              { item: "Folhas verdes", kcal: 15 },
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
              },
              { item: "5 castanhas de caju", kcal: 60 },
            ],
          },
          {
            items: [
              { item: "Iogurte grego light 120g", kcal: 80 },
              { item: "1 col. mel", kcal: 60 },
              { item: "10g nibs de cacau (opcional)", kcal: 50 },
            ],
          },
          {
            items: [
              { item: "1 ovo mexido", kcal: 78 },
              { item: "2 torradas integrais", kcal: 100 },
              { item: "1 fruta pequena", kcal: 20 },
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
              { item: "Frango ao curry simples 120g", kcal: 220 },
              { item: "Abobrinha refogada", kcal: 30 },
              { item: "50g arroz (cozido)", kcal: 65 },
            ],
          },
          {
            items: [
              { item: "Sopa de frango com legumes (porção)", kcal: 200 },
              { item: "1 fatia de pão integral", kcal: 80 },
              { item: "Salada pequena", kcal: 20 },
            ],
          },
          {
            items: [
              {
                item: "Salada de grão-de-bico com sardinha (porção)",
                kcal: 280,
              },
              { item: "1 col. de azeite", kcal: 40 },
              { item: "Folhas e tomate cereja", kcal: 20 },
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
              { item: "2 ovos pochê", kcal: 156 },
              {
                item: "1 fatia de pão integral com abacate (pequena)",
                kcal: 160,
              },
              { item: "Chá verde", kcal: 5 },
            ],
          },
          {
            items: [
              { item: "Vitamina de banana com aveia (sem whey)", kcal: 250 },
              { item: "5 castanhas do Pará ( pequenas )", kcal: 80 },
            ],
          },
          {
            items: [
              { item: "Crepioca com queijo branco", kcal: 280 },
              { item: "100g melancia", kcal: 30 },
              { item: "Café sem açúcar", kcal: 5 },
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
              },
              { item: "100g arroz (cozido)", kcal: 130 },
              { item: "Espinafre refogado", kcal: 40 },
              { item: "Tomate assado", kcal: 25 },
            ],
          },
          {
            items: [
              { item: "150g coxa de frango assada", kcal: 280 },
              { item: "150g purê de abóbora", kcal: 80 },
              { item: "80g feijão preto", kcal: 90 },
              { item: "Salada simples", kcal: 15 },
            ],
          },
          {
            items: [
              {
                item: "130g atum fresco ou enlatado (quando fresco for caro, usar enlatado)",
                kcal: 240,
              },
              { item: "100g arroz 7 grãos (ou mix arroz)", kcal: 140 },
              { item: "Aspargos/legume econômico", kcal: 30 },
              { item: "1 col. de azeite", kcal: 40 },
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
              { item: "Mix de oleaginosas 20g", kcal: 140 },
              { item: "1 pera pequena", kcal: 60 },
            ],
          },
          {
            items: [
              { item: "Queijo cottage 100g", kcal: 100 },
              { item: "2 torradas integrais", kcal: 100 },
              { item: "Tomate cereja (pequeno)", kcal: 10 },
            ],
          },
          {
            items: [
              { item: "1 copo iogurte natural", kcal: 90 },
              { item: "1 maçã verde", kcal: 80 },
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
              },
              { item: "Legumes assados (abobrinha + berinjela)", kcal: 60 },
              { item: "1 batata pequena assada", kcal: 60 },
            ],
          },
          {
            items: [
              { item: "Strogonoff de frango fit (porção pequena)", kcal: 280 },
              { item: "80g arroz (cozido)", kcal: 80 },
            ],
          },
          {
            items: [
              { item: "Omelete de claras com cogumelos", kcal: 180 },
              { item: "Salada Caesar light (porção pequena)", kcal: 120 },
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
              { item: "Panqueca de aveia com banana (2-3 un)", kcal: 300 },
              { item: "Canela e 1 col. mel (pequena)", kcal: 30 },
              { item: "Café sem açúcar", kcal: 5 },
            ],
          },
          {
            items: [
              { item: "1 pão francês integral", kcal: 170 },
              { item: "2 ovos mexidos", kcal: 156 },
              { item: "100g mamão", kcal: 40 },
            ],
          },
          {
            items: [
              {
                item: "Açaí fit 150-200ml (sem xarope) - versão econômica",
                kcal: 250,
              },
              { item: "1 col. granola caseira 15g", kcal: 65 },
              { item: "1 banana pequena", kcal: 50 },
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
              { item: "150g frango ao limão (asse/grelhado)", kcal: 260 },
              { item: "100g macarrão integral (cozido)", kcal: 140 },
              { item: "Brócolis no vapor", kcal: 30 },
              { item: "Cenoura ralada", kcal: 20 },
            ],
          },
          {
            items: [
              { item: "150g alcatra grelhada (promoção)", kcal: 300 },
              { item: "80g arroz (cozido)", kcal: 100 },
              { item: "80g feijão", kcal: 75 },
              { item: "Salada mista", kcal: 25 },
            ],
          },
          {
            items: [
              {
                item: "130g salmão ou sardinha (quando salmão caro, trocar por sardinha)",
                kcal: 200,
              },
              { item: "100g batata doce", kcal: 120 },
              { item: "Espinafre com alho", kcal: 35 },
              { item: "1 col. de azeite", kcal: 40 },
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
              { item: "Smoothie verde (couve + abacaxi + água)", kcal: 100 },
              { item: "2 torradas com cottage", kcal: 80 },
            ],
          },
          {
            items: [
              {
                item: "1 barrinha de proteína caseira (aveia/banana)",
                kcal: 180,
              },
              { item: "1 pera", kcal: 60 },
            ],
          },
          {
            items: [
              { item: "Bolinho de banana fit (1 un pequeno)", kcal: 160 },
              { item: "Chá verde", kcal: 0 },
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
              { item: "Hambúrguer de frango caseiro (150g)", kcal: 250 },
              { item: "Salada de folhas com tomate", kcal: 30 },
              { item: "1 fatia de pão integral (opcional)", kcal: 80 },
            ],
          },
          {
            items: [
              {
                item: "Bowl de quinoa/cevada com legumes (porção moderada)",
                kcal: 260,
              },
              { item: "100g frango desfiado", kcal: 165 },
            ],
          },
          {
            items: [
              { item: "Sopa de legumes com carne (porção)", kcal: 220 },
              { item: "2 torradas integrais", kcal: 100 },
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
              { item: "Waffle fit de aveia (2 un - caseiro)", kcal: 260 },
              { item: "1 col. pasta de amendoim 15g", kcal: 90 },
              { item: "50g morango", kcal: 15 },
              { item: "Café sem açúcar", kcal: 5 },
            ],
          },
          {
            items: [
              { item: "Pão integral com abacate e ovo (1)", kcal: 320 },
              { item: "100g melão", kcal: 35 },
            ],
          },
          {
            items: [
              { item: "Iogurte natural com frutas e 20g aveia", kcal: 280 },
              { item: "1 col. mel", kcal: 60 },
              { item: "Chá verde", kcal: 0 },
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
              { item: "150g frango empanado fit (aveia)", kcal: 300 },
              { item: "100g arroz (cozido)", kcal: 130 },
              { item: "Salada colorida", kcal: 30 },
              { item: "1 col. de azeite", kcal: 50 },
            ],
          },
          {
            items: [
              { item: "150g costela desfiada magra (promoção)", kcal: 280 },
              { item: "100g polenta caseira", kcal: 100 },
              { item: "Couve refogada", kcal: 35 },
              { item: "80g feijão tropeiro fit (versão econômica)", kcal: 90 },
            ],
          },
          {
            items: [
              { item: "120g camarão/refeição de peixe econômico", kcal: 150 },
              { item: "100g arroz com brócolis", kcal: 160 },
              { item: "Abobrinha grelhada", kcal: 30 },
              { item: "Tomate assado", kcal: 25 },
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
              { item: "Brownie fit caseiro (pequeno)", kcal: 150 },
              { item: "Café sem açúcar", kcal: 5 },
            ],
          },
          {
            items: [
              { item: "Vitamina de abacate com aveia (pequena)", kcal: 250 },
            ],
          },
          {
            items: [
              { item: "Mix de castanhas 20g", kcal: 120 },
              { item: "1 banana prata", kcal: 50 },
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
              },
              { item: "Salada de rúcula", kcal: 15 },
              { item: "1 col. de azeite", kcal: 40 },
            ],
          },
          {
            items: [
              {
                item: "Wrap integral de carne (pequeno) com queijo",
                kcal: 320,
              },
              { item: "Salada de pepino e tomate", kcal: 20 },
            ],
          },
          {
            items: [
              { item: "120g tilápia ao forno (ou peixe econômico)", kcal: 160 },
              { item: "Legumes grelhados variados", kcal: 80 },
              { item: "80g arroz integral/cozido", kcal: 80 },
            ],
          },
        ],
      },
    ],
  },
];
