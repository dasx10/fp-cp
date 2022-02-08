declare type CapitalizeKeys<R extends Record<string, any>> = keyof R extends string ? {
    [key in Capitalize<keyof R>]: Uncapitalize<key> extends keyof R ? R[Uncapitalize<key>] : key extends keyof R ? R[key] : R[Exclude<keyof R, Capitalize<keyof R>>];
} : R;
declare function capitalizeKeys<InputRecord extends Record<string, any>>(record: InputRecord): CapitalizeKeys<InputRecord>;
export default capitalizeKeys;
