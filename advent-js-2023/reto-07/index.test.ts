import { describe, expect, test } from 'vitest';
import { drawGift } from '.';

describe('Reto #7 👉 Las cajas en 3D', () => {
  test('Expected return type is a number', () => {
    expect(typeof drawGift(5, 'x')).toBe('string');
  });

  test('Expected return a cube size 4 with "+"', () => {
    const expected =
      '   ####\n' +
      '  #++##\n' +
      ' #++#+#\n' +
      '####++#\n' +
      '#++#+#\n' +
      '#++##\n' +
      '####\n';
    expect(drawGift(4, '+')).toBe(expected);
  });

  test('Expected return a cube size 5 with "*"', () => {
    const expected =
      '    #####\n' +
      '   #***##\n' +
      '  #***#*#\n' +
      ' #***#**#\n' +
      '#####***#\n' +
      '#***#**#\n' +
      '#***#*#\n' +
      '#***##\n' +
      '#####\n';
    expect(drawGift(5, '*')).toBe(expected);
  });

  test('Expected return a cube size 1 with "^"', () => {
    const expected = '#\n';

    expect(drawGift(1, '^')).toBe(expected);
  });
});
