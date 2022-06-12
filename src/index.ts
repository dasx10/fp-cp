import config from './config/index';
import def    from './function/index';
import lib    from './lib/index';

/**
 * #### Placeholder
 * _ ← ƒ(_, ← …×) ⇒ ∏ ≡ ƒ(Y, …×): ∏
 */
export type __ = typeof _;

const _ = Object.assign(def, config, lib);

export default _;
