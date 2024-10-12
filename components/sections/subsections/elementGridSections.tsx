import { facilityType } from "@/datasets/facilities";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface ElementSquareProps {
  image: string;
  title: string;
  forbidden?: boolean;
}

export const ElementSquare: React.FC<ElementSquareProps> = ({
  image,
  title,
  forbidden,
}) => {
  return (
    <div className="flex flex-col flex-nowrap gap-2 ">
      <div
        className={
          "w-full aspect-square relative border " +
          (forbidden ? "forbidden-block " : " ")
        }
      >
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <h4 className="text-xs font-medium">{title}</h4>
    </div>
  );
};

interface ElementSetProps {
  facility: facilityType;
}

const ElementGridSubSection: React.FC<ElementSetProps> = ({ facility }) => {
  const elements = Array.from(
    Array(facility.elementSet.numberOfElements).keys()
  ).map((x) => x + 1);

  return (
    <>
      <h3
        className={twMerge("text-center text-white font-medium border")}
        style={{ backgroundColor: "var(--" + facility.colorBgVarName }}
      >
        {facility.name}
      </h3>
      <div className="w-full mt-8 mb-10 grid gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-7">
        {elements.map((element) => (
          <ElementSquare
            key={element}
            image={
              "/img/prvky/" +
              facility.elementSet.elementPrefix +
              "motiv" +
              (element != 1 ? element : "") +
              ".jpg"
            }
            title={
              facility.elementSet.elementPrefix +
              "motiv" +
              (element != 1 ? element : "") +
              ".jpg"
            }
          />
        ))}
      </div>
    </>
  );
};

export default ElementGridSubSection;
