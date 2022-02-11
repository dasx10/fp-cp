/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/naming-convention */
import def    from './function/index';
import array  from './array/index';
import string from './string/index';
import number from './number/index';
import Url    from './url/index';
import wrap   from './function/wrap/index';

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
  ...array,
  ...def,
  ...string,
  ...number,
  ...Url
});

export default _;


const a = _.add(_, 2)
