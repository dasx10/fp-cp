import Array from "./array";
export { default as Array } from "./array";
declare const _: (() => void) & {
    at: typeof import("./array/at/index").default;
    atRight: typeof import("./array/at/right/index").default;
    head: typeof import("./array/at/head/index").default;
    tail: typeof import("./array/at/tail/index").default;
    averageBy: typeof import("./array/average/by/index").default;
    averageOf: typeof import("./array/average/of/index").default;
    concat: typeof import("./array/concat/index").default;
    countOf: typeof import("./array/count/of/index").default;
    countBy: typeof import("./array/count/by/index").default;
    fillFull: typeof import("./array/fill/full/index").default;
    fillStart: typeof import("./array/fill/start/index").default;
    fillEnd: typeof import("./array/fill/end/index").default;
    fill: typeof import("./array/fill/index").default;
    filter: typeof import("./array/filter/index").default;
    find: typeof import("./array/find/index").default;
    findRight: typeof import("./array/find/right/index").default;
    findIndex: typeof import("./array/find/index").default;
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
    map: typeof import("./array/map/index").default;
    reduce: typeof import("./array/reduce/index").default;
    reduceRight: typeof import("./array/reduce/right/index").default;
    isArray(arg: any): arg is any[];
    [Symbol.species]: ArrayConstructor;
    [Symbol.iterator]: () => Generator<undefined, void, unknown>;
    Array: typeof Array;
};
export default _;