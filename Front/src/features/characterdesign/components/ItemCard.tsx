import type { HoverPosition, Item } from "../types";
import ItemIcon from "./ItemIcon";

type Props = {
  item: Item;
  onHover: (item: Item, position: HoverPosition) => void;
  onLeave: () => void;
};

export default function ItemCard({ item, onHover, onLeave }: Props) {
  return (
    <button
      type="button"
      className={`cd-slot${item.equipped ? " cd-slot--equipped" : ""}`}
      aria-label={`${item.name}. ${item.description}`}
      onMouseEnter={(event) =>
        onHover(item, { x: event.clientX, y: event.clientY })
      }
      onMouseMove={(event) =>
        onHover(item, { x: event.clientX, y: event.clientY })
      }
      onMouseLeave={onLeave}
      onFocus={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        onHover(item, { x: rect.right, y: rect.bottom });
      }}
      onBlur={onLeave}
    >
      <ItemIcon slot={item.slot} size={20} className="cd-slot__icon" />
    </button>
  );
}
