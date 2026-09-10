import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/${product.category}/${product.slug}`} className="group">
      <div className="aspect-4/3 rounded-xl overflow-hidden bg-stone-200 mb-4">
        <Image
          src={`/images/${product.slug}-1.jpg`}
          alt={product.name}
          width={800}
          height={600}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <p className="text-xs uppercase tracking-wide text-stone-400">{product.category}</p>
      <h3 className="text-stone-900 font-medium">{product.name}</h3>
      <p className="text-stone-500 text-sm">${(product.price / 100).toFixed(2)}</p>
    </Link>
  );
}
