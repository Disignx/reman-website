import { Icon, type IconName } from "./site-icon";

export type ProcessNode = {
  title: string;
  text?: string;
  icon: IconName;
};

type ProcessChainProps = {
  steps: readonly ProcessNode[];
};

export function ProcessChain({ steps }: ProcessChainProps) {
  const wrap = steps.length > 5;

  return (
    <ol className={`process-chain${wrap ? " process-chain--wrap" : ""} sr-stagger`}>
      {steps.map((step, index) => (
        <li className="process-node sr-fade-up" key={`${index}-${step.title}`}>
          <span className="process-node__index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <Icon name={step.icon} className="icon icon--lg icon--primary" weight="thin" />
          <h3>{step.title}</h3>
          {step.text ? <p>{step.text}</p> : null}
          {index < steps.length - 1 ? (
            <Icon name="arrow-right" className="icon icon--lg icon--secondary process-node__arrow" />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
