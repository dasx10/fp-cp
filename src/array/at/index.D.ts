import type { ToIndex }             from '../../arrayLike/index/index.D';
import type { placeholder }         from '../../index';
import type { ArrayValue }          from '../index.D';
import type { HeadDef }             from './head/index.D';
import type { ArrayAtLeft, AtLeftDef } from './left/index.D';
import type { AtArrayRandom }         from './random/index.D';
import type { ArrayAtRight, AtRightDef } from './right/index.D';
import type { TailDef }             from './tail/index.D';

export type At <
  Index extends number,
  X extends readonly any[]
> = number extends Index
	? ArrayValue<X> | undefined
	: `${Index}` extends `-${number}`
		? ArrayAtRight<Index, X>
		: ArrayAtLeft <Index, X>


export type AtCore = <Index extends number, X extends readonly any[]>(index: ToIndex<Index>, x: X) => At<Index, X>;

export type AtDef = AtCore & {
  <Index extends number>(index: ToIndex<Index>): <X extends readonly any[]>(x: X) => At<Index, X>;
  <X extends readonly any[]>(_: placeholder, x: X): <Index extends number>(index: ToIndex<Index>) => At<Index, X>;
}

export type ArrayAt = AtDef & {
  core   : AtCore,
  right  : AtRightDef,
  left   : AtLeftDef,
  random : AtArrayRandom,
  first  : HeadDef,
  last   : TailDef,
}
