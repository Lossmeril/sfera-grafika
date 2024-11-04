import Image from "next/image";

interface ElementBlockProps {
  image: string;
  title: string;
  children: React.ReactNode;
  forbidden?: boolean;
  reasoning?: string;
}

export const ElementBlock: React.FC<ElementBlockProps> = ({
  image,
  title,
  children,
  reasoning,
  forbidden,
}) => {
  return (
    <div className="flex flex-row flex-nowrap">
      <div className="aspect-square h-20 lg:h-40 border relative">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="bg-gray-200 w-full h-40 p-5">
        {forbidden ? (
          <p className="above-heading text-sos mb-2 text-sm">Zakázané</p>
        ) : (
          <></>
        )}
        <h4>{title}</h4>

        <p className="mb-2 text-xs md:text-sm">{children}</p>
        <p className={"text-xs " + (forbidden ? "text-sos" : "")}>
          {reasoning}
        </p>
      </div>
    </div>
  );
};

interface ElementSubSectionProps {
  children: React.ReactNode;
  blocks?: boolean;
}

const ElementSubSection: React.FC<ElementSubSectionProps> = ({
  children,
  blocks,
}) => {
  return (
    <div
      className={
        "w-full mt-8 mb-5 grid gap-5 " +
        (!blocks
          ? "grid-cols1 2xl:grid-cols-2"
          : "grid-cols-2 md:gird-cols-3 lg:gird-cols-4 2xl:grid-cols-6")
      }
    >
      {children}
    </div>
  );
};

export default ElementSubSection;
