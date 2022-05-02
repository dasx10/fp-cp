import type { ArrayLikeReduceRightCore } from "./core/index.D";

type ReduceDef <INITIAL_VALUE, Value, X extends ArrayLike<Value>> = (currentValue: INITIAL_VALUE, value: Value, index: number, x: X) => INITIAL_VALUE;

export type ReduceArrayLikeRightDef = ArrayLikeReduceRightCore & {
  <INITIAL_VALUE, Value, X extends ArrayLike<Value>>(initialValue: INITIAL_VALUE, def: ReduceDef<INITIAL_VALUE, Value, X>): (x: X) => INITIAL_VALUE;
  <INITIAL_VALUE>(initialValue: INITIAL_VALUE): {
    <Value, X extends ArrayLike<Value>>(def: ReduceDef<INITIAL_VALUE, Value, X>, x: X): INITIAL_VALUE;
    <Value, X extends ArrayLike<Value>>(def: ReduceDef<INITIAL_VALUE, Value, X>): (x: X) => INITIAL_VALUE;
  }
}
