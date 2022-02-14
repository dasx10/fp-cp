import type { AnyDef } from '../index.D';

function once <Executor extends AnyDef> (executor: Executor) {
    let isNoRun = true;
    return function useOnce (...args: Parameters<Executor>) {
        if (isNoRun) return isNoRun = false, executor(...args);
    }
}

export default once;
