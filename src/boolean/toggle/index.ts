// @ts-ignore
function toggle (x: false): true;
// @ts-ignore
function toggle (x: true): false;
// @ts-ignore
function toggle (x: boolean): boolean;

// @ts-ignore
const toggle = <X extends boolean>(x: X) => !x;
export default toggle;

const a = toggle(!false as boolean)
