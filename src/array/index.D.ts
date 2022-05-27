
export type ArrayValue <X extends readonly unknown[]> = X extends readonly (infer T)[] ? T : never;

export type TupleIndex<X extends readonly unknown[]> = X extends readonly [unknown, ...infer X0]
  ? X0 extends readonly [unknown, ...infer X1]
    ? X1 extends readonly [unknown, ...infer X2]
      ? X2 extends readonly [unknown, ...infer X3]
        ? (X0['length'] | X1['length'] | X2['length'] | X3['length'] | TupleIndex<X3>)
        : (0 | 1 | 2)
      : (0 | 1)
    : (0)
  : never;

export type ArrayIndex <X extends readonly unknown[]> = X extends readonly [unknown, ...infer Next] 
	? Next['length'] | TupleIndex<Next> 
	: X extends readonly [] 
		? never
		: number & keyof X;
