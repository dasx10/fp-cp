import pipe from "../../../function/pipe/index";
import { Tail } from "../../at/tail/index.D";
import _countFrom from "../from/_/index";

type CountOfDef <Args extends any[], T = any> = Tail<Args> extends readonly any[]
? number
: {
  // (array: T[]): number;
  (...args: [...T[], T[]]): number;
  // (...args: T[]): CountOfDef<T[], T>
};

function countOf <T>(...args: [...T[], T[]]): number;
// @ts-ignore
function countOf <T>(...args: T[]): {
  (array: T[]): number;
  (...args: [T, ...T[], T[]] | [T, T[]] | [T[]]): number;
  (...args: [T, ...T[]]): CountOfDef<T[], T>;
}
function countOf (...args: any[]) {
  const last = args.pop();
  if (Array.isArray(last)) return _countFrom(args, last);
  return (...nextArgs: any[]) => countOf(...args, ...nextArgs);
}

export default countOf;
const tt = countOf(1, 2);
tt(1, 3, 4, [1])

const a = pipe(
  countOf(1, 2),
  (a: number) => a + 1,
)
