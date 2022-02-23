export type Clamp <MINIMUM extends number, MAXIMUM extends number, X extends number> = number extends MINIMUM | MAXIMUM | X 
  ? number
  : MINIMUM | X | MAXIMUM;
