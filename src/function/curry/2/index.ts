import _, { placeholder } from "../../../index";
import { Def2, FirstParameter, SecondParameter } from "../../index.D";


/** 
 * optimization curry 2 arguments
 * @example
 * const sumC    = curry2((a: number, b: number) => a + b);  // [function(a: number, b: number): number];
 * const addOne  = sumCurry(1);                              // [function(b: number): number];
 * const sumAdd1 = addOne(3);                                // 4
 * const sum     = sumCurry(1, 2);                           // 3
 * 
 * const add2    = curry2((a: number, b: number) => a + b, 2); // [function(b: number): number];
 * const sumAdd2 = add2(3, 2);                                 // 5
 * */

function curry2 <Def extends Def2, Y extends FirstParameter<Def>>(executor: Def, y: Y): <X extends SecondParameter<Def>>(x: X) => ReturnType<Def>;
function curry2 <Def extends Def2, X extends SecondParameter<Def>>(executor: Def, _: placeholder, x: X): <Y extends FirstParameter<Def>>(y: Y) => ReturnType<Def>;

function curry2 <Def extends Def2>(executor: Def): {
  <Y extends FirstParameter<Def>, X extends SecondParameter<Def>>(y: Y, x: X): ReturnType<Def>;
  <Y extends FirstParameter<Def>>(y: Y): <X extends SecondParameter<Def>>(x: X) => ReturnType<Def>;
  <X extends SecondParameter<Def>>(_:placeholder ,x: X): <Y extends FirstParameter<Def>>(y: Y) => ReturnType<Def>;
};


function curry2 <Y, X, R>(executor: Def2<Y, X, R>, y?: Y | X | placeholder, x?: X) {
		switch (arguments.length) {
				case 1: return function useCurry2 (y: Y | X | placeholder, x?: X) {
						switch (arguments.length) {
								case 1 : return (x: X) => executor(<Y>y, x);
								default: return arguments[0] === _ ? (x: Y) => executor(x, <X>y) : executor(<Y>y, <X>x);
						}
				};
				case 2 : return (x: X) => executor(<Y>y, x);
				default: return arguments[1] === _ ? (x: Y) => executor(x, <X>y) : executor(<Y>y, <X>x);
		}
}

export default curry2;
