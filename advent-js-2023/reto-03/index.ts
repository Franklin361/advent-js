// Reto #3 El elfo travieso

/**
 * ✅ Mí solución, puntaje: 270
 * 🚀  2872 ops/s
 * 🧐 Complejidad cognitiva: 3
 */

export function findNaughtyStep(original: string, modified: string): string {
  const [main, secondary] =
    original.length < modified.length
      ? [modified, original]
      : [original, modified];

  const charModified = [...main].find((char, i) => char !== secondary[i]);

  return charModified ?? '';
}

/** Alternativas que he encontrado 🥴 **/

// 01 🏆
// (370 pts) | 🚀 3196 ops/s | 🧐 Complejidad cognitiva: 3
function alternative01(original: string, modified: string): string {
  let largest = original;
  let shortest = modified;

  if (original.length < modified.length) {
    largest = modified;
    shortest = original;
  }

  return [...largest].find((char, i) => char !== shortest[i]) ?? '';
}

// 02
// (360 pts) | 🚀 3142 ops/s | 🧐 Complejidad cognitiva: 4
function alternative02(original: string, modified: string): string {
  const n = original.length,
    m = modified.length;

  for (let i = 0; i < m; i++) {
    if (original[i] != modified[i]) return m > n ? modified[i] : original[i];
  }

  return '';
}

// 03
// (280 pts) | 🚀 2637 ops/s | 🧐 Complejidad cognitiva: 2
function alternative03(original: string, modified: string): string {
  const originalLen = original.length;
  const modifiedLen = modified.length;

  const sequences = {
    [originalLen]: [original, modified],
    [modifiedLen]: [modified, original],
  };

  const [steps, reference] = sequences[Math.max(originalLen, modifiedLen)];

  return [...steps].find((step, index) => step !== reference[index]) ?? '';
}

// 04
// (280 pts) | 🚀 2126 ops/s | 🧐 Complejidad cognitiva: 2
function alternative04(original: string, modified: string): string {
  let charCount: { [x: string]: number } = {};

  for (let char of new Set(original.split(''))) {
    charCount[char] = original.split(char).length - 1;
  }

  for (let char of modified) {
    charCount[char] = charCount[char] - 1;
  }
  for (let char in charCount) {
    if (charCount[char] !== 0) {
      return char;
    }
  }

  return '';
}

// 05
// (270 pts) | 🚀 2884 ops/s | 🧐 Complejidad cognitiva: 3
function alternative05(original: string, modified: string): string {
  const [lessWords, mostWords] = [original, modified].sort(
    (a, b) => a.length - b.length
  );

  return [...mostWords].find((x, i) => lessWords[i] != x) ?? '';
}

// 06
// (260 pts) | 🚀 2901 ops/s | 🧐 Complejidad cognitiva: 4
function alternative06(original: string, modified: string): string {
  const maxLen = Math.max(original.length, modified.length);

  for (let i = 0; i < maxLen; i++) {
    if (original[i] !== modified[i]) {
      return modified[i] === original[i + 1] ? original[i] : modified[i];
    }
  }

  return '';
}
