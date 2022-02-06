declare function isFalse(x: true): false;
declare function isFalse(x: false): true;
declare function isFalse(x: boolean): boolean;
declare function isFalse(x: unknown): x is false;
export default isFalse;
