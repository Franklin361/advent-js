// Reto #8: Ordenando el almacén

// ✅ Mí solución
// (260 pts) | 🚀 2037 ops/s | 🧐 Complejidad cognitiva: 4
export function organizeGifts(gifts: string) {
  let organizedGift = '';
  const series = gifts.match(/\d+[a-z](?![a-z])/g) || [];

  for (const serie of series) {
    let [n, char] = serie.split(/(?=[a-zA-Z])/) as [number, string];

    if (Math.floor(+n / 50) > 0) {
      organizedGift += `[${char}]`.repeat(Math.floor(+n / 50));
      n = +n - 50 * Math.floor(+n / 50);
    }

    if (Math.floor(+n / 10) > 0) {
      let newBox = `{${char}}`.repeat(Math.floor(+n / 10));
      organizedGift += newBox;
      n = +n - 10 * Math.floor(+n / 10);
    }

    if (Math.floor(+n / 1) > 0) {
      let newBox = `${char}`.repeat(n);
      organizedGift += `(${newBox})`;
    }
  }
  return organizedGift;
}

/** Alternativas que he encontrado 🥴 **/

// 01 🏆
// (290 pts) | 🚀 2770 ops/s | 🧐 Complejidad cognitiva: 1
function alternative01(gifts: string) {
  const countGifts = gifts.match(/\d+/g) || ([] as number[]);
  const nameGifts = gifts.match(/[^0-9]/g) || [];

  let response = '';
  let i = 0;

  for (let c of countGifts) {
    const g = nameGifts[i];
    let a = '';

    c = +c;

    a += `[${g}]`.repeat(+c / 50);
    c = +c % 50;

    a += `{${g}}`.repeat(+c / 10);
    c = +c % 10;

    a += `(${g.repeat(+c)})`.repeat(+!!c);

    response += a;
    i++;
  }

  return response;
}

// 02
// (280 pts) | 🚀 2708 ops/s | 🧐 Complejidad cognitiva: 2
function alternative02(gifts: string) {
  let amount = 0,
    letter = '',
    rest = 0,
    organizeGift = '';

  const breakpoint = /[0-9]+[a-z]/g;
  const elements = gifts.match(breakpoint) || [];

  for (const element of elements) {
    amount = +element.substring(0, element.length - 1);
    letter = element[element.length - 1];
    rest = amount % 10;
    organizeGift += `[${letter}]`.repeat(amount / 50);
    organizeGift += `{${letter}}`.repeat((amount / 10) % 5);
    organizeGift += `(`.repeat((rest > 0) as any);
    organizeGift += letter.repeat(rest);
    organizeGift += `)`.repeat((rest > 0) as any);
  }

  return organizeGift;
}

// 03
// (270 pts) | 🚀 2476 ops/s | 🧐 Complejidad cognitiva: 3
function alternative03(gifts: string) {
  const regexp = /(\d+)([a-z])/g;
  let match,
    result = '';

  while ((match = regexp.exec(gifts))) {
    const amount = parseInt(match[1]);
    const letter = match[2];

    const boxes = Math.floor(amount / 10);
    const palets = Math.floor(boxes / 5);
    const bags = amount - boxes * 10;

    result += `[${letter}]`.repeat(palets);
    result += `{${letter}}`.repeat(boxes - palets * 5);
    result += `(${letter.repeat(bags)})`.repeat((bags > 0) as any);
  }

  return result;
}
