import { ArrayLimitRight } from "./_/index.D";

export type ArrayLimitRightDef = {
  <Finish extends number, X extends any[]>(finish: Finish, array: X): ArrayLimitRight<Finish, X>;
  <Finish extends number> (finish: Finish): <X extends any[]> (array: X) => ArrayLimitRight<Finish, X>;
}
