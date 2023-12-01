/**
 * Reto #1 Primer regalor repetido
 * https://adventjs.dev/es/challenges/2023/1
 */

export function findFirstRepeated(gifts: number[]) {
  const newGifts = new Set<number>();

  for (const gift of gifts) {
    if (newGifts.has(gift)) return gift;

    newGifts.add(gift);
  }

  return -1;
}

/**
 * Other option that i could use
 *
 
  function findFirstRepeated(gifts) {
  
    const newGifts = {}

    for( const gift of gifts ) {
      if(newGifts[gift] ) {
        return gift
      }
      newGifts[gift] = 1
    }
    return -1
  }  
 */
