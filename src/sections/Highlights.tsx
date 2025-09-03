import { createEffect } from "solid-js";
import { useStore } from "@nanostores/solid";

import ProductCart from "@/components/ProductCard";
import { fetchProducts, products } from "@/store/products";
import { ProductCardSkeleton} from "@/components/ProductCardSkeleton";

export default function Highlights() {
  const $products = useStore(products);

  createEffect(() => {
    fetchProducts();
  });

  return (
    <section class="relative flex flex-wrap gap-2 min-h-[90dvh] w-full overflow-hidden justify-center py-10 " id="highlights">
      {$products().length === 0 && (
        <ProductCardSkeleton
          repeat={4}
        />
      )}

      {$products().length > 0 &&
        $products().map((product) => (
          <ProductCart
            product={product}
            type="featured"
          />
        ))}
    </section>
  );
}
