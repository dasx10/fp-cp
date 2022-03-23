import { Tail as TailElement } from "../../../array/at/tail/index.D";
import { Chars } from "../../chars/index.D";

export type Tail <X extends string> = string extends X 
  ? string | undefined 
  : TailElement<Chars<X>>;
