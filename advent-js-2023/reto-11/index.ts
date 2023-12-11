// Reto #11: Los elfos estudiosos

// ✅ Mí solución
// (60 pts) | 🚀 248 ops/s | 🧐 Complejidad cognitiva: 3
export function getIndexsForPalindrome(word: string): number[] | null {
  const isPalindrome = [...word].reverse().join('') === word;
  if (isPalindrome) return [];

  const length = word.length;

  for (const i of Array.from({ length }).keys()) {
    for (const j of Array.from({ length }).keys()) {
      // Intenta intercambiar los caracteres en los índices i y j
      const swappedChars = word.split('');

      [swappedChars[i], swappedChars[j]] = [swappedChars[j], swappedChars[i]];

      const swappedStr = swappedChars.join('');

      // Verifica si el resultado es un palíndromo
      let isPalindrome = swappedStr === [...swappedStr].reverse().join('');
      if (isPalindrome) return [i, j];
    }
  }
  return null;
}

/** Alternativas que he encontrado 🥴 **/

// 01 🏆
// (90 pts) | 🚀 294 ops/s | 🧐 Complejidad cognitiva: 1
export function alternative01(word: string) {
  const _letters = [...word];
  const palindrome = word === [..._letters].reverse().join('');

  let initial: number[] | null = [null, []][+palindrome];
  let index = 0;
  let aux = 1;

  const letters = [_letters, []][+palindrome];
  let auxLetters = letters.slice(1);

  for (const letter of letters) {
    for (const auxLetter of auxLetters) {
      const w = [...letters];
      w[index] = auxLetter;
      w[aux] = letter;

      const isPalindrome = +(w.join('') === w.reverse().join(''));
      const isInitialNull = +(initial == null);
      const isDifferentIndex = +(index !== aux);

      const values = [initial, initial, initial, [index, aux]];

      initial = values[isInitialNull + isDifferentIndex + isPalindrome];
      aux++;
    }

    index++;
    aux = 1;
    auxLetters = [[], auxLetters][+(initial == null)];
  }

  return initial;
}

// 02
// (90 pts) | 🚀 107 ops/s | 🧐 Complejidad cognitiva: 1
export function alternative02(word: string) {
  let res: any = null;
  for (const a of Array.from({ length: word.length }).keys()) {
    for (const b of Array.from({ length: word.length }).keys()) {
      let swapped = [...word];
      let aux = word[a];
      swapped[a] = word[b];
      swapped[b] = aux;

      let left = swapped.slice(0, Math.floor(word.length / 2)).join('');
      let right = swapped
        .slice(Math.ceil(word.length / 2))
        .reverse()
        .join('');

      res = [[null, [[], [a, b]][+(a + b > 0)]][+(left == right)], res][+!!res];
    }
  }
  return res;
}
