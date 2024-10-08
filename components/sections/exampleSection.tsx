interface CorrectExampleProps {
  content: React.ReactNode;
  explanation?: string;
}

export const CorrectExample: React.FC<CorrectExampleProps> = ({
  content,
  explanation,
}) => {
  return (
    <li className="correct-example">
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
    <li className="error-example">
      {content} <span className="text-xs">({explanation})</span>
    </li>
  );
};

interface ExampleBlockProps {
  children: React.ReactNode;
}

const ExampleBlock: React.FC<ExampleBlockProps> = ({ children }) => {
  return <div className="bg-gray-200 p-6 w-full">{children}</div>;
};

interface ExampleSectionProps {
  correct: React.ReactNode;
  errors: React.ReactNode;
}

const ExampleSection: React.FC<ExampleSectionProps> = ({ correct, errors }) => {
  return (
    <section className="w-full my-5 flex flex-col lg:flex-row flex-nowrap gap-5">
      <ExampleBlock>
        <h4>Správná užití:</h4>
        <ul>{correct}</ul>
      </ExampleBlock>
      <ExampleBlock>
        <h4>Chyby:</h4>
        <ul>{errors}</ul>
      </ExampleBlock>
    </section>
  );
};

export default ExampleSection;
