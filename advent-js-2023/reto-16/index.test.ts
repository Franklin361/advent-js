import { describe, expect, test } from 'vitest';
import { transformTree } from '.';

describe('Reto #16 👉 Despliegue en viernes', () => {
  test('Expected return type is an object', () => {
    expect(Object.prototype.toString.call(transformTree([1, 2, 3, 4, 5]))).toBe(
      '[object Object]'
    );
  });

  test('Expected return null', () => {
    expect(transformTree([])).toBeNull();
  });

  test('Expected return {value:1, left: null, right: null}', () => {
    const expected = {
      value: 1,
      left: null,
      right: null,
    };
    expect(transformTree([1])).toMatchObject(expected);
  });

  test('Expected return an object with 3 depth levels', () => {
    const expected = {
      value: 1,
      left: {
        value: 2,
        left: {
          value: 4,
          left: null,
          right: null,
        },
        right: {
          value: 5,
          left: null,
          right: null,
        },
      },
      right: {
        value: 3,
        left: null,
        right: null,
      },
    };
    expect(transformTree([1, 2, 3, 4, 5])).toMatchObject(expected);
  });

  test('Expected return an object with 3 depth levels', () => {
    const expected = {
      value: 2,
      left: {
        value: 7,
        left: null,
        right: {
          value: 6,
          left: {
            value: 1,
            left: null,
            right: null,
          },
          right: {
            value: 11,
            left: null,
            right: null,
          },
        },
      },
      right: {
        value: 5,
        left: null,
        right: {
          value: 9,
          left: null,
          right: {
            value: 10,
            left: null,
            right: null,
          },
        },
      },
    };

    expect(
      transformTree([
        2,
        7,
        5,
        null,
        6,
        null,
        9,
        null,
        null,
        1,
        11,
        null,
        null,
        null,
        10,
      ])
    ).toMatchObject(expected);
  });
});
