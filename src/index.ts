/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/naming-convention */
import def    from './function/index';
import array  from './array/index';
import string from './string/index';
import number from './number/index';
/**
 * ### Multiline placeholder
 */
export type __ = symbol | '…_ ← ƒ(…_, ← …×s) ⇒ ∏ ≡ ƒ(…×s): ∏';
/**
 * ### Multiline placeholder
 * `…_ ← ƒ (…_, ← …×s) ⇒ ∏ ≡ ƒ (…×s): ∏`
 *
 * ----
 * 
 * `ƒ(x, y, z) ⇒ ∏` `↔` `(…_, z) ⇒ ƒ(x, y) ⇒ ∏`
 */
const ___ = Symbol.for('__') as __;

const _ = Object.assign(() => undefined, {
  [Symbol.iterator]: function* PlaceholderIterator(): Generator<__, void, void> {
    yield ___;
  },
  ...array,
  ...def,
  ...string,
  ...number,
});

export default _;



Math.PI
