import { describe, expect, test } from 'vitest';
import { adjustLights } from '.';

describe('Reto #9 👉 Alterna las luces', () => {
  test('Expected return type is a number', () => {
    expect(typeof adjustLights([])).toBe('number');
  });

  test('Expected return a 2', () => {
    expect(
      adjustLights(['🟢', '🔴', '🔴', '🟢', '🔴', '🟢', '🔴', '🟢', '🔴'])
    ).toBe(2);
  });

  test('Expected return a 3', () => {
    expect(adjustLights(['🟢', '🔴', '🔴', '🟢', '🟢', '🟢'])).toBe(3);
  });

  test('Expected return a 1', () => {
    expect(adjustLights(['🔴', '🔴', '🔴'])).toBe(1);
  });

  test('Expected return a 2', () => {
    expect(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])).toBe(2);
  });

  test('Expected return a 0', () => {
    expect(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])).toBe(0);
  });
});
