/**
 * @param {number} from 
 * @returns {(value: number) => boolean}
 * @example 
 * const eq4 = eq(4);
 * eq4(4); // true
 * eq4(3); // false
 * eq4(2); // false
 */


function isEq <Y extends number, X extends number>(y: Y, x: X): IS_EQUALS_NUMBERS<Y, X>;
function isEq <Y extends number> (y: Y): {
  <X extends number>(x: X): IS_EQUALS_NUMBERS<Y, X>;
  (x: unknown): x is Y
}

function isEq <Y extends string, X extends string>(y: Y, x: X): string extends Y 
? boolean
: string extends X
  ? boolean
  : Y extends X ? true : false;

function isEq (y: unknown, x?: unknown) {
  if (arguments.length === 1) return (x: unknown) => x === y;
  return x === y;
}

export default isEq;
