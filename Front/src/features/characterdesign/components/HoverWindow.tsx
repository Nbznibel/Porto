import type { ReactNode } from "react";
import type { HoverPosition } from "../types";

type Props = {
  icon: ReactNode;
  name: string;
  meta?: ReactNode;
  description?: string;
  tags?: string[];
  stats?: { name: string; value: number }[];
  footer?: ReactNode;
  position: HoverPosition;
};

const WINDOW_WIDTH = 261;
const WINDOW_HEIGHT = 216;

export default function HoverWindow({
  icon,
  name,
  meta,
  description,
  tags,
  stats,
  footer,
  position,
}: Props) {
  const left = Math.min(
    Math.max(12, position.x + 16),
    window.innerWidth - WINDOW_WIDTH - 12,
  );
  const top = Math.min(
    Math.max(12, position.y + 16),
    window.innerHeight - WINDOW_HEIGHT - 12,
  );

  return (
    <div className="cd-hover-window" style={{ left, top }} role="tooltip">
      <div className="cd-hover-window__head">
        <div className="cd-hover-window__icon">{icon}</div>
        <div className="cd-hover-window__name">{name}</div>
      </div>

      {meta && <div className="cd-hover-window__meta">{meta}</div>}

      {description && (
        <p className="cd-hover-window__description">{description}</p>
      )}

      {stats && stats.length > 0 && (
        <div className="cd-hover-window__stats">
          {stats.map((stat) => (
            <span key={stat.name} className="cd-stat-chip">
              +{stat.value} {stat.name}
            </span>
          ))}
        </div>
      )}

      {tags && tags.length > 0 && (
        <div className="cd-hover-window__stats">
          {tags.map((tag) => (
            <span key={tag} className="cd-stat-chip">
              {tag}
            </span>
          ))}
        </div>
      )}

      {footer && <div className="cd-hover-window__footer">{footer}</div>}
    </div>
  );
}
