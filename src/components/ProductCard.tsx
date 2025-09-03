import type { Product } from "@/types/product";
import ProductButton from "./ProductButton";
import { ProductPrice } from "./ProductPrice";

type CardProps = {
  product: Product;
  type: "new" | "featured" | "sale";
};

export default function ProductCart({ product }: CardProps) {
  return (
    <>
      <div class=" relative flex-[1_1_40%] sm:flex-[1_1_48%] lg:flex-[1_1_18%]  min-w-[9rem] max-w-full lg:max-w-[24rem] bg-[var(--color-theme-accent)] border rounded-lg shadow-sm h-fit">
        <a
          href={`/product/${product.id}`}
          aria-label={`Ver detalles de ${product.name}`}
          data-product-id={product.id}
          data-astro-history="replace"
          data-astro-reload
          style={{
            "view-transition-name": `product-${product.id}`
          }}
        >
          <div class="overflow-hidden rounded-t-lg w-full h-48 lg:h-60">
            <img
              class=" object-cover w-full h-full mask-b-from-44 aspect-[4/3]"
              src={product.imageUrl}
              alt={product.name}
              width={400}
              height={400}
            />
          </div>
        </a>
        <div class="px-4 py-2 flex gap-2 flex-col">
          <h2 class="text-lg font-bold tracking-tight text-gray-900 break-words line-clamp-2">
            {product.name}
          </h2>
          <ProductPrice
            price={product.price}
            discount={product.discount}
            class={`font-bold text-gray-900 ${product.discount > 0 ? 'flex-col gap-0 text-base' : 'text-xl'}`}
          />
          <ProductButton product={product} />
          <div class="flex items-center justify-between"></div>
        </div>
      </div>
    </>
  );
}
