export type ConcatRightCore = <Y extends readonly any[], X extends readonly any[]>(y: Y, x: X) => [...Y, ...X];
