/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
function add <X extends number>(x: X)
: <Y extends string | number>(y: Y) => Y extends number ? number : `${Y}${X}`;
function add <X extends string>(x: X): <Y extends string | number>(y: Y) => `${Y}${X}`;

function add <
  X extends number,
  Y extends number,
>(x: X, y: Y): number;

function add <
  X extends string | number,
  Y extends string | number,
>(x: X, y: Y): `${Y}${X}`;

function add <
  X extends string | number,
  Y extends string | number,
>(x: X, y?: Y) {
  // @ts-ignore
  if (arguments.length === 1) return <Y extends string | number>(y: Y) => x + y;
  // @ts-ignore
  return y + x;
}

export default add;
