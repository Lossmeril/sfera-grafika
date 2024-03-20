import Link from "next/link";
import Image from "next/image";

interface ElementSetProps {
  name: string;
  folderPath: string;
  numberOfElements: Number;
  prefix: string;
  color: string;
}

const ElementSet: React.FC<ElementSetProps> = ({
  name,
  folderPath,
  numberOfElements,
  prefix,
  color,
}) => {
  let elements = Array.from(Array(numberOfElements).keys()).map((x) => x + 1);

  return (
    <div className="mx-auto my-5 border border-black w-[1502px]">
      <div
        className="h-12 flex items-center p-5 w-[1500px] text-white border border-black"
        style={{ backgroundColor: color }}
      >
        <h2 className="text-3xl color-white room-name -mb-[2px]">{name}</h2>
      </div>
      <div className="flex flex-row flex-wrap">
        {elements.map((element) => (
          <div
            key={element}
            className="w-[150px] h-[150px] aspect-square border border-black"
          >
            <Image
              src={
                folderPath +
                "/" +
                prefix +
                "_motiv" +
                (element != 1 ? element : "") +
                ".jpg"
              }
              className="object-cover"
              alt=""
              width={150}
              height={150}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElementSet;
