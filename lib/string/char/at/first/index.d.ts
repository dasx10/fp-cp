import type { FirstChar } from "./index.D";
declare function charAtFirst<Value extends string>(value: Value | String): FirstChar<Value>;
export default charAtFirst;
