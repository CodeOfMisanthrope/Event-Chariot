import {Handler} from "~handler";

export interface StoreHandler<T> {
  get(key: string): Nullable<Iterable<Handler<T>>>;

  set(key: string, val: Handler<T>): void;

  clear(): void;

  isEmpty(): boolean;
}
