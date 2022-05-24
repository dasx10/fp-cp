
export type ArrayValue <X extends readonly any[]> = X extends readonly (infer T)[] ? T : never;

export type TupleIndex<X extends readonly any[]> = X extends readonly [any, ...infer X0]
  ? X0 extends readonly [any, ...infer X1]
    ? X1 extends readonly [any, ...infer X2]
      ? X2 extends readonly [any, ...infer X3]
        ? (X0['length'] | X1['length'] | X2['length'] | X3['length'] | TupleIndex<X3>)
        : (0 | 1 | 2)
      : (0 | 1)
    : (0)
  : never;

export type ArrayIndex <X extends readonly any[]> = X extends readonly [any, ...infer Next] 
	? Next['length'] | TupleIndex<Next> 
	: X extends readonly [] ? never : number;
