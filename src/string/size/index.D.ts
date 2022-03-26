import { Chars } from "../chars/index.D";
export type StrSize <X extends string> = Chars<X>['length'];
