interface CorrectExampleProps {
  content: React.ReactNode;
  explanation?: string;
}

export const CorrectExample: React.FC<CorrectExampleProps> = ({
  content,
  explanation,
}) => {
  return (
    <li className="correct-example mb-3">
      {content}{" "}
      {explanation ? <span className="text-xs">({explanation})</span> : ""}
    </li>
  );
};

interface ErrorExampleProps {
  content: React.ReactNode;
  explanation: string;
}

export const ErrorExample: React.FC<ErrorExampleProps> = ({
  content,
  explanation,
}) => {
  return (
    <li className="error-example mb-3">
      {content} <span className="text-xs">({explanation})</span>
    </li>
  );
};

interface ExampleBlockProps {
  children: React.ReactNode;
  error?: boolean;
}

const ExampleBlock: React.FC<ExampleBlockProps> = ({ children, error }) => {
  return (
    <div className={"bg-gray-200 p-6 w-full " + (error ? "error-block" : "")}>
      {children}
    </div>
  );
};

interface ExampleSubSectionProps {
  correct: React.ReactNode;
  errors: React.ReactNode;
  noBullets?: boolean;
}

const ExampleSubSection: React.FC<ExampleSubSectionProps> = ({
  correct,
  errors,
  noBullets,
}) => {
  return (
    <div className="w-full mt-8 mb-5 flex flex-col lg:flex-row flex-nowrap gap-5">
      <ExampleBlock>
        <h4>Správná užití:</h4>
        <ul className={!noBullets ? "list-disc list-inside" : ""}>{correct}</ul>
      </ExampleBlock>
      <ExampleBlock error>
        <h4>Chyby:</h4>
        <ul className={!noBullets ? "list-disc list-inside" : ""}>{errors}</ul>
      </ExampleBlock>
    </div>
  );
};

export default ExampleSubSection;
