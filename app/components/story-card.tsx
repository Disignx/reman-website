import { SiteImage } from "./site-image";
import type { SiteImageAsset } from "@/lib/media";

type StoryCardProps = {
  title: string;
  text?: string;
  image: SiteImageAsset;
};

export function StoryCard({ title, text, image }: StoryCardProps) {
  return (
    <article className="goal-card sr-fade-up">
      <div className="goal-card__media">
        <SiteImage asset={image} fill className="goal-card__media-image" />
        <h4>{title}</h4>
      </div>
      {text ? (
        <div className="goal-card__cta">
          <p className="goal-card__text">{text}</p>
        </div>
      ) : null}
    </article>
  );
}
