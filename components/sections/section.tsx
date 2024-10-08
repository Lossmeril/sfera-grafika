interface SectionProps {
  children: React.ReactNode;
  last?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, last }) => {
  return (
    <section
      className={"w-full p-8 md:p-20  " + (last ? "border-b-0" : "border-b")}
    >
      {children}
    </section>
  );
};

export default Section;
