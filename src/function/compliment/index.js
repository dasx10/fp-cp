// /**
//  * @param {Executor} executor
//  * @return {(...args: Parameters<Executor>) => boolean}
//  * @template {(...args: any) => any} Executor
//  */
// function complement (executor) {
//     return function useComplement (...args) {
//         // @ts-ignore
//         return !executor(...args);
//     }
// }

// module.exports = complement;