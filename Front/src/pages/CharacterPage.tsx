import "@fontsource/cinzel/400.css";
import "@fontsource/cinzel/700.css";
import { CharacterScene } from "../features/characterdesign";
import InventoryPanel from "../features/characterdesign/components/InventoryPanel";
import "../features/characterdesign/styles.css";

export default function CharacterPage() {
  return (
    <main className="cd-page">
      <div className="cd-canvas">
        <CharacterScene />
      </div>
      <InventoryPanel />
    </main>
  );
}
