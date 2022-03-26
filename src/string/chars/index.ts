import { Chars } from './index.D';

function chars <X extends string>(x: X): Chars<X>;
function chars (...args: string[]): string[] {
  return args;
}

export default chars;
