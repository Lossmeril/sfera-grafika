import Section, { ImageSection } from "@/components/sections/sections";
import ElementGridSubSection from "@/components/sections/subsections/elementGridSections";
import {
  dilnaDreva,
  dilnaGrafiky,
  dilnaKovu,
  dilnaTextilu,
  laboratorChemie,
  laboratorFyziky,
  laboratorITVR,
  laboratorPrirodopisu,
  scienceOnSphere,
  sferickeHriste,
} from "@/datasets/facilities";

const SadyPrvkuPage = () => {
  return (
    <>
      <ImageSection image="/img/pattern-wallpaper.webp" />
      <Section last>
        <h2>Sady prvků</h2>
        <ElementGridSubSection facility={dilnaTextilu} />
        <ElementGridSubSection facility={dilnaGrafiky} />
        <ElementGridSubSection facility={dilnaDreva} />
        <ElementGridSubSection facility={dilnaKovu} />

        <ElementGridSubSection facility={laboratorITVR} />
        <ElementGridSubSection facility={laboratorFyziky} />
        <ElementGridSubSection facility={laboratorChemie} />
        <ElementGridSubSection facility={laboratorPrirodopisu} />

        <ElementGridSubSection facility={sferickeHriste} />
        <ElementGridSubSection facility={scienceOnSphere} />
      </Section>
    </>
  );
};

export default SadyPrvkuPage;
