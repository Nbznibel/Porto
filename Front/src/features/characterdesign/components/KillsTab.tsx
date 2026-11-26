import { Crown } from "lucide-react";
import type { ReactNode } from "react";
import { portfolioData } from "../../portfolio/consts/profile.data";
import type { HoverPosition } from "../types";
import HoverWindow from "./HoverWindow";

type Props = {
  onHover: (content: ReactNode, position: HoverPosition) => void;
  onLeave: () => void;
};

export default function KillsTab({ onHover, onLeave }: Props) {
  const bosses = portfolioData.experiences;

  const showBoss = (
    boss: (typeof bosses)[number],
    position: HoverPosition,
  ) => {
    onHover(
      <HoverWindow
        icon={<Crown size={24} strokeWidth={1.5} />}
        name={boss.company}
        meta={`${boss.role} · ${boss.period}`}
        description={boss.highlights[0] ?? "Boss defeated. No field notes left behind."}
        tags={boss.stack.slice(0, 5)}
        position={position}
      />,
      position,
    );
  };

  return (
    <section className="cd-tab-panel cd-kills cd-scroll-panel">
      <header className="cd-panel-header">
        <h2>Kills</h2>
        <p>Companies are bosses · projects are minions</p>
      </header>

      <div className="cd-boss-list">
        {bosses.map((boss, index) => (
          <div
            key={boss.id}
            className="cd-boss"
            onMouseEnter={(event) =>
              showBoss(boss, { x: event.clientX, y: event.clientY })
            }
            onMouseMove={(event) =>
              showBoss(boss, { x: event.clientX, y: event.clientY })
            }
            onMouseLeave={onLeave}
          >
            <div className="cd-boss__badge" aria-hidden="true">
              <Crown size={18} strokeWidth={1.5} />
            </div>

            <div className="cd-boss__info">
              <strong>{boss.company}</strong>
              <span>
                {boss.role} · {boss.period}
              </span>
            </div>

            <div className="cd-boss__minions">
              <span>
                minions: <b>{boss.projects.length}</b>
              </span>
              <div className="cd-minion-dots" aria-hidden="true">
                {boss.projects.length > 0
                  ? boss.projects.map((project) => (
                      <i key={project.name} />
                    ))
                  : <i className="cd-minion-dots__empty">—</i>}
              </div>
            </div>

            <span className="cd-boss__level">LVL {index + 60}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
