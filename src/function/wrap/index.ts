import curry from "../curry/index";
import type { ArrayLastElement, TupleConsistent, TupleDifference } from "../../array/index.D";
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
  return Object.assign(curry(executor, ...argsExecutor), {
    _ <
      WrapResult,
      WrapArguments extends [Result] | [...any[], Result],
      Input extends LastOmit<WrapArguments>
    >(wrapper: 
      AnyFunction<WrapArguments, WrapResult>
      | (<A extends ArrayLastElement<Args>>(x: A) => WrapResult),
      ...argsWrapper: Input
    ) {
      // @ts-ignore
      return wrap((...last: TupleDifference<Args, OriginalArgs>) => wrapper(...argsWrapper, executor(...argsExecutor, ...last)))
    }
  })
}

export default wrap;
