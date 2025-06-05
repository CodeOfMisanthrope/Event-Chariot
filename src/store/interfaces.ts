import {Handler} from "~handler";

export interface StoreHandler<T> {
  get(key: string): Nullable<Iterable<Handler<T>>>;

  set(key: string, handler: Handler<T>): void;

  remove(key: string, handler?: Handler<T>): void;

  clear(): void;

  isEmpty(): boolean;
}
