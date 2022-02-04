import { ArrayLastElement } from "../../array/index.D";
import add from "../../number/calc/add/index";
import { AnyFunction } from "../index.D";

type F1 <A = any, R = any> = (a: A) => R;
type F2 <A = any, A1 = any, R = any> = (a: A, a1: A1) => R;
type F3 <A = any, A1 = any, A2 = any, R = any> = (a: A, a1: A1, a2: A2) => R;
type F4 <A = any, A1 = any, A2 = any, A3 = any, R = any> = (a: A, a1: A1, a2: A2, a3: A3) => R;
type FS <AR extends any[]> = AR extends [infer A, infer R, ...infer N]
  ? [F1<A, R>, ...FS<[R, ...N]>]
  : [];

/** Empty **/
function pipe <R, R2> (f:() => R, f2: F1<R, R2>): () => R2;
function pipe <R, R1, R2> (
  f:() => R, f2: F1<R, R1>,
  ...fs: FS<[R1, R2]>
): () => R2;

function pipe <R, R1, R2, R3> (
  f:() => R, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3]>
): () => R3;

function pipe <R, R1, R2, R3, R4> (
  f:() => R, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4]>
): () => R4;

function pipe <R, R1, R2, R3, R4, R5> (
  f:() => R, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5]>
): () => R5;

function pipe <R, R1, R2, R3, R4, R5, R6> (
  f:() => R, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6]>
): () => R6;

function pipe <R, R1, R2, R3, R4, R5, R6, R7> (
  f:() => R, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6, R7]>
): () => R7;

function pipe <R, R1, R2, R3, R4, R5, R6, R7, R8> (
  f:() => R, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8]>
): () => R8;

function pipe <R, R1, R2, R3, R4, R5, R6, R7, R8, R9> (
  f:() => R, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8, R9]>
): () => R9;

function pipe <R, R1, R2, R3, R4, R5, R6, R7, R8, R9, R0> (
  f:() => R, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8, R9, R0]>
): () => R0;

function pipe <
  R, R1, R2, R3, R4, R5, R6, R7, R8, R9, R0, RL,
  F extends [...FS<[R1, R2, R3, R4, R5, R6, R7, R8, R9, R0]>, ...F1[], F1<any, RL>]
> (
  f:() => R, f2: F1<R, R1>,
  ...fs: F
): () => RL;
/** Empty **/

// Once
function pipe <A, R, R2> (f1: F1<A, R>, f2: F1<R, R2>): (a: A) => R2;

function pipe <A, R, R1, R2> (
  f1: F1<A, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2]>
): (a: A) => R2;

function pipe <A, R, R1, R2, R3> (
  f1: F1<A, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3]>
): (a: A) => R3;

function pipe <A, R, R1, R2, R3, R4> (
  f1: F1<A, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4]>
): (a: A) => R4;

function pipe <A, R, R1, R2, R3, R4, R5> (
  f1: F1<A, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5]>
): (a: A) => R5;

function pipe <A, R, R1, R2, R3, R4, R5, R6> (
  f1: F1<A, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6]>
): (a: A) => R6;

function pipe <A, R, R1, R2, R3, R4, R5, R6, R7> (
  f1: F1<A, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6, R7]>
): (a: A) => R7;

function pipe <A, R, R1, R2, R3, R4, R5, R6, R7, R8> (
  f1: F1<A, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8]>
): (a: A) => R8;

function pipe <A, R, R1, R2, R3, R4, R5, R6, R7, R8, R9> (
  f1: F1<A, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8, R9]>
): (a: A) => R9;

function pipe <A, R, R1, R2, R3, R4, R5, R6, R7, R8, R9, R0> (
  f1: F1<A, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8, R9, R0]>
): (a: A) => R0;

function pipe <
  A, R, R1, R2, R3, R4, R5, R6, R7, R8, R9, R0, RL,
  F extends [...FS<[R1, R2, R3, R4, R5, R6, R7, R8, R9, R0]>, ...F1[], F1<any, RL>]
> (
  f1: F1<A, R>, f2: F1<R, R1>,
  ...fs: F
): (a: A) => RL;
// Once

// Second
function pipe <A, A2, R, R2> (f1: F2<A, A2, R>, f2: F1<R, R2>): (a: A, a2: A2) => R2;

function pipe <A, A2, R, R1, R2> (
  f1: F2<A, A2, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2]>
): (a: A, a2: A2) => R2;

function pipe <A, A2, R, R1, R2, R3> (
  f1: F2<A, A2, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3]>
): (a: A, a2: A2) => R3;

function pipe <A, A2, R, R1, R2, R3, R4> (
  f1: F2<A, A2, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4]>
): (a: A, a2: A2) => R4;

function pipe <A, A2, R, R1, R2, R3, R4, R5> (
  f1: F2<A, A2, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5]>
): (a: A, a2: A2) => R5;

function pipe <A, A2, R, R1, R2, R3, R4, R5, R6> (
  f1: F2<A, A2, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6]>
): (a: A, a2: A2) => R6;

function pipe <A, A2, R, R1, R2, R3, R4, R5, R6, R7> (
  f1: F2<A, A2, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6, R7]>
): (a: A, a2: A2) => R7;

function pipe <A, A2, R, R1, R2, R3, R4, R5, R6, R7, R8> (
  f1: F2<A, A2, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8]>
): (a: A, a2: A2) => R8;

function pipe <A, A2, R, R1, R2, R3, R4, R5, R6, R7, R8, R9> (
  f1: F2<A, A2, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8, R9]>
): (a: A, a2: A2) => R9;

function pipe <A, A2, R, R1, R2, R3, R4, R5, R6, R7, R8, R9, R0> (
  f1: F2<A, A2, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8, R9, R0]>
): (a: A, a2: A2) => R0;

function pipe <
  A, A2, R, R1, R2, R3, R4, R5, R6, R7, R8, R9, R0, RL,
  F extends [...FS<[R1, R2, R3, R4, R5, R6, R7, R8, R9, R0]>, ...F1[], F1<any, RL>]
> (
  f1: F2<A, A2, R>, f2: F1<R, R1>,
  ...fs: F
): (a: A, a2: A2) => RL;
// Second

// Third
function pipe <A, A2, A3, R, R2> (f1: F3<A, A2, A3, R>, f2: F1<R, R2>): (a: A, a2: A2, a3: A3) => R2;

function pipe <A, A2, A3, R, R1, R2> (
  f1: F3<A, A2, A3, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2]>
): (a: A, a2: A2, a3: A3) => R2;

function pipe <A, A2, A3, R, R1, R2, R3> (
  f1: F3<A, A2, A3, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3]>
): (a: A, a2: A2, a3: A3) => R3;

function pipe <A, A2, A3, R, R1, R2, R3, R4> (
  f1: F3<A, A2, A3, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4]>
): (a: A, a2: A2, a3: A3) => R4;

function pipe <A, A2, A3, R, R1, R2, R3, R4, R5> (
  f1: F3<A, A2, A3, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5]>
): (a: A, a2: A2, a3: A3) => R5;

function pipe <A, A2, A3, R, R1, R2, R3, R4, R5, R6> (
  f1: F3<A, A2, A3, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6]>
): (a: A, a2: A2, a3: A3) => R6;

function pipe <A, A2, A3, R, R1, R2, R3, R4, R5, R6, R7> (
  f1: F3<A, A2, A3, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6, R7]>
): (a: A, a2: A2, a3: A3) => R7;

function pipe <A, A2, A3, R, R1, R2, R3, R4, R5, R6, R7, R8> (
  f1: F3<A, A2, A3, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8]>
): (a: A, a2: A2, a3: A3) => R8;

function pipe <A, A2, A3, R, R1, R2, R3, R4, R5, R6, R7, R8, R9> (
  f1: F3<A, A2, A3, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8, R9]>
): (a: A, a2: A2, a3: A3) => R9;

function pipe <A, A2, A3, R, R1, R2, R3, R4, R5, R6, R7, R8, R9, R0> (
  f1: F3<A, A2, A3, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8, R9, R0]>
): (a: A, a2: A2, a3: A3) => R0;
// Third


// Four
function pipe <A, A2, A3, A4, R, R2> (f1: F4<A, A2, A3, A4, R>, f2: F1<R, R2>): (a: A, a2: A2, a3: A3) => R2;

function pipe <A, A2, A3, A4, R, R1, R2> (
  f1: F4<A, A2, A3, A4, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2]>
): (a: A, a2: A2, a3: A3, a4: A4) => R2;

function pipe <A, A2, A3, A4, R, R1, R2, R3> (
  f1: F4<A, A2, A3, A4, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3]>
): (a: A, a2: A2, a3: A3, a4: A4) => R3;

function pipe <A, A2, A3, A4, R, R1, R2, R3, R4> (
  f1: F4<A, A2, A3, A4, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4]>
): (a: A, a2: A2, a3: A3, a4: A4) => R4;

function pipe <A, A2, A3, A4, R, R1, R2, R3, R4, R5> (
  f1: F4<A, A2, A3, A4, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5]>
): (a: A, a2: A2, a3: A3, a4: A4) => R5;

function pipe <A, A2, A3, A4, R, R1, R2, R3, R4, R5, R6> (
  f1: F4<A, A2, A3, A4, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6]>
): (a: A, a2: A2, a3: A3, a4: A4) => R6;

function pipe <A, A2, A3, A4, R, R1, R2, R3, R4, R5, R6, R7> (
  f1: F4<A, A2, A3, A4, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6, R7]>
): (a: A, a2: A2, a3: A3, a4: A4) => R7;

function pipe <A, A2, A3, A4, R, R1, R2, R3, R4, R5, R6, R7, R8> (
  f1: F4<A, A2, A3, A4, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8]>
): (a: A, a2: A2, a3: A3, a4: A4) => R8;

function pipe <A, A2, A3, A4, R, R1, R2, R3, R4, R5, R6, R7, R8, R9> (
  f1: F4<A, A2, A3, A4, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8, R9]>
): (a: A, a2: A2, a3: A3, a4: A4) => R9;

function pipe <A, A2, A3, A4, R, R1, R2, R3, R4, R5, R6, R7, R8, R9, R0> (
  f1: F4<A, A2, A3, A4, R>, f2: F1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8, R9, R0]>
): (a: A, a2: A2, a3: A3, a4: A4) => R0;
// Four

function pipe <
  A, A2, A3, R, R1, R2, R3, R4, R5, R6, R7, R8, R9, R0, RL,
  F extends [...FS<[R1, R2, R3, R4, R5, R6, R7, R8, R9, R0]>, ...F1[], F1<any, RL>]
> (
  f1: F3<A, A2, A3, R>, f2: F1<R, R1>,
  ...fs: F
): (a: A, a2: A2) => RL;

function pipe <
    Args extends any[], R, R2,
    F extends [F1<R, R2>, ...F1[]],
> (
  firstExecutor  : (...args: Args) => R,
  ...functions   : F
): (...args: Args) => ReturnType<ArrayLastElement<F>>;

function pipe <
    FirstExecutor  extends AnyFunction,
    SecondExecutor extends (arg: ReturnType<FirstExecutor>) => any,
    NextFunctions  extends ((arg: any) => any)[]
> (firstExecutor: FirstExecutor, secondExecutor: SecondExecutor, ...functions: NextFunctions) {
    return function piped(...args: Parameters<FirstExecutor>) {
        let result = secondExecutor(firstExecutor(...args));
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
