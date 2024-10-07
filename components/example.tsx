interface ExampleProps {
  children: React.ReactNode;
}

const Example: React.FC<ExampleProps> = ({ children }) => {
  return (
    <div className="bg-gray-200 p-3 mb-4 w-1/2">
      <h4>Příklad:</h4>
      {children}
    </div>
  );
};

export default Example;
