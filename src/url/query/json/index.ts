import getQueryString  from "../get/queryString/index";
import querySplitParam from "../split/params/index";
import querySplitPoint from "../split/pointers/index";

const queryJson = <Url extends string>(url: Url) => {
  const query = getQueryString(url);
  if (query) {
    const queryPointers = querySplitPoint(query);
    const { length } = queryPointers;
    if (length) {
      const [key, value] = querySplitParam(queryPointers[0]);
      const map = new Map<string, true | string | Set<string | true>>([
        [
          key,
          value === true || typeof value === 'string'
            ? value
            : new Set<string | true>(value)
        ]
      ]);

      let index = 1;
      while (index < length) {
        const [key, value] = querySplitParam(queryPointers[index]);
        if (key) {
          const has = map.get(key);
          if (has) {
            if (has === true || typeof has === 'string') map.set(
              key,
              new Set([
                has,
                value === true || typeof value === 'string'
                  ? value
                  : value[0]
                ]));
            else has.add(value === true || typeof value === 'string' ? value : value[0]);
          } else {
            map.set(
              key,
              value === true || typeof value === 'string'
                ? value
                : new Set<string | true>(value)
            );
          }
        }
        
        index++;
      }
      
      const queryData: Record<string, string | true | (string | true)[]> = {};
      map.forEach((value, key) => queryData[key] = value === true || typeof value === 'string' ? value : [...value]);
      return queryData;
    }
  }

  return {};
}

export default queryJson;
