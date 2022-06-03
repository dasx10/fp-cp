import config from './config/index';
import def    from './function/index';
import lib    from './lib/index';

/**
 * #### Multiline placeholder
 * …_ ← ƒ(…_, ← …×) ⇒ ∏ ≡ ƒ(…×): ∏
 */
export type  ___     = symbol | '…_ ← ƒ(…_, ← …×) ⇒ ∏ ≡ ƒ(…×): ∏';
export const ___:___ = Symbol.for('ƒ(…, ') as ___;

/**
 * #### Placeholder
 * _ ← ƒ(_, ← …×) ⇒ ∏ ≡ ƒ(Y, …×): ∏
 */
export type __ = typeof _;

const _ = Object.assign(def, config, lib);

export default _;
