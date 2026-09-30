import { Icon } from "./site-icon";
import { SiteImage } from "./site-image";
import type { SiteImageAsset } from "@/lib/media";

type MaterialCardProps = {
  name: string;
  description: string;
  href: string;
  image: SiteImageAsset;
};

export function MaterialCard({ name, description, href, image }: MaterialCardProps) {
  return (
    <a className="material-card sr-fade-up" href={href}>
      <div className="material-card__media">
        <SiteImage asset={image} fill className="material-card__image" />
      </div>
      <div className="material-card__body">
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <Icon name="arrow-right" className="icon icon--inverse" />
      </div>
    </a>
  );
}
