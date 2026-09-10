"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product } from "@/types/product";

type CartItem = Product & { quantity: number };

type CartContextType = {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (slug: string) => void;
  totalItems: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);
const STORAGE_KEY = "glenfas-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- required for SSR/hydration: server has no localStorage, this must run post-mount
    if (saved) setItems(JSON.parse(saved));
  } catch {
    // corrupted or missing — start empty rather than crash
  }
  setHydrated(true);
}, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  function addToCart(product: Product) {
    setItems((prev) => {
      const existing = prev.find((item) => item.slug === product.slug);
      if (existing) {
        return prev.map((item) =>
          item.slug === product.slug ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(slug: string) {
    setItems((prev) => prev.filter((item) => item.slug !== slug));
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside a CartProvider");
  return context;
}