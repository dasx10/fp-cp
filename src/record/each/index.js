// /**
//  * 
//  * @param {(element: InputRecord[keyof InputRecord], key: string, record: InputRecord) => any} executor 
//  * @returns {(record: InputRecord) => void}
//  * @template {Record<string, any>} InputRecord
//  */
// function each (executor) {
//     return function useEach (record) {
//         for (const key in record) {
//             executor(record[key], key, record);
//         }
//     }
// }

// module.exports = each;