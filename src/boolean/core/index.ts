import { All } from "../../is/index.D";
import { TOGGLE } from "../toggle/index.D";

const boolean = Boolean as BooleanConstructor & {
	<X extends boolean>(x: X): X;
	<X extends All>(x: X): TOGGLE<TOGGLE<X>>;
	(x: unknown): boolean;
};

export default boolean;
