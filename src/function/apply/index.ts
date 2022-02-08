import { AnyFunction } from '../index.D';

function apply <Executor extends AnyFunction>(executor: Executor) {
  return function useApply(args: Parameters<Executor>) {
    return executor(...args);
  };
}

export default apply;
