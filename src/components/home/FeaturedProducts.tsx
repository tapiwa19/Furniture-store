
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export default function FeaturedProducts() {
  const featured = products.slice(0, 3); // first 3 for now — swap for a real "featured" flag later if the catalog grows

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-medium text-stone-900 mb-8">Featured</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featured.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}