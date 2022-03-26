export type _split<SEPARATOR extends string, X extends string> = X extends `${infer F}${SEPARATOR}${infer Next}`
  ? [F, ..._split<SEPARATOR, Next>]
  : [X];

export type Split <SEPARATOR extends string | RegExp, X extends string> = string extends X
  ? string[]
  : string extends SEPARATOR
    ? string[]
    : SEPARATOR extends string 
      ? _split<SEPARATOR, X>
      : string[];
