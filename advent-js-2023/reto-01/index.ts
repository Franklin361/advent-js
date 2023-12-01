// Reto #1 Primer regalor repetido

// ✅ Solución 1 (mí solución)
export function findFirstRepeated(gifts: number[]) {
  const newGifts = new Set<number>();

  for (const gift of gifts) {
    if (newGifts.has(gift)) return gift;

    newGifts.add(gift);
  }

  return -1;
}

/** Alternativas que he encontrado 🧐 **/

// 01
function alternative01(gifts: number[]) {
  return gifts.find((gift, i) => gifts.indexOf(gift) !== i) ?? -1;
}

// 02
function alternative02(gifts: number[]) {
  const newGifts = {};

  for (const gift of gifts) {
    if (newGifts[gift]) {
      return gift;
    }
    newGifts[gift] = 1;
  }
  return -1;
}
