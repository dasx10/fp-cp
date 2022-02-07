export type ToCapitalize<X extends string> = string extends X ? string : Capitalize<Lowercase<X>>;

function capitalize <X extends string>(x: X): ToCapitalize<X> {
    switch (x.length) {
        // @ts-ignore
        case 0 : return '';
        // @ts-ignore
        case 1 : return x.toUpperCase();
        // @ts-ignore
        default: return x[0].toUpperCase() + x.substr(1).toLowerCase()
    }
}

export default capitalize;
