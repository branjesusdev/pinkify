import { getAmountFormatted } from "@/lib/utils";
import { cartTotal, cart } from "@/store/cart";
import { useStore } from "@nanostores/solid";

export default function CartSummary() {
  const $cart = useStore(cart);
  const $cartTotal = useStore(cartTotal);

  return (
    <div class="mt-4">
      <div class="flex justify-between mt-2">
        <h3 class="text-white">
          <strong>Subtotal</strong> <span>{$cart().length} producto{ $cart().length === 1 ? '' : 's' }</span>
        </h3>
        <span class="text-white">{getAmountFormatted($cartTotal())}</span>
      </div>
    </div>
  );
}
