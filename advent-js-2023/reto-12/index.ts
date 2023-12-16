// Reto #12: ¿Es una copia válida?

// ✅ Mí solución
// (260 pts) | 🚀 2655 ops/s | 🧐 Complejidad cognitiva: 3
export function checkIsValidCopy(original: string, copy: string): boolean {
  let isValidCopy = true;
  let index = 0;

  for (const letter of original) {
    const copyLetter = copy[index++];

    const isValidLetter = [
      letter.toLowerCase(),
      '#',
      '+',
      ':',
      '.',
      ' ',
    ].includes(copyLetter);

    const isCopyLetterBlankSpace = copyLetter === ' ';
    const isLetterBlankSpace = letter === ' ';

    const isValidCharacter = isLetterBlankSpace
      ? isCopyLetterBlankSpace
      : isValidLetter;

    if (!isValidCharacter) {
      isValidCopy = false;
      break;
    }
  }

  return isValidCopy;
}

/** Alternativas que he encontrado 🥴 **/

// 01 🏆
// (290 pts) | 🚀 2170 ops/s | 🧐 Complejidad cognitiva: 1
function alternative01(original: string, copy: string): boolean {
  let index = 0;
  let isValidCopy = true;

  for (const letter of original) {
    const copyLetter = copy[index++];

    const isValidLetter = [
      letter.toLowerCase(),
      '#',
      '+',
      ':',
      '.',
      ' ',
    ].includes(copyLetter);

    const isLetterBlankSpace = letter === ' ';
    const isCopyLetterBlankSpace = copyLetter === ' ';

    const isValidCharacter = [isValidLetter, isCopyLetterBlankSpace][
      +isLetterBlankSpace
    ];

    isValidCopy = [isValidCopy, isValidCharacter][+isValidCopy];
  }

  return isValidCopy;
}

// 02
// (170 pts) | 🚀 1981 ops/s | 🧐 Complejidad cognitiva: 2
function alternative02(original: string, copy: string): boolean {
  let i = -1;
  let res = true;

  for (let o of [...original]) {
    i++;

    if (o.toLowerCase() == copy[i]) continue;

    let simbolos = [o, o.toLowerCase(), '#', '+', ':', '.', ' ', ''];

    res = [
      false,
      [false, true][
        +simbolos
          .slice(
            (/([A-Z])|([a-z])|(\#)|(\+)|(\:)|(\.)|(\s)/g
              .exec(o)
              ?.lastIndexOf(o) ?? 1) - 1
          )
          .includes(copy[i])
      ],
    ][+res];
  }
  return res;
}
