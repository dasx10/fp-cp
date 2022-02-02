declare class String<Value extends string> extends globalThis.String {
    constructor(value?: Value | {
        toString: () => Value;
    });
}
export default String;
