// Reto #2 Ponemos en marcha la fábirca

/**
 * ✅ Solución 1 (mí solución, puntaje: 270)
 * 🚀 2731 ops/s
 * 🧐 Complejidad cognitiva: 3
 */
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
// (280 pts) | 🚀 2260 ops/s | 🧐 Complejidad cognitiva: 2
export function alternative01(gifts: string[], materials: string): string[] {
  const mate = materials.split('');

  return gifts.filter((g) => {
    const x = [...new Set([...g, ...mate])];

    return x.length == mate.length;
  });
}

// 02
// (270 pts) | 🚀 2613 ops/s | 🧐 Complejidad cognitiva: 3
export function alternative02(gifts: string[], materials: string): string[] {
  const result = gifts.filter((gift) => {
    return gift.split('').every((m) => materials.includes(m));
  });
  return result;
}
