declare function concat<Arrays extends any[]>(...arrays: Arrays[]): <ToArray extends any[]>(array: ToArray) => Arrays extends (infer U)[] ? ToArray extends (infer X)[] ? (U | X)[] : any[] : any[];
export default concat;
