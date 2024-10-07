interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return <section className="w-full border-b p-20">{children}</section>;
};

export default Section;
