import { describe, expect, test } from 'vitest';
import { findFirstRepeated } from '.';

describe('Reto #1 👉 Primer regalo repetido', () => {
  test('Return function it must be a number', () => {
    const gifts = [1, 2, 3, 4, 3];
    expect(typeof findFirstRepeated(gifts)).toBe('number');
  });

  test('Expected result is 3', () => {
    const gifts = [2, 1, 3, 5, 3, 2];
    expect(findFirstRepeated(gifts)).toBe(3);
  });

  test('Expected result is -1', () => {
    const gifts = [1, 2, 3];
    expect(findFirstRepeated(gifts)).toBe(-1);
  });
});
