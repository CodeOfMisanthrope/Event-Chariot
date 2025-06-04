import {StoreHandler} from "~store/interfaces";
import {HandeStoreDefault} from "~store";

console.log("Start...");

class EventEmitter<T> {
  protected _captures: StoreHandler<T>;
  protected _bubbles: StoreHandler<T>;

  constructor(
    protected parent: EventEmitter<T>
  ) {
    this._captures = new HandeStoreDefault();
    this._bubbles = new HandeStoreDefault();
  }
}
