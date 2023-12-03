import { describe, expect, test } from 'vitest';
import { findNaughtyStep } from '.';

describe('Reto #3 👉 El elfo travieso', () => {
  test('Expected return type is a string', () => {
    const original = 'abcd';
    const modified = 'abcde';
    expect(typeof findNaughtyStep(original, modified)).toBe('string');
  });

  test('Expected result a string with "e"', () => {
    const original = 'xxxx';
    const modified = 'xxoxx';
    expect(findNaughtyStep(original, modified)).toBe('o');
  });

  test('Expected result a string with "e"', () => {
    const original = 'abcd';
    const modified = 'abcde';
    expect(findNaughtyStep(original, modified)).toBe('e');
  });

  test('Expected result a string with "f"', () => {
    const original = 'stepfor';
    const modified = 'stepor';
    expect(findNaughtyStep(original, modified)).toBe('f');
  });

  test('Expected result an empty string', () => {
    const original = 'abcde';
    const modified = 'abcde';
    expect(findNaughtyStep(original, modified)).toBe('');
  });
});
