import { atom, onMount } from 'nanostores';
import type { CartItem } from '@/types/cart-item';
import { persistentAtom } from '@nanostores/persistent';


export const cart = persistentAtom<CartItem[]>("cart", [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});
export const isSidebarOpen = atom<boolean>(false);


// ... funciones addToCart, removeFromCart, clearCart, toggleSidebar
export const addToCart = (product: Omit<CartItem, 'quantity'>) => {
  const currentCart = cart.get();
  const existingItem = currentCart.find(item => item.id === product.id);

  if (existingItem) {
    cart.set(
      currentCart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1, price: item.price * (item.quantity + 1) }
          : item
      )
    );
  } else {
    cart.set([...currentCart, { ...product, quantity: 1 }]);
  }
};

export const incrementQuantity = (productId: number) => {
  const currentCart = cart.get();
  const existingItem = currentCart.find(item => item.id === productId);

  if (existingItem && existingItem.quantity === 10)
    return;

  cart.set(
    currentCart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1, price: item.price * (item.quantity + 1) } : item
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
        item.id === productId ? { ...item, quantity: item.quantity - 1, price: item.price / item.quantity } : item
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

export const toggleSidebar = () => {
  isSidebarOpen.set(!isSidebarOpen.get());
};