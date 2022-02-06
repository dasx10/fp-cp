import { ArrayLastElement } from "../index.D";
export declare type ArrayReverse<AnyTuple extends any[] | Array<any>, Recursive extends any[] = []> = ReturnType<AnyTuple extends [infer F, ...infer L] ? () => ArrayReverse<L, [F, ...Recursive]> : () => Recursive>;
export declare type ArrayMaybeReverse<AnyTuple extends any[]> = AnyTuple extends [infer First, infer Second, ...infer Next]
    ? First extends Second
      ? First extends ArrayLastElement<Next>
        ? AnyTuple
        : ArrayReverse<AnyTuple>
      : ArrayReverse<AnyTuple> 
    : AnyTuple;
