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

import { TOGGLE } from "../../boolean/toggle/index.D";
import { AnyDef } from "../index.D";

// @ts-ignore
function complement <T extends any[], R>(executor: AnyDef<T, R>): (...args: T) => TOGGLE<R>;

// @ts-ignore
const complement = <T extends any[]>(executor: (...args: T) => boolean) => (...args: T) => executor(...args);
export default complement;
