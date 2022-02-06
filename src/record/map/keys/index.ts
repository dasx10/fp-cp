import _curry2 from "../../../function/curry/_2/index";
import type { FirstParameter } from "../../../../dist/function/index.D";
import type { SecondParameter } from "../../../function/index.D";

// @ts-ignore
function mapKeys <
  Executor extends <K extends string, V>(key: K, value: V, record: Record<K, V>) => any,
  InputRecord extends Record<FirstParameter<Executor>, SecondParameter<Executor>>
>(executor: Executor, record: InputRecord): Record<ReturnType<Executor>, InputRecord[keyof InputRecord]>

// @ts-ignore
function mapKeys <
  Executor extends <K extends string, V>(key: K, value: V, record: Record<K, V>) => any,
>(executor: Executor): <
  InputRecord extends Record<FirstParameter<Executor>, SecondParameter<Executor>>
>(record: InputRecord) => Record<ReturnType<Executor>, InputRecord[keyof InputRecord]>

// @ts-ignore
const mapKeys = _curry2(<
  Executor extends <K extends string, E>(key: K, value: E, object: Record<K, E>) => string,
  InputRecord extends Record<FirstParameter<Executor>, SecondParameter<Executor>>,
>(
  executor: Executor,
  record: InputRecord
) => {
  const mapped = Object.create(record);
  for (const key in record) {
    const value = record[key];
    mapped[executor(key, value, record)] = value;
  }
  return mapped as InputRecord // Record<ReturnType<Executor>, >;
});

export default mapKeys;
