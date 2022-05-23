import { ArrayLimitLeft } from "./_/index.D";

export type ArrayLimitLeftDef = {
  <Finish extends number, X extends readonly any[]>(finish: Finish, array: X): ArrayLimitLeft<Finish, X>;
  <Finish extends number> (finish: Finish): <X extends readonly any[]> (array: X) => ArrayLimitLeft<Finish, X>;
}
