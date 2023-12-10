import { describe, expect, test } from 'vitest';
import { createChristmasTree } from '.';

describe('Reto #10 👉 Crea tu propio árbol de navidad', () => {
  test('Expected return type is a string', () => {
    expect(typeof createChristmasTree('c', 5)).toBe('string');
  });

  test('Expected return a 2 level tree using "x"', () => {
    expect(createChristmasTree('x', 3)).toBe(
      '  x\n' + ' x x\n' + 'x x x\n' + '  |\n'
    );
  });

  test('Expected return a 4 level tree using "xo"', () => {
    expect(createChristmasTree('xo', 4)).toBe(
      '   x\n' + '  o x\n' + ' o x o\n' + 'x o x o\n' + '   |\n'
    );
  });

  test('Expected return a 10 level tree using "12345678"', () => {
    expect(createChristmasTree('12345678', 10)).toBe(
      '         1\n' +
        '        2 3\n' +
        '       4 5 6\n' +
        '      7 8 1 2\n' +
        '     3 4 5 6 7\n' +
        '    8 1 2 3 4 5\n' +
        '   6 7 8 1 2 3 4\n' +
        '  5 6 7 8 1 2 3 4\n' +
        ' 5 6 7 8 1 2 3 4 5\n' +
        '6 7 8 1 2 3 4 5 6 7\n' +
        '         |\n'
    );
  });
});
