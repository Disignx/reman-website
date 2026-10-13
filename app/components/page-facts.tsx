import { FactItem } from "./fact-item";
import type { IconName } from "./site-icon";

export type PageFact = {
  value: string;
  label: string;
  icon: IconName;
};

type PageFactsProps = {
  id: string;
  titleId: string;
  title: readonly string[];
  items: readonly PageFact[];
};

export function PageFacts({ id, titleId, title, items }: PageFactsProps) {
  return (
    <section className="section ppwr-facts" id={id} aria-labelledby={titleId}>
      <div className="container ppwr-facts__grid">
        <h3 id={titleId} className="ppwr-facts__title sr-fade-up">
          {title.map((line, index) => (
            <span key={line}>
              {index > 0 ? <br /> : null}
              {line}
            </span>
          ))}
        </h3>
        <div className="ppwr-facts__items sr-stagger">
          {items.map((item) => (
            <FactItem key={item.value} value={item.value} label={item.label} icon={item.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
