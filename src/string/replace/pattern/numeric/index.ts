type Numeric<X extends string> = string extends X ? `${number}` | '' :
X extends `${number}${infer S}`
? X extends `${infer N}${S}`
  ? S extends '' ? N : `${N}${Numeric<S>}`
  : ''
: X extends ''
  ? ''
  : X extends `${infer F}${infer Next}`
    ? Numeric<Next> : X;


function numeric <X extends string>(x: X) {
  return x.replace(/[^0-9]/g, '') as Numeric<X>;
}

export default numeric;
