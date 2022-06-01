export type TOGGLE<X> = X extends true
  ? false : X extends Falsy 
    ? true : X extends number
      ? NumberTrusty<X> extends true 
        ? false 
      : NumberFalsy<X> extends true 
      ? false 
    : boolean : boolean;

export type Falsy = false | 0 | undefined | null | '';

export type NumberTrusty <X extends number> = number extends X ? boolean : X extends 0 ? false : true;
export type NumberFalsy <X extends number> = number extends X ? boolean : X extends 0 ? true : false;

export type ToggleCore = <X>(x: X) => TOGGLE<X>;
