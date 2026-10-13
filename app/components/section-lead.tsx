type SectionLeadProps = {
  title: string;
  leitgedanke: string;
  inverse?: boolean;
  titleClassName?: string;
};

export function SectionLead({
  title,
  leitgedanke,
  inverse = false,
  titleClassName,
}: SectionLeadProps) {
  return (
    <div className="section-lead sr-fade-up">
      <h2 className={titleClassName}>{title}</h2>
      <div className={`section-lead__kicker${inverse ? " section-lead__kicker--inverse" : ""}`}>
        <span className="section-lead__accent" aria-hidden="true" />
        <p>{leitgedanke}</p>
      </div>
    </div>
  );
}
