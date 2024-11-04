import Section from "@/components/sections/sections";
import ExampleSubSection, {
  CorrectExample,
  ErrorExample,
} from "@/components/sections/subsections/exampleSection";
import NameSubSection, {
  NameSubSectionItem,
} from "@/components/sections/subsections/namesSubsection";
import {
  dilnaDreva,
  dilnaGrafiky,
  dilnaKovu,
  dilnaTextilu,
  eduLab,
  kreativniUceni,
  laboratorChemie,
  laboratorFyziky,
  laboratorITVR,
  laboratorPrirodopisu,
  primestskyTabor,
  scienceOnSphere,
  sferickeHriste,
} from "@/datasets/facilities";

const DatumyPage = () => {
  return (
    <>
      <Section last>
        <h2>Psaní dílen, laboratoří, sálů a spjatých institucí</h2>
        <h3>Dílny</h3>
        <p>
          Názvy dílen píšeme vždy se slovem “Dílna / Laboratoř” a specializací
          za nimi. <strong>Specializace je skloňovaná</strong> (tj. Dílna
          Textilu namísto Dílna Textil). Slova Dílna / Laboratoř jsou důležitá z
          hlediska identity, neboť celá identita SFÉRY stojí na jednotlivých
          specializacích a dělení místností.
        </p>
        <p>
          Používáme-li název dílny/laboratoře v kontextu nadpisu na vizuálních
          materiálech (obvykle v barevném pruhu), použijeme tzv.{" "}
          <strong>“Title Case”</strong> (způsob zápisu, kde všechna slova
          začínají velkým písmenem, s výjimkou předložek, spojek a členů).{" "}
          <strong>
            V obyčejném textu použijeme normální kapitalizaci, která vyplývá z
            věty.
          </strong>
        </p>

        <ExampleSubSection
          correct={
            <>
              <CorrectExample
                content={
                  <>
                    <em>Dílna textilu</em> si připravila workshop.
                  </>
                }
              />

              <CorrectExample
                content={
                  <>
                    <em>Laboratoř Přírodopisu</em>
                  </>
                }
              />

              <CorrectExample
                content={
                  <>
                    Program se koná na <em>sférickém hřišti</em>.
                  </>
                }
              />
            </>
          }
          errors={
            <>
              <ErrorExample
                content={
                  <>
                    Dílna <em>Grafika</em> zaujala veřejnost...
                  </>
                }
                explanation={
                  "špatné skloňování a kapitalizace slova, správně je grafiky"
                }
              />
              <ErrorExample
                content={
                  <>
                    <em>IT/VR</em> hostovalo přednášku.
                  </>
                }
                explanation={"chybí 'Laboratoř'"}
              />
              <ErrorExample
                content={
                  <>
                    Dílna Kovu<em>/ Elektra</em>
                  </>
                }
                explanation={"nadbytečná mezera za lomítkem"}
              />
              <ErrorExample
                content={
                  <>
                    Laboratoř <em>Biologie</em>
                  </>
                }
                explanation={"správně je ‘Přírodopisu’"}
              />
              <ErrorExample
                content={
                  <>
                    Laboratoř <em>Přírodovědy</em>
                  </>
                }
                explanation={"správně je ‘Přírodopisu’"}
              />
              <ErrorExample
                content={
                  <>
                    <em>SFÉRICKÉ</em> Hřiště
                  </>
                }
                explanation={"špatná kapitalizace, správně je Sférické"}
              />
            </>
          }
        />

        <h3>Názvy dílen</h3>
        <NameSubSection>
          <NameSubSectionItem
            facility={dilnaTextilu}
            sentenceUsage="dílnu textilu"
          />
          <NameSubSectionItem
            facility={dilnaGrafiky}
            sentenceUsage="dílnu grafiky"
          />
          <NameSubSectionItem
            facility={dilnaDreva}
            sentenceUsage="dílnu dřeva"
          />
          <NameSubSectionItem
            facility={dilnaKovu}
            sentenceUsage="dílnu kovu/elektra"
          />
        </NameSubSection>

        <h3>Názvy laboratoří</h3>
        <NameSubSection>
          <NameSubSectionItem
            facility={laboratorITVR}
            sentenceUsage="laboratoř IT/VR"
          />
          <NameSubSectionItem
            facility={laboratorFyziky}
            sentenceUsage="laboratoř fyziky"
          />
          <NameSubSectionItem
            facility={laboratorChemie}
            sentenceUsage="laboratoř chemie"
          />
          <NameSubSectionItem
            facility={laboratorPrirodopisu}
            sentenceUsage="laboratoř přírodopisu"
          />
        </NameSubSection>

        <h3>Názvy sálů</h3>
        <NameSubSection>
          <NameSubSectionItem
            facility={scienceOnSphere}
            sentenceUsage="sál Science on a Sphere"
          />
          <NameSubSectionItem
            facility={sferickeHriste}
            sentenceUsage="sférické hřiště"
          />
        </NameSubSection>

        <h3>Názvy institucí, událostí a projektů</h3>

        <NameSubSection>
          <NameSubSectionItem
            facility={kreativniUceni}
            sentenceUsage="kreativní učení"
            customSentence="Probíhá projekt"
          />
          <NameSubSectionItem
            facility={primestskyTabor}
            sentenceUsage="příměstský tábor"
            customSentence="Poslali jsme děti na"
          />
          <NameSubSectionItem
            facility={eduLab}
            sentenceUsage="AI EduLab @ SFÉRA"
            customSentence="Akci zaštiťuje"
          />
        </NameSubSection>
      </Section>
    </>
  );
};

export default DatumyPage;
