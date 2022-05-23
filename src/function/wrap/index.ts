import curry from "../curry/index";
import type { DefAny }          from "../index.D";
import type { TupleConsistent } from "../../../backup/array/index.D";
import type { ArrayReverse }    from "../../../backup/array/reverse/index.D";
import type { ArrayTail }       from "../../../backup/array/at/tail/index.D";

type LastOmit<Tuple extends unknown[]> = ArrayReverse<Tuple> extends [infer F, ...infer P]
  ? ArrayReverse<P> : Tuple;

function wrap <
  Result = unknown,
  OriginalArgs extends unknown[] = unknown[],
  Args extends TupleConsistent<OriginalArgs> = TupleConsistent<OriginalArgs>,
>(executor: DefAny<OriginalArgs, Result>, ...argsExecutor: Args) {
  // @ts-ignore
  return Object.assign(curry(executor, ...argsExecutor), {
    _ <
      WrapResult,
      WrapArguments extends [Result] | [...unknown[], Result],
      Input extends LastOmit<WrapArguments>
    >(wrapper: 
      DefAny<WrapArguments, WrapResult>
      | (<A extends ArrayTail<Args>>(x: A) => WrapResult),
      ...argsWrapper: Input
    ) {
      // @ts-ignore
      return wrap((...last: TupleDifference<Args, OriginalArgs>) => wrapper(...argsWrapper, executor(...argsExecutor, ...last)))
    }
  })
}

export default wrap;
