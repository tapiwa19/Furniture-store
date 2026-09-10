"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeFromCart } = useCart();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <section className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl font-medium text-stone-900 mb-4">Your cart</h1>
        <p className="text-stone-500">Your cart is empty. Go add something nice.</p>
      </section>
    );
  }

  return (
    <section className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-medium text-stone-900 mb-8">Your cart</h1>
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.slug} className="flex items-center gap-4 border-b border-stone-200 pb-4">
            <div className="w-20 h-20 rounded-lg overflow-hidden bg-stone-200 flex-shrink-0">
              <Image
                src={`/images/${item.slug}-1.jpg`}
                alt={item.name}
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-stone-900 font-medium">{item.name}</h2>
              <p className="text-stone-500 text-sm">Qty: {item.quantity}</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-stone-700">${((item.price * item.quantity) / 100).toFixed(2)}</p>
              <button
                onClick={() => removeFromCart(item.slug)}
                className="text-sm text-stone-400 hover:text-stone-900"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-between text-lg font-medium text-stone-900">
        <span>Total</span>
        <span>${(total / 100).toFixed(2)}</span>
      </div>
    </section>
  );
}