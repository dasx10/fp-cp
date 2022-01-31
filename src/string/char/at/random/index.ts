import { CharOf } from "../index.D";

function charAtRandom <Value extends string>(value: Value | String): CharOf<Value> {
    return value[0];
}

export default charAtRandom;