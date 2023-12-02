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

/** Alternativas que he encontrado 🧐 **/
