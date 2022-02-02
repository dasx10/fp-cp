declare const capitalizeOf: <Value extends string>(array: Value[]) => import("../..").default<Capitalize<Lowercase<Value>>, Capitalize<Lowercase<Value>>[]>;
export default capitalizeOf;
