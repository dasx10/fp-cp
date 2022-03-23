import { IS_NEGATIVE } from "./index.D";

function isNegative <Value extends number>(value: Value): IS_NEGATIVE<Value>;
function isNegative (value: unknown): value is number;
function isNegative (value: unknown) {
    return <any>value < 0;
}

export default isNegative;
