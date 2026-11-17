import { Container } from "../../../global/components/ui";
import { portfolioData } from "../consts/profile.data";

const allProjects = [
  ...portfolioData.experiences.flatMap((experience) =>
    experience.projects.map((project) => ({ ...project, context: experience.company })),
  ),
  ...portfolioData.personalProjects.map((project) => ({ ...project, context: "Personal project" })),
];

export const ProjectsSection = () => (
  <section id="projects" className="border-b border-line">
    <Container className="py-16 sm:py-24">
      <p className="eyebrow">04 / Selected projects</p>
      <h2 className="section-title mt-8">Work across healthcare, insurance, SaaS and tooling.</h2>

      <div className="mt-12 grid gap-x-12 gap-y-10 lg:grid-cols-2">
        {allProjects.map((project) => (
          <article key={`${project.context}-${project.name}`} className="border-t border-line pt-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {project.context}
            </p>
            <h3 className="mt-3 text-lg font-medium leading-snug text-ink">{project.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
            <ul className="mt-4 space-y-1.5 text-sm text-muted">
              {project.highlights.map((highlight) => (
                <li key={highlight}>— {highlight}</li>
              ))}
            </ul>
            <p className="mt-5 font-mono text-[11px] text-muted">{project.stack.join(" / ")}</p>
          </article>
        ))}
      </div>
    </Container>
  </section>
);
