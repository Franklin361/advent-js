// Reto #15: Robot autónomo

// ✅ Mí solución
// (90 pts) | 🚀 2164 ops/s | 🧐 Complejidad cognitiva: 14
export function autonomousDrive(store: string[], movements: string[]) {
  let i = store.findIndex((x) => x.indexOf('!') !== -1);
  let j = store[i].indexOf('!');

  store[i] = store[i].substring(0, j) + '.' + store[i].substring(j + 1);

  for (const movement of movements) {
    if (movement === 'R') {
      if (j < store[0].length - 1 && store[i][j + 1] !== '*') j++;
    }
    if (movement === 'L') {
      if (j > 0 && store[i][j - 1] !== '*') j--;
    }
    if (movement === 'D') {
      if (i < store.length - 1 && store[i + 1][j] !== '*') i++;
    }
    if (movement === 'U') {
      if (i > 0 && store[i - 1][j] !== '*') i--;
    }
  }

  store[i] = store[i].substring(0, j) + '!' + store[i].substring(j + 1);

  return store;
}

/** Alternativas que he encontrado 🥴 **/

// 01 🏆
// (190 pts) | 🚀 1912 ops/s | 🧐 Complejidad cognitiva: 1
function alternative01(store: string[], movements: string[]) {
  const w = store[0].length;
  const mi = store.join('').indexOf('!');
  let si = (mi / w) | 0;
  let sj = mi % w;

  store[si] = store[si].substring(0, sj) + '.' + store[si].substring(sj + 1);

  for (let movement of movements) {
    const nextI = si - +(movement === 'U') + +(movement === 'D');
    const nextJ = sj - +(movement === 'L') + +(movement === 'R');
    const canMove = +(store[nextI]?.[nextJ] === '.');

    si = [si, nextI][canMove];
    sj = [sj, nextJ][canMove];
  }

  store[si] = store[si].substring(0, sj) + '!' + store[si].substring(sj + 1);

  return store;
}

// 02
// (120 pts) | 🚀 1426 ops/s | 🧐 Complejidad cognitiva: 1
function alternative02(store: string[], movements: string[]) {
  let robotX = -1;
  let robotY = -1;

  let y = 0;
  for (const road of store) {
    const x = road.search('!');

    const searchMoveOptions = [
      [
        [0, 0],
        [x + 1, ++y],
      ],
      [
        [0, 0],
        [0, 0],
      ],
    ];

    const hasRobotBeenFound = robotX !== -1;
    const isRobotInRow = x !== -1;

    const [newX, newY] = searchMoveOptions[+hasRobotBeenFound][+isRobotInRow];

    robotX += newX;
    robotY += newY;
  }

  store[robotY] = store[robotY].replace('!', '.');

  const moveOptions: Record<string, [number, number]> = {
    R: [+1, +0],
    L: [-1, +0],
    U: [+0, -1],
    D: [+0, +1],
  };

  for (const movement of movements) {
    const [x, y] = moveOptions[movement];
    const obstacle = store[robotY + y]?.[robotX + x];

    const isObstacle = ['*', undefined].includes(obstacle);
    const robotMoveOptions = [
      [x, y],
      [0, 0],
    ];

    const [newX, newY] = robotMoveOptions[+isObstacle];

    robotX += newX;
    robotY += newY;
  }

  store[robotY] =
    store[robotY].substring(0, robotX) +
    '!' +
    store[robotY].substring(robotX + 1);

  return store;
}

// 03
// (240 pts) | 🚀 2080 ops/s | 🧐 Complejidad cognitiva: 4
function alternative03(store: string[], movements: string[]) {
  let row = store.findIndex((line) => line.includes('!'));
  let col = store[row].indexOf('!');

  function placeRobot(robot: string) {
    const line = store[row];
    store[row] = line.slice(0, col) + robot + line.slice(col + 1);
  }

  placeRobot('.');

  const maxRow = store.length;
  const maxCol = store[0].length;

  for (const move of movements) {
    const rowMove = row + +(move === 'D') - +(move === 'U');
    const colMove = col + +(move === 'R') - +(move === 'L');
    const rowValues = [row, row, rowMove];
    const colValues = [col, col, colMove];

    const nextRow = rowValues[+(rowMove >= 0) + +(rowMove < maxRow)];
    const nextCol = colValues[+(colMove >= 0) + +(colMove < maxCol)];

    const pos = store[nextRow][nextCol];

    if (pos !== '*') {
      col = nextCol;
      row = nextRow;
    }
  }

  placeRobot('!');

  return store;
}
