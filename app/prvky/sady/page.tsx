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
import Link from "next/link";

const SadyPrvkuPage = () => {
  return (
    <>
      <ImageSection image="/img/pattern-wallpaper.webp" />
      <Section last>
        <h2>Sady prvků</h2>
        <ul className="mb-10">
          <li>
            Níže naleznete jednotlivé sady z původního grafického manuálu pro
            jednotlivé učebny.
          </li>
          <li>
            Některé prvky jsou přešktrnuté&mdash;to znamená, že se jedná o tzv.{" "}
            <strong>zakázaný prvek</strong>. Více o zakázaných prvcích se
            dozvíte na stránce{" "}
            <Link href="/zakazane-prvky">Zakázané prvky</Link>.
          </li>
          <div className="bg-sos p-5 text-white mt-5 border">
            <p>
              Obrázky níže jsou silně zkomprimovány, aby mohly být načteny na
              webu.
            </p>
            <p className="mb-0">
              {" "}
              Prosím{" "}
              <strong>nekopírujte obrázky pro použití v propagaci odsud</strong>
              . Plnou velikost obrázků bez pozadí naleznete na platformě{" "}
              <Link
                href={
                  "https://sferapardubice.sharepoint.com/:f:/s/SFERA/Es0LEpuZCf9PkOHb8IMDEosBaZhIxzIB1I0EofrNn9oUzg?e=QRNKWu"
                }
                target="_blank"
              >
                SharePoint
              </Link>
              .
            </p>
          </div>
        </ul>
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
