declare function add<X extends number>(x: X): <Y extends string | number>(y: Y) => Y extends number ? number : `${Y}${X}`;
declare function add<X extends string>(x: X): <Y extends string | number>(y: Y) => `${Y}${X}`;
declare function add<X extends number, Y extends number>(x: X, y: Y): number;
declare function add<X extends string | number, Y extends string | number>(x: X, y: Y): `${Y}${X}`;
export default add;
