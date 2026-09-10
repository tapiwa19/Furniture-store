import { Product } from "@/types/product";

export const products: Product[] = [
  {
    slug: "oslo-3-seater",
    name: "Oslo 3-Seater Sofa",
    category: "sofas",
    price: 129900, // $1,299.00
    description:
      "Solid oak frame with kiln-dried timber and a foam-and-fibre cushion mix that holds its shape under daily use.",
    images: ["/images/oslo-3-seater-1.jpg"],
    dimensions: "W210 x D88 x H80 cm",
    material: "Oak frame, cotton-linen upholstery",
    inStock: true,
  },
  {
    slug: "harare-executive-desk",
    name: "Harare Executive Desk",
    category: "office",
    price: 84900,
    description:
      "Solid teak top over a powder-coated steel frame, cable channel routed through the rear panel.",
    images: ["/images/harare-executive-desk-1.jpg"],
    dimensions: "W150 x D70 x H75 cm",
    material: "Teak top, powder-coated steel legs",
    inStock: true,
  },
];

// lookups every future component/route uses instead of scanning the array themselves —
// this is the one place server-side price/data trust comes from (see Caracal review: never trust client-submitted price)
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return products.filter((p) => p.category === category);
}