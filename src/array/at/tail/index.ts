<<<<<<< HEAD
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
=======
import { Chars } from "../../../string/chars/index.D";
import { Tail } from "./index.D";

function tail <X extends readonly any[]> (x: X): Tail<X>; 
function tail <X extends string> (x: X): Tail<Chars<X>>;
function tail (x: string | any[]) {
>>>>>>> 4bb63769e5dbc2d27c8ab0f3e6f3629910d82340
  return x[x.length - 1];
}

export default tail;
