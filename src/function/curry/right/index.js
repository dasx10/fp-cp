// const reverse = require("../../../array/reverse");

// /**
//  * @param {Executor & ((...startArguments: any[]) => any)} executor 
//  * @param  {any[]} startArguments
//  * @returns {ReturnType<Executor> | ((...nextArguments: any[]) => ReturnType<Executor>)}
//  * @template Executor
//  */
// function curryRight (executor, ...startArguments) {
//     // @ts-ignore
//     if (startArguments.length < executor.length) return function useCurryRight (...nextArguments) {
//         return curryRight(executor, ...startArguments, ...nextArguments);
//     }

//     return executor(...reverse(startArguments));
// }

// module.exports = curryRight;