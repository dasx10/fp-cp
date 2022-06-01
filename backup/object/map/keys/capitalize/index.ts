// import upperFirst from "../../../../string/case/upper/first/index";
// import mapKeys from "../index";

// type CapitalizeKeys<R extends Record<string, any>> = keyof R extends string ? {
//   [key in Capitalize<keyof R>]: Uncapitalize<key> extends keyof R 
//     ? R[Uncapitalize<key>]
//     : key extends keyof R
//       ? R[key]
//       : R[Exclude<keyof R, Capitalize<keyof R>>]
// } : R;

// // @ts-ignore
// function capitalizeKeys <InputRecord extends Record<string, any>>(record: InputRecord): CapitalizeKeys<InputRecord>;
// // @ts-ignore
// const capitalizeKeys = mapKeys(upperFirst);
// export default capitalizeKeys;
