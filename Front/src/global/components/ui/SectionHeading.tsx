import { Container } from "./Container";
import { cn } from "../../../lib/utils";

interface SectionHeadingProps {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeading = ({
  id,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) => (
  <Container as="section" id={id} className={cn("py-16 sm:py-24", className)}>
    <p className="eyebrow">{eyebrow}</p>
    <h2 className="section-title mt-4 max-w-3xl">{title}</h2>
    {description && (
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        {description}
      </p>
    )}
    <div className="hairline mt-10" />
  </Container>
);
