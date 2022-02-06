import curry from "../curry/index";
import type { TupleConsistent, TupleDifference } from "../../array/index.D";
import type { ArrayReverse } from "../../array/reverse/index.D";
import type { AnyFunction } from "../index.D";
import curry2 from "../curry/2/index";

type LastOmit<Tuple extends any[]> = ArrayReverse<Tuple> extends [infer F, ...infer P]
  ? ArrayReverse<P> : Tuple;

function wrap <
  Result = any,
  OriginalArgs extends any[] = any[],
  Args extends TupleConsistent<OriginalArgs> = TupleConsistent<OriginalArgs>,
>(executor: AnyFunction<OriginalArgs, Result>, ...argsExecutor: Args) {
  // @ts-ignore
  return Object.assign(curry(executor, ...argsExecutor), {
    _ <
      WrapResult,
      WrapArguments extends [Result] | [...any[], Result],
      Input extends LastOmit<WrapArguments>
    >(wrapper: AnyFunction<WrapArguments, WrapResult>, ...argsWrapper: Input) {
      // @ts-ignore
      return wrap((...last: TupleDifference<Args, OriginalArgs>) => wrapper(...argsWrapper, executor(...argsExecutor, ...last)))
    }
  })
}
