<<<<<<< HEAD
import type { Chars } from '../../../string/chars/index.D';
import type { Head }  from './index.D';


/**
 * @param {T[]} array
 * @return {T | undefined} return the first element of an array
 * @template T
 * @example
 * head([1, 2, 3, 4, 5]) // 1
 * head([0, 2, 3, 3, 4]) // 0
 */
function head <X extends any[]> (x: X): Head<X>;

/**
 * @param {string} string
 * @returns {string | undefined} return the first char of an string
 * @example
 * tail('user') // 'u'
 * tail('head') // 'h'
 */
function head <X extends string>(x: X): Head<Chars<X>>;

function head (x: any[] | string) {
=======
import { Chars } from '../../../string/chars/index.D';
import { Head } from './index.D';

function head <X extends any[]>(x: X): Head<X>;
function head <X extends string>(x: X): Head<Chars<X>>;
function head (x: string | any[]) {
>>>>>>> 4bb63769e5dbc2d27c8ab0f3e6f3629910d82340
  return x[0];
}

export default head;
