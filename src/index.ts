import def       from './function/index';
import arrayCore from './array/index';
import string  from './string/index';
import number  from './number/index';
import boolean from './boolean/index';

// Namespaces
import is      from "./is/index";
import logic   from './logic/index';

// Advanced
import hashMap from './hash/map/index';
import hashSet from './hash/set/core/index';

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

  array: arrayCore,
  string,
  number,
  boolean,

  is,
	logic,

	hashMap,
	hashSet,
});

export default _;
