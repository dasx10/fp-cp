// /**
//  * 
//  * @param {number} minimum 
//  * @param {number} maximum 
//  * @returns {(value: number) => number}
//  */
// function outOfRange (minimum, maximum) {
//     return function useOutOfRange (value) {
//         if (value < minimum || value > maximum) return value;
//         if (value - minimum > maximum - value) return maximum;
//         return minimum;
//     }
// }

// module.exports = outOfRange;