import type { HoverPosition, Item } from "../types";
import HoverWindow from "./HoverWindow";
import ItemIcon from "./ItemIcon";

type Props = {
  item: Item | null;
  position: HoverPosition | null;
};

export default function ItemTooltip({ item, position }: Props) {
  if (!item || !position) return null;

  const durabilityPercent = Math.round(
    (item.durability.current / item.durability.max) * 100,
  );

  return (
    <HoverWindow
      icon={<ItemIcon slot={item.slot} size={24} />}
      name={item.name}
      meta={
        <div className="cd-durability">
          <span>Durability</span>
          <span>
            {item.durability.current}/{item.durability.max}
          </span>
          <div className="cd-durability__bar">
            <i style={{ width: `${durabilityPercent}%` }} />
          </div>
        </div>
      }
      description={item.description}
      stats={item.stats}
      footer={
        item.equipped ? (
          <span className="cd-equipped-label">Equipped</span>
        ) : undefined
      }
      position={position}
    />
  );
}
