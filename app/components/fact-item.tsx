import { Icon, type IconName } from "./site-icon";

type FactItemProps = {
  value: string;
  label: string;
  icon: IconName;
};

export function FactItem({ value, label, icon }: FactItemProps) {
  return (
    <div className="fact-item sr-fade-up">
      <Icon name={icon} className="icon icon--fact icon--primary" weight="thin" />
      <div className="fact-item__text">
        <p className="stat-value">{value}</p>
        <p className="fact-item__label">
          {label.split("\n").map((line, index) => (
            <span key={line}>
              {index > 0 ? <br /> : null}
              {line}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
