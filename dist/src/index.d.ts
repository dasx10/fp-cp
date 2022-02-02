import { map } from "./array";
declare const _: (() => void) & {
    [Symbol.iterator]: () => Generator<undefined, void, unknown>;
    map: typeof map;
};
export default _;
