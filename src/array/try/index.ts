const arrayTry = <X>(x: X): X extends readonly any[] ? X : [X] => (Array.isArray(x) ? x : [x]) as X extends readonly any[] ? X : [X];
export default arrayTry;
