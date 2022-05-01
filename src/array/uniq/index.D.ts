import { Primitive } from "../../is/index.D";
import type { ArrayValue } from "../index.D";

type UniqTuple<X extends readonly any[]> = X extends readonly [...infer First, infer Last]
  ? Last extends ArrayValue<First>
		? Last extends Primitive 
			? UniqTuple<First>
			: [...UniqTuple<First>, Last] | UniqTuple<First>
		: [...UniqTuple<First>, Last]
	: [];

export type Uniq <X extends readonly any[]> = X extends readonly [...infer First, infer Last] 
? Last extends ArrayValue<First>
	? Last extends Primitive
		? UniqTuple<First>
		: [...UniqTuple<First>, Last] | UniqTuple<First>
	: [...UniqTuple<First>, Last]
: X;


type _InputUniq <X extends readonly any[], Present = X> = X extends readonly [infer First, ...infer Next]
  ? ArrayValue<Next> extends First
    ? never
    : _InputUniq<Next, Present>
  : Present;

export type InputUniq <X extends readonly any[]> = X extends readonly [infer First, ...infer Next]
	? ArrayValue<Next> extends First
		? never
		: _InputUniq<Next, X>
  : X;
