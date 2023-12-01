// Reto #1 Primer regalor repetido

// ✅ Solución 1 (mí solución, puntaje: 160)
export function findFirstRepeated(gifts: number[]) {
  const newGifts = new Set<number>();

  for (const gift of gifts) {
    if (newGifts.has(gift)) return gift;

    newGifts.add(gift);
  }

  return -1;
}

/** Alternativas que he encontrado 🧐 **/

// 01 🏆 (alternativa con mayor puntaje: 330)
function alternative01(gifts) {
  const repeated = gifts.filter((gift, i) => gifts.indexOf(gift) !== i);
  return repeated.length > 0 ? repeated[0] : -1;
}

// 02
function alternative02(gifts: number[]) {
  return gifts.find((gift, i) => gifts.indexOf(gift) !== i) ?? -1;
}

// 03
function alternative03(gifts: number[]) {
  const newGifts = {};

  for (const gift of gifts) {
    if (newGifts[gift]) {
      return gift;
    }
    newGifts[gift] = 1;
  }
  return -1;
}
