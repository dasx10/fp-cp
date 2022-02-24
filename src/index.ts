/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/naming-convention */
import def    from './function/index';
import array  from './array/index';
import string from './string/index';
import number from './number/index';
<<<<<<< HEAD
import Url    from './url/index';
import wrap   from './function/wrap/index';

=======
import Url from './url/index';
import wrap from './function/wrap/index';
import is from './is/index';
>>>>>>> 4bb63769e5dbc2d27c8ab0f3e6f3629910d82340
/**
 * #### Multiline placeholder
 */
export type ___ = symbol | '…_ ← ƒ(…_, ← …×s) ⇒ ∏ ≡ ƒ(…×s): ∏';
export const ___ = Symbol.for('ƒ(…, ') as ___;

/**
 * #### Placeholder
 */
export type placeholder = typeof _;

const _ = Object.assign(wrap, {
  [Symbol.iterator]: function* PlaceholderIterator(): Generator<___, void, void> {
    yield ___;
  },
  is,
  ...array,
  ...def,
  ...string,
  ...number,
  ...Url
});

export default _;


const a = _.add(_, 2)
