
function isEmptyString(value: '') : true;
function isEmptyString(value: string) : false;
function isEmptyString(value: unknown): value is '';
function isEmptyString(value: string | unknown) {
  return value === '';
}

export default isEmptyString;
