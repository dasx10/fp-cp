type _Indexes<X extends readonly any[]> = X extends readonly [any, ...infer T]
  ? [..._Indexes<T>, T['length']]
  : [];

export type Indexes <X extends readonly any[]> = X extends readonly [any, ...infer T] 
  ? [..._Indexes<T>, T['length']]
  : X extends readonly []
    ? []
    : number[];

export type IndexesCore = <X extends readonly any[]>(x: X) => Indexes<X>;
export type IndexesLib = IndexesCore;
