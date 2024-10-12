import Section, { ImageSection } from "@/components/sections/sections";
import ElementSubSection, {
  ElementBlock,
} from "@/components/sections/subsections/elementSection";

const SadaMiscPage = () => {
  return (
    <>
      <ImageSection image="/img/pattern-wallpaper.webp" />
      <Section last>
        <h2>Sada prvků &quot;Miscellaneous&quot;</h2>
        <ul>
          <li>
            Obrazová sada <strong>Miscellaneous</strong> (značena písmenem M |
            zkratkou Misc.) byla vytvořena k pojmutí znaků, u kterých je
            očekáváno opakované použití spjaté s určitou dílnou či programem,
            ale tematicky se nehodí mezi zbytek prvků z dané učebny. Tyto
            symboly by neměly být používány mimo jejich primární kontext.
          </li>
        </ul>

        <ElementSubSection>
          <ElementBlock
            image={"/img/prvky/Misc_motiv.jpg"}
            title={"Misc_motiv.jpg"}
            reasoning=""
          >
            Vlajka Spojeného království Velké Británie a Severního Irska
          </ElementBlock>
          <ElementBlock
            image={"/img/prvky/Misc_motiv2.jpg"}
            title={"Misc_motiv2.jpg"}
            reasoning="Používaná hlavně během programu 'S kachničkou kolem světa'"
          >
            Gumová kachnička
          </ElementBlock>
          <ElementBlock
            image={""}
            title={"Misc_motiv3.jpg"}
            reasoning="Prázdné místo vzniklo přesunem původního prvku do Unikátní sady"
          >
            &mdash;v současnosti prázdný prvek&mdash;
          </ElementBlock>
          <ElementBlock
            image={"/img/prvky/Misc_motiv4.jpg"}
            title={"Misc_motiv4.jpg"}
            reasoning="Používán u programů Dílny Grafiky týkajících se heraldiky"
          >
            Heraldický drak in annulo
          </ElementBlock>
        </ElementSubSection>
      </Section>
    </>
  );
};

export default SadaMiscPage;
