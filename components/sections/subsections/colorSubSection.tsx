interface ColorBlockProps {
  name: string;
  colorName: string;
  text: string;
  HEX: string;
  RGB: string;
  CMYK: string;
}

export const ColorBlock: React.FC<ColorBlockProps> = ({
  name,
  colorName,
  text,
  HEX,
  RGB,
  CMYK,
}) => {
  return (
    <div
      className="flex flex-col justify-center align-middle px-5 h-36 border text-sm"
      style={{
        backgroundColor: "var(--" + colorName + ")",
        color: "var(--" + text + ")",
      }}
    >
      <h4>{name}</h4>
      <ul>
        <li className="uppercase">
          <strong>HEX:</strong> {HEX}
        </li>
        {RGB !== "" ? (
          <li>
            <strong>RGB:</strong> {RGB}
          </li>
        ) : (
          <></>
        )}
        <li>
          <strong>CMYK:</strong> {CMYK}
        </li>
      </ul>
    </div>
  );
};

interface ColorSubSectionProps {
  children: React.ReactNode;
}

const ColorSubSection: React.FC<ColorSubSectionProps> = ({ children }) => {
  return (
    <div className="w-full mb-10 mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {children}
    </div>
  );
};

export default ColorSubSection;
