import { cart, toggleSidebar } from "@/store/cart";
import { useStore } from "@nanostores/solid";
import Button from "./ui/Button";

export default function CartButton() {
  const $cart = useStore(cart);

  const handleCheckout = () => {
    console.log("Checkout clicked");
  };

  const handleContinueShopping = () => {
    toggleSidebar();
  };

  return (
    <div class="flex flex-col gap-3 mt-5">
      {$cart().length > 0 && (
        <Button
          class="w-full text-lg flex gap-3 justify-center items-center"
          onClick={handleCheckout}
        >
          Procesar compra
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-send-icon lucide-send"
          >
            <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
            <path d="m21.854 2.147-10.94 10.939" />
          </svg>
        </Button>
      )}
      <Button
        class="w-full text-lg"
        variant="outline"
        onClick={handleContinueShopping}
      >
        Continuar comprando
      </Button>
    </div>
  );
}
