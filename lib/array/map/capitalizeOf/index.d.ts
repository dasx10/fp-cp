declare const capitalizeOf: <Value extends string>(array: Value[]) => import("../../index").default<Capitalize<Lowercase<Value>>, Capitalize<Lowercase<Value>>[]>;
export default capitalizeOf;
