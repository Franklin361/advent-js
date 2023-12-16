import { describe, expect, test } from 'vitest';
import { maxGifts } from '.';

describe('Reto #14 👉 Evitando la alarma', () => {
  test('Expected return type is a number', () => {
    expect(typeof maxGifts([5, 8])).toBe('number');
  });

  test('Expected return 4', () => {
    expect(maxGifts([1, 2, 3, 1])).toBe(4);
  });

  test('Expected return 12', () => {
    expect(maxGifts([2, 7, 9, 3, 1])).toBe(12);
  });

  test('Expected return 1', () => {
    expect(maxGifts([0, 0, 0, 0, 1])).toBe(1);
  });

  test('Expected return 100', () => {
    expect(maxGifts([100])).toBe(100);
  });

  test('Expected return 2', () => {
    expect(maxGifts([1, 1, 1, 1])).toBe(2);
  });
});
