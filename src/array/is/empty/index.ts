function arrayIsEmpty(value: []): true;
function arrayIsEmpty(value: [any, ...any]): false;
function arrayIsEmpty(value: any[]): boolean;
function arrayIsEmpty(value: any[]) {
  return value.length === 0;
}

export default arrayIsEmpty;
