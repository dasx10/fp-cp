import { FirstParameter } from "../../../dist/function/index.D";

type Param <R extends Record<PropertyKey, (v: any) => any | ((v?: any) => any)>> = {
  [Key in keyof R]?: FirstParameter<R[Key]>;
};

function where <
  Complex    extends Record<PropertyKey, (Key: any) => any>,
  Collection extends Param<Complex>[]
>(
  complex : Complex,
  array   : Collection,
): Collection {
  const { length } = array;
  let index = 0;
  const filtered = new Array() as Collection;
  loopList: while (index < length) {
      const element = array[index];
      checkProperty: for (const key in complex) {
          // @ts-ignore
          if (complex[key](element[key])) continue checkProperty;
          index++;
          continue loopList;
      }
      filtered.push(element);
      index++;
  }

  return filtered;
}

export default where;

const a = where({
  a: (e?: number ) => e && e > 2,
  b: (e: string) => e.length === 2
}, [{  }])
