import { OnlyNegative } from "../../../number/index.D";
import { ArrayLimitRight } from "./_/index.D";

export type ArrayLimitRightDef = {
  <Finish extends number, X extends any[]>(finish: OnlyNegative<Finish>, array: X): ArrayLimitRight<Finish, X>;
  <Finish extends number> (finish: OnlyNegative<Finish>): <X extends any[]> (array: X) => ArrayLimitRight<Finish, X>;
}
