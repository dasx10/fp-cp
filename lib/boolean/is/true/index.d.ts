declare function isTrue(x: true): true;
declare function isTrue(x: false): false;
declare function isTrue(x: boolean): boolean;
declare function isTrue(x: unknown): x is true;
export default isTrue;
