// /**
//  * 
//  * @param {(element: ArrayElement, index: number, array: ArrayElement[]) => number} executor 
//  * @returns {(array: ArrayElement[]) => number}
//  * @template ArrayElement
//  */
// function sumBy (executor) {
//     return function useSumBy(array) {
//         let index = 0;
//         const { length } = array;
//         let result = 0;
//         while (index < length) {
//             result += executor(array[index], index, array);
//             index++;
//         }
//         return result;
//     }
// }

// module.exports = sumBy;