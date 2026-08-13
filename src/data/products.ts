export type Product = {
  slug: string;
  name: string;
  price: number;
  category: "sofas" | "office";
  description: string;
};

export const products: Product[] = [
  {
    slug: "fell-sofa",
    name: "Fell Sofa",
    price: 1240,
    category: "sofas",
    description: "A 3-seater with soft bouclé upholstery and solid oak legs.",
  },
  {
    slug: "dusk-sofa",
    name: "Dusk Sofa",
    price: 980,
    category: "sofas",
    description: "A compact 2-seater built for small living rooms and studios.",
  },
  {
    slug: "haven-corner-sofa",
    name: "Haven Corner Sofa",
    price: 1690,
    category: "sofas",
    description: "A modular corner sofa designed for open-plan living spaces.",
  },
  {
    slug: "alder-desk-chair",
    name: "Alder Desk Chair",
    price: 340,
    category: "office",
    description: "An ergonomic desk chair with breathable mesh and lumbar support.",
  },
];