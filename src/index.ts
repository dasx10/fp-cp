import def from './function/index';
import lib from './lib/index';

/**
 * #### Multiline placeholder
 */
export type  ___     = symbol | '…_ ← ƒ(…_, ← …×) ⇒ ∏ ≡ ƒ(…×): ∏';
export const ___:___ = Symbol.for('ƒ(…, ') as ___;

/**
 * #### Placeholder
 */
export type __ = typeof _;

const _ = Object.assign(def, {
  [Symbol.iterator]: function* PlaceholderIterator(): Generator<___, void, void> {
    yield ___;
  },
}, lib);

export default _;
