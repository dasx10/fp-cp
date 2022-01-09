function lowerKeys (record) {
    const mapped = Object.create(record);
    for (const key in record) mapped[key.toLowerCase()] = record[key];
    return mapped;
}

module.exports = lowerKeys;