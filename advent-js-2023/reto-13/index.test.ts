import { describe, expect, test } from 'vitest';
import { calculateTime } from '.';

describe('Reto #13 👉 Calculando el tiempo', () => {
  test('Expected return type is a string', () => {
    expect(typeof calculateTime(['05:20:00'])).toBe('string');
  });

  test('Expected return -02:20:00', () => {
    expect(calculateTime(['00:10:00', '01:00:00', '03:30:00'])).toBe(
      '-02:20:00'
    );
  });

  test('Expected return -00:30:00', () => {
    expect(calculateTime(['01:00:00', '05:00:00', '00:30:00'])).toBe(
      '-00:30:00'
    );
  });

  test('Expected return -05:29:00', () => {
    expect(
      calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30'])
    ).toBe('-05:29:00');
  });

  test('Expected return 00:00:00', () => {
    expect(calculateTime(['02:00:00', '03:00:00', '02:00:00'])).toBe(
      '00:00:00'
    );
  });

  test('Expected return -00:00:01', () => {
    expect(
      calculateTime(['01:01:01', '03:59:59', '01:01:01', '00:57:58'])
    ).toBe('-00:00:01');
  });
});
