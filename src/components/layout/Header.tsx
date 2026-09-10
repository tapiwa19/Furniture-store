import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-medium text-stone-900">
          Glenfas
        </Link>
        <nav className="flex items-center gap-6 text-sm text-stone-600">
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