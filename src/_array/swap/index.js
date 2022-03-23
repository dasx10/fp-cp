// /**
//  * @param {Array<number>} indexes
//  * @returns {<ArrayElement>(array: Array<ArrayElement>) => Array<ArrayElement>} `SwappedArray<ArrayElement>`
//  * @example 
//  * const myArray = [1, 2, 3];
//  * swap(myArray); // [3, 2, 1];
//  * console.log(myArray); // [1, 2, 3];
//  */
// function swap (...indexes) {
//     const { length } = indexes;
//     return function (array) {
//         let index = 0;
//         const arrayLength = array.length;
//         const cloned = new Array(arrayLength);
//         while (index < arrayLength) {
//             cloned[index] = array[index];
//             index++;
//         }

//         index = 0;
//         while (index < length) {
//             const swapIndex1 = indexes[index];
//             const swapIndex2 = indexes[index + 1];
//             if (swapIndex2 >= 0) {
//                 [cloned[swapIndex1], cloned[swapIndex2]] = [cloned[swapIndex2], cloned[swapIndex1]];
//                 index++;
//             }
//             break;
//         }
//         return cloned;
//     }
// }

// module.exports = swap;