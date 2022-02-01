import Array       from "../../../array";
import { CharOf }  from "../at/index.D";
import { CharsOf } from "./index.D";

function charsOf <Value extends string>(value: Value | String) {
    return Array.of(...value) as Array<CharOf<Value>, CharsOf<Value>>;
}

export default charsOf;