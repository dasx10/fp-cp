declare type Numeric<X extends string> = string extends X ? `${number}` | '' : X extends `${number}${infer S}` ? X extends `${infer N}${S}` ? S extends '' ? N : `${N}${Numeric<S>}` : '' : X extends '' ? '' : X extends `${infer F}${infer Next}` ? Numeric<Next> : X;
declare function numeric<X extends string>(x: X): Numeric<X>;
export default numeric;
