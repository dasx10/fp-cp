declare const capitalizeOf: <Value extends string>(array: Value[]) => Capitalize<Lowercase<Value>>[];
export default capitalizeOf;
