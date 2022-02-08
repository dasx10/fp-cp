declare type QueryString<Url extends string> = string extends Url ? string : Url extends `${string}?${infer Query}` ? Query : '';
declare function getQueryString<Url extends string>(url: Url): QueryString<Url>;
export default getQueryString;
