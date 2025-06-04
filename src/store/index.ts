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

  isEmpty() {
    return this.storage.size === 0;
  }
}
