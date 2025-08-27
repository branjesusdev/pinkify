import { cart, incrementQuantity, decrementQuantity } from "@/store/cart";
import { useStore } from "@nanostores/solid";
import type { CartItem } from "@/types/cart-item";
import { createAutoAnimate  } from '@formkit/auto-animate/solid'


type Props = {};

export default function CartItem() {
  const [animationParent] = createAutoAnimate()
  const $cart = useStore(cart);

  const handleIncrement = (product: CartItem) => {
    incrementQuantity(product.id);
  };

  const handleDecrement = (product: CartItem) => {
    decrementQuantity(product.id);
  };

  return (
    <ul class="mt-4 parent" ref={animationParent}>
      <p class="text-white text-[14px] mb-2">Tienes <strong class="text-green-500">{$cart().length}</strong> productos en tu carrito.</p>
      {$cart()?.map((item) => (
        <li class="flex gap-3 items-center justify-between py-2">
          <img
            src={item.image}
            alt={item.name}
            class="w-14 h-14 object-cover rounded-sm"
          />
          <div class=" w-full flex flex-col">
            <span class="text-white">{item.name}</span>
            <div class="flex gap-3">
              <button
                type="button"
                class="bg-white rounded-sm p-1 flex h-6 w-6 items-center justify-center text-black"
                onClick={() => handleDecrement(item)}
              >
                <span class="sr-only">Decrement</span>
                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 11H5v2h14v-2Z"></path>
                </svg>
              </button>
              <span class="text-white/90 text-[14px]"> {item.quantity}</span>
              <button
                type="button"
                class="bg-white rounded-sm p-1 flex h-6 w-6 items-center justify-center text-black"
                onClick={() => handleIncrement(item)}
              >
                <span class="sr-only">Increment</span>
                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6v-2Z"></path>
                </svg>
              </button>
            </div>
          </div>
          <span class="text-white">${item.price}</span>
        </li>
      )) ?? ""}
    </ul>
  );
}
