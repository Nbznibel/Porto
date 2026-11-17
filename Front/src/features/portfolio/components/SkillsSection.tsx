import { Container } from "../../../global/components/ui";
import { portfolioData } from "../consts/profile.data";

export const SkillsSection = () => (
  <section id="skills" className="border-b border-line">
    <Container className="py-16 sm:py-24">
      <p className="eyebrow">02 / Technical expertise</p>
      <div className="mt-8 grid gap-x-14 gap-y-8 lg:grid-cols-2">
        {portfolioData.skills.map((group) => (
          <div key={group.name} className="border-t border-line pt-5">
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
              {group.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink sm:text-base">
              {group.items.join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);
