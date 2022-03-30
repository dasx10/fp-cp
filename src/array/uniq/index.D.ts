import type { Unboxing } from "../index.D";

type _Uniq<X extends readonly any[], Preset> = X extends readonly [infer First, ...infer Next]
  ? First extends Preset
    ? First extends (number | string | boolean | undefined | null | bigint) 
      ? _Uniq<Next, Preset | First>
      : _Uniq<Next, Preset | First> | [First, ..._Uniq<Next, Preset | First>]
    : [First, ..._Uniq<Next, Preset | First>]
  : [];

export type Uniq <X extends readonly any[]> = X extends readonly [...infer Next, infer Last] 
  ? [..._Uniq<Next, Last>, Last]
  : Unboxing<X>[];


type _InputUniq <X extends readonly any[], Preset, Result = X> = X extends readonly [infer First, ...infer Next]
  ? First extends Preset
    ? never
    : _InputUniq<Next, Preset | First, Result>
  : Result;

export type InputUniq <X extends readonly any[]> = X extends readonly [infer First, ...infer Next]
  ? _InputUniq<Next, First, X>
  : X;

