export { default as Array } from "./array";
declare const _: (() => void) & {
    at: typeof import("./array/at").default;
    atRight: typeof import("./array/at/right").default;
    head: typeof import("./array/at/head").default;
    tail: typeof import("./array/at/tail").default;
    averageBy: typeof import("./array/average/by").default;
    averageOf: typeof import("./array/average/of").default;
    concat: typeof import("./array/concat").default;
    countOf: typeof import("./array/count/of").default;
    countBy: typeof import("./array/count/by").default;
    fillFull: typeof import("./array/fill/full").default;
    fillStart: typeof import("./array/fill/start").default;
    fillEnd: typeof import("./array/fill/end").default;
    fill: typeof import("./array/fill").default;
    filter: typeof import("./array/filter").default;
    find: typeof import("./array/find").default;
    findRight: typeof import("./array/find/right").default;
    findIndex: typeof import("./array/find").default;
    findIndexRight: typeof import("./array/find/index/right").default;
    forEach: typeof import("./array/forEach").default;
    forEachRight: typeof import("./array/forEach/right").default;
    groupBy: typeof import("./array/groupBy").default;
    indexOf: typeof import("./array/indexOf").default;
    lastIndexOf: typeof import("./array/indexOf/last").default;
    isEmpty: typeof import("./array/is/empty").default;
    join: typeof import("./array/join").default;
    joinUp: typeof import("./array/join/up").default;
    joinBy: typeof import("./array/join/by").default;
    keyBy: typeof import("./array/keyBy").default;
    limit: typeof import("./array/limit").default;
    maximumBy: typeof import("./array/maximum/by").default;
    maximumOf: typeof import("./array/maximum/of").default;
    minimumBy: typeof import("./array/minimum/by").default;
    minimumOf: typeof import("./array/minimum/of").default;
    partition: typeof import("./array/partition").default;
    map: typeof import("./array/map").default;
    reduce: typeof import("./array/reduce").default;
    reduceRight: typeof import("./array/reduce/right").default;
    isArray(arg: any): arg is any[];
    [Symbol.species]: ArrayConstructor;
    [Symbol.iterator]: () => Generator<undefined, void, unknown>;
};
export default _;
