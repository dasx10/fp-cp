// /**
//  * @param {number} time 
//  * @returns {<Executor extends (...args: any[]) => any>(executor: Executor, ...args: Parameters<Executor>) => ReturnType<setTimeout>}
//  */
// function debounce (time) {
//     /**
//      * @type {NodeJS.Timeout}
//      */
//     let timer;
//     return function useDebounce (executor, ...args) {
//         clearTimeout(timer);
//         timer = setTimeout(executor, time, ...args);
//         return timer;
//     }
// }

// module.exports = debounce;