import { getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export default function OfficePage() {
  const office = getProductsByCategory("office");

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-medium text-stone-900 mb-8">Office</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {office.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}