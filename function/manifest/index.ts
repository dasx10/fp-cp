import curry from "./function/curry";
import pipe from "./function/pipe";

interface IManifest {
    string   : string,
    number   : number,
    bigint   : bigint,
    boolean  : boolean,
    symbol   : symbol,
    object   : object,
    function : Function,
}

function manifest <
    A extends keyof IManifest,
    B extends keyof Omit<IManifest, A>,
> (a: A, b: B): <Executor extends (a: IManifest[A], b: IManifest[B]) => any>(executor: Executor) => <
    AA extends IManifest[A | B],
    BB extends AA extends IManifest[A] ? IManifest[B] : IManifest[A]
>(a: AA, b: BB) => ReturnType<Executor>;

function manifest <
    A extends keyof IManifest,
    B extends keyof Omit<IManifest, A>,
    C extends keyof Omit<IManifest, A | B>,
> (a: A, b: B, c: C): <Executor extends (a: IManifest[A], b: IManifest[B], c: IManifest[C]) => any>(executor: Executor) => <
    AA extends IManifest[A | B | C],
    BB extends AA extends IManifest[C]
        ? IManifest[A | B] : AA extends IManifest[B]
        ? IManifest[A | C] : IManifest[B | C],

    CC extends BB extends IManifest[A]
        ? AA extends IManifest[B] ? IManifest[C] : IManifest[B] : BB extends IManifest[B]
        ? AA extends IManifest[A] ? IManifest[C] : IManifest[A] : BB extends IManifest[C]
        ? AA extends IManifest[A] ? IManifest[B] : IManifest[A] : IManifest[A | B | C]

>(a: AA, b: BB, c: CC) => ReturnType<Executor>;

function manifest <
    A extends keyof IManifest,
    B extends keyof Omit<IManifest, A>,
    C extends keyof Omit<IManifest, A | B>,
    // D extends keyof Omit<IManifest, A | B | C>,
    // E extends keyof Omit<IManifest, A | B | C | D>,
    // F extends keyof Omit<IManifest, A | B | C | D | E>,
    // J extends keyof Omit<IManifest, A | B | C | D | E | F>,
>(a: A, b: B, c ?: C) {
    return function useManifest <Executor extends (
        a : IManifest[A],
        b : IManifest[B],
        c?: IManifest[C],
    ) => any> (executor: Executor) {
        return function (...args: Parameters<Executor> extends (infer U)[] ? U[] : Parameters<Executor>): ReturnType<Executor> {
            const currentArg = [a, b, c]
                .filter(e => e !== void 0)
                .map(e => (args as any[]).find(a => typeof a === e)) as [...Parameters<Executor>]

            return executor.apply(null, currentArg);
        }
    }
}

const a = manifest('string', 'boolean', 'number');
const useA = a((a, b, c) => a + b + c);
const aa = useA(false, '', 3)
console.log({
    "useA('s', 1, true)": useA('s', 1, true),
    "useA('s', true, 1)": useA('s', true, 1),
    "useA(true, 's', 1)": useA(true, 's', 1),
    "useA(true, 1, 's')": useA(true, 1, 's'),
    "useA(1, 's', true)": useA(1, 's', true),
    "useA(1, true, 's')": useA(1, true, 's'),
});