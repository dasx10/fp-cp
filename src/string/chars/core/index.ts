import type { Chars } from '../index.D';

function charsCore <X extends string>(x: X): Chars<X>;
function charsCore (...args: string[]): string[] {
  return args;
}

export default charsCore;
