import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium transition-all active:scale-95 disabled:opacity-50",
          variant === "primary" && "bg-black text-white px-6 py-3 rounded-xl hover:bg-black/80",
          variant === "secondary" && "bg-white text-black border border-black/10 px-6 py-3 rounded-xl hover:bg-gray-50",
          variant === "ghost" && "text-black/60 hover:text-black px-4 py-2 rounded-lg",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
