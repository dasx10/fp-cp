/* eslint-disable @typescript-eslint/ban-ts-comment */
import Array from '../../array/index';
import type { CharOf } from '../char/at/index.D';
import type { Chars } from './index.D';

function chars <Value extends string>(value: Value | string) {
  // @ts-ignore
  return Array.of<CharOf<Value>, CharsOf<Value>>(...value) as Array<CharOf<Value>, Chars<Value>>;
}

export default chars;
