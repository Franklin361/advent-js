// Reto #16: Despliegue en viernes

// ✅ Mí solución
// (140 pts) | 🚀 1023 ops/s | 🧐 Complejidad cognitiva: 4
export function transformTree(tree: (number | null)[]) {
  function transformTree(array: (number | null)[], index: number) {
    if (index >= array.length || array[index] === null) return null;

    let node: any = { value: array[index], left: null, right: null };

    node.left = transformTree(array, 2 * index + 1);
    node.right = transformTree(array, 2 * index + 2);

    return node;
  }

  const obj = transformTree(tree, 0);

  return obj;
}

/** Alternativas que he encontrado 🥴 **/

// 01 🏆
// (190 pts) | 🚀 1037 ops/s | 🧐 Complejidad cognitiva: 1
function alternative01(tree: any): Record<any, any> | null {
  const index = arguments[1] ?? 0;
  const value = tree[index];
  let base;
  let res;

  [false][+(value != null)] ??
    ((base = index * 2),
    (res = {
      value: value,
      // @ts-ignore
      left: alternative01(tree, base + 1),
      // @ts-ignore
      right: alternative01(tree, base + 2),
    }));
  return res ?? null;
}

// 02
// (90 pts) | 🚀 924 ops/s | 🧐 Complejidad cognitiva: 1
function alternative02(tree: any[]) {
  let idx = tree.length - 1;

  for (let t of tree) {
    tree[idx] = [
      {
        value: tree[idx],
        left: tree[idx * 2 + 1] ?? null,
        right: tree[idx * 2 + 2] ?? null,
      },
      null,
    ][+(tree[idx] == null)];
    idx--;
  }

  return [null, tree[0]][+(tree.length > 0)];
}

// 03
// (60 pts) | 🚀 992 ops/s | 🧐 Complejidad cognitiva: 3
function alternative03(tree: any[]) {
  function buildLeaf(tree: any[], index: number): any {
    const value = tree[index];
    if (value != null) {
      const base = index * 2;
      return {
        value: value,
        left: buildLeaf(tree, base + 1),
        right: buildLeaf(tree, base + 2),
      };
    }
    return null;
  }

  const result = buildLeaf(tree, 0);
  return result;
}

// 04
// (140 pts) | 🚀 1016 ops/s | 🧐 Complejidad cognitiva: 4
function alternative04(tree: (number | null)[]) {
  const _tree: any = tree.map((value) => ({ value, left: null, right: null }));

  const arr = ['right', 'left'];
  for (let i = 1; i < tree.length; i++) {
    if (_tree[i].value == null) continue;
    _tree[((i - 1) / 2) | 0][arr[i % 2]] = _tree[i];
  }

  return _tree[0] ?? null;
}
