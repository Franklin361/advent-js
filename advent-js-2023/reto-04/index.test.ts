import { describe, expect, test } from 'vitest';
import { decode } from '.';

describe('Reto #4 👉 Dale la vuelta a los paréntesis', () => {
  test('Expected return type is a string', () => {
    expect(typeof decode('hola (odnum)')).toBe('string');
  });

  test('Expected result a string with "hola mundo"', () => {
    expect(decode('hola (odnum)')).toBe('hola mundo');
  });

  test('Expected result a string with "hello world!"', () => {
    expect(decode('(olleh) (dlrow)!')).toBe('hello world!');
  });

  test('Expected result a string with "santaclaus"', () => {
    expect(decode('sa(u(cla)atn)s')).toBe('santaclaus');
  });

  test('Expected result a string with "santa"', () => {
    expect(decode('((nta)(sa))')).toBe('santa');
  });
});
