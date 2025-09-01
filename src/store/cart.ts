import { atom, computed, onMount } from 'nanostores';
import type { CartItem } from '@/types/cart-item';
import { persistentAtom } from '@nanostores/persistent';



export const cart = persistentAtom<CartItem[]>("cart", [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});
export const isSidebarOpen = atom<boolean>(false);

onMount(cart, () => {
  cart.get();
});
onMount(isSidebarOpen, () => {
  isSidebarOpen.get();
});

export const addToCart = (product: Omit<CartItem, 'quantity' | 'totalAmount'>) => {
  const currentCart = cart.get();
  const existingItem = currentCart.find(item => item.id === product.id);

  if (existingItem) {
    cart.set(
      currentCart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1, totalAmount: item.price * (item.quantity + 1) }
          : item
      )
    );
  } else {
    cart.set([...currentCart, { ...product, quantity: 1, totalAmount: product.price }]);
  }
};

export const incrementQuantity = (productId: number) => {
  const currentCart = cart.get();
  const existingItem = currentCart.find(item => item.id === productId);

  if (existingItem && existingItem.quantity === 10)
    return;

  cart.set(
    currentCart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1, totalAmount: item.price * (item.quantity + 1) } : item
    )
  );
};

export const decrementQuantity = (productId: number) => {
  const currentCart = cart.get();
  const existingItem = currentCart.find(item => item.id === productId);

  if (existingItem) {
    if (existingItem.quantity <= 1) {
      // Si la cantidad es 1, eliminar el producto del carrito
      cart.set(currentCart.filter(item => item.id !== productId));
      if (cart.get().length === 0) {
        toggleSidebar();
      }
      return;
    }

    cart.set(
      currentCart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity - 1, totalAmount: item.price * (item.quantity - 1) } : item
      )
    );
  }
};

export const removeFromCart = (productId: number) => {
  const currentCart = cart.get();
  cart.set(currentCart.filter(item => item.id !== productId));
};

export const clearCart = () => {
  cart.set([]);
};

export const cartTotal = computed(cart, (currentCart) =>
  currentCart.reduce((total, item) => total + item.totalAmount, 0)
);

export const cartTotalItems = computed(cart, (currentCart) =>
  currentCart.length
);

export const getCartItemCount = () => {
  const currentCart = cart.get();
  return currentCart.length;
};

export const toggleSidebar = () => {
  isSidebarOpen.set(!isSidebarOpen.get());
};