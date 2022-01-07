function characters (string) {
    return string.replace(/[^a-zа-я]/gi, '');
}

module.exports = characters;