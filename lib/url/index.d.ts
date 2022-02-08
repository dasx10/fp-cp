declare class Url extends URL {
    static readonly queryJson: <Url_1 extends string>(url: Url_1) => Record<string, string | true | (string | true)[]>;
}
export default Url;
