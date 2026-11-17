import { Container } from "../../../global/components/ui";
import { portfolioData } from "../consts/profile.data";

export const ContactSection = () => {
  const { profile } = portfolioData;

  return (
    <section id="contact" className="border-b border-line">
      <Container className="py-16 sm:py-24">
        <p className="eyebrow">05 / Contact</p>
        <h2 className="section-title mt-8">Let’s build something solid.</h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <a href={`mailto:${profile.email}`} className="group border-t border-line pt-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Email</p>
            <p className="mt-3 break-all text-base text-ink group-hover:text-accent">
              {profile.email}
            </p>
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="group border-t border-line pt-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Phone</p>
            <p className="mt-3 text-base text-ink group-hover:text-accent">{profile.phone}</p>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group border-t border-line pt-5"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">LinkedIn</p>
            <p className="mt-3 break-all text-base text-ink group-hover:text-accent">
              {profile.linkedin.replace("https://", "")}
            </p>
          </a>
        </div>

        <div className="hairline mt-16 flex flex-wrap items-center justify-between gap-4 pt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>{profile.location}</span>
        </div>
      </Container>
    </section>
  );
};
