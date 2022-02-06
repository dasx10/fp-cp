declare function leftStr<X extends string, Y extends string>(x: X, y: Y): `${Y}${X}`;
declare function leftStr<X extends string>(x: X): <Y extends string>(y: Y) => `${Y}${X}`;
export default leftStr;
