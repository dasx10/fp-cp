declare const queryGet: <Url extends string>(value: string, url: Url) => string | true | (string | true)[];
export default queryGet;
