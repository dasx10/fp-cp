declare function arrayIsEmpty(value: []): true;
declare function arrayIsEmpty(value: [any, ...any]): false;
declare function arrayIsEmpty(value: any[]): boolean;
export default arrayIsEmpty;
