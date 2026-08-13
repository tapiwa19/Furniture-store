import Link from "next/link";
import { products } from "@/data/products";

export default function SofasPage() {
  const sofas = products.filter((p) => p.category === "sofas");

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-medium text-stone-900 mb-2">Sofas</h1>
      <p className="text-stone-500 mb-10">
        Built for stillness. Designed to last.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sofas.map((product) => (
          <Link key={product.slug} href={`/sofas/${product.slug}`} className="group">
            <div className="aspect-[4/3] bg-stone-200 rounded-xl mb-4 group-hover:opacity-90 transition-opacity" />
            <h2 className="text-stone-900 font-medium">{product.name}</h2>
            <p className="text-stone-500 text-sm">${product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}