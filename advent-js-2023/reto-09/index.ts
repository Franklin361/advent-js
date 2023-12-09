// Reto #9: Alterna las luces

// ✅ Mí solución
// (280 pts) | 🚀 2687 ops/s | 🧐 Complejidad cognitiva: 2

export function adjustLights(lights: string[]): number {
  let start = '🟢';
  let res = 0;

  for (let l of lights) {
    res += +(l == start);
    start = [l, l === '🔴' ? '🟢' : '🔴'][+(l == start)];
  }

  return Math.min(res, lights.length - res);
}

/** Alternativas que he encontrado 🥴 **/

// 01 🏆
// (290 pts) | 🚀 2731 ops/s | 🧐 Complejidad cognitiva: 1
function alternative01(lights: string[]): number {
  const color = ['🔴', '🟢'];
  let res = 0;

  for (const [i, l] of lights.entries()) {
    res += +(l === color[i % 2]);
  }

  return Math.min(res, lights.length - res);
}
