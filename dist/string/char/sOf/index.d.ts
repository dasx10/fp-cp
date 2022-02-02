import Array from "../../../array";
import { CharOf } from "../at/index.D";
import { CharsOf } from "./index.D";
declare function charsOf<Value extends string>(value: Value | String): Array<CharOf<Value>, CharsOf<Value>>;
export default charsOf;
