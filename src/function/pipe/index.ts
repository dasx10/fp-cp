import { AnyDef, Def0, Def1, Def2, Def3, Def4 } from "../index.D";

type FS <AR extends any[]> = AR extends [infer A, infer R, ...infer N] ? [Def1<A, R>, ...FS<[R, ...N]>] : [];

/** Empty **/
function pipe <R, R2> (f:Def0<R>, f2: Def1<R, R2>): Def0<R2>;
function pipe <R, R1, R2> (f:Def0<R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2]>): Def0<R2>;

function pipe <R, R1, R2, R3> (
  f:Def0<R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3]>
): Def0<R3>;

function pipe <R, R1, R2, R3, R4> (
  f:Def0<R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3, R4]>
): Def0<R4>;

function pipe <R, R1, R2, R3, R4, R5> (
  f:Def0<R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3, R4, R5]>
): Def0<R5>;

function pipe <R, R1, R2, R3, R4, R5, R6> (
  f:Def0<R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3, R4, R5, R6]>
): Def0<R6>;

function pipe <R, R1, R2, R3, R4, R5, R6, R7> (
  f:Def0<R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3, R4, R5, R6, R7]>
): Def0<R7>;

function pipe <R, R1, R2, R3, R4, R5, R6, R7, R8> (
  f:Def0<R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8]>
): Def0<R8>;

function pipe <R, R1, R2, R3, R4, R5, R6, R7, R8, R9> (
  f:Def0<R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8, R9]>
): Def0<R9>;

function pipe <R, R1, R2, R3, R4, R5, R6, R7, R8, R9, R0> (
  f:Def0<R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8, R9, R0]>
): Def0<R0>;

function pipe <
  R, R1, R2, R3, R4, R5, R6, R7, R8, R9, R0, RL,
  F extends [...FS<[R1, R2, R3, R4, R5, R6, R7, R8, R9, R0]>, ...Def1[], Def1<any, RL>]
> (
  f:Def0<R>, f2: Def1<R, R1>, ...fs: F
): Def0<RL>;
/** Empty **/

// Once
function pipe <A, R, R2> (f: Def1<A, R>, f2: Def1<R, R2>): (a: A) => R2;

function pipe <A, R, R1, R2> (
  f: Def1<A, R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2]>
): Def2<A, R2>;

function pipe <A, R, R1, R2, R3> (
  f: Def1<A, R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3]>
): Def2<A, R3>;

function pipe <A, R, R1, R2, R3, R4> (
  f: Def1<A, R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3, R4]>
): Def2<A, R4>;

function pipe <A, R, R1, R2, R3, R4, R5> (
  f: Def1<A, R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3, R4, R5]>
): Def2<A, R5>;

function pipe <A, R, R1, R2, R3, R4, R5, R6> (
  f: Def1<A, R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3, R4, R5, R6]>
): Def2<A, R6>;

function pipe <A, R, R1, R2, R3, R4, R5, R6, R7> (
  f: Def1<A, R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3, R4, R5, R6, R7]>
): Def2<A, R7>;

function pipe <A, R, R1, R2, R3, R4, R5, R6, R7, R8> (
  f: Def1<A, R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8]>
): Def2<A, R8>;

function pipe <A, R, R1, R2, R3, R4, R5, R6, R7, R8, R9> (
  f: Def1<A, R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8, R9]>
): Def2<A, R9>;

function pipe <A, R, R1, R2, R3, R4, R5, R6, R7, R8, R9, R0> (
  f: Def1<A, R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8, R9, R0]>
): Def2<A, R0>;

function pipe <
  A, R, R1, R2, R3, R4, R5, R6, R7, R8, R9, R0, RL,
  F extends [...FS<[R1, R2, R3, R4, R5, R6, R7, R8, R9, R0]>, ...Def1[], Def1<any, RL>]
> (
  f: Def1<A, R>, f2: Def1<R, R1>,
  ...fs: F
): Def2<A, RL>;
// Once

// Second
function pipe <A, A2, R, R1> (f: Def2<A, A2, R>, f2: Def1<R, R1>): Def2<A, A2, R1>;

function pipe <A, A2, R, R1, R2> (
  f: Def2<A, A2, R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2]>
): Def2<A, A2, R2>;

function pipe <A, A2, R, R1, R2, R3> (
  f: Def2<A, A2, R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3]>
): Def2<A, A2, R3>;

function pipe <A, A2, R, R1, R2, R3, R4> (
  f: Def2<A, A2, R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3, R4]>
): Def2<A, A2, R4>;

function pipe <A, A2, R, R1, R2, R3, R4, R5> (
  f: Def2<A, A2, R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3, R4, R5]>
): Def2<A, A2, R5>;

function pipe <A, A2, R, R1, R2, R3, R4, R5, R6> (
  f: Def2<A, A2, R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3, R4, R5, R6]>
): Def2<A, A2, R6>;

function pipe <A, A2, R, R1, R2, R3, R4, R5, R6, R7> (
  f: Def2<A, A2, R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3, R4, R5, R6, R7]>
): Def2<A, A2, R7>;

function pipe <A, A2, R, R1, R2, R3, R4, R5, R6, R7, R8> (
  f: Def2<A, A2, R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8]>
): Def2<A, A2, R8>;

function pipe <A, A2, R, R1, R2, R3, R4, R5, R6, R7, R8, R9> (
  f: Def2<A, A2, R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8, R9]>
): Def2<A, A2, R9>;

function pipe <A, A2, R, R1, R2, R3, R4, R5, R6, R7, R8, R9, R0> (
  f: Def2<A, A2, R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8, R9, R0]>
): Def2<A, A2, R0>;

function pipe <
  A, A2, R, R1, R2, R3, R4, R5, R6, R7, R8, R9, R0, RL,
  F extends [...FS<[R1, R2, R3, R4, R5, R6, R7, R8, R9, R0]>, ...Def1[], Def1<any, RL>]
> (
  f: Def2<A, A2, R>, f2: Def1<R, R1>, ...fs: F
): Def2<A, A2, RL>;
// Second

// Third
function pipe <A, A2, A3, R, R1> (Def1: Def3<A, A2, A3, R>, f2: Def1<R, R1>): (a: A, a2: A2, a3: A3) => Def3<A, A2, A3, R1>;

function pipe <A, A2, A3, R, R1, R2> (
  f: Def3<A, A2, A3, R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2]>
): Def3<A, A2, A3, R2>;

function pipe <A, A2, A3, R, R1, R2, R3> (
  f: Def3<A, A2, A3, R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3]>
): Def3<A, A2, A3, R3>;

function pipe <A, A2, A3, R, R1, R2, R3, R4> (
  f: Def3<A, A2, A3, R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3, R4]>
): Def3<A, A2, A3, R4>;

function pipe <A, A2, A3, R, R1, R2, R3, R4, R5> (
  f: Def3<A, A2, A3, R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3, R4, R5]>
): Def3<A, A2, A3, R5>;

function pipe <A, A2, A3, R, R1, R2, R3, R4, R5, R6> (
  f: Def3<A, A2, A3, R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3, R4, R5, R6]>
): Def3<A, A2, A3, R6>;

function pipe <A, A2, A3, R, R1, R2, R3, R4, R5, R6, R7> (
  f: Def3<A, A2, A3, R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3, R4, R5, R6, R7]>
): Def3<A, A2, A3, R7>;

function pipe <A, A2, A3, R, R1, R2, R3, R4, R5, R6, R7, R8> (
  f: Def3<A, A2, A3, R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8]>
): Def3<A, A2, A3, R8>;

function pipe <A, A2, A3, R, R1, R2, R3, R4, R5, R6, R7, R8, R9> (
  f: Def3<A, A2, A3, R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8, R9]>
): Def3<A, A2, A3, R9>;

function pipe <A, A2, A3, R, R1, R2, R3, R4, R5, R6, R7, R8, R9, R0> (
  f: Def3<A, A2, A3, R>, f2: Def1<R, R1>, ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8, R9, R0]>
): Def3<A, A2, A3, R0>;

function pipe <
  A, A2, A3, R, R1, R2, R3, R4, R5, R6, R7, R8, R9, R0, RL,
  F extends [...FS<[R1, R2, R3, R4, R5, R6, R7, R8, R9, R0]>, ...Def1[], Def1<any, RL>]
> (
  f: Def3<A, A2, A3, R>, f2: Def1<R, R1>, ...fs: F
): (a: A, a2: A2) => RL;
// Third

// Four
function pipe <A, A2, A3, A4, R, R1> (f: Def4<A, A2, A3, A4, R>, f2: Def1<R, R1>): Def4<A, A2, A3, A4, R1>;

function pipe <A, A2, A3, A4, R, R1, R2> (
  f: Def4<A, A2, A3, A4, R>, f2: Def1<R, R1>,
  ...fs: FS<[R1, R2]>
): Def4<A, A2, A3, A4, R2>;

function pipe <A, A2, A3, A4, R, R1, R2, R3> (
  f: Def4<A, A2, A3, A4, R>, f2: Def1<R, R1>,
  ...fs: FS<[R1, R2, R3]>
): Def4<A, A2, A3, A4, R3>;

function pipe <A, A2, A3, A4, R, R1, R2, R3, R4> (
  f: Def4<A, A2, A3, A4, R>, f2: Def1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4]>
): Def4<A, A2, A3, A4, R4>;

function pipe <A, A2, A3, A4, R, R1, R2, R3, R4, R5> (
  f: Def4<A, A2, A3, A4, R>, f2: Def1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5]>
): Def4<A, A2, A3, A4, R5>;

function pipe <A, A2, A3, A4, R, R1, R2, R3, R4, R5, R6> (
  f: Def4<A, A2, A3, A4, R>, f2: Def1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6]>
): Def4<A, A2, A3, A4, R6>;

function pipe <A, A2, A3, A4, R, R1, R2, R3, R4, R5, R6, R7> (
  f: Def4<A, A2, A3, A4, R>, f2: Def1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6, R7]>
): Def4<A, A2, A3, A4, R7>;

function pipe <A, A2, A3, A4, R, R1, R2, R3, R4, R5, R6, R7, R8> (
  f: Def4<A, A2, A3, A4, R>, f2: Def1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8]>
): Def4<A, A2, A3, A4, R8>;

function pipe <A, A2, A3, A4, R, R1, R2, R3, R4, R5, R6, R7, R8, R9> (
  Def1: Def4<A, A2, A3, A4, R>, f2: Def1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8, R9]>
): Def4<A, A2, A3, A4, R9>;

function pipe <A, A2, A3, A4, R, R1, R2, R3, R4, R5, R6, R7, R8, R9, R0> (
  f: Def4<A, A2, A3, A4, R>, f2: Def1<R, R1>,
  ...fs: FS<[R1, R2, R3, R4, R5, R6, R7, R8, R9, R0]>
): Def4<A, A2, A3, A4, R0>;
// Four

function pipe <
    F1 extends AnyDef,
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
