import { atom } from 'nanostores';
import type { Product } from '@/types/product';

export const products = atom<Product[]>([]);
export const filteredProducts = atom<Product[]>([]);
export const searchQuery = atom<string>('');

export const fetchProducts = async () => {
  try {
    const response = await fetch('/api/products');
    const data: Product[] = await response.json();
    products.set(data);
    filteredProducts.set(data);
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
};