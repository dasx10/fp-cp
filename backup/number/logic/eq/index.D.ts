type IS_EQUALS_NUMBERS <Y extends number, X extends number> = number extends Y 
? boolean
: number extends X
  ? boolean
  : Y extends X ? true : false;
