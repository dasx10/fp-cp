import map from "../array/map/index";

class Promise<T> extends globalThis.Promise<T> {
  static map <
    T,
    R,
    P extends Promise<T>[]
  >(executor: (element: T, index: number, array: T[]) => R, promises: P): Promise<R> {
    return this.all(promises).then(map(executor));
  }
}

export default Promise;
