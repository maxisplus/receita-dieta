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

export const weekMenu: DayMenu[] = [
  // ── DIA 1 ──
  {
    day: 1,
    meals: [
      {
        name: 'Café da manhã',
        totalKcal: 430,
        options: [
          {
            items: [
              { item: '2 ovos mexidos', kcal: 168 },
              { item: '50g de requeijão light', kcal: 130 },
              { item: '1 fatia de pão integral', kcal: 132 },
            ],
          },
          {
            items: [
              { item: '1 iogurte grego natural', kcal: 150 },
              { item: '30g de granola sem açúcar', kcal: 130 },
              { item: '1 banana prata', kcal: 100 },
            ],
          },
          {
            items: [
              { item: 'Tapioca com 1 ovo e queijo branco', kcal: 280 },
              { item: '1 xícara de café sem açúcar', kcal: 5 },
              { item: '5 morangos', kcal: 20 },
            ],
          },
        ],
      },
      {
        name: 'Almoço',
        totalKcal: 540,
        options: [
          {
            items: [
              { item: '150g de frango grelhado', kcal: 250 },
              { item: '100g de arroz integral', kcal: 130 },
              { item: '80g de brócolis refogado', kcal: 30 },
              { item: 'Salada de alface e tomate', kcal: 25 },
            ],
          },
          {
            items: [
              { item: '130g de patinho moído', kcal: 260 },
              { item: '100g de batata doce assada', kcal: 120 },
              { item: 'Couve refogada no alho', kcal: 40 },
              { item: '1 colher de chá de azeite', kcal: 40 },
            ],
          },
          {
            items: [
              { item: '120g de tilápia grelhada', kcal: 160 },
              { item: '100g de quinoa cozida', kcal: 150 },
              { item: 'Abobrinha grelhada', kcal: 30 },
              { item: 'Salada de rúcula com limão', kcal: 20 },
            ],
          },
        ],
      },
      {
        name: 'Lanche da tarde',
        totalKcal: 280,
        options: [
          {
            items: [
              { item: 'Mix de castanhas 30g', kcal: 180 },
              { item: '1 maçã verde', kcal: 80 },
            ],
          },
          {
            items: [
              { item: '1 scoop de whey com água', kcal: 120 },
              { item: '1 banana prata', kcal: 100 },
              { item: '5 amêndoas', kcal: 60 },
            ],
          },
          {
            items: [
              { item: '2 fatias de queijo branco', kcal: 140 },
              { item: '4 torradas integrais', kcal: 120 },
            ],
          },
        ],
      },
      {
        name: 'Jantar',
        totalKcal: 400,
        options: [
          {
            items: [
              { item: 'Omelete de 3 ovos com espinafre', kcal: 280 },
              { item: 'Salada de pepino e tomate', kcal: 30 },
              { item: '1 colher de chá de azeite', kcal: 40 },
            ],
          },
          {
            items: [
              { item: '150g de frango desfiado', kcal: 250 },
              { item: 'Sopa de abóbora com gengibre', kcal: 100 },
              { item: '1 torrada integral', kcal: 50 },
            ],
          },
          {
            items: [
              { item: '120g de peixe assado', kcal: 160 },
              { item: 'Purê de couve-flor', kcal: 80 },
              { item: 'Salada verde com limão', kcal: 20 },
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
        name: 'Café da manhã',
        totalKcal: 410,
        options: [
          {
            items: [
              { item: 'Panqueca de banana com aveia (2 un)', kcal: 220 },
              { item: '1 colher de pasta de amendoim', kcal: 100 },
              { item: 'Canela a gosto', kcal: 5 },
            ],
          },
          {
            items: [
              { item: 'Pão integral com ovo cozido', kcal: 230 },
              { item: '1 fatia de queijo branco', kcal: 70 },
              { item: '1 xícara de chá verde', kcal: 5 },
            ],
          },
          {
            items: [
              { item: 'Mingau de aveia 50g com água', kcal: 200 },
              { item: '1 colher de chia', kcal: 60 },
              { item: '100g de mamão', kcal: 40 },
            ],
          },
        ],
      },
      {
        name: 'Almoço',
        totalKcal: 580,
        options: [
          {
            items: [
              { item: '150g de carne moída refogada', kcal: 280 },
              { item: '100g de arroz integral', kcal: 130 },
              { item: '80g de feijão carioca', kcal: 75 },
              { item: 'Salada de repolho com cenoura', kcal: 30 },
            ],
          },
          {
            items: [
              { item: '130g de sobrecoxa sem pele', kcal: 250 },
              { item: '150g de mandioca cozida', kcal: 200 },
              { item: 'Vagem refogada', kcal: 30 },
            ],
          },
          {
            items: [
              { item: '140g de salmão grelhado', kcal: 290 },
              { item: '100g de arroz 7 grãos', kcal: 140 },
              { item: 'Espinafre refogado', kcal: 30 },
              { item: '1 colher de chá de azeite', kcal: 40 },
            ],
          },
        ],
      },
      {
        name: 'Lanche da tarde',
        totalKcal: 260,
        options: [
          {
            items: [
              { item: 'Iogurte natural desnatado 170g', kcal: 90 },
              { item: '1 colher de mel', kcal: 60 },
              { item: '20g de granola', kcal: 85 },
            ],
          },
          {
            items: [
              { item: '1 fatia de bolo de aveia fit', kcal: 150 },
              { item: '1 xícara de café sem açúcar', kcal: 5 },
            ],
          },
          {
            items: [
              { item: '2 ovos cozidos', kcal: 168 },
              { item: '1 pera', kcal: 60 },
            ],
          },
        ],
      },
      {
        name: 'Jantar',
        totalKcal: 380,
        options: [
          {
            items: [
              { item: 'Wrap integral com frango e alface', kcal: 300 },
              { item: 'Tomate picado com orégano', kcal: 20 },
            ],
          },
          {
            items: [
              { item: 'Salada completa com atum 100g', kcal: 250 },
              { item: '1 colher de sopa de azeite', kcal: 90 },
              { item: 'Pepino e cenoura ralada', kcal: 25 },
            ],
          },
          {
            items: [
              { item: 'Sopa de lentilha com legumes', kcal: 200 },
              { item: '1 fatia de pão integral', kcal: 132 },
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
        name: 'Café da manhã',
        totalKcal: 420,
        options: [
          {
            items: [
              { item: 'Crepioca (1 ovo + 2 col. tapioca)', kcal: 200 },
              { item: '30g de requeijão light', kcal: 80 },
              { item: '1 banana prata', kcal: 100 },
            ],
          },
          {
            items: [
              { item: 'Smoothie de morango com whey', kcal: 200 },
              { item: '2 torradas integrais', kcal: 100 },
              { item: '20g de cream cheese light', kcal: 50 },
            ],
          },
          {
            items: [
              { item: '2 ovos cozidos', kcal: 168 },
              { item: '1 fatia de pão integral', kcal: 132 },
              { item: '100g de melão', kcal: 35 },
            ],
          },
        ],
      },
      {
        name: 'Almoço',
        totalKcal: 560,
        options: [
          {
            items: [
              { item: '150g de peito de frango grelhado', kcal: 250 },
              { item: '100g de arroz integral', kcal: 130 },
              { item: 'Berinjela assada', kcal: 35 },
              { item: 'Salada de agrião', kcal: 15 },
            ],
          },
          {
            items: [
              { item: '150g de lagarto grelhado', kcal: 280 },
              { item: '100g de purê de batata doce', kcal: 120 },
              { item: 'Cenoura cozida', kcal: 30 },
              { item: 'Molho de tomate caseiro', kcal: 25 },
            ],
          },
          {
            items: [
              { item: '120g de peixe grelhado', kcal: 160 },
              { item: '100g de lentilha cozida', kcal: 120 },
              { item: 'Chuchu refogado', kcal: 25 },
              { item: '1 colher de chá de azeite', kcal: 40 },
            ],
          },
        ],
      },
      {
        name: 'Lanche da tarde',
        totalKcal: 250,
        options: [
          {
            items: [
              { item: '1 scoop de whey com água', kcal: 120 },
              { item: '1 maçã', kcal: 80 },
            ],
          },
          {
            items: [
              { item: 'Pasta de amendoim 20g', kcal: 120 },
              { item: '2 torradas integrais', kcal: 100 },
            ],
          },
          {
            items: [
              { item: 'Cottage 100g', kcal: 100 },
              { item: '5 morangos', kcal: 20 },
              { item: '10g de granola', kcal: 45 },
            ],
          },
        ],
      },
      {
        name: 'Jantar',
        totalKcal: 390,
        options: [
          {
            items: [
              { item: 'Escondidinho fit de frango', kcal: 300 },
              { item: 'Salada de tomate com cebola', kcal: 30 },
            ],
          },
          {
            items: [
              { item: 'Omelete de 2 ovos com tomate seco', kcal: 240 },
              { item: '1 fatia de pão integral', kcal: 132 },
            ],
          },
          {
            items: [
              { item: 'Panqueca de frango com aveia (2 un)', kcal: 280 },
              { item: 'Salada verde', kcal: 20 },
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
        name: 'Café da manhã',
        totalKcal: 400,
        options: [
          {
            items: [
              { item: 'Overnight oats (aveia + iogurte)', kcal: 250 },
              { item: '50g de frutas vermelhas', kcal: 25 },
              { item: '1 col. de chia', kcal: 60 },
            ],
          },
          {
            items: [
              { item: 'Tapioca com queijo branco e orégano', kcal: 250 },
              { item: '1 xícara de café sem açúcar', kcal: 5 },
              { item: '1 kiwi', kcal: 40 },
            ],
          },
          {
            items: [
              { item: '2 ovos mexidos com tomate', kcal: 190 },
              { item: '1 fatia de pão integral', kcal: 132 },
              { item: '100g de mamão', kcal: 40 },
            ],
          },
        ],
      },
      {
        name: 'Almoço',
        totalKcal: 550,
        options: [
          {
            items: [
              { item: '150g de filé de frango ao molho mostarda', kcal: 270 },
              { item: '100g de arroz integral', kcal: 130 },
              { item: 'Brócolis e couve-flor no vapor', kcal: 40 },
              { item: '1 colher de chá de azeite', kcal: 40 },
            ],
          },
          {
            items: [
              { item: '150g de coxão mole grelhado', kcal: 300 },
              { item: '100g de macarrão integral', kcal: 140 },
              { item: 'Molho de tomate natural', kcal: 30 },
            ],
          },
          {
            items: [
              { item: '130g de pernil suíno magro', kcal: 250 },
              { item: '100g de batata doce assada', kcal: 120 },
              { item: 'Salada de beterraba ralada', kcal: 35 },
              { item: 'Alface e rúcula', kcal: 15 },
            ],
          },
        ],
      },
      {
        name: 'Lanche da tarde',
        totalKcal: 270,
        options: [
          {
            items: [
              { item: 'Banana amassada com aveia e canela', kcal: 200 },
              { item: '5 castanhas de caju', kcal: 60 },
            ],
          },
          {
            items: [
              { item: 'Iogurte grego light 150g', kcal: 100 },
              { item: '1 col. de mel', kcal: 60 },
              { item: '10g de nibs de cacau', kcal: 50 },
            ],
          },
          {
            items: [
              { item: '1 scoop de whey', kcal: 120 },
              { item: 'Pasta de amendoim 15g', kcal: 90 },
            ],
          },
        ],
      },
      {
        name: 'Jantar',
        totalKcal: 370,
        options: [
          {
            items: [
              { item: '120g de frango ao curry light', kcal: 220 },
              { item: 'Abobrinha refogada', kcal: 30 },
              { item: '100g de arroz integral', kcal: 130 },
            ],
          },
          {
            items: [
              { item: 'Sopa de frango com legumes', kcal: 200 },
              { item: '1 fatia de pão integral', kcal: 132 },
            ],
          },
          {
            items: [
              { item: 'Salada de grão de bico com atum', kcal: 280 },
              { item: '1 colher de chá de azeite', kcal: 40 },
              { item: 'Rúcula e tomate cereja', kcal: 20 },
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
        name: 'Café da manhã',
        totalKcal: 440,
        options: [
          {
            items: [
              { item: '2 ovos pochê', kcal: 168 },
              { item: '1 fatia de pão integral com abacate', kcal: 230 },
              { item: '1 xícara de chá verde', kcal: 5 },
            ],
          },
          {
            items: [
              { item: 'Vitamina de banana com whey e aveia', kcal: 320 },
              { item: '5 castanhas do Pará', kcal: 100 },
            ],
          },
          {
            items: [
              { item: 'Crepioca com queijo e orégano', kcal: 280 },
              { item: '100g de melancia', kcal: 30 },
              { item: '1 xícara de café sem açúcar', kcal: 5 },
            ],
          },
        ],
      },
      {
        name: 'Almoço',
        totalKcal: 570,
        options: [
          {
            items: [
              { item: '150g de filé mignon grelhado', kcal: 300 },
              { item: '100g de arroz integral', kcal: 130 },
              { item: 'Espinafre refogado no alho', kcal: 40 },
              { item: 'Tomate assado', kcal: 25 },
            ],
          },
          {
            items: [
              { item: '150g de coxa de frango assada', kcal: 280 },
              { item: '150g de purê de abóbora', kcal: 80 },
              { item: '80g de feijão preto', kcal: 90 },
              { item: 'Salada de alface com pepino', kcal: 15 },
            ],
          },
          {
            items: [
              { item: '130g de atum fresco grelhado', kcal: 240 },
              { item: '100g de arroz 7 grãos', kcal: 140 },
              { item: 'Aspargos grelhados', kcal: 30 },
              { item: '1 colher de chá de azeite', kcal: 40 },
            ],
          },
        ],
      },
      {
        name: 'Lanche da tarde',
        totalKcal: 240,
        options: [
          {
            items: [
              { item: 'Mix de oleaginosas 25g', kcal: 160 },
              { item: '1 pera', kcal: 60 },
            ],
          },
          {
            items: [
              { item: 'Queijo cottage 100g', kcal: 100 },
              { item: '2 torradas integrais', kcal: 100 },
              { item: 'Tomate cereja', kcal: 15 },
            ],
          },
          {
            items: [
              { item: '1 scoop de whey com água', kcal: 120 },
              { item: '1 maçã verde', kcal: 80 },
            ],
          },
        ],
      },
      {
        name: 'Jantar',
        totalKcal: 380,
        options: [
          {
            items: [
              { item: '150g de peixe assado com ervas', kcal: 200 },
              { item: 'Legumes assados (abobrinha + berinjela)', kcal: 60 },
              { item: '1 batata pequena assada', kcal: 80 },
            ],
          },
          {
            items: [
              { item: 'Strogonoff de frango fit', kcal: 280 },
              { item: '80g de arroz integral', kcal: 100 },
            ],
          },
          {
            items: [
              { item: 'Omelete de claras com cogumelos', kcal: 180 },
              { item: 'Salada Caesar light', kcal: 120 },
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
        name: 'Café da manhã',
        totalKcal: 430,
        options: [
          {
            items: [
              { item: 'Panqueca de aveia com banana (3 un)', kcal: 300 },
              { item: 'Canela e mel 1 col.', kcal: 70 },
              { item: '1 xícara de café sem açúcar', kcal: 5 },
            ],
          },
          {
            items: [
              { item: '1 pão francês integral', kcal: 170 },
              { item: '2 ovos mexidos', kcal: 168 },
              { item: '100g de mamão', kcal: 40 },
            ],
          },
          {
            items: [
              { item: 'Açaí fit 200ml (sem xarope)', kcal: 250 },
              { item: '1 col. de granola sem açúcar', kcal: 65 },
              { item: '1 banana picada', kcal: 100 },
            ],
          },
        ],
      },
      {
        name: 'Almoço',
        totalKcal: 560,
        options: [
          {
            items: [
              { item: '150g de frango ao limão', kcal: 260 },
              { item: '100g de macarrão integral', kcal: 140 },
              { item: 'Brócolis no vapor', kcal: 30 },
              { item: 'Cenoura ralada', kcal: 20 },
            ],
          },
          {
            items: [
              { item: '150g de alcatra grelhada', kcal: 300 },
              { item: '80g de arroz integral', kcal: 100 },
              { item: '80g de feijão', kcal: 75 },
              { item: 'Salada mista', kcal: 25 },
            ],
          },
          {
            items: [
              { item: '130g de salmão ao forno', kcal: 270 },
              { item: '100g de batata doce', kcal: 120 },
              { item: 'Espinafre com alho', kcal: 35 },
              { item: '1 col. de azeite', kcal: 40 },
            ],
          },
        ],
      },
      {
        name: 'Lanche da tarde',
        totalKcal: 260,
        options: [
          {
            items: [
              { item: 'Smoothie verde (couve + abacaxi + gengibre)', kcal: 100 },
              { item: '2 torradas com cottage', kcal: 160 },
            ],
          },
          {
            items: [
              { item: '1 barrinha de proteína', kcal: 180 },
              { item: '1 pera', kcal: 60 },
            ],
          },
          {
            items: [
              { item: 'Bolinho de banana fit (2 un)', kcal: 160 },
              { item: '1 xícara de chá verde', kcal: 5 },
            ],
          },
        ],
      },
      {
        name: 'Jantar',
        totalKcal: 390,
        options: [
          {
            items: [
              { item: 'Hambúrguer de frango caseiro 150g', kcal: 250 },
              { item: 'Salada de folhas com tomate', kcal: 30 },
              { item: '1 fatia de pão integral', kcal: 132 },
            ],
          },
          {
            items: [
              { item: 'Bowl de quinoa com legumes', kcal: 250 },
              { item: '100g de frango desfiado', kcal: 165 },
            ],
          },
          {
            items: [
              { item: 'Sopa de legumes com carne', kcal: 220 },
              { item: '2 torradas integrais', kcal: 100 },
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
        name: 'Café da manhã',
        totalKcal: 450,
        options: [
          {
            items: [
              { item: 'Waffle fit de aveia (2 un)', kcal: 260 },
              { item: 'Pasta de amendoim 15g', kcal: 90 },
              { item: '50g de morango', kcal: 15 },
              { item: '1 xícara de café', kcal: 5 },
            ],
          },
          {
            items: [
              { item: 'Pão integral com abacate e ovo', kcal: 320 },
              { item: '100g de melão', kcal: 35 },
            ],
          },
          {
            items: [
              { item: 'Iogurte grego com frutas e granola', kcal: 280 },
              { item: '1 col. de mel', kcal: 60 },
              { item: '1 xícara de chá verde', kcal: 5 },
            ],
          },
        ],
      },
      {
        name: 'Almoço',
        totalKcal: 550,
        options: [
          {
            items: [
              { item: '150g de frango empanado fit (aveia)', kcal: 300 },
              { item: '100g de arroz integral', kcal: 130 },
              { item: 'Salada colorida', kcal: 30 },
              { item: '1 col. de azeite', kcal: 40 },
            ],
          },
          {
            items: [
              { item: '150g de costela desfiada magra', kcal: 280 },
              { item: '100g de polenta fit', kcal: 100 },
              { item: 'Couve refogada', kcal: 35 },
              { item: '80g de feijão tropeiro fit', kcal: 90 },
            ],
          },
          {
            items: [
              { item: '120g de camarão refogado', kcal: 150 },
              { item: '100g de arroz com brócolis', kcal: 160 },
              { item: 'Abobrinha grelhada', kcal: 30 },
              { item: 'Tomate assado com orégano', kcal: 25 },
            ],
          },
        ],
      },
      {
        name: 'Lanche da tarde',
        totalKcal: 250,
        options: [
          {
            items: [
              { item: 'Brownie fit de chocolate (1 pedaço)', kcal: 150 },
              { item: '1 xícara de café sem açúcar', kcal: 5 },
            ],
          },
          {
            items: [
              { item: 'Vitamina de abacate com whey', kcal: 250 },
            ],
          },
          {
            items: [
              { item: 'Mix de castanhas 20g', kcal: 120 },
              { item: '1 banana prata', kcal: 100 },
            ],
          },
        ],
      },
      {
        name: 'Jantar',
        totalKcal: 400,
        options: [
          {
            items: [
              { item: 'Pizza fit de frigideira (2 fatias)', kcal: 300 },
              { item: 'Salada de rúcula', kcal: 15 },
              { item: '1 col. de azeite', kcal: 40 },
            ],
          },
          {
            items: [
              { item: 'Wrap integral de carne com queijo', kcal: 320 },
              { item: 'Salada de pepino e tomate', kcal: 30 },
            ],
          },
          {
            items: [
              { item: '120g de tilápia ao forno', kcal: 160 },
              { item: 'Legumes grelhados variados', kcal: 80 },
              { item: '80g de arroz integral', kcal: 100 },
            ],
          },
        ],
      },
    ],
  },
];
