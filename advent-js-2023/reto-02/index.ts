// Reto #2 Ponemos en marcha la fábirca

// ✅ Mí solución
// (270 pts) | 🚀 2731 ops/s | 🧐 Complejidad cognitiva: 3
export function manufacture(gifts: string[], materials: string): string[] {
  return gifts.filter((gift) => {
    for (const letter of gift) {
      if (!materials.includes(letter)) return false;
    }
    return true;
  });
}

/** Alternativas que he encontrado 🥴 **/

// 01 🏆
// (280 pts) | 🚀 2904 ops/s | 🧐 Complejidad cognitiva: 2
function alternative01(gifts: string[], materials: string): string[] {
  const regexp = new RegExp(`[^${materials}]+`);
  return gifts.filter((gift) => !regexp.test(gift));
}

// 02
// (280 pts) | 🚀 2282 ops/s | 🧐 Complejidad cognitiva: 2
function alternative02(gifts: string[], materials: string): string[] {
  const result: string[] = [];
  for (const gift of gifts) {
    let giftChars = gift;
    for (const char of materials) {
      giftChars = giftChars.replaceAll(char, '');
    }
    if (giftChars.length === 0) {
      result.push(gift);
    }
  }
  return result;
}

// 03
// (280 pts) | 🚀 2260 ops/s | 🧐 Complejidad cognitiva: 2
function alternative03(gifts: string[], materials: string): string[] {
  const mate = materials.split('');

  return gifts.filter((g) => {
    const x = [...new Set([...g, ...mate])];

    return x.length == mate.length;
  });
}

// 04
// (270 pts) | 🚀 2613 ops/s | 🧐 Complejidad cognitiva: 3
function alternative04(gifts: string[], materials: string): string[] {
  const result = gifts.filter((gift) => {
    return gift.split('').every((m) => materials.includes(m));
  });
  return result;
}
