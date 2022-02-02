// /**
//  * @param {ReserveValue} reserveValue 
//  * @returns {<Executor extends ((...args: any) => any)> (executor: Executor, ...args: Parameters<Executor>) => NonNullable<ReturnType<Executor>> | ReserveValue}
//  * @template ReserveValue
//  */
// function reserve (reserveValue) {
//     return function useReserve (executor, ...args) {
//         // @ts-ignore
//         return executor(...args) || reserveValue;
//     }
// }

// module.exports = reserve;