export interface RESPONCE<T> {
  [x: string]: any;
  Message: string;
  Result: T;
  State: number;
  CurrentBalance?: number;
  TotalCount?: number;
}
