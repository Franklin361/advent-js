import { describe, expect, test } from 'vitest';
import { autonomousDrive } from '.';

describe('Reto #15 👉 Robot autónomo', () => {
  test('Expected return type is an array', () => {
    expect(
      Array.isArray(autonomousDrive(['..!....'], ['R', 'L']))
    ).toBeTruthy();
  });

  test('Expected return ["..!...."] ', () => {
    expect(autonomousDrive(['..!....'], ['R', 'L'])).toMatchObject(['..!....']);
  });

  test('Expected return ["!..", "***"] ', () => {
    const expected = ['!..', '***'];
    expect(autonomousDrive(['!..', '***'], ['U', 'L'])).toMatchObject(expected);
  });

  test('Expected return [ ".......", "..!...*"] ', () => {
    const expected = ['.......', '..!...*'];
    expect(
      autonomousDrive(['..!....', '......*'], ['R', 'D', 'L'])
    ).toMatchObject(expected);
  });

  test('Expected return [".**.*.*.", ".***....", ".....!.."] ', () => {
    const expected = ['.**.*.*.', '.***....', '.....!..'];
    expect(
      autonomousDrive(
        ['.**.*.*.', '.***....', '..!.....'],
        ['D', 'U', 'R', 'R', 'R']
      )
    ).toMatchObject(expected);
  });
});
