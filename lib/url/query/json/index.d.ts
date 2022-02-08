declare const queryJson: <Url extends string>(url: Url) => Record<string, string | true | (string | true)[]>;
export default queryJson;
