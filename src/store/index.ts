import {StoreHandler} from "./interfaces";
import {Handler} from "../handler";

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
