export type ConcatCore = <Y extends readonly any[], X extends readonly any[]>(y: Y, x: X) => [...X, ...Y];
