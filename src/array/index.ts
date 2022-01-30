// static
import at                from "./at";
import head              from "./at/head";
import tail              from "./at/tail";
import atRight           from "./at/right";

import averageBy         from "./average/by";
import averageOf         from "./average/of";

import clone             from "./clone";
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

// context
import averageByContext  from "./average/by/context";
import countByContext    from "./count/by/context";
import countOfContext    from "./count/of/context";
import countOfAnyContext from "./count/of/any/context";
import mapContext        from "./map/context";

/**
 * @example
 * const myNumberArray = new Array(2); // Array<number> -> [empty, empty];
 * myNumberArray.push(2);
 * myNumberArray.push(3);
 * myNumberArray; // [2, 3];
 * 
 * const days = Array.of('san', 'mon', 'wen'); // Array<string> -> ['san', 'mon', 'wen'];
 */
class Array<T> extends global.Array<T> {
    static readonly at             = at;
    static readonly atRight        = atRight;
    static readonly head           = head;
    static readonly tail           = tail;
    static readonly averageBy      = averageBy;
    static readonly averageOf      = averageOf;
    static readonly clone          = clone;
    static readonly countOf        = countOf;
    static readonly countBy        = countBy;
    static readonly fillFull       = fillFull;
    static readonly fillStart      = fillStart;
    static readonly fillEnd        = fillEnd;
    static readonly fill           = fill;
    static readonly filter         = filter;
    static readonly find           = find;
    static readonly findRight      = findRight;
    static readonly findIndex      = findIndex;
    static readonly findIndexRight = findIndexRight;
    static readonly forEach        = forEach;
    static readonly forEachRight   = forEachRight;
    static readonly groupBy        = groupBy;
    static readonly indexOf        = indexOf;
    static readonly lastIndexOf    = lastIndexOf;
    static readonly isEmpty        = isEmpty;
    static readonly join           = join;
    static readonly joinUp         = joinUp;
    static readonly joinBy         = joinBy;
    static readonly keyBy          = keyBy;
    static readonly limit          = limit;
    static readonly map            = map;
    static readonly concat         = concat;

    static of <T extends any[]>(...args: T) {
        const { length } = args;
        const array = new this<T extends (infer U)[] ? U : any >(length);
        let index = 0;
        while (index < length) {
            array[index] = args[index];
            index++;
        }
        return array as Array<T extends (infer U)[] ? U : any> & T;
    }

    static from <T extends any[]>(fromArray: T) {
        const { length } = fromArray;
        const array = new this<T>(length);
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

    public averageBy  = averageByContext;
    // TODO averageOf
    public countBy    = countByContext;
    public countOf    = countOfContext;
    public countOfAny = countOfAnyContext;
    public map        = mapContext;

    // getter setter
    public get head () {
        return head(this) as T;
    }

    public set head (value) {
        if (this.length) this[0] = value;
    }

    public get tail () {
        return tail(this) as T;
    }

    public set tail (value) {
        if (this.length) this[length - 1] = value;
    }

    public get isEmpty () {
        return this.length === 0;
    }
}

export default Array;

export { default as at }        from "./at";
export { default as averageBy } from "./average/by";
export { default as averageOf } from "./average/of";
export { default as clone }     from "./clone";
export { default as concat }    from "./concat";
export { default as countBy }   from "./count/by";
export { default as countOf }   from "./count/of";
export { default as fill }      from "./fill";
export { default as filter }    from "./filter";
export { default as find }      from "./find";

export { default as map }       from "./map";