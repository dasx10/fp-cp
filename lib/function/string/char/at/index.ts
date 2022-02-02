import { CharOf } from "./index.D";

function charAt <Value extends string>(index: number, value: Value | String): CharOf<Value>;
function charAt <Index extends number>(index: Index): (<Value extends string>(value: string) => CharOf<Value>) & {
    length   : 1,
    name     : 'useAtChar',
    arguments: {
        0: Index
    },
};

function charAt (index: number, value?: string) {
    const isGteZero = index >= 0;
    if (value !== void 0) return value[isGteZero ? index : value.length - index] || ''
    return function useAtChar (value: string) {
        return value[isGteZero ? index : value.length - index] || '';
    }
}

export default charAt;