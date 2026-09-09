export type Category = "sofas" | "office";

export interface Product {
  slug: string;        // URL-safe id, e.g. "oslo-3-seater"
  name: string;
  category: Category;
  price: number;        // cents — never float dollars, avoids rounding on cart totals
  description: string;
  images: string[];     // paths under /public/images
  dimensions?: string;  // "W180 x D85 x H75 cm"
  material?: string;
  inStock: boolean;
}