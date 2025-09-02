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
    throw error;
  }
};

export const filterProducts = (query: string) => {
  searchQuery.set(query);
  if (!query) {
    filteredProducts.set(products.get());
    return;
  }
  const filtered = products.get().filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
  filteredProducts.set(filtered);
};

export const filterProductById = async ({ id }: { id: string }) : Promise<Product | null> => {

  try {
    const url = import.meta.env.PUBLIC_SITE_URL;
    const response = await fetch(`${url}/api/product?id=${id}`);
    const data: Product = await response.json();
    return data;

  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};