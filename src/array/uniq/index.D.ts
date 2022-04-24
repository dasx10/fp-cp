import { Primitive } from "../../is/index.D";
import type { Unboxing } from "../index.D";

type UniqTuple<X extends readonly any[]> = X extends readonly [...infer First, infer Last]
  ? Last extends Unboxing<First>
		? Last extends Primitive 
			? UniqTuple<First>
			: [...UniqTuple<First>, Last] | UniqTuple<First>
		: [...UniqTuple<First>, Last]
	: [];

export type Uniq <X extends readonly any[]> = X extends readonly [...infer First, infer Last] 
? Last extends Unboxing<First>
	? Last extends Primitive
		? UniqTuple<First>
		: [...UniqTuple<First>, Last] | UniqTuple<First>
	: [...UniqTuple<First>, Last]
: X;


type _InputUniq <X extends readonly any[], Preset, Result = X> = X extends readonly [infer First, ...infer Next]
  ? First extends Preset
    ? never
    : _InputUniq<Next, Preset | First, Result>
  : Result;

export type InputUniq <X extends readonly any[]> = X extends readonly [infer First, ...infer Next]
  ? _InputUniq<Next, First, X>
  : X;

