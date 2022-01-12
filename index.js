const groupBy = require("./array/groupBy");

/**
 * @param {string} e 
 * @returns 
 */
const getLength = (e) => e.length;
const groupByLength = groupBy(getLength);
const a = groupByLength(['test', 'ddd', 'dsw', 'dd', 'dsadsa'])
console.log(a);