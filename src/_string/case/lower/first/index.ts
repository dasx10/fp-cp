function toLowerCaseFirst <Value extends string>(value: Value | String): Uncapitalize<Value> {
    switch (value.length) {
        // @ts-ignore
        case 0 : return '';
        // @ts-ignore
        case 1 : return value[0].toLowerCase();
        // @ts-ignore
        default: return value[0].toLowerCase() + value.substr(1);
    }
}

export default toLowerCaseFirst;