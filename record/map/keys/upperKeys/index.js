function upperKeys (record) {
    const mapped = Object.create(record);
    for (const key in record) mapped[key.toUpperCase()] = record[key];
    return mapped;
}

module.exports = upperKeys;