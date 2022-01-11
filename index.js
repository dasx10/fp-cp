const group = require("./array/group");
const pipe = require("./function/pipe");
const kebabToCamelCase = require("./string/case/kebab/toCamel");
const pascalToKebabCase = require("./string/case/pascal/toKebab");
const pascalToSnakeCase = require("./string/case/pascal/toSnake");
const pattern = require("./string/replace/pattern");
const substr = require("./string/substr");

console.log(group(({ country }) => country)([
    { country: 'GB', currency: 'GBP'},
    { country: 'US', currency: 'USD'},
    { country: 'RU', currency: 'RUB'},
    { country: 'UA', currency: 'UAH'},
]));

console.log(
    pascalToKebabCase('CaseStringTest')
);