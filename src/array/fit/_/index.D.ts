import type { ArrayIndex } from "../../index.D";

export type TupleFit <Length extends number, Tuple extends readonly any[]> = 
	(ArrayIndex<Tuple> | Tuple['length']) extends Length
		? Tuple
		: [...Tuple, undefined, ...undefined[]] & { length: Length };

export type ArrayFitCore = <Length extends number, X extends readonly any[]> (length: Length, x: X) => TupleFit<Length, X>;
