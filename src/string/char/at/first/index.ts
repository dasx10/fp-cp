import type { FirstChar } from "./index.D";

function charAtFirst <Value extends string>(value: Value | String): FirstChar<Value> {
    return value[0] || '' as any;
}

export default charAtFirst;