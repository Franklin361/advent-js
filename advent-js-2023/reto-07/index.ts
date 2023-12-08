// Reto #7: Las cajas en 3D

// ✅ Mí solución
// (260 pts) | 🚀 2396 ops/s | 🧐 Complejidad cognitiva: 4
export function drawGift(size: number, symbol: string): string {
  if (size === 1) return '#\n';

  let gift = '';

  //start - base top
  gift = ' '.repeat(size - 1) + '#'.repeat(size) + '\n';
  //end - base top

  //start - face with spaces
  let j = size - 2;
  for (const a of Array(size - 2)) {
    gift += ' '.repeat(j);
    gift += '#';
    gift += symbol.repeat(size - 2);
    gift += '#';
    gift += symbol.repeat(size - 2 - j);
    gift += '#' + '\n';
    j--;
  }
  //end - face with spaces

  //start - line middele
  gift += '#'.repeat(size);
  gift += symbol.repeat(size - 2);
  gift += '#'.repeat(size - (size - 1)) + '\n';
  //end - line middele

  //start - face without spaces
  let i = 0;
  for (const a of Array(size - 2)) {
    gift += '#';
    gift += symbol.repeat(size - 2);
    gift += '#';
    gift += symbol.repeat(size - 3 - i);
    gift += '#' + '\n';
    i++;
  }
  //end - face without spaces

  //start - base bottom
  gift += '#'.repeat(size) + '\n';
  //end - base bottom

  return gift;
}

/** Alternativas que he encontrado 🥴 **/

// 01 🏆
// (290 pts) | 🚀 2277 ops/s | 🧐 Complejidad cognitiva: 1
function alternative01(size: number, symbol: string) {
  let bgSize = size - 2;

  bgSize += +!(bgSize + 1);

  let response = '';

  let topCenter = '';
  let bottomCenter = '';

  for (const a of [...Array.from({ length: bgSize }).keys()]) {
    const c = '#' + symbol.repeat(bgSize) + '#' + symbol.repeat(a) + '#';
    bottomCenter = c + '\n' + bottomCenter;
    topCenter += ' '.repeat(bgSize - a) + c + '\n';
  }

  response =
    ' '.repeat(size - 1) +
    '#'.repeat(size) +
    '\n' +
    (
      topCenter +
      '#'.repeat(size) +
      symbol.repeat(bgSize) +
      '#' +
      '\n' +
      bottomCenter +
      '#'.repeat(size) +
      '\n'
    ).repeat(+!!(size - 1));

  return response;
}

// 02
// (70 pts) | 🚀 1859 ops/s | 🧐 Complejidad cognitiva: 4
function alternative02(size: number, symbol: string): string {
  const endLine = '#\n';
  if (size <= 1) {
    return endLine;
  }

  const pound = '#';

  const lineLength = size * 2 - 1;

  let gift = ' '.repeat(lineLength - size) + pound.repeat(size - 1) + endLine;

  const topFace = symbol.repeat(size - 2);

  for (let i = 2; i < lineLength; i++) {
    const isFace = i !== size;
    const calc = lineLength - size - i + 1;
    const prefix = ' '.repeat(Math.max(calc, 0)) + pound;
    if (isFace) {
      const sideFace = pound + symbol.repeat(size - 2 - Math.abs(size - i));
      gift += prefix + topFace + sideFace;
    } else {
      const symbols = symbol.repeat(lineLength - size - 1);
      gift += pound.repeat(size) + symbols;
    }
    gift += endLine;
  }

  gift += pound.repeat(size - 1) + endLine;

  return gift;
}
