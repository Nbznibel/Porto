import { Package } from "lucide-react";
import type { ReactNode } from "react";
import { portfolioData } from "../../portfolio/consts/profile.data";
import type { HoverPosition } from "../types";
import HoverWindow from "./HoverWindow";

type Props = {
  onHover: (content: ReactNode, position: HoverPosition) => void;
  onLeave: () => void;
};

type ProjectEntry = {
  name: string;
  description: string;
  stack: string[];
  source: string;
  kind: string;
};

const projects: ProjectEntry[] = [
  ...portfolioData.experiences.flatMap((experience) =>
    experience.projects.map((project) => ({
      ...project,
      source: experience.company,
      kind: experience.role,
    })),
  ),
  ...portfolioData.personalProjects.map((project) => ({
    ...project,
    source: "Personal quest",
    kind: "Independent",
  })),
];

export default function InventoryTab({ onHover, onLeave }: Props) {
  const showProject = (project: ProjectEntry, position: HoverPosition) => {
    onHover(
      <HoverWindow
        icon={<Package size={24} strokeWidth={1.5} />}
        name={project.name}
        meta={`${project.kind} · ${project.source}`}
        description={project.description}
        tags={project.stack.slice(0, 5)}
        position={position}
      />,
      position,
    );
  };

  return (
    <section className="cd-tab-panel cd-inventory-tab cd-scroll-panel">
      <header className="cd-panel-header">
        <h2>Inventory</h2>
        <p>{projects.length} project artifacts</p>
      </header>

      <div className="cd-project-grid">
        {projects.map((project) => (
          <button
            key={project.name}
            type="button"
            className="cd-project"
            aria-label={`${project.name}. ${project.description}`}
            onMouseEnter={(event) =>
              showProject(project, {
                x: event.clientX,
                y: event.clientY,
              })
            }
            onMouseMove={(event) =>
              showProject(project, {
                x: event.clientX,
                y: event.clientY,
              })
            }
            onMouseLeave={onLeave}
            onFocus={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              showProject(project, { x: rect.right, y: rect.bottom });
            }}
            onBlur={onLeave}
          >
            <Package size={18} strokeWidth={1.5} className="cd-project__icon" />
            <span className="cd-project__name">{project.name}</span>
            <span className="cd-project__source">{project.source}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
