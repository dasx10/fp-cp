export type IS_NEGATIVE<Value extends number> = number extends Value 
  ? boolean 
  : `${Value}` extends `-${number}`
    ? true
    : false;
