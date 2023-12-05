// Reto #5: El CyberTruck de Santa

// ✅ Mí solución
// (160 pts) | 🚀 1280 ops/s | 🧐 Complejidad cognitiva: 4
export function cyberReindeer(road: string, time: number): string[] {
  let roadHistory = [road];
  let position = 0;

  for (let index = 0; index < time - 1; index++) {
    if (index == 4) road = road.replaceAll('|', '*');

    if (road[position + 1] != '|') position++;

    let newRoad: string[] | string = road.split('');
    newRoad[position] = 'S';
    newRoad[0] = '.';
    newRoad = newRoad.join('');
    roadHistory.push(newRoad);
  }

  return roadHistory;
}

/** Alternativas que he encontrado 🥴 **/

// 01 🏆
// (160 pts) | 🚀 1741 ops/s | 🧐 Complejidad cognitiva: 4
export const alternative01 = (road: string, time: number) => {
  let moves = [road];
  const _road = ('.' + road.slice(1)).replace(/\|/g, '*');
  let a = 0;

  for (let i = 1; i < time; i++) {
    if (i == 5) road = road.replace(/\|/g, '*');
    const newRoad = road.replace(/S[\.\*]/, `${_road[a]}S`);
    if (newRoad != road) a++;
    road = newRoad;
    moves.push(road);
  }

  return moves;
};

// 02
// (160 pts) | 🚀 1606 ops/s | 🧐 Complejidad cognitiva: 4
export const alternative02 = (road: string, time: number) => {
  const SLED = 'S';
  const FLOOR = '.';
  const CLOSE = '|';
  const OPEN = '*';
  const history = [];
  const secondToOpen = 5;
  let second = 1;
  let index = 0;
  let prev = FLOOR;

  while (second <= time) {
    history.push(road);

    if (second++ === secondToOpen) {
      road = road.replaceAll(CLOSE, OPEN);
    }

    const next = road[index + 1];

    if (next === CLOSE) continue;

    road = road.split(SLED + next).join(prev + SLED);
    prev = next;

    index++;
  }

  return history;
};

// 03
// (150 pts) | 🚀 1920 ops/s | 🧐 Complejidad cognitiva: 5
export const alternative03 = (road: string, time: number) => {
  const r = [];
  let stepTime = 0;
  let pS = 0;
  const roadLen = road.length;
  road = road.replace('S', '.');
  for (; stepTime < time; stepTime++) {
    if (stepTime === 5) road = road.replaceAll('|', '*');
    const rd = road[pS];
    if (rd !== '|' || stepTime > 4) pS += 1;
    const start = road.substring(0, pS - 1);
    const end = road.substring(pS, roadLen);
    r.push(start + 'S' + end);
  }
  return r;
};

// 04
// (150 pts) | 🚀 1920 ops/s | 🧐 Complejidad cognitiva: 5
export const alternative04 = (road: any, time: number) => {
  let result = [];
  let timePassed = 0;
  let pos = 0;
  let aux = '.';
  while (time > 0) {
    result.push(road);
    time--;
    timePassed++;
    if (timePassed >= 5) road = road.replace(/\|/gi, '*');
    if (road[pos + 1] === '.' || road[pos + 1] === '*') {
      road = road.split('');
      road[pos] = aux;
      aux = road[pos + 1];
      road[pos + 1] = 'S';
      road = road.join('');
      pos++;
    }
  }
  return result;
};
