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

// 02
// (190 pts) | 🚀 2442 ops/s | 🧐 Complejidad cognitiva: 11
function alternative02(lights: string[]): number {
  const patron1 = Array(lights.length)
    .fill('🔴')
    .map((v, i) => (i % 2 ? '🟢' : v));
  const patron2 = Array(lights.length)
    .fill('🟢')
    .map((v, i) => (i % 2 ? '🔴' : v));

  let c1 = 0;
  let c2 = 0;
  lights.forEach((v, i) => {
    if (v !== patron1.at(i)) {
      c1++;
    } else if (v !== patron2.at(i)) {
      c2++;
    }
  });
  return c1 < c2 ? c1 : c2;
}
