export type StringCore = {
	(): '';
  <X extends string>(x: X): X;
  <X extends number | bigint | boolean>(x: X): `${X}`;
  <X extends null | undefined>(x: X): '';
  (x: unknown): string;
}
