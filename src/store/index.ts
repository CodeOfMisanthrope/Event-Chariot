import {Handler} from "~handler";
import {StoreHandler} from "~store/interfaces";

export class HandeStoreDefault<T> implements StoreHandler<T>{
  protected storage: Map<string, Set<Handler<T>>>;

  constructor() {
    this.storage = new Map();
  }

  get(key: string) {
    return this.storage.has(key) ? this.storage.get(key) : undefined;
  }

  set(key: string, handler: Handler<T>): void {
    if (this.storage.has(key)) {
      this.storage.get(key).add(handler);

    } else {
      this.storage.set(key, new Set([handler]));
    }
  }

  clear() {
    this.storage.clear();
  }

  isEmpty() {
    return this.storage.size === 0;
  }
}
