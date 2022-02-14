export type DropEnd <Tuple extends readonly any[]> = Tuple extends readonly [...infer F, any]
? F
: Tuple;
