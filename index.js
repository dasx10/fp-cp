const group = require("./array/group");

console.log(group(({ country }) => country)([
    { country: 'GB', currency: 'GBP'},
    { country: 'US', currency: 'USD'},
    { country: 'RU', currency: 'RUB'},
    { country: 'UA', currency: 'UAH'},
]));