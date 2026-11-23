import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockTitle,
  Container,
  buttonStyles,
} from "../../../global/components/ui";
import { portfolioData } from "../consts/profile.data";

const buildProfileJson = () => {
  const { profile, skills } = portfolioData;
  return JSON.stringify(
    {
      name: profile.name,
      role: profile.role,
      location: profile.location,
      status: profile.availability,
      specialties: [
        "Full-stack development",
        "Microservices & APIs",
        "AI / RAG integration",
      ],
      technologies: [
        skills[0].items[0],
        skills[1].items[0],
        skills[0].items[5],
        skills[0].items[3],
      ],
    },
    null,
    2,
  );
};

export const Hero = () => {
  const { profile } = portfolioData;
  const profileJson = buildProfileJson();

  return (
    <section id="top" className="relative border-b border-line">
      <Container className="grid gap-14 py-12 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {profile.availability}
            </span>
          </div>

          <h1 className="display-title mt-8">{profile.name}</h1>
          <p className="mt-4 text-xl font-medium text-muted sm:text-2xl">
            {profile.role}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-muted">
            <span>{profile.location}</span>
            <a
              href={`mailto:${profile.email}`}
              className="lower-case hover:text-accent"
            >
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="hover:text-accent"
            >
              {profile.phone}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className={buttonStyles({ size: "lg" })}>
              Selected work
            </a>
            <a
              href="#contact"
              className={buttonStyles({ variant: "outline", size: "lg" })}
            >
              Get in touch
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className={buttonStyles({ variant: "ghost", size: "lg" })}
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <CodeBlock className="shadow-[0_20px_60px_-45px_rgba(27,26,24,0.45)]">
            <CodeBlockHeader>
              <CodeBlockTitle>profile.json</CodeBlockTitle>
              <CodeBlockCopyButton value={profileJson} />
            </CodeBlockHeader>
            <CodeBlockContent>{profileJson}</CodeBlockContent>
          </CodeBlock>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Fig. 01 — Professional profile
          </p>
        </div>
      </Container>

      <Container className="flex items-center justify-between pb-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        <span>Scroll to explore</span>
        <span aria-hidden="true">↓</span>
      </Container>
    </section>
  );
};
