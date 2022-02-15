import { DefAny } from '../index.D';

function apply <Executor extends DefAny>(executor: Executor) {
  return function useApply(args: Parameters<Executor>) {
    return executor(...args);
  };
}

export default apply;
