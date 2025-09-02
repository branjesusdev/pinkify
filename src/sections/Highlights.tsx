import { createEffect } from "solid-js";
import { useStore } from "@nanostores/solid";

import type { Product } from "@/types/product";
import ProductCart from "@/components/ProductCard";
import { fetchProducts, products } from "@/store/products";
import { addToCart, toggleSidebar } from "@/store/cart";

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
    <section class="relative flex flex-wrap gap-2 min-h-[90dvh] w-full overflow-hidden justify-center py-10 ">
      {$products().length === 0 &&
        Array.from({ length: 4 }).map((_, i) => (
          <ProductCart
            id={0}
            title=""
            amount={0}
            image=""
            type="featured"
            isSkeleton={true}
          />
        ))}

      {$products().length > 0 &&
        $products().map((product) => (
          <ProductCart
            id={product.id}
            title={product.name}
            amount={product.price}
            image={product.imageUrl}
            type="featured"
            handleAddToCart={() => handleAddToCart(product)}
          />
        ))}
    </section>
  );
}
