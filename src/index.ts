import {StoreHandler} from "~store/interfaces";
import {HandeStoreDefault} from "~store";
import {Handler} from "~handler";

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

  protected _on(event:string, handler:Handler<T>, store:StoreHandler<T> = this._bubbles) {
    store.set(event, handler);
  }

  public on(event: string, handler: Handler<T>) {
    this._on(event, handler);
  }
}
