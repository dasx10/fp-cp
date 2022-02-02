import { CharOf } from "./index.D";
declare function charAt<Value extends string>(index: number, value: Value | String): CharOf<Value>;
declare function charAt<Index extends number>(index: Index): (<Value extends string>(value: string) => CharOf<Value>) & {
    length: 1;
    name: 'useAtChar';
    arguments: {
        0: Index;
    };
};
export default charAt;
