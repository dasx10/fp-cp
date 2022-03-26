import { Index, Unboxing } from "../index.D";
export type ForEachIterate <X extends readonly any[] = any[], Return = any> = (value: Unboxing<X>, index: Index<X>, array: X) => Return;

export type ForEachDef = {
  <X extends readonly any[]>(def: ForEachIterate<X>, x: X): void;
  <Value>(def: (value: Value, index: number, array: Value[]) => any): (array: Value[]) => void;
  right: {
    <X extends readonly any[]>(def: ForEachIterate<X>, x: X): void;
    <Value>(def: (value: Value, index: number, array: Value[]) => any): (array: Value[]) => void;
  }
}
