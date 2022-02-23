import { Tail } from "../../at/tail/index.D";
import _countFrom from "../from/_/index";

type CountOfDef <Args extends T[], T = any> = Tail<Args> extends readonly any[]
? number
: {
  (array: T[]): number;
  <N extends T[]>(...next: N): CountOfDef<N, T>;
  <N extends T[]>(...next: [...N, T[]]): number;
};

function countOf <T>(...args: [T, ...T[], T[]]): number;
// @ts-ignore
function countOf <T>(...args: T[]): {
  (array: T[]): number;
  <N extends T[]>(...next: N): CountOfDef<N, T>;
  <N extends T[]>(...next: [...N, T[]]): number;
};
function countOf (...args: any[]) {
  const last = args.pop();
  if (Array.isArray(last)) return _countFrom(args, last);
  return (...nextArgs: any[]) => countOf(...args, ...nextArgs);
}

export default countOf;
