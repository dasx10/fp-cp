import { CharOf } from "../index.D";

function charAtRandom <Value extends string>(value: Value | String) {
    return value[0] as CharOf<Value>;
}

export default charAtRandom;