type QueryString<Url extends string> = string extends Url
? string
: Url extends `${string}?${infer Query}`
  ? Query
  : '';

function getQueryString <Url extends string>(url: Url) {
  return (url.split('?')[1] || '') as QueryString<Url>;
}

export default getQueryString;
