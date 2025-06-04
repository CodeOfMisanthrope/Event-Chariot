export interface StoreHandler<T> {
  get(key: string): Nullable<T>;

  set(key: string, val: T): void;

  clear(): void;

  isEmpty(): boolean;
}
