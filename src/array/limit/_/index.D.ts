import type { ArrayValue }        from "../../../../backup/array/index.D";
import type { ArrayLimitLeft }  from "../left/_/index.D";
import type { ArrayLimitRight } from "../right/_/index.D";

export type ArrayLimit <Finish extends number, X extends readonly any[]> = number extends Finish
? ArrayValue<X>[]
: `-${Finish}` extends `${number}` 
  ? ArrayLimitLeft  <Finish, X>
  : ArrayLimitRight <Finish, X>;
