// Reto #6: Los renos a prueba

// ✅ Mí solución
// (280 pts) | 🚀 2814 ops/s | 🧐 Complejidad cognitiva: 2
export function maxDistance(movements: string): number {
  const obj: { [x: string]: number } = {
    '<': 0,
    '>': 0,
    '*': 0,
  };

  for (let index = 0; index < movements.length; index++) {
    obj[movements[index]]++;
  }

  const { '<': left, '>': right, '*': bonus } = obj;

  return Math.abs(right - left) + bonus;
}

/** Alternativas que he encontrado 🥴 **/

// 01 🏆
// (390 pts) | 🚀 3140 ops/s | 🧐 Complejidad cognitiva: 1
function alternative01(movements: string): number {
  const a = movements.split(/>/g).length - 1;
  const b = movements.split(/</g).length - 1;
  const c = movements.length - a - b;

  return Math.abs(a - b) + c;
}

// 02
// (390 pts) | 🚀 3034 ops/s | 🧐 Complejidad cognitiva: 1
function alternative02(movements: string): number {
  let distance = 0;

  let right = movements.match(/>/g)?.length ?? 0;
  let left = movements.match(/</g)?.length ?? 0;

  distance += right;
  distance -= left;

  let extra = movements.length - (right + left);

  return Math.abs(distance) + extra;
}

// 03
// (290 pts) | 🚀 2948 ops/s | 🧐 Complejidad cognitiva: 1
function alternative03(movements: string): number {
  let m1 = movements.replaceAll('*', '');
  let m2 = m1.replaceAll('<', '');
  let m3 = m2.replaceAll('>', '');

  return movements.length - 2 * Math.min(m2.length - m3.length);
}
