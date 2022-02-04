import curry from "../curry/index";
import type { TupleConsistent, TupleDifference } from "../../array/index.D";
import type { ArrayReverse } from "../../array/reverse/index.D";
import type { AnyFunction } from "../index.D";

type LastOmit<Tuple extends any[]> = ArrayReverse<Tuple> extends [infer F, ...infer P]
  ? ArrayReverse<P> : Tuple;

function wrap <
  Result = any,
  OriginalArgs extends any[] = any[],
  Args extends TupleConsistent<OriginalArgs> = TupleConsistent<OriginalArgs>,
>(executor: AnyFunction<OriginalArgs, Result>, ...argsExecutor: Args) {
  // @ts-ignore
  const binned = (...next: TupleDifference<Args, OriginalArgs>): Result => executor(...argsExecutor, ...next);
  return Object.assign(curry(binned), {
    _ <
      WrapResult,
      WrapArguments extends [...any[], Result],
    >(wrapper: AnyFunction<WrapArguments, WrapResult>, ...argsWrapper: LastOmit<WrapArguments>) {
      // @ts-ignore
      return wrap((...last: TupleDifference<Args, OriginalArgs>) => wrapper(...argsWrapper, binned(...last)))
    }
  })
}

const as = (a: number, b: number) => a + b;

const b = wrap(as)
  ._(as, 2)
  ._(as, 3)(2)
