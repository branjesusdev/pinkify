import { cart, incrementQuantity, decrementQuantity } from "@/store/cart";
import { useStore } from "@nanostores/solid";
import type { CartItem } from "@/types/cart-item";
import { createAutoAnimate  } from '@formkit/auto-animate/solid'
import { getAmountFormatted } from "@/lib/utils";


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
      <h3 class="text-white mb-2">Tienes <strong class="text-green-500">{$cart().length}</strong> productos en tu carrito.</h3>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus-icon lucide-minus"><path d="M5 12h14"/></svg>
              </button>
              <span class="text-white/90 text-[14px]"> {item.quantity}</span>
              <button
                type="button"
                class="bg-white rounded-sm p-1 flex h-6 w-6 items-center justify-center text-black"
                onClick={() => handleIncrement(item)}
              >
                <span class="sr-only">Increment</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
              </button>
            </div>
          </div>
          <span class="text-white">{getAmountFormatted(item.totalAmount)}</span>
        </li>
      )) ?? ""}
    </ul>
  );
}
