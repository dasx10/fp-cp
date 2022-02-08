import type { FirstParameter } from "../../../../dist/function/index.D";
import type { SecondParameter } from "../../../function/index.D";
declare function mapKeys<Executor extends <K extends string, V>(key: K, value: V, record: Record<K, V>) => any, InputRecord extends Record<FirstParameter<Executor>, SecondParameter<Executor>>>(executor: Executor, record: InputRecord): Record<ReturnType<Executor>, InputRecord[keyof InputRecord]>;
declare function mapKeys<Executor extends <K extends string, V>(key: K, value: V, record: Record<K, V>) => any>(executor: Executor): <InputRecord extends Record<FirstParameter<Executor>, SecondParameter<Executor>>>(record: InputRecord) => Record<ReturnType<Executor>, InputRecord[keyof InputRecord]>;
export default mapKeys;
