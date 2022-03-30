export type Nullable             = null    | undefined;
export type Numbers              = number  | bigint;
export type NotNullablePrimitive = boolean | string | Numbers;
export type Primitive            = NotNullablePrimitive | Nullable;
export type Reference            = object  | ((...args: unknown[]) => unknown) | unknown[];

export type All         = Primitive | Reference;
export type NotNullable = NotNullablePrimitive | Reference;
