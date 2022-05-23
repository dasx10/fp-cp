/**
 * @param {(...args: Args) => any} executor
 * @return {(...args: Args) => boolean}
 * @template {any[]} Args
 */
// @ts-ignore
function complement <T extends unknown[]>(executor: (...args: T) => false): (...args: T) => true;
// @ts-ignore
function complement <T extends unknown[]>(executor: (...args: T) => true): (...args: T) => false;
// @ts-ignore
function complement <T extends unknown[]>(executor: (...args: T) => unknown): (...args: T) => boolean;

// @ts-ignore
const complement = <T extends unknown[]>(executor: (...args: T) => boolean) => (...args: T) => executor(...args);
export default complement;
