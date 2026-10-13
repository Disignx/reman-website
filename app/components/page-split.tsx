import { SiteImage } from "./site-image";
import type { SiteImageAsset } from "@/lib/media";

type PageSplitProps = {
  id?: string;
  eyebrow: string;
  title: string;
  lead: string;
  body: readonly string[];
  image: SiteImageAsset;
  inverse?: boolean;
};

export function PageSplit({
  id,
  eyebrow,
  title,
  lead,
  body,
  image,
  inverse = false,
}: PageSplitProps) {
  const titleId = id ? `${id}-title` : undefined;

  return (
    <section
      className={`section page-split${inverse ? " page-split--inverse" : ""}`}
      id={id}
      aria-labelledby={titleId}
    >
      <div className="container page-split__grid">
        <div className="page-split__copy sr-fade-up">
          <h6>{eyebrow}</h6>
          <h2 id={titleId}>{title}</h2>
          <p className="page-split__lead">{lead}</p>
          {body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="page-split__media sr-fade-up">
          <SiteImage asset={image} fill className="page-split__image" />
        </div>
      </div>
    </section>
  );
}
