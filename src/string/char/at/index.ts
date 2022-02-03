import { CharsOf } from "../sOf/index.D";

function charAt <Index extends number, Value extends string>(index: Index, value: Value | String): CharsOf<Value>[Index] extends undefined ? '' : CharsOf<Value>[Index];
function charAt <Index extends number>(index: Index): (<Value extends string>(value: string) => CharsOf<Value>[Index]);
function charAt (index: number, value?: string) {
    const isGteZero = index >= 0;
    if (value !== void 0) return value[isGteZero ? index : value.length - index] || ''
    return function useAtChar (value: string) {
        return value[isGteZero ? index : value.length - index] || '';
    }
}

export default charAt;
