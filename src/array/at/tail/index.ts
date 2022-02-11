import type { Chars } from '../../../string/chars/index.D';

/**
 * @param {T[]} array
 * @return {T | undefined} return the last element of an array
 * @template T
 * @example
 * tail([1, 2, 3, 4, 5]) // 5
 * tail([1, 2, 3, 3, 4]) // 4
 */
function tail <X extends any[]>(array: X): Tail<X>;

/**
 * @param {string} string
 * @returns {string | undefined} return the last char of an string
 * @example
 * tail('user') // 'r'
 * tail('tail') // 'l'
 */
function tail <X extends string>(string: X): Tail<Chars<X>>;

function tail (x: string| any[]) {
  return x[x.length - 1];
}

export default tail;
