import Section from "@/components/sections/sections";
import ColorSubSection, {
  ColorBlock,
} from "@/components/sections/subsections/colorSubSection";
import ExampleSubSection, {
  CorrectExample,
  ErrorExample,
} from "@/components/sections/subsections/exampleSection";
import Image from "next/image";

const BarvyPage = () => {
  return (
    <>
      <Section last>
        <h2>Barvy SFÉRY</h2>
        <p>SFÉRA používá</p>
        <p>
          Jelikož původní barvy byly vytvořeny ze zaokrouhlených složek modelu
          CMYK, bylo nutné jim vytvořit adekvátní RGB a HEX kódy pro snazší
          práci v digitálním prostoru a na webu. Je stále doporučené užívat CMYK
          kódy, kde je to jen možné.
        </p>
        <h3>Primární barvy</h3>
        <ColorSubSection>
          <ColorBlock
            name={"Bílá"}
            colorName="white"
            HEX={"#FFFFFF"}
            RGB={"255, 255, 255"}
            CMYK={"0, 0, 0, 0"}
            text="black"
          />
          <ColorBlock
            name={"Černá"}
            colorName="black"
            HEX={"#000000"}
            RGB={"0, 0, 0"}
            CMYK={"0, 0, 0, 100"}
            text="white"
          />
        </ColorSubSection>
        <h3>Sekundární barvy</h3>
        <p>
          Sekundární barvy jsou barvy reprezentující dílny, laboratoře, sály a
          občasně i projekty a akce. Používají především se v barevných pruzích
          reprezentujících místnost.
        </p>
        <p>
          Text na barevném pruhu je vždy <strong>bílý</strong>.
        </p>

        <ColorSubSection>
          <ColorBlock
            name={"Dílna Grafiky"}
            colorName="grafika"
            HEX={"#F7941D"}
            RGB={"247, 148, 29"}
            CMYK={"0, 50, 100, 0"}
            text="white"
          />

          <ColorBlock
            name={"Dílna Textilu"}
            colorName="textil"
            HEX={"#FFCB04"}
            RGB={"255, 203, 4"}
            CMYK={"0, 20, 100, 0"}
            text="white"
          />

          <ColorBlock
            name={"Dílna Dřeva"}
            colorName="drevo"
            HEX={"#7E5228"}
            RGB={"126, 82, 40"}
            CMYK={"35, 60, 85, 40"}
            text="white"
          />

          <ColorBlock
            name={"Dílna Kovu/Elektra"}
            colorName="kov"
            HEX={"#AFCA0B"}
            RGB={"175, 202, 11"}
            CMYK={"40, 0, 100, 0"}
            text="white"
          />

          <ColorBlock
            name={"Laboratoř IT/VR"}
            colorName="it"
            HEX={"#83D0F5"}
            RGB={"131, 208, 245"}
            CMYK={"50, 0, 0, 0"}
            text="white"
          />

          <ColorBlock
            name={"Laboratoř Fyziky"}
            colorName="fyzika"
            HEX={"#EC619F"}
            RGB={"236, 97, 159"}
            CMYK={"0, 75, 0, 0"}
            text="white"
          />

          <ColorBlock
            name={"Laboratoř Chemie"}
            colorName="chemie"
            HEX={"#EC619F"}
            RGB={"104, 89, 163"}
            CMYK={"70, 70, 0, 0"}
            text="white"
          />

          <ColorBlock
            name={"Laboratoř Přírodopisu"}
            colorName="prirodopis"
            HEX={"#004F9F"}
            RGB={"0, 79, 159"}
            CMYK={"100, 70, 0, 0"}
            text="white"
          />

          <ColorBlock
            name={"Sál Science on a Sphere"}
            colorName="sos"
            HEX={"#E74011"}
            RGB={"231, 64, 17"}
            CMYK={"0, 85, 100, 0"}
            text="white"
          />

          <ColorBlock
            name={"Sfériské Hřiště"}
            colorName="hriste"
            HEX={"#3FA535"}
            RGB={"63, 165, 53"}
            CMYK={"75, 5, 100, 0"}
            text="white"
          />
        </ColorSubSection>

        <ExampleSubSection
          correct={
            <>
              <CorrectExample
                content={
                  <>
                    <div className="w-full bg-grafika h-7 border text-white text-center font-bold">
                      Dílna Grafiky
                    </div>
                  </>
                }
              />
            </>
          }
          errors={
            <>
              <ErrorExample
                content={
                  <div className="w-full bg-grafika h-7 border text-black text-center font-bold">
                    Dílna Grafiky
                  </div>
                }
                explanation={"text je černý na hlavní barvě"}
              />
            </>
          }
        />

        <h3>Nové sekundární barvy</h3>
        <h4>Kreativní učení</h4>
        <p>
          Vzhledem na potřebu samostatného vyjmutí z ostatních programů a jejich
          multioborovost, byla vytvořena světle-petrolejová barva.
        </p>
        <h4>Příměstské tábory</h4>
        <p className="mb-10">
          Původně neměly příměstské tábory používat žádnou barvu, ale jejich
          plakáty trpěly absencí barevného pruhu, který na první pohled zaujme.
          K přihlédnutím k jejich multioborovosti, začalo na ně být nahlíženo
          jako na samostatnou lokaci a byla jim vytvořena lososová barva.
        </p>
        <ColorSubSection>
          <ColorBlock
            name={"Kreativní Učení"}
            colorName="kreativniuceni"
            HEX={"#4AA1AE"}
            RGB={"74, 161, 174"}
            CMYK={"70, 20, 30, 0"}
            text="white"
          />
          <ColorBlock
            name={"Příměstský Tábor"}
            colorName="tabory"
            HEX={"#F37053"}
            RGB={"243, 112, 83"}
            CMYK={"0, 70, 70, 0"}
            text="white"
          />
        </ColorSubSection>

        <h3 id="podkladove-barvy">Podkladové barvy</h3>
        <p>
          Podkladové barvy jsou používány především v tiskovinách k obohacení
          vzhledu gridu. Podbarven je vždy čtverec, ve kterém se nachází prvek z
          obrazové sady. Vzhledem k využití především v tiskovinách, jsou barvy
          uváděny pouze v CMYK hodnotách.
        </p>
        <p>
          Pakliže tiskovina obsahuje tři a více čtverců s prvkem z obrazových
          sad, je doporučené nechat minimálně jeden z čtverců bez podkladové
          výplně.
        </p>
        <div className="bg-accent-pink p-5 my-5 ">
          <p className="mb-0">
            Sekundární barvy ani černá se nikdy nemůže objevit jako podklad pro
            symbol ze sady prvků.
          </p>
        </div>
        <ColorSubSection>
          <ColorBlock
            name={"Podkladová růžová"}
            colorName="accent-pink"
            HEX={"#f7cadf"}
            RGB={""}
            CMYK={"0, 20, 0, 0"}
            text="black"
          />
          <ColorBlock
            name={"Podkladová červená"}
            colorName="accent-red"
            HEX={"#fac5aa"}
            RGB={""}
            CMYK={"0, 21, 25, 0"}
            text="black"
          />
          <ColorBlock
            name={"Podkladová oranžová"}
            colorName="accent-orange"
            HEX={"#fedbb3"}
            RGB={""}
            CMYK={"0, 12, 25, 0"}
            text="black"
          />
          <ColorBlock
            name={"Podkladová žlutá"}
            colorName="accent-yellow"
            HEX={"#fffa9e"}
            RGB={""}
            CMYK={"0, 0, 40, 0"}
            text="black"
          />
          <ColorBlock
            name={"Podkladová zelinkavá"}
            colorName="accent-lime"
            HEX={"#e1eebf"}
            RGB={""}
            CMYK={"10, 0, 25, 0"}
            text="black"
          />

          <ColorBlock
            name={"Podkladová zelená"}
            colorName="accent-green"
            HEX={"#b7dca9"}
            RGB={""}
            CMYK={"10, 0, 25, 0"}
            text="black"
          />

          <ColorBlock
            name={"Podkladová modrá"}
            colorName="accent-blue"
            HEX={"#8dd5f8"}
            RGB={""}
            CMYK={"35, 0, 0, 0"}
            text="black"
          />

          <ColorBlock
            name={"Podkladová fialová"}
            colorName="accent-purple"
            HEX={"#a2adcd"}
            RGB={""}
            CMYK={"30, 20, 5, 0"}
            text="black"
          />

          <ColorBlock
            name={"Podkladová hnědá"}
            colorName="accent-brown"
            HEX={"#c2b5aa"}
            RGB={""}
            CMYK={"20, 20, 25, 0"}
            text="black"
          />

          <ColorBlock
            name={"Podkladová šedá"}
            colorName="accent-gray"
            HEX={"#cacaca"}
            RGB={""}
            CMYK={"0, 0, 0, 20"}
            text="black"
          />
        </ColorSubSection>

        <ExampleSubSection
          correct={
            <>
              <CorrectExample
                content={
                  <>
                    <div className="w-60 aspect-square bg-accent-pink border">
                      <Image
                        src="/img/example-prvek.webp"
                        width={240}
                        height={240}
                        alt="Příklad prvku"
                      />
                    </div>
                  </>
                }
              />
            </>
          }
          errors={
            <>
              <ErrorExample
                content={
                  <div className="w-60 aspect-square bg-fyzika border">
                    <Image
                      src="/img/example-prvek.webp"
                      width={240}
                      height={240}
                      alt="Příklad prvku"
                    />
                  </div>
                }
                explanation={"sekundární barva podkladem"}
              />
            </>
          }
        />
      </Section>
    </>
  );
};

export default BarvyPage;
