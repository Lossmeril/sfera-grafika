import Section, { ImageSection } from "@/components/sections/sections";

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
      </Section>
    </>
  );
};

export default UnikatniSadyPage;
