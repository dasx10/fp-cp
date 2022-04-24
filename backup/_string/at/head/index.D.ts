export type Head <X extends string> = string extends X 
  ? string | undefined 
  : X extends `${infer F}${infer N}` ? F : undefined;
