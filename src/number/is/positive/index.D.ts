export type IS_POSITIVE <X extends number> = number extends X
? boolean
: `${X}` extends `-${number}`
  ? false
  : true;
