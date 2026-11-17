import type { VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../../lib/utils";
import { buttonStyles } from "./button.styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles>;

export const Button = ({ className, variant, size, ...props }: ButtonProps) => (
  <button
    className={cn(buttonStyles({ variant, size }), className)}
    {...props}
  />
);
