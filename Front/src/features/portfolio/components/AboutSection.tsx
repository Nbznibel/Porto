import { Container } from "../../../global/components/ui";
import { portfolioData } from "../consts/profile.data";

export const AboutSection = () => {
  const { profile, domains, focus, skills, experiences, personalProjects, education } =
    portfolioData;
  const namedProjects =
    experiences.reduce((total, experience) => total + experience.projects.length, 0) +
    personalProjects.length;

  return (
    <section id="about" className="border-b border-line">
      <Container className="py-16 sm:py-24">
        <p className="eyebrow">01 / About</p>
        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="section-title">Software engineering, end to end.</h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {profile.summary}
            </p>

            <div className="mt-12 border-t border-line pt-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Domains
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {domains.map((domain) => (
                  <span
                    key={domain}
                    className="rounded-sm border border-line bg-surface/50 px-3 py-1.5 font-mono text-xs text-ink"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 border-t border-line pt-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Focus
              </p>
              <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {focus.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              At a glance
            </p>
            <dl className="mt-5 grid grid-cols-3 gap-4 border-y border-line py-5">
              {[
                { label: "Roles", value: experiences.length },
                { label: "Projects", value: namedProjects },
                { label: "Skill areas", value: skills.length },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 text-2xl font-medium tracking-tight text-ink">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Education
            </p>
            <ul className="mt-5 space-y-5">
              {education.map((item) => (
                <li key={item.id} className="border-t border-line pt-4">
                  <p className="text-sm font-medium leading-snug text-ink">{item.degree}</p>
                  <p className="mt-1 text-sm text-muted">{item.school}</p>
                  <p className="mt-1 font-mono text-xs text-muted">{item.period}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
