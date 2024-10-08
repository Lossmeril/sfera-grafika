import Image from "next/image";

interface SectionProps {
  children: React.ReactNode;
  last?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, last }) => {
  return (
    <section
      className={"w-full p-8  lg:p-20 " + (last ? "border-b-0" : "border-b")}
    >
      {children}
    </section>
  );
};

export default Section;

interface ImageSectionProps {
  image: string;
  last?: boolean;
  height?: string;
}

export const ImageSection: React.FC<ImageSectionProps> = ({ last, image }) => {
  return (
    <section
      className={
        "h-[175px] relative w-full " + (last ? "border-b-0 " : "border-b ")
      }
    >
      <Image src={image} alt="" fill className="object-cover h-full w-full" />
    </section>
  );
};
