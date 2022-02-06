type Cap<R extends Record<string, any>> = keyof R extends string
  ? Record<Capitalize<keyof R>, unknown>
  : R;

type Cap2<R extends Record<string, any>, R2 extends Record<string, any>> = keyof R extends string ? {
  [key in keyof R]: R2[Uncapitalize<key>]
} : R2;

export type CapitalizeKeys<R extends Record<string, any>> = Cap2<Cap<R>, R>;

function capitalizeKeys <InputRecord extends Record<string, any>>(record: InputRecord) {
    const mapped = Object.create(record);
    for (const key in record) mapped[key.substr(0, 1).toUpperCase() + key.substr(1).toLowerCase()] = record[key];
    return mapped as CapitalizeKeys<InputRecord>;
}

export default capitalizeKeys;
