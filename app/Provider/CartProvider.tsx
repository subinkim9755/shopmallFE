'use client';

import { createContext, useContext, useSyncExternalStore } from "react";
import type { CartContextValue, CartItem, CartProviderProps } from "../types/providerType";

const STORAGE_KEY = "shopmall-cart";
const EMPTY_CART: CartItem[] = [];
const CartContext = createContext<CartContextValue | null>(null);
const cartListeners = new Set<() => void>();
let cachedStorageValue: string | null | undefined;
let cachedCart: CartItem[] = EMPTY_CART;

function parseCart(storedCart: string | null): CartItem[] {
  if (!storedCart) return EMPTY_CART;

  try {
    const parsed: unknown = JSON.parse(storedCart);
    if (!Array.isArray(parsed)) return EMPTY_CART;

    const validItems = parsed.filter((item: unknown): item is CartItem => {
      if (typeof item !== "object" || item === null) return false;
      const candidate = item as Partial<CartItem>;
      return (
        typeof candidate.productId === "string" &&
        Number.isInteger(candidate.quantity) &&
        (candidate.quantity ?? 0) > 0
      );
    });
    return validItems.length > 0 ? validItems : EMPTY_CART;
  } catch {
    return EMPTY_CART;
  }
}

function getCartSnapshot(): CartItem[] {
  if (typeof window === "undefined") return EMPTY_CART;

  let storedCart: string | null;
  try {
    storedCart = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return cachedCart;
  }

  if (storedCart === cachedStorageValue) return cachedCart;
  cachedStorageValue = storedCart;
  cachedCart = parseCart(storedCart);
  return cachedCart;
}

function getServerCartSnapshot() {
  return EMPTY_CART;
}

function subscribeToCart(listener: () => void) {
  cartListeners.add(listener);
  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) {
      cachedStorageValue = undefined;
      listener();
    }
  };
  window.addEventListener("storage", handleStorage);

  return () => {
    cartListeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
}

function saveCart(items: CartItem[]) {
  const serializedCart = JSON.stringify(items);
  try {
    window.localStorage.setItem(STORAGE_KEY, serializedCart);
    cachedStorageValue = serializedCart;
  } catch {
    try {
      cachedStorageValue = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      cachedStorageValue = undefined;
    }
  }
  cachedCart = items;
  cartListeners.forEach((listener) => listener());
}

export function CartProvider({ children }: CartProviderProps) {
  const items = useSyncExternalStore(
    subscribeToCart,
    getCartSnapshot,
    getServerCartSnapshot,
  );

  const addItem = (productId: string, quantity = 1) => {
    if (!productId || !Number.isInteger(quantity) || quantity <= 0) return;

    const currentItems = getCartSnapshot();
    const existingItem = currentItems.find((item) => item.productId === productId);
    const updatedItems = existingItem
      ? currentItems.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      : [...currentItems, { productId, quantity }];
    saveCart(updatedItems);
  };

  const removeItem = (productId: string) => {
    saveCart(getCartSnapshot().filter((item) => item.productId !== productId));
  };

  const setItemQuantity = (productId: string, quantity: number) => {
    if (!Number.isInteger(quantity)) return;
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }

    saveCart(
      getCartSnapshot().map((item) =>
        item.productId === productId ? { ...item, quantity } : item,
      ),
    );
  };

  const clearCart = () => saveCart(EMPTY_CART);
  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, cartCount, addItem, removeItem, setItemQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export default CartProvider
