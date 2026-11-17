import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "../../../lib/utils";
import { buttonStyles } from "./button.styles";

// Adapted from the official shadcn Code Block registry component
// (https://ui.shadcn.com/r/styles/radix-nova/code-block.json) for Tailwind 3
// and this project's editorial tokens. Syntax highlighting hook is optional
// in shadcn and intentionally omitted here; the JSON profile is plain text.

export const CodeBlock = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="code-block"
    className={cn(
      "group/code-block relative flex w-full min-w-0 flex-col overflow-hidden rounded-md border border-line bg-surface/60 text-sm",
      className,
    )}
    {...props}
  />
));
CodeBlock.displayName = "CodeBlock";

export const CodeBlockHeader = ({
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    data-slot="code-block-header"
    className={cn("flex min-w-0 items-center gap-2 border-b border-line px-4 py-2.5", className)}
    {...props}
  />
);

export const CodeBlockTitle = ({
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    data-slot="code-block-title"
    className={cn("min-w-0 truncate font-mono text-xs text-muted", className)}
    {...props}
  />
);

export const CodeBlockActions = ({
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    data-slot="code-block-actions"
    className={cn("ml-auto flex shrink-0 items-center gap-1", className)}
    {...props}
  />
);

export const CodeBlockCopyButton = ({
  value,
  className,
  onClick,
  ...props
}: React.ComponentProps<"button"> & { value: string }) => {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  return (
    <>
      <button
        type="button"
        data-slot="code-block-copy-button"
        aria-label={copied ? "Copied" : "Copy code"}
        className={cn(buttonStyles({ variant: "ghost", size: "icon" }), "h-7 w-7", className)}
        onClick={(event) => {
          onClick?.(event);
          navigator.clipboard
            .writeText(value)
            .then(() => setCopied(true))
            .catch(() => undefined);
        }}
        {...props}
      >
        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? "Copied" : ""}
      </span>
    </>
  );
};

export const CodeBlockContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<"pre">) => (
  <pre
    data-slot="code-block-content"
    dir="ltr"
    tabIndex={0}
    className={cn(
      "min-h-0 min-w-0 overflow-auto px-4 py-4 text-left font-mono text-[13px] leading-relaxed text-ink outline-none",
      className,
    )}
    {...props}
  >
    <code data-slot="code-block-code" className="block min-w-max">
      {children}
    </code>
  </pre>
);
