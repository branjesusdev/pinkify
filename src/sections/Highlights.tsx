import { createEffect } from "solid-js";
import { useStore } from "@nanostores/solid";

import type { Product } from "@/types/product";
import Card from "@/components/ProductCart";
import { fetchProducts, products } from "@/store/products";
import { addToCart, toggleSidebar } from '@/store/cart';

export default function Highlights() {
  const $products = useStore(products);
  createEffect(() => {
    fetchProducts();
  });

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toggleSidebar();
  };

  return (
    <section class="relative flex flex-wrap gap-2 min-h-[90dvh] w-full overflow-hidden justify-center">
      {$products().map((product) => (
        <Card
          title={product.name}
          amount={product.price}
          image={product.image}
          type="featured"
          handleAddToCart={() => handleAddToCart(product)}
        />
      ))}
    </section>
  );
}
