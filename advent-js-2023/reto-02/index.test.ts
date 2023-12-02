import { describe, expect, test } from 'vitest';
import { manufacture } from '.';

describe('Reto #2 👉 Ponemos en marcha la fábrica', () => {
  test('Expected return type is an array', () => {
    const gifts = ['tren', 'oso', 'pelota'];
    const materials = 'tronesa';
    const isArray = Array.isArray(manufacture(gifts, materials));
    expect(isArray).toBeTruthy();
  });

  test('Expected result an array with ["tren", "oso"]', () => {
    const gifts = ['tren', 'oso', 'pelota'];
    const materials = 'tronesa';

    expect(manufacture(gifts, materials)).toMatchObject(['tren', 'oso']);
  });

  test('Expected result an array with ["puzzle"]', () => {
    const gifts = ['juego', 'puzzle'];
    const materials = 'jlepuz';

    expect(manufacture(gifts, materials)).toMatchObject(['puzzle']);
  });

  test('Expected result an empty array []', () => {
    const gifts = ['libro', 'ps5'];
    const materials = 'psli';

    expect(manufacture(gifts, materials)).toMatchObject([]);
  });
});
