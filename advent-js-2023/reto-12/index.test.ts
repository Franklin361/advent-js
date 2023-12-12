import { describe, expect, test } from 'vitest';
import { checkIsValidCopy } from '.';

describe('Reto #12 👉 ¿Es una copia válida?', () => {
  test('Expected return type is a boolean', () => {
    expect(typeof checkIsValidCopy('a', 'a')).toBe('boolean');
  });

  test('Expected return a true', () => {
    expect(
      checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#')
    ).toBeTruthy();
  });

  test('Expected return a true', () => {
    expect(checkIsValidCopy('Santa Claus', '###:. c:+##')).toBeTruthy();
  });

  test('Expected return a true', () => {
    expect(checkIsValidCopy('Santa Claus', 's#+:. c:. s')).toBeTruthy();
  });

  test('Expected return a true', () => {
    expect(checkIsValidCopy('3 regalos', '3        ')).toBeTruthy();
  });

  test('Expected return a true', () => {
    expect(checkIsValidCopy('3 regalos 3', '3 .+:# #: 3')).toBeTruthy();
  });

  test('Expected return a false', () => {
    expect(checkIsValidCopy('3 regalos', '3  ')).toBeFalsy();
  });

  test('Expected return a false', () => {
    expect(checkIsValidCopy('Santa Claus', ' Santa Claus ')).toBeFalsy();
  });

  test('Expected return a false', () => {
    expect(checkIsValidCopy('Santa Claus', 'SantA ClauS')).toBeFalsy();
  });

  test('Expected return a false', () => {
    expect(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')).toBeFalsy();
  });
});
