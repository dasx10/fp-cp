export declare type ToCapitalize<X extends string> = string extends X ? string : Capitalize<Lowercase<X>>;
declare function capitalize<X extends string>(x: X): ToCapitalize<X>;
export default capitalize;
