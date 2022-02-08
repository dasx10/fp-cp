// type E <R extends Record<string, any>> = {
//   [K in keyof R]: [K, R[K]];
// }
// export type Entries<R extends Record<string, any>> = E<R>[keyof R][]
