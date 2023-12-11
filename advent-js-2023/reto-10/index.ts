// Reto #10: Crea tu propio árbol de navidad

// ✅ Mí solución
// (190 pts) | 🚀 1479 ops/s | 🧐 Complejidad cognitiva: 1
export function createChristmasTree(ornaments: string, height: number): string {
  let totalOraments = ornaments.repeat(height * height);
  let three = '';

  for (const i of Array.from({ length: height }).keys()) {
    let spaces = ' '.repeat(height - i).slice(1);
    let level = totalOraments
      .slice(0, i + 1)
      .split('')
      .join()
      .replaceAll(',', ' ');
    three += spaces + level + '\n';
    totalOraments = totalOraments.slice(i + 1, totalOraments.length);
  }
  return (three += ' '.repeat(height - 1) + '|' + '\n');
}

/** Alternativas que he encontrado 🥴 **/

// 01 🏆
// (190 pts) | 🚀 1684 ops/s | 🧐 Complejidad cognitiva: 1
function alternative01(ornaments: string, height: number): string {
  const fs = ' '.repeat(height - 1);
  const oL = ornaments.length;
  const oA = [...ornaments.repeat(height)].join(' ');
  let result = '';
  let oI = 0;
  for (const currentHeight of Array.from({ length: height }).keys()) {
    const cO = oA.substring(oI * 2, (oI + currentHeight + 1) * 2 - 1);
    oI = (oI + currentHeight + 1) % oL;
    result += `${' '.repeat(height - currentHeight - 1)}${cO}\n`;
  }

  return result + fs + '|\n';
}

// 02
// (180 pts) | 🚀 1333 ops/s | 🧐 Complejidad cognitiva: 2
function alternative02(ornaments: string, height: number): string {
  let gaussLenght = (height * (height + 1)) / 2;
  let ornamentsArray = [...ornaments.repeat(gaussLenght)];
  let result = '';

  for (let i = 0; i < height; i++) {
    result +=
      ' '.repeat(height - i - 1) +
      ornamentsArray.splice(0, i + 1).join(' ') +
      '\n';
  }

  return result + '|'.padStart(height, ' ') + '\n';
}
