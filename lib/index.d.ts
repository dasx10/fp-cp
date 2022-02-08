import wrap from './function/wrap/index';
/**
 * ### Multiline placeholder
 */
export declare type __ = symbol | '…_ ← ƒ(…_, ← …×s) ⇒ ∏ ≡ ƒ(…×s): ∏';
declare const _: typeof wrap & {
    queryJson: <Url_1 extends string>(url: Url_1) => Record<string, string | true | (string | true)[]>;
    createObjectURL(obj: Blob | MediaSource): string;
    revokeObjectURL(url: string): void;
    MAX_VALUE: number;
    MIN_VALUE: number;
    NaN: number;
    NEGATIVE_INFINITY: number;
    POSITIVE_INFINITY: number;
    EPSILON: number;
    isFinite(number: unknown): boolean;
    isInteger(number: unknown): boolean;
    isNaN(number: unknown): boolean;
    isSafeInteger(number: unknown): boolean;
    MAX_SAFE_INTEGER: number;
    MIN_SAFE_INTEGER: number;
    parseFloat(string: string): number;
    parseInt(string: string, radix?: number | undefined): number;
    add: typeof import("./number/calc/add/index").default;
    fromCharCode(...codes: number[]): string;
    fromCodePoint(...codePoints: number[]): string;
    raw(template: {
        raw: readonly string[] | ArrayLike<string>;
    }, ...substitutions: any[]): string;
    chars: typeof import("./string/chars/index").default;
    charAt: typeof import("./string/char/at/index").default;
    toLowerCase: <Value extends string>(value: String | Value) => Lowercase<Value>;
    apply: {
        <T, R>(this: (this: T) => R, thisArg: T): R;
        <T_1, A extends any[], R_1>(this: (this: T_1, ...args: A) => R_1, thisArg: T_1, args: A): R_1;
    } & typeof import("./function/apply/index").default;
    compose: typeof import("./function/compose/index").default;
    constanta: typeof import("./function/const/index").default;
    curry: typeof import("./function/curry/index").default;
    loop: typeof import("./function/loop/index").default;
    once: typeof import("./function/once/index").default;
    partial: typeof import("./function/partial/index").default;
    pipe: typeof import("./function/pipe/index").default;
    isArray(arg: any): arg is any[];
    from<T_2>(arrayLike: ArrayLike<T_2>): T_2[];
    from<T_3, U>(arrayLike: ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U, thisArg?: any): U[];
    from<T_4>(iterable: Iterable<T_4> | ArrayLike<T_4>): T_4[];
    from<T_5, U_1>(iterable: Iterable<T_5> | ArrayLike<T_5>, mapfn: (v: T_5, k: number) => U_1, thisArg?: any): U_1[];
    of<T_6>(...items: T_6[]): T_6[];
    [Symbol.species]: ArrayConstructor;
    at: typeof import("./array/at/index").default;
    head: typeof import("./array/at/head/index").default;
    tail: typeof import("./array/at/tail/index").default;
    atRight: typeof import("./array/at/right/index").default;
    averageBy: typeof import("./array/average/by/index").default;
    averageOf: typeof import("./array/average/of/index").default;
    concat: typeof import("./array/concat/index").default;
    countOf: typeof import("./array/count/of/index").default;
    countBy: typeof import("./array/count/by/index").default;
    map: typeof import("./array/map/index").default;
    fill: typeof import("./array/fill/index").default;
    fillFull: typeof import("./array/fill/full/index").default;
    fillStart: typeof import("./array/fill/start/index").default;
    fillEnd: typeof import("./array/fill/end/index").default;
    filter: typeof import("./array/filter/index").default;
    find: typeof import("./array/find/index").default;
    findRight: typeof import("./array/find/right/index").default;
    findIndex: typeof import("./array/find/index/index").default;
    findIndexRight: typeof import("./array/find/index/right/index").default;
    forEach: typeof import("./array/forEach/index").default;
    forEachRight: typeof import("./array/forEach/right/index").default;
    groupBy: typeof import("./array/groupBy/index").default;
    indexOf: typeof import("./array/indexOf/index").default;
    lastIndexOf: typeof import("./array/indexOf/last/index").default;
    isEmpty: typeof import("./array/is/empty/index").default;
    join: typeof import("./array/join/index").default;
    joinUp: typeof import("./array/join/up/index").default;
    joinBy: typeof import("./array/join/by/index").default;
    keyBy: typeof import("./array/keyBy/index").default;
    limit: typeof import("./array/limit/index").default;
    maximumBy: typeof import("./array/maximum/by/index").default;
    maximumOf: typeof import("./array/maximum/of/index").default;
    minimumBy: typeof import("./array/minimum/by/index").default;
    minimumOf: typeof import("./array/minimum/of/index").default;
    partition: typeof import("./array/partition/index").default;
    reduce: typeof import("./array/reduce/index").default;
    reduceRight: typeof import("./array/reduce/right/index").default;
    [Symbol.iterator]: () => Generator<__, void, void>;
};
export default _;
