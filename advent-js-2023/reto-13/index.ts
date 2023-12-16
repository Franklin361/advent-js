// Reto #13: Calculando el tiempo

// ✅ Mí solución
// (270 pts) | 🚀 2175 ops/s | 🧐 Complejidad cognitiva: 2

export function calculateTime(deliveries: string[]) {
  let totalSeconds = -25200;

  for (const item of deliveries) {
    const [hour, minute, second] = item.split(':').map((x) => +x);
    totalSeconds += hour * 3600 + minute * 60 + second;
  }

  const sign = ['', '-'][+(totalSeconds < 0)];
  totalSeconds = Math.abs(totalSeconds);

  const hour = `${totalSeconds / 3600}`[0].padStart(2, '0') + ':';
  const minute = ((totalSeconds / 60) % 60).toFixed(0);
  const seconds = ':' + `${totalSeconds % 60}`.padStart(2, '0');

  return sign + hour + minute.padStart(2, '0') + seconds;
}

/** Alternativas que he encontrado 🥴 **/

// 01 🏆
// (290 pts) | 🚀 2119 ops/s | 🧐 Complejidad cognitiva: 1
function alternative01(deliveries: string[]) {
  const max = 3600 * 7;
  let time = 0;

  for (let d of deliveries) {
    const numbers = d.split(':');
    time += +numbers[0] * 3600 + +numbers[1] * 60 + +numbers[2];
  }

  const signo = max - time > 0;

  time = Math.abs(max - time);

  let response = ['', '-'][+signo];

  response += (~~(time / 3600) + '').padStart(2, '0') + ':';
  time %= 3600;
  response += (~~(time / 60) + '').padStart(2, '0') + ':';
  time %= 60;
  response += (time + '').padStart(2, '0');

  return response;
}

// 02
// (270 pts) | 🚀 2084 ops/s | 🧐 Complejidad cognitiva: 2
function alternative02(deliveries: string[]) {
  let totalSeconds = 0;

  for (const delivery of deliveries) {
    const [hour, minute, second] = delivery.split(':');

    totalSeconds += +hour * 3600 + +minute * 60 + +second;
  }

  const timeLimitSeconds = 7 * 3600;
  const remainingTimeSeconds = totalSeconds - timeLimitSeconds;

  const signType = ['', '-'];
  const sign = signType[Number(remainingTimeSeconds < 0)];

  const absoluteRemainingTime = Math.abs(remainingTimeSeconds);

  const hours = Math.floor(absoluteRemainingTime / 3600);
  const minutes = Math.floor((absoluteRemainingTime % 3600) / 60);
  const seconds = absoluteRemainingTime % 60;

  return (
    sign +
    hours.toString().padStart(2, '0') +
    ':' +
    minutes.toString().padStart(2, '0') +
    ':' +
    seconds.toString().padStart(2, '0')
  );
}
