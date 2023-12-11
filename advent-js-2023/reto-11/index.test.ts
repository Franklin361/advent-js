import { describe, expect, test } from 'vitest';
import { getIndexsForPalindrome } from '.';

describe('Reto #11 👉 Los elfos estudiosos', () => {
  test('Expected return type is an array', () => {
    expect(Array.isArray(getIndexsForPalindrome(''))).toBeTruthy();
  });

  test('Expected return an empty array []', () => {
    expect(getIndexsForPalindrome('anna')).toMatchObject([]);
  });

  test('Expected return an empty array []', () => {
    expect(getIndexsForPalindrome('saippuakivikauppias')).toMatchObject([]);
  });

  test('Expected return an array [0,1]', () => {
    expect(getIndexsForPalindrome('abab')).toMatchObject([0, 1]);
  });

  test('Expected return an array [1,3]', () => {
    expect(getIndexsForPalindrome('aaababa')).toMatchObject([1, 3]);
  });

  test('Expected return an array [4,8]', () => {
    expect(getIndexsForPalindrome('rotaratov')).toMatchObject([4, 8]);
  });

  test('Expected return null', () => {
    expect(getIndexsForPalindrome('abac')).toBeNull();
  });
});
