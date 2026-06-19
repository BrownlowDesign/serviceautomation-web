interface Stat {
  number: string;
  label: string;
}

interface StatsStripProps {
  stats: Stat[];
}

export function StatsStrip({ stats }: StatsStripProps) {
  return (
    <div className="stats-strip">
      {stats.map((stat) => (
        <div key={stat.number} className="stat">
          <span className="stat-number">{stat.number}</span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
