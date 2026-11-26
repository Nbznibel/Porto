import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { items } from "../data/items";
import type { HoverPosition, Item } from "../types";
import CharacterModel from "./CharacterModel";
import ItemCard from "./ItemCard";

type Props = {
  onItemHover: (item: Item, position: HoverPosition) => void;
  onItemLeave: () => void;
};

export default function CharacterTab({ onItemHover, onItemLeave }: Props) {
  const leftItems = items.slice(0, 6);
  const rightItems = items.slice(6);

  return (
    <section className="cd-tab-panel cd-character">
      <div className="cd-identity">
        <h1>nibel benn ezzine</h1>
        <p>job : full stack developer lvl 100</p>
      </div>

      <div className="cd-mini-model" aria-hidden="true">
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 4.4], fov: 34 }}
          gl={{ alpha: true, antialias: true }}
        >
          <ambientLight intensity={1} color="#ddebcf" />
          <directionalLight
            position={[3, 5, 4]}
            intensity={2.4}
            color="#fff0c4"
          />
          <pointLight position={[-3, 1, 2]} intensity={9} color="#c9a227" />
          <Suspense fallback={null}>
            <CharacterModel
              animated={false}
              scale={0.95}
              position={[0, -1.05, 0]}
              facing={0}
            />
          </Suspense>
        </Canvas>
      </div>

      <div className="cd-equipment">
        <div className="cd-slot-column cd-slot-column--left">
          {leftItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              onHover={onItemHover}
              onLeave={onItemLeave}
            />
          ))}
        </div>

        <div className="cd-equipment-spacer" aria-hidden="true" />

        <div className="cd-slot-column cd-slot-column--right">
          {rightItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              onHover={onItemHover}
              onLeave={onItemLeave}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
