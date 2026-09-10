export function Footer() {
  return (
    <footer className="border-t border-stone-200 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-stone-500 flex justify-between">
        <p>© {new Date().getFullYear()} Glenfas. Based in Zvishavane, Zimbabwe.</p>
        <div className="flex gap-6">
          <a href="/about" className="hover:text-stone-900">About</a>
          <a href="/contact" className="hover:text-stone-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}