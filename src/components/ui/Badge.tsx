export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs bg-stone-100 text-stone-600 rounded-full px-3 py-1">
      {children}
    </span>
  );
}