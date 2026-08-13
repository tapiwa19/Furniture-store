import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
      <h1 className="text-4xl md:text-5xl font-medium text-stone-900 tracking-tight">
        Sofas built for stillness.
      </h1>
      <p className="mt-4 text-stone-500 max-w-xl mx-auto">
        Minimal furniture for living rooms and workspaces alike, made to last
        and made to disappear into your space, not dominate it.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link
          href="/sofas"
          className="bg-stone-900 text-stone-50 rounded-full px-6 py-3 text-sm hover:bg-stone-800 transition-colors"
        >
          Shop sofas
        </Link>

        <Link
          href="/office"
          className="border border-stone-300 rounded-full px-6 py-3 text-sm hover:bg-stone-100 transition-colors"
        >
          Shop office
        </Link>
      </div>
    </section>
  );
}