function camelKeysToKebab (record) {
    const mapped = Object.create(record);
    for (const key in record) mapped[//WIP] = record[key];
    return mapped;
}