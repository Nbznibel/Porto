import type { TextareaHTMLAttributes } from "react";
import { cn } from "../../../lib/utils";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
  helperText?: string;
};

export const Textarea = ({
  label,
  error,
  helperText,
  className,
  id,
  ...props
}: TextareaProps) => (
  <div className="space-y-2">
    {label && (
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label}
      </label>
    )}
    <textarea
      id={id}
      aria-invalid={error ? true : undefined}
      className={cn(
        "min-h-32 w-full rounded-sm border border-line bg-paper px-3 py-2 text-sm text-ink placeholder:text-muted focus:border-accent focus:outline-none",
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
