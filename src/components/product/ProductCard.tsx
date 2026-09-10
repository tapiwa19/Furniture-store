// src/components/product/ProductCard.tsx
import Image from "next/image";   // this import goes at the top of any file that renders a product image
import { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div>
      <Image
        src={`/images/${product.slug}-1.jpg`}
        alt={product.name}
        width={800}
        height={600}
        className="rounded-lg object-cover"
      />
      <h3>{product.name}</h3>
    </div>
  );
}
