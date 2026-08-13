const products = [
  { name: "Fell Sofa", price: "$1,240", tag: "3-seater" },
  { name: "Dusk Sofa", price: "$980", tag: "2-seater" },
  { name: "Alder Desk Chair", price: "$340", tag: "Office" },
];

export default function FeaturedProducts() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-medium text-stone-900 mb-8">Featured</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((p) => (
          <div key={p.name} className="group">
            <div className="aspect-[4/3] bg-stone-200 rounded-xl mb-4" />
            <p className="text-xs uppercase tracking-wide text-stone-400">{p.tag}</p>
            <h3 className="text-stone-900 font-medium">{p.name}</h3>
            <p className="text-stone-500 text-sm">{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}