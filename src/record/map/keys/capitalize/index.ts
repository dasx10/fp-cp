import capitalize from "../../../../string/case/capitalize/index";
import mapKeys from "../index";

type CapitalizeKeys<R extends Record<string, any>> = keyof R extends string ? {
  [key in Capitalize<keyof R>]: Uncapitalize<key> extends keyof R 
    ? R[Uncapitalize<key>]
    : R[keyof R]
} : R;

// @ts-ignore
function capitalizeKeys <InputRecord extends Record<string, any>>(record: InputRecord): CapitalizeKeys<InputRecord>;
// @ts-ignore
const capitalizeKeys = mapKeys(capitalize)
export default capitalizeKeys;
