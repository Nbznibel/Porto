import { motion } from "motion/react";
import { useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import type { HoverPosition, Item } from "../types";
import CharacterTab from "./CharacterTab";
import InventoryTab from "./InventoryTab";
import ItemTooltip from "./ItemTooltip";
import KillsTab from "./KillsTab";
import StatsTab from "./StatsTab";

const tabs = [
  { id: "character", label: "Character", short: "CH" },
  { id: "stats", label: "Stats", short: "ST" },
  { id: "inventory", label: "Inventory", short: "IN" },
  { id: "kills", label: "Kills", short: "KL" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function InventoryPanel() {
  const [activeTab, setActiveTab] = useState<TabId>("character");
  const [hoverContent, setHoverContent] = useState<ReactNode | null>(null);

  const hideHover = () => setHoverContent(null);

  const showItem = (item: Item, position: HoverPosition) => {
    setHoverContent(<ItemTooltip item={item} position={position} />);
  };

  const showContent = (content: ReactNode) => {
    setHoverContent(content);
  };

  const selectTab = (id: TabId) => {
    setActiveTab(id);
    hideHover();
  };

  return (
    <motion.aside
      className="cd-card"
      aria-label="Character sheet"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="cd-ledgers" role="tablist" aria-label="Character sheet tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`cd-ledger${activeTab === tab.id ? " cd-ledger--active" : ""}`}
            onClick={() => selectTab(tab.id)}
          >
            <span className="cd-ledger__short">{tab.short}</span>
            <span className="cd-ledger__full">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="cd-card__body">
        {activeTab === "character" && (
          <CharacterTab onItemHover={showItem} onItemLeave={hideHover} />
        )}
        {activeTab === "stats" && <StatsTab />}
        {activeTab === "inventory" && (
          <InventoryTab onHover={showContent} onLeave={hideHover} />
        )}
        {activeTab === "kills" && (
          <KillsTab onHover={showContent} onLeave={hideHover} />
        )}
      </div>

      {hoverContent && createPortal(hoverContent, document.body)}
    </motion.aside>
  );
}
