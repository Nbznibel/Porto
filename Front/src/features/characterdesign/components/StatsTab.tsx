import { items } from "../data/items";

export default function StatsTab() {
  const equipped = items.filter((item) => item.equipped);
  const totals = new Map<string, number>();

  equipped.forEach((item) => {
    item.stats.forEach((stat) => {
      totals.set(stat.name, (totals.get(stat.name) ?? 0) + stat.value);
    });
  });

  const stats = [...totals.entries()].sort((a, b) => b[1] - a[1]);
  const max = Math.max(...stats.map(([, value]) => value), 1);
  const power = stats.reduce((total, [, value]) => total + value, 0);

  return (
    <section className="cd-tab-panel cd-stats cd-scroll-panel">
      <header className="cd-panel-header">
        <h2>Stats</h2>
        <p>Powered by equipped items</p>
      </header>

      <div className="cd-stat-list">
        {stats.map(([name, value]) => (
          <div className="cd-stat-row" key={name}>
            <span className="cd-stat-row__name">{name}</span>
            <div className="cd-stat-row__bar">
              <i style={{ width: `${(value / max) * 100}%` }} />
            </div>
            <strong>+{value}</strong>
          </div>
        ))}
      </div>

      <div className="cd-power">
        <span>Total Power</span>
        <strong>{power}</strong>
      </div>
    </section>
  );
}
