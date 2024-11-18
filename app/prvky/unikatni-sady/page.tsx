import Section, { ImageSection } from "@/components/sections/sections";
import { UniqueElementGridSubSection } from "@/components/sections/subsections/elementGridSections";
import { uniqueSets } from "@/datasets/elements";

const UnikatniSadyPage = () => {
  return (
    <>
      <ImageSection image="/img/pattern-wallpaper.webp" />
      <Section last>
        <h2>Unikátní sady prvků</h2>
        <p>
          Unikátní sady jsou jednorázové prvky vytvořené pro pouze jedno
          použití. Odlišují se od sady Miscellaneous tím, že se zde neočekává
          jejich opakované použití mimo jednorázové události.
        </p>
        <p>
          <strong>
            Je tedy důrazně doporučeno je nepoužívat mimo jejich původní
            kontext.
          </strong>
        </p>

        <div className="grid grid-cols-2 gap-3">
          {uniqueSets.map((set) => (
            <div key={set.elementPrefix} className="w-full">
              <UniqueElementGridSubSection set={set} />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default UnikatniSadyPage;
