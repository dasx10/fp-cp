import { IS_FALSE } from './index.D';

// @ts-ignore
function isFalse <X>(x: X): IS_FALSE<X>;
// @ts-ignore
function isFalse (x: unknown): x is false;

// @ts-ignore
const isFalse = <X extends boolean>(x: X) => x === false;
export default isFalse;
