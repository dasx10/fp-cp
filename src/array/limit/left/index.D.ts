import { ArrayLimitLeft } from "./_/index.D";

export type ArrayLimitLeftDef = {
  <Finish extends number, X extends readonly unknown[]>(finish: Finish, array: X): ArrayLimitLeft<Finish, X>;
  <Finish extends number> (finish: Finish): <X extends readonly unknown[]> (array: X) => ArrayLimitLeft<Finish, X>;
}
