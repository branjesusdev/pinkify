import type { AddProductRequest } from "@/types/add-product-request";
import type { CartItem } from "@/types/cart-item";
import type { Product } from "@/types/product";

export interface IProductRepository {
  findById(id: string): Promise<Product | null>;
}

export interface ICartRepository {
  getItems(): Promise<CartItem[]>;
  saveItems(items: CartItem[]): Promise<void>;
}

export interface ICartService {
  addProduct(request: AddProductRequest): Promise<CartItem>;
  getCartItems(): Promise<CartItem[]>;
}