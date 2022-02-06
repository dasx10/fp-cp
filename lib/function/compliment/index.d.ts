declare function complement<T extends any[]>(executor: (...args: T) => false): (...args: T) => true;
declare function complement<T extends any[]>(executor: (...args: T) => true): (...args: T) => false;
declare function complement<T extends any[]>(executor: (...args: T) => any): (...args: T) => boolean;
export default complement;
