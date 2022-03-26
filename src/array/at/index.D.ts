import { ToIndex } from '../../arrayLike/index.D';
import { placeholder }  from '../../index';
import { Unboxing }     from '../index.D';
import { HeadDef } from './head/index.D';
import { AtLeft, AtLeftDef }       from './left/index.D';
import { AtRandomDef } from './random/index.D';
import { AtRight, AtRightDef }      from './right/index.D';
import { TailDef } from './tail/index.D';

export type At <
  Index extends number,
  X extends readonly any[]
> = number extends Index
? Unboxing<X> | undefined
: `${Index}` extends `-${number}`
  ? AtRight<Index, X>
  : AtLeft <Index, X>


export type AtCore = <Index extends number, X extends readonly any[]>(index: ToIndex<Index>, x: X) => At<Index, X>;

export type AtDef = AtCore & {
  <Index extends number>(index: ToIndex<Index>): <X extends readonly any[]>(x: X) => At<Index, X>;
  <X extends readonly any[]>(_: placeholder, x: X): <Index extends number>(index: ToIndex<Index>) => At<Index, X>;
}

export type ArrayAt = AtDef & {
  core   : AtCore,
  right  : AtRightDef,
  left   : AtLeftDef,
  random : AtRandomDef,
  first  : HeadDef,
  last   : TailDef,
}
