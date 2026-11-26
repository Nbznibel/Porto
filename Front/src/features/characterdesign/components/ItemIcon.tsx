import {
  CircleDot,
  Crown,
  FlaskConical,
  Footprints,
  Gem,
  Hand,
  HardHat,
  ScrollText,
  Shield,
  Shirt,
  Sword,
  WandSparkles,
} from "lucide-react";
import type { ItemSlot } from "../types";

const icons: Record<ItemSlot, typeof HardHat> = {
  helmet: HardHat,
  weapon: Sword,
  chest: Shirt,
  cloak: ScrollText,
  boots: Footprints,
  amulet: Gem,
  shield: Shield,
  gloves: Hand,
  belt: CircleDot,
  ring: Crown,
  trinket: WandSparkles,
  relic: FlaskConical,
};

type Props = {
  slot: ItemSlot;
  size?: number;
  className?: string;
};

export default function ItemIcon({ slot, size = 20, className }: Props) {
  const Icon = icons[slot];
  return <Icon size={size} strokeWidth={1.5} className={className} />;
}
