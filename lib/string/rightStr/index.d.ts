declare function rightStr<X extends string, Y extends string>(x: X, y: Y): `${X}${Y}`;
declare function rightStr<X extends string>(x: X): <Y extends string>(y: Y) => `${X}${Y}`;
export default rightStr;
