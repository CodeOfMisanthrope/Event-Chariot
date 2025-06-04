import {Handler} from "~handler";
import {StoreHandler} from "~store/interfaces";

export class HandeStoreDefault<T> implements StoreHandler<T>{
  protected storage: Map<string, Set<Handler<T>>>;

  constructor() {
    this.storage = new Map();
  }

  get(key: string) {
    if (this.storage.has(key))
    return ;
  }

  isEmpty() {
    return this.storage.size === 0;
  }
}
