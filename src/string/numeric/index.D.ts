type _Numeric <X extends string> = X extends `${infer F}${infer Next}`
  ? F extends `${number}`
    ? `${F}${_Numeric<Next>}`
    : _Numeric<Next>
  : '';

export type Numeric <X extends string> = string extends X 
  ? `${number}` | ''
  : _Numeric<X>;
