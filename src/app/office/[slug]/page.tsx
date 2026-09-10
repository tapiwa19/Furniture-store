"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductBySlug } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function OfficeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  if (!product) notFound();

  return (
    <section className="max-w-4xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
      <div className="aspect-4/3 rounded-xl overflow-hidden bg-stone-200">
        <Image
          src={`/images/${product.slug}-1.jpg`}
          alt={product.name}
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wide text-stone-400">{product.category}</p>
        <h1 className="text-3xl font-medium text-stone-900 mt-1">{product.name}</h1>
        <p className="text-xl text-stone-700 mt-4">${(product.price / 100).toFixed(2)}</p>
        <p className="text-stone-600 leading-relaxed mt-6">{product.description}</p>
        {product.dimensions && (
          <p className="text-sm text-stone-500 mt-4">Dimensions: {product.dimensions}</p>
        )}
        {product.material && (
          <p className="text-sm text-stone-500">Material: {product.material}</p>
        )}
        <button
          onClick={() => addToCart(product)}
          disabled={!product.inStock}
          className="mt-8 bg-stone-900 text-stone-50 rounded-full px-8 py-3 text-sm hover:bg-stone-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {product.inStock ? "Add to cart" : "Out of stock"}
        </button>
      </div>
    </section>
  );
}