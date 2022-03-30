import type { All } from "../index.D";

export type IS_DEFINED <X> = X extends All ? X extends undefined
? false 
: undefined extends Extract<X, undefined> 
  ? boolean
  : true
: boolean;

