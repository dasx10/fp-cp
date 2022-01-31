class String<Value extends string> extends globalThis.String {
    constructor(value?: Value | { toString: () => Value }) {
        super(value);
    }
}

export default String;