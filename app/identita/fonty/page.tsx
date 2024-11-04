import Section from "@/components/sections/sections";
import { FontBlock } from "@/components/sections/subsections/fontSubSection";

const FontyPage = () => {
  return (
    <>
      <Section last>
        <h2>Fonty a typografie</h2>
        <p>
          SFÉRA používá pro svoji propagaci fonty z rodiny{" "}
          <strong>Youth</strong>.
        </p>

        <FontBlock>
          <p className="text-2xl font-bold">Pro nadpisy používáme Youth Bold</p>
          <p className="font-medium">
            Pro obyčejný text na plakátech a tištěné komunikaci zase Youth
            Medium
          </p>
          <p className="mb-0">
            Na webu se pro lepší čitelnost objevuje Youth Regular. Ten se ale v
            tištěné komunikaci nepoužívá.
          </p>
        </FontBlock>

        <h3>Kolečka</h3>
        <p>
          Speciálně pro sférické účely byl vytvořen
          <strong>Youth Rounded</strong> font, který se objevuje mimo jiné v
          logu. Tento font je spíše pro dekorativní účely a vůbec se nehodí pro
          dlouhé texty.
        </p>

        <FontBlock>
          <p className="text-xl md:text-2xl font-bold mb-0 uppercase font-youthRounded">
            Speciální Youth Rounded
          </p>
        </FontBlock>

        <p className="above-heading mt-16 ">Výjimka</p>
        <h3 className="mb-2 mt-0">
          Font pro kancelářské balíky a e-mailovou komunikaci
        </h3>
        <p>
          V prostředích, kde Youth nemusí být dostupný, nebo kde je zapotřebí
          zvýšená čitelnost (obzvláště ve formální kominikaci), používáme font{" "}
          <strong>Aptos</strong>, který je výchozím fontem kancelářských balíků{" "}
          <strong>Microsoft Office</strong>.
        </p>
        <FontBlock>
          <p className="font-aptos text-2xl font-bold">Aptos</p>
          <p className="font-aptos mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </FontBlock>
      </Section>
    </>
  );
};

export default FontyPage;
