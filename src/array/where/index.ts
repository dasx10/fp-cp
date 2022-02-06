// /**
//  * @param {Record<PropertyKey, (el: any) => any>} complex
//  * @returns {(array: ArrayElement[]) => ArrayElement[]}
//  * @template ArrayElement
//  */
// function where (complex) {
//     return function useWhere (array) {
//         const { length } = array;
//         let index = 0;
//         const filtered = new Array();
//         loopList: while (index < length) {
//             const element = array[index];
//             checkProperty: for (const key in complex) {
//                 // @ts-ignore
//                 if (complex[key](element[key])) continue checkProperty;
//                 index++;
//                 continue loopList;
//             }
//             filtered.push(element);
//             index++;
//         }

//         return filtered;
//     }
// }

// module.exports = where;

function where <
  Complex extends Record<PropertyKey, (el: any) => boolean>,
  Collection extends Partial<Record<keyof Complex, any>>[]
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

const a = where({
  a: (e: number) => e >= 0,  
}, [{}])


type E <R extends Record<string, any>> = {
  [K in keyof R]: [K, R[K]];
}

type Entryes<R extends Record<string, any>> = E<R>[keyof R][]


type CapitalizeKeys <R extends Record<string, any>> = keyof R extends string ? {
  [K in keyof R]: Record<Capitalize<K>, R[K]>
}[keyof R] : R;


const a22: CapitalizeKeys<{a: 2, b: 'tets'}> = {
  A: 2,
  B: 'tets'
};
