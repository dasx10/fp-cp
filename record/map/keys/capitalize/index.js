function capitalizeKeys (record) {
    const mapped = Object.create(record);
    for (const key in record) mapped[key.substr(0, 1).toUpperCase() + key.substr(1).toLowerCase()] = record[key];
    return mapped;
}

module.exports = capitalizeKeys;