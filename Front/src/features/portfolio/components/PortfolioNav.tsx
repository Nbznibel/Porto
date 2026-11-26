import { Link } from "react-router-dom";
import { Container, buttonStyles } from "../../../global/components/ui";
import { portfolioData } from "../consts/profile.data";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const PortfolioNav = () => (
  <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-sm">
    <Container className="flex h-16 items-center justify-between gap-6">
      <a href="#top" className="text-sm font-medium tracking-tight text-ink">
        {portfolioData.profile.name}
        <span className="text-muted"> / portfolio</span>
      </a>

      <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-muted transition-colors hover:text-ink"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <Link to="/character" className={buttonStyles({ variant: "primary", size: "sm" })}>
          enter game
        </Link>
        <a href="#contact" className={buttonStyles({ variant: "outline", size: "sm" })}>
          Contact
        </a>
      </div>
    </Container>
  </header>
);
