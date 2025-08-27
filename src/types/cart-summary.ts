import type { CartItem } from "./cart-item";

export interface CartSummary {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  isEmpty: boolean;
}