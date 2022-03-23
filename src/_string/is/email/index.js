/**
 * @param {string} string 
 * @returns {boolean}
 */
function isEmail (string) {
    return /^[a-zA-Z0-9_.+-]{1,64}@[a-zA-Z0-9-]{1,253}\.[a-zA-Z0-9-.]{1,253}$/.test(string);
}