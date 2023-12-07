import { describe, expect, test } from 'vitest';
import { maxDistance } from '.';

describe('Reto #6 👉 Los renos a prueba', () => {
  test('Expected return type is a number', () => {
    expect(typeof maxDistance('<<<')).toBe('number');
  });

  test('Expected result a 2', () => {
    expect(maxDistance('>>*<')).toBe(2);
  });

  test('Expected result a 5', () => {
    expect(maxDistance('<<<<<')).toBe(5);
  });

  test('Expected result a 5', () => {
    expect(maxDistance('>***>')).toBe(5);
  });

  test('Expected result a 10', () => {
    expect(maxDistance('**********')).toBe(10);
  });

  test('Expected result a 2', () => {
    expect(maxDistance('<<**>>')).toBe(2);
  });
});
