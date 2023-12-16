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
// (190 pts) | 🚀 1912 ops/s | 🧐 Complejidad cognitiva: 1
