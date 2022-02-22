import pipe from "../../../function/pipe/index";
import { Tail } from "../../at/tail/index.D";
import _countFrom from "../from/_/index";

type CountOfDef <Args extends any[], T = any> = Tail<Args> extends readonly any[]
? number
: <N extends T[] | [...T[], T[]]>(...args: N) => CountOfDef<N, T>;

function countOf <T>(...args: [...T[], T[]]): number;
// @ts-ignore
function countOf <T>(...args: T[]): <N extends T[]>(...next: N) => CountOfDef<N, T>;
function countOf (...args: any[]) {
  const last = args.pop();
  if (Array.isArray(last)) return _countFrom(args, last);
  return (...nextArgs: any[]) => countOf(...args, ...nextArgs);
}

export default countOf;
