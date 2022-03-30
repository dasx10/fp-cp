export type DropLast <X extends readonly any[]> = X extends readonly [...infer First, any]
  ? First
  : X;
