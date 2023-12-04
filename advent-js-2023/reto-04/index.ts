// Reto #4: Dale la vuelta a los paréntesis

// ✅ Mí solución
// (280 pts) | 🚀 2719 ops/s | 🧐 Complejidad cognitiva: 2
export function decode(message: string): string {
  let decodedMessage = message;

  while (decodedMessage.includes('(')) {
    const init = decodedMessage.lastIndexOf('(');
    const end = decodedMessage.indexOf(')', init);

    const strSub = decodedMessage.substring(init + 1, end);

    const reversed = [...strSub].reverse().join('');

    decodedMessage = decodedMessage.replace(
      decodedMessage.substring(init, end + 1),
      reversed
    );
  }
  return decodedMessage;
}

/** Alternativas que he encontrado 🥴 **/

// 01 🏆
// (280 pts) | 🚀 2627 ops/s | 🧐 Complejidad cognitiva: 2
function alternative01(message: string): string {
  const rege = /\(([^()]+)\)/g;
  const replacer = (_: any, g: string) => g.split('').reverse().join('');

  return message.replace(rege, replacer).replace(rege, replacer);
}

// 02
// (270 pts) | 🚀 2568 ops/s | 🧐 Complejidad cognitiva: 3
function alternative02(message: string): string {
  const regex = /\(([^()]*)\)/;

  while (regex.test(message)) {
    message = message.replace(regex, (match, text) =>
      text.split('').reverse().join('')
    );
  }

  return message;
}
