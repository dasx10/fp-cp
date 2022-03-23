import { ArrayLimitLeft } from "./_/index.D";

export type ArrayLimitLeftDef = {
  <Finish extends number, X extends any[]>(finish: Finish, array: X): ArrayLimitLeft<Finish, X>;
  <Finish extends number> (finish: Finish): <X extends any[]> (array: X) => ArrayLimitLeft<Finish, X>;
}
