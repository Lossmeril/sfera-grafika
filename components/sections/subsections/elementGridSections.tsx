import { Facility } from "@/utils/apiTypes";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface ElementSquareProps {
  image: string;
  title: string;
  forbidden?: boolean;
  authorElement?: boolean;
}

export const ElementSquare: React.FC<ElementSquareProps> = ({
  image,
  title,
  forbidden,
  authorElement,
}) => {
  return (
    <div className="flex flex-col flex-nowrap gap-2">
      <div
        className={
          "w-full aspect-square relative " +
          (forbidden ? "forbidden-block " : " ") +
          (authorElement ? "author-element-block " : " ")
        }
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          title={forbidden ? "ZAKÁZANÝ PRVEK" : title}
        />
      </div>
    </div>
  );
};

interface ElementSetProps {
  facility: Facility;
}

const ElementGridSubSection: React.FC<ElementSetProps> = ({ facility }) => {
  return (
    <>
      <h3
        className={twMerge("text-center text-white font-medium border mb-0")}
        style={{ backgroundColor: facility.colorBg }}
      >
        {facility.name}
      </h3>
      <div className="w-full mb-10 mt-4 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 2xl:grid-cols-10 gap-4">
        {facility.elementSet.elements.map((element) => (
          <ElementSquare
            key={element.id}
            image={element.variants.find((v) => v.size === "medium")?.url || ""}
            title={element.name}
          />
        ))}
      </div>
    </>
  );
};

export default ElementGridSubSection;

interface UniqueElementSetProps {
  setName: string;
  headerColor: string;
  elements: {
    folderName: string;
    fileName: string;
  }[];
}

export const UniqueElementGridSubSection: React.FC<UniqueElementSetProps> = ({
  setName,
  headerColor,
  elements,
}) => {
  return (
    <>
      <h3
        className={twMerge("text-center font-medium border mb-0 text-white")}
        style={{
          backgroundColor: headerColor
            ? "var(--" + headerColor + ")"
            : "var(--black)",
        }}
      >
        {setName}
      </h3>
      <div className="w-full mb-0 mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4">
        {elements.map((element) => (
          <ElementSquare
            key={element.fileName}
            image={
              "/img/elements/[[UNIQUE]]/" +
              element.folderName +
              "/" +
              element.fileName +
              ".jpg"
            }
            title={element.fileName}
          />
        ))}
      </div>
    </>
  );
};
