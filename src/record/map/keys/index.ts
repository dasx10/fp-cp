// import curry2 from "../../../function/curry/2/index";
// import capitalize from "../../../string/case/capitalize/index";

// const _mapKeys = <K extends PropertyKey, R extends PropertyKey, T extends Record<K, any>>(
//   executor: (key: K, element: T[K], record: T) => R,
//   record: T
// ) => {
//   const mapped = Object.create(record);
//   for (const key in record) {
//     const value = record[key];
//     mapped[executor(key, value, record)] = value;
//   }
//   return mapped as Record<R, T[K]>;
// }

// const mapKeys = curry2(_mapKeys);

// export default mapKeys;
