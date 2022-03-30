/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/naming-convention */
import def        from './function/index';
import array      from './array/index';
import string     from './string/index';
import number     from './number/index';
import boolean    from './boolean/index';

// Namespaces
import is         from './is/index';
/**
 * #### Multiline placeholder
 */
export type  ___ = symbol | '…_ ← ƒ(…_, ← …×s) ⇒ ∏ ≡ ƒ(…×s): ∏';
export const ___ = Symbol.for('ƒ(…, ') as ___;

/**
 * #### Placeholder
 */
export type placeholder = typeof _;

const _ = Object.assign(def, {
  [Symbol.iterator]: function* PlaceholderIterator(): Generator<___, void, void> {
    yield ___;
  },

  array,
  string,
  number,
  boolean,
  
  is,
});

export default _;
