import _curry2 from "../../function/curry/2/_/index";
import _arrayFit from "./_/index";
import type { placeholder } from "../../index";
import type { ArrayFitCore, TupleFit } from "./_/index.D";

const arrayFit = _curry2(_arrayFit) as ArrayFitCore & {
	<Length extends number>(minLength: Length) : <X extends readonly any[]>(x: X) => TupleFit<Length, X>;
	<X extends readonly any[]>(_: placeholder, x: X): <Length extends number>(minLength: Length) => TupleFit<Length, X>;
};

export default arrayFit;
