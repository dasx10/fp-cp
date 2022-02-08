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
// @ts-ignore
function complement <T extends any[]>(executor: (...args: T) => false): (...args: T) => true;
// @ts-ignore
function complement <T extends any[]>(executor: (...args: T) => true): (...args: T) => false;
// @ts-ignore
function complement <T extends any[]>(executor: (...args: T) => any): (...args: T) => boolean;

// @ts-ignore
const complement = <T extends any[]>(executor: (...args: T) => boolean) => (...args: T) => executor(...args);
export default complement;
