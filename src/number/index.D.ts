export type ExcludeNumberType<T = string | boolean | any[] | Record<PropertyKey, any> | undefined | null | ((...a: any) => any)> = T extends number ? never : T;

export type ExcludeNumber<X extends number, Y extends number = number> = number extends X ? number : number extends Y 
    ? number
    : X extends Y ? never : X;

export type OnlyNegative <X extends number> = `${X}` extends `-${number}` ? X : never;

export type ExcludeNegative<X extends number> = number extends X 
  ? X 
  : `${X}` extends `-${number}`
    ? never
    : X;

export type ExcludePositive<X extends number> = number extends X
  ? X
  : `${X}` extends `-${number}`
    ? X
    : never;

export type ExcludeFloat<X extends number> = number extends X
  ? X
  : `${X}` extends `${number}.${number}`
    ? never
    : X;

export type UINT <X extends number> = ExcludeNegative<ExcludeFloat<X>>;
