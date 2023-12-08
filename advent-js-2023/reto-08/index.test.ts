import { describe, expect, test } from 'vitest';
import { organizeGifts } from '.';

describe('Reto #8 👉 Ordenando el almacén', () => {
  test('Expected return type is a number', () => {
    expect(typeof organizeGifts('76a11b')).toBe('string');
  });

  test('Expected return a string with "[a]{a}{a}(aaaaaa){b}(b)"', () => {
    expect(organizeGifts('76a11b')).toBe('[a]{a}{a}(aaaaaa){b}(b)');
  });

  test('Expected return a string with "{a}{a}"', () => {
    expect(organizeGifts('20a')).toBe('{a}{a}');
  });

  test('Expected return a string with "[b]{b}{b}[a][a]{a}{a}(cccc)"', () => {
    expect(organizeGifts('70b120a4c')).toBe('[b]{b}{b}[a][a]{a}{a}(cccc)');
  });

  test('Expected return a string with "(ccccccccc)"', () => {
    expect(organizeGifts('9c')).toBe('(ccccccccc)');
  });

  test('Expected return a string with "{d}(ddddddddd)[e](e)"', () => {
    expect(organizeGifts('19d51e')).toBe('{d}(ddddddddd)[e](e)');
  });
});
