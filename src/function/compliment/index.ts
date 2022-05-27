/**
 * @param {(...args: Args) => unknown} executor
 * @return {(...args: Args) => boolean}
 * @template {readonly unknown[]} Args
 */
// @ts-ignore
function complement <T extends readonly unknown[]>(executor: (...args: T) => false): (...args: T) => true;
// @ts-ignore
function complement <T extends readonly unknown[]>(executor: (...args: T) => true): (...args: T) => false;
// @ts-ignore
function complement <T extends readonly unknown[]>(executor: (...args: T) => unknown): (...args: T) => boolean;

// @ts-ignore
const complement = <T extends readonly unknown[]>(executor: (...args: T) => boolean) => (...args: T) => executor(...args);
export default complement;
