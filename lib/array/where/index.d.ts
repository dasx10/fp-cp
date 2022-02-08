import { FirstParameter } from "../../../dist/function/index.D";
declare type Param<R extends Record<PropertyKey, (v: any) => any | ((v?: any) => any)>> = {
    [Key in keyof R]?: FirstParameter<R[Key]>;
};
declare function where<Complex extends Record<PropertyKey, (Key: any) => any>, Collection extends Param<Complex>[]>(complex: Complex, array: Collection): Collection;
export default where;
