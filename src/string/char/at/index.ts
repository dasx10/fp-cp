import { CharOf } from "./index.D";

function charAt <Value extends string>(index: number, value: Value | String): CharOf<Value>;
function charAt <Index extends number>(index: Index): <Value extends string>(value: string) => CharOf<Value>;
function charAt (index: number, value?: string) {
    const isGteZero = index >= 0;
    return arguments.length === 1
      ? (value: string) => value[isGteZero ? index : value.length - index]
      // @ts-ignore
      : value[isGteZero ? index : value.length - index];
}

export default charAt;
