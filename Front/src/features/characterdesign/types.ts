export type ItemSlot =
  | "helmet"
  | "weapon"
  | "chest"
  | "cloak"
  | "boots"
  | "amulet"
  | "shield"
  | "gloves"
  | "belt"
  | "ring"
  | "trinket"
  | "relic";

export type ItemKind = "skill" | "artifact";

export type Item = {
  id: string;
  name: string;
  slot: ItemSlot;
  kind: ItemKind;
  description: string;
  durability: { current: number; max: number };
  stats: { name: string; value: number }[];
  equipped: boolean;
};

export type HoverPosition = { x: number; y: number };
