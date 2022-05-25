// /**
//  * 
//  * @param  {...any} keys 
//  * @returns {(any: any) => any}
//  */
// function omit (...keys) {
//     const { length } = keys;
//     return function useOmit (record) {
//         let index;
//         const omited = Object.create(record);
//         checkKey: for (const key in record) {
//             index = 0;
//             while (index < length) {
//                 if (key === keys[index]) continue checkKey;
//                 index++;
//             }
//             omited[key] = record[key];
//         }
//         return omited;
//     }
// }

// module.exports = omit;