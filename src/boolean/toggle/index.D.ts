export type TOGGLE<X> = X extends true
  ? false : X extends Falsy 
    ? true : X extends number
      ? NumberTruty<X> extends true 
        ? false 
      : NumberFalsy<X> extends true 
      ? false 
    : boolean : boolean;

export type Falsy = false | 0 | undefined | null | '';

export type NumberTruty <X extends number> = number extends X ? boolean : X extends 0 ? false : true;
export type NumberFalsy <X extends number> = number extends X ? boolean : X extends 0 ? true : false;
