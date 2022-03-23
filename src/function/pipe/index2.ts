import { Tail } from "../../array/at/tail/index.D";
import rightStr from "../../string/rightStr/index";
import { Def1, DefAny } from "../index.D";

type FS <AR extends any[]> = AR extends [infer A, infer R, ...infer N]
  ? [Def1<A, R>, ...FS<[R, ...N]>] 
  : AR extends [infer A, ...infer N] 
    ? [] | [Def1<A, any>]
    : [];

function pipe <
  Args extends any[],
  R1, R2
>(
  f : DefAny<Args, R1>,
  f2: Def1<R1, R2>,
): (...args: Args) => R2;

function pipe <
  Args extends any[],
  R1, R2, R3,
>(
  f : DefAny<Args, R1>,
  f2: Def1<R1, R2>,
  f3: Def1<R2, R3>,
): (...args: Args) => R3;

function pipe <
  Args extends any[],
  R1, R2, R3, RR, RS extends [R3, RR] | [R3, ...any[], RR]
>(
  f : DefAny<Args, R1>,
  f2: Def1<R1, R2>,
  ...fs: ([Def1<R2, R3>, Def1<R3, RR>] | [Def1<R2, R3>, Def1<R3, RS[number]>, ...Def1<RS[number], RS[number]>[], Def1<RS[number], RR>]) & FS<[R2, R3, ...RS, RR]>
): (...args: Args) => RR;

function pipe <
    F1 extends DefAny,
    F2 extends Def1<ReturnType<F1>>,
    FS extends Def1[]
> (f: F1, f2: F2, ...functions: FS) {
    return function piped(...args: Parameters<F1>) {
        let result = f2(f(...args));
        const { length } = functions;
        if (length) {
            let index = 0;
            while (index < length) {
                result = functions[index](result);
                index++;
            }
        }
        return result;
    };
}

export default pipe;

const a = pipe(
  rightStr('a'),
  rightStr('udser'),
  rightStr('user2'),
  rightStr('user2'),
  rightStr('user2'),
)('2')
