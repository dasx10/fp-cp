import { CharAt } from "./index.D";

function charAt <Index extends number, Value extends string>(index: Index, value: Value): CharAt<Value, Index>;
function charAt <Index extends number>(index: Index): <Value extends string>(value: Value) => CharAt<Value, Index>;
function charAt (index: number, value?: string) {
    const isGteZero = index >= 0;
    return arguments.length === 1
      ? (value: string) => value[isGteZero ? index : value.length - index]
      // @ts-ignore
      : value[isGteZero ? index : value.length - index];
}

export default charAt;


const a = charAt(1, '  ');
