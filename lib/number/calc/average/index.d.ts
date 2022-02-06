declare const average: <A extends number, B extends number | undefined>(a: A, b?: B | undefined) => number extends B ? <B_1 extends B & number>(b: B_1) => number : number;
export default average;
