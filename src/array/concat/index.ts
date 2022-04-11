// core
import _curry2 from "../../function/curry/2/_/index";
import _concat from "./_/index";

// interfaces
import type { placeholder } from './../../index';
import type { ConcatCore } from "./_/index.D";

// dependency
import concatRight from "./right/index";

// @ts-ignore
const concat: ConcatCore & {
  <Y extends readonly any[]>(y: Y): <X extends readonly any[]>(x: X) => [...X, ...Y];
  <X extends readonly any[]>(_: placeholder, x: X): <Y extends readonly any[]>(y: Y) => [...X, ...Y]; 
} = _curry2(_concat);

export default Object.assign(concat, {
  core  : _concat, 
  right : concatRight
});
