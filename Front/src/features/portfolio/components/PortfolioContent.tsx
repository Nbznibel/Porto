import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { ExperienceSection } from "./ExperienceSection";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";

// One persistent instance. Step 6 places this inside the MacBook screen on
// desktop and renders the same component directly on mobile / reduced motion.
export const PortfolioContent = () => (
  <>
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <ContactSection />
  </>
);
