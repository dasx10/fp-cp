import Array       from "../../../array";
import { CharOf }  from "../at/index.D";
import { CharsOf } from "./index.D";

function charsOf <Value extends string>(value: Value | String) {
    // @ts-ignore
    return Array.of<CharOf<Value>, CharsOf<Value>>(...value) as Array<CharOf<Value>, CharsOf<Value>>;
}


export default charsOf;