export type ExcludeNumberType<T = string | boolean | any[] | Record<PropertyKey, any> | undefined | null | ((...a: any) => any)> = T extends number ? never : T;
export type ExcludeNumber<X extends number, Y extends number = number> = number extends X ? number : number extends Y 
    ? number
    : X extends Y ? never : X;