export type Size      <X extends readonly any[]>       =  X['length'];
export type SizeDef = <X extends readonly any[]>(x: X) => Size<X>;
