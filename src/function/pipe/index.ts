import { Def1, DefAny } from "../index.D";

type FS <AR extends unknown[]> = AR extends [infer A, infer R, ...infer N] 
  ? [Def1<A, R>, ...FS<[R, ...N]>]
  : AR extends [infer A, infer R]
    ? [Def1<A, R>]
    : [];

function pipe <A extends unknown[], R, R1>(f: DefAny<A, R>, f1: Def1<R, R1>): (...args: A) => R1;

function pipe <
  A extends unknown[], R, R1, RL
>(
  f : DefAny<A, R>, f1: Def1<R, R1>,
  ...fs: FS<[R1, RL]>
): (...args: A) => RL;

function pipe <
  A extends unknown[], R, R1, R2, RL
>(
  f : DefAny<A, R>, f1: Def1<R, R1>,
  ...fs: FS<[R1, R2, RL]>
): (...args: A) => RL;

function pipe <
  A extends unknown[], R, R1, R2, R3, RL
>(
  f : DefAny<A, R>, f1: Def1<R, R1>,
  ...fs: FS<[R1, R2, R3, RL]>
): (...args: A) => RL;

function pipe <
  A extends unknown[], R, R1, R2, R3, R4, RL
>(
  f : DefAny<A, R>, f1: Def1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, RL]>
): (...args: A) => RL;

function pipe <
  A extends unknown[], R, R1, R2, R3, R4, R5, RL
>(
  f : DefAny<A, R>, f1: Def1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, RL]>
): (...args: A) => RL;

function pipe <
  A extends unknown[], R, R1, R2, R3, R4, R5, R6, RL
>(
  f : DefAny<A, R>, f1: Def1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6, RL]>
): (...args: A) => RL;

function pipe <
  A extends unknown[], R, R1, R2, R3, R4, R5, R6, R7, RL
>(
  f : DefAny<A, R>, f1: Def1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, RL]>
): (...args: A) => RL;

function pipe <
  A extends unknown[], R, R1, R2, R3, R4, R5, R6, R7, R8, RL
>(
  f : DefAny<A, R>, f1: Def1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8, RL]>
): (...args: A) => RL;

function pipe <
  A extends unknown[], R, R1, R2, R3, R4, R5, R6, R7, R8, R9, RL
>(
  f : DefAny<A, R>, f1: Def1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8, R9, RL]>
): (...args: A) => RL;

function pipe <
  A extends unknown[], R, R1, R2, R3, R4, R5, R6, R7, R8, R0, RL
>(
  f : DefAny<A, R>, f1: Def1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8, R0, RL]>
): (...args: A) => RL;

function pipe <
  A extends unknown[], R, R1, R2, R3, R4, R5, R6, R7, R8, R0, RL
>(
  f : DefAny<A, R>, f1: Def1<R, R1>,
  ...fs: [...FS<[R1, R2, R3, R4, R5, R6, R7, R8, R0]>, ...Def1[], Def1<unknown, RL>]
): (...args: A) => RL;

function pipe <
  A extends unknown[]
> (f: DefAny<A>, f2: Def1, ...functions: Def1[]) {
  return (...args: A) => {
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
