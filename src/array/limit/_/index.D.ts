import type { Unboxing }        from "../../index.D";
import type { ArrayLimitLeft }  from "../left/_/index.D";
import type { ArrayLimitRight } from "../right/_/index.D";

export type ArrayLimit <Finish extends number, X extends any[]> = number extends Finish
? Unboxing<X>[]
: `-${Finish}` extends `${number}` 
  ? ArrayLimitLeft  <Finish, X>
  : ArrayLimitRight <Finish, X>;
