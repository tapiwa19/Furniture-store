import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const base = "rounded-full px-8 py-3 text-sm transition-colors";
  const variants = {
    primary: "bg-stone-900 text-stone-50 hover:bg-stone-800",
    outline: "border border-stone-300 hover:bg-stone-900 hover:text-stone-50",
  };
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}