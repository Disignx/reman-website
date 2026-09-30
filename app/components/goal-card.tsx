import { Icon } from "./site-icon";
import { SiteImage } from "./site-image";
import type { SiteImageAsset } from "@/lib/media";

type GoalCardProps = {
  title: string;
  cta: { href: string; label: string };
  image: SiteImageAsset;
};

export function GoalCard({ title, cta, image }: GoalCardProps) {
  return (
    <article className="goal-card sr-fade-up">
      <div className="goal-card__media">
        <SiteImage asset={image} fill className="goal-card__media-image" />
        <h4>{title}</h4>
      </div>
      <div className="goal-card__cta">
        <a className="btn btn--primary btn--lg btn--block" href={cta.href}>
          <span>{cta.label}</span>
          <Icon name="arrow-right" className="icon icon--inverse" weight="bold" />
        </a>
      </div>
    </article>
  );
}
