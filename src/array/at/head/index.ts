import { Chars } from '../../../string/chars/index.D';
import { Head } from './index.D';

function head <X extends any[]>(x: X): Head<X>;
function head <X extends string>(x: X): Head<Chars<X>>;
function head (x: string | any[]) {
  return x[0];
}

export default head;
