import type { ProductType } from "./product-type";

export type CartItem = ProductType & {
  qty: number;
};
