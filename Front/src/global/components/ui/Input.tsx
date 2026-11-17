import type { InputHTMLAttributes } from "react";
import { cn } from "../../../lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  helperText?: string;
};

export const Input = ({ label, error, helperText, className, id, ...props }: InputProps) => (
  <div className="space-y-2">
    {label && (
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label}
      </label>
    )}
    <input
      id={id}
      aria-invalid={error ? true : undefined}
      className={cn(
        "h-11 w-full rounded-sm border border-line bg-paper px-3 text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none",
        error && "border-red-700",
        className,
      )}
      {...props}
    />
    {error ? (
      <p className="text-xs text-red-700">{error}</p>
    ) : helperText ? (
      <p className="text-xs text-muted">{helperText}</p>
    ) : null}
  </div>
);
