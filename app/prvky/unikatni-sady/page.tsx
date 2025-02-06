import Section, { ImageSection } from "@/components/sections/sections";
import { UniqueElementGridSubSection } from "@/components/sections/subsections/elementGridSections";

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
          <div className="w-full">
            <UniqueElementGridSubSection
              setName={"Příměstské Tábory"}
              headerColor={"tabory"}
              elements={[
                { fileName: "Addamsovi_motiv1", folderName: "Tábory" },
                { fileName: "Tajuplný ostrov_motiv1", folderName: "Tábory" },
                { fileName: "Tajuplný ostrov_motiv2", folderName: "Tábory" },
                { fileName: "Tajuplný ostrov_motiv3", folderName: "Tábory" },
                { fileName: "Tajuplný ostrov_motiv4", folderName: "Tábory" },
                { fileName: "Vikingové_motiv1", folderName: "Tábory" },
                { fileName: "Vikingové_motiv2", folderName: "Tábory" },
              ]}
            />
          </div>
          <div className="w-full">
            <UniqueElementGridSubSection
              setName={"Přednášky, workshopy a eventy"}
              headerColor={"black"}
              elements={[
                {
                  fileName: "Plachetnice_motiv1",
                  folderName: "Přednášky, workshopy, eventy",
                },
                {
                  fileName: "Přemyslovci_motiv1",
                  folderName: "Přednášky, workshopy, eventy",
                },
                {
                  fileName: "ŠKODA_motiv1",
                  folderName: "Přednášky, workshopy, eventy",
                },
              ]}
            />
          </div>
          <div className="w-full">
            <UniqueElementGridSubSection
              setName={"Výrobky"}
              headerColor={"black"}
              elements={[
                {
                  fileName: "Vánoční ozdoba_motiv1",
                  folderName: "Výrobky",
                },
                {
                  fileName: "Věnec s ptáčkem_motiv1",
                  folderName: "Výrobky",
                },
              ]}
            />
          </div>
        </div>
      </Section>
    </>
  );
};

export default UnikatniSadyPage;
