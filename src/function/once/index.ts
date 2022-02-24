import type { DefAny } from '../index.D';

function once <Executor extends DefAny> (executor: Executor) {
    let isNoRun = true;
    return function useOnce (...args: Parameters<Executor>) {
        if (isNoRun) return isNoRun = false, executor(...args);
    }
}

export default once;
