// /**
//  * @param {Array<number>} indexes 
//  * @returns {<ArrayElement>(array: Array<ArrayElement>) => Array<ArrayElement>} `SelectedArray<ArrayElement>`
//  */
// function select (...indexes) {
//     const { length } = indexes;
//     return function useSelect (array) {
//         const selectedArray = new Array(length);
//         let index = 0;
//         while (index < length) {
//             selectedArray[index] = array[indexes[index]];
//             index++;
//         }
//         return selectedArray;
//     }
// }

// module.exports = select;