import type { AnyDef } from "../index.D";

function loop (count = 2) {
    return function useLoop <Executor extends AnyDef>(executor: Executor, ...args: Parameters<Executor>) {
        let index = 0;
        const results = new Array(count);
        while (index < count) {
            results[index] = executor(...args);
            index++;
        }
        return results;
    }
}

export default loop;
