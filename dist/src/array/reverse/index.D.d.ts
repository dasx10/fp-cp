import Array from "..";
import { ArrayLastElement } from "../index.D";
export declare type ArrayReverse<AnyTuple extends any[] | Array<any>, Recursive extends any[] = []> = AnyTuple extends Array<infer T, infer P> ? ArrayReverse<P> : ReturnType<AnyTuple extends [infer F, ...infer L] ? () => ArrayReverse<L, [F, ...Recursive]> : () => Recursive>;
export declare type ArrayMaybeReverse<AnyTuple extends any[] | Array<any>> = AnyTuple extends Array<infer T, infer P> ? ArrayMaybeReverse<P> : AnyTuple extends [infer First, infer Second, ...infer Next] ? First extends Second ? First extends ArrayLastElement<Next> ? AnyTuple : ArrayReverse<AnyTuple> : ArrayReverse<AnyTuple> : AnyTuple;
