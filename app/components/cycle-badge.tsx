type CycleBadgeProps = {
  lines: readonly string[];
  /** `start`: Text links, Zeichen rechts. `end`: Zeichen links, Block rechtsbündig. */
  align: "start" | "end";
};

export function CycleBadge({ lines, align }: CycleBadgeProps) {
  return (
    <div className={`cycle-badge cycle-badge--${align}`}>
      <span className="cycle-badge__mark" aria-hidden="true" />
      <p>
        {lines.map((line, index) => (
          <span key={line}>
            {index > 0 ? <br /> : null}
            {line}
          </span>
        ))}
      </p>
    </div>
  );
}
