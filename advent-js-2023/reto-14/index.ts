// Reto #14: Evita la alarma

// ✅ Mí solución
// (290 pts) | 🚀 2038 ops/s | 🧐 Complejidad cognitiva: 1
export function maxGifts(houses: number[]) {
  const n = houses.length;
  const maxGiftsArray: number[] = Array.from({ length: n });

  maxGiftsArray[1] = Math.max(houses[0], houses[1]);
  maxGiftsArray[0] = houses[0];

  let i = 1;
  for (const house of houses.slice(2)) {
    maxGiftsArray[++i] = Math.max(
      maxGiftsArray[i - 1],
      maxGiftsArray[i - 2] + house
    );
  }

  return maxGiftsArray[n - 1];
}

/** Alternativas que he encontrado 🥴 **/

// 01 🏆
// (290 pts) | 🚀 2336 ops/s | 🧐 Complejidad cognitiva: 1
function alternative01(houses: number[]) {
  let incluir = 0;
  let excluir = 0;
  let noIncluirAnterior;

  for (let h of houses) {
    noIncluirAnterior = [excluir, incluir][+(incluir > excluir)];

    incluir = excluir + h;
    excluir = noIncluirAnterior;
  }

  return [excluir, incluir][+(incluir > excluir)];
}

// 02
// (290 pts) | 🚀 2136 ops/s | 🧐 Complejidad cognitiva: 1
function alternative02(houses: number[]) {
  const dp = [];

  dp[0] = houses[0];
  dp[1] = Math.max(houses[0], houses[1]);

  let index = 2;

  for (const gifts of houses.slice(2)) {
    dp[index] = Math.max(dp[index - 1], dp[index - 2] + gifts);

    index++;
  }

  return dp[houses.length - 1];
}

// 03
// (80 pts) | 🚀 1758 ops/s | 🧐 Complejidad cognitiva: 8
function alternative03(houses: number[]) {
  let dp = Array(houses.length + 1).fill(-1);
  const sumGifts = (i: number) => {
    if (houses.length <= i) return 0;
    if (dp[i] !== -1) return dp[i];
    dp[i] = Math.max(sumGifts(i + 1), sumGifts(i + 2) + houses[i]);
    return dp[i];
  };
  const gifts = sumGifts(0);
  return gifts;
}
