/* eslint-disable no-void */
/* eslint-disable no-plusplus */
import Array from '../index';
import type { ArrayType } from '../index.D';

type ArrayDefined<Tuple extends any[], Filtered extends any[] = []> = Tuple extends [infer F, ...infer N]
  ? F extends (undefined | void)
    ? ArrayDefined<N, Filtered>
    : ArrayDefined<N, [...Filtered, F]>
  : Filtered extends [] ? Tuple : Filtered;

type ArrayFiltered<Type, Tuple extends any[], Filtered extends any[] = []> = Tuple extends [infer F, ...infer N]
  ? Type extends F
    ? ArrayFiltered<Type, N, [...Filtered, F]>
    : F extends Type
      ? ArrayFiltered<Type, N, [...Filtered, F]>
      : ArrayFiltered<Type, N, Filtered>
  : Filtered extends []
    ? Tuple extends (infer T)[]
      ? T extends Type ? Tuple
        : Type extends T ? (Type)[]
          : Filtered : Filtered : Filtered;

type Defined<T> = T extends undefined ? never : T;

function rewrite <T, R>(executor: (element: T, index: number, array: T[]) => R) {
  return function useExecutor <A extends T[]>(array: A) {
    const { length } = array;
    const rewrote = new Array<Defined<R>>();
    let index = 0;
    while (index < length) {
      const result = executor(array[index], index, array);
      if (result !== void 0) rewrote.push(result as Defined<R>);
      index++;
    }
    return rewrote;
  };
}

export default rewrite;
