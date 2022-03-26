type _char <X extends string> = X extends `${infer F}${infer Next}`
  ? Next extends '' 
    ? F
    : F | _char<Next>
  : X;

export type Char <X extends string> = string extends X
  ? string
  : _char<X>;
