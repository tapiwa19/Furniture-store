import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-stone-200 bg-stone-50/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        <Link href="/" className="text-xl tracking-wide font-medium text-stone-900">
          GLENINVEST
        </Link>
        <nav className="hidden md:flex gap-8 text-sm text-stone-600">
          <Link href="/sofas" className="hover:text-stone-900">Sofas</Link>
          <Link href="/office" className="hover:text-stone-900">Office</Link>
          <Link href="/about" className="hover:text-stone-900">About</Link>
          <Link href="/contact" className="hover:text-stone-900">Contact</Link>
        </nav>
        <Link
          href="/cart"
          className="text-sm border border-stone-300 rounded-full px-4 py-1.5 hover:bg-stone-900 hover:text-stone-50 transition-colors"
        >
          Cart
        </Link>
      </div>
    </header>
  );
}