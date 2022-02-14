export type TOGGLE <X extends boolean> = X extends false 
  ? true 
  : X extends true ? false : boolean;
