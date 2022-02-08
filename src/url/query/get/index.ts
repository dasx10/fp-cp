import queryJson from "../json/index";
const queryGet = <Url extends string>(value: string, url: Url) => queryJson(url)[value];
export default queryGet;
