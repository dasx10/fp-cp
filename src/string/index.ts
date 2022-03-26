
import filter  from './filter/index';
import map     from './map/index';

import split   from './split/index';
import chars   from './chars/index';

import numeric from './numeric/index';

import size    from './size/index';


function string (): '';
function string <X extends string>(x: X): X;
function string <X extends number | bigint | boolean>(x: X): `${X}`;
function string <X extends null | undefined>(x: X): '';
function string (x: unknown): string;
function string (x?: unknown) {
  switch (x) {
    case void 0 :
    case null   : return '';
    default     : return String(x);
  }
}

export default Object.assign(string, {
  // iterate
  filter,
  map,

  split,
  chars,

  numeric,

  size,
  // right: true,
});
