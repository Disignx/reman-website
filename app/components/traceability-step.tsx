import { Icon, type IconName } from "./site-icon";

type TraceabilityStepProps = {
  label: string;
  icon: IconName;
  showArrow?: boolean;
};

export function TraceabilityStep({ label, icon, showArrow = false }: TraceabilityStepProps) {
  return (
    <>
      <div className="trace-step sr-fade-up">
        <Icon name={icon} className="icon icon--lg icon--primary" weight="thin" />
        <p>{label}</p>
      </div>
      {showArrow ? <Icon name="arrow-right" className="icon icon--lg icon--secondary trace__arrow" /> : null}
    </>
  );
}
