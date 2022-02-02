// static
import at                from "./at";
import head              from "./at/head";
import tail              from "./at/tail";
import atRight           from "./at/right";

import averageBy         from "./average/by";
import averageOf         from "./average/of";

// import clone             from "./clone";
import concat            from "./concat";
import countOf           from "./count/of";
import countBy           from "./count/by";
import map               from "./map";

import fill              from "./fill";
import fillFull          from "./fill/full";
import fillStart         from "./fill/start";
import fillEnd           from "./fill/end";

import filter            from "./filter";

import find              from "./find";
import findRight         from "./find/right";
import findIndex         from "./find/index";
import findIndexRight    from "./find/index/right";

import forEach           from "./forEach";
import forEachRight      from "./forEach/right";
import groupBy           from "./groupBy";
import indexOf           from "./indexOf";
import lastIndexOf       from "./indexOf/last";
import isEmpty           from "./is/empty";
import join              from "./join";
import joinUp            from "./join/up";
import joinBy            from "./join/by";
import keyBy             from "./keyBy";
import limit             from "./limit";
import maximumBy         from "./maximum/by";
import maximumOf         from "./maximum/of";
import minimumBy         from "./minimum/by";
import minimumOf         from "./minimum/of";
import partition         from "./partition";
import reduce            from "./reduce";
import reduceRight       from "./reduce/right";

// context
import averageByContext  from "./average/by/context";
import countByContext    from "./count/by/context";
import countOfContext    from "./count/of/context";
import countOfAnyContext from "./count/of/any/context";
import mapContext        from "./map/context";
import maximumByContext  from "./maximum/by/context";
import minimumByContext  from "./minimum/by/context";

//
import { ArrayFirstElement, ArraySecondElement } from "./index.D";

/**
 * @example
 * const myNumberArray = new Array(2); // Array<number> -> [empty, empty];
 * myNumberArray.push(2);
 * myNumberArray.push(3);
 * myNumberArray; // [2, 3];
 * 
 * const days = Array.of('san', 'mon', 'wen'); // Array<string> -> ['san', 'mon', 'wen'];
 */

// @ts-ignore

export type ExtractPredicate<T extends Array<any, any[]>> = T extends Array<infer T, infer P> ? P : T extends Array<infer T> ? T[] : never;

class Array<T, Predicate extends T[] = T[]> extends globalThis.Array<T> {
    // @ts-ignore
    // public at<Value extends number>(index: Value): Predicate extends [infer F, ...infer N] ? Predicate[Value] : (T | void);

    // static readonly at             = at;
    // static readonly atRight        = atRight;
    // static readonly head           = head;
    // static readonly tail           = tail;
    // static readonly averageBy      = averageBy;
    // static readonly averageOf      = averageOf;
    // static readonly clone          = clone;
    // static readonly concat         = concat;
    // static readonly countOf        = countOf;
    // static readonly countBy        = countBy;
    // static readonly fillFull       = fillFull;
    // static readonly fillStart      = fillStart;
    // static readonly fillEnd        = fillEnd;
    // static readonly fill           = fill;
    // static readonly filter         = filter;
    // static readonly find           = find;
    // static readonly findRight      = findRight;
    // static readonly findIndex      = findIndex;
    // static readonly findIndexRight = findIndexRight;
    // static readonly forEach        = forEach;
    // static readonly forEachRight   = forEachRight;
    // static readonly groupBy        = groupBy;
    // static readonly indexOf        = indexOf;
    // static readonly lastIndexOf    = lastIndexOf;
    // static readonly isEmpty        = isEmpty;
    // static readonly join           = join;
    // static readonly joinUp         = joinUp;
    // static readonly joinBy         = joinBy;
    // static readonly keyBy          = keyBy;
    // static readonly limit          = limit;
    // static readonly maximumBy      = maximumBy;
    // static readonly maximumOf      = maximumOf;
    // static readonly minimumBy      = minimumBy;
    // static readonly minimumOf      = minimumOf;
    // static readonly partition      = partition;
    // static readonly map            = map;
    // static readonly reduce         = reduce;
    // static readonly reduceRight    = reduceRight;

    public static of <T extends any[]>(...args: T) {
        const { length } = args;
        const array = new this<T extends (infer U)[] ? U : any, T>(length);
        let index = 0;
        while (index < length) {
            array[index] = args[index];
            index++;
        }
        return array;
    }

    public static from <T extends any[]>(fromArray: T) {
        const { length } = fromArray;
        const array = new this<T extends (infer U)[] ? U : any, T>(length);
        let index = 0;
        while (index < length) {
            array[index] = fromArray[index];
            index++;
        }
        return array;
    }

    constructor (length: number = 0) {
        super(length);
    }

    // numbers
    public averageBy  = averageByContext;
    // TODO averageOf
    public countBy    = countByContext;
    public countOf    = countOfContext;
    public countOfAny = countOfAnyContext;
    public maximumBy  = maximumByContext;
    public minimumBy  = minimumByContext;

    // universal
    // public map        = mapContext;
    // public map <R>(executor: (element: T, index: number, array: Array<T>) => R) {
    //     const { length } = this;
    //     const mapped = new Array<R>(length);
    //     let index = 0;
    //     while (index < length) {
    //         mapped[index] = executor(this[index], index, this);
    //         index++;
    //     }
    //     return mapped;
    // }

    // getter setter
    get length (): Predicate['length'] {
        return this.length;
    }

    public get head (): Predicate[0] {
        return this[0];
    }

    public get tail (): ArraySecondElement<Predicate> {
        return tail(this) as ArraySecondElement<Predicate>;
    }

    public get isEmpty (): boolean {
        return this.length === 0;
    }

    public get isNoEmpty (): boolean {
        return this.length > 0;
    }

    public get isUniq (): boolean {
        return new Set(this).size === this.length; 
    }

    public get uniq (): Array<T, T[]> {
        return Array.of(...new Set<T>(this));
    }
}

export default Array;

export { default as at }        from "./at";
export { default as averageBy } from "./average/by";
export { default as averageOf } from "./average/of";
// export { default as clone }     from "./clone";
export { default as concat }    from "./concat";
export { default as countBy }   from "./count/by";
export { default as countOf }   from "./count/of";
export { default as fill }      from "./fill";
export { default as filter }    from "./filter";
export { default as find }      from "./find";

export { default as map }       from "./map";