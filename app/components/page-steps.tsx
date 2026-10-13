export type PageStep = string | { title: string; text: string };

type PageStepsProps = {
  steps: readonly PageStep[];
};

export function PageSteps({ steps }: PageStepsProps) {
  return (
    <ol className="page-steps sr-stagger">
      {steps.map((step, index) => {
        const title = typeof step === "string" ? step : step.title;
        const text = typeof step === "string" ? null : step.text;

        return (
          <li className="page-steps__item sr-fade-up" key={`${index}-${title}`}>
            <span className="page-steps__index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              {text ? (
                <>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </>
              ) : (
                <p>{title}</p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
