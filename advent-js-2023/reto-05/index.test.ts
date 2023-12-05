import { describe, expect, test } from 'vitest';
import { cyberReindeer } from '.';

describe('Reto #5 👉 El CyberTruck de Santa', () => {
  test('Expected return type is an array', () => {
    expect(Array.isArray(cyberReindeer('', 0))).toBeTruthy();
  });

  test('Expected result a array with 10 string elements', () => {
    const road = 'S..|...|..';
    const time = 10; // unidades de tiempo
    const resultGotIt = cyberReindeer(road, time);

    const resultExpected = [
      'S..|...|..', // estado inicial
      '.S.|...|..', // avanza el trineo la carretera
      '..S|...|..', // avanza el trineo la carretera
      '..S|...|..', // el trineo para en la barrera
      '..S|...|..', // el trineo para en la barrera
      '...S...*..', // se abre la barrera, el trineo avanza
      '...*S..*..', // avanza el trineo la carretera
      '...*.S.*..', // avanza el trineo la carretera
      '...*..S*..', // avanza el trineo la carretera
      '...*...S..', // avanza por la barrera abierta
    ];

    expect(resultGotIt).toMatchObject(resultExpected);
    expect(resultGotIt.length).toBe(resultExpected.length);
  });

  test('Expected result a array with 4 string elements', () => {
    const resultGotIt = cyberReindeer('S.|.', 4);

    const resultExpected = ['S.|.', '.S|.', '.S|.', '.S|.'];

    expect(resultGotIt).toMatchObject(resultExpected);
    expect(resultGotIt.length).toBe(resultExpected.length);
  });

  test('Expected result a array with 6 string elements', () => {
    const resultGotIt = cyberReindeer('S.|..', 6);

    const resultExpected = [
      'S.|..',
      '.S|..',
      '.S|..',
      '.S|..',
      '.S|..',
      '..S..',
    ];

    expect(resultGotIt).toMatchObject(resultExpected);
    expect(resultGotIt.length).toBe(resultExpected.length);
  });
});
