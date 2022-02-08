declare function querySplitParam<QueryPointer extends string>(queryPointer: QueryPointer): [string, [string]] | [string, [true]] | [string, string] | [string, true];
export default querySplitParam;
