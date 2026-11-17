import { Container } from "../../../global/components/ui";
import { portfolioData } from "../consts/profile.data";

export const ExperienceSection = () => (
  <section id="experience" className="border-b border-line">
    <Container className="py-16 sm:py-24">
      <p className="eyebrow">03 / Experience</p>
      <h2 className="section-title mt-8">Selected roles</h2>

      <div className="mt-12 space-y-12">
        {portfolioData.experiences.map((experience) => (
          <article key={experience.id} className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h3 className="text-lg font-medium text-ink">{experience.role}</h3>
              <p className="mt-1 text-sm text-muted">{experience.company}</p>
              <p className="mt-2 font-mono text-xs text-muted">{experience.period}</p>
            </div>

            <div className="lg:col-span-8">
              {experience.highlights.length > 0 && (
                <ul className="space-y-2 text-sm leading-relaxed text-muted">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="border-l border-line pl-4">
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}

              {experience.projects.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.projects.map((project) => (
                    <span
                      key={project.name}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted"
                    >
                      {project.name.split(" — ")[0]}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Container>
  </section>
);
