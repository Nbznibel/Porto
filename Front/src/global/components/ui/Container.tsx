import type { HTMLAttributes } from "react";
import { cn } from "../../../lib/utils";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "section";
};

export const Container = ({ as: Tag = "div", className, ...props }: ContainerProps) => (
  <Tag
    className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10", className)}
    {...props}
  />
);
